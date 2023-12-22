import { useState, useEffect, useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { KTIcon } from '../../../_metronic/helpers'
import SubmitButton from '../../utilities/SubmitButton'
import { setDataContext } from '../../utilities/SettingContext'
import ApiErrorMessages from '../../utilities/ApiErrorMessages'
import { ERROR_ALERT_ADMIN } from '../../utilities/AlertMsgConstant'
import { getNpiInfoData } from '../organization/components/settings/__request/RequestSettings'

import {
  getOptionsListReq,
  postProviderReq,
  showProviderReq,
  putProviderReq,
} from './__request/RequestProvider'

import InputMask from 'react-input-mask'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { ValidationSchema } from './__request/ValidationSchema'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'

import { LoadingBar } from '../../utilities/LoadingBar'

const AddUpdateProvider = () => {
  const providerState = useSelector((state) => state.providerIdEditReducer)
  const providerType = useSelector((state) => state.providerTypeReducer)
  const { setRefresh, npiInfoNumber, setNpiInfoNumber } = useContext(setDataContext)
  const userProfile = useSelector((state) => state.userReducerComp)

  const [btnLoading, setBtnLoading] = useState(false)

  const [patientOption, setPatientOption] = useState([])

  const [err, setErr] = useState(false)

  const [errIdMsg, setErrIdMsg] = useState('')

  const [providerLoading, setProviderLoading] = useState(false)

  const [varify, setVarify] = useState(false)
  const empty = {
    npi: '',
    title: '',
    first_name: '',
    middle_name: '',
    last_name: '',
    contact_person: '',
    taxonomy: '',
    suffix: '',
    address_line_1: '',
    address_line_2: '',
    city: '',
    state: '',
    zip_code: '',
    phone: '',
    fax: '',
    email: '',
    tax_id: '',
    ssn: '',
    license_id: '',
    specialty: '',
    is_active: false,
    company_id: userProfile.company.id,
    is_varified: varify,
    type: providerType,
  }

  const { values, errors, setValues, touched, handleBlur, handleChange, handleSubmit, resetForm } =
    useFormik({
      initialValues: empty,
      validationSchema: ValidationSchema,
      onSubmit: (values) => {
        if (!providerState) {
          values.type = providerType
          handleSubmitw(values)
        } else {
          updateProviderData(values)
        }
      },
    })

  const navigate = useNavigate()
  const location = useLocation()

  // add function
  const handleSubmitw = async (formValues) => {
    setBtnLoading(true)
    try {
      const response = await postProviderReq(providerType, formValues)
      toast.success(response.data.message)
      navigate(location.pathname)
      setBtnLoading(false)
      setRefresh(true)
      resetForm()
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setErrIdMsg(error.response.data.data)
        setErr(true)
        setBtnLoading(false)
        return false
      } else {
        toast.error(ERROR_ALERT_ADMIN)
      }
    }
  }
  // update function
  const updateProviderData = async (values) => {
    setBtnLoading(true)
    await putProviderReq(values, providerState, providerType)
      .then(function (response) {
        navigate(`/providers/${providerType}`)
        setBtnLoading(false)
        toast.success(response.data.message)
        setErr(false)
        setRefresh(true)
      })
      .catch(function (error) {
        if (error.response && error.response.status === 422) {
          setErrIdMsg(error.response.data.data)
          setErr(true)
          setBtnLoading(false)
          return false
        } else {
          toast.error(ERROR_ALERT_ADMIN)
        }
      })
  }

  const optionsData = async () => {
    try {
      const response = await getOptionsListReq()
      setPatientOption(response.data.data)
    } catch (error) {
      toast.error(ERROR_ALERT_ADMIN)
    }
  }

  // show data single
  const providerDataObj = async () => {
    setProviderLoading(true)
    try {
      const response = await showProviderReq(providerState, providerType)
      setValues(response.data.data)
      const data = response.data.data
      data.is_active = data.is_active === 1
      setProviderLoading(false)
    } catch (error) {
      toast.error(ERROR_ALERT_ADMIN + 'detail edit provider')
      setProviderLoading(false)
    }
  }

  const resetState = () => {
    setErr(false)
    setErrIdMsg('')
  }

  const [errorMessage, setErrorMessage] = useState(null)
  const getNpiInfo = async (e) => {
    setProviderLoading(true)
    e.preventDefault()

    try {
      const response = await getNpiInfoData(npiInfoNumber)
      const data = response.data.data
      if (data.npi_type === 'NPI-1') {
        setVarify(true)
        setValues({
          npi: npiInfoNumber,
          title: data.title,
          first_name: data.first_name,
          middle_name: data.middle_name,
          last_name: data.last_name,
          address_line_1: data.address_1,
          address_line_2: data.address_2,
          city: data.city,
          state: data.state,
          suffix: data.suffix,
          ssn: data.ssn,
          zip_code: data.postal_code,
          contact_person: data.contact_person,
          phone: data.phone_number,
          fax: data.fax_number,
          email: data.email,
          taxonomy: data.taxonomy,
          facility_id: data.facility_id,
          tax_id: data.tax_id,
          phone: data.phone_number,
          specialty: data.specialty,
          email: data.email,
          license_id: data.license_id,
          is_active: false,
          company_id: 1,
          is_varified: varify,
          type: providerType,
        })
        setProviderLoading(false)
      } else if (data.npi_type === 'NPI-2') {
        setErrorMessage('Organizational NPI not supported.')
        console.error('Error: Invalid NPI type')
        setProviderLoading(false)
      }
    } catch (error) {
      console.error('Error:', error)
      setProviderLoading(false)
      setValues(empty)
    }
  }
  useEffect(() => {
    if (providerState && (providerType === 'rendering' || providerType === 'refering')) {
      providerDataObj()
      resetState()
    } else {
      setValues(empty)
      resetState()
      resetForm()
    }
    optionsData()
  }, [providerState])
  return (
    <>
      <div
        id='kt_addprovider'
        className='bg-body'
        data-kt-drawer='true'
        data-kt-drawer-name='addprovider'
        data-kt-drawer-activate='true'
        data-kt-drawer-overlay='true'
        data-kt-drawer-width="{default:'300px', 'lg': '900px'}"
        data-kt-drawer-direction='end'
        data-kt-drawer-toggle='#kt_addprovider_toggle'
        data-kt-drawer-close='#kt_addprovider_close'
      >
        <div className='card shadow-none rounded-0'>
          <div className='card-header' id='kt_provider_header'>
            <h3 className='card-title fw-bolder text-dark'>
              {!providerState ? `Add ${providerType} Provider` : `Update ${providerType} Provider`}
            </h3>
            <div className='card-toolbar'>
              <button
                type='button'
                className='btn btn-sm btn-icon btn-active-light-primary me-n5'
                id='kt_addprovider_close'
              >
                <KTIcon iconName='cross' className='fs-1' />
              </button>
            </div>
          </div>

          <div className='card-body position-relative' id='kt_provider_body'>
            <ApiErrorMessages errorcheck={err} errormsg={errIdMsg} />
            <div
              id='kt_provider_scroll'
              className='position-relative scroll-y me-n5 pe-5'
              data-kt-scroll='true'
              data-kt-scroll-wrappers='#kt_provider_body'
              data-kt-scroll-dependencies=' #kt_provider_footer'
              data-kt-scroll-offset='5px'
            >
              {providerLoading ? (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '300px',
                  }}
                >
                  <LoadingBar />
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className='container'>
                    <div className='row mb-10 me-4'>
                      <div className='col-6 mt-8'>
                        <input
                          name='search_npi'
                          type='text'
                          className='form-control'
                          placeholder='Search NPI ....'
                          autoComplete='off'
                          onChange={(e) => {
                            setNpiInfoNumber(e.target.value)
                            setErrorMessage('')
                          }}
                          value={npiInfoNumber}
                        />
                        {errorMessage && <p className='text-danger'>{errorMessage}</p>}
                      </div>
                      <a href='#' className='btn btn-icon btn-success mt-8' onClick={getNpiInfo}>
                        <i className='bi bi-search fs-4 '></i>
                      </a>
                    </div>

                    <div className='row mb-10 me-4'>
                      <div className='col-3'>
                        <label className='form-label required'>NPI</label>
                        <input
                          id='npi'
                          name='npi'
                          type='text'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.npi || ''}
                          className={`form-control  ${errors.npi && touched.npi ? 'border border-danger' : ''
                            } `}
                        />
                        {errors.npi && touched.npi ? (
                          <div className='text-danger'>{errors.npi}</div>
                        ) : null}
                      </div>
                    </div>

                    <div className='row mb-10 me-4'>
                      <div className='col-2'>
                        <label className='form-label'>Title</label>
                        <select
                          aria-label='Select example'
                          name='title'
                          className='form-select'
                          onChange={handleChange}
                          value={values.title || ''}
                        >
                          <option value='#'>Choose..</option>
                          {patientOption.title &&
                            patientOption.title?.map((title, index) => (
                              <option key={index} value={title.option_id}>
                                {title.option_value}
                              </option>
                            ))}
                        </select>
                      </div>

                      <div className='col-4'>
                        <label className='form-label required'>First Name</label>
                        <input
                          id='first_name'
                          name='first_name'
                          type='text'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.first_name || ''}
                          className={`form-control  ${errors.first_name && touched.first_name ? 'border border-danger' : ''
                            } `}
                        />
                        {errors.first_name && touched.first_name ? (
                          <div className='text-danger'>{errors.first_name}</div>
                        ) : null}
                      </div>
                      <div className='col-2'>
                        <label className='form-label '>Middle Name</label>
                        <input
                          name='middle_name'
                          type='text'
                          className='form-control'
                          onChange={handleChange}
                          value={values.middle_name || ''}
                        />
                      </div>
                      <div className='col-4'>
                        <label className='form-label required'>Last Name</label>
                        <input
                          id='last_name'
                          name='last_name'
                          type='text'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.last_name || ''}
                          className={`form-control  ${errors.last_name && touched.last_name ? 'border border-danger' : ''
                            } `}
                        />
                        {errors.last_name && touched.last_name ? (
                          <div className='text-danger'>{errors.last_name}</div>
                        ) : null}
                      </div>
                    </div>

                    <div className='row mb-10 me-4'>
                      <div className='col-4'>
                        <label className='form-label'>Suffix</label>
                        <select
                          aria-label='Select example'
                          name='suffix'
                          className='form-select'
                          onChange={handleChange}
                          value={values.suffix || ''}
                        >
                          <option value='#'>Choose..</option>
                          {patientOption.suffix &&
                            patientOption.suffix?.map((suffix, index) => (
                              <option key={index} value={suffix.option_id}>
                                {suffix.option_value}
                              </option>
                            ))}
                        </select>
                        {errors.title ? <div className='text-danger'>{errors.title}</div> : null}
                      </div>

                      <div className='col-4'>
                        <label className='form-label '>Contact Person</label>
                        <input
                          name='contact_person'
                          type='text'
                          className='form-control'
                          onChange={handleChange}
                          value={values.contact_person || ''}
                        />
                        {errors.contact_person ? <div>{errors.contact_person}</div> : null}
                      </div>
                      <div className='col-4'>
                        <label className='form-label'>SSN</label>
                        <InputMask
                          mask='999-999-9999'
                          name='ssn'
                          type='text'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.ssn || ''}
                          className='form-control'
                        />
                      </div>
                    </div>

                    <div className='row mb-10 me-4'>
                      <div className='col-6'>
                        <label className='form-label '>Address Line 1</label>
                        <input
                          name='address_line_1'
                          type='text'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.address_line_1 || ''}
                          className='form-control'
                        />
                      </div>
                      <div className='col-6'>
                        <label className='form-label'>Address Line 2</label>
                        <input
                          name='address_line_2'
                          type='text'
                          className='form-control'
                          onChange={handleChange}
                          value={values.address_line_2 || ''}
                        />
                        {errors.address_line_2 ? <div>{errors.address_line_2}</div> : null}
                      </div>
                    </div>

                    <div className='row mb-10 me-4'>
                      <div className='col-4'>
                        <label className='form-label '>City</label>
                        <input
                          name='city'
                          type='text'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.city || ''}
                          className='form-control'
                        />
                      </div>
                      <div className='col-4 '>
                        <label className='form-label '>State</label>
                        <select
                          aria-label='Select example'
                          name='state'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.state || ''}
                          className='form-control'
                        >
                          <option value='#'>Choose..</option>
                          {patientOption.states &&
                            patientOption.states?.map((states, index) => (
                              <option key={index} value={states.option_id}>
                                {states.option_value}
                              </option>
                            ))}
                        </select>
                      </div>

                      <div className='col-4'>
                        <label className='form-label '>ZIP Code</label>
                        <input
                          name='zip_code'
                          type='text'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.zip_code || ''}
                          className='form-control'
                        />
                      </div>
                    </div>

                    <div className='row mb-10 me-4'>
                      <div className='col-4'>
                        <label className='form-label '>Phone</label>
                        <InputMask
                          mask='(999)999-9999'
                          placeholder='(---)--- ----'
                          name='phone'
                          type='text'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.phone || ''}
                          className='form-control'
                        />
                      </div>
                      <div className='col-4'>
                        <label className='form-label'>Fax</label>
                        <InputMask
                          mask='(999)999-9999'
                          placeholder='(---)--- ----'
                          name='fax'
                          type='text'
                          className='form-control'
                          onChange={handleChange}
                          value={values.fax || ''}
                        />
                        {errors.fax ? <div>{errors.fax}</div> : null}
                      </div>

                      <div className='col-4'>
                        <label className='form-label'>Email</label>
                        <input
                          name='email'
                          type='text'
                          className='form-control'
                          onChange={handleChange}
                          value={values.email || ''}
                        />
                      </div>
                    </div>

                    <div className='row mb-10 me-4'>
                      <div className='col-3'>
                        <label className='form-label '>Specialty</label>
                        <input
                          name='specialty'
                          type='text'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.specialty || ''}
                          className='form-control'
                        />
                      </div>

                      <div className='col-3'>
                        <label className='form-label '>Taxonomy</label>
                        <input
                          name='taxonomy'
                          type='text'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.taxonomy || ''}
                          className='form-control'
                        />
                      </div>
                      <div className='col-3'>
                        <label className='form-label '>Tax ID</label>
                        <input
                          name='tax_id'
                          type='text'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.tax_id || ''}
                          className='form-control'
                        />
                      </div>
                      <div className='col-3'>
                        <label className='form-label '>License ID</label>
                        <input
                          name='license_id'
                          type='text'
                          className='form-control'
                          onChange={handleChange}
                          value={values.license_id || ''}
                        />
                        {errors.license_id ? <div>{errors.license_id}</div> : null}

                        <input
                          onChange={handleChange}
                          className='form-control'
                          type='hidden'
                          name='type'
                          value={values.type}
                        />
                      </div>
                    </div>
                    <div className=' d-flex mt-10'>
                      <div className='mb-10 mx-5'>
                        <div className='form-check form-switch form-check-custom form-check-solid'>
                          <input
                            name='is_active'
                            className='form-check-input'
                            type='checkbox'
                            value={values.is_active}
                            id='isprovideractive'
                            checked={values.is_active}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <label className='form-check-label' htmlFor='isprovideractive'>
                            Is Active
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className='card-footer py-5 d-flex justify-content-between '
                    id='kt_provider_footer'
                  >
                    <div className='mt-4'>
                      <SubmitButton
                        btnLoading={btnLoading}
                        title={!providerState ? 'Save' : 'Update'}
                        callback_event={handleSubmit}
                        class_name='btn btn-primary'
                      />
                    </div>
                    <button
                      type='button'
                      className='btn btn-bg-body text-primary mt-4'
                      id='kt_addprovider_close'
                    >
                      Back
                      <KTIcon iconName='arrow-right' className='fs-3 text-primary' />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export { AddUpdateProvider }
