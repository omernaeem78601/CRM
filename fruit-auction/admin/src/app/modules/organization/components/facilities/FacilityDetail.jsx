import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { KTIcon } from '../../../../../_metronic/helpers'
import { getSingleFacilityDataReq } from './__request/RequestFacility'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { LoadingBar } from '../../../../utilities/LoadingBar'
import { ERROR_ALERT_ADMIN } from '../../../../utilities/AlertMsgConstant'
import { useDispatch, useSelector } from 'react-redux'
import { showFacilityIdAction } from '../../../../redux/action'

const FacilityDetail = () => {
  const facilityState = useSelector((state) => state.facilityIdShowReducerComp)
  const [refresh, setRefresh] = useState(false)
  const [facilityData, setFacilityData] = useState([])
  const dispatch = useDispatch()
  // get facility data
  const facilityDataObj = async () => {
    try {
      setRefresh(true)
      const response = await getSingleFacilityDataReq(facilityState);
      setFacilityData(response.data.data)
      setRefresh(false)
      dispatch(showFacilityIdAction(null));
    } catch (error) {
      toast.error(ERROR_ALERT_ADMIN)
    }
  };

  useEffect(() => {
    if (facilityState) {
      facilityDataObj()
    }
  }, [facilityState])

  return (
    <div
      id='kt_facilitydetail'
      className='bg-body'
      data-kt-drawer='true'
      data-kt-drawer-name='facilitydetail'
      data-kt-drawer-activate='true'
      data-kt-drawer-overlay='true'
      // data-kt-drawer-width="{default:'300px', 'lg': '900px'}"
      data-kt-drawer-direction='end'
      data-kt-drawer-toggle='#kt_facilitydetail_toggle'
      data-kt-drawer-close='#kt_facilitydetail_close'
    >
      {refresh ? (
        <div style={{ textAlign: 'center' }}>
          <LoadingBar />
        </div>
      ) : (
        <>
          <div className='card shadow-none rounded-0'>
            <div className='card-header' id='kt_facilitydetail_header'>
              <h3 className='card-title fw-bolder text-dark'>Facility Detail</h3>
              <div className='card-toolbar'>
                <button
                  type='button'
                  className='btn btn-sm btn-icon btn-active-light-primary me-n5'
                  id='kt_facilitydetail_close'
                >
                  <KTIcon iconName='cross' className='fs-1' />
                </button>
              </div>  
            </div>

            <div className="card card-xl-stretch mb-xl-8">
              <div className="card-body p-0">
                <div className="px-9 pt-7 card-rounded h-275px w-100 bg-success">
                  <div className="d-flex flex-stack">
                    <span className={`badge badge-light-${facilityData.is_active ? 'success' : 'danger'} fw-bold me-auto px-4 py-3`} >
                      {facilityData.is_active ? 'Active' : 'Inactive'}
                    </span>
                    {facilityData.is_varified === 1 ? (
                      <i className="ki-duotone ki-verify fs-1 text-danger">
                        <span className="path1"></span>
                        <span className="path2"></span>
                      </i>
                    ) : null}

                  </div>
                  <div className="d-flex text-center flex-column text-white pt-8">
                    <span className="fw-semibold fs-7">{facilityData.npi}</span>
                    <span className="fw-bold fs-2x pt-1">{facilityData.name}</span>
                  </div>
                </div>
                <div
                  className="shadow-xs card-rounded mx-9 mb-9 px-6 py-9 position-relative z-index-1 bg-body"
                  style={{ marginTop: "-100px" }}
                >
                  <div className="row g-0">
                    <div className="col bg-light-warning px-6 py-3 rounded-2 me-7 mb-7"style={{ width: '600px' }}>
                      <div className="fs-6 text-gray-700">Address</div>
                      <div className="fs-4 fw-bold text-gray-800">{facilityData.address}</div>
                    </div>
                  </div>

                  <div className="row g-0">
                    <div className="col bg-light-warning px-6 py-3 rounded-2 me-7 mb-7">
                      <div className="fs-6 text-gray-700">Phone</div>
                      <div className="fs-4 fw-bold text-gray-800">{facilityData.phone}</div>
                    </div>
                    <div className="col bg-light-warning px-6 py-3 rounded-2 me-7 mb-7">
                      <div className="fs-6 text-gray-700">Fax</div>
                      <div className="fs-4 fw-bold text-gray-800">{facilityData.fax}</div>
                    </div>
                    <div className="col bg-light-warning px-6 py-3 rounded-2 me-7 mb-7">
                      <div className="fs-6 text-gray-700">Email</div>
                      <div className="fs-4 fw-bold text-gray-800">{facilityData.email}</div>
                    </div>

                  </div>

                  <div className="row g-0">
                    <div className="col bg-light-warning px-6 py-3 rounded-2 me-7 mb-7">
                      <div className="fs-6 text-gray-700">Facility ID</div>
                      <div className="fs-4 fw-bold text-gray-800">{facilityData.facility_id}</div>
                    </div>
                    <div className="col bg-light-warning px-6 py-3 rounded-2 me-7 mb-7">

                    </div>
                    <div className="col bg-light-warning px-6 py-3 rounded-2 me-7 mb-7">

                    </div>
                  </div>
                </div>
              </div>
              <div className='card-footer py-2 d-flex justify-content-end' id='kt_facility_footer'>
                <Link to='/organization/facilities' className=''>
                  
                </Link>
                <button
                  type='button'
                  className='btn btn-bg-body text-primary mt-2'
                  id='kt_facilitydetail_close'
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

export { FacilityDetail }
