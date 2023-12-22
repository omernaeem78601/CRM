import React, {useState,useEffect} from 'react'
import axios from 'axios';
import {FeedsWidget3, ListsWidget5} from '../../../../_metronic/partials/widgets'

export function Profile() {

  const [profileData, setProfileData] = useState({
    title: '',
    organization_name: '',
    first_name:'',
    middle_name:'',
    last_name:'',
    address_line_1:'',
    full_name:'',
    address:''

  }); 

  const token = sessionStorage.getItem('token');
  const organizationData = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/get/billing/provider`, config);
      setProfileData(response.data.data)
    } catch (error) {
      console.error('Error:', error);
    }
  }
  useEffect(() => {
    organizationData()
    
  }, [])
  return (
    <div className='row g-5 g-xxl-8'>
      <div className='col-xl-6'>
      
        <div className="card card-custom">
          <div className="card-header">
              <h3 className="card-title">Profile Detail</h3>
              <div className="card-toolbar">
                  <button type="button" className="btn btn-sm btn-light">
                      Action
                  </button>
              </div>
          </div>
          <div className="card-body">

            <div className="row mb-7">
              <label className="col-lg-4 fw-bold text-muted">Full Name</label>
              <div className="col-lg-8">
                <span className="fw-bolder fs-6 text-dark">{profileData.full_name}</span>
              </div>
            </div>

            <div className="row mb-7">
              <label className="col-lg-4 fw-bold text-muted">Address</label>
              <div className="col-lg-8">
                <span className="fw-bolder fs-6 text-dark">{profileData.address}</span>
              </div>
            </div>
            <div className="notice d-flex bg-light-warning rounded border-warning border border-dashed p-6">
              <i className="ki-duotone ki-information-5 fs-2tx text-warning me-4">
              <span className="path1"></span><span className="path2"></span>
              <span className="path3"></span></i>
              <div className="d-flex flex-stack flex-grow-1">
                <div className="fw-bold">
                  <h4 className="text-gray-800 fw-bolder">We need your attention!</h4>
                  <div className="fs-6 text-gray-600">
                    This information is very sensitive, so please be carefull to update this
                  </div>
                </div>
              </div>
            </div>

          </div>
          
        </div>
        
      </div>

      <div className='col-xl-6'>

        <ListsWidget5 className='mb-5 mb-xxl-8' />

      </div>
    </div>
  )
}
