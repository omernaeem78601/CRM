import { useContext } from 'react'
import { KTIcon } from '../../../../../_metronic/helpers'
import { useSelector } from 'react-redux'
import { setDataContext } from '../../../../utilities/SettingContext'
import { LoadingBar } from '../../../../utilities/LoadingBar'
import AddUpdateInsuranceForm from './component/AddUpdateInsuranceForm'

const AddInsuranceDrawer = () => {

  const insuranceEditState = useSelector((state) => state.insuranceIdEditReducer)
  const { patientRefresh } = useContext(setDataContext)

  return (
    <div
      id='kt_insurance'
      className='bg-body'
      data-kt-drawer='true'
      data-kt-drawer-name='insurance'
      data-kt-drawer-activate='true'
      data-kt-drawer-overlay='true'
      data-kt-drawer-direction='end'
      data-kt-drawer-toggle='#kt_insurance_toggle'
      data-kt-drawer-close='#kt_insurance_close'
      style={{ width: '1100px' }}
    >
      <div className='card shadow-none rounded-0'>
        <div className='card-header' id='kt_insurance_header'>
          <h3 className='card-title fw-bolder text-dark'>
            {!insuranceEditState ? 'Add New insurance' : 'Update Insurance'}
          </h3>
          <div className='card-toolbar'>
            <button
              type='button'
              className='btn btn-sm btn-icon btn-active-light-primary me-n5'
              id='kt_insurance_close'
            >
              <KTIcon iconName='cross' className='fs-1' />
            </button>
          </div>
        </div>

        <div className='card-body position-relative' id='kt_facility_body'>
          <div
            id='kt_insurance_scroll'
            className='position-relative scroll-y me-n5 pe-5'
            data-kt-scroll='true'
            data-kt-scroll-wrappers='#kt_insurance_body'
            data-kt-scroll-offset='5px'
          >
            {patientRefresh ? (<LoadingBar />) : (<AddUpdateInsuranceForm />)}

          </div>
        </div>

      </div>
    </div>
  )
}

export { AddInsuranceDrawer }
