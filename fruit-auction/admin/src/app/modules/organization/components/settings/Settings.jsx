import { useEffect, useState, useContext } from 'react'
import { KTIcon } from '../../../../../_metronic/helpers'
import { setDataContext } from '../../../../utilities/SettingContext'
import debounce from 'lodash/debounce'
import Pagination from '../../../../utilities/Pagination'
import DeleteAlert from '../../../../utilities/DeleteAlert'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { deleteSettingDataReq, getSettingCategory, getSettingDataReq } from './__request/RequestSettings'
import { LoadingBar } from '../../../../utilities/LoadingBar'
import { useDispatch } from 'react-redux'
import { editSettingIdAction, showSettingIdAction } from '../../../../redux/action'
import { NoDataFoundMessage } from '../../../../utilities/AlertMsgConstant'

const Settings = () => {

  const { optionListName, setOptionListName, setSettingID, pageNumber, refresh, setRefresh } =
    useContext(setDataContext)
  const [deleteData, setDeleteData] = useState('')
  const [deleteDataID, setDeleteDataID] = useState('')
  const [isDataLoaded, setDataLoaded] = useState(false)

  const [paginationData, setPaginationData] = useState(null)


  const [settingUData, setSettingUData] = useState([])
  const [categoryData, setCategoryData] = useState([])
  const [settingLoading, setSettingLoading] = useState(true)
  const [categoryLoading, setCategoryLoading] = useState(true)

  // dispatch to action 
  const dispatch = useDispatch();

  const editSettingIdDispatch = (settingId) => {
    dispatch(editSettingIdAction(settingId));
  }


  const showSettingIdDispatch = (settingId) => {
    dispatch(showSettingIdAction(settingId));
  }



  // delete
  const deleteSettingData = (optionID, ID) => {
    setDeleteData(optionID)
    setDeleteDataID(ID)
  }
  const deleteSetting = async (id) => {
    try {
      const response = await deleteSettingDataReq(optionListName, id);
      if (response) {
        toast.success(response.data.message)
        settingData()
        setRefresh(false)
        dispatch(showSettingIdAction(null));
        dispatch(editSettingIdAction(null));
      }
    } catch (error) {
      toast.error('Whoops! something wrong, please contact site Administrator')
    }
  };

  // get category
  const settingCategoryData = async () => {
    try {
      const response = await getSettingCategory();
      setCategoryData(response.data.data)
      setCategoryLoading(false)
    } catch (error) {
      console.error('Error:', error)
      setCategoryLoading(false)
    }
  };

  // get setting data
  const settingData = async () => {
    try {
      // setSettingLoading(true)
      const response = await getSettingDataReq(optionListName, pageNumber);
      setSettingUData(response.data.data)

      setPaginationData(response.data.meta)

      setSettingLoading(false)
      setRefresh(false)
    } catch (error) {
      toast.error('Whoops! something wrong, please contact site Administrator')
      setSettingLoading(false)
      setRefresh(false);
    }
  };

  const debouncedFetchData = debounce(() => {
    settingData()
    setDataLoaded(true)
  }, 200)

  useEffect(() => {
    if ((refresh || !isDataLoaded)) {
      debouncedFetchData();
    }
  }, [optionListName, pageNumber, isDataLoaded, paginationData, refresh, settingLoading]);

  useEffect(() => {
    if (categoryLoading) {
      settingCategoryData()
    }
  }, [])



  return (
    <>
      <div className="d-flex flex-wrap flex-stack mb-2">
        <h3 className="fw-bold my-2">Option Settings</h3>
        <div className="d-flex flex-wrap my-2">
          <div>
            {categoryData && categoryData.length > 0 ? (
              <select
                className='form-select fw-bolder'
                data-kt-select2='true'
                data-placeholder='Select option'
                data-allow-clear='true'
                data-kt-patient-table-filter='role'
                data-hide-search='true'
                onChange={(e) => {
                  setOptionListName(e.target.value)
                  setRefresh(true)
                }}

                value={optionListName}
              >
                {categoryData.map((e, index) => (
                  <option onClick={() => setDataLoaded(false)} key={index} value={e.id}>
                    {e.value}
                  </option>
                ))}
              </select>
            ) : (
              <select className='form-select fw-bolder' disabled>
                <option value=''>No Options Available</option>
              </select>
            )}
          </div>

          <div>
            <button id='kt_settings_toggle' onClick={() => editSettingIdDispatch(null)} className='mx-3 btn btn-primary '>
              <KTIcon iconName='plus' className='fs-3' /> Add Settings
            </button>
          </div>
        </div>
      </div>

      <div className='row g-6 g-xl-9'>
        <div className='col-md-12 col-xl-12'>

          {settingLoading || refresh ? (
            <LoadingBar />
          ) : (
            <div className='card mb-3 p-3'>
              <div className='card-body p-1'>
                <div
                  id='kt_table_users_wrapper'
                  className='dataTables_wrapper dt-bootstrap4 no-footer'
                >
                  <div className='table-responsive'>
                    <table className="table table-hover table-row-bordered gs-4">
                      <thead>
                        <tr className="fw-bold fs-6 text-gray-800 border-bottom-2 border-gray-200">
                          {/* <th scope='col'>Option ID</th> */}
                          <th scope='col'>Setting Name</th>
                          {/* <th scope='col'>Description</th> */}
                          <th scope='col'>Order</th>
                          <th scope='col'>Is Defult</th>
                          <th scope='col'>Status</th>
                          <th scope='col'>Actions</th>
                        </tr>
                      </thead>

                      {settingUData.length === 0 ? (
                        <tbody>
                          <tr>
                            <td colSpan='8' center>
                              <NoDataFoundMessage />
                            </td>
                          </tr>

                        </tbody>
                      ) : (
                        <tbody>
                          {settingUData.map((option, index) => {
                            return (
                              <tr key={index} className={`bg-light-${option.is_active ? '' : 'danger'}`}>
                                {/* <td>{option.option_id}</td> */}
                                <td>
                                  <a href="#"
                                    onClick={() => showSettingIdDispatch(option.id)}
                                    id='kt_detailsettings_toggle'
                                  >
                                    <div className="d-flex align-items-center">
                                      <div className="d-flex justify-content-start flex-column">
                                        <div className="text-dark fw-bold text-hover-primary mb-1 fs-6">
                                          {option.option_value}
                                        </div>
                                        <span className="text-muted fw-semibold d-block">
                                          {option.description}
                                        </span>
                                      </div>
                                    </div>
                                  </a>
                                </td>
                                <td>{option.seq}</td>
                                <td>
                                  <span
                                    className={`badge badge-light-${option.is_defult ? 'success' : 'info'
                                      } fw-bold me-auto px-4 py-3`}
                                  >
                                    {option.is_defult ? 'Yes' : 'No'}
                                  </span>
                                </td>

                                <td>
                                  <span
                                    className={`badge badge-light-${option.is_active ? 'success' : 'danger'
                                      } fw-bold me-auto px-4 py-3`}
                                  >
                                    {option.is_active ? 'Active' : 'Inactive'}
                                  </span>
                                </td>

                                <td>
                                  <a href="#"
                                    onClick={() => showSettingIdDispatch(option.id)}
                                    id='kt_detailsettings_toggle'
                                    className="btn btn-icon btn-bg-info btn-active-color-white btn-sm me-1"
                                  >
                                    <i className="bi bi-eye-fill fs-4 px-0"></i>
                                  </a>

                                  <a href="#"
                                    id='kt_settings_toggle'
                                    onClick={() => editSettingIdDispatch(option.id)}
                                    className="btn btn-icon btn-bg-success btn-active-color-white btn-sm me-1"
                                  >
                                    <i className="bi bi-pencil-fill fs-4 px-0"></i>
                                  </a>

                                  <a href="#"
                                    data-bs-toggle='modal'
                                    data-bs-target='#kt_modal_1'
                                    onClick={() => deleteSettingData(option.option_id, option.id)}
                                    className="btn btn-icon btn-bg-danger btn-active-color-white btn-sm me-1"
                                  >
                                    <i className="bi bi-trash-fill fs-4 px-0"></i>
                                  </a>


                                  <DeleteAlert deleteData={deleteData} deleteDataFunction={deleteSetting} deleteDataID={deleteDataID} />

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
        </div>
      </div>
    </>
  )
}

export { Settings }
