import React from 'react'
import {useContext, useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import Pagination from '../../utilities/Pagination'
import {showPatientIdAction} from '../../redux/action'
import {setDataContext} from '../../utilities/SettingContext'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {Link} from 'react-router-dom'
import {deletePatientDataReq, getPatientDataReq} from '../patients/__request/RequestPatient'
import {AgeCalculator, TitleCase} from '../../utilities/Helper'
import {ERROR_ALERT_ADMIN, NoDataFoundMessage} from '../../utilities/AlertMsgConstant'
import {useFormik} from 'formik'
import {KTIcon} from '../../../_metronic/helpers'
import {LoadingBar} from '../../utilities/LoadingBar'
import Image from '../../utilities/Image'
import DeleteAlert from '../../utilities/DeleteAlert'
const ClaimList = () => {
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
    field2: 'start_with',
    text: '',
  }
  const [searchValue, setSearchValue] = useState(searchval)

  const getPatientsData = async () => {
    if (searchValue.text !== '') {
      setPageNumber(1)
    }
    try {
      setPatientLoading(true)
      const response = await getPatientDataReq(pageNumber, searchValue)
      const patientsWithAge = response.data.data.map((patient) => ({
        ...patient,
        age: AgeCalculator(patient.dob),
      }))
      setPatientData(patientsWithAge)
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
  const [deleteData, setDeleteData] = useState('')
  const [deleteDataID, setDeleteDataID] = useState('')

  const deletePatientData = (patientName, ID) => {
    setDeleteData(patientName)
    setDeleteDataID(ID)
  }

  const deleteSetting = async (id) => {
    try {
      const response = await deletePatientDataReq(id)
      if (response) {
        toast.success(response.data.message)
        getPatientsData()
      }
    } catch (error) {
      toast.error(ERROR_ALERT_ADMIN)
    }
  }
  const {values, setValues, handleBlur, handleChange, handleSubmit, resetForm} = useFormik({
    initialValues: searchval,
    onSubmit: (values) => {
      searchBtn(values)
    },
  })

  const searchBtn = async (values) => {
    setRefresh(true)
    setSearchValue(values)
    await getPatientsData()
  }

  const resetSearchField = (e) => {
    setRefresh(true)
    e.preventDefault()
    resetForm()
    setSearchValue(searchval)
    setValues(searchval)
    getPatientsData()
  }
  useEffect(() => {
    if (patientLoading || refresh || resettingSearchField) {
      getPatientsData()
      setResettingSearchField(false)
    }
  }, [refresh, resettingSearchField])

  return (
    <>
      <div className='d-flex flex-wrap flex-stack justify-content-between mb-2'>
        <div className='d-flex align-items-center position-relative my-1 '>
          <i className='ki-duotone ki-magnifier fs-3   position-absolute ms-5'>
            <span className='path1'></span>
            <span className='path2'></span>
          </i>
          <input
            type='text'
            name='text'
            data-kt-user-table-filter='search'
            className='form-control form-control-solid w-250px ps-13'
            placeholder='Quick Claim search...'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.text}
          />
          <a type='submit' onClick={handleSubmit} className='btn btn-success'>
            <i className='bi bi-search fs-8 p-0 '></i>
          </a>

          <div className='ms-4'>
            <label>Form Type</label>
            <select
              className='form-select mb-3 me-5 fw-bolder'
              name='field'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.field}
            >
              <option value='first_name'>All</option>
              <option value='first_name'>First Name</option>
              <option value='last_name'>Last Name</option>
              <option value='dob'>DOB</option>
              <option value='gender'>Gender</option>
              <option value='account_number'>Account Number</option>
            </select>
          </div>
          <div className='ms-4'>
            <label>Status</label>
            <select
              className='form-select mb-3 me-5 fw-bolder'
              name='field'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.field}
            >
              <option value='first_name'>All</option>
              <option value='first_name'>First Name</option>
              <option value='last_name'>Last Name</option>
              <option value='dob'>DOB</option>
              <option value='gender'>Gender</option>
              <option value='account_number'>Account Number</option>
            </select>
          </div>
          <div className='ms-4'>
            <label>Facility</label>
            <select
              className='form-select mb-3 me-5 fw-bolder'
              name='field'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.field}
            >
              <option value='first_name'>All</option>
              <option value='first_name'>First Name</option>
              <option value='last_name'>Last Name</option>
              <option value='dob'>DOB</option>
              <option value='gender'>Gender</option>
              <option value='account_number'>Account Number</option>
            </select>
          </div>
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

              <div className='px-7 py-5' data-select2-id='select2-data-120-1779'>
                <div className='mb-10' data-select2-id='select2-data-119-kwwx'>
                  <label className='form-label fw-semibold'>Search:</label>
                  <form className='d-flex ' onSubmit={handleSubmit}>
                    <input
                      type='text'
                      name='text'
                      className='form-control mb-3 me-5 search_fieldd'
                      placeholder='Search Claim...'
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

                    <select
                      className='form-select mb-3 me-5 fw-bolder'
                      name='field2'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.field2}
                    >
                      <option value='start_with'>Start With</option>
                      <option value='end_with'>End With</option>
                      <option value='in_between'>In Between</option>
                    </select>
                    <button type='submit' onClick={handleSubmit} className=' mb-3 btn btn-primary '>
                      Search
                    </button>
                  </form>

                  <form className='d-flex' onSubmit={handleSubmit}>
                    <input
                      type='date'
                      name='text'
                      className='form-control mb-3 me-5 search_fieldd'
                      placeholder='Search Claim...'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.text}
                    />

                    <select
                      className='form-select mb-3 me-5 fw-bolder'
                      name='field2'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.field2}
                    >
                      <option value='start_with'>By Date</option>
                      <option value='end_with'>End With</option>
                      <option value='in_between'>In Between</option>
                    </select>
                    <button type='submit' onClick={handleSubmit} className=' mb-3 btn btn-primary '>
                      Search
                    </button>
                  </form>
                </div>

                <div className='d-flex justify-content-end'>
                  <button
                    onClick={resetSearchField}
                    className='btn btn-sm btn-light btn-active-light-primary me-2'
                  >
                    Reset
                  </button>
                  {/* <button type='submit' onClick={handleSubmit} className='mx-3 btn btn-primary '>
                    Search
                  </button> */}
                </div>
              </div>
            </div>
          </div>
          <div className='d-flex flex-wrap my-2 '>
            <Link to='/patient/list' className=' btn btn-primary '>
              <KTIcon iconName='plus' className='fs-3' /> Add Claim
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
                        <tr className='fw-bold  text-gray-800 border-bottom-2 border-gray-200'>
                          <th scope='col'>Claim No</th>
                          <th scope='col'>Created Date</th>
                          <th scope='col'>Form Type</th>
                          <th scope='col'>From DOS</th>
                          <th scope='col'>To DOS</th>
                          <th scope='col'>Patient Name</th>
                          <th scope='col'>Total Charges</th>
                          <th scope='col'>Insurance Co.</th>
                          <th scope='col'>Ins Type</th>
                          <th scope='col'>Sec Claim</th>
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
                                      onClick={() => showPatientIdDispatch(patients.id)}
                                    >
                                      {patients.account_number}
                                    </Link>
                                  </td>

                                  <td>
                                    {new Date(patients.dob).toLocaleDateString('en-US', {
                                      day: 'numeric',
                                      month: 'short',
                                      year: 'numeric',
                                    })}
                                  </td>

                                  <>
                                    <td>HCFA</td>
                                    <td>
                                    {new Date(patients.dob).toLocaleDateString('en-US', {
                                      day: 'numeric',
                                      month: 'short',
                                      year: 'numeric',
                                    })}
                                  </td>
                                  <td>
                                    {new Date(patients.dob).toLocaleDateString('en-US', {
                                      day: 'numeric',
                                      month: 'short',
                                      year: 'numeric',
                                    })}
                                  </td>
                                    <td>
                                      <Link to='/patient/detail/patient-data'>
                                        <div className='d-flex align-items-center'>
                                          <div className='d-flex justify-content-start flex-column'>
                                            <div className='text-dark fw-bold text-hover-primary mb-1'>
                                              {patients.full_name}
                                            </div>
                                            <span className='text-muted fw-semibold d-block'>
                                              {TitleCase(patients.gender)} ,
                                              <AgeCalculator dob={patients.dob} />
                                            </span>
                                          </div>
                                        </div>
                                      </Link>
                                    </td>

                                    <td>{patients.wphone}</td>

                                    <td>
                                      {patients.insurance_name ? (
                                        <div className='d-flex justify-content-start flex-column'>
                                          <div className='text-dark fw-bold text-hover-primary mb-1 '>
                                            {patients.insurance_name.payer_name}
                                          </div>
                                          <span className='text-muted fw-semibold d-block'>
                                            {patients.insurance_name.subscriber_id},
                                            {patients.insurance_name.subscriber_type},
                                            {patients.insurance_name.level}
                                          </span>
                                        </div>
                                      ) : (
                                        ''
                                      )}
                                    </td>
                                    <td>
                                      {patients.insurance_name ? (
                                        <div className='d-flex justify-content-start flex-column'>
                                          {patients.insurance_name.subscriber_type}
                                        </div>
                                      ) : (
                                        ''
                                      )}
                                    </td>

                                    <td>Sec Claim</td>
                                    <td>
                                      <span
                                        className={`badge badge-light-${
                                          patients.is_active ? 'success' : 'danger'
                                        } fw-bold me-auto px-4 py-3`}
                                      >
                                        {patients.is_active ? 'Active' : 'Inactive'}
                                      </span>
                                    </td>
                                  </>

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
                                      onClick={() =>
                                        deletePatientData(patients.first_name, patients.id)
                                      }
                                      className='btn btn-icon btn-bg-danger btn-active-color-white btn-sm me-1'
                                    >
                                      <i className='bi bi-trash-fill fs-4 px-0'></i>
                                    </a>

                                    <DeleteAlert
                                      deleteData={deleteData}
                                      deleteDataFunction={deleteSetting}
                                      deleteDataID={deleteDataID}
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

export default ClaimList
