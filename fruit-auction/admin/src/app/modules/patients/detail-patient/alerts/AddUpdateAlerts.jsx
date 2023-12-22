import { useState, useEffect, useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { KTIcon } from '../../../../../_metronic/helpers'
import SubmitButton from '../../../../utilities/SubmitButton'
import { setDataContext } from '../../../../utilities/SettingContext'
import ApiErrorMessages from '../../../../utilities/ApiErrorMessages'
import { ERROR_ALERT_ADMIN } from '../../../../utilities/AlertMsgConstant'
import { postAlertReq, putAlertReq, showAlertReq } from './__request/RequestAlert'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ValidationSchema } from './__request/ValidationSchema'
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux'
import { LoadingBar } from '../../../../utilities/LoadingBar'
import { editAlertIdAction } from '../../../../redux/action'


const AddUpdateAlerts = () => {
  const patientViewState = useSelector((state) => state.patientIdShowReducerComp)

  const alertState = useSelector((state) => state.alertIdEditReducer)

  const { setRefresh } = useContext(setDataContext)

  const [btnLoading, setBtnLoading] = useState(false);

  const [err, setErr] = useState(false)

  const [errIdMsg, setErrIdMsg] = useState('')

  const [alertLoading, setalertLoading] = useState(false)
  const empty = {
    description: '',
    is_active: true,
    type: '',
    patient_id: patientViewState
  }
  const { values, errors, setValues, touched, handleBlur, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues: empty,
    validationSchema: ValidationSchema,
    onSubmit: values => {
      if (!alertState) {
        values.patient_id = patientViewState
        handleSubmitw(values)
      } else {
        updateAlertData(values)
      }
    }
  });

  const navigate = useNavigate()
  const location = useLocation();

  // add function 
  const handleSubmitw = async (formValues) => {
    setBtnLoading(true);
    try {
      const response = await postAlertReq(formValues);
      toast.success(response.data.message);
      navigate(location.pathname)
      setalertLoading(false)
      setBtnLoading(false);
      setRefresh(true);
      resetForm()
    }
    catch (error) {
      if (error.response && error.response.status === 422) {
        setErrIdMsg(error.response.data.data);
        setErr(true);
        setBtnLoading(false);
        setalertLoading(false)
        return false;
      } else {
        toast.error(ERROR_ALERT_ADMIN);
      }
    }
  };

  // show data single
  // update function 

  const dispatch = useDispatch()
  const alertDataObj = async () => {
    if (alertState) {
      setalertLoading(true);
      try {
        const response = await showAlertReq(alertState);
        const resObj = response.data.data;
        resObj.is_active = resObj.is_active === 1;
        setValues(resObj);
        setalertLoading(false);
      } catch (error) {
        toast.error(ERROR_ALERT_ADMIN);
        setalertLoading(false);
      }
    }
  };

  const updateAlertData = async (values) => {
    setBtnLoading(true)
    await putAlertReq(alertState, values)
      .then(function (response) {
        setRefresh(true);
        navigate('/patient/detail/alert')
        setBtnLoading(false)
        setalertLoading(false)
        toast.success(response.data.message)
        setErr(false);
        dispatch(editAlertIdAction(null));
      })
      .catch(function (error) {
        if (error.response && error.response.status === 422) {
          setErrIdMsg(error.response.data.data);
          setErr(true);
          setBtnLoading(false);
          setalertLoading(false)
          return false;
        } else {
          toast.error(ERROR_ALERT_ADMIN);
        }
      })

  }
  const resetState = () => {
    setErr(false)
    setErrIdMsg('')
  }
  useEffect(() => {
    if (alertState != '' && alertState != null) {
      alertDataObj();
      resetState()
    } else {
      setValues(empty)
      resetState()
      resetForm()
    }
  }, [alertState]);

  return (
    <>

      <div
        id='kt_alert'
        className='bg-body'
        data-kt-drawer='true'
        data-kt-drawer-name='alert'
        data-kt-drawer-activate='true'
        data-kt-drawer-overlay='true'
        data-kt-drawer-direction='end'
        data-kt-drawer-toggle='#kt_alert_toggle'
        data-kt-drawer-close='#kt_alert_close'
      >
        <div className='card shadow-none rounded-0'>
          <div className='card-header' id='kt_alert_header'>
            <div className='card-title fw-bolder text-dark'>
              {!alertState ? ("Add New Alert Message") : ("Update Alert Message")}
            </div>
            <div className='card-toolbar'>
              <button
                type='button'
                className='btn btn-sm btn-icon btn-active-light-primary me-n5'
                id='kt_alert_close'
              >
                <KTIcon iconName='cross' className='fs-1' />
              </button>
            </div>
          </div>

          <div className='card-body position-relative' id='kt_alert_body'>

            <ApiErrorMessages errorcheck={err} errormsg={errIdMsg} />

            <div
              id='kt_alert_scroll'
              className='position-relative  me-n5 pe-5'
              data-kt-scroll='true'
              data-kt-scroll-wrappers='#kt_alert_body'
              data-kt-scroll-dependencies=' #kt_alert_footer'
              data-kt-scroll-offset='5px'
              style={{ width: '900px' }}
            >
              {alertLoading ? (
                <div >
                  <LoadingBar />
                </div>
              ) : (<form onSubmit={handleSubmit} >
                <div className='container'>

                  <div className='row mb-10 me-4'>

                    <div className='col-12'>
                      <label className='form-label'>Description</label>
                      <textarea
                        name='description'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.description}
                        rows="4"
                        cols="80"
                        className={`form-control ${errors.description && touched.description
                          ? 'border border-danger'
                          : ''
                          }`}
                      />
                      {errors.description && touched.description ? (
                        <div className='text-danger'>{errors.description}</div>
                      ) : null}
                    </div>
                  </div>

                  <div className="row mb-10">
                    <div className="col-3">
                      <label className="form-label">Alert Color</label>
                      <select
                        name="type"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.type}
                        className={`form-select ${errors.type && touched.type
                          ? 'border border-danger'
                          : ''
                          }`}

                      >
                        <option value="#">choose</option>
                        <option value="danger">Danger</option>
                        <option value="success">Success</option>
                        <option value="info">Info</option>
                        <option value="warning">Warning</option>
                      </select>
                      {errors.type && touched.type ? (
                        <div className='text-danger'>{errors.type}</div>
                      ) : null}
                    </div>
                  </div>

                  <div className='col-12 mb-10 mb-10 mx-5'>
                    <div className='form-check form-switch form-check-custom form-check-solid'>
                      <input
                        name='is_active'
                        className='form-check-input'
                        type='checkbox'
                        value={values.is_active}
                        id='is_active'
                        checked={values.is_active}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <label className='form-check-label' id='is_active'>
                        Is Active
                      </label>
                    </div>


                  </div>
                </div>
              </form>
              )}
            </div>
          </div>
          <div className='card-footer py-5 d-flex justify-content-between ' id='kt_task_footer'>
            <div className='mt-2'>
              <SubmitButton
                btnLoading={btnLoading}
                title={!alertState ? 'Save' : 'Update'}
                callback_event={handleSubmit}
                class_name='btn btn-primary'
              />
            </div>
            <Link to='/patient/detail/alert' className=''>

            </Link>
            <button
              type='button'
              className='btn btn-bg-body text-primary mt-4'
              id='kt_alert_close'
            >
              Back
              <KTIcon iconName='arrow-right' className='fs-3 text-primary' />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export { AddUpdateAlerts }