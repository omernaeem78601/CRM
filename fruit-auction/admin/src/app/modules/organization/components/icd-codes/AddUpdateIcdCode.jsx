import {useState, useContext, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {KTIcon} from '../../../../../_metronic/helpers'
import SubmitButton from '../../../../utilities/SubmitButton'
import ApiErrorMessages from '../../../../utilities/ApiErrorMessages'
import {setDataContext} from '../../../../utilities/SettingContext'
import {postIcdCodeReq, putIcdCodeReq, showIcdCodeEditReq} from './__request/RequestIcdCodes'
import {ERROR_ALERT_ADMIN} from '../../../../utilities/AlertMsgConstant'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {useFormik} from 'formik'
import {ValidationSchema} from './__request/ValidationSchema'
import {useDispatch, useSelector} from 'react-redux'
import {LoadingBar} from '../../../../utilities/LoadingBar'
import {editIcdIdAction, showIcdIdAction} from '../../../../redux/action'
const AddUpdateIcdCode = () => {
  // const navigate = useNavigate()
  // const icdState = useSelector((state) => state.icdIdEditReducer)
  // const {setRefresh, setIcdType} = useContext(setDataContext)
  // const [errIdMsg, setErrIdMsg] = useState([])
  // const [err, setErr] = useState(false)
  // const [btnLoading, setBtnLoading] = useState(false)
  // const [detailLoading, setDetailLoading] = useState(true)
  // const userProfile = useSelector((state) => state.userReducerComp)
  // const empty = {
  //   name: '',
  //   description: '',
  //   summary: '',
  //   type: 'icd-10',
  //   is_active: true,
  //   company_id: userProfile.company.id,
  // }
  // const {values, errors, setValues, touched, handleBlur, handleChange, handleSubmit, resetForm} =
  //   useFormik({
  //     initialValues: empty,
  //     validationSchema: ValidationSchema,
  //     onSubmit: (values) => {
  //       if (icdState === null) {
  //         values.company_id = userProfile.company.id
  //         addIcdCode(values)
  //         console.log(values)
  //       } else {
  //         updateIcdCode(values)
  //       }
  //     },
  //   })

  // // add ICD
  // const addIcdCode = async (handleinput) => {
  //   setBtnLoading(true)  
  //   try {
  //     const response = await postIcdCodeReq(handleinput)
  //     toast.success(response.data.message)
  //     setIcdType(handleinput.type)
  //     setBtnLoading(false)
  //     setRefresh(true)
  //     resetForm()
  //     navigate('/organization/icd-codes')
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
  // const icdDetailData = async () => {
  //   setDetailLoading(true)
  //   try {
  //     const response = await showIcdCodeEditReq(icdState)
  //     const data = response.data.data
  //     data.is_active = data.is_active === 1
  //     setValues(response.data.data)
  //     setDetailLoading(false)
  //   } catch (error) {
  //     toast.error(ERROR_ALERT_ADMIN)
  //     setDetailLoading(false)
  //   }
  // }

  // const updateIcdCode = async (handleinput) => {
  //   setBtnLoading(true)
  //   try {
  //     const response = await putIcdCodeReq(icdState, handleinput)
  //     toast.success(response.data.message)
  //     navigate('/organization/icd-codes')
  //     setBtnLoading(false)
  //     setRefresh(true)
  //     dispatch(editIcdIdAction(null))
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
  //   if (!icdState && values) {
  //     setDetailLoading(false)
  //     setValues(empty)
  //     resetState()
  //     resetForm()
  //   } else {
  //     icdDetailData()
  //     resetState()
  //   }
  // }, [icdState])

  return (
    <>
    </>
    // <div
    //   id='kt_icdcodes'
    //   className='bg-body'
    //   data-kt-drawer='true'
    //   data-kt-drawer-name='icdcodes'
    //   data-kt-drawer-activate='true'
    //   data-kt-drawer-overlay='true'
    //   // data-kt-drawer-width="{default:'300px', 'lg': '900px'}"
    //   data-kt-drawer-direction='end'
    //   data-kt-drawer-toggle='#kt_icdcodes_toggle'
    //   data-kt-drawer-close='#kt_icdcodes_close'
    // >
    //   <div className='card shadow-none rounded-0'>
    //     <div className='card-header' id='kt_icdcodes_header'>
    //       <h3 className='card-title fw-bolder text-dark'>
    //         {!icdState ? 'Add ICD ' : 'Update ICD'}
    //       </h3>

    //       <div className='card-toolbar'>
    //         <button
    //           type='button'
    //           className='btn btn-sm btn-icon btn-active-light-primary me-n5'
    //           id='kt_icdcodes_close'
    //         >
    //           <KTIcon iconName='cross' className='fs-1' />
    //         </button>
    //       </div>
    //     </div>

    //     <div className='card-body position-relative' id='kt_icdcodes_body'>
    //       <ApiErrorMessages errorcheck={err} errormsg={errIdMsg} />
    //       <div
    //         id='kt_icdcodes_scroll'
    //         className='position-relative scroll-y me-n5 pe-5'
    //         data-kt-scroll='true'
    //         data-kt-scroll-height='auto'
    //         data-kt-scroll-wrappers='#kt_icdcodes_body'
    //         data-kt-scroll-dependencies='#kt_icdcodes_header, #kt_icdcodes_footer'
    //         data-kt-scroll-offset='5px'
    //         style={{width: '600px'}}
    //       >
    //         {/* form start here  */}
    //         {detailLoading ? (
    //           <LoadingBar />
    //         ) : (
    //           <form onSubmit={handleSubmit}>
    //             <div className='container ' style={{flex: '1', overflow: 'auto'}}>
    //               <div className='row mb-10 me-4'>
    //                 <div className='col-6'>
    //                   <label className='form-label'>ICD Type</label>
    //                   <select
    //                     name='type'
    //                     onChange={handleChange}
    //                     onBlur={handleBlur}
    //                     value={values.type}
    //                     className={`form-select ${
    //                       errors.type && touched.type ? 'border border-danger' : ''
    //                     } `}
    //                   >
    //                     <option value='icd-9'>ICD-9</option>
    //                     <option value='icd-10'>ICD-10</option>
    //                     <option value='icd-11'>ICD-11</option>
    //                   </select>
    //                   {errors.type && touched.type ? (
    //                     <div className='text-danger'>{errors.type}</div>
    //                   ) : null}
    //                 </div>
    //               </div>
    //               <div className='row mb-10 me-4'>
    //                 <div className='col-6'>
    //                   <label className='form-label required'>ICD Code</label>
    //                   <input
    //                     name='name'
    //                     onChange={handleChange}
    //                     onBlur={handleBlur}
    //                     value={values.name}
    //                     type='text'
    //                     className={`form-control ${
    //                       errors.name && touched.name ? 'border border-danger' : ''
    //                     } `}
    //                   />
    //                   {errors.name && touched.name ? (
    //                     <div className='text-danger'>{errors.name}</div>
    //                   ) : null}
    //                 </div>
    //               </div>
    //               <div className='row mb-10 me-4'>
    //                 <div className='col-6'>
    //                   <label className='form-label'>Description</label>
    //                   <input
    //                     name='description'
    //                     onChange={handleChange}
    //                     onBlur={handleBlur}
    //                     value={values.description}
    //                     type='text'
    //                     className={`form-control ${
    //                       errors.description && touched.description ? 'border border-danger' : ''
    //                     } `}
    //                   />
    //                   {errors.description && touched.description ? (
    //                     <div className='text-danger'>{errors.description}</div>
    //                   ) : null}
    //                 </div>
    //               </div>
    //               <div className='row mb-10 me-4'>
    //                 <div className='col-12'>
    //                   <label className='form-label'>Summary</label>
    //                   <textarea
    //                     className='form-control'
    //                     id='textField'
    //                     name='summary'
    //                     rows='4'
    //                     cols='80'
    //                     onChange={handleChange}
    //                     onBlur={handleBlur}
    //                     value={values.summary}
    //                   ></textarea>
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
    //             <div
    //               className='card-footer py-5 d-flex justify-content-between'
    //               id='kt_icd_footer'
    //               style={{marginTop: '5rem'}}
    //             >
    //               <div className=' py-5 d-flex justify-content-between' id='kt_icd_footer'>
    //                 <SubmitButton
    //                   btnLoading={btnLoading}
    //                   title={!icdState ? 'Save ' : 'Update'}
    //                   callback_event={handleSubmit}
    //                   class_name='btn btn-primary'
    //                 />
    //               </div>

    //               <div>
    //                 <button
    //                   type='button'
    //                   className='btn btn-bg-body text-primary mt-7'
    //                   id='kt_icdcodes_close'
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
export {AddUpdateIcdCode}
