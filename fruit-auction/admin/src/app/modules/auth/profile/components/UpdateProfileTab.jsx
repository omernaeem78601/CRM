import { useState, useEffect } from 'react'
import ApiErrorMessages from "../../../../utilities/ApiErrorMessages"
import { getOptionsListReq, updateProfileReq } from "../_request/RequestProfile"
import { useFormik } from 'formik'
import SubmitButton from "../../../../utilities/SubmitButton"
import InputMask from 'react-input-mask';
import { ValidationSchema } from "../_request/ValidationSchema"
import { toast } from 'react-toastify';
import { ERROR_ALERT_ADMIN } from "../../../../utilities/AlertMsgConstant"
import { useDispatch, useSelector } from 'react-redux'
import { addUser, myProfileIdAction } from '../../../../redux/action'

const UpdateProfileTab = ({ userProfile }) => {

    const myUserProfile = useSelector((state) => state.myProfileIdReducer)
    const dispatch = useDispatch();

    const [profileOption, setProfileOption] = useState([])
    const [btnLoading, setBtnLoading] = useState(false)
    const [err, setErr] = useState(false)
    const [errIdMsg, setErrIdMsg] = useState('')

    const initialValues = {
        title: userProfile.title,
        email: userProfile.email,
        first_name: userProfile.first_name,
        last_name: userProfile.last_name,
        gender: userProfile.gender,
        phone: userProfile.phone,
        mobile: userProfile.mobile,
        street: userProfile.street,
        street2: userProfile.street2,
        city: userProfile.city,
        state: userProfile.state,
        zip_code: userProfile.zip_code,
    }

    const { values, errors, setValues, touched, handleBlur, handleChange, handleSubmit, resetForm } = useFormik({

        initialValues: initialValues,
        validationSchema: ValidationSchema,
        onSubmit: (values) => {
            updateProfile(values)
        },
    })

    const optionsData = async () => {
        try {
            const response = await getOptionsListReq();
            setProfileOption(response.data.data);
        } catch (error) {
            toast.error(ERROR_ALERT_ADMIN);
        }
    };
    useEffect(() => {
        optionsData()
    }, [userProfile])

    const updateProfile = async (empty) => {
        setBtnLoading(true)
        try {
            const response = await updateProfileReq(userProfile.id, empty);
            toast.success(response.data.message)
            if (response.data.data.id === myUserProfile) {
                dispatch(addUser(response.data.data));
                // dispatch(myProfileIdAction(response.data.data));
            }
            setBtnLoading(false)
        } catch (error) {
            if (error.response.status === 422) {
                setErrIdMsg(error.response.data.data);
                setErr(true);
                setBtnLoading(false)
                return false
            } else {
                toast.error(ERROR_ALERT_ADMIN)
            }
        }
    };

    return (
        <div className="card card-flush mb-6 mb-xl-9">
            <ApiErrorMessages errorcheck={err} errormsg={errIdMsg} />
            <div className="card-header mt-6">
                <div className="card-title flex-column">
                    <h2 className="mb-1">Update Profile</h2>
                </div>
            </div>
            <div className='card-body pt-0 pb-5'>
                <form id='cpt' onSubmit={handleSubmit}>
                    <>
                        <div className='row mb-10'>
                            <div className='col-3'>
                                <label className='form-label'>Title</label>
                                <select aria-label='Select example'
                                    name='title'
                                    className='form-select'
                                    onChange={handleChange}
                                    value={values.title || ''}
                                >
                                    <option value='#' >Choose..</option>
                                    {profileOption.title &&
                                        profileOption.title?.map((title, index) => (
                                            <option key={index} value={title.option_id}>{title.option_value}</option>
                                        ))}
                                </select>
                            </div>
                            <div className='col-3'>
                                <label className='form-label required'>First Name</label>
                                <input
                                    name='first_name'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.first_name}
                                    type='text'
                                    className={`form-control ${errors.first_name && touched.first_name ? 'border border-danger' : ''
                                        } `}
                                />
                                {errors.first_name && touched.first_name ? (
                                    <div className='text-danger'>{errors.first_name}</div>
                                ) : null}
                            </div>
                            <div className='col-3'>
                                <label className='form-label required'>Last Name</label>
                                <input
                                    name='last_name'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.last_name}
                                    type='text'
                                    className={`form-control ${errors.last_name && touched.last_name ? 'border border-danger' : ''
                                        } `}
                                />
                                {errors.last_name && touched.last_name ? (
                                    <div className='text-danger'>{errors.last_name}</div>
                                ) : null}
                            </div>
                            <div className='col-3' >
                                <label className='form-label '>Gender</label>
                                <select aria-label='Select example'
                                    name='gender'
                                    className='form-control'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.gender}
                                >
                                    <option value='#'>Choose..</option>
                                    {profileOption.gender &&
                                        profileOption.gender?.map((states, index) => (
                                            <option key={index} value={states.option_id}>{states.option_value}</option>
                                        ))}
                                </select>
                            </div>
                        </div>

                        <div className='row mb-10 me-4'>
                            <div className='col-3'>
                                <label className='form-label'>Phone</label>
                                <InputMask
                                    mask='(999)999-9999'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.phone}
                                    name='phone'
                                    type='text'
                                    className={`form-control  ${errors.phone && touched.phone ? 'border border-danger' : ''} `}
                                />
                                {errors.phone && touched.phone ? <div className='text-danger'>{errors.phone}</div> : null}
                            </div>
                            <div className='col-3'>
                                <label className='form-label'>Mobile</label>
                                <InputMask
                                    mask='(999)999-9999'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.mobile}
                                    name='mobile'
                                    type='text'
                                    className={`form-control  ${errors.mobile && touched.mobile ? 'border border-danger' : ''} `}
                                />
                                {errors.mobile && touched.mobile ? <div className='text-danger'>{errors.mobile}</div> : null}
                            </div>
                            <div className='col-3'>
                                <label className='form-label '>street 1</label>
                                <input
                                    name='street'
                                    type='text'
                                    className='form-control'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.street}
                                />
                            </div>
                            <div className='col-3'>
                                <label className='form-label'>street 2</label>
                                <input
                                    name='street2'
                                    type='text'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.street2}
                                    className='form-control'
                                />
                            </div>
                        </div>
                        <div className='row mb-10 me-4'>
                            <div className='col-3'>
                                <label className='form-label'>City</label>
                                <input
                                    name='city'
                                    type='text'
                                    className='form-control'
                                    placeholder=' city'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.city}
                                />
                            </div>
                            <div className='col-3' >
                                <label className='form-label'>State</label>
                                <select aria-label='Select example'
                                    name='state'
                                    className='form-control'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.state}
                                >
                                    <option value='#'>Choose..</option>
                                    {profileOption.states &&
                                        profileOption.states?.map((states, index) => (
                                            <option key={index} value={states.option_id}>{states.option_value}</option>
                                        ))}
                                </select>
                            </div>
                            <div className='col-3'>
                                <label className='form-label '>ZIP Code</label>
                                <input
                                    maxLength="20"
                                    name='zip_code'
                                    type='text'
                                    placeholder='zip code'
                                    className='form-control'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.zip_code}
                                />
                            </div>
                        </div>

                        <div className='card-footer py-5 d-flex justify-content-between' id='kt_facility_footer' style={{ marginTop: '5rem', }}>
                            <div className=' py-5 d-flex justify-content-between' id='kt_facility_footer'>
                                <SubmitButton
                                    btnLoading={btnLoading}
                                    title='Update'
                                    callback_event={handleSubmit}
                                    class_name='btn btn-primary'
                                />
                            </div>
                        </div>
                    </>
                </form>
            </div>
        </div>
    )
}

export default UpdateProfileTab
