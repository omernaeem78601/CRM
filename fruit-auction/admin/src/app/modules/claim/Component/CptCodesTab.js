import  { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {  getCptCodeListReq } from './../__request/ClaimRequest'
import Select from 'react-select'
import { setClaimContext } from '../ClaimContext'

const CptCodesTab = () => {
    const { setAddClaimData } = useContext(setClaimContext)
    const patientData = useSelector((state) => state.patientReducerComp)
    const chartNotesClaim = useSelector((state) => state.chartNotesClaimReducerComp)
    const cptParse = chartNotesClaim?.cpt_codes ? JSON.parse(chartNotesClaim.cpt_codes) : [];
    const currentDate = () => {
        const currentDate = new Date().toISOString().split('T')[0]
        return currentDate;
    }
    const initialCptCodes = cptParse.length > 0
  ? cptParse.map((e) => ({
    date_of_service_from: currentDate(),
    date_of_service_to: currentDate(),
    service_code: e.service_code,
    pos_code: '',
    fee: '',
    modifier1: e.modifier1,
    modifier2: e.modifier2,
    modifier3: e.modifier3,
    modifier4: e.modifier4,
    quantity: e.quantity,
    time_of_service: '',
    icd1: '',
    icd2: '',
    icd3: '',
    icd4: '',
}))
  : [];
    const initialStates = {
        cpt_codes: initialCptCodes,
    }
    // add cpt codes fields
    const addCptCodeEntry = () => {
        getCptCode()
        setBillingData((prevState) => ({
            ...prevState,
            cpt_codes: [
                ...prevState.cpt_codes,
                {
                    date_of_service_from: currentDate(),
                    date_of_service_to: currentDate(),
                    service_code: '',
                    pos_code: '',
                    fee: '',
                    modifier1: '',
                    modifier2: '',
                    modifier3: '',
                    modifier4: '',
                    quantity: '',
                    time_of_service: '',
                    icd1: '',
                    icd2: '',
                    icd3: '',
                    icd4: '',
                },
            ],
        }))
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


    const [billingData, setBillingData] = useState(initialStates)
    
    const updateCptCodeEntry = (index, name, value) => {
        getCptCode()
        setBillingData((prevState) => {
            const updatedCptCodes = [...prevState.cpt_codes]
            if (name === 'service_code') {
                updatedCptCodes[index]['service_code'] = value === '' ? null : value
                const cptCods = updatedCptCodes[index]['service_code']
                const selectedServiceCode = serviceCode.find((cpt) => cpt.id === parseInt(value))
                if (selectedServiceCode) {
                    updatedCptCodes[index]['pos_code'] = selectedServiceCode.pos_code
                    updatedCptCodes[index]['fee'] = selectedServiceCode.fee
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
        setAddClaimData((prevClaimData) => ({ ...prevClaimData, cpt_codes: billingData.cpt_codes }));
    }

    const removeCptCodeEntry = (index) => {
        getCptCode()
        setBillingData((prevState) => {
            const updatedCptCodes = [...prevState.cpt_codes]
            updatedCptCodes.splice(index, 1)
            return {
                ...prevState,
                cpt_codes: updatedCptCodes,
            }
        })
    }
    useEffect(() => {
        setAddClaimData((prevClaimData) => ({ ...prevClaimData, cpt_codes: billingData.cpt_codes }));
        getCptCode()
    }, [])
    return (
        <>
            <div className='card card-custom'>
                <div className='card-header d-flex justify-content-between align-items-center mb-5'>
                    <div>
                        <h3 className='card-title'>Procedures Codes</h3>
                        <div className="text-muted">Procedures, services, or supplies, CPT/HCPCS, Modifier</div>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <button
                            type='button'
                            className='btn btn-warning'
                            onClick={addCptCodeEntry}
                        >
                            Add CPT Row
                        </button>
                        
                    </div>
                </div>

                <div className="card-body">
                    <table className="table">
                        <tbody>
                            {billingData.cpt_codes.map((entry, index) => (
                                <>
                                    <tr key={index}>
                                        <td>
                                            <input
                                                type="date"
                                                name={`date_of_service_from`}
                                                onChange={(e) =>
                                                    updateCptCodeEntry(
                                                        index,
                                                        'date_of_service_from',
                                                        e.target.value
                                                    )
                                                }
                                                value={entry.date_of_service_from}
                                                className={`form-control`}
                                                style={{ width: '150px' }}
                                                placeholder='Type Here..'
                                            />
                                        </td>
                                        <td >
                                            <input
                                                type='date'
                                                name={`date_of_service_to`}
                                                onChange={(e) =>
                                                    updateCptCodeEntry(
                                                        index,
                                                        'date_of_service_to',
                                                        e.target.value
                                                    )
                                                }
                                                value={entry.date_of_service_to}
                                                className={`form-control`}
                                                placeholder='Type Here..'
                                                style={{ width: '150px' }}
                                            />
                                        </td>
                                        <td colSpan="4"></td>
                                    </tr>
                                    <tr key={index}  >
                                        <td >
                                            {cptParse && cptParse.length > 0?
                                            (<select
                                                value={entry.service_code}
                                                onChange={(e) =>
                                                    updateCptCodeEntry(index, 'service_code', e.target.value)
                                                }
                                                className="form-control"
                                                style={{ width: '300px' }}
                                            >
                                                <option value="">Search or Select...</option>
                                                {serviceCode &&
                                                    serviceCode.map((cpt, index) => (
                                                        <option key={index} value={cpt.id}>
                                                            {`${cpt.code} | ${cpt.description}`}
                                                        </option>
                                                    ))
                                                }
                                            </select>):(
                                                <Select
                                                options={
                                                    serviceCode &&
                                                    serviceCode.map((cpt, index) => ({
                                                        value: cpt.id,
                                                        label: `${cpt.code} | ${cpt.description}`,
                                                    }))
                                                }
                                                defaultValue={entry.service_code}
                                                onChange={(e) =>
                                                    updateCptCodeEntry(index, 'service_code', e.value)
                                                }
                                                isSearchable={true}
                                                placeholder='Search or Select...'
                                                colpan={3}
                                                styles={{ width: '300px' }}

                                            />
                                            )}
                                        </td>
                                        <td>
                                            <input
                                                type='text'
                                                name='pos_code'
                                                className={`form-control`}
                                                placeholder=' CPT...'
                                                onChange={(e) =>
                                                    updateCptCodeEntry(index, 'pos_code', e.target.value)
                                                }
                                                value={entry.pos_code}

                                            />
                                        </td>
                                        <td >
                                            <input
                                                type='text'
                                                name='fee'
                                                className={`form-control`}
                                                placeholder='$..'
                                                onChange={(e) =>
                                                    updateCptCodeEntry(index, 'fee', e.target.value)
                                                }
                                                value={entry.fee}
                                                style={{ width: '60px' }}
                                            />
                                        </td>
                                        <td >
                                            <input
                                                type='text'
                                                name='modifier1'
                                                className={`form-control`}
                                                placeholder='CHARGES...'
                                                onChange={(e) =>
                                                    updateCptCodeEntry(index, 'modifier1', e.target.value)
                                                }
                                                value={entry.modifier1}
                                                style={{ width: '60px' }}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type='text'
                                                name='modifier2'
                                                className={`form-control`}
                                                placeholder='M1..'
                                                onChange={(e) =>
                                                    updateCptCodeEntry(index, 'modifier2', e.target.value)
                                                }
                                                value={entry.modifier2}
                                                style={{ width: '60px' }}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type='text'
                                                name='modifier3'
                                                className={`form-control`}
                                                placeholder='M2..'
                                                onChange={(e) =>
                                                    updateCptCodeEntry(index, 'modifier3', e.target.value)
                                                }
                                                value={entry.modifier3}
                                                style={{ width: '60px' }}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type='text'
                                                name='modifier4'
                                                className={`form-control`}
                                                placeholder='M3..'
                                                onChange={(e) =>
                                                    updateCptCodeEntry(index, 'modifier4', e.target.value)
                                                }
                                                value={entry.modifier4}
                                                style={{ width: '60px' }}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type='text'
                                                name='quantity'
                                                className={`form-control`}
                                                placeholder='M4'
                                                onChange={(e) =>
                                                    updateCptCodeEntry(index, 'quantity', e.target.value)
                                                }
                                                value={entry.quantity}
                                                style={{ width: '60px' }}
                                            />
                                        </td>
                                    </tr>
                                    <tr key={index} className='mx-4' >
                                        <td>
                                            <input
                                                type='time'
                                                name='time_of_service'
                                                className={`form-control`}
                                                placeholder=''
                                                onChange={(e) =>
                                                    updateCptCodeEntry(index, 'time_of_service', e.target.value)
                                                }
                                                value={entry.time_of_service}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type='text'
                                                name='icd1'
                                                className={`form-control`}
                                                placeholder='ICD1'
                                                onChange={(e) =>
                                                    updateCptCodeEntry(index, 'icd1', e.target.value)
                                                }
                                                value={entry.icd1}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type='text'
                                                name='icd2'
                                                className={`form-control`}
                                                placeholder='ICD2'
                                                onChange={(e) =>
                                                    updateCptCodeEntry(index, 'icd2', e.target.value)
                                                }
                                                value={entry.icd2}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type='text'
                                                name='icd3'
                                                className={`form-control`}
                                                placeholder='ICD3'
                                                onChange={(e) =>
                                                    updateCptCodeEntry(index, 'icd3', e.target.value)
                                                }
                                                value={entry.icd3}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type='text'
                                                name='icd4'
                                                className={`form-control`}
                                                placeholder='ICD4'
                                                onChange={(e) =>
                                                    updateCptCodeEntry(index, 'icd4', e.target.value)
                                                }
                                                value={entry.icd4}
                                            />
                                        </td>
                                        <td>
                                            <button
                                                type='button'
                                                className='btn btn-danger p-4'
                                                onClick={() => removeCptCodeEntry(index)}
                                            >
                                                <i className='bi bi-trash-fill fs-4 px-0'></i>
                                            </button>
                                        </td>
                                    </tr>
                                </>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default CptCodesTab
