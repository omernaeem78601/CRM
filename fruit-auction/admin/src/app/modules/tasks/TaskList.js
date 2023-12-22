import { useContext, useEffect, useState } from 'react'
import { KTIcon } from '../../../_metronic/helpers'
import { setDataContext } from '../../utilities/SettingContext'
import Pagination from '../../utilities/Pagination'
import DeleteAlert from '../../utilities/DeleteAlert'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ERROR_ALERT_ADMIN, NoDataFoundMessage } from '../../utilities/AlertMsgConstant'
import { editTaskIdAction, showTaskIdAction } from '../../redux/action'
import { useDispatch } from 'react-redux'
import { deleteTaskReq, getTaskReq } from './__request/RequestTask'
import { LoadingBar } from '../../utilities/LoadingBar'
import { formatDate } from '../../utilities/Helper'

const TaskList = () => {

  const dispatch = useDispatch();

  const editTaskIdDispatch = (taskId) => {
    dispatch(editTaskIdAction(taskId));
  }

  const showTaskIdDispatch = (taskId) => {
    dispatch(showTaskIdAction(taskId));
  }

  const [deleteData, setDeleteData] = useState('')
  const [deleteDataID, setDeleteDataID] = useState('')
  const [searchValue, setSearchValue] = useState([])
  const [paginationData, setPaginationData] = useState(null)

  const {
    refresh,
    setRefresh,
    pageNumber
  } = useContext(setDataContext)

  const [taskData, setTaskData] = useState([])
  const [taskLoading, settaskLoading] = useState(true)

  const fetchTaskData = async (e) => {
    settaskLoading(true)
    try {
      const response = await getTaskReq(pageNumber, searchValue)
      setTaskData(response.data.data)
      setPaginationData(response.data.meta)
      settaskLoading(false)
      setRefresh(false)
    } catch (error) {
      toast.error(ERROR_ALERT_ADMIN)
      settaskLoading(false)
      setRefresh(false)
    }
  }

  const deleteTaskDataObj = (taskData, id) => {
    setDeleteData(taskData)
    setDeleteDataID(id)
  }

  const deleteTask = async (taskID) => {
    try {
      const response = await deleteTaskReq(taskID)
      if (response) {
        fetchTaskData()
        dispatch(showTaskIdAction(null));
        dispatch(editTaskIdAction(null));
        toast.success(response.data.message)
      }
    } catch (error) {
      toast.error(ERROR_ALERT_ADMIN)
    }
  }

  useEffect(() => {
    fetchTaskData()
  }, [refresh])

  const handleSearch = (e) => {
    const { name, value } = e.target
    setSearchValue({ ...searchValue, [name]: value })
  }

  //search
  const searchTaskData = async (e) => {
    e.preventDefault()
    fetchTaskData()
  }

  return (
    <>
      <div className='d-flex flex-wrap flex-stack justify-content-between mb-2'>
        <div className="d-flex align-items-center position-relative my-1 ">
          <i className="ki-duotone ki-magnifier fs-3   position-absolute ms-5">
            <span className="path1"></span><span className="path2"></span>
          </i>
          <input
            type="text"
            name='text'
            data-kt-user-table-filter="search"
            className="form-control form-control-solid w-250px ps-13"
            placeholder="Quick task search..."
            onChange={handleSearch}
          />
          <a onClick={searchTaskData} className='btn btn-success'><i className="bi bi-search fs-8 p-0"></i></a>
        </div>
        <div className="d-flex align-items-center gap-2 gap-lg-3" data-select2-id="select2-data-122-hy60">
          <div className="m-0" data-select2-id="select2-data-121-ewuv">
            <a href="#" className="btn btn-sm btn-flex btn-secondary fw-bold" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
              <i className="ki-duotone ki-filter fs-6 text-muted me-1">
                <span className="path1"></span>
                <span className="path2"></span>
              </i>
              Filter
            </a>
            <div className="menu menu-sub menu-sub-dropdown w-500px w-md-600px" data-kt-menu="true" id="kt_menu_651c03b12454d" data-select2-id="select2-data-kt_menu_651c03b12454d">
              <div className="px-7 py-5">
                <div className="fs-5 text-dark fw-bold">Filter Options</div>
              </div>

              <div className="separator border-gray-200"></div>

              <div className="px-7 py-5" data-select2-id="select2-data-120-1779">
                <div className="mb-10" data-select2-id="select2-data-119-kwwx">
                  <label className="form-label fw-semibold">Search:</label>
                  <form id='providerFilter' >
                    <div className='d-flex justify-content-between mx-4 my-4'>
                      <select
                        className='form-select fw-bolder'

                        onChange={handleSearch}
                        name='user'
                      >
                        <option value='#'>user</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                      </select>

                      <select
                        className='form-select fw-bolder'
                        onChange={handleSearch}
                        name='priority'
                      >
                        <option value='#'>priority</option>
                        <option value='low'>Low</option>
                        <option value='medium'>Medium</option>
                        <option value='high'>High</option>
                      </select>

                      <select
                        className='form-select fw-bolder'

                        type='date'
                        name='status'
                        onChange={handleSearch}
                      >
                        <option value='#'>status</option>
                        <option value='active'>Active</option>
                        <option value='inactive'>Inactive</option>
                      </select>
                    </div>
                    <div className='d-flex mx-4 my-4'>
                      <input

                        className='form-select fw-bolder'
                        data-kt-select2='true'
                        data-allow-clear='true'
                        data-kt-patient-table-filter='role'
                        data-hide-search='true'
                        type='date'
                        name='filterdate'
                        onChange={handleSearch}
                      />


                      <select
                        className='form-select fw-bolder'

                        type='date'
                        name='field'
                        onChange={handleSearch}
                      >
                        <option value='#'>date</option>
                        <option value='created_at'>Created At</option>
                        <option value='start_date'>Start date</option>
                        <option value='due_date'>Due date</option>
                      </select>
                    </div>
                  </form>

                </div>


                <div className="d-flex justify-content-end">
                  <button className="btn btn-sm btn-light btn-active-light-primary me-2" >Reset</button>

                  <button onClick={searchTaskData} className='mx-3 btn btn-primary '>
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <button
              id='kt_addtask_toggle'
              onClick={() => editTaskIdDispatch(null)}
              className='btn btn-primary '
            >
              <KTIcon iconName='plus' className='fs-3' />
              Add Task
            </button>
          </div>
        </div>
      </div>

      <div className='row g-6 g-xl-9'>
        <div className='col-md-12 col-xl-12'>
          {taskLoading ? (
            <LoadingBar />
          ) : (
            <div className='card mb-3 p-3'>
              <div className='card-body p-0'>
                <div
                  id='kt_table_users_wrapper'
                  className='dataTables_wrapper dt-bootstrap4 no-footer'
                >
                  <div className='table-responsive'>
                    <table className='table table-hover table-row-bordered gy-4 gs-4'>
                      <thead>
                        <tr className='fw-bold fs-6 text-gray-800 border-bottom-2 border-gray-200'>
                          <th width="30%">Task Title</th>
                          <th>Assignee</th>
                          <th>Owner</th>
                          <th>Comments</th>
                          <th>Priority</th>
                          <th>Status</th>
                          <th>Start Date</th>
                          <th>Due Date</th>
                          <th className="text-center">Actions</th>
                        </tr>
                      </thead>
                      {taskData.length === 0 ? (
                        <tbody>
                          <tr>
                            <td colSpan='10' center>
                              <NoDataFoundMessage />
                            </td>
                          </tr>

                        </tbody>
                      ) : (
                        <tbody>
                          {taskData.map((task, index) => {
                            const isDueDatePassed = (task.due_date) ? (new Date() > new Date(task.due_date)) : false;
                            return (
                              <tr key={index} className={isDueDatePassed ? 'bg-light-danger' : ''}>
                                <td>{task.title}</td>
                                <td>{task.assignee_name}</td>
                                <td>{task.user_name}</td>
                                <td>{task.total_comments}</td>
                                <td>
                                  <span
                                    className={`badge ${task.priority === 'low'
                                      ? 'badge-light-success'
                                      : task.priority === 'medium'
                                        ? 'badge-light-info'
                                        : task.priority === 'high'
                                          ? 'badge-light-warning'
                                          : task.priority === 'critical'
                                            ? 'badge-light-danger'
                                            : ''
                                      } fw-bold me-auto px-4 py-3`}
                                  >
                                    {task.priority === 'low' ? 'Low' : task.priority === 'medium' ? 'Medium' : task.priority === 'high' ? 'High' : task.priority === 'critical' ? 'Critical' : ''}
                                  </span>
                                </td>

                                <td>{task.status}</td>
                                <td>{formatDate(task.start_date)}</td>
                                <td>{formatDate(task.due_date)}</td>

                                <td className="text-center">
                                  <a
                                    href='#'
                                    onClick={() => showTaskIdDispatch(task.id)}
                                    id='kt_detailtask_toggle'

                                    className='btn btn-icon btn-bg-info btn-active-color-white btn-sm me-1'
                                  >
                                    <i className='bi bi-eye-fill fs-4 px-0'></i>
                                  </a>

                                  <a
                                    href='#'
                                    id='kt_addtask_toggle'
                                    onClick={() => editTaskIdDispatch(task.id)}
                                    className='btn btn-icon btn-bg-success btn-active-color-white btn-sm me-1'
                                  >
                                    <i className='bi bi-pencil-fill fs-4 px-0'></i>
                                  </a>

                                  <a
                                    href='#'
                                    data-bs-toggle='modal'
                                    data-bs-target='#kt_modal_1'
                                    onClick={() => {
                                      deleteTaskDataObj(task.title, task.id)
                                    }}
                                    className='btn btn-icon btn-bg-danger btn-active-color-white btn-sm me-1'
                                  >
                                    <i className='bi bi-trash-fill fs-4 px-0'></i>
                                  </a>

                                  <a
                                    href='#'
                                    id='kt_addtaskcomment_toggle'
                                    onClick={() => editTaskIdDispatch(task.id)}
                                    className='btn btn-icon btn-bg-success btn-active-color-white btn-sm me-1'
                                  >
                                    <i className='bi bi-chat-dots-fill fs-4 px-0'></i>
                                  </a>
                                </td>
                              </tr>
                            )
                          })}
                        </tbody>
                      )}
                    </table>
                  </div>

                  <Pagination paginationData={paginationData} />

                </div>
              </div>
            </div>
          )}
          <DeleteAlert
            deleteData={deleteData}
            deleteDataFunction={deleteTask}
            deleteDataID={deleteDataID}
          />
        </div>
      </div>
    </>
  )
}

export default TaskList
