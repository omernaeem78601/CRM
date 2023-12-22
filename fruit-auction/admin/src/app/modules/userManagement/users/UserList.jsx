import { useContext, useEffect, useState } from 'react'
import { deleteUserReq, getUserReq } from './_request/RequestUser'
import { setDataContext } from '../../../utilities/SettingContext'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ERROR_ALERT_ADMIN, NoDataFoundMessage } from '../../../utilities/AlertMsgConstant';
import { formatDate } from '../../../utilities/Helper';
import { KTIcon } from '../../../../_metronic/helpers';
import { LoadingBar } from '../../../utilities/LoadingBar';
import { Link } from 'react-router-dom';
import { UserProfileImage } from '../../../utilities/Image';
import DeleteAlert from '../../../utilities/DeleteAlert';
const UserList = () => {

  const {
    pageNumber,
    refresh
  } = useContext(setDataContext)
  const [searchValue, setSearchValue] = useState([])
  const [userData, setUserData] = useState([])
  // console.log("userData",userData)
  const [paginationData, setPaginationData] = useState(null)
  const [userLoading, setUserLoading] = useState(false)
  const [deleteData, setDeleteData] = useState('')
  const [deleteDataID, setDeleteDataID] = useState('')
  const fetchUserList = async (e) => {
    try {
      setUserLoading(true)
      const response = await getUserReq(pageNumber, searchValue)
      setUserData(response.data.data)
      setPaginationData(response.data.meta)
    } catch (error) {
      toast.error(ERROR_ALERT_ADMIN)
    } finally {
      setUserLoading(false);
    }
  }

  const handleSearch = (e) => {
    const { name, value } = e.target
    setSearchValue({ ...searchValue, [name]: value })
  }
  //search
  const searchTaskData = async (e) => {
    e.preventDefault()
    fetchUserList()
  }

  const deleteUser = async (userID) => {
    try {
      const response = await deleteUserReq(userID)
      if (response) {
        fetchUserList()
        toast.success(response.data.message)
      }
    } catch (error) {
      toast.error(ERROR_ALERT_ADMIN)
    }
  }

  const deleteTaskDataObj = (taskData, id) => {
    setDeleteData(taskData)
    setDeleteDataID(id)
  }

  useEffect(() => {
    fetchUserList()
  }, [refresh])
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
              <i className="ki-duotone ki-filter fs-6 text-muted me-1"><span className="path1"></span><span className="path2"></span></i>
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
              id='kt_adduser_toggle'
              // onClick={() => editTaskIdDispatch(null)}
              className='btn btn-primary '
            >
              <KTIcon iconName='plus' className='fs-3' />
              Add New User
            </button>
          </div>
        </div>
      </div>

      <div id="kt_app_content" className="app-content flex-column-fluid">
        <div id="kt_app_content_container" className="app-container container-xxl">
          <div className="card">
            {userLoading ? (
              <LoadingBar />
            ) : (
              <div className="card-body py-4">
                <table
                  className="table align-middle table-row-dashed fs-6 gy-5"
                  id="kt_table_users"
                >
                  <thead>
                    <tr className="text-start text-muted fw-bold fs-7 text-uppercase  ">
                      <th className="col">User</th>
                      <th className="col">Role</th>
                      <th className="col">Last login</th>
                      <th className="col">Last Update</th>
                      <th className="col">Joined Date</th>
                      <th className="col">Actions</th>
                    </tr>
                  </thead>
                  {userData.length === 0 ? (
                    <tbody>
                      <tr>
                        <td colSpan='10'>
                          <NoDataFoundMessage />
                        </td>
                      </tr>

                    </tbody>
                  ) : (
                    <tbody>
                      {userData.map((user, index) => {
                        return (
                          <tr key={index}>
                            <td>
                              <div className="d-flex">
                                <span>
                                  <div className='symbol symbol-circle symbol-50px overflow-hidden me-3'>
                                    <UserProfileImage profileImagePath={user.profile_image_path} gender={user.gender} />
                                  </div>
                                  <div>
                                    {user.full_name}
                                  </div>
                                  <div>
                                    {user.email}
                                  </div>
                                </span>
                              </div></td>
                            <td>{user.role}</td>
                            <td>{formatDate(user.last_login)}</td>
                            <td>{formatDate(user.last_updated)}</td>
                            <td>{formatDate(user.created_at)}</td>
                            <td className="text-center">
                              <Link
                                to={`/user/profile/${user.id}`}
                                className='btn btn-icon btn-bg-info btn-active-color-white btn-sm me-1'
                              >
                                <i className='bi bi-eye-fill fs-4 px-0'></i>
                              </Link>

                              <Link
                                href='#'
                                id='kt_user_view_update_tab'
                                to={`/user/profile/${user.id}`}
                                className='btn btn-icon btn-bg-success btn-active-color-white btn-sm me-1'
                              >
                                <i className='bi bi-pencil-fill fs-4 px-0'></i>
                              </Link>

                              <a
                                href='#'
                                data-bs-toggle='modal'
                                data-bs-target='#kt_modal_1'
                                onClick={() => {
                                  deleteTaskDataObj(user.title, user.id)
                                }}
                                className='btn btn-icon btn-bg-danger btn-active-color-white btn-sm me-1'
                              >
                                <i className='bi bi-trash-fill fs-4 px-0'></i>
                              </a>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  )}
                </table>
              </div>)}
            {/*<Pagination paginationData={paginationData} />*/}
          </div>
          <DeleteAlert
            deleteData={deleteData}
            deleteDataFunction={deleteUser}
            deleteDataID={deleteDataID}
          />
        </div>
      </div>
    </>

  )
}

export default UserList
