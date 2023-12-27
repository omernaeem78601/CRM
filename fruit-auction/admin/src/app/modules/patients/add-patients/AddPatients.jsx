import { useEffect, useState } from 'react'
import { getOptionData, getPatientLocation, postPatientDataReq } from '../__request/RequestPatient'
import InputMask from 'react-input-mask'
import { useFormik } from 'formik'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router'
import { ERROR_ALERT_ADMIN } from '../../../utilities/AlertMsgConstant'
import ErrorMessages from '../../../utilities/ApiErrorMessages'
import SubmitButton from '../../../utilities/SubmitButton'
import { ValidationSchema } from '../__request/ValidationSchema'
import { KTIcon } from '../../../../_metronic/helpers'
import { Link } from 'react-router-dom'
import { useDropzone } from 'react-dropzone'
import { useSelector } from 'react-redux'

const AddPatients = () => {
  const userProfile = useSelector((state) => state.userReducerComp)

  const empty = ({
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

    facility_name: {
      id: '',
      name: ''
    },
    remarks: '',
    is_active: 1,
    company_id: 1,
  })
  const [patientImage, setPatientImage] = useState(null);
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: empty,
    validationSchema: ValidationSchema,
    onSubmit: (values) => {
      values.company_id = 1;
      values.is_active = 1;
      addPatient(values)
    },
  })
  const navigate = useNavigate()
  const [btnLoading, setBtnLoading] = useState(false)
  const [err, setErr] = useState(false)
  const [errIdMsg, setErrIdMsg] = useState('')

  // option data

  const addPatient = async (handle) => {
    setBtnLoading(true);
    try {
      const formData = new FormData();

      if (patientImage) {
        formData.append('patient_image', patientImage);
      }

      for (const key in handle) {
        formData.append(key, handle[key]);
      }
      // console.log('formdata', handle);
      const response = await postPatientDataReq(formData);
      navigate('/patient/list');
      toast.success(response.data.message);
      setErr(false);
      setErrIdMsg('');
      setBtnLoading(false);
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setErrIdMsg(error.response.data.data);
        setErr(true);
        setBtnLoading(false);
        toast.error('There is An Issue!');
        return false;
      } else {
        toast.error(ERROR_ALERT_ADMIN);
      }
    }
  };

  const [patientOption, setPatientOption] = useState([])

  // fetch request
  const optionsData = async () => {
    try {
      const response = await getOptionData()
      setPatientOption(response.data.data)
    } catch (error) {
      console.error(error)
    }
  }

  const [defaultLocation, setDefaultLocation] = useState([])
  const getLocationOption = async () => {
    try {
      const response = await getPatientLocation()
      setDefaultLocation(response.data.data)
    } catch (error) {
      console.error(error)
    }
  }

  const [patientImageError, setPatientImageError] = useState(false);


  const { getRootProps: getProfileRootProps, getInputProps: getProfileInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file.type.startsWith('image/')) {
        setPatientImage(file);
      } else {
        setPatientImageError(true);
      }
    },
  });

  const removeProfileImage = () => {
    setPatientImage(null);
    setPatientImageError(false)
  };

  useEffect(() => {
    optionsData()
    getLocationOption()
  }, [])

  return (
    <>
      <ErrorMessages errorcheck={err} errormsg={errIdMsg} />
      <form onSubmit={handleSubmit}>
        <div className="card mb-5 mb-xl-10">
          <div className="card-header cursor-pointer">
            <div className="card-title m-0">
              <h3 className="fw-bold m-0">Patient Demographic</h3>
            </div>
          </div>
          <div className='card-body p-9 mt-3'>

            <div className="row">
              <div className="col-lg-3">
                <div className="col-8 mb-5" >
                  <div {...getProfileRootProps()} className="image-dropzone mb-5">

                    <input {...getProfileInputProps()}
                      name="patient_image"
                      type="file"
                      onChange={(e) => setPatientImage(e.target.files[0])}
                    />
                    {patientImage ? (
                      <div className="image-container">
                        <img src={URL.createObjectURL(patientImage)} alt="Profile Image" style={{ width: '250px', height: '250px' }} />
                      </div>
                    ) : (
                      <>
                        <div role="presentation" tabIndex="0" className="dropzone d-flex justify-content-center align-items-center" style={{ height: '250px' }} >
                          <p className='text-center align-middle'>Drag or Add Profile Image</p>
                        </div>

                        {patientImageError && (
                          <div className="error-message text-danger">Please upload an image (JPG, PNG, GIF, etc.).</div>
                        )}
                      </>
                    )}
                  </div>
                  {patientImage ? (
                    <button onClick={() => removeProfileImage()} className="btn btn-danger btn-sm" style={{ alignSelf: 'center' }}>
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
                      max={new Date().toISOString().substr(0, 10)}
                      className={`form-control ${errors.dob && touched.dob ? 'border border-danger' : ''} `}
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
                      <option value='#'>Choose..</option>
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
              <h3 className="fw-bold m-0">Other Information</h3>
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
              <div className='col-3'>
                <label className='form-label'>Default Location</label>
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
                  <option value='#'>Choose..</option>
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


        <div
          className='card-footer py-5 d-flex justify-content-between border-top'
          id='kt_facility_footer'
          style={{ marginTop: '5rem', }}
        >
          <div className=' py-5 d-flex justify-content-between' id='kt_facility_footer'>

            <SubmitButton
              class_name='btn btn-primary w-150px ms-10'
              title='Save'
              callback_event={handleSubmit}
              btnLoading={btnLoading}
            />
          </div>

          <div>
            <Link to='/patients/view' className='btn btn-bg-body text-primary mt-7'>
              Back
              <KTIcon iconName='arrow-right' className='fs-3 text-primary ' />
            </Link>
          </div>
        </div>


      </form>

    </>
  )
}

export default AddPatients
