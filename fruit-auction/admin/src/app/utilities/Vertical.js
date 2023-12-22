import { useContext, useEffect, useRef, useState } from 'react'
import { KTIcon } from '../../_metronic/helpers'
import { getCptBillReq, getICDDataReq, getProviderSearchReq, postBillingDataReq } from '../modules/patients/detail-patient/patient-chart/__request/RequestSuperBill';
import { useSelector } from 'react-redux';
import Select from 'react-select'
import { ErrorMessage } from 'formik';
import { getPatientLocation } from '../modules/patients/__request/RequestPatient';
import { Link, useNavigate } from 'react-router-dom';
import SubmitButton from './SubmitButton';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { setDataContext } from './SettingContext';
import { ERROR_ALERT_ADMIN } from './AlertMsgConstant';
const Vertical = () => {
  const patientViewState = useSelector((state) => state.patientIdShowReducerComp)
  const { setRefresh } = useContext(setDataContext)
  const [err, setErr] = useState(false)
  const [errIdMsg, setErrIdMsg] = useState('')
  const [errorMsg, setErrorMsg] = useState(false)
  const [btnLoading, setBtnLoading] = useState(false)
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (index) => {
    setActiveTab(index);
    console.log(index)
  };

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
  const providerSearchData = async () => {
    try {
      const response = await getProviderSearchReq()
      setProviderData(response.data.data)
    } catch (error) {
      console.error(error)
    }
  }

  const [serviceCode, setServiceCode] = useState([])
  const getserviceCode = async () => {
    try {
      const response = await getCptBillReq()
      setServiceCode(response.data.data)
    } catch (error) {
      console.error(error)
    }
  }

  const [groupedIcdData, setGroupedIcdData] = useState([])

  const getIcdData = async () => {
    try {
      const response = await getICDDataReq()
      const groupedData = {
        icd9: response.data.data['icd-9'],
        icd10: response.data.data['icd-10'],
        icd11: response.data.data['icd-11'],
      }
      setGroupedIcdData(groupedData)
    } catch (error) {
      console.error(error)
    }
  }
  // end option data

  // add bill
  const initialValues = {
    patient_id: patientViewState,
    facility_id: null,
    provider_id: null,
    date_of_service: '',
    visit_type: '',
    service_mode: '',
    status: 'new',
    is_active: true,
    icd_codes: [],
    cpt_codes: [],
  }

  // state for handle the login inputs

  // const [billingData, setBillingData] = useState(initialValues)
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

  const updateDiagnosisEntry = (index, name, selectedValue) => {
    setBillingData((prevState) => {
      const updatedIcdCodes = [...prevState.icd_codes];
      updatedIcdCodes[index][name] = selectedValue;
      return {
        ...prevState,
        icd_codes: updatedIcdCodes,
      };
    });
  };

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
      if (name === 'service_code') {
        updatedCptCodes[index]['service_code'] = value === '' ? null : value
        const cptCods = updatedCptCodes[index]['service_code']
        const selectedServiceCode = serviceCode.find((cpt) => cpt.id === parseInt(value))
        if (selectedServiceCode) {
          updatedCptCodes[index]['modifier1'] = selectedServiceCode.modifier1
          updatedCptCodes[index]['modifier2'] = selectedServiceCode.modifier2
          updatedCptCodes[index]['modifier3'] = selectedServiceCode.modifier3
          updatedCptCodes[index]['modifier4'] = selectedServiceCode.modifier4
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
    setBillingData((prevState) => {
      const updatedCptCodes = [...prevState.cpt_codes]
      updatedCptCodes.splice(index, 1)
      return {
        ...prevState,
        cpt_codes: updatedCptCodes,
      }
    })
  }


  const addBilling = async () => {
    if (!billingData.facility_id || !billingData.provider_id || !billingData.date_of_service) {
      setErrorMsg(true)
      return
    }
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
    const updatedBillingData = {
      ...billingData,
      icd_codes: icdCodesJSON,
      cpt_codes: cptCodesJSON,
    }
    try {
      setBtnLoading(true)
      const response = await postBillingDataReq(updatedBillingData, patientViewState) // Make the API request
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
  const [selectedProvider, setSelectedProvider] = useState(null)
  const addBillingHandle = (e) => {
    const { name, value } = e.target
    setBillingData({ ...billingData, [name]: value })
  }
  useEffect(() => {
    if (selectedProvider) {
      setBillingData({
        ...billingData,
        provider_id: selectedProvider.value,
      })
    }
  }, [selectedProvider])

  useEffect(() => {
    if (patientViewState) {
      getLocationOption()
      providerSearchData()
      getserviceCode()
      getIcdData()
    }
  }, [patientViewState])
  return (
    <>
      <div className=' container'>
        <div className=' row mb-10 me-4'>
          <div className='col-3'>
            <label className='form-label required'>Default Location</label>
            <select className={`form-select ${errorMsg && !billingData.facility_id ? 'border border-danger' : ''
              }`} name='facility_id' onChange={addBillingHandle}>
              <option value='#'>Choose..</option>
              {defaultLocation?.map((facility, index) => (
                <option key={index} value={facility.id}>
                  {facility.name} | {facility.address}
                </option>
              ))}
            </select>
            {errorMsg && !billingData.facility_id && (
              <span className='errorHandle text-danger'>
                Please enter Default Location before submit
              </span>
            )}
          </div>

          <div className='col-3'>
            <label className='form-label required'>Provider</label>
            <Select
              options={providerData?.map((provider, index) => ({
                value: provider.id,
                label: `${provider.npi} | ${provider.full_name} | ${provider.address}`,
              }))}
              value={selectedProvider}
              onChange={(selectedOption) => setSelectedProvider(selectedOption)}
              isSearchable={true}
              placeholder='Search or Select...'
            />
            {errorMsg && !billingData.provider_id && (
              <span className='errorHandle text-danger'>
                Please enter Provider before submit
              </span>
            )}
          </div>

          <div className='col-3'>
            <label className='form-label'>Visit Type</label>
            <select
              className={`form-select `}
              name='visit_type'
              onChange={addBillingHandle}
            >
              <option value='#'>Choose..</option>
              <option value='Cosmatic Visit'>Cosmatic Visit</option>
              <option value='Follow Up Visit'>Follow Up Visit</option>
              <option value='New Patient Visit'>New Patient Visit</option>
            </select>

          </div>
          <div className='col-3'>
            <label className='form-label required'>Date of service</label>
            <input
              type='date'
              name='date_of_service'
              onChange={addBillingHandle}
              className={`form-control ${errorMsg && !billingData.date_of_service ? 'border border-danger' : ''
                }`}
              placeholder='Type Here..'
            />
            {errorMsg && !billingData.date_of_service && (
              <span className='errorHandle text-danger'>
                Please enter Date Of Service before submit
              </span>
            )}
          </div>
          <div className='col-3'>
            <label className='form-label'>Service Mode</label>
            <select
              className={`form-select `}
              name='service_mode'
              onChange={addBillingHandle}
            >
              <option value='#'>Choose..</option>
              <option value='in_person'>In Person</option>
              <option value='phone_call'>Phone Call</option>
              <option value='video Consult'>Video Consult</option>
            </select>

          </div>
        </div>
      </div>
      <div
        className='stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid'
        id='kt_create_account_stepper'
      >
        <div className='card d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px w-xxl-400px me-9'>
          <div className='card-body px-6 px-lg-10 px-xxl-15 py-20'>
            <div className='stepper-nav'>

              <div className={`stepper-item cursor-pointer ${activeTab === 1 ? 'current' : ''}`} data-kt-stepper-element='nav' onClick={() => handleTabClick(1)}>
                <div className='stepper-wrapper'>
                  <div className={`stepper-icon w-40px h-40px ${activeTab === 1 ? 'highlighted' : ''}`}>
                    <i className='stepper-check fas fa-check'></i>
                    <span className='stepper-number'>1</span>
                  </div>
                  <div className='stepper-label'>
                    <h3 className='stepper-title' onClick={() => handleTabClick(1)}>Diagnosis</h3>
                    <div className='stepper-desc fw-semibold' >Setup Your Account Details</div>
                  </div>
                </div>
                <div className='stepper-line h-40px'></div>
              </div>

              <div className={`stepper-item cursor-pointer ${activeTab === 2 ? 'current' : ''}`} data-kt-stepper-element='nav' onClick={() => handleTabClick(2)}>
                <div className='stepper-wrapper'>
                  <div className={`stepper-icon w-40px h-40px ${activeTab === 2 ? 'highlighted' : ''}`}>
                    <i className='stepper-check fas fa-check'></i>
                    <span className='stepper-number' onClick={() => handleTabClick(2)}>2</span>
                  </div>
                  <div className='stepper-label'>
                    <h3 className='stepper-title' >Services</h3>
                    <div className='stepper-desc fw-semibold' >Setup Your Account Settings</div>
                  </div>
                </div>
                <div className='stepper-line h-40px'></div>
              </div>
            </div>
          </div>
        </div>
        <div className="card d-flex flex-row-fluid  bg-body rounded mt-0">
          {activeTab === 1 && (
            <div className='container my-5 pt-5'>
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
                  <div className='col-6'>
                    <label className='form-label required'>Diagnosis</label>
                  </div>
                  <div className='col-5'>
                    <label className='form-label'>Notes</label>
                  </div>
                </div>
              )}

              {billingData.icd_codes.map((entry, index) => (
                <div className='row mb-10 me-4' key={index}>
                  <div className='col-6'>
                    {groupedIcdData.icd9 && groupedIcdData.icd10 && groupedIcdData.icd11 ? (
                      <Select
                        options={[
                          {
                            label: 'ICD-9',
                            options: groupedIcdData.icd9?.map((icd) => ({
                              value: icd.name,
                              label: `${icd.name} | ${icd.description}`,
                            })),
                          },
                          {
                            label: 'ICD-10',
                            options: groupedIcdData.icd10?.map((icd) => ({
                              value: icd.name,
                              label: `${icd.name} | ${icd.description}`,
                            })),
                          },
                          {
                            label: 'ICD-11',
                            options: groupedIcdData.icd11?.map((icd) => ({
                              value: icd.name,
                              label: `${icd.name} | ${icd.description}`,
                            })),
                          },
                        ]}
                        defaultValue={entry.icd}
                        onChange={(selectedOption) => {
                          updateDiagnosisEntry(index, 'icd', selectedOption.value);
                        }}
                        isSearchable={true}
                        placeholder='Search or Select...'
                      />) : (
                      <Select
                        placeholder='Search or Select...'
                      />
                    )}
                    {ErrorMessage && !billingData.facility_id && (
                      <span className='errorHandle text-danger'>
                        {/* Please enter Default Location before submit */}
                      </span>)}
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
            </div>


          )}
          {activeTab === 2 && (
            <div
              id='kt_tab_pane_2'
              role='tabpanel'
              className={`tab-pane fade ${activeTab === 2 ? 'show active' : ''}`}
            >
              <div className='container my-5 pt-5'>
                <div className='d-flex justify-content-between align-items-center mb-5'>
                  <h3>Services</h3>
                  <div className='d-flex justify-content-between'>
                    <button type='button' className='btn btn-primary' onClick={addCptCodeEntry}>
                      Add CPT
                    </button>
                    <Link to={`/organization/cpt-codes`} className='btn btn-primary mx-5'>
                      CPT Codes
                    </Link>
                  </div>
                </div>



                {billingData.cpt_codes.length === 0 ? (
                  <div></div>
                ) : (
                  <div className='row mb-10 me-4'>
                    <div className='col-3'>
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
                    <div className='col-2'>
                      <label className='form-label '>Service Duration</label>
                    </div>
                  </div>
                )}

                {billingData.cpt_codes.map((entry, index) => (
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
            </div>
          )}
        </div>


      </div>

      <div className='d-flex justify-content-end mt-3'>
        <SubmitButton
          type='submit'
          class_name={`btn btn-primary ${activeTab === 1 ? 'd-none' : ''}`}
          title='Save'
          callback_event={addBilling}
          btnLoading={btnLoading}
        />
      </div>
    </>




  )
}

export { Vertical }
