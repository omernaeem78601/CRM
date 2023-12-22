import React, { useState, useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { KTIcon } from '../../../../../_metronic/helpers'
import SubmitButton from '../../../../utilities/SubmitButton'
import { setDataContext } from '../../../../utilities/SettingContext'
import ApiErrorMessages from '../../../../utilities/ApiErrorMessages'
import { getOptionsListReq, postFacilityDataReq } from './__request/RequestFacility'
import { getNpiInfoData } from '../settings/__request/RequestSettings'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ERROR_ALERT_ADMIN } from '../../../../utilities/AlertMsgConstant'
import { ValidationSchema } from './__request/ValidationSchema'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleFacilityDataReq, updateFacilityDataReq } from './__request/RequestFacility'
import { LoadingBar } from '../../../../utilities/LoadingBar'
import InputMask from 'react-input-mask'
import { editFacilityIdAction, showFacilityIdAction } from '../../../../redux/action'

const AddUpdateFacility = () => {
  // const userProfile = useSelector((state) => state.userReducerComp)
  // const [npiInfo, setNpiInfo] = useState({})
  // const { setRefresh, npiInfoNumber, setNpiInfoNumber } = useContext(setDataContext)
  // const facilityState = useSelector((state) => state.facilityIdEditReducer)
  // const [btnLoading, setBtnLoading] = useState(false)
  // const [err, setErr] = useState(false)
  // const [errIdMsg, setErrIdMsg] = useState('')
  // const [facilityLoading, setfacilityLoading] = useState(true)
  // const [facilityOption, setFacilityOption] = useState([])
  // const isAddMode = !facilityState
  // const [varified, setVarified] = useState(false)
  // const empty = {
  //   npi: '',
  //   name: '',
  //   address_line_1: '',
  //   address_line_2: '',
  //   city: '',
  //   state: '',
  //   zip_code: '',
  //   phone: '',
  //   fax: '',
  //   email: '',
  //   facility_id: '',
  //   is_active: true,
  //   company_id: userProfile.company.id,
  //   is_varified: varified,
  // }
  // const { values, errors, setValues, touched, handleBlur, handleChange, handleSubmit, resetForm } =
  //   useFormik({
  //     initialValues: empty,
  //     validationSchema: ValidationSchema,
  //     onSubmit: async (values) => {
  //       if (isAddMode) {
  //         await AddFacility(values)
  //       } else {
  //         updateFacility(values)
  //       }
  //     },
  //   })

  // const navigate = useNavigate()
  // // post data

  // const AddFacility = async (Val) => {
  //   setBtnLoading(true)
  //   try {
  //     const response = await postFacilityDataReq(Val)
  //     toast.success(response.data.message)
  //     setErr(false)
  //     setBtnLoading(false)
  //     setRefresh(true)
  //     resetForm()
  //     navigate('/organization/facilities')
  //   } catch (error) {
  //     if (error.response.status === 422) {
  //       setErrIdMsg(error.response.data.data)
  //       setErr(true)
  //       setBtnLoading(false)
  //       return false
  //     } else {
  //       toast.error(ERROR_ALERT_ADMIN)
  //     }
  //   }
  // }

  // const updateFacility = async (empty) => {
  //   setBtnLoading(true)
  //   try {
  //     const response = await updateFacilityDataReq(facilityState, empty)
  //     toast.success(response.data.message)
  //     navigate('/organization/facilities')
  //     setBtnLoading(false)
  //     setRefresh(true)
  //   } catch (error) {
  //     if (error.response.status === 422) {
  //       setErrIdMsg(error.response.data.data)
  //       setErr(true)
  //       setBtnLoading(false)
  //       return false
  //     } else {
  //       toast.error(ERROR_ALERT_ADMIN)
  //     }
  //   }
  // }
  // const dispatch = useDispatch()
  // const facilitySingleData = async () => {
  //   setfacilityLoading(true)
  //   try {
  //     setBtnLoading(true)
  //     const response = await getSingleFacilityDataReq(facilityState)

  //     const resObj = response.data.data

  //     resObj.is_active = resObj.is_active === 1
  //     setValues(resObj)
  //     setfacilityLoading(false)
  //     setBtnLoading(false)
  //     dispatch(showFacilityIdAction(null))
  //   } catch (error) {
  //     toast.error(ERROR_ALERT_ADMIN + 'deatail error')
  //     setfacilityLoading(false)
  //   }
  // }

  // useEffect(() => {
  //   if (!isAddMode) {
  //     setfacilityLoading(false)
  //     facilitySingleData()
  //     // dispatch(editFacilityIdAction(null));
  //     // AddFacility();
  //   } else {
  //     setValues(empty)
  //   }
  //   optionsData()
  // }, [facilityState])

  // const resetState = () => {
  //   setErr(false)
  //   setErrIdMsg('')
  // }

  // useEffect(() => {
  //   if (!facilityState) {
  //     setfacilityLoading(false)
  //     setValues(empty)
  //     resetState()
  //     resetForm()
  //   } else {
  //     resetState()
  //   }
  // }, [facilityState])

  // const optionsData = async () => {
  //   try {
  //     const response = await getOptionsListReq()
  //     setFacilityOption(response.data.data)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }
  // //search npi
  // // Set it to true initially

  // const getNpiInfo = async (e) => {
  //   setfacilityLoading(true)
  //   e.preventDefault()
  //   try {
  //     const response = await getNpiInfoData(npiInfoNumber)
  //     const data = response.data.data
  //     setVarified(true)
  //     if (data) {
  //       setValues({
  //         npi: npiInfoNumber,
  //         name: data.organization_name,
  //         address_line_1: data.address_1,
  //         address_line_2: data.address_2,
  //         city: data.city,
  //         state: data.state,
  //         zip_code: data.postal_code,
  //         phone: data.phone_number,
  //         fax: data.fax_number,
  //         email: data.email,
  //         facility_id: data.facility_id,
  //         phone: data.phone_number,
  //         email: data.email,
  //         is_varified: varified,
  //         is_active: varified,
  //         company_id: 1,
  //       })

  //       setfacilityLoading(false)
  //     } else {
  //       setVarified(false)
  //       setfacilityLoading(false)
  //     }
  //   } catch (error) {
  //     console.error('Error:', error)
  //     setfacilityLoading(false)
  //     setValues(empty)
  //   }
  // }

  // useEffect(() => {
  //   setValues({ ...values, npi: npiInfo.npi })
  // }, [npiInfo])

  return (
    <></>
    // <div
    //   id='kt_addfacility'
    //   className='bg-body'
    //   data-kt-drawer='true'
    //   data-kt-drawer-name='addfacility'
    //   data-kt-drawer-activate='true'
    //   data-kt-drawer-overlay='true'
    //   data-kt-drawer-width="{default:'300px', 'lg': '900px'}"
    //   data-kt-drawer-direction='end'
    //   data-kt-drawer-toggle='#kt_addfacility_toggle'
    //   data-kt-drawer-close='#kt_addfacility_close'
    // >
    //   <div className='card shadow-none rounded-0'>
    //     <div className='card-header' id='kt_addfacility_header'>
    //       <h3 className='card-title fw-bolder text-dark'>
    //         {!facilityState ? 'Add Facility' : 'Update Facility'}
    //       </h3>
    //       <div className='card-toolbar'>
    //         <button
    //           type='button'
    //           className='btn btn-sm btn-icon btn-active-light-primary me-n5'
    //           id='kt_addfacility_close'
    //         >
    //           <KTIcon iconName='cross' className='fs-1' />
    //         </button>
    //       </div>
    //     </div>

    //     <div className='card-body position-relative' id='kt_facility_body'>
    //       <ApiErrorMessages errorcheck={err} errormsg={errIdMsg} />
    //       <div
    //         id='kt_facility_scroll'
    //         className='position-relative scroll-y me-n5 pe-5'
    //         data-kt-scroll='true'
    //         data-kt-scroll-wrappers='#kt_facility_body'
    //         data-kt-scroll-dependencies='#kt_facility_header, #kt_facility_footer'
    //         data-kt-scroll-offset='5px'
    //       >
    //         {/* form start here  */}
    //         {facilityLoading ? (
    //           <div
    //             style={{
    //               display: 'flex',
    //               justifyContent: 'center',
    //               alignItems: 'center',
    //               minHeight: '300px',
    //             }}
    //           >
    //             <LoadingBar />
    //           </div>
    //         ) : (
    //           <form onSubmit={handleSubmit}>
    //             <div className='container'>
    //               {!facilityState ? (
    //                 <div className='row mb-10 me-4'>
    //                   <div className='col-6 mt-8'>
    //                     <input
    //                       name='search_npi'
    //                       type='text'
    //                       className='form-control'
    //                       placeholder='Search NPI....'
    //                       autoComplete='off'
    //                       onChange={(e) => setNpiInfoNumber(e.target.value)}
    //                       value={npiInfoNumber}
    //                     />
    //                   </div>
    //                   <button className='btn btn-icon btn-success mt-8' onClick={getNpiInfo}>
    //                     <i className='bi bi-search fs-4 '></i>
    //                   </button>

    //                   {((npiInfo.Errors && npiInfo.Errors.length > 0) ||
    //                     (npiInfo.results && npiInfo.results.length === 0)) &&
    //                     npiInfoNumber !== '' && (
    //                       <span className='errorHandle text-danger'>Invalid facility npi</span>
    //                     )}
    //                 </div>
    //               ) : null}

    //               <div className='row mb-10 me-4'>
    //                 <div className='col-8'>
    //                   <label className='form-label required'>Facility Name</label>
    //                   <input
    //                     id='name'
    //                     name='name'
    //                     type='text'
    //                     onChange={handleChange}
    //                     onBlur={handleBlur}
    //                     value={values.name || ''}
    //                     className={`form-control  ${errors.name && touched.name ? 'border border-danger' : ''
    //                       } `}
    //                   />
    //                   {errors.name && touched.name ? (
    //                     <div className='text-danger'>{errors.name}</div>
    //                   ) : null}
    //                 </div>

    //                 <div className='col-4'>
    //                   <label className='form-label required'>NPI</label>
    //                   <input
    //                     id='npi'
    //                     name='npi'
    //                     type='text'
    //                     onChange={handleChange}
    //                     onBlur={handleBlur}
    //                     value={values.npi || ''}
    //                     className={`form-control  ${errors.npi && touched.npi ? 'border border-danger' : ''
    //                       } `}
    //                   />
    //                   {errors.npi && touched.npi ? (
    //                     <div className='text-danger'>{errors.npi}</div>
    //                   ) : null}
    //                 </div>
    //               </div>
    //               <div className='row mb-10 me-4'>
    //                 <div className='col-6'>
    //                   <label className='form-label required'>Address Line 1</label>
    //                   <input
    //                     id='address_line_1'
    //                     name='address_line_1'
    //                     type='text'
    //                     onChange={handleChange}
    //                     onBlur={handleBlur}
    //                     value={values.address_line_1 || ''}
    //                     className={`form-control  ${errors.address_line_1 && touched.address_line_1
    //                         ? 'border border-danger'
    //                         : ''
    //                       } `}
    //                   />
    //                   {errors.address_line_1 && touched.address_line_1 ? (
    //                     <div className='text-danger'>{errors.address_line_1}</div>
    //                   ) : null}
    //                 </div>
    //                 <div className='col-6'>
    //                   <label className='form-label'>Address Line 2</label>
    //                   <input
    //                     id='address_line_2'
    //                     name='address_line_2'
    //                     type='text'
    //                     className='form-control'
    //                     onChange={handleChange}
    //                     onBlur={handleBlur}
    //                     value={values.address_line_2 || ''}
    //                   />
    //                 </div>
    //               </div>
    //               <div className='row mb-10 me-4'>
    //                 <div className='col-4'>
    //                   <label className='form-label required'>City</label>
    //                   <input
    //                     id='city'
    //                     name='city'
    //                     type='text'
    //                     onChange={handleChange}
    //                     onBlur={handleBlur}
    //                     value={values.city || ''}
    //                     className={`form-control  ${errors.city && touched.city ? 'border border-danger' : ''
    //                       } `}
    //                   />
    //                   {errors.city && touched.city ? (
    //                     <div className='text-danger'>{errors.city}</div>
    //                   ) : null}
    //                 </div>
    //                 <div className='col-4'>
    //                   <label className='form-label required'>State</label>
    //                   <select
    //                     aria-label='Select example'
    //                     name='state'
    //                     onChange={handleChange}
    //                     onBlur={handleBlur}
    //                     value={values.state || ''}
    //                     className={`form-select  ${errors.state && touched.state ? 'border border-danger' : ''
    //                       } `}
    //                   >
    //                     <option value='#'>Choose..</option>
    //                     {facilityOption.states &&
    //                       facilityOption.states?.map((states, index) => (
    //                         <option key={index} value={states.option_id}>
    //                           {states.option_value}
    //                         </option>
    //                       ))}
    //                   </select>
    //                 </div>

    //                 <div className='col-4'>
    //                   <label className='form-label required'>ZIP Code</label>
    //                   <input
    //                     id='zip_code'
    //                     name='zip_code'
    //                     type='text'
    //                     onChange={handleChange}
    //                     onBlur={handleBlur}
    //                     value={values.zip_code || ''}
    //                     className={`form-control  ${errors.zip_code && touched.zip_code ? 'border border-danger' : ''
    //                       } `}
    //                   />
    //                   {errors.zip_code && touched.zip_code ? (
    //                     <div className='text-danger'>{errors.zip_code}</div>
    //                   ) : null}
    //                 </div>
    //               </div>

    //               <div className='row mb-10 me-4'>
    //                 <div className='col-3'>
    //                   <label className='form-label required'>Phone</label>
    //                   <InputMask
    //                     mask='(999)999-9999'
    //                     placeholder='(---)--- ----'
    //                     id='phone'
    //                     name='phone'
    //                     type='text'
    //                     onChange={handleChange}
    //                     onBlur={handleBlur}
    //                     value={values.phone || ''}
    //                     className={`form-control  ${errors.phone && touched.phone ? 'border border-danger' : ''
    //                       } `}
    //                   />
    //                   {errors.phone && touched.phone ? (
    //                     <div className='text-danger'>{errors.phone}</div>
    //                   ) : null}
    //                 </div>
    //                 <div className='col-3'>
    //                   <label className='form-label'>Fax</label>
    //                   <InputMask
    //                     id='fax'
    //                     mask='(999)999-9999'
    //                     placeholder='(---)--- ----'
    //                     name='fax'
    //                     type='text'
    //                     className='form-control'
    //                     onChange={handleChange}
    //                     onBlur={handleBlur}
    //                     value={values.fax || ''}
    //                   />
    //                 </div>

    //                 <div className='col-3'>
    //                   <label className='form-label '>Email</label>
    //                   <input
    //                     id='email'
    //                     name='email'
    //                     type='text'
    //                     className='form-control'
    //                     onChange={handleChange}
    //                     onBlur={handleBlur}
    //                     value={values.email || ''}
    //                   />
    //                 </div>
    //                 <div className='col-3'>
    //                   <label className='form-label'>Facility ID</label>
    //                   <input
    //                     id='facility_id'
    //                     name='facility_id'
    //                     type='text'
    //                     className='form-control'
    //                     onChange={handleChange}
    //                     onBlur={handleBlur}
    //                     value={values.facility_id || ''}
    //                   />
    //                   <input className='form-control' type='hidden' name='company_id' value='1' />
    //                 </div>
    //               </div>
    //               <div className='mb-10 mb-10 mx-5'>
    //                 <div className='form-check form-switch form-check-custom form-check-solid'>
    //                   <input
    //                     name='is_active'
    //                     className='form-check-input'
    //                     type='checkbox'
    //                     value={values.is_active}
    //                     id='is_active'
    //                     checked={values.is_active || ''}
    //                     onChange={handleChange}
    //                     onBlur={handleBlur}
    //                   />
    //                   <label className='form-check-label' htmlFor='is_active'>
    //                     Is Active
    //                   </label>
    //                 </div>
    //               </div>
    //             </div>

    //             <div className=' py-1 d-flex justify-content-between' id='kt_facility_footer'>
    //               <div
    //                 className='mt-18 py-1 d-flex justify-content-between'
    //                 id='kt_facility_footer'
    //               >
    //                 <SubmitButton
    //                   btnLoading={btnLoading}
    //                   title={!facilityState ? 'Save' : 'Update'}
    //                   callback_event={handleSubmit}
    //                   class_name='btn btn-primary'
    //                 />
    //               </div>

    //               <div className='mt-18'>
    //                 <button
    //                   type='button'
    //                   className='btn btn-bg-body text-primary mt-2'
    //                   id='kt_addfacility_close'
    //                 >
    //                   Back
    //                   <KTIcon iconName='arrow-right' className='fs-3 text-primary ' />
    //                 </button>
    //               </div>
    //             </div>
    //           </form>
    //         )}
    //         {/* form end here  */}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export { AddUpdateFacility }
