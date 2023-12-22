import { useState, useContext } from 'react'
import { useDispatch } from 'react-redux'
import { setDataContext } from '../../../../utilities/SettingContext'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ERROR_ALERT_ADMIN } from '../../../../utilities/AlertMsgConstant'
import { deleteInsuranceDataReq } from './__request/RequestInsurance'
import { editInsuranceIdAction, showInsuranceIdAction } from '../../../../redux/action'
import DeleteAlert from '../../../../utilities/DeleteAlert'
import { formatDate } from '../../../../utilities/Helper'

const InsuranceList = ({ patientData }) => {
  const { setPatientRefresh, setLoadingForm } = useContext(setDataContext)
  const dispatch = useDispatch()
  const editInsuranceIdDispatch = (insuranceId) => {
    dispatch(editInsuranceIdAction(insuranceId))
    setLoadingForm(true)
  }
  const showInsuranceIdDispatch = (insuranceId) => {
    dispatch(showInsuranceIdAction(insuranceId))
  }

  const [insuranceData] = useState(patientData.insurances)
  const [deleteData, setDeleteData] = useState('')
  const [deleteDataID, setDeleteDataID] = useState('')
  const deleteInsuranceData = (optionID, ID) => {
    setDeleteData(optionID)
    setDeleteDataID(ID)
  }

  const deleteInsurance = async (insuranceId) => {
    try {
      const response = await deleteInsuranceDataReq(insuranceId)
      if (response) {
        toast.success(response.data.message)
        setPatientRefresh(true)
        dispatch(editInsuranceIdAction(null))
        dispatch(showInsuranceIdAction(null))
      }
    } catch (error) {
      toast.error(ERROR_ALERT_ADMIN)
    }
  }
  return (
    <>

      <div className='d-flex flex-wrap flex-stack mb-2'>
        <h3 className='fw-bold my-2'>Current Insurances</h3>
        <div className='d-flex flex-wrap my-2'>
          <button
            id='kt_insurance_toggle'
            onClick={() => editInsuranceIdDispatch(null)}
            className='mx-3 btn btn-primary'
          >
            <i className='ki-duotone ki-plus fs-3'></i>
            Add New Insurance
          </button>
        </div>
      </div>
      <div className='row g-6 g-xl-9'>
        {
          insuranceData.map((insurance, index) => {
            return (
              <div key={index} className='col-xl-4'>
                <div className='card card-xl-stretch mb-5 mb-xl-8'>
                  <div className='card-body p-0'>
                    <div className='px-9 pt-7 card-rounded h-275px w-100 bg-success'>
                      <div className='d-flex flex-stack'>
                        <h3 className='m-0 text-white fw-bold fs-1'>{insurance.payer_name}</h3>
                      </div>

                      <div className='d-flex text-center flex-column text-white pt-5'>
                        <a
                          href='#'
                          onClick={() => showInsuranceIdDispatch(insurance.id)}
                          id='kt_insurancedetail_toggle'
                        >
                          <p className='fw-semibold text-white fs-7'>Subscriber #</p>
                          <p className='fw-bold text-white fs-3 pt-1'> {insurance.subscriber_id}</p>
                        </a>
                      </div>
                    </div>
                    <div
                      className='shadow-xs card-rounded mx-9 mb-9 px-6 py-9 position-relative z-index-1 bg-body'
                      style={{ marginTop: '-140px' }}
                    >
                      <div className='row g-0 mb-7'>
                        <div className='col mx-5'>
                          <div className='fs-7 text-gray-600'>Effective Date</div>
                          <div className='fs-6 fw-bold text-gray-800'>
                            {formatDate(insurance.effective_date)}
                          </div>
                        </div>
                        <div className='col mx-5'>
                          <div className='fs-7 text-gray-600'>Expire Date</div>
                          <div className='fs-6 fw-bold text-gray-800'>
                            {insurance.expiration_date ?? 'No Expiry'}
                          </div>
                        </div>
                      </div>

                      <div className='row g-0 mb-7'>
                        <div className='col mx-5'>
                          <div className='fs-7 text-gray-600'>Insurance Level</div>
                          <div className='fs-6 fw-bold text-gray-800'>{insurance.level}</div>
                        </div>
                        <div className='col mx-5'>
                          <div className='fs-7 text-gray-600'>Insurance Status</div>
                          <div className='fs-6 fw-bold text-gray-800'>
                            {insurance.status ?? 'No Expiry'}
                          </div>
                        </div>
                      </div>

                      <div className='h-4px w-100 bg-light my-4'>
                        <div className='bg-primary rounded h-4px'></div>
                      </div>
                      <div className='symbol-group symbol-hover'>
                        <a
                          href='#'
                          onClick={() => showInsuranceIdDispatch(insurance.id)}
                          className='btn btn-sm btn-info me-2'
                          id='kt_insurancedetail_toggle'
                        >
                          Detail
                        </a>
                        <a
                          href='#'
                          onClick={() => editInsuranceIdDispatch(insurance.id)}
                          className='btn btn-sm btn-success me-2'
                          id='kt_insurance_toggle'
                        >
                          Edit
                        </a>
                        <a
                          data-bs-toggle='modal'
                          data-bs-target='#kt_modal_1'
                          onClick={() => deleteInsuranceData(insurance.payer_name, insurance.id)}
                          className='btn btn-sm btn-danger me-2'
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
        <DeleteAlert
          deleteData={deleteData}
          deleteDataFunction={deleteInsurance}
          deleteDataID={deleteDataID}
        />
      </div>
    </>
  )
}

export default InsuranceList
