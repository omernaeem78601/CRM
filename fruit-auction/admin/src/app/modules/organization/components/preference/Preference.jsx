import React, {useEffect, useState, useContext, createContext} from 'react'
import {KTIcon} from '../../../../../_metronic/helpers'
import {Link, useParams} from 'react-router-dom'

const Preference = () => {

  const [preferenceData, setPreferenceData] = useState([]);


  const userData = async() =>{
    let res = await fetch(`https://preview.keenthemes.com/theme-api/api/user/5`)
    res = await res.json();    
    setPreferenceData(res.data)

}
    useEffect(() => {
      userData()
    }, [])



  return (
    <div className='app-container card usertable'>
      <form>
        <div className='mb-10 w-25'>
          <label htmlFor='exampleFormControlInput1' className='required form-label'>
            Name
          </label>
          <input
            type='text'
            className='form-control form-control-solid'
            placeholder='Example input'
          />
        </div>
        <div className='mb-10 w-25'>
          <label htmlFor='exampleFormControlInput1' className='required form-label'>
            Email
          </label>
          <input
            type='text'
            className='form-control form-control-solid'
            placeholder='Example input'
          />
        </div>
        <div className='mb-10 w-25'>
          <label htmlFor='exampleFormControlInput1' className='required form-label'>
          Role
          </label>
          <input
          value={preferenceData.role || ''}
          onChange={(e)=>e.target.value}
            type='text'
            className='form-control form-control-solid'
            placeholder=""
          />
        </div>
        <select className='form-select form-select-solid w-25 mb-10' aria-label='Select example'>
          <option>Default Facility</option>
          <option value='1'>One</option>
          <option value='2'>Two</option>
          <option value='3'>Three</option>
        </select>

        <select className='form-select form-select-solid w-25 mb-10' aria-label='Select example'>
          <option>Default Billing Provider</option>
          <option value='1'>One</option>
          <option value='2'>Two</option>
          <option value='3'>Three</option>
        </select>
        

        <label className='form-check form-switch form-check-custom form-check-solid mb-10'>
          <input className='form-check-input' type='checkbox' value='' />
          <span className='form-check-label'>Without id linking</span>
        </label>
        <Link to="" className="btn btn-primary">Primary</Link>
      </form>
    </div>
  )
}

export {Preference}
