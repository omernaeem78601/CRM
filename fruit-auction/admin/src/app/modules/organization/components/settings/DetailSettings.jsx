import { useContext, useEffect, useState } from 'react'
import { KTIcon, useDebounce } from '../../../../../_metronic/helpers'
import { setDataContext } from '../../../../utilities/SettingContext'
import { getSingleSettingDataViewReq } from './__request/RequestSettings'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ERROR_ALERT_ADMIN } from '../../../../utilities/AlertMsgConstant'
import { LoadingBar } from '../../../../utilities/LoadingBar'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { showSettingIdAction } from '../../../../redux/action';
const DetailSettings = () => {
 
  const settingViewState = useSelector((state) => state.settingIdShowReducerComp)
  const { optionListName, refresh, setRefresh } = useContext(setDataContext)
  const orderData = []
  for (let i = 1; i <= 100; i++) {
    orderData.push(i)
  }

  const [optionValues, setOptionValues] = useState([])

  // get Setting Data 
  const dispatch=useDispatch()
  const settingDataObj = async () => {
    try {
      const response = await getSingleSettingDataViewReq(optionListName, settingViewState)
      setOptionValues(response.data.data)
      setRefresh(false)
      dispatch(showSettingIdAction(null));
    } catch (error) {
      toast.error(ERROR_ALERT_ADMIN)
    }
  } 
  useEffect(() => {
    if (settingViewState) {
      settingDataObj()
    }
    
  }, [settingViewState])
  return (
    <div
      id='kt_detailsettings'
      className='bg-body'
      data-kt-drawer='true'
      data-kt-drawer-name='detailsettings'
      data-kt-drawer-activate='true'
      data-kt-drawer-overlay='true'
      data-kt-drawer-direction='end'
      data-kt-drawer-toggle='#kt_detailsettings_toggle'
      data-kt-drawer-close='#kt_detailsettings_close'
    >
      {refresh ? (
        <div style={{ textAlign: 'center' }}>
          <LoadingBar />
        </div>
      ) : (
        <>
          <div className='card shadow-none rounded-0'>
            <div className='card-header' id='kt_facilitydetail_header'>
              <h3 className='card-title fw-bolder text-dark'>Setting Detail</h3>
              <div className='card-toolbar'>
                <button
                  type='button'
                  className='btn btn-sm btn-icon btn-active-light-primary me-n5'
                  id='kt_detailsettings_close'
                >
                  <KTIcon iconName='cross' className='fs-1' />
                </button>
              </div>
            </div>
            <div className="card card-xl-stretch mb-xl-8">
              <div className="card-body p-0">
                <div className="px-9 pt-7 card-rounded h-275px w-100 bg-success">
                  <div className="d-flex flex-stack">
                    <span className={`badge badge-light-${optionValues.is_active ? 'success' : 'danger'} fw-bold me-auto px-4 py-3`} >
                      {optionValues.is_active ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                  <div className="d-flex text-center flex-column text-white pt-8">
                    <span className="fw-semibold fs-7">List Name</span>
                    <span className="fw-bold fs-2x pt-1">{optionListName}</span>
                  </div>
                </div>
                <div
                  className="shadow-xs card-rounded mx-9 mb-9 px-6 py-9 position-relative z-index-1 bg-body"
                  style={{ marginTop: "-100px" }}
                >
                  <div className="row g-0">
                    <div className="col bg-light-warning px-6 py-3 rounded-2 me-7 mb-7">
                      <div className="fs-6 text-gray-700">Option ID</div>
                      <div className="fs-4 fw-bold text-gray-800">{optionValues.option_id}</div>
                    </div>
                    <div className="col bg-light-warning px-6 py-3 rounded-2 me-7 mb-7">
                      <div className="fs-6 text-gray-700">Option Value</div>
                      <div className="fs-4 fw-bold text-gray-800">{optionValues.option_value}</div>
                    </div>
                  </div>
                  <div className="row g-0">
                    <div className="col bg-light-warning px-6 py-3 rounded-2 me-7 mb-7"style={{ width: '600px' }}>
                      <div className="fs-6 text-gray-700">Description</div>
                      <div className="fs-4 fw-bold text-gray-800">{optionValues.description}</div>
                    </div>
                  </div>
                  <div className="row g-0">
                    <div className="col bg-light-warning px-6 py-3 rounded-2 me-7 mb-7">
                      <div className="fs-6 text-gray-700">Sort Order</div>
                      <div className="fs-4 fw-bold text-gray-800">{optionValues.seq}</div>
                    </div>
                    <div className="col bg-light-warning px-6 py-3 rounded-2 me-7 mb-7">
                      <div className="fs-6 text-gray-700">Is Defult</div>
                      <div className="fs-4 fw-bold text-gray-800">{optionValues.is_defult ? 'true' : 'false'}</div>
                    </div>
                    <div className="col bg-light-warning px-6 py-3 rounded-2 me-7 mb-7">
                    </div>
                  </div>
                </div>
              </div>
              <div className='card-footer py-2 d-flex justify-content-end' id='kt_facility_footer'>
                <button
                  type='button'
                  className='btn btn-bg-body text-primary mt-2'
                  id='kt_detailsettings_close'
                >
                  Back
                  <KTIcon iconName='arrow-right' className='fs-3 text-primary ' />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export { DetailSettings }
