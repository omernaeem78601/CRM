import { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { KTIcon } from '../../../../_metronic/helpers'
import SubmitButton from '../../../utilities/SubmitButton'
import ApiErrorMessages from '../../../utilities/ApiErrorMessages'
import { setDataContext } from '../../../utilities/SettingContext'
import { ERROR_ALERT_ADMIN } from '../../../utilities/AlertMsgConstant'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import InputMask from 'react-input-mask';
import { Formik, useFormik } from 'formik'
import { postUserReq } from './_request/RequestUser'
import { ValidationSchema } from './_request/ValidationSchema'
import { useSelector } from 'react-redux'
import { getOptionsListReq } from '../../auth/profile/_request/RequestProfile'
const AddUser = () => {
    // const navigate = useNavigate()
    // const { setRefresh } = useContext(setDataContext)
    // const [errIdMsg, setErrIdMsg] = useState([])
    // const [err, setErr] = useState(false)
    // const [btnLoading, setBtnLoading] = useState()
    // const [showPassword, setShowPassword] = useState(false);
    // const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    // const userProfile = useSelector((state) => state.userReducerComp)
    // const empty = {
    //     title: '',
    //     first_name: '',
    //     last_name: '',
    //     gender: '',
    //     phone: '',
    //     mobile: '',
    //     street: '',
    //     street2: '',
    //     city: '',
    //     state: '',
    //     zip_code: '',
    //     email: '',
    //     password: '',
    //     password_confirmation: '',
    //     company_id: userProfile.company.id,
    // }

    // const { values, errors, setValues, touched, handleBlur, handleChange, handleSubmit, resetForm } =
    //     useFormik({
    //         initialValues: empty,
    //         validationSchema: ValidationSchema,
    //         onSubmit: (values) => {
    //             values.company_id = userProfile.company.id
    //             addUser(values)
    //             console.log(values)
    //         },
    //     })
    // useEffect(() => {
    //     resetForm();
    // }, []);
    // // add User
    // const addUser = async (handleinput) => {
    //     setBtnLoading(true)
    //     try {
    //         const response = await postUserReq(handleinput)
    //         toast.success(response.data.message)
    //         setBtnLoading(false)
    //         setRefresh(false)
    //         resetForm()
    //         navigate('/user-management/users')
    //     } catch (error) {
    //         if (error.response.status === 422) {
    //             setErrIdMsg(error.response.data.data)
    //             setErr(true)
    //             setBtnLoading(false)
    //             return false
    //         } else {
    //             toast.error(ERROR_ALERT_ADMIN)
    //             setBtnLoading(false)
    //         }
    //     }
    // }

    // const [profileOption, setProfileOption] = useState([])
    // const optionsData = async () => {
    //     try {
    //         const response = await getOptionsListReq();
    //         setProfileOption(response.data.data);
    //     } catch (error) {
    //         toast.error(ERROR_ALERT_ADMIN);
    //     }
    // };
    // useEffect(() => {
    //     optionsData()
    // }, [])

    return (
        <>
        </>
        // <div
        //     id='kt_adduser'
        //     className='bg-body'
        //     data-kt-drawer='true'
        //     data-kt-drawer-name='adduser'
        //     data-kt-drawer-activate='true'
        //     data-kt-drawer-overlay='true'
        //     data-kt-drawer-direction='end'
        //     data-kt-drawer-toggle='#kt_adduser_toggle'
        //     data-kt-drawer-close='#kt_adduser_close'
        // >
        //     <div className='card shadow-none rounded-0'>
        //         <div className='card-header' id='kt_adduser_header'>
        //             <h3 className='card-title fw-bolder text-dark'>Add New User</h3>

        //             <div className='card-toolbar'>
        //                 <button
        //                     type='button'
        //                     className='btn btn-sm btn-icon btn-active-light-primary me-n5'
        //                     id='kt_adduser_close'
        //                 >
        //                     <KTIcon iconName='cross' className='fs-1' />
        //                 </button>
        //             </div>
        //         </div>

        //         <div className='card-body position-relative' id='kt_cptcodes_body'>
        //             <ApiErrorMessages errorcheck={err} errormsg={errIdMsg} />
        //             <div
        //                 id='kt_adduser_scroll'
        //                 className='position-relative scroll-y me-n5 pe-5'
        //                 data-kt-scroll='true'
        //                 data-kt-scroll-height='auto'
        //                 data-kt-scroll-wrappers='#kt_adduser_body'
        //                 data-kt-scroll-dependencies='#kt_adduser_header, #kt_adduser_footer'
        //                 data-kt-scroll-offset='5px'
        //                 style={{ width: '900px' }}
        //             >
        //                 {/* form start here  */}

        //                 <form onSubmit={handleSubmit}>
        //                     <div className='container ' style={{ flex: '1', overflow: 'auto' }}>
        //                         <div className='row mb-10 me-4'>
        //                             <div className='col-3'>
        //                                 <label className='form-label'>Title</label>
        //                                 <select aria-label='Select example'
        //                                     name='title'
        //                                     className='form-select'
        //                                     onChange={handleChange}
        //                                     value={values.title || ''}
        //                                 >
        //                                     <option value='#' >Choose..</option>
        //                                     {profileOption.title &&
        //                                         profileOption.title?.map((title, index) => (
        //                                             <option key={index} value={title.option_id}>{title.option_value}</option>
        //                                         ))}
        //                                 </select>
        //                             </div>
        //                             <div className='col-3'>
        //                                 <label className='form-label required'>First Name</label>
        //                                 <input
        //                                     name='first_name'
        //                                     onChange={handleChange}
        //                                     onBlur={handleBlur}
        //                                     value={values.first_name}
        //                                     type='text'
        //                                     className={`form-control ${errors.first_name && touched.first_name ? 'border border-danger' : ''
        //                                         } `}
        //                                 />
        //                                 {errors.first_name && touched.first_name ? (
        //                                     <div className='text-danger'>{errors.first_name}</div>
        //                                 ) : null}
        //                             </div>
        //                             <div className='col-3'>
        //                                 <label className='form-label required'>Last Name</label>
        //                                 <input
        //                                     name='last_name'
        //                                     onChange={handleChange}
        //                                     onBlur={handleBlur}
        //                                     value={values.last_name}
        //                                     type='text'
        //                                     className={`form-control ${errors.last_name && touched.last_name ? 'border border-danger' : ''}`}
        //                                 />
        //                                 {errors.last_name && touched.last_name ? (
        //                                     <div className='text-danger'>{errors.last_name}</div>
        //                                 ) : null}
        //                             </div>
        //                             <div className='col-3' >
        //                                 <label className='form-label '>Gender</label>
        //                                 <select aria-label='Select example'
        //                                     name='gender'
        //                                     className='form-control'
        //                                     onChange={handleChange}
        //                                     onBlur={handleBlur}
        //                                     value={values.gender}
        //                                 >
        //                                     <option value='#'>Choose..</option>
        //                                     {profileOption.gender &&
        //                                         profileOption.gender?.map((states, index) => (
        //                                             <option key={index} value={states.option_id}>{states.option_value}</option>
        //                                         ))}
        //                                 </select>
        //                             </div>


        //                         </div>
        //                         <div className='row mb-10 me-4'>
        //                             <div className='col-3'>
        //                                 <label className='form-label'>Phone</label>
        //                                 <InputMask
        //                                     mask='(999)999-9999'
        //                                     onChange={handleChange}
        //                                     onBlur={handleBlur}
        //                                     value={values.phone}
        //                                     name='phone'
        //                                     type='text'
        //                                     className='form-control'
        //                                 // className={`form-control  ${errors.phone && touched.phone ? 'border border-danger' : ''} `}
        //                                 />
        //                                 {/* {errors.phone && touched.phone ? <div className='text-danger'>{errors.phone}</div> : null} */}
        //                             </div>
        //                             <div className='col-3'>
        //                                 <label className='form-label'>Mobile</label>
        //                                 <InputMask
        //                                     mask='(999)999-9999'
        //                                     onChange={handleChange}
        //                                     onBlur={handleBlur}
        //                                     value={values.mobile}
        //                                     name='mobile'
        //                                     type='text'
        //                                     className={`form-control  ${errors.mobile && touched.mobile ? 'border border-danger' : ''} `}
        //                                 />
        //                                 {errors.mobile && touched.mobile ? <div className='text-danger'>{errors.mobile}</div> : null}
        //                             </div>
        //                             <div className='col-3'>
        //                                 <label className='form-label '>street 1</label>
        //                                 <input
        //                                     name='street'
        //                                     type='text'
        //                                     className='form-control'
        //                                     onChange={handleChange}
        //                                     onBlur={handleBlur}
        //                                     value={values.street}
        //                                 />
        //                             </div>
        //                             <div className='col-3'>
        //                                 <label className='form-label'>street 2</label>
        //                                 <input
        //                                     name='street2'
        //                                     type='text'
        //                                     onChange={handleChange}
        //                                     onBlur={handleBlur}
        //                                     value={values.street2}
        //                                     className='form-control'
        //                                 />
        //                             </div>
        //                         </div>

        //                         <div className='row mb-10 me-4'>
        //                             <div className='col-3'>
        //                                 <label className='form-label'>City</label>
        //                                 <input
        //                                     name='city'
        //                                     type='text'
        //                                     className='form-control'
        //                                     placeholder=' city'
        //                                     onChange={handleChange}
        //                                     onBlur={handleBlur}
        //                                     value={values.city}
        //                                 />
        //                             </div>
        //                             <div className='col-3' >
        //                                 <label className='form-label'>State</label>
        //                                 <select aria-label='Select example'
        //                                     name='state'
        //                                     className='form-control'
        //                                     onChange={handleChange}
        //                                     onBlur={handleBlur}
        //                                     value={values.state}
        //                                 >
        //                                     <option value='#'>Choose..</option>
        //                                     {profileOption.states &&
        //                                         profileOption.states?.map((states, index) => (
        //                                             <option key={index} value={states.option_id}>{states.option_value}</option>
        //                                         ))}
        //                                 </select>
        //                             </div>
        //                             <div className='col-3'>
        //                                 <label className='form-label '>ZIP Code</label>
        //                                 <input
        //                                     maxLength="20"
        //                                     name='zip_code'
        //                                     type='text'
        //                                     placeholder='zip code'
        //                                     className='form-control'
        //                                     onChange={handleChange}
        //                                     onBlur={handleBlur}
        //                                     value={values.zip_code}
        //                                 />
        //                             </div>

        //                         </div>

        //                         <div className='row mb-10 me-4'>
        //                             <div className='col-4'>
        //                                 <label className='form-label required'>Email</label>
        //                                 <input
        //                                     name='email'
        //                                     onChange={handleChange}
        //                                     onBlur={handleBlur}
        //                                     value={values.email}
        //                                     type='text'
        //                                     className={`form-control ${errors.email && touched.email ? 'border border-danger' : ''}`}

        //                                 />
        //                                 {errors.email && touched.email ? (
        //                                     <div className='text-danger'>{errors.email}</div>
        //                                 ) : null}
        //                             </div>
        //                             <div className='col-4 position-relative' >
        //                                 <label className='form-label required'>Password</label>
        //                                 <input
        //                                     type={showPassword ? 'text' : 'password'}
        //                                     name='password'
        //                                     onChange={handleChange}
        //                                     onBlur={handleBlur}
        //                                     value={values.password}
        //                                     className={`form-control ${errors.password && touched.password ? 'border border-danger' : ''}`}
        //                                 />
        //                                 <span
        //                                     className='btn btn-sm btn-icon position-absolute translate-middle end-0 me-n2'
        //                                     onClick={() => setShowPassword(!showPassword)}
        //                                 >
        //                                     <i className='ki-duotone ki-eye-slash fs-1 mb-14'>
        //                                         <span className='path1' />
        //                                         <span className='path2' />
        //                                         <span className='path3' />
        //                                         <span className='path4' />
        //                                     </i>
        //                                     <i className='ki-duotone ki-eye d-none fs-1'>
        //                                         <span className='path1' />
        //                                         <span className='path2' />
        //                                         <span className='path3' />
        //                                     </i>
        //                                 </span>
        //                                 {errors.password && touched.password ? (
        //                                     <div className='text-danger'>{errors.password}</div>
        //                                 ) : null}
        //                                 {values.password && values.password.length < 10}
        //                                 {values.password && !/(?=.*[a-z])(?=.*[A-Z])/.test(values.password) && (
        //                                     <div className='text-danger'>Password must contain at least one uppercase and one lowercase letter</div>
        //                                 )}
        //                             </div>
        //                             <div className='col-4 position-relative'>
        //                                 <label className='form-label required'>Confirm Password</label>
        //                                 <input
        //                                     type={showConfirmPassword ? 'text' : 'password'}
        //                                     name='password_confirmation'
        //                                     onChange={handleChange}
        //                                     onBlur={handleBlur}
        //                                     value={values.password_confirmation}
        //                                     className={`form-control ${errors.password_confirmation && touched.password_confirmation ? 'border border-danger' : ''}`}

        //                                 />
        //                                 <span
        //                                     className='btn btn-sm btn-icon position-absolute translate-middle end-0 me-n2'
        //                                     onClick={() => setShowConfirmPassword(!showConfirmPassword)}
        //                                 >
        //                                     <i className='ki-duotone ki-eye-slash fs-1 mb-14'>
        //                                         <span className='path1' />
        //                                         <span className='path2' />
        //                                         <span className='path3' />
        //                                         <span className='path4' />
        //                                     </i>
        //                                     <i className='ki-duotone ki-eye d-none fs-1'>
        //                                         <span className='path1' />
        //                                         <span className='path2' />
        //                                         <span className='path3' />
        //                                     </i>
        //                                 </span>
        //                                 {errors.password_confirmation ? (
        //                                     <div className='text-danger'>{errors.password_confirmation}</div>
        //                                 ) : null}
        //                             </div>
        //                         </div>
        //                     </div>

        //                     {/* form end here  */}
        //                     <div
        //                         className='card-footer py-5 d-flex justify-content-between'
        //                         id='kt_facility_footer'
        //                         style={{ marginTop: '18rem' }}
        //                     >
        //                         <div className=' py-5 d-flex justify-content-between' id='kt_facility_footer'>
        //                             <SubmitButton
        //                                 btnLoading={btnLoading}
        //                                 title='AddUser'
        //                                 callback_event={handleSubmit}
        //                                 class_name='btn btn-primary'
        //                             />
        //                         </div>
        //                         <div>
        //                             <button
        //                                 type='button'
        //                                 className='btn btn-bg-body text-primary mt-7'
        //                                 id='kt_cptcodes_close'
        //                             >
        //                                 Back
        //                                 <KTIcon iconName='arrow-right' className='fs-3 text-primary ' />
        //                             </button>
        //                         </div>
        //                     </div>
        //                 </form>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}
export { AddUser }
