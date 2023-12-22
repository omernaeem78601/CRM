import {useContext, useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {KTIcon} from '../../../../../_metronic/helpers'
import {setDataContext} from '../../../../utilities/SettingContext'
import ApiErrorMessages from '../../../../utilities/ApiErrorMessages'
import SubmitButton from '../../../../utilities/SubmitButton'
import {postSettingDataReq} from './__request/RequestSettings'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {ERROR_ALERT_ADMIN} from '../../../../utilities/AlertMsgConstant'
import {useFormik} from 'formik'
import {ValidationSchema} from './__request/ValidationSchema'
import {getSingleSettingDataReq, updateSettingDataReq} from './__request/RequestSettings'
import {useDispatch, useSelector} from 'react-redux'
import {LoadingBar} from '../../../../utilities/LoadingBar'
import {editSettingIdAction, showSettingIdAction} from '../../../../redux/action'

const AddUpdateSettings = () => {
  const settingState = useSelector((state) => state.settingIdEditReducer)

  const [btnLoading, setBtnLoading] = useState(false)
  const {optionListName, setRefresh} = useContext(setDataContext)

  const orderData = []

  for (let i = 1; i <= 100; i++) {
    orderData.push(i)
  }

  const [errIdMsg, setErrIdMsg] = useState([])
  const [err, setErr] = useState(false)
  const [settingLoading, setSettingLoading] = useState(true)
  const userProfile = useSelector((state) => state.userReducerComp)

  const empty = {
    list_name: optionListName,
    option_id: '',
    option_value: '',
    description: '',
    seq: 1,
    is_defult: false,
    is_active: true,
    company_id: userProfile.company.id,
    parent_id: 0,
  }
  const {values, errors, setValues, touched, handleBlur, handleChange, handleSubmit, resetForm} =
    useFormik({
      initialValues: {empty},
      validationSchema: ValidationSchema,
      onSubmit: (values) => {
        if (!settingState) {
          values.company_id = userProfile.company.id
          values.parent_id = 0
          addsetting(values)
        } else {
          updateSetting(values)
        }
      },
    })
  const navigate = useNavigate()
  // add setting
  const addsetting = async (handle) => {
    setBtnLoading(true)
    try {
      const response = await postSettingDataReq(handle, optionListName)
      setValues(empty)
      navigate('/organization/settings')
      toast.success(response.data.message)
      setBtnLoading(false)
      setRefresh(true)
      resetForm({values: empty})
      navigate('/organization/settings')
      setValues(empty)
      setErr(false)
      setErrIdMsg('')
    } catch (error) {
      if (error.response.status === 422) {
        setErrIdMsg(error.response.data.data)
        setErr(true)
        setBtnLoading(false)
        return false
      } else {
        toast.error(ERROR_ALERT_ADMIN)
      }
    }
  }

  const dispatch = useDispatch()
  const settingSingleData = async () => {
    setSettingLoading(true)
    try {
      setBtnLoading(true)
      const response = await getSingleSettingDataReq(optionListName, settingState)
      const data = response.data.data
      data.is_defult = data.is_defult === 1
      data.is_active = data.is_active === 1
      setValues(data)
      setSettingLoading(false)
      setBtnLoading(false)
      dispatch(showSettingIdAction(null))
    } catch (error) {
      toast.error(ERROR_ALERT_ADMIN)
      setSettingLoading(false)
    }
  }

  const updateSetting = async (val) => {
    setBtnLoading(true)
    try {
      const response = await updateSettingDataReq(optionListName, settingState, val)

      navigate('/organization/settings')
      toast.success(response.data.message)
      setBtnLoading(false)
      setRefresh(true)
      dispatch(editSettingIdAction(null))
    } catch (error) {
      if (error.response.status === 422) {
        setErrIdMsg(error.response.data.data)
        setBtnLoading(false)
        setErr(true)
        return false
      } else {
        toast.error(ERROR_ALERT_ADMIN)
      }
    }
  }
  const resetState = () => {
    setErr(false)
    setErrIdMsg('')
  }
  useEffect(() => {
    if (!settingState && values) {
      setSettingLoading(false)
      setValues(empty)
      resetState()
      resetForm()
    } else {
      settingSingleData()
      resetState()
    }
  }, [settingState])

  return (
    <>
      <div
        id='kt_settings'
        className='bg-body'
        data-kt-drawer='true'
        data-kt-drawer-name='settings'
        data-kt-drawer-activate='true'
        data-kt-drawer-overlay='true'
        data-kt-drawer-width="{default:'300px', 'lg': '900px'}"
        data-kt-drawer-direction='end'
        data-kt-drawer-toggle='#kt_settings_toggle'
        data-kt-drawer-close='#kt_settings_close'
      >
        <div className='card shadow-none rounded-0'>
          <div className='card-header' id='kt_settings_header'>
            <h3 className='card-title fw-bolder text-dark'>
              {!settingState ? 'Add Setting' : 'Update Setting'}
            </h3>
            <div className='card-toolbar'>
              <button
                type='button'
                className='btn btn-sm btn-icon btn-active-light-primary me-n5'
                id='kt_settings_close'
              >
                <KTIcon iconName='cross' className='fs-1' />
              </button>
            </div>
          </div>

          <div
            className='card-body position-relative '
            style={{width: '69rem'}}
            id='kt_settings_body'
          >
            <ApiErrorMessages errorcheck={err} errormsg={errIdMsg} />
            <div
              id='kt_settings_scroll'
              className='position-relative scroll-y me-n5 pe-5'
              data-kt-scroll='true'
              data-kt-scroll-height='auto'
              data-kt-scroll-wrappers='#kt_settings_body'
              data-kt-scroll-dependencies='#kt_settings_header, #kt_settings_footer'
              data-kt-scroll-offset='5px'
            >
              {/* form start here  */}
              {settingLoading ? (
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
                  <div className='mb-10 w-100'>
                    <label className='form-label'>Setting Name</label>
                    <input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type='text'
                      className='form-control'
                      placeholder='Option Id'
                      disabled
                      value={optionListName}
                    />
                  </div>

                  <div className='d-flex'>
                    <div className='mb-10 w-50 me-4'>
                      <label className='form-label required'>Option ID</label>
                      <input
                        name='option_id'
                        type='text'
                        value={values.option_id}
                        disabled
                        className={`form-control ${
                          errors.option_id && touched.option_id ? 'border border-danger' : ''
                        }`}
                      />
                      {errors.option_id && touched.option_id ? (
                        <div className='text-danger'>{errors.option_id}</div>
                      ) : null}
                    </div>
                    <div className='mb-10 w-50'>
                      <label className='form-label required'>Option Value</label>
                      <input
                        name='option_value'
                        type='text'
                        onBlur={handleBlur}
                        value={values.option_value}
                        onChange={(e) => {
                          const optionListName = e.target.value
                          // Remove special characters using a regular expression
                          const sanitizedOptionValue = optionListName.replace(/[^A-Za-z0-9\s]/g, '')

                          // Replace spaces with underscores and convert to lowercase
                          const optionId = sanitizedOptionValue.replace(/\s+/g, '_').toLowerCase()

                          setValues({
                            ...values,
                            option_id: optionId,
                            option_value: sanitizedOptionValue, // Set the sanitized value
                          })
                        }}
                        className={`form-control ${
                          errors.option_value && touched.option_value ? 'border border-danger' : ''
                        }`}
                      />
                      {errors.option_value && touched.option_value ? (
                        <div className='text-danger'>{errors.option_value}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className='mb-10 w-100'>
                    <label className='form-label'>Description</label>
                    <textarea
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.description}
                      name='description'
                      type='text'
                      className='form-control'
                      rows='4'
                      cols='50'
                    ></textarea>
                  </div>
                  <div className='mb-10'>
                    <label className='form-label'>Sort Order</label>
                    <select
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.seq}
                      name='seq'
                      className='form-select '
                      aria-label='Select example'
                    >
                      <option disabled>Sort Order</option>
                      {orderData.map((e, index) => (
                        <option key={index} value={e}>
                          {e}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className=' d-flex'>
                    <div className='mb-10'>
                      <div className='form-check form-switch form-check-custom form-check-solid'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          name='is_defult'
                          value={values.is_defult}
                          id='is_default'
                          checked={values.is_defult}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <label className='form-check-label' htmlFor='is_default'>
                          Is Defult
                        </label>
                      </div>
                    </div>
                    <div className='mb-10 mx-5'>
                      <div className='form-check form-switch form-check-custom form-check-solid'>
                        <input
                          name='is_active'
                          className='form-check-input'
                          type='checkbox'
                          value={values.is_active}
                          id='active'
                          checked={values.is_active}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <label className='form-check-label' htmlFor='active'>
                          Is Active
                        </label>
                      </div>
                    </div>
                  </div>
                  <div
                    className='card-footer py-5 d-flex justify-content-between'
                    id='kt_facility_footer'
                  >
                    <div className='mt-4'>
                      <SubmitButton
                        btnLoading={btnLoading}
                        title={!settingState ? 'Save' : 'Update'}
                        callback_event={handleSubmit}
                        class_name='btn btn-primary'
                      />
                    </div>
                    <div>
                      <button
                        type='button'
                        className='btn btn-bg-body text-primary mt-3'
                        id='kt_settings_close'
                      >
                        Back
                        <KTIcon iconName='arrow-right' className='fs-3 text-primary ' />
                      </button>
                    </div>
                  </div>
                </form>
              )}
              {/* form end here  */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export {AddUpdateSettings}
