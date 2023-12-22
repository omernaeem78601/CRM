import { useEffect, useState, useContext } from 'react'
import { setDataContext } from '../../../../utilities/SettingContext'
import { deleteFacilityDataReq, getFacilityDataReq } from './__request/RequestFacility'
import DeleteAlert from '../../../../utilities/DeleteAlert'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ERROR_ALERT_ADMIN, NoDataFoundMessage } from '../../../../utilities/AlertMsgConstant'
import { useDispatch, useSelector } from 'react-redux'
import { editFacilityIdAction, showFacilityIdAction } from '../../../../redux/action'
import { LoadingBar } from '../../../../utilities/LoadingBar'
import { Link } from 'react-router-dom'
const FacilityList = () => {
  const facilityState = useSelector((state) => state.facilityIdEditReducer)
  // dispatch to action 
  const dispatch = useDispatch();

  const editFacilitiesIdDispatch = (cptId) => {
    dispatch(editFacilityIdAction(cptId));
  }


  const showFacilitiesIdDispatch = (cptId) => {
    dispatch(showFacilityIdAction(cptId));
  }




  const { setFacilityID, refresh, setRefresh } = useContext(setDataContext)
  const [facilityData, setFacilityData] = useState([])
  const [facilityLoading, setFacilityLoading] = useState(true)

  const facilityDataSet = async () => {
    try {
      // setFacilityLoading(true)
      const response = await getFacilityDataReq()
      setFacilityData(response.data.data)
      console.log(response.data.data)
      setFacilityLoading(false)
      setRefresh(false)
    } catch (error) {
      toast.error(ERROR_ALERT_ADMIN)
      setFacilityLoading(false)
      setRefresh(false)
    }
  }

  const [deleteData, setDeleteData] = useState('')
  const [deleteDataID, setDeleteDataID] = useState('')
  const deletefacilitData = (optionID, ID) => {
    setDeleteData(optionID)
    setDeleteDataID(ID)
  }

  const deleteFacility = async (facilityId) => {
    try {
      const response = await deleteFacilityDataReq(facilityId)
      if (response) {
        toast.success(response.data.message)
        facilityDataSet();
        dispatch(showFacilityIdAction(null));
        dispatch(editFacilityIdAction(null));
      }
    } catch (error) {
      toast.error(ERROR_ALERT_ADMIN)
    }
  }

  useEffect(() => {
    if (  refresh || facilityLoading) {
      facilityDataSet()
    }
  }, [facilityLoading, refresh])

  return (
    <>
      <div className='d-flex flex-wrap flex-stack mb-2'>
        <h3 className='fw-bold my-2'>Facility Locations</h3>
        <div className='d-flex flex-wrap my-2'>
          <button
            onClick={() => editFacilitiesIdDispatch(null)}
            id='kt_addfacility_toggle'
            className='mx-3 btn btn-primary'>
            <i className='ki-duotone ki-plus fs-3'></i>
            Add New Facility
          </button>
        </div>
      </div>

      {facilityLoading || refresh ? (
        <LoadingBar />
      ) :
        (

          <div className='row g-6 g-xl-9'>
            {facilityData.length === 0 ? (
              <NoDataFoundMessage />
            ) : (


              facilityData.map((facility, index) => (
                <div key={index} className='col-md-6 col-xl-4'>
                  <div className='card border-hover-primary '>
                    <div className='card-header border-0 pt-9'>
                      <div className='card-title m-0'>
                        <div className='symbol symbol-75px symbol-circle'>
                          <span className={`symbol-label bg-warning fs-5 fw-bolder`}>
                            <i className='bi bi-bank text-dark fs-1'></i>
                          </span>
                        </div>
                      </div>
                      <div className='card-toolbar'>
                        <span
                          className={`badge badge-light-${facility.is_active ? 'success' : 'danger'
                            } fw-bold me-auto px-4 py-3`}
                        >
                          {facility.is_active ? 'Active' : 'Inactive'}
                        </span>
                      </div>
                    </div>

                    <div className='card-body p-9'>
                      {/* <div className='fs-3 fw-bold text-dark'>{facility.name}</div> */}
                      <a
                        href='#'
                        onClick={() => showFacilitiesIdDispatch(facility.id)}
                        className='fs-3 fw-bold text-dark'
                        id='kt_facilitydetail_toggle'
                      >
                        {facility.name}
                        <p className='text-gray-400 fw-semibold fs-5 mt-1 mb-7'>
                          CRM App application to HR efficiency
                        </p>
                      </a>
                      <div className='d-flex flex-wrap mb-5'>
                        <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3'>
                          <div className='fw-semibold text-gray-400'>NPI</div>
                          <div className='fs-6 text-gray-800 fw-bold'>{facility.npi}</div>
                        </div>
                        <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3'>
                          <div className='fw-semibold text-gray-400'>Location</div>
                          <div className='fs-6 text-gray-800 fw-bold'>
                            {facility.state} {facility.zip_code}{' '}
                          </div>
                        </div>
                      </div>
                      <div
                        className='h-4px w-100 bg-light mb-5'
                        data-bs-toggle='tooltip'
                        aria-label='This project 50% completed'
                        data-bs-original-title='This project 50% completed'
                        data-kt-initialized='1'
                      >
                        <div
                          className='bg-primary rounded h-4px'
                          role='progressbar'
                          aria-valuenow=' 50'
                          aria-valuemin='0'
                          aria-valuemax='100'
                        ></div>
                      </div>
                      <div className='symbol-group symbol-hover'>
                        <a
                          href='#'
                          onClick={() => showFacilitiesIdDispatch(facility.id)}
                          className='btn btn-sm btn-info me-2'
                          id='kt_facilitydetail_toggle'
                        >
                          Detail
                        </a>
                        <a
                          href='#'
                          onClick={() => editFacilitiesIdDispatch(facility.id)}
                          className='btn btn-sm btn-success me-2'
                          id='kt_addfacility_toggle'
                        >
                          Edit
                        </a>
                        <a
                          data-bs-toggle='modal'
                          data-bs-target='#kt_modal_1'
                          onClick={() => deletefacilitData(facility.name, facility.id)}
                          className='btn btn-sm btn-danger me-2'
                        >
                          Delete
                        </a>

                        <DeleteAlert
                          deleteData={deleteData}
                          deleteDataFunction={deleteFacility}
                          deleteDataID={deleteDataID}
                        />
                      </div>
                    </div>
                  </div>
                </div>

              ))
            )}
          </div>
        )}
    </>
  )
}

export { FacilityList }
