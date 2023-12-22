import { useContext, useState } from 'react'
import ApiErrorMessages from '../../../../utilities/ApiErrorMessages'
import { useDropzone } from 'react-dropzone';
import SubmitButton from '../../../../utilities/SubmitButton';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik'
import { updateProfileImageReq } from '../_request/RequestProfile';
import { toast } from 'react-toastify';
import { setDataContext } from '../../../../utilities/SettingContext';
import { ERROR_ALERT_ADMIN } from '../../../../utilities/AlertMsgConstant';
import { addUser } from '../../../../redux/action';
import { UserProfileImage } from '../../../../utilities/Image';

const UpdateProfileImageTab = ({ userProfile }) => {


    const [err, setErr] = useState(false)
    const [errIdMsg, setErrIdMsg] = useState('')
    const [btnLoading, setBtnLoading] = useState(false)
    const { setRefresh } = useContext(setDataContext)


    const [profileImage, setProfileImage] = useState(null);
    const { values, handleSubmit, resetForm } = useFormik({
        initialValues: {
            parent_id: ''
        },
        onSubmit: (values) => {
            values.parent_id = 1
            addProfile(values);
        },
    });

    const dispatch = useDispatch();
    const addProfile = async () => {
        setBtnLoading(true);

        try {
            const formData = new FormData();

            if (profileImage) {
                formData.append('profile_image', profileImage);
            }

            for (const key in values) {
                formData.append(key, values[key]);
            }

            const response = await updateProfileImageReq(userProfile.id, formData);
            toast.success(response.data.message);
            dispatch(addUser(response.data.data));
            setRefresh(false)
            setErr(false);
            setBtnLoading(false);
            resetForm()
        } catch (error) {
            if (error.response && error.response.status === 422) {
                setErrIdMsg(error.response.data.data);
                setErr(true);
                setBtnLoading(false);
                toast.error('There is an issue!');
            } else {
                toast.error(ERROR_ALERT_ADMIN);
            }
        }
    };


    const [profileImageError, setProfileImageError] = useState(false);

    const { getRootProps: getProfileRootProps, getInputProps: getProfileInputProps } = useDropzone({
        onDrop: (acceptedFiles) => {
            const file = acceptedFiles[0];
            if (file.type.startsWith('image/')) {
                setProfileImage(file);
            } else {
                setProfileImageError(true);
            }
        },
    });

    const removeProfileImage = () => {
        setProfileImage(null);
        setProfileImageError(false)
    };

    return (
        <>
            <div className="card card-flush mb-6 mb-xl-9">
                <ApiErrorMessages errorcheck={err} errormsg={errIdMsg} />
                <div className="card-header mt-6">
                    <div className="card-title flex-column">
                        <h2 className="mb-1">Update Profile Image</h2>
                    </div>
                </div>
                <div className='card-body pt-0 pb-5'>
                    <form>
                        <div className='row mb-10 mx-2'>
                            <div className='col-4'>
                                <UserProfileImage profileImagePath={userProfile.profile_image_path} gender={userProfile.gender} width={250} />
                            </div>

                            <div className="col-8 mb-5" >
                                <div {...getProfileRootProps()} className="image-dropzone mb-5">

                                    <input {...getProfileInputProps()}
                                        name="profile_image"
                                        type="file"
                                        onChange={(e) => setProfileImage(e.target.files[0])}
                                    />
                                    {profileImage ? (
                                        <div className="image-container">
                                            <img src={URL.createObjectURL(profileImage)} alt="Profile Image" style={{ width: '320px', height: '250px' }} />
                                        </div>
                                      ) : (
                                        <>
                                            <div role="presentation" tabIndex="0" className="dropzone d-flex justify-content-center align-items-center" style={{ height: '250px' }} >
                                                <p className='text-center align-middle'>Drag or Add Profile Image</p>
                                            </div>

                                            {profileImageError && (
                                                <div className="error-message text-danger">Please upload an image (JPG, PNG, GIF, etc.).</div>
                                            )}
                                        </>
                                    )}
                                </div>
                                {profileImage ? (
                                    <button onClick={() => removeProfileImage()} className="btn btn-danger btn-sm" style={{ alignSelf: 'center' }}>
                                        Remove Image
                                    </button>
                                ) : null}
                            </div>
                        </div>

                        <div
                            className='card-footer py-5 d-flex justify-content-between'
                            id='kt_facility_footer'
                            style={{ marginTop: '5rem', }}
                        >
                            <div className=' py-5 d-flex justify-content-between' id='kt_facility_footer'>

                                <SubmitButton
                                    btnLoading={btnLoading}
                                    title='Update Image'
                                    callback_event={handleSubmit}
                                    class_name='btn btn-primary'
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default UpdateProfileImageTab
