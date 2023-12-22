import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ProfileTab from './components/ProfileTab';
import UpdateProfileTab from './components/UpdateProfileTab';
import UpdateProfileImageTab from './components/UpdateProfileImageTab';
import SecurityTab from './components/SecurityTab';
import UserLogsTab from './components/UserLogsTab';
import { formatDate } from '../../../utilities/Helper';
import { showProfileReq } from './_request/RequestProfile';
import { ERROR_ALERT_ADMIN } from '../../../utilities/AlertMsgConstant';
import { useParams } from 'react-router-dom';
import { LoadingBar } from '../../../utilities/LoadingBar';
import { myProfileIdAction } from '../../../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { UserProfileImage } from '../../../utilities/Image';

const UpdateProfile = () => {
  const [profileLoading, setProfileLoading] = useState(true)
  const { id } = useParams('id');
  const dispatch = useDispatch();
  const [userProfile, setUserProfile] = useState({});
  const getUserProfileDataObj = async () => {
    try {
      const response = await showProfileReq(id)
      setUserProfile(response.data.data)

      setProfileLoading(false)
    } catch (error) {
      toast.error(ERROR_ALERT_ADMIN)
    }
  }

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    if (activeTab !== index) {
      setActiveTab(index);
    }
  };

  useEffect(() => {
    getUserProfileDataObj()
  }, [id])

  return (
    <>
      {profileLoading ? (
        <LoadingBar />
      ) : (
        <div id="kt_app_content" className="app-content flex-column-fluid">
          <div className="d-flex flex-column flex-lg-row">
            <div className="flex-column flex-lg-row-auto w-lg-250px w-xl-350px mb-10">
              <div className="card mb-5 mb-xl-8">
                <div className="card-body">
                  <div className="d-flex flex-center flex-column py-5">
                    <div className='menu-item px-3'>
                      <div className='menu-content d-flex align-items-center px-3'>
                        <div className='symbol symbol-50px me-5'>
                          <UserProfileImage profileImagePath={userProfile.profile_image_path} gender={userProfile.gender} />
                        </div>
                      </div>
                    </div>

                    <a
                      href="#"
                      className="fs-3 text-gray-800 text-hover-primary fw-bold mb-3"
                    >
                      {userProfile.full_name}
                    </a>
                    <div className="mb-9">
                      <div className="badge badge-lg badge-light-primary d-inline">
                        Administrator
                      </div>
                    </div>
                  </div>

                  <div className="d-flex flex-stack fs-4 py-3">
                    <div
                      className="fw-bold rotate collapsible"
                      data-bs-toggle="collapse"
                      href="#kt_user_view_details"
                      role="button"
                      aria-expanded="false"
                      aria-controls="kt_user_view_details"
                    >
                      Details

                    </div>

                    <span
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      title="Edit customer details"
                    >
                      <button className='btn btn-primary-sm' onClick={() => handleTabClick(1)}>Edit</button>
                    </span>

                  </div>

                  <div className="separator" />
                  <div id="kt_user_view_details" className="collapse show">
                    <div className="pb-5 fs-6">
                      <div className="mt-5 text-muted">User Name</div>
                      <div className="text-gray-800 fw-bold">
                        {userProfile.email}
                      </div>
                      <div className="mt-5 text-muted">Profile Name</div>
                      <div className="fw-bold text-gray-800">
                        {userProfile.full_name}
                      </div>
                      <div className="text-muted mt-5">Last Login</div>
                      <div className="fw-bold text-gray-800">{formatDate(userProfile.last_login)}</div>
                      <div className="text-muted mt-5">Last Update</div>
                      <div className="fw-bold text-gray-800">{formatDate(userProfile.last_updated)}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-lg-row-fluid ms-lg-15">
              <ul className="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-semibold mb-8">
                <li className="nav-item">
                  <a
                    className={`nav-link text-active-primary pb-4 ${activeTab === 0 ? 'active' : ''}`}
                    data-kt-countup-tabs="true"
                    data-bs-toggle="tab"
                    href="#kt_user_view_profile_tab"
                    onClick={() => handleTabClick(0)}
                  >
                    User Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link text-active-primary pb-4 ${activeTab === 1 ? 'active' : ''}`}
                    data-kt-countup-tabs="true"
                    data-bs-toggle="tab"
                    href="#kt_user_update_profile_tab"
                    onClick={() => handleTabClick(1)}
                  >
                    Update Profile
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className={`nav-link text-active-primary pb-4 ${activeTab === 2 ? 'active' : ''}`}
                    data-kt-countup-tabs="true"
                    data-bs-toggle="tab"
                    href="#kt_user_update_Image_tab"
                    onClick={() => handleTabClick(2)}
                  >
                    Profile Image
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className={`nav-link text-active-primary pb-4 ${activeTab === 3 ? 'active' : ''}`}
                    data-kt-countup-tabs="true"
                    data-bs-toggle="tab"
                    href="#kt_user_security_tab"
                    onClick={() => handleTabClick(3)}
                  >
                    Security
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className={`nav-link text-active-primary pb-4 ${activeTab === 4 ? 'active' : ''}`}
                    data-bs-toggle="tab"
                    href="#kt_user_events_tab"
                    onClick={() => handleTabClick(4)}
                  >
                    Events &amp; Logs
                  </a>
                </li>

              </ul>
              <div className="tab-content" id="myTabContent">

                <div className={`tab-pane fade show ${activeTab === 0 ? 'active' : ''}`} id="kt_user_view_profile_tab" role="tabpanel">
                  <ProfileTab userProfile={userProfile} />
                </div>

                <div className={`tab-pane fade show ${activeTab === 1 ? 'active' : ''}`} id="kt_user_update_profile_tab" role="tabpanel">
                  <UpdateProfileTab userProfile={userProfile} />
                </div>

                <div className={`tab-pane fade show ${activeTab === 2 ? 'active' : ''}`} id="kt_user_update_Image_tab" role="tabpanel">
                  <UpdateProfileImageTab userProfile={userProfile} />
                </div>

                <div className={`tab-pane fade show ${activeTab === 3 ? 'active' : ''}`} id="kt_user_security_tab" role="tabpanel">
                  <SecurityTab />
                </div>

                <div className={`tab-pane fade show ${activeTab === 4 ? 'active' : ''}`} id="kt_user_events_tab" role="tabpanel">
                  <UserLogsTab />
                </div>

              </div>
            </div>
          </div>
        </div>)}
    </>
  )
}

export { UpdateProfile }


