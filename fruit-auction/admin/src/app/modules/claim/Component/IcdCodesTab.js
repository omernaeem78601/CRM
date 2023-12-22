import { useContext, useState, useEffect } from 'react'
import {useSelector} from 'react-redux'
import {getICDCodeListReq} from './../__request/ClaimRequest'
import Select from 'react-select'
import { setClaimContext } from '../ClaimContext'

const IcdCodesTab = () => {
  const { setAddClaimData } = useContext(setClaimContext)
  const patientData = useSelector((state) => state.patientReducerComp)
  const chartNotesClaim = useSelector((state) => state.chartNotesClaimReducerComp)
  const icdParse = chartNotesClaim?.icd_codes ? JSON.parse(chartNotesClaim.icd_codes) : [];
  const currentDate = () => {
    const currentDate = new Date().toISOString().split('T')[0]
    return currentDate
  }
  const initialIcdCodes = icdParse.length > 0
  ? icdParse.map((e) => ({ icd: e.icd }))
  : [];

  const initialStates = {
    patient_id: patientData.id,
    icd_codes: initialIcdCodes,
  }
  const [billingData, setBillingData] = useState(initialStates)
  const addDiagnosisEntry = () => {
    getIcdData()
    setBillingData((prevState) => ({
      ...prevState,
      icd_codes: [...prevState.icd_codes, {icd: ''}],
    }))
  }

  const updateDiagnosisEntry = (index, name, value) => {
    getIcdData()
    setBillingData((prevState) => {
      const updatedIcdCodes = [...prevState.icd_codes]
      updatedIcdCodes[index][name] = value
      return {
        ...prevState,
        icd_codes: updatedIcdCodes,
      }
    })
    setAddClaimData((prevClaimData) => ({ ...prevClaimData, icd_codes: billingData.icd_codes }));
  }

  const removeDiagnosisEntry = (index) => {
    getIcdData()
    setBillingData((prevState) => {
      const updatedIcdCodes = [...prevState.icd_codes]
      updatedIcdCodes.splice(index, 1)
      return {
        ...prevState,
        icd_codes: updatedIcdCodes,
      }
    })
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
  useEffect(() => {
    setAddClaimData((prevClaimData) => ({ ...prevClaimData, icd_codes: billingData.icd_codes }));
    setAddClaimData((prevClaimData) => ({ ...prevClaimData, patient_id: billingData.patient_id }));
    getIcdData()
  }, [])
  return (
    <>
      <div className='card card-custom'>
        <div className='card-header d-flex justify-content-between align-items-center mb-5'>
          <div>
            <h3 className='card-title'>Diagnosis Codes</h3>
            <div className='text-muted'>Diagnosis or nature of illness or injury</div>
          </div>
          <div className='d-flex justify-content-between'>
            <button type='button' className='btn btn-info ' onClick={addDiagnosisEntry}>
              Add ICD Row
            </button>
          </div>
        </div>

        <div className='card-body'>
          {billingData.icd_codes.map((entry, index) => {
            return (
              <div className='row mb-5 me-4' key={index}>
                <div className='col-1 fs-2'>{index + 1}</div>
                <div className='col-10'>
                  {groupedIcdData ? (
                    <>
                    {icdParse && icdParse.length > 0? (
                    <select
                      value={entry.icd}
                      onChange={(e) => {
                        updateDiagnosisEntry(index, 'icd', e.target.value)
                      }}
                      className='form-select'
                    >
                      <option value='#'>Search or Select...</option>
                      {groupedIcdData.map((group, groupIndex) => (
                        <optgroup label={group.label} key={groupIndex}>
                          {group.options.map((option, optionIndex) => (
                            <option value={option.value} key={optionIndex}>
                              {option.label}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                    ):(
                    <Select
                       defaultValue={entry.icd}
                       onChange={(selectedOption) => {
                         updateDiagnosisEntry(index, 'icd', selectedOption.value)
                       }}
                       options={groupedIcdData}
                       isSearchable={true}
                       placeholder='Search or Select...'
                     />)}
                    </>
                  ) 
                  
                  : (
                    <Select placeholder='Search or Select...' />
                  )}
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
            )
          })}
        </div>
      </div>
    </>
  )
}

export default IcdCodesTab
