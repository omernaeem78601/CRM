import { useState, useEffect, useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { KTIcon } from '../../../_metronic/helpers'
import SubmitButton from '../../utilities/SubmitButton'
import { setDataContext } from '../../utilities/SettingContext'
import ApiErrorMessages from '../../utilities/ApiErrorMessages'
import { ERROR_ALERT_ADMIN } from '../../utilities/AlertMsgConstant'
import { postTaskReq, showTaskReq, putTaskReq, getUserListReq } from './__request/RequestTask'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ValidationSchema } from './__request/ValidationSchema'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'

import { LoadingBar } from '../../utilities/LoadingBar'
import { editTaskIdAction, showTaskIdAction } from '../../redux/action'

const AddUpdateTasks = () => {
  const taskState = useSelector((state) => state.taskIdEditReducer)
  const userProfile = useSelector((state) => state.userReducerComp)
  const { setRefresh } = useContext(setDataContext)

  const [btnLoading, setBtnLoading] = useState(false)

  const [err, setErr] = useState(false)

  const [errIdMsg, setErrIdMsg] = useState('')

  const [taskLoading, settaskLoading] = useState(false)

  const empty = {
    title: '',
    description: '',
    priority: '',
    assignee_id: '',
    status: 'todo',
    start_date: '',
    due_date: '',
    company_id: userProfile.company.id,
    user_id: '',
  }
  const { values, errors, setValues, touched, handleBlur, handleChange, handleSubmit, resetForm } =
    useFormik({
      initialValues: empty,
      validationSchema: ValidationSchema,
      onSubmit: (values) => {
        if (!taskState) {
          handleSubmitw(values)
        } else {
          updateTaskData(values)
        }
        console.log("values",values)
      },
    })

  const navigate = useNavigate()
  const location = useLocation()

  // add function
  const handleSubmitw = async (formValues) => {
    setBtnLoading(true)
    try {
      const response = await postTaskReq(formValues)
      toast.success(response.data.message)
      navigate(location.pathname)
      setBtnLoading(false)
      setRefresh(true)
      resetForm()
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setErrIdMsg(error.response.data.data)
        setErr(true)
        setBtnLoading(false)
        return false
      } else {
        toast.error(ERROR_ALERT_ADMIN)
      }
    }
  }

  // show data single
  const dispatch = useDispatch()
  const taskDataObj = async () => {
    settaskLoading(true)
    try {
      const response = await showTaskReq(taskState)
      setValues(response.data.data)
      dispatch(showTaskIdAction(null))
      settaskLoading(false)
    } catch (error) {
      toast.error(ERROR_ALERT_ADMIN)
      settaskLoading(false)
    }
  }

  // update function
  const updateTaskData = async (values) => {
    setBtnLoading(true)
    await putTaskReq(taskState, values)
      .then(function (response) {
        navigate('/tasks/view')
        setBtnLoading(false)
        toast.success(response.data.message)
        setErr(false)
        setRefresh(true)
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
    } else {
      setValues(empty)
      resetState()
      resetForm()
    }
  }, [taskState])


  const [userOption, setUserOption] = useState([]);
  useEffect(() => {
    const fetchUserOptions = async () => {
      try {
        const response = await getUserListReq();
        const userOptions = response.data.data.map((user) => ({
          value: user.id,
          full_name: user.full_name,
        }));
        setUserOption(userOptions);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserOptions();
  }, []);


  return (
    <>
      <div
        id='kt_addtask'
        className='bg-body'
        data-kt-drawer='true'
        data-kt-drawer-name='addtask'
        data-kt-drawer-activate='true'
        data-kt-drawer-overlay='true'
        data-kt-drawer-direction='end'
        data-kt-drawer-toggle='#kt_addtask_toggle'
        data-kt-drawer-close='#kt_addtask_close'
      >
        <div className='card shadow-none rounded-0'>
          <div className='card-header' id='kt_task_header'>
            <div className='card-title fw-bolder text-dark'>
              {!taskState ? 'Add Task' : 'Update Task'}
            </div>
            <div className='card-toolbar'>
              <button
                type='button'
                className='btn btn-sm btn-icon btn-active-light-primary me-n5'
                id='kt_addtask_close'
              >
                <KTIcon iconName='cross' className='fs-1' />
              </button>
            </div>
          </div>

          <div className='card-body position-relative' id='kt_task_body'>
            <ApiErrorMessages errorcheck={err} errormsg={errIdMsg} />

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
                    <div className='row mb-10 me-4'>
                      <div className='col-12'>
                        <label className='form-label required'>Task Title</label>
                        <input
                          id='title'
                          name='title'
                          type='text'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.title || ''}
                          className={`form-control  ${errors.title && touched.title ? 'border border-danger' : ''
                            } `}
                        />

                      </div>
                    </div>

                    <div className='row mb-10 me-4'>
                      <div className='col-12'>
                        <label className='form-label'>Description</label>
                        <textarea
                          name='description'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.description || ''}
                          className='form-control'
                          rows={8}
                        />

                      </div>
                    </div>
                    <div className='row mb-10 me-4'>
                      <div className='col-4'>
                        <label className='form-label required'>Assignee</label>
                        <select
                          name='assignee_id'
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.assignee_id || ''}
                          className={`form-select ${errors.assignee_id && touched.assignee_id ? 'border border-danger' : ''
                            }`}
                        >
                          <option value='#'>choose</option>
                          {userOption.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.full_name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className='col-4'>
                        <label className='form-label required'>owner</label>
                        <select
                          name='user_id'
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.user_id || ''}
                          className={`form-select ${errors.user_id && touched.user_id ? 'border border-danger' : ''
                            }`}
                        >
                          <option value='#'>choose</option>
                          {userOption.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.full_name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className='col-4'>
                        <label className='form-label required'>Priority</label>
                        <select
                          name='priority'
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.priority || ''}
                          className={`form-select ${errors.priority && touched.priority ? 'border border-danger' : ''
                            }`}
                        >
                          <option value='#'>Choose </option>
                          <option value='low'>Low</option>
                          <option value='medium'>Medium</option>
                          <option value='high'>High</option>
                          <option value='critical'>Critical</option>
                        </select>
                      </div>

                    </div>
                    <div className='row mb-10 me-4'>
                      <div className='col-4'>
                        <label className='form-label required'>Status</label>
                        <select
                          name='status'
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.status || ''}
                          className={`form-select ${errors.status && touched.status ? 'border border-danger' : ''
                            }`}
                        >
                          <option value='todo'>To Do</option>
                          <option value='in_progress'>In Progress</option>
                          <option value='review'>Review</option>
                          <option value='done'>Done</option>
                          <option value='archive'>Archive</option>
                        </select>
                      </div>
                      <div className='col-4'>
                        <label className='form-label '>Start Date</label>
                        <input
                          type='date'
                          name='start_date'
                          className='form-control'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.start_date || ''}
                        />
                      </div>
                      <div className='col-4'>
                        <label className='form-label'>Due Date</label>
                        <input
                          type='date'
                          name='due_date'
                          className='form-control'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.due_date || ''}
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
                title={!taskState ? 'Save' : 'Update'}
                callback_event={handleSubmit}
                class_name='btn btn-primary'
              />
            </div>

            <button
              type='button'
              className='btn btn-bg-body text-primary mt-4'
              id='kt_addtask_close'
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

export { AddUpdateTasks }
