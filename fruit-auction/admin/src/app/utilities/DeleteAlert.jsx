// import {KTSVG} from '../../_metronic/helpers'

// const DeleteAlert = ({deleteData, deleteDataFunction, deleteDataID}) => {
//   return (
//     <div className='modal fade' tabIndex={-1} id='kt_modal_1'>
//       <div className='modal-dialog'>

//         <div className="alert alert-dismissible bg-light-danger d-flex flex-center flex-column py-10 px-10 px-lg-20 mb-10">
//           <button type="button" className="position-absolute top-0 end-0 m-2 btn btn-icon btn-icon-danger" data-bs-dismiss="alert">
//             <span className="svg-icon svg-icon-1"><KTSVG
//                 path='/media/icons/duotune/arrows/arr061.svg'
//                 className='svg-icon svg-icon-2x'
//               /></span>
//           </button>
 
//           <span className="svg-icon svg-icon-5tx svg-icon-danger mb-5">
//             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mh-50px"><rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="black"></rect><rect x="11" y="14" width="7" height="2" rx="1" transform="rotate(-90 11 14)" fill="black"></rect><rect x="11" y="17" width="2" height="2" rx="1" transform="rotate(-90 11 17)" fill="black"></rect></svg>
//           </span>

//           <div className="text-center">
//             <h5 className="fw-bolder fs-1 mb-5">Danger Caution</h5>

//             <div className="separator separator-dashed border-danger opacity-25 mb-5"></div>

//             <div className="mb-9">
//               The alert component can be used to highlight certain parts of your page for <strong>{deleteData}</strong>.<br/>
//             </div>

//             <div className="d-flex flex-center flex-wrap">
//                 <button
//                   type='button'
//                   className='btn btn-outline btn-outline-danger btn-active-danger m-2'
//                   data-bs-dismiss='modal'
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={() => deleteDataFunction(deleteDataID)}
//                   data-bs-dismiss='modal'
//                   type='button'
//                   className='btn btn-danger m-2'
//                 >
//                   Delete
//                 </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default DeleteAlert






import {KTSVG} from '../../_metronic/helpers'

const DeleteAlert = ({deleteData, deleteDataFunction, deleteDataID}) => {
  return (
    <div className='modal fade' tabIndex={-1} id='kt_modal_1'>
      <div className='modal-dialog'>
        {/* alert  */}
        <div className='modal-content alert alert-dismissible bg-light-danger   px-10  mb-10'>
          <div className='modal-header'>
            <h5 className='modal-title'>Delete Alert</h5>
            <div
              className='btn btn-icon btn-sm btn-active-light-primary ms-2'
              data-bs-dismiss='modal'
              aria-label='Close'
            >
              <KTSVG
                path='/media/icons/duotune/arrows/arr061.svg'
                className='svg-icon svg-icon-2x'
              />
            </div>
            
          </div>
          <div className='modal-body'>
            <div className=''>
              <div className='text-center'>
              <span className="svg-icon svg-icon-5tx svg-icon-danger mb-5">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mh-50px"><rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="black"></rect><rect x="11" y="14" width="7" height="2" rx="1" transform="rotate(-90 11 14)" fill="black"></rect><rect x="11" y="17" width="2" height="2" rx="1" transform="rotate(-90 11 17)" fill="black"></rect></svg>
           </span>
                <h5 className='fw-bolder fs-1 mb-5'>
                  {' '}
                  Are You sure you want to delete <span className='fw-bold'>{deleteData}</span>?
                </h5>

                <div className='separator separator-dashed border-danger opacity-25 mb-5'></div>

                <div className='d-flex flex-center flex-wrap'>
                  <button
                    type='button'
                    className='btn btn-outline btn-outline-danger btn-active-danger m-2'
                    data-bs-dismiss='modal'
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => deleteDataFunction(deleteDataID)}
                    data-bs-dismiss='modal'
                    type='button'
                    className='btn btn-danger m-2'
                  >
                    
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteAlert
