import { useFormik } from "formik";
import { updatePasswordReq } from "../_request/RequestProfile";
import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { setDataContext } from "../../../../utilities/SettingContext";
import { toast } from 'react-toastify';
import { ERROR_ALERT_ADMIN } from "../../../../utilities/AlertMsgConstant";
import ApiErrorMessages from "../../../../utilities/ApiErrorMessages";
import * as Yup from 'yup';
import SubmitButton from "../../../../utilities/SubmitButton";
import { securityValidationSchema } from "../_request/ValidationSchema";
const SecurityTab = () => {

  const empty = {
    old_password: "",
    new_password: "",
    confirm_password: ""
  }

  const [isError, setIsError] = useState(false)
  const [showPassword, setShowPassword] = useState(false);
  const [ShowconfirmPassword, setShowconfirmPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('Please login! if you have credential or contact NeoMD Billing team')
  const { setRefresh } = useContext(setDataContext)
  const [err, setErr] = useState(false)
  const [errIdMsg, setErrIdMsg] = useState('')
  const userState = useSelector((state) => state.userReducerComp)
  const [btnLoading, setBtnLoading] = useState(false)

  const { values, errors, setValues, touched, handleBlur, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues: empty,
    validationSchema: securityValidationSchema,
    onSubmit: (values) => {
      updateProfile(values)
    },
  })

  const updateProfile = async (values) => {
    setBtnLoading(true);
    try {
      const response = await updatePasswordReq(userState.id, values);

      toast.success(response.data.message);
      setBtnLoading(false);
      setRefresh(true);
      resetForm();
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setErrIdMsg(error.response.data.data);
        setErr(true);
      } else if (error.response && error.response.status === 401) {
        setErrIdMsg(error.response.data.data);
        setErr(true);
      } else {
        toast.error(ERROR_ALERT_ADMIN);
      }
      setBtnLoading(false);
    }
  };
  return (
    <>
      <div className='card pt-4 mb-6 mb-xl-9'>
        <div className='card-header border-0'>
          <div className='card-title'>
            <h2>Update Password</h2>
          </div>
        </div>
        <div className='card-body pt-0 pb-5'>
          <div className='table-responsive'>
            <table
              className='table align-middle table-row-dashed gy-5'
              id='kt_table_users_login_session'
            >
              <tbody className='fs-6 fw-semibold text-gray-600'>
                <tr>
                  <td>
                    <div className='modal-body scroll-y mx-5 mx-xl-15 my-7'>
                      <ApiErrorMessages errorcheck={err} errormsg={errIdMsg} />

                      <form id='kt_modal_update_password_form' className='form' action='#'>
                        <div className='fv-row mb-10'>
                          <label className='required form-label fs-6 mb-2'>Current Password</label>
                          <input
                            className='form-control form-control-lg form-control-solid'
                            type='password'
                            name='old_password'
                            placeholder=''
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.old_password}
                            autoComplete='off'
                          />
                          {errors.old_password ? <div className='text-danger'>{errors.old_password}</div> : null}
                        </div>
                        <div className='mb-10 fv-row' data-kt-password-meter='true'>
                          <div className='mb-1'>
                            <label className='form-label fw-semibold fs-6 mb-2'>New Password</label>
                            <div className='position-relative mb-3'>
                              <input
                                className='form-control form-control-lg form-control-solid'
                                type={showPassword ? 'text' : 'password'}
                                placeholder=''
                                name='new_password'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.new_password}
                                autoComplete='off'
                              />
                              {errors.new_password ? <div className='text-danger'>{errors.new_password}</div> : null}
                              <span
                                className='btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2'
                                onClick={() => setShowPassword(!showPassword)}
                              >
                                <i className='ki-duotone ki-eye-slash fs-1'>
                                  <span className='path1' />
                                  <span className='path2' />
                                  <span className='path3' />
                                  <span className='path4' />
                                </i>
                                <i className='ki-duotone ki-eye d-none fs-1'>
                                  <span className='path1' />
                                  <span className='path2' />
                                  <span className='path3' />
                                </i>
                              </span>
                            </div>
                          </div>
                          <div className='text-muted'>
                            Use 8 or more characters with a mix of letters, numbers &amp; symbols.
                          </div>
                        </div>
                        <div className='fv-row mb-10 position-relative'>
                          <label className='form-label fw-semibold fs-6 mb-2'>
                            Confirm New Password
                          </label>
                          <input
                            className='form-control form-control-lg form-control-solid'
                            type={ShowconfirmPassword ? 'text' : 'password'}
                            placeholder=''
                            name='confirm_password'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.confirm_password}
                            autoComplete='off'
                          />
                          <span
                            className='btn btn-sm btn-icon position-absolute translate-middle-y top-50 end-0 me-n2'
                            onClick={() => setShowconfirmPassword(!ShowconfirmPassword)}
                          >
                            <i className='ki-duotone ki-eye-slash fs-1'>
                              <span className='path1' />
                              <span className='path2' />
                              <span className='path3' />
                              <span className='path4' />
                            </i>

                            <i className='ki-duotone ki-eye d-none fs-1'>
                              <span className='path1' />
                              <span className='path2' />
                              <span className='path3' />
                            </i>
                          </span>
                          {errors.confirm_password ? (
                            <div className='text-danger'>{errors.confirm_password}</div>
                          ) : null}

                        </div>

                        <div className='text-center pt-15 d-flex justify-content-between mb-5'>
                          <div className='mt-2'>
                            <SubmitButton
                              btnLoading={btnLoading}
                              title='update Password'
                              callback_event={handleSubmit}
                              class_name='btn btn-primary'
                            />
                          </div>

                        </div>
                      </form>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default SecurityTab