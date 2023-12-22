import  { useContext, useState } from 'react'
import { useSelector } from 'react-redux'
import { KTIcon, toAbsoluteUrl } from './../../../_metronic/helpers'
import Image from './../../utilities/Image'
import { AgeCalculator, TitleCase } from '../../utilities/Helper'

import ProvidersTab from './Component/ProvidersTab'
import FacilityTab from './Component/FacilityTab'
import IcdCodesTab from './Component/IcdCodesTab'
import CptCodesTab from './Component/CptCodesTab'
import { setClaimContext } from './ClaimContext'
import { LoadingBar } from '../../utilities/LoadingBar'


const MakeClaim = () => { 
  const { addClaimData } = useContext(setClaimContext)
  const patientData = useSelector((state) => state.patientReducerComp)
  const [activeTab, setActiveTab] = useState(1);
  const [renderingLoading, setRenderingLoading] = useState(true)
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const ImageStyle = {
    backgroundPosition: "right top",
    backgroundSize: '15%',
    backgroundImage: `url(${toAbsoluteUrl('/media/svg/shapes/abstract-4.svg')})`
  };
  const addClaimDataFunc = ()=>{
    console.log("addClaimData: ",addClaimData); 
  }
  return (
    <>
    {/* {renderingLoading ? (
        <div style={{ textAlign: 'center' }}>
          <LoadingBar />
        </div>
      ) : (
    
    <>
    </>)} */}
      <div className='card mb-5 mb-xl-5 bgi-no-repeat card-xl-stretch' 
      style={ImageStyle}
      >
        <div className='card-header'>
          <h3 className='card-title'>Patient Insurance Claim</h3>
        </div>
        <div className="card-body d-flex align-items-center py-8" >
          <div className="d-flex h-80px w-80px flex-shrink-0 flex-center position-relative">
            <Image gender={patientData? patientData.gender: ''} />
          </div>
          <div className="ms-6">
            <p className="list-unstyled text-gray-600 fw-bold fs-6 p-0 m-0">
              <span className='text-gray-800 fs-2 fw-bolder me-1'>
                {patientData? patientData.full_name: ''}
              </span>
              <span className='d-flex align-items-center text-gray-600 me-5 mb-2'>
                <KTIcon iconName='profile-circle' className='fs-4 me-1' />
                {TitleCase((patientData && patientData.gender) ? patientData.gender : 'unknown')}
                 ,  
                <AgeCalculator dob={patientData? patientData.dob:''} />
              </span>
            </p>
            <p className="list-unstyled text-gray-600 fw-bold fs-6 p-0 m-0">
              <span className='d-flex align-items-center text-gray-600 me-5 mb-2'>
                <KTIcon iconName='geolocation' className='fs-4 me-1' /> {patientData? patientData.address: ''}
                <KTIcon iconName='phone' className='fs-4 me-1' /> {patientData? patientData.wphone: ''}
              </span>
            </p>
          </div>

        </div>
      </div>

      <div className='stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid' id='kt_create_account_stepper'>
        <div className='card d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px w-xxl-400px me-3'>
          <div className="card-body p-8">
            <div className='stepper-nav'>

              <div className={`stepper-item cursor-pointer ${activeTab === 1 ? 'current' : ''}`} data-kt-stepper-element='nav' onClick={() => handleTabClick(1)}>
                <div className='stepper-wrapper'>
                  <div className={`stepper-icon w-40px h-40px ${activeTab === 1 ? 'highlighted' : ''}`}>
                    <i className='stepper-check fas fa-check'></i>
                    <span className='stepper-number'>1</span>
                  </div>
                  <div className='stepper-label'>
                    <h3 className='stepper-title' onClick={() => handleTabClick(1)}>Provider Information</h3>
                    <div className='stepper-desc fw-semibold' > Name of referring, rendering and billing providers</div>
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
                    <h3 className='stepper-title' >Facility</h3>
                    <div className='stepper-desc fw-semibold' >Setup Your Account Settings</div>
                  </div>
                </div>
                <div className='stepper-line h-40px'></div>
              </div>

              <div className={`stepper-item cursor-pointer ${activeTab === 3 ? 'current' : ''}`} data-kt-stepper-element='nav' onClick={() => handleTabClick(3)}>
                <div className='stepper-wrapper'>
                  <div className={`stepper-icon w-40px h-40px ${activeTab === 3 ? 'highlighted' : ''}`}>
                    <i className='stepper-check fas fa-check'></i>
                    <span className='stepper-number' >3</span>
                  </div>
                  <div className='stepper-label'>
                    <h3 className='stepper-title' onClick={() => handleTabClick(1)}>Diagnosis Codes</h3>
                    <div className='stepper-desc fw-semibold' >Diagnosis or nature of illness or injury</div>
                  </div>
                </div>
                <div className='stepper-line h-40px'></div>
              </div>

              <div className={`stepper-item cursor-pointer ${activeTab === 4 ? 'current' : ''}`} data-kt-stepper-element='nav' onClick={() => handleTabClick(4)}>
                <div className='stepper-wrapper'>
                  <div className={`stepper-icon w-40px h-40px ${activeTab === 4 ? 'highlighted' : ''}`}>
                    <i className='stepper-check fas fa-check'></i>
                    <span className='stepper-number' >4</span>
                  </div>
                  <div className='stepper-label'>
                    <h3 className='stepper-title'>Procedures Codes</h3>
                    <div className='stepper-desc fw-semibold' >
                      Procedures, services, or supplies, CPT/HCPCS, Modifier
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {activeTab === 1 && (
          <div className=" flex-row-fluid rounded">
            <ProvidersTab />
          </div>
        )}
        {activeTab === 2 && (
          <div className=" flex-row-fluid rounded">
            <FacilityTab />
          </div>
        )}
        {activeTab === 3 && (
          <div className=" flex-row-fluid rounded">
            <IcdCodesTab />
          </div>
        )}
        {activeTab === 4 && (
         <>
          <div className=" flex-row-fluid rounded">
            <CptCodesTab />
          </div>
         </>
        )}
      </div>
        <button onClick={addClaimDataFunc} className='btn btn-primary'>Add Claim</button>
    
    
    </>
  )
}

export { MakeClaim }
