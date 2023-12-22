import { useEffect, useContext, useState } from 'react'
import { KTIcon } from '../../../../../../_metronic/helpers'
import { useDispatch, useSelector } from 'react-redux'
import { insuranceValidationSchema } from '../__request/ValidationSchema'
import {
  postInsuranceDataReq,
  showInsuranceDataReq,
  updateInsuranceDataReq,
} from '../__request/RequestInsurance'
import { setDataContext } from '../../../../../utilities/SettingContext'
import { ERROR_ALERT_ADMIN } from '../../../../../utilities/AlertMsgConstant'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import SubmitButton from '../../../../../utilities/SubmitButton'
import InputMask from 'react-input-mask'
import { LoadingBar } from '../../../../../utilities/LoadingBar'
import ApiErrorMessages from '../../../../../utilities/ApiErrorMessages'
import { showInsuranceIdAction } from '../../../../../redux/action'
import { useDropzone } from 'react-dropzone'

const AddUpdateInsuranceForm = () => {
  const patientViewState = useSelector((state) => state.patientIdShowReducerComp)
  const insuranceEditState = useSelector((state) => state.insuranceIdEditReducer)
  const userProfile = useSelector((state) => state.userReducerComp)
  const {
    patientRefresh,
    patientData,
    setPatientRefresh,
    loadingForm,
    setLoadingForm,
    setImgUrl,
  } = useContext(setDataContext)
  const [subscriber_typee, setsubscriber_typee] = useState()
  const initialValues = {
    patient_id: patientData.id,
    level: '',
    status: '',
    effective_date: '',
    expiration_date: '',
    payer_id: '',
    payer_name: '',
    payer_address: '',
    payer_class: '',
    payer_type: '',
    subscriber_type: 'self',
    plan_name: '',
    group_no: '',
    type_code: '',
    subscriber_id: '',
    copay_amount: '',
    coins_amount: '',
    title: '',
    insured_first_name: patientData.first_name,
    insured_middle_name: patientData.middle_name,
    insured_last_name: patientData.last_name,
    insured_dob: patientData.dob,
    insured_gender: patientData.gender,
    insured_street1: patientData.street,
    insured_street2: patientData.street2,
    insured_city: patientData.city,
    insured_state: patientData.state,
    insured_zipcode: patientData.zip_code,
    insured_phone: patientData.hphone,
  }
  const initialValues2 = {
    patient_id: patientData.id,
    level: '',
    status: '',
    effective_date: '',
    expiration_date: '',
    payer_id: '',
    payer_name: '',
    payer_address: '',
    payer_class: '',
    payer_type: '',
    subscriber_type: subscriber_typee,
    plan_name: '',
    group_no: '',
    type_code: '',
    subscriber_id: '',
    copay_amount: '',
    coins_amount: '',
    title: '',
    insured_first_name: '',
    insured_middle_name: '',
    insured_last_name: '',
    insured_dob: '',
    insured_gender: patientData.gender,
    insured_street1: patientData.street,
    insured_street2: patientData.street2,
    insured_city: patientData.city,
    insured_state: patientData.state,
    insured_zipcode: patientData.zip_code,
    insured_phone: patientData.hphone,
  }
  const { values, setValues, errors, touched, handleBlur, handleChange, handleSubmit, resetForm } =
    useFormik({
      initialValues: initialValues,
      validationSchema: insuranceValidationSchema,
      onSubmit: (values) => {
        if (insuranceEditState === null) {
          values.company_id = userProfile.company.id
          addInsurances(values)
        } else {
          values.patient_id = patientViewState
          updateInsurance(values)
        }
      },
    })
  const navigate = useNavigate()
  const [btnLoading, setBtnLoading] = useState(false)
  const [err, setErr] = useState(false)
  const [errIdMsg, setErrIdMsg] = useState('')

  const updateInsurance = async (handleinput) => {
    setBtnLoading(true)
    try {
      const formData = new FormData()
      if (front_card_image) {
        formData.append('front_card_image', front_card_image)
      }
      if (back_card_image) {
        formData.append('back_card_image', back_card_image)
      }
      for (const key in handleinput) {
        formData.append(key, handleinput[key])
      }
      const response = await updateInsuranceDataReq(insuranceEditState, formData)
      toast.success(response.data.message)
      navigate('/patient/detail/insurance')
      setPatientRefresh(true)
    } catch (error) {
      if (error.response.status === 422) {
        setErrIdMsg(error.response.data.data)
        setErr(true)
      } else {
        toast.error(ERROR_ALERT_ADMIN)
      }
    } finally {
      setBtnLoading(false)
    }
  }

  const dispatch = useDispatch()
  const insuranceSingleData = async () => {
    setLoadingForm(true)
    try {
      const response = await showInsuranceDataReq(insuranceEditState)
      const insuranceData = response.data.data
      const updatedValues = {
        ...values,
        ...insuranceData,
        patient_id: patientData.id,
        gender: patientData.gender,
        street: patientData.street,
        street2: patientData.street2,
        city: patientData.city,
        state: patientData.state,
        zip_code: patientData.zip_code,
        hphone: patientData.hphone,
      }
      setValues(updatedValues)

      setLoadingForm(false)
      dispatch(showInsuranceIdAction(null))
    } catch (error) {
      setLoadingForm(false)
    }
  }

  const addInsurances = async (handleinput) => {
    const formData = new FormData()
    if (front_card_image) {
      formData.append('front_card_image', front_card_image)
    }
    if (back_card_image) {
      formData.append('back_card_image', back_card_image)
    }
    for (const key in handleinput) {
      formData.append(key, handleinput[key])
    }
    // console.log(formData);
    setBtnLoading(true)
    try {
      const response = await postInsuranceDataReq(formData)
      navigate('/patient/detail/insurance')
      toast.success(response.data.message)
      setErr(false)
      setBtnLoading(false)
      setPatientRefresh(true)
      setLoadingForm(true)
      resetForm()
    } catch (error) {
      if (error.response.status === 422) {
        setErrIdMsg(error.response.data.data)
        setErr(true)
        setBtnLoading(false)
        toast.error('There is An Issue!')
        return false
      } else {
        toast.error(ERROR_ALERT_ADMIN)
      }
    }
  }

  const resetState = () => {
    setErr(false)
    setErrIdMsg('')
    setLoadingForm(false)
  }

  useEffect(() => {
    if (insuranceEditState && loadingForm) {
      insuranceSingleData()
      resetState()
    } else {
      setValues(initialValues)
      resetState()
      resetForm()
    }
  }, [patientRefresh, insuranceEditState, loadingForm])

  useEffect(() => {
    if (subscriber_typee === 'self') {
      setValues(initialValues)
    } else if (
      subscriber_typee === 'spouse' ||
      subscriber_typee === 'child' ||
      subscriber_typee === 'other'
    ) {
      setValues(initialValues2)
    }
  }, [subscriber_typee])

  const [front_card_image, setFrontImage] = useState(null)
  const [back_card_image, setBackImage] = useState(null)
  const [frontImageError, setFrontImageError] = useState(false)
  const { getRootProps: getFrontRootProps, getInputProps: getFrontInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0]
      if (file.type.startsWith('image/')) {
        setFrontImage(file) //URL.createObjectURL(acceptedFiles[0])
      } else {
        setFrontImageError(true)
      }
    },
  })

  const [backImageError, setBackImageError] = useState(false)
  const { getRootProps: getBackRootProps, getInputProps: getBackInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0]
      if (file.type.startsWith('image/')) {
        setBackImage(file)
      } else {
        setBackImageError(true)
      }
    },
  })

  const removeFrontImage = () => {
    setFrontImage(null)
    setFrontImageError(false)
  }

  const removeBackImage = () => {
    setBackImage(null)
    setBackImageError(false)
  }

  return (
    <>
      {loadingForm ? (
        <LoadingBar />
      ) : (
        <form onSubmit={handleSubmit}>
          <ApiErrorMessages errorcheck={err} errormsg={errIdMsg} />
          <>
            <div className='row mb-10'>
              <div className='col-4'>
                {values && values.card_front_img_path ? (
                  <a
                    href='#'
                    onClick={() => setImgUrl(`http://api.neomd.ca${values.card_front_img_path}`)}
                    id='kt_insuranceimage_toggle'
                  >
                    <img
                      src={`http://api.neomd.ca${values.card_front_img_path}`}
                      alt='img'
                      height={'250px'}
                      width={'320px'}
                      style={{ marginBottom: '25px' }}
                    />
                  </a>
                ) : (
                  <div></div>
                )}

                <div className='col-12 mb-5'>
                  <div {...getFrontRootProps()} className='image-dropzone mb-5'>
                    <input
                      {...getFrontInputProps()}
                      name='front_card_image'
                      type='file'
                      onChange={(e) => setFrontImage(e.target.files[0])}
                    />
                    {front_card_image ? (
                      <div className='image-container'>
                        <img
                          src={URL.createObjectURL(front_card_image)}
                          alt='Front Side'
                          style={{ width: '320px', height: '250px' }}
                        />
                      </div>
                    ) : (
                      <>
                        <div role='presentation' tabIndex='0' className='dropzone'>
                          <p className='text-center align-middle'>Drag or Add Front Image</p>
                        </div>

                        {frontImageError && (
                          <div className='error-message text-danger'>
                            Please upload an image (JPG, PNG, GIF, etc.).
                          </div>
                        )}
                      </>
                    )}
                  </div>
                  {front_card_image ? (
                    <button
                      onClick={() => removeFrontImage()}
                      className='btn btn-danger btn-sm'
                      style={{ alignSelf: 'center' }}
                    >
                      Remove Image
                    </button>
                  ) : null}
                </div>

                <div>
                  {values && values.card_front_img_path ? (
                    <a
                      href='#'
                      onClick={() => setImgUrl(`http://api.neomd.ca${values.card_back_img_path}`)}
                      id='kt_insuranceimage_toggle'
                    >
                      <img
                        src={`http://api.neomd.ca${values.card_back_img_path}`}
                        alt='img'
                        height={'250px'}
                        width={'320px'}
                        style={{ marginBottom: '25px' }}
                      />
                    </a>
                  ) : (
                    <div></div>
                  )}
                </div>

                <div className='col-12'>
                  <div {...getBackRootProps()} className='image-dropzone mb-5'>
                    <input
                      {...getBackInputProps()}
                      name='back_card_image'
                      type='file'
                      onChange={(e) => setBackImage(e.target.files[0])}
                    />
                    {back_card_image ? (
                      <div className='image-container'>
                        <img
                          src={URL.createObjectURL(back_card_image)}
                          alt='Back Side'
                          style={{ width: '320px', height: '250px' }}
                        />
                      </div>
                    ) : (
                      <>
                        <div className='add-icon'>
                          <div role='presentation' tabIndex='0' className='dropzone'>
                            <p className=''>Drag or Add Back Image</p>
                          </div>
                        </div>

                        {backImageError && (
                          <div className='error-message text-danger'>
                            Please upload an image (JPG, PNG, GIF, etc.).
                          </div>
                        )}
                      </>
                    )}
                  </div>
                  {back_card_image ? (
                    <button
                      onClick={() => removeBackImage()}
                      className='btn btn-danger btn-sm'
                      style={{ alignSelf: 'center' }}
                    >
                      Remove Image
                    </button>
                  ) : null}
                </div>
              </div>

              <div className='col-8'>
                <div className='row mb-10'>
                  <div className='col-3'>
                    <label className='form-label required'>Insurance Level</label>
                    <select
                      name='level'
                      className={`form-select ${errors.level && touched.level ? 'border border-danger' : ''
                        } `}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.level}
                    >
                      <option value='#'>Choose..</option>
                      <option value='primary'>Primary</option>
                      <option value='secondary'>Secondary</option>
                      <option value='tertiary'>Tertiary</option>
                      <option value='other'>Other</option>
                    </select>
                    {errors.level && touched.level ? (
                      <div className='text-danger'>{errors.level}</div>
                    ) : null}
                  </div>

                  <div className='col-3'>
                    <label className='form-label required'>Insurance Status</label>
                    <select
                      className={`form-select ${errors.status && touched.status ? 'border border-danger' : ''
                        } `}
                      name='status'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.status}
                    >
                      <option value='#'>Choose..</option>
                      <option value='active'>Active </option>
                      <option value='inactive'>Inactive </option>
                      <option value='not Requested'>Not Requested </option>
                      <option value='invalid'>Invalid </option>
                      <option value='not found'>Not Found </option>
                      <option value='found'>Found </option>
                    </select>
                    {errors.status && touched.status ? (
                      <div className='text-danger'>{errors.status}</div>
                    ) : null}
                  </div>

                  <div className='col-3'>
                    <label className='form-label '>Effective</label>
                    <input
                      type='date'
                      name='effective_date'
                      className='form-control'
                      placeholder='Type Here..'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.effective_date || ''}
                    />
                  </div>

                  <div className='col-3'>
                    <label className='form-label'>Expiration Date</label>
                    <input
                      type='date'
                      name='expiration_date'
                      className={`form-control`}
                      placeholder='Type Here..'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.expiration_date || ''}
                    />
                  </div>
                </div>
                <div className='row mb-10'>
                  <div className='col-3 '>
                    <label className='form-label required'>Payer ID</label>
                    <input
                      type='text'
                      name='payer_id'
                      className={`form-control ${errors.payer_id && touched.payer_id ? 'border border-danger' : ''
                        } `}
                      placeholder='Type Here..'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.payer_id || ''}
                    />
                    {errors.payer_id && touched.payer_id ? (
                      <div className='text-danger'>{errors.payer_id}</div>
                    ) : null}
                  </div>

                  <div className='col-3 '>
                    <label className='form-label required'>Payer Name</label>
                    <input
                      type='text'
                      name='payer_name'
                      className={`form-control ${errors.payer_name && touched.payer_name ? 'border border-danger' : ''
                        } `}
                      placeholder='Type Here..'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.payer_name || ''}
                    />
                    {errors.payer_name && touched.payer_name ? (
                      <div className='text-danger'>{errors.payer_name}</div>
                    ) : null}
                  </div>
                  <div className='col-3 '>
                    <label className='form-label'>Payer Address</label>
                    <input
                      type='text'
                      name='payer_address'
                      className={`form-control`}
                      placeholder='Type Here..'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.payer_address || ''}
                    />
                  </div>
                  <div className='col-3 '>
                    <label className='form-label required'>Payer Class</label>
                    <input
                      type='text'
                      name='payer_class'
                      className={`form-control ${errors.payer_class && touched.payer_class ? 'border border-danger' : ''
                        } `}
                      placeholder='Type Here..'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.payer_class || ''}
                    />
                    {errors.payer_class && touched.payer_class ? (
                      <div className='text-danger'>{errors.payer_class}</div>
                    ) : null}
                  </div>
                </div>
                <div className='row mb-10'>
                  <div className='col-3 '>
                    <label className='form-label '>Payer Type</label>
                    <input
                      type='text'
                      name='payer_type'
                      className='form-control'
                      placeholder='Type Here..'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.payer_type || ''}
                    />
                  </div>

                  <div className='col-3'>
                    <label className='form-label'>Plan Name</label>
                    <input
                      type='text'
                      name='plan_name'
                      className={`form-control`}
                      placeholder='Type Here..'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.plan_name || ''}
                    />
                  </div>

                  <div className='col-3'>
                    <label className='form-label'>Group No.</label>
                    <input
                      type='text'
                      name='group_no'
                      className={`form-control`}
                      placeholder='Type Here..'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.group_no || ''}
                    />
                  </div>

                  <div className='col-3'>
                    <label className='form-label'>Insurance Type Code</label>
                    <input
                      type='text'
                      name='type_code'
                      className={`form-control`}
                      placeholder='Type Here..'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.type_code || ''}
                    />
                  </div>
                </div>
                <div className='row mb-10'>
                  <div className='col-3'>
                    <label className='form-label required'>Insurance ID</label>
                    <input
                      type='text'
                      name='subscriber_id'
                      className={`form-control ${errors.subscriber_id && touched.subscriber_id ? 'border border-danger' : ''
                        } `}
                      placeholder='Type Here..'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.subscriber_id || ''}
                    />
                    {errors.subscriber_id && touched.subscriber_id ? (
                      <div className='text-danger'>{errors.subscriber_id}</div>
                    ) : null}
                  </div>

                  <div className='col-3 '>
                    <label className='form-label'>Co-Pay Amount</label>
                    <input
                      type='number'
                      name='copay_amount'
                      className={`form-control`}
                      placeholder='Type Here..'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.copay_amount || ''}
                    />
                  </div>

                  <div className='col-3 '>
                    <label className='form-label'>Co-Insurance Amount</label>
                    <input
                      type='number'
                      name='coins_amount'
                      className={`form-control`}
                      placeholder='Type Here..'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.coins_amount || ''}
                    />
                  </div>
                </div>
                <div className='row mb-10'>
                  <h1>Insured Information</h1>
                  <div className='row mb-10'>
                    <div className='col-3'>
                      <label className='form-label'>Patient Relationship</label>
                      <select
                        className='form-select'
                        name='subscriber_type'
                        onChange={(e) => setsubscriber_typee(e.target.value)}
                        value={values.subscriber_type}
                      >
                        <option value='self'>Self</option>
                        <option value='spouse'>Spouse</option>
                        <option value='child'>Child</option>
                        <option value='other'>Other</option>
                      </select>
                    </div>
                  </div>
                  <>
                    <div className='row mb-10'>
                      <div className='col-3'>
                        <label className='form-label required'>Insurer First Name</label>
                        <input
                          type='text'
                          name='insured_first_name'
                          placeholder='Type Here...'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.insured_first_name || ''}
                          className={`form-control 
                                                        ${errors.insured_first_name &&
                              touched.insured_first_name
                              ? 'border border-danger'
                              : ''
                            } `}
                        />
                        {errors.insured_first_name && touched.insured_first_name ? (
                          <div className='text-danger'>{errors.insured_first_name}</div>
                        ) : null}
                      </div>

                      <div className='col-3'>
                        <label className='form-label'>Insurer Middle Name</label>
                        <input
                          type='text'
                          name='insured_middle_name'
                          placeholder='Type Here..'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.insured_middle_name || ''}
                          className='form-control'
                        />
                      </div>
                      <div className='col-3'>
                        <label className='form-label required'>Insurer Last Name</label>
                        <input
                          type='text'
                          name='insured_last_name'
                          placeholder='Type Here..'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.insured_last_name || ''}
                          className={`form-control ${errors.insured_last_name && touched.insured_last_name
                            ? 'border border-danger'
                            : ''
                            } `}
                        />
                        {errors.insured_last_name && touched.insured_last_name ? (
                          <div className='text-danger'>{errors.insured_last_name}</div>
                        ) : null}
                      </div>

                      <div className='col-3'>
                        <label className='form-label required'>Insurer DOB</label>
                        <input
                          type='date'
                          name='insured_dob'
                          placeholder='Type Here..'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.insured_dob || ''}
                          className={`form-control ${errors.insured_dob && touched.insured_dob ? 'border border-danger' : ''
                            } `}
                        />
                        {errors.insured_dob && touched.insured_dob ? (
                          <div className='text-danger'>{errors.insured_dob}</div>
                        ) : null}
                      </div>
                    </div>

                    <div className='row mb-10 '>
                      <div className='col-3'>
                        <label className='form-label required'>Insurer Gender</label>
                        <select
                          name='insured_gender'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.insured_gender}
                          className={`form-select ${errors.insured_gender && touched.insured_gender
                            ? 'border border-danger'
                            : ''
                            }`}
                        >
                          <option value=''>Select Gender</option>
                          <option value='Male'>Male</option>
                          <option value='Female'>Female</option>
                        </select>
                        {errors.insured_gender && touched.insured_gender ? (
                          <div className='text-danger'>{errors.insured_gender || ''}</div>
                        ) : null}
                      </div>
                      <div className='col-6'>
                        <label className='form-label required'>Insurer Address 1</label>
                        <input
                          type='text'
                          name='insured_street1'
                          placeholder='Type Here..'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.insured_street1 || ''}
                          className={`form-control ${errors.insured_street1 && touched.insured_street1
                            ? 'border border-danger'
                            : ''
                            }`}
                        />
                        {errors.insured_street1 && touched.insured_street1 ? (
                          <div className='text-danger'>{errors.insured_street1 || ''}</div>
                        ) : null}
                      </div>

                      <div className='col-3 '>
                        <label className='form-label'>Insurer Address 2</label>
                        <input
                          type='text'
                          name='insured_street2'
                          className={`form-control`}
                          placeholder='Type Here..'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.insured_street2 || ''}
                        />
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-3'>
                        <label className='form-label required'>Insurer City</label>
                        <input
                          type='text'
                          name='insured_city'
                          placeholder='Type Here..'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.insured_city || ''}
                          className={`form-control ${errors.insured_city && touched.insured_city
                            ? 'border border-danger'
                            : ''
                            }`}
                        />
                        {errors.insured_city && touched.insured_city ? (
                          <div className='text-danger'>{errors.insured_city || ''}</div>
                        ) : null}
                      </div>
                      <div className='col-3'>
                        <label className='form-label required'>Insurer State</label>
                        <input
                          type='text'
                          name='insured_state'
                          placeholder='Type Here..'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.insured_state || ''}
                          className={`form-control ${errors.insured_state && touched.insured_state
                            ? 'border border-danger'
                            : ''
                            }`}
                        />
                        {errors.insured_state && touched.insured_state ? (
                          <div className='text-danger'>{errors.insured_state || ''}</div>
                        ) : null}
                      </div>
                      <div className='col-3 '>
                        <label className='form-label required'>Insurer Zip</label>
                        <input
                          type='text'
                          name='insured_zipcode'
                          placeholder='Type Here..'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.insured_zipcode || ''}
                          className={`form-control ${errors.insured_zipcode && touched.insured_zipcode
                            ? 'border border-danger'
                            : ''
                            }`}
                        />
                        {errors.insured_zipcode && touched.insured_zipcode ? (
                          <div className='text-danger'>{errors.insured_zipcode || ''}</div>
                        ) : null}
                      </div>

                      <div className='col-3'>
                        <label className='form-label'>Insurer Phone</label>
                        <InputMask
                          mask='(999)999-9999'
                          name='insured_phone'
                          type='text'
                          className='form-control'
                          placeholder='(---)--- ----'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.insured_phone || ''}
                        />
                      </div>
                    </div>
                  </>
                </div>
              </div>
            </div>
            <div className='card-footer d-flex justify-content-between' id='kt_insurance_footer'>
              <div className='mt-2'>
                <SubmitButton
                  btnLoading={btnLoading}
                  title={!insuranceEditState ? 'Save Insurance' : 'Update Insurance'}
                  callback_event={handleSubmit}
                  class_name='btn btn-primary'
                />
              </div>
              <div>
                <button
                  type='button'
                  className='btn btn-bg-body text-primary mt-2'
                  id='kt_insurance_close'
                >
                  Back
                  <KTIcon iconName='arrow-right' className='fs-3 text-primary' />
                </button>
              </div>
            </div>
          </>
        </form>
      )}
    </>
  )
}

export default AddUpdateInsuranceForm
