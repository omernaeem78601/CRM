import React, {useContext} from 'react'
import {KTIcon} from '../../../../../_metronic/helpers'
import {setDataContext} from '../../../../utilities/SettingContext'

const InsuranceImage = () => {
  const {imgUrl} = useContext(setDataContext)
  return (
    <div
      id='kt_insuranceimage'
      className='bg-body'
      data-kt-drawer='true'
      data-kt-drawer-name='insuranceimage'
      data-kt-drawer-activate='true'
      data-kt-drawer-overlay='true'
      data-kt-drawer-width="{default:'400px', 'lg': '900px'}"
      data-kt-drawer-direction='end'
      data-kt-drawer-toggle='#kt_insuranceimage_toggle'
      data-kt-drawer-close='#kt_insuranceimage_close'
    >
      <div className='card shadow-none rounded-0 '>
        <div className='card-header' id='kt_insuranceimage_header'>
          <h3 className='card-title fw-bolder text-dark'>Insurance Image</h3>
          <div className='card-toolbar'>
            <button
              type='button'
              className='btn btn-sm btn-icon btn-active-light-primary me-n5'
              id='kt_insuranceimage_close'
            >
              <KTIcon iconName='cross' className='fs-1' />
            </button>
          </div>
        </div>
        <div
          className='card-body position-relative p-0'
          style={{width: '69rem'}}
          id='kt_insuranceimage_body'
        >


          <div className='text-center'>
            <img src={imgUrl} alt='img' />
          </div>


          
        </div>
        <div
          className='card-footer py-2 d-flex justify-content-between'
          id='kt_insuranceimage_footer'
        >
          <div className='mt-4'></div>
          <button
              type='button'
              className='btn btn-bg-body text-primary mt-3'
              id='kt_insuranceimage_close'
            >
              Back
            <KTIcon iconName='arrow-right' className='fs-3 text-primary ' />
            </button>

        </div>
      </div>
    </div>
  )
}

export default InsuranceImage
