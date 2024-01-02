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
  const [resettingSearchField, setResettingSearchField] = useState()
  const searchval = {
    field: 'first_name',
    text: '',
  }
  const [searchValue, setSearchValue] = useState(searchval)

  const getPatientsData = async () => {
    // if (searchValue.text !== '') {
    // }
    setPageNumber(1)
    try {
      setPatientLoading(true)
      const response = await getPatientDataReq(pageNumber, searchValue)
      console.log('response.data: ', response.data.users)

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
  console.log('patientData: ', patientData)
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

  // const { values, setValues, handleBlur, handleChange, handleSubmit, resetForm } = useFormik({
  //   initialValues: searchval,
  //   onSubmit: (values) => {
  //     searchBtn(values)
  //   },
  // })

  // const searchBtn = async (values) => {
  //   setRefresh(true)
  //   setSearchValue(values)
  //   await getPatientsData()
  // }

  // const resetSearchField = (e) => {
  //   setRefresh(true)
  //   e.preventDefault()
  //   resetForm()
  //   setSearchValue(searchval)
  //   setValues(searchval)
  //   getPatientsData()
  // }
  useEffect(() => {
    getPatientsData()
    // if (patientLoading || refresh || resettingSearchField) {
    //   setResettingSearchField(false)
    // }
  }, [])
  return (
    <>
      <div className='d-flex flex-wrap flex-stack justify-content-between mb-2'>
        <div className='d-flex align-items-center position-relative my-1 '>
          <i className='ki-duotone ki-magnifier fs-3   position-absolute ms-5'>
            <span className='path1'></span>
            <span className='path2'></span>
          </i>
          {/* <input
            type='text'
            name='text'
            data-kt-user-table-filter='search'
            className='form-control form-control-solid w-250px ps-13'
            placeholder='Quick patient search...'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.text}
          /> */}
          {/* <a type='submit' onClick={handleSubmit} className='btn btn-success'>
            <i className='bi bi-search fs-8 p-0'></i>
          </a> */}
        </div>
        <div
          className='d-flex align-items-center gap-2 gap-lg-3'
          data-select2-id='select2-data-122-hy60'
        >
          <div className='m-0' data-select2-id='select2-data-121-ewuv'>
            <a
              href='#'
              className='btn btn-sm btn-flex btn-secondary fw-bold'
              data-kt-menu-trigger='click'
              data-kt-menu-placement='bottom-end'
            >
              <i className='ki-duotone ki-filter fs-6 text-muted me-1'>
                <span className='path1'></span>
                <span className='path2'></span>
              </i>
              Filter
            </a>
            <div
              className='menu menu-sub menu-sub-dropdown w-500px w-md-600px'
              data-kt-menu='true'
              id='kt_menu_651c03b12454d'
              data-select2-id='select2-data-kt_menu_651c03b12454d'
            >
              <div className='px-7 py-5'>
                <div className='fs-5 text-dark fw-bold'>Filter Options</div>
              </div>

              <div className='separator border-gray-200'></div>

              {/* <div className='px-7 py-5' data-select2-id='select2-data-120-1779'>
                <div className='mb-10' data-select2-id='select2-data-119-kwwx'>
                  <label className='form-label fw-semibold'>Search:</label>
                  <form className='d-flex' onSubmit={handleSubmit}>
                    <input
                      type='text'
                      name='text'
                      className='form-control mb-3 me-5 search_fieldd'
                      placeholder='Search Patient...'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.text}
                    />
                    <select
                      className='form-select mb-3 me-5 fw-bolder'
                      name='field'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.field}
                    >
                      <option value='first_name'>First Name</option>
                      <option value='last_name'>Last Name</option>
                      <option value='dob'>DOB</option>
                      <option value='gender'>Gender</option>
                      <option value='account_number'>Account Number</option>
                    </select>
                  </form>
                </div>

                <div className='d-flex justify-content-end'>
                  <button
                    onClick={resetSearchField}
                    className='btn btn-sm btn-light btn-active-light-primary me-2'
                  >
                    Reset
                  </button>
                  <button type='submit' onClick={handleSubmit} className='mx-3 btn btn-primary '>
                    Search
                  </button>
                </div>
              </div> */}
            </div>
          </div>
          <div className='d-flex flex-wrap my-2 '>
            <Link to='/patient/add' className=' btn btn-primary '>
              <KTIcon iconName='plus' className='fs-3' /> Add New Patient
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
                          <th scope='col'>Patient Name</th>
                          <th scope='col'>DOB</th>
                          <th scope='col'>Contact</th>
                          <th scope='col'>SSN</th>
                          <th scope='col'>Insurance Name</th>
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

export default PatientList
