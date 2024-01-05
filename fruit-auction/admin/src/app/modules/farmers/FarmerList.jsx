import React from 'react'
import {useContext, useEffect, useState} from 'react'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import Pagination from '../../utilities/Pagination'
import DeleteAlert from '../../utilities/DeleteAlert'
import {KTIcon} from '../../../_metronic/helpers'
import {LoadingBar} from '../../utilities/LoadingBar'
import {setDataContext} from '../../utilities/SettingContext'
import {showPatientIdAction} from '../../redux/action'
import {AgeCalculator, TitleCase} from '../../utilities/Helper'
import Image, {UserProfileImage} from '../../utilities/Image'
import {ERROR_ALERT_ADMIN, NoDataFoundMessage} from '../../utilities/AlertMsgConstant'
import {
  blockUserReq,
  deleteUserDataReq,
  editUserRoleReq,
  getUserDataReq,
} from './__request/RequestUser'
import BlockUserAlert from '../../utilities/BlockUserAlert'
import ChangeUserRole from '../../utilities/ChangeUserRole'

const FarmerList = () => {
  // dispatch to action
  const dispatch = useDispatch()
  const showUserIdDispatch = (userId) => {
    dispatch(showPatientIdAction(userId))
  }

  const {pageNumber, setRefresh, refresh} = useContext(setDataContext)
  const [userData, setUserData] = useState([])
  const [userLoading, setUserLoading] = useState(true)
  const [paginationData, setPaginationData] = useState(null)

  const getUsersData = async () => {
    try {
      setUserLoading(true)
      const response = await getUserDataReq(pageNumber)
      setUserData(response.data.users)
      setPaginationData(response.data.meta)
      setUserLoading(false)
      setRefresh(false)
    } catch (error) {
      toast.error(ERROR_ALERT_ADMIN)
      setUserLoading(false)
      setRefresh(false)
    }
  }

  // delete user
  const [deleteData, setDeleteData] = useState('')
  const [deleteDataID, setDeleteDataID] = useState('')
  const [blockState, setBlockState] = useState(false)
  const deleteUserData = (patientName, ID) => {
    setDeleteData(patientName)
    setDeleteDataID(ID)
  }

  const deleteUser = async (id) => {
    try {
      const response = await deleteUserDataReq(id)
      if (response) {
        toast.success(response.data.message)
        getUsersData()
      }
    } catch (error) {
      toast.error(ERROR_ALERT_ADMIN)
    }
  }
  // block user
  const blockUserData = (patientName, ID, state) => {
    setDeleteData(patientName)
    setDeleteDataID(ID)
    state ? setBlockState(false) : setBlockState(true)
  }
  const blockUser = async (data) => {
    try {
      const response = await blockUserReq(data)
      if (response) {
        toast.success(response.data.message)
        getUsersData()
      }
    } catch (error) {
      toast.error(ERROR_ALERT_ADMIN)
    }
  }
  // edit role
  const [roleState, setRoleState] = useState(false)
  const [reqRoleState, setReqRoleState] = useState(false)
  const [subRoleState, setSubRoleState] = useState(false)
  const userRoleData = (patientName, ID, role, reqRole, subRole) => {
    setDeleteData(patientName)
    setDeleteDataID(ID)
    setRoleState(role)
    setReqRoleState(reqRole)
    setSubRoleState(subRole)
  }
  const editUserRole = async (data) => {
    try {
      const response = await editUserRoleReq(data)
      if (response) {
        console.log('edit error: ', response.data)
        toast.success(response.data.message)
        getUsersData()
      }
    } catch (error) {
      console.log('edit error: ', error)
      toast.error(ERROR_ALERT_ADMIN)
    }
  }

  useEffect(() => {
    if (userLoading || refresh) {
      getUsersData()
    }
  }, [userLoading, refresh])
  return (
    <>
      <div className='d-flex flex-wrap flex-stack justify-content-between mb-2'>
        <div className='d-flex align-items-center position-relative my-1 '></div>
        <div
          className='d-flex align-items-center gap-2 gap-lg-3'
          data-select2-id='select2-data-122-hy60'
        >
          <div className='d-flex flex-wrap my-2 '>
            <Link to='/user/add' className=' btn btn-primary '>
              <KTIcon iconName='plus' className='fs-3' /> Add New User
            </Link>
          </div>
        </div>
      </div>
      <div className='row g-6 g-xl-9'>
        <div className='col-md-12 col-xl-12'>
          {userLoading ? (
            <LoadingBar />
          ) : (
            <div className='card mb-3 p-3'>
              <div className='card-body p-1'>
                <div
                  id='kt_table_users_wrapper'
                  className='dataTables_wrapper dt-bootstrap4 no-footer'
                >
                  <div className='table-responsive'>
                    <table className='table table-hover table-row-bordered gy-4 gs-4'>
                      <thead>
                        <tr className='fw-bold fs-6 text-gray-800 border-bottom-2 border-gray-200'>
                          <th scope='col'>Name</th>
                          <th scope='col'>DOB</th>
                          <th scope='col'>Contact</th>
                          <th scope='col'>Email</th>
                          <th scope='col'>Address</th>
                          <th scope='col'>Status</th>
                          <th scope='col'>Actions</th>
                        </tr>
                      </thead>

                      {userData.length === 0 ? (
                        <tbody>
                          <tr>
                            <td colSpan='8' center>
                              <NoDataFoundMessage />
                            </td>
                          </tr>
                        </tbody>
                      ) : (
                        <tbody>
                          {userData.map((users, index) => {
                            return (
                              <React.Fragment key={index}>
                                <tr key={index}>
                                  <td>
                                    <Link to='/user/detail/user-data'>
                                      <div className='d-flex align-items-center'>
                                        <div className='symbol symbol-circle symbol-50px overflow-hidden me-3 border-1'>
                                          <span className='symbol-label bg-light'>
                                            <UserProfileImage
                                              profileImagePath={users.profilePicture}
                                              gender={users.gender}
                                              height={'40px'}
                                              width={'50px'}
                                            />
                                          </span>
                                        </div>
                                        <div className='d-flex justify-content-start flex-column'>
                                          <div className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                            {users.name}
                                          </div>
                                          <span className='text-muted fw-semibold d-block'>
                                            {TitleCase(users.gender)} ,{' '}
                                            <AgeCalculator dob={users.dob} />
                                          </span>
                                        </div>
                                      </div>
                                    </Link>
                                  </td>
                                  {users.isBlocked ? (
                                    <td colSpan={4}>
                                      <div
                                        className={`alert alert-danger d-flex align-items-center p-5`}
                                      >
                                        <i
                                          className={`ki-duotone ki-shield-tick fs-2hx text-danger me-4`}
                                        >
                                          <span className='path1'></span>
                                          <span className='path2'></span>
                                        </i>

                                        <div className='d-flex flex-column'>
                                          <span>This Client is Blocked</span>
                                        </div>
                                      </div>
                                    </td>
                                  ) : (
                                    <>
                                      <td>
                                        {new Date(users.dob).toLocaleDateString('en-US', {
                                          day: 'numeric',
                                          month: 'short',
                                          year: 'numeric',
                                        })}
                                      </td>

                                      <td>
                                        {users.phone}
                                      </td>

                                      <td>{users.email}</td>

                                      <td>
                                        {users.address.street},{users.address.city},
                                        {users.address.state},{users.address.country}
                                      </td>
                                    </>
                                  )}

                                  <td>{users.role}</td>

                                  <td>
                                    <a
                                      href='#'
                                      data-bs-toggle='modal'
                                      data-bs-target='#kt_modal_2'
                                      onClick={() =>
                                        blockUserData(users.name, users._id, users.isBlocked)
                                      }
                                      className='btn btn-danger btn-sm px-2 me-1'
                                    >
                                      {users.isBlocked ? 'Un-Block' : 'Block'}
                                    </a>

                                    <a
                                      href='#'
                                      data-bs-toggle='modal'
                                      data-bs-target='#kt_modal_3'
                                      onClick={() =>
                                        userRoleData(
                                          users.name,
                                          users._id,
                                          users.role,
                                          users.reqRole,
                                          users.subRole
                                        )
                                      }
                                      className='btn btn-success btn-sm px-2 me-1'
                                    >
                                      <i className='bi bi-pencil-fill fs-6 px-0'>Role</i>
                                    </a>

                                    <Link
                                      to={`/user/detail/user-data`}
                                      className='btn btn-icon btn-bg-info btn-active-color-white btn-sm me-1'
                                      onClick={() => showUserIdDispatch(users._id)}
                                    >
                                      <i className='bi bi-eye-fill fs-4 px-0'></i>
                                    </Link>

                                    <Link
                                      to={`/user/edit/${users._id}`}
                                      className='btn btn-icon btn-bg-success btn-active-color-white btn-sm me-1'
                                    >
                                      <i className='bi bi-pencil-fill fs-4 px-0'></i>
                                    </Link>
                                    <a
                                      href='#'
                                      data-bs-toggle='modal'
                                      data-bs-target='#kt_modal_1'
                                      onClick={() => deleteUserData(users.name, users._id)}
                                      className='btn btn-icon btn-bg-danger btn-active-color-white btn-sm me-1'
                                    >
                                      <i className='bi bi-trash-fill fs-4 px-0'></i>
                                    </a>

                                    <DeleteAlert
                                      deleteData={deleteData}
                                      deleteDataFunction={deleteUser}
                                      deleteDataID={deleteDataID}
                                    />
                                    <BlockUserAlert
                                      deleteData={deleteData}
                                      deleteDataFunction={blockUser}
                                      deleteDataID={deleteDataID}
                                      blockState={blockState}
                                    />
                                    <ChangeUserRole
                                      deleteData={deleteData}
                                      deleteDataFunction={editUserRole}
                                      deleteDataID={deleteDataID}
                                      role={roleState}
                                      subRole={subRoleState}
                                      reqRole={reqRoleState}
                                    />
                                  </td>
                                </tr>
                              </React.Fragment>
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
        </div>
      </div>
    </>
  )
}

export default FarmerList
