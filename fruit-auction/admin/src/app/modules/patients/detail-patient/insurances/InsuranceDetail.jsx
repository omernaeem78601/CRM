import { useEffect, useState } from 'react'
import { KTIcon } from '../../../../../_metronic/helpers'
import { useDispatch, useSelector } from 'react-redux'
import { ERROR_ALERT_ADMIN } from '../../../../utilities/AlertMsgConstant'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { showInsuranceDataReq } from './__request/RequestInsurance'
import { LoadingBar } from '../../../../utilities/LoadingBar'
import { formatDate } from '../../../../utilities/Helper'

const InsuranceDetail = () => {
  // const insuranceViewState = useSelector((state) => state.insuranceIdShowReducerComp)
  // const [insuranceLoading, setInsuranceLoading] = useState(true)


  // const [values, setValues] = useState()
  // const insuranceSingleData = async () => {
  //   setInsuranceLoading(true)
  //   try {
  //     const response = await showInsuranceDataReq(insuranceViewState)
  //     setValues(response.data.data)
  //     setInsuranceLoading(false)
  //   } catch (error) {
  //     toast.error(ERROR_ALERT_ADMIN)
  //     setInsuranceLoading(false)
  //   }
  // }
  // useEffect(() => {
  //   if (insuranceViewState) {
  //     insuranceSingleData()
  //   }
  // }, [insuranceViewState])

  return (
    <>
    
    </>
    // <div
    //   id='kt_insurancedetail'
    //   className='bg-body'
    //   data-kt-drawer='true'
    //   data-kt-drawer-name='insurancedetail'
    //   data-kt-drawer-activate='true'
    //   data-kt-drawer-overlay='true'
    //   data-kt-drawer-width="{default:'300px', 'lg': '900px'}"
    //   data-kt-drawer-direction='end'
    //   data-kt-drawer-toggle='#kt_insurancedetail_toggle'
    //   data-kt-drawer-close='#kt_insurancedetail_close'
    // >
    //   <div className='card shadow-none rounded-0 '>
    //     <div className='card-header' id='kt_insurancedetail_header'>
    //       <h3 className='card-title fw-bolder text-dark'>Insurance Detail</h3>
    //       <div className='card-toolbar'>
    //         <button
    //           type='button'
    //           className='btn btn-sm btn-icon btn-active-light-primary me-n5'
    //           id='kt_insurancedetail_close'
    //         >
    //           <KTIcon iconName='cross' className='fs-1' />
    //         </button>
    //       </div>
    //     </div>
    //     <div
    //       className='card-body position-relative p-0'
    //       style={{ width: '69rem' }}
    //       id='kt_insurancedetail_body'
    //     >
    //       <div className='card card-xl-stretch mb-xl-8 border-0'>
    //         {insuranceLoading ? (
    //           <LoadingBar />
    //         ) : (
    //           <div className='card-body p-0 d-flex flex-column'>
    //             <div className='px-9 pt-7 card-rounded h-275px w-100 bg-light-primary'>
    //               <h3 className='card-title align-items-start flex-column'>
    //                 <span className='card-label fw-bold fs-3 mb-1'>{values.level}</span>
    //               </h3>
    //               <div className='d-flex text-center flex-column text-success pt-8'>
    //                 <span className='fw-semibold fs-7'>{values.payer_id}</span>
    //                 <span className='fw-bold fs-2x pt-1'>{values.payer_name}</span>
    //               </div>
    //             </div>

    //             <div
    //               className='shadow-xs card-rounded mx-9 mb-9 px-6 py-9 position-relative z-index-1 bg-body'
    //               style={{ marginTop: '-100px' }}
    //             >
    //               <div className='row g-0'>
    //                 <div className='col mr-8'>
    //                   <div className='fs-7 text-muted fw-semibold'>Insurance ID</div>
    //                   <div className='d-flex align-items-center'>
    //                     <div className='fs-4 fw-bold'>{values.subscriber_id}</div>
    //                   </div>
    //                 </div>
    //                 <div className='col'>
    //                   <div className='fs-7 text-muted fw-semibold'>Insurance Status</div>
    //                   <div className='fs-4 fw-bold'>{values.status}</div>
    //                 </div>
    //                 <div className='col'>
    //                   <div className='fs-7 text-muted fw-semibold'>Effective Date</div>
    //                   <div className='fs-4 fw-bold'>{formatDate(values.effective_date)}</div>
    //                 </div>
    //                 <div className='col'>
    //                   <div className='fs-7 text-muted fw-semibold'>Expiration Date</div>
    //                   <div className='fs-4 fw-bold'>{formatDate(values.expiration_date)}</div>
    //                 </div>
    //               </div>

    //               <div className='row g-0 mt-8'>
    //                 <div className='col mr-8'>
    //                   <div className='fs-7 text-muted fw-semibold'>Payer Address</div>
    //                   <div className='d-flex align-items-center'>
    //                     <div className='fs-4 fw-bold'>{values.payer_address}</div>
    //                   </div>
    //                 </div>
    //                 <div className='col'>
    //                   <div className='fs-7 text-muted fw-semibold'>Payer Class</div>
    //                   <div className='fs-4 fw-bold'>{values.payer_class}</div>
    //                 </div>
    //                 <div className='col'>
    //                   <div className='fs-7 text-muted fw-semibold'>Payer Type</div>
    //                   <div className='fs-4 fw-bold'>{values.payer_type}</div>
    //                 </div>
    //                 <div className='col'>
    //                   <div className='fs-7 text-muted fw-semibold'>Plan Name</div>
    //                   <div className='fs-4 fw-bold'>{values.plan_name}</div>
    //                 </div>
    //               </div>

    //               <div className='row g-0 mt-8'>
    //                 <div className='col mr-8'>
    //                   <div className='fs-7 text-muted fw-semibold'>Insurance Type Code</div>
    //                   <div className='d-flex align-items-center'>
    //                     <div className='fs-4 fw-bold'>{values.type_code}</div>
    //                   </div>
    //                 </div>
    //                 <div className='col'>
    //                   <div className='fs-7 text-muted fw-semibold'>Co-Pay</div>
    //                   <div className='fs-4 fw-bold'>{values.copay_amount}</div>
    //                 </div>
    //                 <div className='col'>
    //                   <div className='fs-7 text-muted fw-semibold'>Co-Ins</div>
    //                   <div className='fs-4 fw-bold'>{values.coins_amount}</div>
    //                 </div>
    //                 <div className='col'>
    //                   <div className='fs-7 text-muted fw-semibold'>Group No</div>
    //                   <div className='fs-4 fw-bold'>{values.group_no}</div>
    //                 </div>
    //               </div>

    //               <div className='row g-0 mt-8'>
    //                 <div className='col'>
    //                   <div className='fs-7 text-muted fw-semibold'>Insurer Image</div>
    //                   <div className='fs-4 fw-bold'>
    //                     {' '}
    //                     {
    //                       <img
    //                         src={`http://api.neomd.ca${values.card_front_img_path}`}
    //                         alt='img'
    //                         height={'300px'}
    //                         width={'300px'}
    //                       />
    //                     }
    //                   </div>
    //                 </div>
    //                 <div className='col'>
    //                   <div className='fs-7 text-muted fw-semibold'>Insurer Image</div>
    //                   <div className='fs-4 fw-bold'>
    //                     {' '}
    //                     {
    //                       <img
    //                         src={`http://api.neomd.ca${values.card_back_img_path}`}
    //                         alt='img'
    //                         height={'300px'}
    //                         width={'300px'}
    //                       />
    //                     }
    //                   </div>
    //                 </div>
    //               </div>

    //               <h2 className='mt-9'>Insured Information</h2>

    //               <div className='row g-0 mt-8'>
    //                 <div className='col mr-8'>
    //                   <div className='fs-7 text-muted fw-semibold'>Patient Relationship</div>
    //                   <div className='d-flex align-items-center'>
    //                     <div className='fs-4 fw-bold'>{values.subscriber_type}</div>
    //                   </div>
    //                 </div>
    //                 <div className='col'>
    //                   <div className='fs-7 text-muted fw-semibold'></div>
    //                   <div className='fs-4 fw-bold'></div>
    //                 </div>
    //                 <div className='col'>
    //                   <div className='fs-7 text-muted fw-semibold'></div>
    //                   <div className='fs-4 fw-bold'></div>
    //                 </div>
    //                 <div className='col'>
    //                   <div className='fs-7 text-muted fw-semibold'></div>
    //                   <div className='fs-4 fw-bold'></div>
    //                 </div>
    //               </div>

    //               {values.subscriber_type !== 'self' && (
    //                 <>
    //                   <div className='row g-0 mt-8'>
    //                     <div className='col mr-8'>
    //                       <div className='fs-7 text-muted fw-semibold'>Insurer First Name</div>
    //                       <div className='d-flex align-items-center'>
    //                         <div className='fs-4 fw-bold'>{values.insured_first_name}</div>
    //                       </div>
    //                     </div>
    //                     <div className='col'>
    //                       <div className='fs-7 text-muted fw-semibold'>Insurer Middle Name</div>
    //                       <div className='fs-4 fw-bold'>{values.insured_middle_name}</div>
    //                     </div>
    //                     <div className='col'>
    //                       <div className='fs-7 text-muted fw-semibold'>Insurer Last Name</div>
    //                       <div className='fs-4 fw-bold'>{values.insured_last_name}</div>
    //                     </div>
    //                     <div className='col'>
    //                       <div className='fs-7 text-muted fw-semibold'>Insurer DOB</div>
    //                       <div className='fs-4 fw-bold'>{values.insured_dob}</div>
    //                     </div>
    //                   </div>

    //                   <div className='row g-0 mt-8'>
    //                     <div className='col mr-8'>
    //                       <div className='fs-7 text-muted fw-semibold'>Insurer Gender</div>
    //                       <div className='d-flex align-items-center'>
    //                         <div className='fs-4 fw-bold'>{values.insured_gender}</div>
    //                       </div>
    //                     </div>
    //                     <div className='col'>
    //                       <div className='fs-7 text-muted fw-semibold'>Insurer Address1</div>
    //                       <div className='fs-4 fw-bold'>{values.insured_street1}</div>
    //                     </div>
    //                     <div className='col'>
    //                       <div className='fs-7 text-muted fw-semibold'>Insurer Address2</div>
    //                       <div className='fs-4 fw-bold'>{values.insured_street2}</div>
    //                     </div>
    //                     <div className='col'>
    //                       <div className='fs-7 text-muted fw-semibold'></div>
    //                       <div className='fs-4 fw-bold'></div>
    //                     </div>
    //                   </div>

    //                   <div className='row g-0 mt-8'>
    //                     <div className='col mr-8'>
    //                       <div className='fs-7 text-muted fw-semibold'>Insurer City </div>
    //                       <div className='d-flex align-items-center'>
    //                         <div className='fs-4 fw-bold'>{values.insured_city}</div>
    //                       </div>
    //                     </div>

    //                     <div className='col'>
    //                       <div className='fs-7 text-muted fw-semibold'>Insurer State</div>
    //                       <div className='fs-4 fw-bold'>{values.insured_state}</div>
    //                     </div>
    //                     <div className='col'>
    //                       <div className='fs-7 text-muted fw-semibold'>Insurer Zipcode</div>
    //                       <div className='fs-4 fw-bold'>{values.insured_zipcode}</div>
    //                     </div>
    //                     <div className='col'>
    //                       <div className='fs-7 text-muted fw-semibold'>Insurer Phone</div>
    //                       <div className='fs-4 fw-bold'>{values.insured_phone}</div>
    //                     </div>
    //                   </div>

    //                   <div className='row g-0 mt-8'>
    //                     <div className='fs-7 text-muted fw-semibold'>Insurer img</div>
    //                   </div>
    //                 </>
    //               )}
    //             </div>
    //           </div>
    //         )}
    //       </div>
    //     </div>
    //     <div
    //       className='card-footer py-2 d-flex justify-content-between'
    //       id='kt_insurancedetail_footer'
    //     >
    //       <div className='mt-4'></div>

    //       <button
    //         type='button'
    //         className='btn btn-bg-body text-primary mt-3'
    //         id='kt_insurancedetail_close'
    //       >
    //         Back
    //         <KTIcon iconName='arrow-right' className='fs-3 text-primary ' />
    //       </button>
    //     </div>
    //   </div>
    // </div>
  )
}

export default InsuranceDetail
