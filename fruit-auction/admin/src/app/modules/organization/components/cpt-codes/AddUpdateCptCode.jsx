import React, {useState, useContext, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {KTIcon} from '../../../../../_metronic/helpers'
import SubmitButton from '../../../../utilities/SubmitButton'
import ApiErrorMessages from '../../../../utilities/ApiErrorMessages'
import {setDataContext} from '../../../../utilities/SettingContext'
import {postCptCodeReq, putCptCodeReq, showCptCodeEditReq} from './__request/RequestCptCodes'
import {ERROR_ALERT_ADMIN} from '../../../../utilities/AlertMsgConstant'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {Formik, useFormik} from 'formik'
import {ValidationSchema} from './__request/ValidationSchema'
import {useDispatch, useSelector} from 'react-redux'
import {LoadingBar} from '../../../../utilities/LoadingBar'
import cptData from '../../../../utilities/cpt-cods-clean.json'
import {editCptIdAction, showCptIdAction} from '../../../../redux/action'
const AddUpdateCptCode = () => {
  // const userProfile = useSelector((state) => state.userReducerComp) 
  //  const navigate = useNavigate()
  // const settingState = useSelector((state) => state.cptIdEditReducer)
  // const {setRefresh} = useContext(setDataContext)
  // const [errIdMsg, setErrIdMsg] = useState([])
  // const [err, setErr] = useState(false)
  // const [btnLoading, setBtnLoading] = useState(false)
  // const [detailLoading, setDetailLoading] = useState(true)

  // const empty = {
  //   code: '',
  //   description: '',
  //   pos_code: '',
  //   modifier1: '',
  //   modifier2: '',
  //   modifier3: '',
  //   modifier4: '',
  //   fee: '',
  //   is_active: true,
  //   company_id: userProfile.company.id,
  // }

  // const {values, errors, setValues, touched, handleBlur, handleChange, handleSubmit, resetForm} =
  //   useFormik({
  //     initialValues: empty,
  //     validationSchema: ValidationSchema,
  //     onSubmit: (values) => {
  //       if (settingState === null) {
  //         values.company_id = userProfile.company.id
  //         addCptCode(values)
  //       } else {
  //         updateCptCode(values)
  //       }
  //     },
  //   })

  // // add cpt
  // const addCptCode = async (handleinput) => {
  //   setBtnLoading(true)
  //   try {
  //     const response = await postCptCodeReq(handleinput)
  //     toast.success(response.data.message)
  //     setBtnLoading(false)
  //     setRefresh(true)
  //     resetForm()
  //     navigate('/organization/cpt-codes')
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
  // const cptDetailData = async () => {
  //   setDetailLoading(true)
  //   try {
  //     const response = await showCptCodeEditReq(settingState)
  //     const data = response.data.data
  //     data.is_active = data.is_active === 1
  //     setValues(response.data.data)
  //     setDetailLoading(false)
  //   } catch (error) {
  //     toast.error(ERROR_ALERT_ADMIN)
  //     setDetailLoading(false)
  //   }
  // }

  // const updateCptCode = async (handleinput) => {
  //   setBtnLoading(true)
  //   try {
  //     const response = await putCptCodeReq(settingState, handleinput)
  //     toast.success(response.data.message)
  //     navigate('/organization/cpt-codes')
  //     setBtnLoading(false)
  //     setRefresh(true)
  //     dispatch(editCptIdAction(null))
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

  // const resetState = () => {
  //   setErr(false)
  //   setErrIdMsg('')
  // }
  // useEffect(() => {
  //   if (!settingState && values) {
  //     setDetailLoading(false)
  //     setValues(empty)
  //     resetState()
  //     resetForm()
  //   } else {
  //     cptDetailData()
  //     resetState()
  //   }
  // }, [settingState])

  // // search cpt code
  // const handleCptCodeSearch = (code) => {
  //   setDetailLoading(true)
  //   const matchingCpt = cptData.find((cpt) => cpt.code === code)

  //   if (matchingCpt) {
  //     setValues({
  //       ...values,
  //       code: matchingCpt.code,
  //       description: matchingCpt.description,
  //     })
  //   } else {
  //     setValues({
  //       ...values,
  //       code: '',
  //       description: '',
  //     })
  //   }
  //   setDetailLoading(false)
  // }
  return (
    <>
    
    </>
    // <div
    //   id='kt_cptcodes'
    //   className='bg-body'
    //   data-kt-drawer='true'
    //   data-kt-drawer-name='cptcodes'
    //   data-kt-drawer-activate='true'
    //   data-kt-drawer-overlay='true'
    //   data-kt-drawer-width="{default:'300px', 'lg': '900px'}"
    //   data-kt-drawer-direction='end'
    //   data-kt-drawer-toggle='#kt_cptcodes_toggle'
    //   data-kt-drawer-close='#kt_cptcodes_close'
    // >
    //   <div className='card shadow-none rounded-0'>
    //     <div className='card-header' id='kt_cptcodes_header'>
    //       <h3 className='card-title fw-bolder text-dark'>
    //         {!settingState ? 'Add CPT ' : 'Update CPT '}
    //       </h3>

    //       <div className='card-toolbar'>
    //         <button
    //           type='button'
    //           className='btn btn-sm btn-icon btn-active-light-primary me-n5'
    //           id='kt_cptcodes_close'
    //         >
    //           <KTIcon iconName='cross' className='fs-1' />
    //         </button>
    //       </div>
    //     </div>

    //     <div className='card-body position-relative' id='kt_cptcodes_body'>
    //       <ApiErrorMessages errorcheck={err} errormsg={errIdMsg} />
    //       <div
    //         id='kt_cptcodes_scroll'
    //         className='position-relative scroll-y me-n5 pe-5'
    //         data-kt-scroll='true'
    //         data-kt-scroll-height='auto'
    //         data-kt-scroll-wrappers='#kt_cptcodes_body'
    //         data-kt-scroll-dependencies='#kt_cptcodes_header, #kt_cptcodes_footer'
    //         data-kt-scroll-offset='5px'
    //       >
    //         {/* form start here  */}
    //         {detailLoading ? (
    //           <LoadingBar />
    //         ) : (
    //           <form id='cpt' onSubmit={handleSubmit}>
    //             <div className='container ' style={{flex: '1', overflow: 'auto'}}>
    //               <div className='row mb-10 me-4'>
    //                 <div className='col-6 mt-8'>
    //                   <input
    //                     name='searchcode'
    //                     onChange={handleChange}
    //                     value={values.searchcode}
    //                     type='text'
    //                     className='form-control'
    //                     placeholder='Search CPT Code...'
    //                     autoComplete='off'
    //                     onBlur={(e) => handleCptCodeSearch(e.target.value)}
    //                   />
    //                 </div>

    //                 <a href='#' className='btn btn-icon btn-success mt-8'>
    //                   <i className='bi bi-search fs-4 '></i>
    //                 </a>
    //               </div>
    //               <div className='row mb-10 me-4'>
    //                 <div className='col-4'>
    //                   <label className='form-label required'>CPT Code</label>
    //                   <input
    //                     name='code'
    //                     onChange={handleChange}
    //                     onBlur={handleBlur}
    //                     value={values.code}
    //                     type='text'
    //                     className={`form-control ${
    //                       errors.code && touched.code ? 'border border-danger' : ''
    //                     } `}
    //                   />
    //                   {errors.code && touched.code ? (
    //                     <div className='text-danger'>{errors.code}</div>
    //                   ) : null}
    //                 </div>
    //                 <div className='col-4'>
    //                   <label className='form-label'>POS Code</label>
    //                   <input
    //                     name='pos_code'
    //                     onChange={handleChange}
    //                     onBlur={handleBlur}
    //                     value={values.pos_code}
    //                     type='text'
    //                     className='form-control'
    //                   />
    //                 </div>
    //               </div>
    //               <div className='row mb-10 me-4'>
    //                 <div className='col-12'>
    //                   <label className='form-label'>Description</label>
    //                   <input
    //                     name='description'
    //                     onChange={handleChange}
    //                     onBlur={handleBlur}
    //                     value={values.description}
    //                     type='text'
    //                     className='form-control'
    //                   />
    //                 </div>
    //               </div>

    //               <div className='row mb-10 me-4'>
    //                 <div className='col-3'>
    //                   <label className='form-label'>Modifier A</label>
    //                   <input
    //                     onChange={handleChange}
    //                     onBlur={handleBlur}
    //                     value={values.modifier1}
    //                     name='modifier1'
    //                     type='text'
    //                     className='form-control'
    //                   />
    //                 </div>
    //                 <div className='col-3'>
    //                   <label className='form-label'>Modifier B</label>
    //                   <input
    //                     onChange={handleChange}
    //                     onBlur={handleBlur}
    //                     value={values.modifier2}
    //                     name='modifier2'
    //                     type='text'
    //                     className='form-control'
    //                   />
    //                 </div>

    //                 <div className='col-3'>
    //                   <label className='form-label'>Modifier C</label>
    //                   <input
    //                     onChange={handleChange}
    //                     onBlur={handleBlur}
    //                     value={values.modifier3}
    //                     name='modifier3'
    //                     type='text'
    //                     className='form-control'
    //                   />
    //                 </div>
    //                 <div className='col-3'>
    //                   <label className='form-label'>Modifier D</label>
    //                   <input
    //                     onChange={handleChange}
    //                     onBlur={handleBlur}
    //                     value={values.modifier4}
    //                     name='modifier4'
    //                     type='text'
    //                     className='form-control'
    //                   />
    //                 </div>
    //               </div>

    //               <div className='row me-4'>
    //                 <div className='col-3'>
    //                   <label className='form-label required'>Fee</label>
    //                   <input
    //                     onChange={handleChange}
    //                     onBlur={handleBlur}
    //                     value={values.fee}
    //                     name='fee'
    //                     type='number'
    //                     className={`form-control ${
    //                       errors.fee && touched.fee ? 'border border-danger' : ''
    //                     } `}
    //                   />
    //                   {errors.fee && touched.fee ? (
    //                     <div className='text-danger'>{errors.fee}</div>
    //                   ) : null}
    //                 </div>
    //               </div>
    //               <div className=' d-flex mt-10'>
    //                 <div className='mb-10 mx-5'>
    //                   <div className='form-check form-switch form-check-custom form-check-solid'>
    //                     <input
    //                       name='is_active'
    //                       className='form-check-input'
    //                       type='checkbox'
    //                       value={values.is_active}
    //                       id='isactive'
    //                       checked={values.is_active}
    //                       onChange={handleChange}
    //                       onBlur={handleBlur}
    //                     />
    //                     <label className='form-check-label' htmlFor='isactive'>
    //                       Is Active
    //                     </label>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>

    //             {/* form end here  */}
    //             <div
    //               className='card-footer py-5 d-flex justify-content-between'
    //               id='kt_facility_footer'
    //               style={{marginTop: '5rem'}}
    //             >
    //               <div className=' py-5 d-flex justify-content-between' id='kt_facility_footer'>
    //                 <SubmitButton
    //                   btnLoading={btnLoading}
    //                   title={!settingState ? 'Save ' : 'Update'}
    //                   callback_event={handleSubmit}
    //                   class_name='btn btn-primary'
    //                 />
    //               </div>

    //               <div>
    //                 <button
    //                   type='button'
    //                   className='btn btn-bg-body text-primary mt-7'
    //                   id='kt_cptcodes_close'
    //                 >
    //                   Back
    //                   <KTIcon iconName='arrow-right' className='fs-3 text-primary ' />
    //                 </button>
    //               </div>
    //             </div>
    //           </form>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}
export {AddUpdateCptCode}
