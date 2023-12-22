import { useEffect, useState } from 'react'
import {
  getOptionData,
  getPatientLocation,
  showPatientDataReq,
  updatePatientDataReq,
} from '../__request/RequestPatient'
import InputMask from 'react-input-mask'
import { useFormik } from 'formik'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate, useParams } from 'react-router'
import { ERROR_ALERT_ADMIN } from '../../../utilities/AlertMsgConstant'
import ErrorMessages from '../../../utilities/ApiErrorMessages'
import SubmitButton from '../../../utilities/SubmitButton'
import { ValidationSchema } from '../__request/ValidationSchema'
import { KTIcon } from '../../../../_metronic/helpers'
import { Link } from 'react-router-dom'
import { LoadingBar } from '../../../utilities/LoadingBar'
import { showPatientIdAction } from '../../../redux/action'
import { useDispatch } from 'react-redux'
import { useDropzone } from 'react-dropzone'

const EditPatients = () => {
  const [patientLoading, setPatientLoading] = useState(true)
  const [patientImage, setPatientImage] = useState(null)
  const initialValues = {
    title: '',
    first_name: '',
    middle_name: '',
    last_name: '',
    suffix: '',
    dob: '',
    gender: '',
    marital_status: '',
    hphone: '',
    wphone: '',
    wphone_ext: '',
    mobile: '',
    email: '',
    ssn: '',
    facility_id: '',
    race: '',
    ethnicity: '',
    gender_identity: '',
    sexual_orientation: '',
    language: '',
    occupation: '',
    education: '',
    street: '',
    street2: '',
    city: '',
    state: '',
    zip_code: '',
    remarks: '',
    is_active: true,
    company_id: 1,
  }

  const { values, errors, touched, setValues, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: ValidationSchema,
    onSubmit: (values) => {
      updateSetting(values)
    },
  })

  const navigate = useNavigate()
  const [btnLoading, setBtnLoading] = useState(false)
  const [err, setErr] = useState(false)
  const [errIdMsg, setErrIdMsg] = useState('')


  const params = useParams()
  // single data
  const dispatch = useDispatch()
  const getPatientDataObj = async () => {
    try {
      const response = await showPatientDataReq(params.id)
      const resObj = response.data.data
      setValues(resObj)
      dispatch(showPatientIdAction(null))
    } catch (error) {
      toast.error(ERROR_ALERT_ADMIN)
    }
  }

  // option data
  const updateSetting = async (handleinput) => {
    setPatientLoading(true);
    setBtnLoading(true);

    try {
      const formData = new FormData();

      if (patientImage) {
        formData.append('patient_image', patientImage);
      }

      for (const key in handleinput) {
        const value = handleinput[key];

        if (value !== null && value !== undefined && value !== '') {
          formData.append(key, value);
        }
      }

      const response = await updatePatientDataReq(params.id, formData);
      setBtnLoading(false);
      navigate('/patient/list');
      setPatientLoading(false);
      toast.success(response.data.message);
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setErrIdMsg(error.response.data.data);
        setBtnLoading(false);
        setErr(true);
        return false;
      } else {
        toast.error(ERROR_ALERT_ADMIN);
      }
      setPatientLoading(false);
    }
  };

  const [patientOption, setPatientOption] = useState([])
  const [defaultLocation, setDefaultLocation] = useState([])

  // fetch request
  const optionsData = async () => {
    setPatientLoading(true)
    try {
      const response = await getOptionData()
      setPatientOption(response.data.data)
      setPatientLoading(false)
    } catch (error) {
      console.error(error)
    }
    setPatientLoading(false)
  }

  const getLocationOption = async () => {
    try {
      const response = await getPatientLocation()
      setDefaultLocation(response.data.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (patientLoading) {
      getPatientDataObj()
      optionsData()
      getLocationOption()
    }
  }, [patientLoading])


  const [patientImageError, setPatientImageError] = useState(false)
  const { getRootProps: getFrontRootProps, getInputProps: getFrontInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0]
      if (file.type.startsWith('image/')) {
        setPatientImage(file)
      } else {
        setPatientImageError(true)
      }
    },
  })
  const removeFrontImage = () => {
    setPatientImage(null)
    setPatientImageError(false)
  }

  return (
    <>
      <ErrorMessages errorcheck={err} errormsg={errIdMsg} />
      {
        patientLoading ? (<LoadingBar />) : (
          <form enableReinitialize={true} onSubmit={handleSubmit}>
            <div className="card mb-5 mb-xl-10">
              <div className="card-header cursor-pointer">
                <div className="card-title m-0">
                  <h3 className="fw-bold m-0">Patient Demographics</h3>
                </div>
              </div>
              <div className='card-body'>

                <div className="row">
                  <div className="col-lg-3">
                    {values && values.patient_image_path ? (
                      <a
                        href='#'
                        // onClick={() => setImgUrl(`http://api.neomd.ca${values.card_front_img_path}`)}
                        id='kt_insuranceimage_toggle'
                      >
                        <img
                          src={`http://api.neomd.ca${values.patient_image_path}`}
                          alt='img'
                          height={'250px'}
                          width={'240px'}
                          style={{ marginBottom: '25px' }}
                        />
                      </a>
                    ) : (
                      <div></div>
                    )}

                    <div className='col-12 mb-5'>
                      <div {...getFrontRootProps()} className="dropzone" id="kt_dropzonejs_example_1">
                        <input
                          {...getFrontInputProps()}
                          name='patient_image'
                          type='file'
                          onChange={(e) => setPatientImage(e.target.files[0])}
                        />
                        <div className="dz-message needsclick">
                          <i className="ki-duotone ki-file-up fs-3x text-primary">
                            <span className="path1" />
                            <span className="path2" />
                          </i>
                          <div className="ms-4">
                            <h3 className="fs-5 fw-bold text-gray-900 mb-1">
                              Drop files here or click to upload.
                            </h3>
                            <span className="fs-7 fw-semibold text-gray-500">
                              Upload up to 10 files
                            </span>
                          </div>
                        </div>
                      </div>


                      <div {...getFrontRootProps()} className='image-dropzone mb-5'>
                        <input
                          {...getFrontInputProps()}
                          name='patient_image'
                          type='file'
                          onChange={(e) => setPatientImage(e.target.files[0])}
                        />
                        {patientImage ? (
                          <img className="mx-auto d-block"
                            src={URL.createObjectURL(patientImage)}
                            alt='Front Side'
                          />
                        ) : (
                          <>
                            <div role='presentation' tabIndex='0' className='dropzone'>
                              <p className='text-center align-middle'>Drag or Add Front Image</p>
                            </div>

                            {patientImageError && (
                              <div className='error-message text-danger'>
                                Please upload an image (JPG, PNG, GIF, etc.).
                              </div>
                            )}
                          </>
                        )}
                      </div>
                      {patientImage ? (
                        <button
                          onClick={() => removeFrontImage()}
                          className='btn btn-danger btn-sm'
                          style={{ alignSelf: 'center' }}
                        >
                          Remove Image
                        </button>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div className='row mb-10'>
                      <div className='col-2'>
                        <label className='form-label'>Title</label>
                        <select
                          className='form-select'
                          name='title'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.title}
                        >
                          <option value='#'>Choose..</option>
                          {patientOption.title &&
                            patientOption.title?.map((title, index) => (
                              <option key={index} value={title.option_id}>
                                {title.option_value}
                              </option>
                            ))}
                        </select>
                      </div>
                      <div className='col-3 '>
                        <label className='form-label required'>First Name</label>
                        <input
                          type='text'
                          name='first_name'
                          className={`form-control ${errors.first_name && touched.first_name ? 'border border-danger' : ''
                            } `}

                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.first_name}
                        />
                        {errors.first_name && touched.first_name ? (
                          <div className='text-danger'>{errors.first_name}</div>
                        ) : null}
                      </div>
                      <div className='col-2'>
                        <label className='form-label'>Middle Name</label>
                        <input
                          type='text'
                          name='middle_name'
                          className='form-control'

                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.middle_name}
                        />
                      </div>
                      <div className='col-3'>
                        <label className='form-label required'>Last Name</label>
                        <input
                          type='text'
                          name='last_name'
                          className={`form-control ${errors.last_name && touched.last_name ? 'border border-danger' : ''
                            } `}

                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.last_name}
                        />
                        {errors.last_name && touched.last_name ? (
                          <div className='text-danger'>{errors.last_name}</div>
                        ) : null}
                      </div>
                      <div className='col-2'>
                        <label className='form-label'>Suffix</label>
                        <select
                          className='form-select'
                          name='suffix'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.suffix}
                        >
                          <option value='#'>Choose..</option>
                          {patientOption.suffix &&
                            patientOption.suffix?.map((suffix, index) => (
                              <option key={index} value={suffix.option_id}>
                                {suffix.option_value}
                              </option>
                            ))}
                        </select>
                      </div>
                    </div>
                    <div className='row mb-10'>
                      <div className='col-3'>
                        <label className='form-label required'>DOB</label>
                        <input
                          type='date'
                          name='dob'
                          max="2023-09-09"
                          className={`form-control ${errors.dob && touched.dob ? 'border border-danger' : ''
                            } `}

                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.dob}
                        />
                        {errors.dob && touched.dob ? <div className='text-danger'>{errors.dob}</div> : null}
                      </div>


                      <div className='col-3 '>
                        <label className='form-label required'>Gender</label>
                        <select
                          className={`form-select ${errors.gender && touched.gender ? 'border border-danger' : ''
                            } `}
                          name='gender'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.gender}
                        >
                          <option value=''>Choose..</option>
                          {patientOption.gender &&
                            patientOption.gender?.map((gender, index) => (
                              <option key={index} value={gender.option_id}>
                                {gender.option_value}
                              </option>
                            ))}
                        </select>
                        {errors.gender && touched.gender ? (
                          <div className='text-danger'>{errors.gender}</div>
                        ) : null}
                      </div>

                      <div className='col-3'>
                        <label className='form-label'>Marital Status</label>
                        <select
                          className='form-select'
                          name='marital_status'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.marital_status}
                        >
                          <option value='#'>Choose..</option>
                          {patientOption.marital &&
                            patientOption.marital?.map((marital, index) => (
                              <option key={index} value={marital.option_id}>
                                {marital.option_value}
                              </option>
                            ))}
                        </select>
                      </div>
                      <div className='col-3'>
                        <label className='form-label '>SSN</label>
                        <InputMask
                          mask='999-99-9999'
                          type='text'
                          name='ssn'
                          className='form-control'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.ssn}
                        />
                      </div>
                    </div>
                    <div className='row mb-10'>
                      <div className='col-3'>
                        <label className='form-label'>Home Phone</label>
                        <InputMask
                          mask='(999)999-9999'
                          name='hphone'
                          type='text'
                          className='form-control'
                          placeholder='(---)--- ----'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.hphone}
                        />
                      </div>

                      <div className='col-2'>
                        <label className='form-label '>Work Phone</label>
                        <InputMask
                          mask='(999)999-9999'
                          name='wphone'
                          type='text'
                          className='form-control'
                          placeholder='(---)--- ----'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.wphone}
                        />
                      </div>

                      <div className='col-1'>
                        <label className='form-label '>Ext.</label>
                        <InputMask
                          mask='(999)'
                          name='wphone_ext'
                          type='text'
                          className='form-control'
                          placeholder='(---)'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.wphone_ext}
                        />
                      </div>

                      <div className='col-3'>
                        <label className='form-label '>Mobile Number</label>
                        <InputMask
                          mask='(999)999-9999'
                          name='mobile'
                          type='text'
                          className='form-control'
                          placeholder='(---)--- ----'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.mobile}
                        />
                      </div>

                      <div className='col-3'>
                        <label className='form-label'>Email</label>
                        <input
                          type='email'
                          name='email'
                          className={`form-control ${errors.email ? 'border border-danger' : ''} `}

                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                        />
                        {errors.email ? <div className='text-danger'>{errors.email}</div> : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-5 mb-xl-10">
              <div className="card-header cursor-pointer">
                <div className="card-title m-0">
                  <h3 className="fw-bold m-0">Basic Information</h3>
                </div>
              </div>
              <div className='card-body'>
                <div className='row mb-10 me-4'>
                  <div className='col-3'>
                    <label className='form-label'>Race</label>
                    <select
                      className='form-select'
                      name='race'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.race}
                    >
                      <option value='#'>Choose..</option>
                      {patientOption.race &&
                        patientOption.race?.map((race, index) => (
                          <option key={index} value={race.option_id}>
                            {race.option_value}
                          </option>
                        ))}
                    </select>
                  </div>

                  <div className='col-3 '>
                    <label className='form-label'>Ethnicity</label>
                    <select
                      className='form-select'
                      name='ethnicity'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.ethnicity}
                    >
                      <option value='#'>Choose..</option>
                      {patientOption.ethnicities &&
                        patientOption.ethnicities?.map((ethnicities, index) => (
                          <option key={index} value={ethnicities.option_id}>
                            {ethnicities.option_value}
                          </option>
                        ))}
                    </select>
                  </div>

                  <div className='col-3 '>
                    <label className='form-label'>Gender Identity</label>
                    <select
                      className='form-select'
                      name='gender_identity'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.gender_identity}
                    >
                      <option value='#'>Choose..</option>
                      {patientOption.identity &&
                        patientOption.identity?.map((identity, index) => (
                          <option key={index} value={identity.option_id}>
                            {identity.option_value}
                          </option>
                        ))}
                    </select>
                  </div>

                  <div className='col-3 '>
                    <label className='form-label'>Sexual Orientation</label>
                    <select
                      className='form-select'
                      name='sexual_orientation'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.sexual_orientation}
                    >
                      <option value='#'>Choose..</option>
                      {patientOption.orientation &&
                        patientOption.orientation?.map((orientation, index) => (
                          <option key={index} value={orientation.option_id}>
                            {orientation.option_value}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>

                <div className='row mb-10 me-4'>
                  <div className='col-3 '>
                    <label className='form-label'>Preferred Language</label>
                    <select
                      className='form-select'
                      name='language'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.language}
                    >
                      <option value='#'>Choose..</option>
                      {patientOption.languages &&
                        patientOption.languages?.map((languages, index) => (
                          <option key={index} value={languages.option_id}>
                            {languages.option_value}
                          </option>
                        ))}
                    </select>
                  </div>

                  <div className='col-3'>
                    <label className='form-label'>Occupation</label>
                    <input
                      type='text'
                      name='occupation'
                      className='form-control'

                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.occupation}
                    />
                  </div>

                  <div className='col-3'>
                    <label className='form-label'>Education</label>
                    <input
                      type='text'
                      name='education'
                      className='form-control'

                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.education}
                    />
                  </div>
                  <div className='col-3 '>
                    <label className='form-label'>Facility Location</label>
                    <select
                      className='form-select'
                      name='facility_id'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.facility_id}
                    >
                      <option value='#'>Choose..</option>
                      {defaultLocation?.map((facility, index) => (
                        <option key={index} value={facility.id}>
                          {facility.name} | {facility.address}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-5 mb-xl-10">
              <div className="card-header cursor-pointer">
                <div className="card-title m-0">
                  <h3 className="fw-bold m-0">Address</h3>
                </div>
              </div>
              <div className='card-body'>
                <div className='row mb-10 me-4'>
                  <div className='col-6 '>
                    <label className='form-label required'>Address</label>
                    <input
                      type='text'
                      name='street'
                      className={`form-control ${errors.street && touched.street ? 'border border-danger' : ''
                        } `}

                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.street}
                    />
                    {errors.street && touched.street ? (
                      <div className='text-danger'>{errors.street}</div>
                    ) : null}
                  </div>
                  <div className='col-6 mt-2'>
                    <label className='form-label'> </label>
                    <input
                      type='text'
                      name='street2'
                      className='form-control'

                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.street2}
                    />
                  </div>
                </div>

                <div className='row mb-10 me-4'>
                  <div className='col-3'>
                    <label className='form-label required'>City</label>
                    <input
                      type='text'
                      name='city'
                      className={`form-control ${errors.city && touched.city ? 'border border-danger' : ''
                        } `}

                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.city}
                    />
                    {errors.city && touched.city ? (
                      <div className='text-danger'>{errors.city}</div>
                    ) : null}
                  </div>

                  <div className='col-3'>
                    <label className='form-label required'>State</label>
                    <select
                      className={`form-select ${errors.state && touched.state ? 'border border-danger' : ''
                        } `}
                      name='state'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.state}
                    >
                      <option value=''>Choose..</option>
                      {patientOption.states &&
                        patientOption.states?.map((states, index) => (
                          <option key={index} value={states.option_id}>
                            {states.option_value}
                          </option>
                        ))}
                    </select>
                    {errors.state && touched.state ? (
                      <div className='text-danger'>{errors.state}</div>
                    ) : null}
                  </div>

                  <div className='col-3'>
                    <label className='form-label required'>Zip Code</label>
                    <input
                      type='text'
                      name='zip_code'
                      className={`form-control ${errors.zip_code && touched.zip_code ? 'border border-danger' : ''
                        } `}

                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.zip_code}
                    />
                    {errors.zip_code && touched.zip_code ? (
                      <div className='text-danger'>{errors.zip_code}</div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-5 mb-xl-10">
              <div className="card-header cursor-pointer">
                <div className="card-title m-0">
                  <h3 className="fw-bold m-0">Remarks</h3>
                </div>
              </div>
              <div className='card-body'>
                <textarea
                  className='form-control'
                  id="textField"
                  name="remarks"
                  rows="4"
                  cols="80"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.remarks}
                ></textarea>

              </div>
            </div>


            <div className='card-footer py-5 d-flex justify-content-between border-top' id='kt_facility_footer'>
              <div className='py-2 d-flex justify-content-between' id='kt_facility_footer'>
                <SubmitButton
                  class_name='btn btn-primary w-150px ms-10'
                  title='Update'
                  callback_event={handleSubmit}
                  btnLoading={btnLoading}
                />
              </div>
              <div>
                <Link to='/patients/view' className='btn btn-bg-body text-primary mt-3'>
                  Back
                  <KTIcon iconName='arrow-right' className='fs-3 text-primary ' />
                </Link>
              </div>
            </div>
          </form>
        )
      }

    </>

  )
}

export default EditPatients
