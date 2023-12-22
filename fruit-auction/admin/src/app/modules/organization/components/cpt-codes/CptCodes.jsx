import { useEffect, useState, useContext } from 'react'
import { KTIcon } from '../../../../../_metronic/helpers'
import { setDataContext } from '../../../../utilities/SettingContext'
import { deleteCptCodeReq, getCptCodesReq } from './__request/RequestCptCodes'
import DeleteAlert from '../../../../utilities/DeleteAlert'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ERROR_ALERT_ADMIN, NoDataFoundMessage } from '../../../../utilities/AlertMsgConstant'
import { editCptIdAction, showCptIdAction } from '../../../../redux/action'
import { useDispatch } from 'react-redux'
import { LoadingBar } from '../../../../utilities/LoadingBar'

const CptCodes = () => {
  // dispatch to action
  const dispatch = useDispatch()
  const editCptIdDispatch = (cptId) => {
    dispatch(editCptIdAction(cptId))
  }

  const showCptIdDispatch = (cptId) => {
    dispatch(showCptIdAction(cptId))
  }

  const { setcptID, refresh, setRefresh } = useContext(setDataContext)
  const [cptCodeData, setcptCodeData] = useState([])
  const [cptLoading, setCptLoading] = useState(true)
  const [deleteData, setDeleteData] = useState('')
  const [deleteDataID, setDeleteDataID] = useState('')

  // get CPT data
  const fetchCptCodeData = async () => {
    try {
      const response = await getCptCodesReq()
      setcptCodeData(response.data.data)
      setCptLoading(false)
      setRefresh(false)
    } catch (error) {
      toast.error(ERROR_ALERT_ADMIN)
      setCptLoading(false)
      setRefresh(false)
    }
  }

  useEffect(() => {
    if (refresh || cptLoading) {
      fetchCptCodeData()
    }
  }, [cptLoading, refresh])

  const deletecptData = (provideriddata, id) => {
    setDeleteData(provideriddata)
    setDeleteDataID(id)
  }

  // delete CPT data
  const deletecptCode = async (cptId) => {
    try {
      setCptLoading(true)
      const response = await deleteCptCodeReq(cptId)
      if (response) {
        toast.success(response.data.message)
        fetchCptCodeData()
        editCptIdDispatch(null)
        showCptIdDispatch(null)
      }
    } catch (error) {
      console.error('Error deleting cpt codes:', error)
    }
  }

  // searchable

  const roleValues = ['code', 'pos_code', 'modifier1', 'modifier2', 'modifier3', 'modifier4']

  const [cptColValues, setCptColValues] = useState('code')
  const [filterNameValue, setfilterNameValue] = useState('')

  const handleInputChange = (e) => {
    setCptColValues(e.target.value)
    setfilterNameValue('')
  }

  const handleFilterChange = (e) => setfilterNameValue(e.target.value)
  const filterData = () => {
    if (roleValues.includes(cptColValues)) {
      return cptCodeData.filter((u) => {
        const value = u[cptColValues]
        const sanitizedValue = value != null ? value.toString().toLowerCase() : 'N/A'
        return sanitizedValue.startsWith(filterNameValue.toLowerCase())
      })
    }

    return cptCodeData
  }

  const filteredCPTCodes = filterData()
  return (
    <>
      <div className='d-flex flex-wrap flex-stack mb-2'>
        <h3 className='fw-bold my-2'>CPT Codes</h3>
        <div className='d-flex flex-wrap my-2'>
          <div>
            {
              <form className='mx-3'>
                <input
                  style={{ fontWeight: '500' }}
                  type='text'
                  className='form-control mb-3 search_fieldd'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='Search CPT Code...'
                  value={filterNameValue}
                  onChange={handleFilterChange}
                />
              </form>
            }
          </div>

          <div>
            <select
              className='form-select fw-bolder'
              data-kt-select2='true'
              data-placeholder='Select option'
              data-allow-clear='true'
              data-kt-patient-table-filter='role'
              data-hide-search='true'
              onChange={handleInputChange}
              value={cptColValues}
            >
              <option value='code'>Code Name</option>
              <option value='pos_code'>POS Code</option>
              <option value='modifier1'>Modifier A</option>
              <option value='modifier2'>Modifier B</option>
              <option value='modifier3'>Modifier C</option>
              <option value='modifier4'>Modifier D</option>
            </select>
          </div>
          <div>
            <button
              id='kt_cptcodes_toggle'
              onClick={() => editCptIdDispatch(null)}
              className='mx-3 btn btn-primary '
            >
              <KTIcon iconName='plus' className='fs-3' />
              Add CPT Code
            </button>
          </div>
        </div>
      </div>

      <div className='row g-6 g-xl-9'>
        <div className='col-md-12 col-xl-12'>
          {cptLoading || refresh ? (
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
                        <tr className='fw-bold fs-6 text-gray-800 border-bottom-2 border-gray-200'>
                          <th scope='col'>Code Name</th>
                          <th scope='col'>POS Code</th>
                          <th scope='col'>Modifier A</th>
                          <th scope='col'>Modifier B</th>
                          <th scope='col'>Modifier C</th>
                          <th scope='col'>Modifier D</th>
                          <th scope='col'>Price</th>
                          <th scope='col'>Status</th>
                          <th scope='col'>Actions</th>
                        </tr>
                      </thead>
                      {filteredCPTCodes.length === 0 ? (
                        <tbody>
                          <tr>
                            <td colSpan='10' >
                              <NoDataFoundMessage />
                            </td>
                          </tr>
                        </tbody>
                      ) : (
                        <tbody>
                          {filteredCPTCodes.map((cpt, index) => {
                            return (
                              <tr key={index} className={`bg-light-${cpt.is_active ? '' : 'danger'}`}>
                                <td>
                                <a
                                  href='#'
                                  onClick={() => showCptIdDispatch(cpt.id)}
                                  id='kt_cptdetail_toggle'
                                >
                                  <div className="d-flex align-items-center">
                                    <div className="d-flex justify-content-start flex-column">
                                      <div className="text-dark fw-bold text-hover-primary mb-1 fs-7">
                                        {cpt.code}
                                      </div>
                                      <span className="text-muted fw-semibold d-block">
                                        {cpt.description}
                                      </span>
                                    </div>
                                  </div>
                                </a>
                                </td>
                                <td>{cpt.pos_code}</td>
                                <td>{cpt.modifier1}</td>
                                <td>{cpt.modifier2}</td>
                                <td>{cpt.modifier3}</td>
                                <td>{cpt.modifier4}</td>
                                <td>$ {cpt.fee}</td>
                                <td>
                                  <span
                                    className={`badge badge-light-${cpt.is_active ? 'success' : 'danger'
                                      } fw-bold me-auto px-4 py-3`}
                                  >
                                    {cpt.is_active ? 'Active' : 'Inactive'}
                                  </span>
                                </td>
                                <td>
                                  <a
                                    href='#'
                                    onClick={() => showCptIdDispatch(cpt.id)}
                                    id='kt_cptdetail_toggle'
                                    className='btn btn-icon btn-bg-info btn-active-color-white btn-sm me-1'
                                  >
                                    <i className='bi bi-eye-fill fs-4 px-0'></i>
                                  </a>

                                  <a
                                    href='#'
                                    id='kt_cptcodes_toggle'
                                    onClick={() => editCptIdDispatch(cpt.id)}
                                    className='btn btn-icon btn-bg-success btn-active-color-white btn-sm me-1'
                                  >
                                    <i className='bi bi-pencil-fill fs-4 px-0'></i>
                                  </a>

                                  <a
                                    href='#'
                                    data-bs-toggle='modal'
                                    data-bs-target='#kt_modal_1'
                                    onClick={() => {
                                      deletecptData(cpt.code, cpt.id)
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
        deleteDataFunction={deletecptCode}
        deleteDataID={deleteDataID}
      />
    </>
  )
}

export { CptCodes }
