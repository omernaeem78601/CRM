import { useContext, useEffect, useState } from 'react'
import { getPatientLocation } from '../../patients/__request/RequestPatient'
import { useDispatch, useSelector } from 'react-redux'
import { facilityClaimDataAction, insuranceDataAction } from '../../../redux/action'
import { setClaimContext } from '../ClaimContext'
import { setDataContext } from '../../../utilities/SettingContext'

const FacilityTab = () => {
    const { setAddClaimData } = useContext(setClaimContext)
    const {setRefresh} = useContext(setDataContext)
    const dispatch = useDispatch()
    const chartNotesClaim = useSelector((state) => state.chartNotesClaimReducerComp)
    const facilityId = chartNotesClaim ? chartNotesClaim.facility_id : null;
    const [facilities, setFacility] = useState(facilityId) 
    const [defaultLocation, setDefaultLocation] = useState([])
    const patientData = useSelector((state) => state.patientReducerComp)
    const [insurancess, setInsurance] = useState((patientData && patientData.insurances.length> 0) ? patientData.insurances[0].subscriber_id : '')
    const facilityClaimData = useSelector((state) => state.facilityClaimReducerComp)
    const insuranceData = useSelector((state) => state.insuranceReducerComp)
    // insurance   
    const insuranceDataDispatch = () => { 
        const selectedInsurance = (patientData && patientData.insurances)? patientData.insurances.find(
            (insurance) => insurance.subscriber_id === insurancess
        ) : ''
        if (selectedInsurance) {
            dispatch(insuranceDataAction(selectedInsurance))
        }
    }
    // facility   
    const facilityClaimDispatch = () => { 
        const selectedFacility = defaultLocation?.find(
            (facilityClaim) => facilityClaim.id === parseInt(facilities)
        )
        if (selectedFacility) {
            dispatch(facilityClaimDataAction(selectedFacility))
        }
        return selectedFacility
    }
    const facilityDispatchData = facilityClaimDispatch()
    console.log("facilityDispatchData: ",facilityDispatchData);

    const getLocationOption = async () => {
        try {
            const response = await getPatientLocation()
            setDefaultLocation(response.data.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        setAddClaimData((prevClaimData) => ({ ...prevClaimData, date_of_service: (chartNotesClaim && chartNotesClaim.date_of_service)? chartNotesClaim.date_of_service: '' }));
        if (facilities) {
            facilityClaimDispatch()
            setAddClaimData((prevClaimData) => ({ ...prevClaimData, facility: facilities }));
        }
    }, [facilityId,facilities]) 
     
    useEffect(() => { 
        if (insurancess) {
            insuranceDataDispatch()
            setAddClaimData((prevClaimData) => ({ ...prevClaimData, insurance: insuranceData }));
        } 
    }, [insurancess])

    useEffect(() => {
        getLocationOption() 
    }, [])
 

    return (
        <>
            <div>
                <div className='row mb-5'>
                    <div className='col-xl-3'>
                        <label className='form-label required'>Date of service</label>
                        <input
                            type='date'
                            formate= 'dd-mm-yyyy'
                            name='date_of_service'
                            className='form-control'
                            defaultValue={new Date().toISOString().split('T')[0]}
                            placeholder='Type Here..'
                            value={(chartNotesClaim && chartNotesClaim.date_of_service)? chartNotesClaim.date_of_service: ''}
                        />
                    </div>
                </div>

                <div className='row'>
                   
                    <div className='col-xl-6'>
                        <div className='card card-custom'>
                            <div className='card-header'>
                                <h3 className='card-title col-xl-4'>Insurance Detail</h3>
                                <div className='card-toolbar col-xl-7'>
                                    <select
                                        aria-label='Select example'
                                        name='insurance'
                                        onChange={(e) => setInsurance(e.target.value)}
                                        value={(patientData && patientData.insurances.length> 0) ?  insurancess: 'There is No Insurance'}
                                        className={`form-select`}
                                        onClick={()=> setRefresh(true)}
                                    >
                                        {(patientData && patientData.insurances.length> 0)?
                                            (patientData.insurances?.map((insurance, index) => (
                                                <option key={index} value={insurance.subscriber_id}>
                                                    {insurance.subscriber_id}
                                                </option>
                                            )) ): (<option disabled value='#'>There is no Insurance</option>) }
                                    </select>
                                </div>
                            </div> 
                            <div className='card-body'>

                                <div className="row g-0 mb-7">
                                    <div className="col mr-8">
                                        <div className="fs-7 text-muted fw-semibold">ID Number</div>
                                        <div className="d-flex align-items-center">
                                            <div className="fs-6 fw-bold">{`${insuranceData == null ? '' : insuranceData.subscriber_id}`}</div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="fs-7 text-muted fw-semibold">Payer Name</div>
                                        <div className="fs-6 fw-bold">{`${insuranceData == null ? '' : insuranceData.payer_name}`}</div>
                                    </div>
                                    <div className="col">
                                        <div className="fs-7 text-muted fw-semibold">Date of Birth</div>
                                        <div className="fs-6 fw-bold">{patientData? patientData.dob: ''}</div>
                                    </div>
                                </div>

                                <div className="row g-0 mb-7">
                                    <div className="col mr-8">
                                        <div className="fs-7 text-muted fw-semibold">Insurance Address</div>
                                        <div className="d-flex align-items-center">
                                            <div className="fs-6 fw-bold">{patientData? patientData.street : ''} {patientData? patientData.street2: ''}</div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="fs-7 text-muted fw-semibold">City</div>
                                        <div className="fs-6 fw-bold">{patientData? patientData.city: ''}</div>
                                    </div>
                                    <div className="col">
                                        <div className="fs-7 text-muted fw-semibold"> TELEPHONE</div>
                                        <div className="fs-6 fw-bold">{patientData? patientData.wphone: ''}</div>
                                    </div>
                                </div>

                                <div className="row g-0 mb-7">
                                    <div className="col mr-8">
                                        <div className="fs-7 text-muted fw-semibold">STATE</div>
                                        <div className="d-flex align-items-center">
                                            <div className="fs-6 fw-bold">{patientData? patientData.state: ''}</div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="fs-7 text-muted fw-semibold"> INSURANCE PLAN NAME</div>
                                        <div className="fs-6 fw-bold"> {`${insuranceData == null ? '' : insuranceData.plan_name}`}</div>
                                    </div>
                                    <div className="col">
                                        <div className="fs-7 text-muted fw-semibold"> {' '}
                                            PATIENT RELATIONSHIP TO INSURED</div>
                                        <div className="fs-6 fw-bold"> {`${insuranceData == null ? '' : insuranceData.subscriber_type}`} </div>
                                    </div>
                                </div>

                                <div className="row g-0 mb-7">
                                    <div className="col mr-8">
                                        <div className="fs-7 text-muted fw-semibold">SEX</div>
                                        <div className="d-flex align-items-center">
                                            <div className="fs-6 fw-bold">{patientData? patientData.gender: ''}</div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="fs-7 text-muted fw-semibold"> ZIP CODE</div>
                                        <div className="fs-6 fw-bold"> {patientData? patientData.zip_code: ''}</div>
                                    </div>
                                    <div className="col">
                                        <div className="fs-7 text-muted fw-semibold"> </div>
                                        <div className="fs-6 fw-bold"> </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                     <div className='col-xl-6'>
                        <div className='card card-custom'>
                            <div className='card-header'>
                                <h3 className='card-title col-xl-4'>Facility Location</h3>
                                <div className='card-toolbar col-xl-7'>
                                    <select
                                        aria-label='Select example'
                                        name='facility'
                                        onChange={(e) => setFacility(e.target.value)}
                                        className={`form-select`}
                                        value={facilities}
                                        onClick={getLocationOption}
                                    >
                                        <option value='#'>choose</option>
                                        {defaultLocation &&
                                            defaultLocation?.map((facility, index) => (
                                                <option key={index} value={facility.id}>
                                                    {facility.name} | {facility.address}
                                                </option>
                                            ))}
                                    </select>
                                </div>
                            </div>

                            <div className='card-body'>
                                <div className="row g-0 mb-7">
                                    <div className="col mr-8">
                                        <div className="fs-7 text-muted fw-semibold">NAME</div>
                                        <div className="d-flex align-items-center">
                                            <div className="fs-6 fw-bold">{`${facilityDispatchData ? facilityDispatchData.name : ''}`}</div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="fs-7 text-muted fw-semibold">NPI</div>
                                        <div className="fs-6 fw-bold">{`${facilityDispatchData ? facilityDispatchData.npi: ''}`}</div>
                                    </div>
                                </div>

                                <div className="row g-0 mb-7">
                                    <div className="col">
                                        <div className="fs-7 text-muted fw-semibold">EMAIL</div>
                                        <div className="fs-6 fw-bold"> {`${facilityDispatchData? facilityDispatchData.email: ''}`}</div>
                                    </div>
                                    <div className="col">
                                        <div className="fs-7 text-muted fw-semibold">PHONE</div>
                                        <div className="fs-6 fw-bold"> {`${facilityDispatchData ? facilityDispatchData.phone: ''}`}</div>
                                    </div>
                                </div>

                                <div className="row g-0 mb-7">
                                    <div className="col">
                                        <div className="fs-7 text-muted fw-semibold">FACILITY ID</div>
                                        <div className="fs-6 fw-bold"> {`${facilityDispatchData ? facilityDispatchData.facility_id: ''}`}</div>
                                    </div>
                                    <div className="col">
                                        <div className="fs-7 text-muted fw-semibold">ADDRESS</div>
                                        <div className="fs-6 fw-bold">{`${facilityDispatchData ?  ( `${facilityDispatchData.address_line_1}, ${facilityDispatchData.city}, ${facilityDispatchData.state}` ) :  ''
                                        
                                    }`}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default FacilityTab
