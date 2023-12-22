import { useContext, useEffect, useState } from 'react'
import { setDataContext } from '../../../../utilities/SettingContext'
import DeleteAlert from '../../../../utilities/DeleteAlert'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ERROR_ALERT_ADMIN, NoDataFoundMessage } from '../../../../utilities/AlertMsgConstant'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAlertReq, getAlertReq } from './__request/RequestAlert'
import { LoadingBar } from '../../../../utilities/LoadingBar'
import { editAlertIdAction, showAlertIdAction } from '../../../../redux/action'

const AlertList = () => {

  // dispatch to action 
  const dispatch = useDispatch();

  const editAlertIdDispatch = (alertId) => {
    dispatch(editAlertIdAction(alertId));
  }

  const [deleteData, setDeleteData] = useState('')
  const [deleteDataID, setDeleteDataID] = useState('')
  const [searchValue, setSearchValue] = useState([])


  const {
    refresh,
    setRefresh,
  } = useContext(setDataContext)

  const [alertData, setAlertData] = useState([])
  const [alertLoading, setAlertLoading] = useState(false)

  const patientViewState = useSelector((state) => state.patientIdShowReducerComp)
  const fetchAlertData = async () => {
    setAlertLoading(true)
    try {
      const response = await getAlertReq(patientViewState)
      setAlertData(response.data.data)
      setAlertLoading(false)
      setRefresh(false)

    } catch (error) {
      toast.error(ERROR_ALERT_ADMIN)
      setAlertLoading(false)
      setRefresh(false)
    }
  }

  const deleteAlertDataObj = (alertData, id) => {
    setDeleteData(alertData)
    setDeleteDataID(id)
  }

  const deleteAlert = async (alertId) => {
    try {
      const response = await deleteAlertReq(alertId)
      if (response) {
        fetchAlertData()
        dispatch(showAlertIdAction(null));
        dispatch(editAlertIdAction(null));
        toast.success(response.data.message)
      }
    } catch (error) {
      toast.error(ERROR_ALERT_ADMIN)
    }
  }

  useEffect(() => {
    if (patientViewState) {
      fetchAlertData()
    }
  }, [refresh, patientViewState])

  const handleSearch = (e) => {
    const { name, value } = e.target
    setSearchValue({ ...searchValue, [name]: value })
  }

  //search
  const searchAlertData = async (e) => {
    e.preventDefault()
    fetchAlertData()
  }
  const handleChange = (e) => {
    handleSearch(e)
    searchAlertData(e)
  }

  return (
    <>
      <div className='d-flex flex-wrap flex-stack justify-content-between mb-2'>
        <div className="d-flex align-items-center position-relative my-1 ">

        </div>
        <div className='d-flex flex-wrap my-2'>
          <button
            id='kt_alert_toggle'
            onClick={() => { editAlertIdDispatch(null) }}
            className='mx-3 btn btn-primary'
          >
            <i className='ki-duotone ki-plus fs-3'></i>
            Add New Alert Message
          </button>
        </div>
      </div>

      <div className='row g-6 g-xl-9'>
        <div className='col-md-12 col-xl-12'>
          {alertLoading ? (
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
                          <th scope='col' width="70%">Alert Message</th>
                          <th scope='col'>Type</th>
                          <th scope='col'>Status</th>
                          <th scope='col' className="text-center">Actions</th>
                        </tr>
                      </thead>
                      {alertData.length === 0 ? (
                        <tbody>
                          <tr>
                            <td colSpan='3'>
                              <NoDataFoundMessage />
                            </td>
                          </tr>

                        </tbody>
                      ) : (
                        <tbody>
                          {alertData.map((alert, index) => {
                            return (
                              <tr key={index} >
                                <td>{alert.description}</td>
                                <td>{alert.type}</td>
                                <td>
                                  <span
                                    className={`badge badge-light-${alert.is_active === 1 ? 'success' : 'danger'
                                      } fw-bold me-auto px-4 py-3`}
                                  >
                                    {alert.is_active === 1 ? 'Active' : 'Inactive'}
                                  </span>
                                </td>


                                <td className="text-center">
                                  <a
                                    href='#'
                                    id='kt_alert_toggle'
                                    onClick={() => editAlertIdDispatch(alert.id)}
                                    className='btn btn-icon btn-bg-success btn-active-color-white btn-sm me-1'
                                  >
                                    <i className='bi bi-pencil-fill fs-4 px-0'></i>
                                  </a>

                                  <a
                                    href='#'
                                    data-bs-toggle='modal'
                                    data-bs-target='#kt_modal_1'
                                    onClick={() => {
                                      deleteAlertDataObj(alert.title, alert.id)
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
                  </div>
                </div>
              </div>
            </div>
          )}
          <DeleteAlert
            deleteData={deleteData}
            deleteDataFunction={deleteAlert}
            deleteDataID={deleteDataID}
          />
        </div>
      </div>
    </>
  )
}

export default AlertList
