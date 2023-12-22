import { Link, useLocation } from 'react-router-dom';
import { KTIcon, toAbsoluteUrl } from '../../../../_metronic/helpers';
import Image, { UserProfileImage } from '../../../utilities/Image';
import { useDispatch } from 'react-redux';
import { patientDataAction } from '../../../redux/action';
import { AgeCalculator, TitleCase } from '../../../utilities/Helper';
import { setDataContext } from '../../../utilities/SettingContext';
import { useContext } from 'react';
const DetailPatientHeader = ({ patientData }) => {
  const { setRefresh} = useContext(setDataContext)
  const alertDesc  = patientData.latest_alert
  const dispatch = useDispatch()
  const patientDispatch = (patientData) => {
    dispatch(patientDataAction(patientData))
  }
  const refreshPatient = ()=>{ 
    setRefresh(true)
  }

  const location = useLocation();
  const ImageStyle = {
    backgroundPosition: "right top",
    backgroundSize: '15%',
    backgroundImage: `url(${toAbsoluteUrl('/media/svg/shapes/abstract-4.svg')})`
  };


  return (
    <>
      {alertDesc && alertDesc.is_active === 1  ? (
        <div className={`alert alert-${alertDesc.type} d-flex align-items-center p-5 mb-3`}>
          <span className="svg-icon svg-icon-2hx svg-icon-danger me-3">
            <span className="svg-icon svg-icon-2hx svg-icon-danger me-4">
              <i className={`ki-duotone ki-shield-tick fs-2hx text-${alertDesc.type} me-4`}><span className="path1"></span><span className="path2"></span></i>
            </span>
          </span>
          <div className="d-flex flex-column">
            <span>
              {alertDesc.description}
            </span>
          </div>
        </div>) : (null)}

      <div className='card  bgi-no-repeat card-xl-stretch mb-xl-3 ' style={ImageStyle}>
        <div className="card-body  d-flex align-items-center py-8" >
          <div className="d-flex h-80px w-80px flex-shrink-0 flex-center position-relative">
            {/* <Image gender={patientData.gender} /> */}
            <UserProfileImage profileImagePath={patientData.patient_image_path} gender={patientData.gender} width={80}/>
          </div>
          <div className="ms-6">

            <span className="list-unstyled text-gray-600 fw-bold fs-6 p-0 m-0">
              <span className='text-gray-800 fs-2 fw-bolder me-1'>
                {patientData.full_name}
              </span>
              <p className="list-unstyled text-gray-600 fs-4 me-5 mb-2">
                {patientData.account_number ? (
                  <>
                    <KTIcon iconName="profile-circle" className="fs-4 me-1" />
                    {patientData.account_number}
                  </>
                ) : null}
              </p>

              <span className='d-flex align-items-center text-gray-600 me-5 mb-2'>
                <KTIcon iconName='profile-circle' className='fs-4 me-1' />
                {TitleCase(patientData.gender)} ,  <AgeCalculator dob={patientData.dob} />
              </span>
            </span>
            <p className="list-unstyled text-gray-600 fw-bold fs-6 p-0 m-0">
              <span className='d-flex align-items-center text-gray-600 me-5 mb-2'>
                <KTIcon iconName='geolocation' className='fs-4 me-1' /> {patientData.address}
                <KTIcon iconName='phone' className='fs-4 me-1' /> {patientData.wphone}
              </span>
            </p>
          </div>

          <div className="d-flex  align-items-end">
            <Link to={`/claim/add`} onClick={() => patientDispatch(patientData)} className='btn btn-sm btn-primary me-3'>
              Make Claim
            </Link>

            <Link to={`/patient/edit/${patientData.id}`} className='btn btn-sm btn-primary me-3'>
              Update Patient
            </Link>
            <button onClick={refreshPatient} className='btn btn-sm btn-primary me-3'>
              Refresh Patient
            </button>
          </div>

        </div>

        <div className='d-flex overflow-auto h-55px px-5'>
          <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/patient/detail/patient-data' && 'active')
                }
                to='/patient/detail/patient-data'
              >
                Patient Data
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/patient/detail/insurance' && 'active')
                }
                to='/patient/detail/insurance'
              >
                Insurances
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  ((location.pathname === '/patient/detail/chart-notes' || location.pathname === '/patient/detail/chart-notes/add') && 'active')
                }
                to='/patient/detail/chart-notes'
              >
                Chart Notes
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/patient/detail/claim' && 'active')
                }
                to='/patient/detail/claim'
              >
                Claim
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/patient/detail/template' && 'active')
                }
                to='/patient/detail/template'
              >
                Templates
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/patient/detail/alert' && 'active')
                }
                to='/patient/detail/alert'
              >
                Alerts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export { DetailPatientHeader };


