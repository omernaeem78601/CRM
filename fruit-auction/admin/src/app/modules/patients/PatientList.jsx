import React from 'react'
import {useContext, useEffect, useState} from 'react'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'

import {deletePatientDataReq, getPatientDataReq} from './__request/RequestPatient'
import Pagination from '../../utilities/Pagination'
import DeleteAlert from '../../utilities/DeleteAlert'
import {KTIcon} from '../../../_metronic/helpers'
import {LoadingBar} from '../../utilities/LoadingBar'
import {setDataContext} from '../../utilities/SettingContext'
import {showPatientIdAction} from '../../redux/action'
import {AgeCalculator, TitleCase} from '../../utilities/Helper'
import Image, {UserProfileImage} from '../../utilities/Image'
import {ERROR_ALERT_ADMIN, NoDataFoundMessage} from '../../utilities/AlertMsgConstant'
import {useFormik} from 'formik'

const PatientList = () => {
  // dispatch to action
  const dispatch = useDispatch()
  const showPatientIdDispatch = (patientId) => {
    dispatch(showPatientIdAction(patientId))
  }

  const {pageNumber, setPageNumber, setRefresh, refresh} = useContext(setDataContext)
  const [patientData, setPatientData] = useState([])
  const [patientLoading, setPatientLoading] = useState(true)
  const [paginationData, setPaginationData] = useState(null)

  const getPatientsData = async () => {
    try {
      setPatientLoading(true)
      const response = await getPatientDataReq(pageNumber)
      setPatientData(response.data.users)
      setPaginationData(response.data.meta)
      setPatientLoading(false)
      setRefresh(false)
    } catch (error) {
      toast.error(ERROR_ALERT_ADMIN)
      setPatientLoading(false)
      setRefresh(false)
    }
  }
  // delete
  // const [deleteData, setDeleteData] = useState('')
  // const [deleteDataID, setDeleteDataID] = useState('')

  // const deletePatientData = (patientName, ID) => {
  //   setDeleteData(patientName)
  //   setDeleteDataID(ID)
  // }

  // const deleteSetting = async (id) => {
  //   try {
  //     const response = await deletePatientDataReq(id)
  //     if (response) {
  //       toast.success(response.data.message)
  //       getPatientsData()
  //     }
  //   } catch (error) {
  //     toast.error(ERROR_ALERT_ADMIN)
  //   }
  // }

  useEffect(() => {
    if (patientLoading || refresh) {
      getPatientsData()
    }
  }, [patientLoading, refresh])
  return (
    <>
      <div className='d-flex flex-wrap flex-stack justify-content-between mb-2'>
        <div className='d-flex align-items-center position-relative my-1 '></div>
        <div
          className='d-flex align-items-center gap-2 gap-lg-3'
          data-select2-id='select2-data-122-hy60'
        >      
          <div className='d-flex flex-wrap my-2 '>
            <Link to='/patient/add' className=' btn btn-primary '>
              <KTIcon iconName='plus' className='fs-3' /> Add New User
            </Link>
          </div>
        </div>
      </div>
      <div className='row g-6 g-xl-9'>
        <div className='col-md-12 col-xl-12'>
          {patientLoading ? (
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
                          <th scope='col'>A/C#</th>
                          <th scope='col'>Name</th>
                          <th scope='col'>DOB</th>
                          <th scope='col'>Contact</th>
                          <th scope='col'>Postal Code</th>
                          <th scope='col'>Address</th>
                          <th scope='col'>Status</th>
                          <th scope='col'>Actions</th>
                        </tr>
                      </thead>

                      {patientData.length === 0 ? (
                        <tbody>
                          <tr>
                            <td colSpan='8' center>
                              <NoDataFoundMessage />
                            </td>
                          </tr>
                        </tbody>
                      ) : (
                        <tbody>
                          {patientData.map((patients, index) => {
                            return (
                              <React.Fragment key={index}>
                                <tr key={index}>
                                  <td>
                                    <Link
                                      to={`/patient/detail/patient-data`}
                                      onClick={() => showPatientIdDispatch(patients._id)}
                                    >
                                      {patients._id}
                                    </Link>
                                  </td>

                                  <td>
                                    <Link to='/patient/detail/patient-data'>
                                      <div className='d-flex align-items-center'>
                                        <div className='symbol symbol-circle symbol-50px overflow-hidden me-3 border-1'>
                                          <span className='symbol-label bg-light'>
                                            <UserProfileImage
                                              profileImagePath={patients.patient_image_path}
                                              gender={patients.gender}
                                              height={'40px'}
                                              width={'50px'}
                                            />
                                          </span>
                                        </div>
                                        <div className='d-flex justify-content-start flex-column'>
                                          <div className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                            {patients.name}
                                          </div>
                                          <span className='text-muted fw-semibold d-block'>
                                            {TitleCase(patients.gender)} ,{' '}
                                            <AgeCalculator dob={patients.dob} />
                                          </span>
                                        </div>
                                      </div>
                                    </Link>
                                  </td>

                                  <td>
                                    {new Date(patients.dob).toLocaleDateString('en-US', {
                                      day: 'numeric',
                                      month: 'short',
                                      year: 'numeric',
                                    })}
                                  </td>

                                  <td>
                                    {patients.phone}-{patients.phone}
                                  </td>

                                  <td>{patients.address.postalCode}</td>

                                  <td>
                                    {patients.address.street},{patients.address.city},
                                    {patients.address.state},{patients.address.country}
                                  </td>

                                  <td>{patients.role}</td>

                                  <td>
                                    <Link
                                      to={`/patient/detail/patient-data`}
                                      className='btn btn-icon btn-bg-info btn-active-color-white btn-sm me-1'
                                      onClick={() => showPatientIdDispatch(patients.id)}
                                    >
                                      <i className='bi bi-eye-fill fs-4 px-0'></i>
                                    </Link>

                                    <Link
                                      to={`/patient/edit/${patients.id}`}
                                      className='btn btn-icon btn-bg-success btn-active-color-white btn-sm me-1'
                                    >
                                      <i className='bi bi-pencil-fill fs-4 px-0'></i>
                                    </Link>

                                    <a
                                      href='#'
                                      data-bs-toggle='modal'
                                      data-bs-target='#kt_modal_1'
                                      // onClick={() =>
                                      //   deletePatientData(patients.first_name, patients.id)
                                      // }
                                      className='btn btn-icon btn-bg-danger btn-active-color-white btn-sm me-1'
                                    >
                                      <i className='bi bi-trash-fill fs-4 px-0'></i>
                                    </a>

                                    {/* <DeleteAlert
                                      deleteData={deleteData}
                                      deleteDataFunction={deleteSetting}
                                      deleteDataID={deleteDataID}
                                    /> */}
                                  </td>
                                </tr>
                              </React.Fragment>
                            )
                          })}
                        </tbody>
                      )}
                    </table>
                  </div>

                  {/* <Pagination paginationData={paginationData} /> */}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default PatientList
