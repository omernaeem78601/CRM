import React, { useContext, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setDataContext } from '../../../../utilities/SettingContext'
import { getPatientLocation } from '../../__request/RequestPatient'
import {


  getCptCodeListReq,
  getICDCodeListReq,
  showChartNoteDataReq,
  updateChartNoteReq,
  getReferingProviderReq,
  getRenderingProviderReq

} from './__request/ChartNoteRequest'
import { Link, useNavigate } from 'react-router-dom'
import { ERROR_ALERT_ADMIN } from '../../../../utilities/AlertMsgConstant'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { LoadingBar } from '../../../../utilities/LoadingBar'
import { editBillingIdAction, showBillingIdAction } from '../../../../redux/action'
import SubmitButton from '../../../../utilities/SubmitButton'

const UpdateChartNotes = () => {
  const dispatch = useDispatch()
  const showBillingIdDispatch = (billingId) => {
    dispatch(showBillingIdAction(billingId))
  }
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const handleContinueClick = () => {
    setActiveTab(2)
  }
  const handleBackClick = () => {
    setActiveTab(1)
  }
  const billingEditState = useSelector((state) => state.billingIdEditReducer)
  const patientViewState = useSelector((state) => state.patientIdShowReducerComp)
  const { setRefresh } = useContext(setDataContext)

  // default location get
  const [defaultLocation, setDefaultLocation] = useState([])
  const getLocationOption = async () => {
    try {
      const response = await getPatientLocation()
      setDefaultLocation(response.data.data)
    } catch (error) {
      console.error(error)
    }
  }
  // cpt code get
  const [serviceCode, setServiceCode] = useState([])
  const getserviceCode = async () => {
    try {
      const response = await getCptCodeListReq()
      setServiceCode(response.data.data)
    } catch (error) {
      console.error(error)
    }
  }
  // provider_id get
  const [providerData, setProviderData] = useState([])
  const providerSearchData = async () => {
    try {
      const response = await getReferingProviderReq()
      setProviderData(response.data.data)
    } catch (error) {
      console.error(error)
    }
  }

  const [providerRenderingData, setProviderRenderingData] = useState([])
  const providerRenderingSearchData = async () => {
    try {
      const response = await getRenderingProviderReq()
      setProviderRenderingData(response.data.data)
    } catch (error) {
      console.error(error)
    }
  }
  const [icdData, setIcdData] = useState([])
  const getIcdData = async () => {
    try {
      const response = await getICDCodeListReq()
      setIcdData({
        icd9: response.data.data['icd-9'],
        icd10: response.data.data['icd-10'],
        icd11: response.data.data['icd-11'],
      })
    } catch (error) {
      console.error(error)
    }
  }
  // end option data


  // initial values
  const initialValues = {
    patient_id: patientViewState,
    facility_id: 1,
    provider_id: 1,
    rendering_provider_id: '',
    referring_provider_id: '',
    date_of_service: '',
    visit_type: '',
    service_mode: '',
    status: '',
    is_active: true,
    icd_codes: [],
    cpt_codes: [],
  }


  const [billingData, setBillingData] = useState({
    ...initialValues,
    icd_codes: [],
    cpt_codes: [],
  })
  // add icd code fields
  const addDiagnosisEntry = () => {
    setBillingData((prevState) => ({
      ...prevState,
      icd_codes: [...prevState.icd_codes, { icd: '', icd_notes: '' }],
    }))
  }
  const updateDiagnosisEntry = (index, name, value) => {
    setBillingData((prevState) => {
      const updatedIcdCodes = [...prevState.icd_codes]
      updatedIcdCodes[index][name] = value
      return {
        ...prevState,
        icd_codes: updatedIcdCodes,
      }
    })
  }
  const removeDiagnosisEntry = (index) => {
    setBillingData((prevState) => {
      const updatedIcdCodes = [...prevState.icd_codes]
      updatedIcdCodes.splice(index, 1)
      return {
        ...prevState,
        icd_codes: updatedIcdCodes,
      }
    })
  }
  // end icd code fields

  // add cpt codes fields

  const addCptCodeEntry = () => {
    setBillingData((prevState) => ({
      ...prevState,
      cpt_codes: [
        ...prevState.cpt_codes,
        {
          service_code: '',
          modifier1: '',
          modifier2: '',
          modifier3: '',
          modifier4: '',
          quantity: '',
          service_duration: '',
        },
      ],
    }))
  }
  const updateCptCodeEntry = (index, name, value) => {
    setBillingData((prevState) => {
      const updatedCptCodes = [...prevState.cpt_codes]
      updatedCptCodes[index][name] = value
      return {
        ...prevState,
        cpt_codes: updatedCptCodes,
      }
    })
  }
  const removeCptCodeEntry = (index) => {
    setBillingData((prevState) => {
      const updatedCptCodes = [...prevState.cpt_codes]
      updatedCptCodes.splice(index, 1)
      return {
        ...prevState,
        cpt_codes: updatedCptCodes,
      }
    })
  }

  // end cpt codes fields

  const addBillingHandle = (e) => {
    const { name, value } = e.target
    setBillingData({ ...billingData, [name]: value })
  }
  const [billingLoading, setBillingLoading] = useState(true)

  const billingSingleData = async () => {
    try {
      setBillingLoading(true)
      const response = await showChartNoteDataReq(patientViewState, billingEditState)
      const billingDataFromAPI = response.data.data
      const icdCodes = JSON.parse(billingDataFromAPI.icd_codes)
      const cptCodes = JSON.parse(billingDataFromAPI.cpt_codes)

      setBillingData({
        patient_id: patientViewState,
        facility_id: billingDataFromAPI.facility_id,
        provider_id: billingDataFromAPI.provider_id,
        rendering_provider_id: billingDataFromAPI.rendering_provider_id,
        referring_provider_id: billingDataFromAPI.referring_provider_id,
        date_of_service: billingDataFromAPI.date_of_service,
        visit_type: billingDataFromAPI.visit_type,
        service_mode: billingDataFromAPI.service_mode,
        status: billingDataFromAPI.status,
        is_active: true,
        icd_codes: icdCodes,
        cpt_codes: cptCodes,
      })
      setBillingLoading(false)
    } catch (error) {
      toast.error(ERROR_ALERT_ADMIN)
      setBillingLoading(false)
    }
  }

  const [err, setErr] = useState(false)
  const [errIdMsg, setErrIdMsg] = useState('')
  const [errorMsg, setErrorMsg] = useState(false)
  const [btnLoading, setBtnLoading] = useState(false)
  const navigate = useNavigate()

  const updateBilling = async () => {
    // if (!billingData.date_of_service || !billingData.visit_type || !billingData.service_mode) {
    //   setErrorMsg(true)
    //   return
    // }
    if (billingData.icd_codes.length === 0) {
      toast.error('At least one Diagnosis must be added.')
      return
    }
    if (billingData.cpt_codes.length === 0) {
      toast.error('At least one Service must be added.')
      return
    }
    const icdCodesJSON = JSON.stringify(billingData.icd_codes)
    const cptCodesJSON = JSON.stringify(billingData.cpt_codes)

    // Add the JSON strings to the billingData object
    const updatedBillingData = {
      ...billingData,
      icd_codes: icdCodesJSON,
      cpt_codes: cptCodesJSON,
    }
    try {
      setBtnLoading(true)
      const response = await updateChartNoteReq(
        patientViewState,
        billingEditState,
        updatedBillingData
      )
      navigate('/patient/detail/chart-notes')
      setRefresh(true)
      setErr(false)
      toast.success(response.data.message)
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setErrIdMsg(error.response.data.data)
        setErr(true)
        toast.error('There is an issue!')
        setBtnLoading(false)
      } else {
        toast.error(ERROR_ALERT_ADMIN)
        setBtnLoading(false)
      }
    }
  }
  useEffect(() => {
    if (patientViewState || billingEditState) {
      billingSingleData()
      getLocationOption()
      providerSearchData()
      providerRenderingSearchData()
      getserviceCode()
      getIcdData()
    }
  }, [billingEditState])
  return (
    <>
      <div className='d-flex justify-content-between align-items-center mb-5'>
        <h3>Edit Chart Notes</h3>
        <Link
          to='/patient/detail/chart-notes/detail'
          onClick={() => showBillingIdDispatch(billingEditState)}
          className='btn btn-sm btn-info me-2'
        >
          <i className='bi bi-eye-fill fs-4 px-0'> </i> Detail

        </Link>
      </div>
      {billingLoading ? (
        <LoadingBar />
      ) : (
        <div className='card p-5'>
          <form onSubmit={(e) => {
            e.preventDefault()
          }}
          >
            <div className=' row mb-10 me-4'>
              <div className='col-3'>
                <label className='form-label'>Default Location</label>
                <select
                  className={`form-select`}
                  name='facility_id'
                  value={billingData.facility_id}
                  onChange={addBillingHandle}
                >
                  <option value='#'>Choose..</option>
                  {defaultLocation?.map((facility, index) => (
                    <option key={index} value={facility.id}>
                      {facility.name} | {facility.address}
                    </option>
                  ))}
                </select>
              </div>
              <div className='col-3'>
                <label className='form-label'>Rendering Provider</label>
                <select
                  className={`form-select`}
                  name='rendering_provider_id'
                  value={billingData.rendering_provider_id}
                  onChange={addBillingHandle}
                >
                  <option value='#'>Choose..</option>
                  {providerRenderingData?.map((provider, index) => (
                    <option key={index} value={provider.id}>
                      {provider.npi} | {provider.full_name} | {provider.address}
                    </option>
                  ))}
                </select>
              </div>
              <div className='col-3'>
                <label className='form-label'>Refering Provider</label>
                <select
                  className={`form-select`}
                  name='referring_provider_id'
                  value={billingData.referring_provider_id}
                  onChange={addBillingHandle}
                >
                  <option value='#'>Choose..</option>
                  {providerData?.map((provider, index) => (
                    <option key={index} value={provider.id}>
                      {provider.npi} | {provider.full_name} | {provider.address}
                    </option>
                  ))}
                </select>
              </div>
              <div className='col'>
                <label className='form-label required'>Date of Service</label>
                <input
                  type='date'
                  name={`date_of_service`}
                  value={billingData.date_of_service}
                  onChange={addBillingHandle}
                  className={`form-control ${errorMsg && !billingData.date_of_service ? 'border border-danger' : ''}`}
                  placeholder='Type Here..'
                />
                {errorMsg && !billingData.date_of_service && <span className="errorHandle text-danger">Please enter Date of Service before submit</span>}
              </div>

            </div>

            <div className='row mb-10 me-4'>

              <div className='col-3'>
                <label className='form-label'>Status</label>
                <select
                  className={`form-select`}
                  name='status'
                  value={billingData.status}
                  onChange={addBillingHandle}
                >
                  <option value='#'>Choose..</option>
                  <option value='new'>New</option>
                  <option value='pending'>Pending</option>
                  <option value='discard'>Discard</option>

                </select>
              </div>
            </div>

            <div
              className='stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid'
              id='kt_create_account_stepper'
            >
              <div className='card d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px w-xxl-400px me-4'>
                <div className='card-body p-12'>
                  <div className='stepper-nav'>

                    <div className={`stepper-item cursor-pointer ${activeTab === 1 ? 'current' : ''}`} data-kt-stepper-element='nav' onClick={() => handleTabClick(1)}>
                      <div className='stepper-wrapper'>
                        <div className={`stepper-icon w-40px h-40px ${activeTab === 1 ? 'highlighted' : ''}`}>
                          <i className='stepper-check fas fa-check'></i>
                          <span className='stepper-number'>1</span>
                        </div>
                        <div className='stepper-label'>
                          <h3 className={activeTab === 1 ? '' : 'stepper-title'} onClick={() => handleTabClick(1)}>Diagnosis Codes</h3>
                          <div className='stepper-desc fw-semibold' >Diagnosis or nature of illness or injury</div>
                        </div>

                      </div>
                      <div className='stepper-line h-40px'></div>
                    </div>

                    <div className={`stepper-item cursor-pointer ${activeTab === 2 ? 'current' : ''}`} data-kt-stepper-element='nav' onClick={() => handleTabClick(2)}>
                      <div className='stepper-wrapper'>
                        <div className={`stepper-icon w-40px h-40px ${activeTab === 2 ? 'highlighted' : ''}`}>
                          <i className='stepper-check fas fa-check'></i>
                          <span className='stepper-number' >2</span>
                        </div>
                        <div className='stepper-label'>
                          <h3 className={activeTab === 2 ? '' : 'stepper-title'} >Procedures Codes</h3>
                          <div className='stepper-desc fw-semibold' >
                            Procedures, services, or supplies, CPT/HCPCS, Modifier
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div className="card d-flex flex-row-fluid rounded p-5">

                {activeTab === 1 && (
                  <>
                    <div className='d-flex justify-content-between'>
                      <h3>Diagnosis</h3>
                      <button type='button' className='btn btn-primary' onClick={addDiagnosisEntry}>
                        Add Diagnosis
                      </button>
                    </div>
                    {billingData.icd_codes.length === 0 ? (
                      <div></div>
                    ) : (
                      <div className='row mb-10 me-4'>
                        <div className='col-5'>
                          <label className='form-label'>Diagnosis</label>
                        </div>
                        <div className='col-5'>
                          <label className='form-label'>Notes</label>
                        </div>
                      </div>
                    )}
                    {Array.isArray(billingData.icd_codes) &&
                      billingData.icd_codes.map((entry, index) => (
                        <div className='row mb-10 me-4' key={index}>
                          <div className='col-6'>
                            <select
                              className={`form-select`}
                              name='icd'
                              onChange={(e) => updateDiagnosisEntry(index, 'icd', e.target.value)}
                              value={entry.icd}
                            >
                              <option value='#'>Choose..</option>
                              {icdData &&
                                icdData.icd9 &&
                                icdData.icd9.map((icd, icdIndex) => (
                                  <option key={icdIndex} value={icd.value}>
                                    {icd.label}
                                  </option>
                                ))}
                              {icdData &&
                                icdData.icd10 &&
                                icdData.icd10.map((icd, icdIndex) => (
                                  <option key={icdIndex} value={icd.value}>
                                    {icd.label}
                                  </option>
                                ))}
                              {icdData &&
                                icdData.icd11 &&
                                icdData.icd11.map((icd, icdIndex) => (
                                  <option key={icdIndex} value={icd.value}>
                                    {icd.label}
                                  </option>
                                ))}
                            </select>
                          </div>
                          <div className='col-5'>
                            <input
                              type='text'
                              name='icd_notes'
                              className={`form-control`}
                              placeholder='Type Here..'
                              onChange={(e) => updateDiagnosisEntry(index, 'icd_notes', e.target.value)}
                              value={entry.icd_notes}
                            />
                          </div>
                          <div className='col-1'>
                            <button
                              type='button'
                              className='btn btn-danger'
                              onClick={() => removeDiagnosisEntry(index)}
                            >
                              <i className='bi bi-trash-fill fs-4 px-0'></i>
                            </button>
                          </div>
                        </div>
                      ))}
                  </>
                )}

                {activeTab === 2 && (
                  <div className=''>
                    <div className='d-flex justify-content-between mb-5'>
                      <h3>Services</h3>
                      <button type='button' className='btn btn-primary' onClick={addCptCodeEntry}>
                        Add Service
                      </button>
                    </div>
                    {billingData.cpt_codes.length === 0 ? (
                      <div></div>
                    ) : (
                      <div className='row mb-10 me-4'>
                        <div className='col-3'>
                          <label className='form-label required'>Service Code</label>
                        </div>
                        <div className='col-1'>
                          <label className='form-label '>M1</label>
                        </div>
                        <div className='col-1'>
                          <label className='form-label '>M2</label>
                        </div>
                        <div className='col-1'>
                          <label className='form-label '>M3</label>
                        </div>
                        <div className='col-1'>
                          <label className='form-label '>M4</label>
                        </div>
                        <div className='col-2'>
                          <label className='form-label '>Unit</label>
                        </div>
                        <div className='col-2'>
                          <label className='form-label '>Service Duration</label>
                        </div>
                      </div>
                    )}

                    {Array.isArray(billingData.cpt_codes) &&
                      billingData.cpt_codes.map((entry, index) => (
                        <div className='row mb-10 me-4' key={index}>

                          <div className='col-3'>
                            <select
                              className={`form-select`}
                              name='service_code'
                              onChange={(e) => updateCptCodeEntry(index, 'service_code', e.target.value)}
                              value={entry.service_code}
                            >
                              <option value='#'>Choose..</option>
                              {serviceCode?.map((cpt, cptIndex) => (
                                <option key={cptIndex} value={cpt.id}>
                                  {cpt.code} | {cpt.description}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div className='col-1'>
                            <input
                              type='text'
                              name='modifier1'
                              className={`form-control`}
                              placeholder='Type Here..'
                              onChange={(e) => updateCptCodeEntry(index, 'modifier1', e.target.value)}
                              value={entry.modifier1}
                            />
                          </div>
                          <div className='col-1'>
                            <input
                              type='text'
                              name='modifier2'
                              className={`form-control`}
                              placeholder='Type Here..'
                              onChange={(e) => updateCptCodeEntry(index, 'modifier2', e.target.value)}
                              value={entry.modifier2}
                            />
                          </div>
                          <div className='col-1'>
                            <input
                              type='text'
                              name='modifier3'
                              className={`form-control`}
                              placeholder='Type Here..'
                              onChange={(e) => updateCptCodeEntry(index, 'modifier3', e.target.value)}
                              value={entry.modifier3}
                            />
                          </div>
                          <div className='col-1'>
                            <input
                              type='text'
                              name='modifier4'
                              className={`form-control`}
                              placeholder='Type Here..'
                              onChange={(e) => updateCptCodeEntry(index, 'modifier4', e.target.value)}
                              value={entry.modifier4}
                            />
                          </div>

                          <div className='col-2'>
                            <input
                              type='text'
                              name='quantity'
                              className={`form-control`}
                              placeholder='Type Here..'
                              onChange={(e) => updateCptCodeEntry(index, 'quantity', e.target.value)}
                              value={entry.quantity}
                            />
                          </div>
                          <div className='col-2'>
                            <input
                              type='text'
                              name='service_duration'
                              className={`form-control`}
                              placeholder='Type Here..'
                              onChange={(e) =>
                                updateCptCodeEntry(index, 'service_duration', e.target.value)
                              }
                              value={entry.service_duration}
                            />
                          </div>
                          <div className='col-1'>
                            <button
                              type='button'
                              className='btn btn-danger'
                              onClick={() => removeCptCodeEntry(index)}
                            >
                              <i className='bi bi-trash-fill fs-4 px-0'></i>
                            </button>
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            </div>

            <div className='d-flex justify-content-end mt-5'>
              <button
                className={`btn btn-primary ${activeTab === 2 ? 'd-none' : ''}`}
                onClick={handleContinueClick}
              >
                Procedure Code
              </button>
            </div>

            <div className='d-flex justify-content-between  mt-5'>

              <SubmitButton
                type="submit"
                class_name="btn btn-primary"
                title='Update'
                callback_event={updateBilling}
                btnLoading={btnLoading}
              />
              <button
                className={`btn btn-primary  ${activeTab === 1 ? 'd-none' : ''}`}
                onClick={handleBackClick}
                style={{ marginLeft: '315px' }}
              >
                Diagnose
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}

export { UpdateChartNotes }
