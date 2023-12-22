import { useEffect, useState, useContext } from 'react'
import { KTIcon } from '../../../../../_metronic/helpers'
import { setDataContext } from '../../../../utilities/SettingContext'
import { deleteIcdCodeReq, getIcdCodesReq } from './__request/RequestIcdCodes'
import DeleteAlert from '../../../../utilities/DeleteAlert'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ERROR_ALERT_ADMIN, NoDataFoundMessage } from '../../../../utilities/AlertMsgConstant'
import { editIcdIdAction, showIcdIdAction } from '../../../../redux/action'
import { useDispatch } from 'react-redux'
import { LoadingBar } from '../../../../utilities/LoadingBar'

const IcdCodes = () => {
  // dispatch to action
  const dispatch = useDispatch()
  const editIcdIdDispatch = (icdId) => {
    dispatch(editIcdIdAction(icdId))
  }

  const showIcdIdDispatch = (icdId) => {
    dispatch(showIcdIdAction(icdId))
  }

  const { refresh, setRefresh, icdType, setIcdType } = useContext(setDataContext)
  const [icdCodeData, setIcdCodeData] = useState([])
  const [icdLoading, setIcdLoading] = useState(true)
  const [deleteData, setDeleteData] = useState('')
  const [deleteDataID, setDeleteDataID] = useState('')


  const fetchIcdCodeData = async () => {
    setIcdLoading(true);
    try {
      const response = await getIcdCodesReq(icdType);
      const icdData = response.data.data;
      setIcdCodeData(icdData);
      setIcdLoading(false);
      setRefresh(false);
    } catch (error) {
      toast.error(ERROR_ALERT_ADMIN);
      setIcdLoading(false);
      setRefresh(false);
    }
  };



  useEffect(() => {
    if (refresh || icdLoading) {
      fetchIcdCodeData()
    }
  }, [icdLoading, refresh])

  const deleteIcdData = (icdiddata, id) => {
    setDeleteData(icdiddata)
    setDeleteDataID(id)
  }

  // delete ICD data
  const deleteIcdCode = async (icdId) => {
    try {
      setIcdLoading(true)
      const response = await deleteIcdCodeReq(icdId)
      if (response) {
        toast.success(response.data.message)
        fetchIcdCodeData()
        editIcdIdDispatch(null)
        showIcdIdDispatch(null)
      }
    } catch (error) {
      toast.error(ERROR_ALERT_ADMIN);
    }
  }

  // searchable

  // const roleValues = ['code', 'pos_code', 'modifier1', 'modifier2', 'modifier3', 'modifier4']

  // const [icdColValues, setIcdColValues] = useState('code')
  // const [filterNameValue, setfilterNameValue] = useState('')

  // // const handleInputChange = (e) => {
  //   setIcdColValues(e.target.value)
  //   setfilterNameValue('')
  // }

  // const handleFilterChange = (e) => setfilterNameValue(e.target.value)
  // const filterData = () => {
  //   if (roleValues.includes(icdColValues)) {
  //     return icdCodeData.filter((u) => {
  //       const value = u[icdColValues]
  //       const sanitizedValue = value != null ? value.toString().toLowerCase() : 'N/A'
  //       return sanitizedValue.startsWith(filterNameValue.toLowerCase())
  //     })
  //   }

  //   return icdCodeData  
  // }

  // const filteredICDCodes = filterData()

  return (
    <>
      <div className='d-flex flex-wrap flex-stack mb-2'>
        <h3 className='fw-bold my-2'>ICD Codes</h3>
        <div className='d-flex flex-wrap my-2'>

          <div>
            <select
              className='form-select fw-bolder'
              data-kt-select2='true'
              data-placeholder='Select option'
              data-allow-clear='true'
              data-kt-patient-table-filter='role'
              data-hide-search='true'
              onChange={(e) => setIcdType(e.target.value)}
              value={icdType}
            >
              <option value='icd-9'>ICD-9</option>
              <option value='icd-10'>ICD-10</option>
              <option value='icd-11'>ICD-11</option>
            </select>
          </div>
          <div>
            <button
              id='kt_icdcodes_toggle'
              onClick={() => editIcdIdDispatch(null)}
              className='mx-3 btn btn-primary '
            >
              <KTIcon iconName='plus' className='fs-3' />
              Add ICD Code
            </button>
          </div>
        </div>
      </div>

      <div className='row g-6 g-xl-9'>
        <div className='col-md-12 col-xl-12'>
          {icdLoading || refresh ? (
            <LoadingBar />
          ) : (
            <div className='card mb-3 p-3'>
              <div className='card-body p-1'>
                <div
                  id='kt_table_users_wrapper'
                  className='dataTables_wrapper dt-bootstrap4 no-footer'
                >
                  <div className='table-responsive'>
                    <table className='table table-hover table-row-bordered gy-7 gs-7'>
                      <thead>
                        <tr className='fw-bold fs-6 text-gray-800 border-bottom-2 border-gray-200 '>
                          <th scope='col'>Name</th>
                          <th scope='col'>Summary</th>
                          <th scope='col'>Status</th>
                          <th scope='col'>Actions</th>
                        </tr>
                      </thead>
                      {typeof icdCodeData[icdType] == 'undefined' ? (
                        <tbody>
                          <tr>
                            <td colSpan='5' >
                              <NoDataFoundMessage />
                            </td>
                          </tr>
                        </tbody>
                      ) :
                        (
                          <tbody>
                            {icdCodeData[icdType].map((icd, index) => {

                              return (
                                <tr key={index} className={`bg-light-${icd.is_active ? '' : 'danger'}`}>
                                  <td>
                                    <a
                                      href='#'
                                      onClick={() => showIcdIdDispatch(icd.id)}
                                      id='kt_icddetail_toggle'
                                    >
                                      <div className="d-flex align-items-center p-0">
                                        <div className="d-flex justify-content-start flex-column">
                                          <div className="text-dark fw-bold text-hover-primary mb-1 fs-7">
                                            {icd.name}
                                          </div>
                                          <span className="text-muted fw-semibold d-block">
                                            {icd.description}
                                          </span>
                                        </div>
                                      </div>
                                    </a>
                                  </td>
                                  <td>{icd.summary}</td>
                                  <td>
                                    <span
                                      className={`badge badge-light-${icd.is_active ? 'success' : 'danger'
                                        } fw-bold me-auto px-4 py-3`}
                                    >
                                      {icd.is_active ? 'Active' : 'Inactive'}
                                    </span>
                                  </td>
                                  <td >
                                    <a
                                      href='#'
                                      onClick={() => showIcdIdDispatch(icd.id)}
                                      id='kt_icddetail_toggle'
                                      className='btn btn-icon btn-bg-info btn-active-color-white btn-sm me-1'
                                    >
                                      <i className='bi bi-eye-fill fs-4 px-0'></i>
                                    </a>

                                    <a
                                      href='#'
                                      id='kt_icdcodes_toggle'
                                      onClick={() => editIcdIdDispatch(icd.id)}
                                      className='btn btn-icon btn-bg-success btn-active-color-white btn-sm me-1'
                                    >
                                      <i className='bi bi-pencil-fill fs-4 px-0'></i>
                                    </a>

                                    <a
                                      href='#'
                                      data-bs-toggle='modal'
                                      data-bs-target='#kt_modal_1'
                                      onClick={() => {
                                        deleteIcdData(icd.code, icd.id)
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
        </div>
      </div>
      <DeleteAlert
        deleteData={deleteData}
        deleteDataFunction={deleteIcdCode}
        deleteDataID={deleteDataID}
      />
    </>
  )
}

export { IcdCodes }
