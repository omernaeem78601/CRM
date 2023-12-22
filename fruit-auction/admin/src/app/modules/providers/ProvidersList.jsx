import { useContext, useEffect, useState } from 'react'
import { KTIcon } from '../../../_metronic/helpers'
import { setDataContext } from '../../utilities/SettingContext'
import Pagination from '../../utilities/Pagination'
import { getProviderReq, deleteProviderReq } from './__request/RequestProvider'
import DeleteAlert from '../../utilities/DeleteAlert'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ERROR_ALERT_ADMIN, NoDataFoundMessage } from '../../utilities/AlertMsgConstant'
import { LoadingBar } from '../../utilities/LoadingBar'
import { editProviderIdAction, showProviderIdAction } from '../../redux/action'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'

const ProvidersList = () => {
  const ptype = useSelector((state) => state.providerTypeReducer)
  // dispatch to action 
  const dispatch = useDispatch();

  const editProviderIdDispatch = (providerId) => {
    dispatch(editProviderIdAction(providerId));
  }

  const showProviderIdDispatch = (providerId) => {
    dispatch(showProviderIdAction(providerId));
  }

  const [deleteData, setDeleteData] = useState('')
  const [deleteDataID, setDeleteDataID] = useState('')
  const searchval = {
    text: '',
    field: 'first_name',
  }
  const [paginationData, setPaginationData] = useState(null)
  const [searchValue, setSearchValue] = useState(searchval)


  const {
    refresh,
    setRefresh,
    pageNumber,
    setPageNumber
  } = useContext(setDataContext)

  const [providerData, setproviderData] = useState([])

  const [providerLoading, setProviderLoading] = useState(true)

  const fetchProviderData = async () => {
    if (searchValue.text !== '') {
      setPageNumber(1)
    }
    try {
      const response = await getProviderReq(ptype, pageNumber, searchValue)
      setproviderData(response.data.data)
      setPaginationData(response.data.meta)
      setProviderLoading(false)
      setRefresh(false)
    } catch (error) {
      toast.error(ERROR_ALERT_ADMIN)
      setProviderLoading(false)
      setRefresh(false)
    }
  }

  const deleteProviderDataObj = (providerData, id) => {
    setDeleteData(providerData)
    setDeleteDataID(id)
  }

  const deleteProvider = async (providerID) => {
    try {
      const response = await deleteProviderReq(ptype, providerID)
      if (response) {
        fetchProviderData()
        dispatch(showProviderIdAction(null));
        dispatch(editProviderIdAction(null));
        toast.success(response.data.message)
      }
    } catch (error) {
      console.error('Error in deleteProvider:', error)
      toast.error(ERROR_ALERT_ADMIN)
    }
  }
  const { values, setValues, handleBlur, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues: searchval,
    onSubmit: values => {
      searchProviderData(values)
    }
  });

  //search 
  const searchProviderData = async (values) => {
    setSearchValue(values);
    fetchProviderData()
    setRefresh(true);
  }

  const rsetFilterForm = async (e) => {
    e.preventDefault()
    resetForm()
    setValues(searchval)
    setSearchValue(searchval)
    setRefresh(true);
  }

  useEffect(() => {
    if (ptype || refresh) {
      setProviderLoading(true);
      fetchProviderData();
    }
  }, [ptype, pageNumber, refresh]);


  return (
    <>
      <div className='d-flex flex-wrap flex-stack justify-content-end mb-2'>
        <div className="d-flex align-items-center gap-2 gap-lg-3" data-select2-id="select2-data-122-hy60">
          <div className="m-0" data-select2-id="select2-data-121-ewuv">
            <a href="#" className="btn btn-sm btn-secondary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
              <i className="bi bi-funnel"></i> Filter
            </a>
            <div className="menu menu-sub menu-sub-dropdown w-500px w-md-600px" data-kt-menu="true" id="kt_menu_651c03b12454d" data-select2-id="select2-data-kt_menu_651c03b12454d">
              <div className="px-7 py-5">
                <div className="fs-5 text-dark fw-bold">Filter Options</div>
              </div>
              <div className="px-7 py-5" data-select2-id="select2-data-120-1779">
                <div className="mb-10" data-select2-id="select2-data-119-kwwx">
                  <label className="form-label fw-semibold">Search:</label>
                  <form id='providerFilter' className='d-flex' onSubmit={handleSubmit}>
                    <input
                      type='text'
                      className='form-control mb-3 me-5 search_fieldd'
                      placeholder='Search Provider...'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.text}
                      name='text'
                    />
                    <select
                      className='form-select mb-3 me-5  search_fieldd'
                      data-kt-patient-table-filter='role'
                      data-hide-search='true'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.field}
                      name='field'
                    >
                      <option value='first_name'>First Name</option>
                      <option value='last_name'>Last Name</option>
                      <option value='npi'>Npi</option>
                    </select>

                  </form>
                </div>

                <div className="d-flex justify-content-end">
                  <button onClick={rsetFilterForm} className="btn btn-sm btn-light btn-active-light-primary me-2" >Reset</button>
                  <button type='submit' onClick={handleSubmit} className='mx-3 btn btn-primary '>
                    Search
                  </button>

                </div>
              </div>
            </div>
          </div>

          <div>
            <button
              onClick={() => editProviderIdDispatch(null)}
              id='kt_addprovider_toggle'
              className='btn btn-sm fw-bold btn-primary'
            >
              <KTIcon iconName='plus' className='fs-1' />
              Add Provider
            </button>
          </div>
        </div>
      </div>

      <div className='row g-6 g-xl-9'>
        <div className='col-md-12 col-xl-12'>
          {providerLoading ? (
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
                          <th>NPI</th>
                          <th>Name</th>
                          <th>Location</th>
                          <th>Specialty</th>
                          <th>Status</th>
                          <th className="text-center">Actions</th>
                        </tr>
                      </thead>

                      {providerData.length === 0 ? (
                        <tbody>
                          <tr>
                            <td colSpan='8' center>
                              <NoDataFoundMessage />
                            </td>
                          </tr>
                        </tbody>
                      ) : (
                        <tbody>
                          {providerData.map((provider, index) => {
                            return (
                              <tr key={index} className={`bg-light-${provider.is_active ? '' : 'danger'}`}>
                                <td>
                                  {provider.npi}
                                </td>
                                <td>
                                  {provider.full_name}
                                </td>
                                <td>
                                  {provider.address}
                                </td>
                                <td>{provider.specialty} <br />{provider.taxonomy}</td>
                                <td>
                                  <span
                                    className={`badge badge-light-${provider.is_active ? 'success' : 'danger'
                                      } fw-bold me-auto px-4 py-3`}
                                  >
                                    {provider.is_active ? 'Active' : 'Inactive'}
                                  </span>
                                </td>
                                <td className="text-end">
                                  <a
                                    href='#'
                                    onClick={() => showProviderIdDispatch(provider.id)}
                                    id='kt_detailprovider_toggle'
                                    className='btn btn-icon btn-bg-info btn-active-color-white btn-sm me-1'
                                  >
                                    <i className='bi bi-eye-fill fs-4 px-0'></i>
                                  </a>

                                  <a
                                    href='#'
                                    id='kt_addprovider_toggle'
                                    onClick={() => editProviderIdDispatch(provider.id)}
                                    className='btn btn-icon btn-bg-success btn-active-color-white btn-sm me-1'
                                  >
                                    <i className='bi bi-pencil-fill fs-4 px-0'></i>
                                  </a>

                                  <a
                                    href='#'
                                    data-bs-toggle='modal'
                                    data-bs-target='#kt_modal_1'
                                    onClick={() => {
                                      deleteProviderDataObj(provider.npi, provider.id)
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
                  <Pagination paginationData={paginationData} />
                </div>
              </div>
            </div>
          )}
          <DeleteAlert
            deleteData={deleteData}
            deleteDataFunction={deleteProvider}
            deleteDataID={deleteDataID}
          />
        </div>
      </div>
    </>
  )
}

export { ProvidersList }
