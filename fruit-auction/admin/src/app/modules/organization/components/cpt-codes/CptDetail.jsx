import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { KTIcon } from '../../../../../_metronic/helpers'
import { showCptCodeReq } from './__request/RequestCptCodes'
import { LoadingBar } from '../../../../utilities/LoadingBar'
import { useDispatch, useSelector } from 'react-redux'
import { showCptIdAction } from '../../../../redux/action'

const CptDetail = () => { 

  const settingState = useSelector((state) => state.cptIdShowReducerComp)
  const [refresh, setRefresh] = useState(true)
  const [cptValues, setCptValues] = useState([]);

  const dispatch=useDispatch()
  const cptDataObj = async () => {
    try {
      setRefresh(true)
      const response = await showCptCodeReq(settingState);
      setCptValues(response.data.data)
      setRefresh(false)
      dispatch(showCptIdAction(null))
    } catch (error) {
      console.error('Error:', error)
      setRefresh(false)
    }
  };

  useEffect(() => {
    if (settingState) {
      cptDataObj()
    }
  }, [settingState])

  return (
    <div
      id='kt_cptdetail'
      className='bg-body'
      data-kt-drawer='true'
      data-kt-drawer-name='cptdetail'
      data-kt-drawer-activate='true'
      data-kt-drawer-overlay='true'
      data-kt-drawer-direction='end'
      data-kt-drawer-toggle='#kt_cptdetail_toggle'
      data-kt-drawer-close='#kt_cptdetail_close'
    >
      { refresh ? (
          <LoadingBar />
        ) : (
          <>
            <div className='card shadow-none rounded-0'>
              <div className='card-header' id='kt_facilitydetail_header'>
                <h3 className='card-title fw-bolder text-dark'>CPT Detail</h3>
                <div className='card-toolbar'>
                  <button
                    type='button'
                    className='btn btn-sm btn-icon btn-active-light-primary me-n5'
                    id='kt_cptdetail_close'
                  >
                    <KTIcon iconName='cross' className='fs-1' />
                  </button>
                </div>
              </div>

              <div className="card card-xl-stretch mb-xl-8">
                <div className="card-body p-0">
                  <div className="px-9 pt-7 card-rounded h-275px w-100 bg-success">
                    <div className="d-flex flex-stack">
                      <span className={`badge badge-light-${cptValues.is_active ? 'success' : 'danger'} fw-bold me-auto px-4 py-3`} >
                        {cptValues.is_active ? 'Active' : 'Inactive'}
                      </span>
                    </div>
                    <div className="d-flex text-center flex-column text-white pt-8">
                      <span className="fw-semibold fs-7">CPT Code</span>
                      <span className="fw-bold fs-2x pt-1">{cptValues.code}</span>
                    </div>
                  </div>
                  <div
                    className="shadow-xs card-rounded mx-9 mb-9 px-6 py-9 position-relative z-index-1 bg-body"
                    style={{ marginTop: "-100px" }}
                  >
                    <div className="row g-0">
                      <div className="col bg-light-warning px-6 py-3 rounded-2 me-7 mb-7"style={{ width: '600px' }}>
                        <div className="fs-6 text-gray-700">Description</div>
                        <div className="fs-4 fw-bold text-gray-800">{cptValues.description}</div>
                      </div>
                    </div>
                    <div className="row g-0">
                      <div className="col bg-light-warning px-6 py-3 rounded-2 me-7 mb-7">
                        <div className="fs-6 text-gray-700">Modifier A</div>
                        <div className="fs-4 fw-bold text-gray-800">{cptValues.modifier1}</div>
                      </div>
                      <div className="col bg-light-warning px-6 py-3 rounded-2 me-7 mb-7">
                        <div className="fs-6 text-gray-700">Modifier B</div>
                        <div className="fs-4 fw-bold text-gray-800">{cptValues.modifier2}</div>
                      </div>
                      <div className="col bg-light-warning px-6 py-3 rounded-2 me-7 mb-7">
                        <div className="fs-6 text-gray-700">Modifier C</div>
                        <div className="fs-4 fw-bold text-gray-800">{cptValues.modifier3}</div>
                      </div>
                    </div>
                    <div className="row g-0">
                      <div className="col bg-light-warning px-6 py-3 rounded-2 me-7 mb-7">
                        <div className="fs-6 text-gray-700">Modifier D</div>
                        <div className="fs-4 fw-bold text-gray-800">{cptValues.modifier4}</div>
                      </div>
                      <div className="col bg-light-warning px-6 py-3 rounded-2 me-7 mb-7">
                        <div className="fs-6 text-gray-700">Pos Code</div>
                        <div className="fs-4 fw-bold text-gray-800">{cptValues.pos_code}</div>
                      </div>
                      <div className="col bg-light-warning px-6 py-3 rounded-2 me-7 mb-7">
                        <div className="fs-6 text-gray-700">Fee</div>
                        <div className="fs-4 fw-bold text-gray-800">{cptValues.fee}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='card-footer py-2 d-flex justify-content-end' id='kt_facility_footer'>
                 
                  <button
                    type='button'
                    className='btn btn-bg-body text-primary mt-2'
                    id='kt_cptdetail_close'
                  >
                    Back
                    <KTIcon iconName='arrow-right' className='fs-3 text-primary ' />
                  </button>
                </div>
              </div>
            </div>
          </>
        )
      }
    </div>
  )
}

export { CptDetail }
