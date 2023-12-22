import { useContext, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import Select from 'react-select'
import { ErrorMessage } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import {
  getCptCodeListReq,
  getICDCodeListReq,
  createChartNoteDataReq,
  getRenderingProviderReq,
  getReferingProviderReq,
} from './__request/ChartNoteRequest'
import SubmitButton from '../../../../utilities/SubmitButton'
import { setDataContext } from '../../../../utilities/SettingContext'
import { ERROR_ALERT_ADMIN } from '../../../../utilities/AlertMsgConstant'
import { getPatientLocation } from '../../__request/RequestPatient'

const AddChartNote = () => {
  const patientViewState = useSelector((state) => state.patientIdShowReducerComp)
  const { setRefresh } = useContext(setDataContext)
  const [activeTab, setActiveTab] = useState(1)
  const [err, setErr] = useState(false)
  const [errIdMsg, setErrIdMsg] = useState('')
  const [errorMsg, setErrorMsg] = useState(false)
  const [btnLoading, setBtnLoading] = useState(false)
  const navigate = useNavigate()

  const handleTabClick = (index) => {
    setActiveTab(index)
  }
  const handleContinueClick = () => {
    setActiveTab(2)
  }
  const handleBackClick = () => {
    setActiveTab(1)
  }

  const [defaultLocation, setDefaultLocation] = useState([])
  const getLocationOption = async () => {
    try {
      const response = await getPatientLocation()
      setDefaultLocation(response.data.data)
    } catch (error) {
      console.error(error)
    }
  }

  const [providerData, setProviderData] = useState([])

  const renderingProvider = async () => {
    try {
      const response = await getRenderingProviderReq()
      setProviderData(response.data.data)
    } catch (error) {
      console.error(error)
    }
  }

  const [providerData1, setProviderData1] = useState([])

  const referingProvider = async () => {
    try {
      const response = await getReferingProviderReq()
      setProviderData1(response.data.data)
    } catch (error) {
      console.error(error)
    }
  }

  const [serviceCode, setServiceCode] = useState([])
  const getCptCode = async () => {
    try {
      const response = await getCptCodeListReq()
      setServiceCode(response.data.data)
    } catch (error) {
      console.error(error)
    }
  }

  const [groupedIcdData, setGroupedIcdData] = useState([])

  const getIcdData = async () => {
    try {
      const response = await getICDCodeListReq()
      const options = Object.entries(response.data.data).map(([label, options]) => ({
        label,
        options,
      }))
      setGroupedIcdData(options)
    } catch (error) {
      console.error(error)
    }
  }

  // add chart note
  const initialValues = {
    patient_id: patientViewState,
    facility_id: null,
    provider_id: null,
    rendering_provider_id: '',
    referring_provider_id: '',
    date_of_service: '',
    visit_type: '',
    service_mode: '',
    status: 'new',
    is_active: true,
    icd_codes: [],
    cpt_codes: [],
  }

  const [chartNoteData, setChartNoteData] = useState({
    ...initialValues,
    icd_codes: [],
    cpt_codes: [],
  })

  // add icd code fields
  const addDiagnosisEntry = () => {
    getIcdData()
    setChartNoteData((prevState) => ({
      ...prevState,
      icd_codes: [...prevState.icd_codes, { icd: '', icd_notes: '' }],
    }))
  }

  const updateDiagnosisEntry = (index, name, selectedValue) => {
    getIcdData()
    setChartNoteData((prevState) => {
      const updatedIcdCodes = [...prevState.icd_codes]
      updatedIcdCodes[index][name] = selectedValue
      return {
        ...prevState,
        icd_codes: updatedIcdCodes,
      }
    })
  }

  const removeDiagnosisEntry = (index) => {
    getIcdData()
    setChartNoteData((prevState) => {
      const updatedIcdCodes = [...prevState.icd_codes]
      updatedIcdCodes.splice(index, 1)
      return {
        ...prevState,
        icd_codes: updatedIcdCodes,
      }
    })
  }

  // add cpt codes fields
  const addCptCodeEntry = () => {
    getCptCode()
    setChartNoteData((prevState) => ({
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
    getCptCode()
    setChartNoteData((prevState) => {
      const updatedCptCodes = [...prevState.cpt_codes]
      if (name === 'service_code') {
        updatedCptCodes[index]['service_code'] = value === '' ? null : value
        const cptCods = updatedCptCodes[index]['service_code']
        const selectedServiceCode = serviceCode.find((cpt) => cpt.id === parseInt(value))
        if (selectedServiceCode) {
          updatedCptCodes[index]['modifier1'] = selectedServiceCode.modifier1
          updatedCptCodes[index]['modifier2'] = selectedServiceCode.modifier2
          updatedCptCodes[index]['modifier3'] = selectedServiceCode.modifier3
          updatedCptCodes[index]['modifier4'] = selectedServiceCode.modifier4
          updatedCptCodes[index]['unit'] = 1
        }
      } else {
        updatedCptCodes[index][name] = value
      }
      return {
        ...prevState,
        cpt_codes: updatedCptCodes,
      }
    })
  }

  const removeCptCodeEntry = (index) => {
    getCptCode()
    setChartNoteData((prevState) => {
      const updatedCptCodes = [...prevState.cpt_codes]
      updatedCptCodes.splice(index, 1)
      return {
        ...prevState,
        cpt_codes: updatedCptCodes,
      }
    })
  }

  const createChartNote = async () => {
    if (
      !chartNoteData.facility_id ||
      !chartNoteData.rendering_provider_id ||
      !chartNoteData.referring_provider_id ||
      !chartNoteData.date_of_service
    ) {
      setErrorMsg(true)
      return
    }
    if (chartNoteData.icd_codes.length === 0) {
      toast.error('At least one Diagnosis must be added.')
      return
    }
    if (chartNoteData.cpt_codes.length === 0) {
      toast.error('At least one Service must be added.')
      return
    }
    const icdCodesJSON = JSON.stringify(chartNoteData.icd_codes)
    const cptCodesJSON = JSON.stringify(chartNoteData.cpt_codes)

    const updatedChartNoteData = {
      ...chartNoteData,
      icd_codes: icdCodesJSON,
      cpt_codes: cptCodesJSON,
    }

    try {
      setBtnLoading(true)
      const response = await createChartNoteDataReq(updatedChartNoteData, patientViewState) // Make the API request
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

  const addChartNoteHandle = (e) => {
    const { name, value } = e.target
    setChartNoteData({ ...chartNoteData, [name]: value })
  }

  useEffect(() => {
    if (patientViewState) {
      getLocationOption()
      renderingProvider()
      referingProvider()
      getIcdData()
      getCptCode()
    }
  }, [patientViewState])

  return (
    <div className='card mb-5'>
      <div className='card-body align-items-center py-8'>
        <div className='row mb-10 me-4'>
          <div className='col'>
            <label className='form-label required'>Default Location</label>
            <select
              className={`form-select ${errorMsg && !chartNoteData.facility_id ? 'border border-danger' : ''
                }`}
              name='facility_id'
              onChange={addChartNoteHandle}
              onClick={getLocationOption}
            >
              <option value='#'>Choose..</option>
              {defaultLocation?.map((facility, index) => (
                <option key={index} value={facility.id}>
                  {facility.name} | {facility.address}
                </option>
              ))}
            </select>
            {errorMsg && !chartNoteData.facility_id && (
              <span className='errorHandle text-danger'>
                Please enter Default Location before submit
              </span>
            )}
          </div>

          <div className='col'>
            <label className='form-label required'>Rendering Provider</label>
            <select
              className={`form-select `}
              name='rendering_provider_id'
              onChange={addChartNoteHandle}
              onClick={renderingProvider}
            >
              <option value='#'>Choose..</option>
              {providerData?.map((provider, index) => (
                <option key={index} value={provider.id}>
                  {provider.npi} | {provider.full_name}
                </option>
              ))}
            </select>

            {errorMsg && !chartNoteData.rendering_provider_id && (
              <span className='errorHandle text-danger'>
                Please enter Rendering Provider before submit
              </span>
            )}
          </div>

          <div className='col'>
            <label className='form-label required'>Reffering Provider</label>
            <select
              className={`form-select `}
              name='referring_provider_id'
              onChange={addChartNoteHandle}
              onClick={referingProvider}
            >
              <option value='#'>Choose..</option>
              {providerData1?.map((provider, index) => (
                <option key={index} value={provider.id}>
                  {provider.npi} | {provider.full_name}
                </option>
              ))}
            </select>

            {errorMsg && !chartNoteData.referring_provider_id && (
              <span className='errorHandle text-danger'>Please enter Provider before submit</span>
            )}
          </div>

          <div className='col'>
            <label className='form-label required'>Date of service</label>
            <input
              type='date'
              name='date_of_service'
              onChange={addChartNoteHandle}
              className={`form-control ${errorMsg && !chartNoteData.date_of_service ? 'border border-danger' : ''
                }`}
              placeholder='Type Here..'
            />
            {errorMsg && !chartNoteData.date_of_service && (
              <span className='errorHandle text-danger'>
                Please enter Date Of Service before submit
              </span>
            )}
          </div>
        </div>

        <div
          className='stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid'
          id='kt_create_account_stepper'
        >
          <div className='card d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px w-xxl-400px me-4'>
            <div className='card-body p-12'>
              <div className='stepper-nav'>
                <div
                  className={`stepper-item cursor-pointer ${activeTab === 1 ? 'current' : ''}`}
                  data-kt-stepper-element='nav'
                  onClick={() => handleTabClick(1)}
                >
                  <div className='stepper-wrapper'>
                    <div
                      className={`stepper-icon w-40px h-40px ${activeTab === 1 ? 'highlighted' : ''
                        }`}
                    >
                      <i className='stepper-check fas fa-check'></i>
                      <span className='stepper-number'>1</span>
                    </div>
                    <div className='stepper-label'>
                      <h3
                        className={activeTab === 1 ? '' : 'stepper-title'}
                        onClick={() => handleTabClick(1)}
                      >
                        Diagnosis Codes
                      </h3>
                      <div className='stepper-desc fw-semibold'>
                        Diagnosis or nature of illness or injury
                      </div>
                    </div>
                  </div>
                  <div className='stepper-line h-40px'></div>
                </div>

                <div
                  className={`stepper-item cursor-pointer ${activeTab === 2 ? 'current' : ''}`}
                  data-kt-stepper-element='nav'
                  onClick={() => handleTabClick(2)}
                >
                  <div className='stepper-wrapper'>
                    <div
                      className={`stepper-icon w-40px h-40px ${activeTab === 2 ? 'highlighted' : ''
                        }`}
                    >
                      <i className='stepper-check fas fa-check'></i>
                      <span className='stepper-number'>2</span>
                    </div>
                    <div className='stepper-label'>
                      <h3 className={activeTab === 2 ? '' : 'stepper-title'}>Procedures Codes</h3>
                      <div className='stepper-desc fw-semibold'>
                        Procedures, services, or supplies, CPT/HCPCS, Modifier
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='card d-flex flex-row-fluid rounded p-5'>
            {activeTab === 1 && (
              <>
                <div className='d-flex justify-content-between mb-10'>
                  <div>
                    <h3>Diagnosis Codes</h3>
                    <div class='text-gray-600'>Diagnosis or nature of illness or injury</div>
                  </div>
                  <button type='button' className='btn btn-info' onClick={addDiagnosisEntry}>
                    Add ICD Row
                  </button>
                </div>

                {chartNoteData.icd_codes.length === 0 ? (
                  <div></div>
                ) : (
                  <div className='row mb-2'>
                    <div className='col-6'>
                      <label className='form-label required'>ICD Code</label>
                    </div>
                    <div className='col-5'>
                      <label className='form-label'>Note</label>
                    </div>
                  </div>
                )}

                {chartNoteData.icd_codes.map((entry, index) => (
                  <div className='row mb-2' key={index}>
                    <div className='col-6'>
                      {groupedIcdData ? (
                        <Select
                          defaultValue={entry.icd}
                          onChange={(selectedOption) => {
                            updateDiagnosisEntry(index, 'icd', selectedOption.value)
                          }}
                          options={groupedIcdData}
                          isSearchable={true}
                          placeholder='Search or Select...'
                        />
                      ) : (
                        <Select placeholder='Search or Select...' />
                      )}
                      {ErrorMessage && !chartNoteData.facility_id && (
                        <span className='errorHandle text-danger'>
                          {/* Please enter Default Location before submit */}
                        </span>
                      )}
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
              <>
                <div className='d-flex justify-content-between align-items-center mb-8'>
                  <div>
                    <h3>Procedures Codes</h3>
                    <div class='text-gray-600'>
                      Procedures, services, or supplies, CPT/HCPCS, Modifier
                    </div>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <button type='button' className='btn btn-warning' onClick={addCptCodeEntry}>
                      Add CPT Row
                    </button>
                  </div>
                </div>

                {chartNoteData.cpt_codes.length === 0 ? (
                  <div></div>
                ) : (
                  <div className='row mb-2 me-4'>
                    <div className='col-5'>
                      <label className='form-label required'>CPT Code</label>
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
                  </div>
                )}

                {chartNoteData.cpt_codes.map((entry, index) => (
                  <div className='row mb-4 me-4' key={index}>
                    <div className='col-5'>
                      <select
                        className={`form-select`}
                        name='service_code'
                        onChange={(e) => updateCptCodeEntry(index, 'service_code', e.target.value)}
                        value={entry.service_code}
                      >
                        <option value='#'>Select CPT Code..</option>
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
                        placeholder='M1..'
                        onChange={(e) => updateCptCodeEntry(index, 'modifier1', e.target.value)}
                        value={entry.modifier1}
                      />
                    </div>
                    <div className='col-1'>
                      <input
                        type='text'
                        name='modifier2'
                        className={`form-control`}
                        placeholder='M2..'
                        onChange={(e) => updateCptCodeEntry(index, 'modifier2', e.target.value)}
                        value={entry.modifier2}
                      />
                    </div>
                    <div className='col-1'>
                      <input
                        type='text'
                        name='modifier3'
                        className={`form-control`}
                        placeholder='M3..'
                        onChange={(e) => updateCptCodeEntry(index, 'modifier3', e.target.value)}
                        value={entry.modifier3}
                      />
                    </div>
                    <div className='col-1'>
                      <input
                        type='text'
                        name='modifier4'
                        className={`form-control`}
                        placeholder='M4..'
                        onChange={(e) => updateCptCodeEntry(index, 'modifier4', e.target.value)}
                        value={entry.modifier4}
                      />
                    </div>

                    <div className='col-2'>
                      <input
                        type='number'
                        name='quantity'
                        className={`form-control`}
                        onChange={(e) => updateCptCodeEntry(index, 'quantity', e.target.value)}
                        value={entry.quantity}
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
              </>
            )}
          </div>
        </div>
        <div className='d-flex justify-content-end mt-3'>
          <button
            className={`btn btn-primary ${activeTab === 2 ? 'd-none' : ''}`}
            onClick={handleContinueClick}
          >
            Procedure Code
          </button>
        </div>

        <div className='d-flex justify-content-between mt-3'>
          <button
            className={`btn btn-primary  ${activeTab === 1 ? 'd-none' : ''}`}
            onClick={handleBackClick}
            style={{ marginLeft: '315px' }}
          >
            Diagnose
          </button>

          <SubmitButton
            type='submit'
            class_name={`btn btn-primary ${activeTab === 1 ? 'd-none' : ''}`}
            title='Create Chart Note'
            callback_event={createChartNote}
            btnLoading={btnLoading}
          />
        </div>
      </div>
    </div>
  )
}

export { AddChartNote }
