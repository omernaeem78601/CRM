import { useContext, useEffect, useState } from 'react'
import { getRenderingProviderReq, getReferingProviderReq, organizationDataReq } from './../__request/ClaimRequest'
import { useDispatch, useSelector } from 'react-redux'
import { referingDataAction, renderingDataAction } from './../../../redux/action'
import { setClaimContext } from '../ClaimContext'
import { LoadingBar } from '../../../utilities/LoadingBar'

const ProvidersTab = () => { 
    const {  setAddClaimData } = useContext(setClaimContext)
    const dispatch = useDispatch() 
    const [organization, setOrganization] = useState([])
    const chartNotesClaim = useSelector((state) => state.chartNotesClaimReducerComp)
    const renderingProviderId = chartNotesClaim ? chartNotesClaim.rendering_provider_id : null;
    const referringProviderId = chartNotesClaim ? chartNotesClaim.referring_provider_id : null;
    const [render, setRender] = useState(renderingProviderId)
    const [refer, setRefer] = useState(referringProviderId)
    const renderingData = useSelector((state) => state.renderingReducerComp) 
    const referingData = useSelector((state) => state.referingReducerComp) 
    const getOrganization = async () => { 
        try { 
            const response = await organizationDataReq() 
            setOrganization(response.data.data)
            setAddClaimData((prevClaimData) => ({ ...prevClaimData, billing_provider_id : response.data.data.id }));
        } catch (error) { 
            console.error(error)
        }
    }
    const [renderingLoading, setRenderingLoading] = useState(true)
    const [rendering, setRendering] = useState([])
    const getRenderingProvider = async () => {
        try {
            const response = await getRenderingProviderReq()
            setRendering(response.data.data)
            setRenderingLoading(false)
        } catch (error) {
            console.error(error)
            setRenderingLoading(false)
        }
    }

    const renderingDispatch = () => {
        const selectedRendering = rendering.find((renderr) => renderr.id === parseInt(render))
        if (selectedRendering) {
            dispatch(renderingDataAction(selectedRendering))
        }
        return selectedRendering
    }
    const renderingDispatchData =renderingDispatch() 
    const [refering, setRefering] = useState([])
    const getReferingProviders = async () => {
        try {
            const response = await getReferingProviderReq()
            setRefering(response.data.data)
        } catch (error) {
            console.error(error)
        }
    }

    const referingDispatch = () => {
        const selectedRefering = refering.find((referr) => referr.id === parseInt(refer))
        if (selectedRefering) {
            dispatch(referingDataAction(selectedRefering))
        }
        return selectedRefering
    }
    const referingDispatchData =referingDispatch() 
    useEffect(() => {
        if(renderingLoading){
            getOrganization()             
            getRenderingProvider()
            getReferingProviders()
        } 
    }, [renderingLoading]) 
    useEffect(() => {   
        if (render) {
            renderingDispatch() 
            setAddClaimData((prevClaimData) => ({ ...prevClaimData, rendering_provider_id: render }));
        }
    }, [render])

    useEffect(() => {
        if (refer) { 
            referingDispatch() 
            setAddClaimData((prevClaimData) => ({ ...prevClaimData, referring_provider_id: refer }));
        }
    }, [refer])

    return (
        <>
        {renderingLoading ? (
        <div style={{ textAlign: 'center' }}>
          <LoadingBar />
        </div>
      ) : (
    
    <>
    
            <div className='row'>
                <div className='col-6'>
                    <div className='card card-custom '>
                        <div className='card-header'>
                            <h3 className='card-title col-xl-5'>Rendering Provider </h3>
                            <div className='card-toolbar col-xl-6'>
                                <select
                                    aria-label='Select example'
                                    name='rendering_provider_id'
                                    onChange={(e) => setRender(e.target.value)}
                                    value={render}
                                    className={`form-select`}
                                    onClick={getRenderingProvider}
                                >
                                    <option value='#'>choose</option>
                                    {rendering &&
                                        rendering?.map((renderr, index) => (
                                            <option key={index} value={renderr.id}>
                                                {renderr.full_name}
                                            </option>
                                        ))}
                                </select>
                            </div>
                        </div>

                        <div className='card-body'>
                            <div className="row g-0 mb-7">
                                <div className="col">
                                    <div className="fs-5 text-muted fw-semibold">Rendering Provider Name</div>
                                    <div className="fs-4 fw-bold">{`${renderingDispatchData ? renderingDispatchData.full_name : ''
                                        }`}</div>
                                </div>
                            </div>
                            <div className="row g-0 mb-7"> 
                                <div className="col">
                                    <div className="fs-5 text-muted fw-semibold">NPI</div>
                                    <div className="fs-4 fw-bold"> {`${renderingDispatchData ? renderingDispatchData.npi : ''
                                        }`}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='card card-custom'>
                        <div className='card-header'>
                            <h3 className='card-title col-xl-5'>Refering Provider </h3>
                            <div className='card-toolbar col-xl-6'>
                                <select
                                    aria-label='Select example'
                                    name='referring_provider_id'
                                    onChange={(e) => setRefer(e.target.value)}
                                    value={refer}
                                    className={`form-select`}
                                    onClick={getReferingProviders}
                                >
                                    <option value='#'>choose</option>
                                    {refering &&
                                        refering?.map((referr, index) => (
                                            <option key={index} value={referr.id}>
                                                {referr.full_name}
                                            </option>
                                        ))}
                                </select>
                            </div>
                        </div>

                        <div className='card-body'>

                            <div className="row g-0 mb-7">
                                <div className="col">
                                    <div className="fs-5 text-muted fw-semibold">Refering Provider Name</div>
                                    <div className="fs-4 fw-bold">{`${referingDispatchData? referingDispatchData.full_name : ''
                                        }`}</div>
                                </div>
                            </div>
                            <div className="row g-0 mb-7">
                                <div className="col">
                                    <div className="fs-5 text-muted fw-semibold">NPI</div>
                                    <div className="fs-4 fw-bold"> {`${referingDispatchData?  referingDispatchData.npi : ''
                                        }`}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-5">
                <div className='col-12'>
                    <div className='card mb-5 mb-xl-10 bgi-no-repeat card-xl-stretch' >
                        <div className='card-header'>
                            <h3 className='card-title'>Billing Provider</h3>
                        </div>
                        <div className="card-body d-flex align-items-center py-8" >
                            <div className="ms-6">
                                <p className="list-unstyled text-gray-600 fw-bold fs-6 p-0 m-0">
                                    <span className='text-gray-800 fs-2 fw-bolder me-1'>
                                        {organization.email}
                                    </span>
                                    <span className='d-flex align-items-center text-gray-600 me-5 mb-2'>
                                        {organization.name}
                                    </span>
                                </p>
                                <p className="list-unstyled text-gray-600 fw-bold fs-6 p-0 m-0">
                                    <span className='d-flex align-items-center text-gray-600 me-5 mb-2'>
                                        {organization.address_line_1}, {organization.city}, {organization.state}
                                    </span>
                                    <span className='d-flex align-items-center text-gray-600 me-5 mb-2'>
                                        {organization.phone}
                                    </span>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            </>)}
        </>
    )
}

export default ProvidersTab
