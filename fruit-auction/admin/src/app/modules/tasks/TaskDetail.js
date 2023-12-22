import {useState, useEffect} from 'react'
import {KTIcon, toAbsoluteUrl} from '../../../_metronic/helpers'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import {ERROR_ALERT_ADMIN} from '../../utilities/AlertMsgConstant'
import {LoadingBar} from '../../utilities/LoadingBar'
import {useDispatch, useSelector} from 'react-redux'
import {showTaskReq} from './__request/RequestTask'
import {showTaskIdAction} from '../../redux/action'
import {formatDate} from '../../utilities/Helper'

const TaskDetail = () => {

  const taskState = useSelector((state) => state.taskIdShowReducerComp)

  const [taskValues, setTaskValues] = useState([])
  const [taskDetailLoading, setTaskDetailLoading] = useState(true)

  const dispatch = useDispatch()

  const taskData = async () => {
    setTaskDetailLoading(true)
    try {
      const response = await showTaskReq(taskState)
      setTaskValues({
        ...response.data.data,
        commands: response.data.data.commands || [],
      })
      dispatch(showTaskIdAction(null))
      setTaskDetailLoading(false)
    } catch (error) {
      toast.error(ERROR_ALERT_ADMIN)
      setTaskDetailLoading(false)
    }
  }

  useEffect(() => {
    if (taskState && taskState.length !== null) {
      taskData()
    }
  }, [taskState])
  

  return (
    <div
      id='kt_detailtask'
      className='bg-body'
      data-kt-drawer='true'
      data-kt-drawer-name='detailtask'
      data-kt-drawer-activate='true'
      data-kt-drawer-overlay='true'
      data-kt-drawer-direction='end'
      data-kt-drawer-toggle='#kt_detailtask_toggle'
      data-kt-drawer-close='#kt_detailtask_close'
    >
      <div className='card card-xl-stretch mb-xl-8 border-0'
            style={{width:'1000px'}}
      >
        {taskDetailLoading ? (
          <LoadingBar />
        ) : (
          <>
            <div className='card shadow-none rounded-0'>
              <div className='card-header' id='kt_taskdetail_header' >
                <h3 className='card-title fw-bolder text-dark'>Task Detail</h3>
                <div className='card-toolbar'>
                  <button
                    type='button'
                    className='btn btn-sm btn-icon btn-active-light-primary me-n5'
                    id='kt_detailtask_close'
                  >
                    <KTIcon iconName='cross' className='fs-1' />
                  </button>
                </div>
              </div>

              <div className='card card-xl-stretch mb-xl-8'>
                <div className='card-body p-5'>
                  <div className='row g-0'>
                    <div className='col bg-light-warning px-6 py-3 rounded-2  mb-7'>
                      <div className='fs-6 text-gray-700'>Title</div>
                      <div className='fs-5 fw-bold text-gray-800'>{taskValues.title}</div>
                    </div>
                  </div>

                  <div className='row g-0'>
                    <div className='col bg-light-warning px-6 py-3 rounded-2  mb-7'>
                      <div className='fs-6 text-gray-700'>Description</div>
                      <div className='fs-5 fw-bold text-gray-800'>{taskValues.description}</div>
                    </div>
                  </div>

                  <div className='row g-0'>
                    <div className='col bg-light-warning px-6 py-3 rounded-2 me-7 mb-7'>
                      <div className='fs-6 text-gray-700'>Assigned by</div>
                      <div className='fs-5 fw-bold text-gray-800'>{taskValues.user_name}</div>
                    </div>
                    <div className='col bg-light-warning px-6 py-3 rounded-2 me-7 mb-7'>
                      <div className='fs-6 text-gray-700'>Priority</div>
                      <div className='fs-5 fw-bold text-gray-800'>{taskValues.priority}</div>
                    </div>
                    <div className='col bg-light-warning px-6 py-3 rounded-2 me-7 mb-7'>
                      <div className='fs-6 text-gray-700'>Status</div>
                      <div className='fs-5 fw-bold text-gray-800'>{taskValues.status}</div>
                    </div>
                  </div>

                  <div className='row g-0'>
                    <div className='col bg-light-warning px-6 py-3 rounded-2 me-7 mb-7'>
                      <div className='fs-6 text-gray-700'>Created On</div>
                      <div className='fs-5 fw-bold text-gray-800'>
                        {formatDate(taskValues.start_date)}
                      </div>
                    </div>
                    <div className='col bg-light-warning px-6 py-3 rounded-2 me-7 mb-7'>
                      <div className='fs-6 text-gray-700'>Due Date</div>
                      <div className='fs-5 fw-bold text-gray-800'>
                        {formatDate(taskValues.due_date)}
                      </div>
                    </div>
                    <div className='col bg-light-warning px-6 py-3 rounded-2 me-7 mb-7'></div>
                  </div>

                  <div className='mt-2'>
                    <label className='form-label'>All Comments</label>
                    {taskValues && taskValues.comments && taskValues.comments.length > 0 ? (
                      <ul>
                        {taskValues.comments.map?.((comments) => (
                          <li key={comments.id}>
                            <div className='d-flex align-items-center'>
                              {comments.image ? (
                                <img
                                  src={comments.image}
                                  alt="Commenter's Picture"
                                  className='me-2'
                                />
                              ) : (
                                <img
                                  src={toAbsoluteUrl('/media/svg/avatars/001-boy.svg')}
                                  alt='Default Picture'
                                  className='me-2'
                                  style={{width: '20px', height: '20px', marginBottom: '10px'}}
                                />
                              )}
                              <span>{comments.comment}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>No comments available.</p>
                    )}
                  </div>
                </div>
                <div
                  className='card-footer py-2 d-flex justify-content-end'
                  id='kt_facility_footer'
                >
                  <button
                    type='button'
                    className='btn btn-bg-body text-primary mt-2'
                    id='kt_detailtask_close'
                  >
                    Back
                    <KTIcon iconName='arrow-right' className='fs-3 text-primary ' />
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export {TaskDetail}
