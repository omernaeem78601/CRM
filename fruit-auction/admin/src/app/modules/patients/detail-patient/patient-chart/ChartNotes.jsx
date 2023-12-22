import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ERROR_ALERT_ADMIN, NoDataFoundMessage } from '../../../../utilities/AlertMsgConstant'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import {
  chartNotesClaimtAction,
  chartNotesPatientAction,
  editBillingIdAction,
  patientDataAction,
  showBillingIdAction,
} from '../../../../redux/action'

import { setDataContext } from '../../../../utilities/SettingContext'

import { deleteChartNoteDataReq, getChartNotesDataReq } from './__request/ChartNoteRequest'

import DeleteAlert from '../../../../utilities/DeleteAlert'
import { KTIcon } from '../../../../../_metronic/helpers'
import { LoadingBar } from '../../../../utilities/LoadingBar'
import Pagination from '../../../../utilities/Pagination'
import { formatDate } from '../../../../utilities/Helper'

const ChartNotes = ({ patientData }) => {
  const patientViewState = useSelector((state) => state.patientIdShowReducerComp)
  const chartNotesClaim = useSelector((state) => state.chartNotesClaimReducerComp)
  const dispatch = useDispatch()

  const showBillingIdDispatch = (billingId) => {
    dispatch(showBillingIdAction(billingId))
  }

  const editBillingIdDispatch = (billingId) => {
    dispatch(editBillingIdAction(billingId))
  }

  const chartNotesClaimDispatch = (billingId) => {
    dispatch(chartNotesClaimtAction(billingId))
    dispatch(patientDataAction(patientData))
  }
  const chartNotesClaimEmpty = (billingId) => {
    dispatch(chartNotesClaimtAction(billingId))
  }

  const chartNotesDataDispatch = (data) => {
    dispatch(chartNotesPatientAction(data))
  }

  const { pageNumber, setRefresh, refresh } = useContext(setDataContext)

  const [chartNotesData, setChartNotesData] = useState([])
  const [chartNoteLoading, setChartNoteLoading] = useState(true)

  const [paginationData, setPaginationData] = useState(null)


  const getChartNotesData = async () => {
    try {
      setChartNoteLoading(true)
      const response = await getChartNotesDataReq(patientViewState, pageNumber)
      setChartNotesData(response.data.data);
      setPaginationData(response.data.meta);
      chartNotesDataDispatch(response.data.data);
      setChartNoteLoading(false);
      setRefresh(false);
    } catch (error) {
      toast.error(ERROR_ALERT_ADMIN);
      setChartNoteLoading(false);
      setRefresh(false);
    }
  }

  // delete
  const [deleteData, setDeleteData] = useState('')
  const [deleteDataID, setDeleteDataID] = useState('')

  const deletePatientData = (patientName, ID) => {
    setDeleteData(patientName)
    setDeleteDataID(ID)
    showBillingIdDispatch(null)
    editBillingIdDispatch(null)
  }

  // Delete Chart Note
  const deleteChartNote = async (id) => {
    try {
      const response = await deleteChartNoteDataReq(patientViewState, id)
      if (response) {
        toast.success(response.data.message)
        getChartNotesData()
      }
    } catch (error) {
      toast.error(ERROR_ALERT_ADMIN)
    }
  }

  useEffect(() => {
    if (refresh) {
      getChartNotesData()
    }
  }, [refresh])

  useEffect(() => {
    if (patientViewState) {
      getChartNotesData()
    }
  }, [])


  return (
    <>
      <div className='d-flex flex-wrap flex-stack mb-2'>
        <h3 className='fw-bold my-2'>Chart Notes</h3>

        <div>
          <Link className='mx-3 btn btn-primary ' to='/patient/detail/chart-notes/add'>
            <KTIcon iconName='plus' className='fs-3' /> Add Chart Notes
          </Link>

        </div>
      </div>

      <div className='row g-6 g-xl-9'>
        <div className='col-md-12 col-xl-12'>
          {chartNoteLoading ? (
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
                          <th scope='col'>Date of Service</th>
                          <th scope='col'>Rending Provider</th>
                          <th scope='col'>Refering Provider</th>
                          <th scope='col'>Location</th>
                          <th scope='col'>Diagnose Code</th>
                          <th scope='col'>Procedure Code</th>
                          <th scope='col'>Status</th>
                          <th scope='col'>Actions</th>
                        </tr>
                      </thead>

                      {chartNotesData.length === 0 ? (
                        <tbody>
                          <tr>
                            <td colSpan='8 ' center='true'>
                              <NoDataFoundMessage />
                            </td>
                          </tr>
                        </tbody>
                      ) : (
                        <tbody>
                          {chartNotesData?.map((chartnote, index) => {

                            return (
                              <tr key={index}>
                                <td>{formatDate(chartnote.date_of_service)}</td>
                                <td>{chartnote.rendering_provider_name}</td>
                                <td>{chartnote.referring_provider_name}</td>
                                <td>{chartnote.facility_name}</td>
                                <td>{chartnote.icd_codes === null ?  'no': 'yes'}</td>
                                <td>{chartnote.cpt_codes === null ? 'no' : 'yes'}</td>
                                <td>
                                  <span
                                    className={`badge badge-light-${chartnote.status ? 'success' : 'danger'
                                      } fw-bold me-auto px-4 py-3`}
                                  >
                                    {chartnote.status ? 'new' : ''}
                                  </span>
                                </td>
                                <td>
                                  <Link
                                    to='/patient/detail/chart-notes/detail'
                                    onClick={() => showBillingIdDispatch(chartnote.id)}
                                    className='btn btn-sm btn-info me-2'
                                  >
                                    <i className='bi bi-eye-fill fs-4 px-0'></i>
                                  </Link>

                                  <Link
                                    to='/patient/detail/chart-notes/edit'
                                    onClick={() => editBillingIdDispatch(chartnote.id)}
                                    className='btn btn-icon btn-bg-success btn-active-color-white btn-sm me-1'
                                  >
                                    <i className='bi bi-pencil-fill fs-4 px-0'></i>
                                  </Link>

                                  <a
                                    href='#'
                                    data-bs-toggle='modal'
                                    data-bs-target='#kt_modal_1'
                                    onClick={() => deletePatientData(chartnote.provider_name, chartnote.id)}
                                    className='btn btn-icon btn-bg-danger btn-active-color-white btn-sm me-1'
                                  >
                                    <i className='bi bi-trash-fill fs-4 px-0'></i>
                                  </a>

                                  <Link
                                    to='/claim/add'
                                    onClick={() => chartNotesClaimDispatch(chartnote)}
                                    className='btn btn-sm btn-primary me-3'
                                  >
                                    Make Claim
                                  </Link>
                                  <Link
                                    to='/claim/add'
                                    onClick={() => chartNotesClaimEmpty(null)}
                                    className='btn btn-sm btn-primary me-3'
                                  >
                                  Empty
                                  </Link>

                                  <DeleteAlert
                                    deleteData={deleteData}
                                    deleteDataFunction={deleteChartNote}
                                    deleteDataID={deleteDataID}
                                  />
                                </td>
                              </tr>
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

export { ChartNotes }
