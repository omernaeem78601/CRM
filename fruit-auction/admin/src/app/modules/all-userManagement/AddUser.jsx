import {useEffect, useState} from 'react'
import InputMask from 'react-input-mask'
import {useFormik} from 'formik'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {useNavigate} from 'react-router'
import {Link} from 'react-router-dom'
import {useDropzone} from 'react-dropzone'
import {useSelector} from 'react-redux'
import {getOptionData, getPatientLocation, postUserDataReq} from './__request/RequestUser'
import {ERROR_ALERT_ADMIN} from '../../utilities/AlertMsgConstant'
import ApiErrorMessages from '../../utilities/ApiErrorMessages'
import SubmitButton from '../../utilities/SubmitButton'
import {ValidationSchema} from './__request/ValidationSchema'
import {KTIcon} from '../../../_metronic/helpers'

const AddUser = () => {
  const userProfile = useSelector((state) => state.userReducerComp)

  const empty = {
    name: '',
    email: '',
    phone: '',
    gender: '',
    password: '',
    role: '',
    dob: '',
    address: {
      street: '',
      city: '',
      state: '',
      country: '',
      postalCode: '',
    },
    profilePicture: '',
  }
  const [patientImage, setPatientImage] = useState(null)
  const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: empty,
    // validationSchema: ValidationSchema,
    onSubmit: (values) => {
      addUser(values)
    },
  })
  const navigate = useNavigate()
  const [btnLoading, setBtnLoading] = useState(false)
  const [err, setErr] = useState(false)
  const [errIdMsg, setErrIdMsg] = useState('')

  // option data

  const addUser = async (handle) => {
    setBtnLoading(true)
    try {
      //   const formData = new FormData()

      //   if (patientImage) {
      //     formData.append('patient_image', patientImage)
      //   }

      //   for (const key in handle) {
      //     formData.append(key, handle[key])
      //   }
      // console.log('formdata', handle);
      const response = await postUserDataReq(handle)
      navigate('/user/list')
      toast.success(response.data.message)   
      setErr(false)
      setErrIdMsg('')
      setBtnLoading(false)
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrIdMsg(error.response.data)
        setErr(true)
        setBtnLoading(false)
        toast.error('There is An Issue!')
        return false
      } else {
        toast.error(ERROR_ALERT_ADMIN)
      }
    }
  }

  const [patientImageError, setPatientImageError] = useState(false)

  const {getRootProps: getProfileRootProps, getInputProps: getProfileInputProps} = useDropzone({
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0]
      if (file.type.startsWith('image/')) {
        setPatientImage(file)
      } else {
        setPatientImageError(true)
      }
    },
  })

  const removeProfileImage = () => {
    setPatientImage(null)
    setPatientImageError(false)
  }

  return (
    <>
      <ApiErrorMessages errorcheck={err} errormsg={errIdMsg} />
      <form onSubmit={handleSubmit}>
        <div className='card mb-5 mb-xl-10'>
          <div className='card-header cursor-pointer'>
            <div className='card-title m-0'>
              <h3 className='fw-bold m-0'>User Information</h3>
            </div>
          </div>
          <div className='card-body p-9 mt-3'>
            <div className='row'>
              {/* upload image  */}
              <div className='col-lg-3'>
                <div className='col-8 mb-5'>
                  <div {...getProfileRootProps()} className='image-dropzone mb-5'>
                    <input
                      {...getProfileInputProps()}
                      name='patient_image'
                      type='file'
                      onChange={(e) => setPatientImage(e.target.files[0])}
                    />
                    {patientImage ? (
                      <div className='image-container'>
                        <img
                          src={URL.createObjectURL(patientImage)}
                          alt='Profile Image'
                          style={{width: '250px', height: '250px'}}
                        />
                      </div>
                    ) : (
                      <>
                        <div
                          role='presentation'
                          tabIndex='0'
                          className='dropzone d-flex justify-content-center align-items-center'
                          style={{height: '250px'}}
                        >
                          <p className='text-center align-middle'>Drag or Add Profile Image</p>
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
                      onClick={() => removeProfileImage()}
                      className='btn btn-danger btn-sm'
                      style={{alignSelf: 'center'}}
                    >
                      Remove Image
                    </button>
                  ) : null}
                </div>
              </div>

              <div className='col-lg-9'>
                <div className='row mb-10'>
                  <div className='col-3 '>
                    <label className='form-label required'>Name</label>
                    <input
                      type='text'
                      name='name'
                      className={`form-control ${
                        errors.name && touched.name ? 'border border-danger' : ''
                      } `}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                    {errors.name && touched.name ? (
                      <div className='text-danger'>{errors.name}</div>
                    ) : null}
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

                  <div className='col-3'>
                    <label className='form-label '>Mobile Number</label>
                    <InputMask
                      mask='(999)999-9999'
                      name='phone'
                      type='text'
                      className={`form-control ${errors.phone ? 'border border-danger' : ''} `}
                      placeholder='(---)--- ----'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phone}
                    />
                    {errors.phone ? <div className='text-danger'>{errors.phone}</div> : null}
                  </div>

                  <div className='col-3 '>
                    <label className='form-label required'>Gender</label>
                    <select
                      className={`form-select ${
                        errors.gender && touched.gender ? 'border border-danger' : ''
                      } `}
                      name='gender'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.gender}
                    >
                      <option value='#'>Choose..</option>
                      <option value='male'>Male</option>
                      <option value='female'>Female</option>
                      <option value='other'>Other</option>
                    </select>
                    {errors.gender && touched.gender ? (
                      <div className='text-danger'>{errors.gender}</div>
                    ) : null}
                  </div>
                </div>

                <div className='row mb-10'>
                  <div className='col-3'>
                    <label className='form-label required'>DOB</label>
                    <input
                      type='date'
                      name='dob'
                      max={new Date().toISOString().substr(0, 10)}
                      className={`form-control ${
                        errors.dob && touched.dob ? 'border border-danger' : ''
                      } `}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.dob}
                    />
                    {errors.dob && touched.dob ? (
                      <div className='text-danger'>{errors.dob}</div>
                    ) : null}
                  </div>

                  <div className='col-3'>
                    <label className='form-label required'>Role</label>
                    <select
                      className={`form-select ${
                        errors.role && touched.role ? 'border border-danger' : ''
                      } `}
                      name='role'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.role}
                    >
                      <option value='#'>Choose..</option>
                      <option value='vendor'>Vendor</option>
                      <option value='farmer'>Farmer</option>
                      <option value='golden_member'>Golden Member</option>
                      <option value='wholesaler'>Wholesaler</option>
                      <option value='agriculture'>Agriculture</option>
                      <option value='logistics'>Logistics</option>
                      <option value='customer'>Customer</option>
                      <option value='machinery'>Machinery Distributer</option>
                      <option value='seeds'>Seeds Distributer</option>
                      <option value='rawMaterial'>Raw Material Distributer</option>
                      <option value='landBrokers'>LandBroker</option>
                      <option value='transport'>Transporter</option>
                      <option value='account'>Accountant</option>
                    </select>
                    {errors.role && touched.role ? (
                      <div className='text-danger'>{errors.role}</div>
                    ) : null}
                  </div>

                  <div className='col-3 '>
                    <label className='form-label required'>Password</label>
                    <input
                      type='text'
                      name='password'
                      className={`form-control ${
                        errors.password && touched.password ? 'border border-danger' : ''
                      } `}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    {errors.password && touched.password ? (
                      <div className='text-danger'>{errors.password}</div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='card mb-5 mb-xl-10'>
            <div className='card-header cursor-pointer'>
              <div className='card-title m-0'>
                <h3 className='fw-bold m-0'>Address</h3>
              </div>
            </div>

            <div className='card-body'>
              <div className='row mb-10 me-4'>
                <div className='col-4 '>
                  <label className='form-label required'>Street</label>
                  <input
                    type='text'
                    name='address.street'
                    className={`form-control ${
                      errors.street && touched.street ? 'border border-danger' : ''
                    } `}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.address.street}
                  />
                  {errors.street && touched.street ? (
                    <div className='text-danger'>{errors.street}</div>
                  ) : null}
                </div>
                <div className='col-2'>
                  <label className='form-label required'>Country</label>
                  <input
                    type='text'
                    name='address.country'
                    className={`form-control ${
                      errors.country && touched.country ? 'border border-danger' : ''
                    } `}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.address.country}
                  />
                  {errors.country && touched.country ? (
                    <div className='text-danger'>{errors.country}</div>
                  ) : null}
                </div>

                <div className='col-2'>
                  <label className='form-label required'>City</label>
                  <input
                    type='text'
                    name='address.city'
                    className={`form-control ${
                      errors.city && touched.city ? 'border border-danger' : ''
                    } `}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.address.city}
                  />
                  {errors.city && touched.city ? (
                    <div className='text-danger'>{errors.city}</div>
                  ) : null}
                </div>

                <div className='col-2'>
                  <label className='form-label required'>State</label>
                  <select
                    className={`form-select ${
                      errors.state && touched.state ? 'border border-danger' : ''
                    } `}
                    name='address.state'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.address.state}
                  >
                    <option value='#'>Choose..</option>
                    <option value='punjab'>Punjab</option>
                    <option value='sindh'>Sindh</option>
                    <option value='kpk'>KPK</option>
                  </select>
                  {errors.state && touched.state ? (
                    <div className='text-danger'>{errors.state}</div>
                  ) : null}
                </div>

                <div className='col-2'>
                  <label className='form-label required'>Postal Code</label>
                  <input
                    type='text'
                    name='address.postalCode'
                    className={`form-control ${
                      errors.postalCode && touched.postalCode ? 'border border-danger' : ''
                    } `}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.address.postalCode}
                  />
                  {errors.postalCode && touched.postalCode ? (
                    <div className='text-danger'>{errors.postalCode}</div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className='card-footer py-5 d-flex justify-content-between border-top'
          id='kt_facility_footer'
          style={{marginTop: '5rem'}}
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
            <Link to='/user/list' className='btn btn-bg-body text-primary mt-7'>
              Back
              <KTIcon iconName='arrow-right' className='fs-3 text-primary ' />
            </Link>
          </div>
        </div>
      </form>
    </>
  )
}

export default AddUser
