import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { UserProfileImage } from '../../../../app/utilities/Image'
import { logoutAction } from '../../../../app/redux/action'

const HeaderUserMenu = () => {

  const myUserProfile = useSelector((state) => state.myProfileIdReducer)
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const logoutbtn = async () => {
    try {
      const token = sessionStorage.getItem('token');
      const config = {
        headers: { 
          Authorization: `Bearer ${token}`,     
        },
      };
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/fruit/user/logout`, config);
      // window.location.reload();
      sessionStorage.clear();
      localStorage.clear()
      dispatch(logoutAction(false))
      // navigate('/login')
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const userProfile = useSelector((state) => state.userReducerComp)
  return (
    <div
      className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px'
      data-kt-menu='true'
    >
      <div className='menu-item px-3'>
        <div className='menu-content  px-3'>
          <div className='symbol symbol-50px me-5 d-flex justify-content-center align-items-center' >
           
            <UserProfileImage profileImagePath={userProfile.profile_image_path} gender={userProfile.gender} />
          </div>
        </div>
      </div>
      <div className='d-flex flex-column'>
        <div className='fw-bolder d-flex justify-content-center align-items-center fs-5'>
          <span className='badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2'>{userProfile.full_name}</span>
        </div>
        <a href='#' className='fw-bold text-muted text-hover-primary fs-7'>

        </a>
      </div>

      <div className='separator my-2'></div>

      <div className='menu-item px-5'>
        <Link to={`/user/profile/${myUserProfile}`} className='menu-link px-5'>
          My Profile
        </Link>
      </div>

      <div className='menu-item px-5'>
        <a href='#' className='menu-link px-5'>
          <span className='menu-text'>My Claims</span>
          <span className='menu-badge'>
            <span className='badge badge-light-danger badge-circle fw-bolder fs-7'>3</span>
          </span>
        </a>
      </div>



      <div className='menu-item px-5'>
        <a href='#' className='menu-link px-5'>
          My Statements
        </a>
      </div>

      <div className='separator my-2'></div>

      <div className='menu-item px-5'>
        <Link to='/login' onClick={logoutbtn} className='menu-link px-5'>
          Sign Out
        </Link>
      </div>
    </div>
  )
}

export { HeaderUserMenu }
