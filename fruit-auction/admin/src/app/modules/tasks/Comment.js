import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { KTIcon, toAbsoluteUrl } from '../../../_metronic/helpers'
import SubmitButton from '../../utilities/SubmitButton'
import { setDataContext } from '../../utilities/SettingContext'
import { ERROR_ALERT_ADMIN } from '../../utilities/AlertMsgConstant'
import { showTaskReq, postTaskCommentReq } from './__request/RequestTask'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { LoadingBar } from '../../utilities/LoadingBar'
import { editTaskIdAction, showTaskIdAction } from '../../redux/action'

const Comments = () => {

  const taskState = useSelector((state) => state.taskIdEditReducer)
  const userState = useSelector((state) => state.userReducerComp)

  const { setRefresh } = useContext(setDataContext)

  const [btnLoading, setBtnLoading] = useState(false)

  const [err, setErr] = useState(false)

  const [errIdMsg, setErrIdMsg] = useState('')

  const [taskLoading, settaskLoading] = useState(false)

  const statingValues = {
    comment: '',
    user_id: userState.id,
    task_id: taskState,
  }

  const { values, handleBlur, handleChange, handleSubmit, resetForm } =
    useFormik({
      initialValues: statingValues,
      onSubmit: (values) => {
        values.task_id = taskState
        updateTaskData(values)
      },
    })

  // show data single
  const dispatch = useDispatch()
  const [task, setTask] = useState()

  const taskDataObj = async () => {
    settaskLoading(true)
    try {
      const response = await showTaskReq(taskState)
      setTask({
        ...response.data.data,
        comments: response.data.data.comments || [],
      })
      dispatch(showTaskIdAction(null))
      settaskLoading(false)
    } catch (error) {
      toast.error(ERROR_ALERT_ADMIN)
      settaskLoading(false)
    }
  }
  // update function
  const navigate = useNavigate()
  const updateTaskData = async (values) => {
    setBtnLoading(true)
    await postTaskCommentReq(taskState, values)
      .then(function (response) {
        setBtnLoading(false)
        toast.success(response.data.message)
        setErr(false)
        setRefresh(true)
        navigate('/tasks/view')
        resetForm();
        dispatch(editTaskIdAction(null))
      })
      .catch(function (error) {
        if (error.response && error.response.status === 422) {
          setErrIdMsg(error.response.data.data)
          setErr(true)
          setBtnLoading(false)
          return false
        } else {
          toast.error(ERROR_ALERT_ADMIN)
        }
      })
  }

  const resetState = () => {
    setErr(false)
    setErrIdMsg('')
  }
  useEffect(() => {
    if (taskState) {
      taskDataObj()
      resetState()
    }
  }, [taskState])

  return (
    <>
      <div
        id='kt_addtaskcomment'
        className='bg-body'
        data-kt-drawer='true'
        data-kt-drawer-name='addtaskcomment'
        data-kt-drawer-activate='true'
        data-kt-drawer-overlay='true'
        data-kt-drawer-direction='end'
        data-kt-drawer-toggle='#kt_addtaskcomment_toggle'
        data-kt-drawer-close='#kt_addtaskcomment_close'
      >
        <div className='card shadow-none rounded-0'>
          <div className='card-header' id='kt_taskcomment_header'>
            <div className='card-title fw-bolder text-dark'>
              Task Comments
            </div>
            <div className='card-toolbar'>
              <button
                type='button'
                className='btn btn-sm btn-icon btn-active-light-primary me-n5'
                id='kt_addtaskcomment_close'
              >
                <KTIcon iconName='cross' className='fs-1' />
              </button>
            </div>
          </div>

          <div className='card-body position-relative' id='kt_task_body'>
            <div
              id='kt_tasks_scroll'
              className='position-relative  me-n5 pe-5'
              data-kt-scroll='true'
              data-kt-scroll-wrappers='#kt_tasks_body'
              data-kt-scroll-dependencies=' #kt_tasks_footer'
              data-kt-scroll-offset='5px'
              style={{ width: '900px' }}
            >
              {taskLoading ? (
                <div>
                  <LoadingBar />
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className='container'>
                    <div className='row g-0'>
                      <div className='col bg-light-warning px-6 py-3 rounded-2  mb-7'>
                        <div className='fs-6 text-gray-700'>Title</div>
                        <div className='fs-5 fw-bold text-gray-800'>{task ? task.title : null}</div>
                      </div>
                    </div>
                    <div className='mt-2'>
                      <label className='form-label'>All Comments</label>
                      {task && task.comments && task.comments.length > 0 ? (
                        <ul>
                          {task.comments.map?.((command) => (
                            <li key={command.id}>
                              <div className='d-flex align-items-center'>
                                {command.image ? (
                                  <img
                                    src={command.image}
                                    alt="Commenter's Picture"
                                    className='me-2'
                                  />
                                )
                                  : (
                                    <img
                                      src={toAbsoluteUrl('/media/svg/avatars/001-boy.svg')}
                                      alt='Default Picture'
                                      className='me-2'
                                      style={{ width: '20px', height: '20px', marginBottom: '10px' }}
                                    />
                                  )}
                                <span>{command.comment}</span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p>No comments available.</p>
                      )}
                    </div>

                    <div className='row mb-10 me-4'>
                      <div className='col-12'>
                        <label className='form-label'>Comments</label>
                        <textarea
                          name='comment'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.comment}
                          className='form-control'
                        />
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
          <div className='card-footer py-5 d-flex justify-content-between ' id='kt_task_footer'>
            <div className='mt-2'>
              <SubmitButton
                btnLoading={btnLoading}
                title='Make Comment'
                callback_event={handleSubmit}
                class_name='btn btn-primary'
              />
            </div>
            <button
              type='button'
              className='btn btn-bg-body text-primary mt-4'
              id='kt_addtaskcomment_close'
            >
              Back
              <KTIcon iconName='arrow-right' className='fs-3 text-primary' />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export { Comments }
