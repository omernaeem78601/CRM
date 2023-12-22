import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {KTIcon} from '../../../../../_metronic/helpers'
import {showIcdCodeReq} from './__request/RequestIcdCodes'
import {LoadingBar} from '../../../../utilities/LoadingBar'
import {useDispatch, useSelector} from 'react-redux'
import {showIcdIdAction} from '../../../../redux/action'

const IcdDetail = () => {
  const icdState = useSelector((state) => state.icdIdShowReducerComp)
  const [refresh, setRefresh] = useState(true)
  const [icdValues, setIcdValues] = useState([])
  const dispatch = useDispatch()
  const icdDataObj = async () => {
    try {
      setRefresh(true)
      const response = await showIcdCodeReq(icdState)
      setIcdValues(response.data.data)
      setRefresh(false)
      dispatch(showIcdIdAction(null))
    } catch (error) {
      console.error('Error:', error)
      setRefresh(false)
    }
  }

  useEffect(() => {
    if (icdState) {
      icdDataObj()
    }
  }, [icdState])

  return (
    <div
      id='kt_icddetail'
      className='bg-body'
      data-kt-drawer='true'
      data-kt-drawer-name='icddetail'
      data-kt-drawer-activate='true'
      data-kt-drawer-overlay='true'
      data-kt-drawer-direction='end'
      // data-kt-drawer-width="{default:'300px', 'lg': '900px'}"
      data-kt-drawer-toggle='#kt_icddetail_toggle'
      data-kt-drawer-close='#kt_icddetail_close'
    >
      {refresh ? (
        <LoadingBar />
      ) : (
        <>
          <div className='card shadow-none rounded-0'>
            <div className='card-header' id='kt_icddetail_header'>
              <h3 className='card-title fw-bolder text-dark'>ICD Detail</h3>
              <div className='card-toolbar'>
                <button
                  type='button'
                  className='btn btn-sm btn-icon btn-active-light-primary me-n5'
                  id='kt_icddetail_close'
                >
                  <KTIcon iconName='cross' className='fs-1' />
                </button>
              </div>
            </div>

            <div className='card card-xl-stretch mb-xl-8'>
              <div className='card-body p-0'>
                <div className='px-9 pt-7 card-rounded h-275px w-100 bg-success'>
                  <div className='d-flex flex-stack'>
                    <span
                      className={`badge badge-light-${
                        icdValues.is_active ? 'success' : 'danger'
                      } fw-bold me-auto px-4 py-3`}
                    >
                      {icdValues.is_active ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                  <div className='d-flex text-center flex-column text-white pt-8'>
                    <span className='fw-semibold fs-7'>ICD Name</span>
                    <span className='fw-bold fs-2x pt-1'>{icdValues.name}</span>
                  </div>
                </div>
                <div
                  className='shadow-xs card-rounded mx-9 mb-9 px-6 py-9 position-relative z-index-1 bg-body'
                  style={{marginTop: '-100px'}}
                >
                  <div className='row g-0'>
                    <div
                      className='col bg-light-warning px-6 py-3 rounded-2 me-7 mb-7'
                      style={{width: '600px'}}
                    >
                      <div className='fs-6 text-gray-700'>Description</div>
                      <div className='fs-4 fw-bold text-gray-800'>{icdValues.description}</div>
                    </div>
                  </div>
                  <div className='row g-0'>
                    <div
                      className='col bg-light-warning px-6 py-3 rounded-2 me-7 mb-7'
                      style={{width: '600px'}}
                    >
                      <div className='fs-6 text-gray-700'>Summary</div>
                      <div className='fs-4 fw-bold text-gray-800'>{icdValues.summary}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='card-footer py-2 d-flex justify-content-end'
                id='kt_facility_footer'
                style={{marginTop: '65px'}}
              >
                <button
                  type='button'
                  className='btn btn-bg-body text-primary mt-2'
                  id='kt_icddetail_close'
                >
                  Back
                  <KTIcon iconName='arrow-right' className='fs-3 text-primary' />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
    // </div>
  )
}

export {IcdDetail}
