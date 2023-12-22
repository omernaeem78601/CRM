import { TitleCase } from '../../../../utilities/Helper'

const ProfileTab = ({ userProfile }) => {

  return (
    <>
      <div className="card card-flush mb-6 mb-xl-9">
        <div className="card-header">
          <div className="card-title flex-column">
            <h2 className="mb-1">User Profile</h2>
          </div>
        </div>

        <div className='card-body pt-0 pb-5'>
          <div className='row mb-10'>
            <div className='col-3'>
              <div className="fs-5 text-muted fw-semibold mt-2">Title</div>
              <div className="fs-4 fw-bold"> {TitleCase(userProfile.title)} </div>
            </div>
            <div className='col-3'>
              <div className="fs-5 text-muted fw-semibold mt-2">First Name</div>
              <div className="fs-4 fw-bold"> {userProfile.first_name} </div>
            </div>
            <div className='col-3'>
              <div className="fs-5 text-muted fw-semibold mt-2">Last Name</div>
              <div className="fs-4 fw-bold"> {userProfile.last_name} </div>
            </div>
            <div className='col-3'>
              <div className="fs-5 text-muted fw-semibold mt-2">Gender</div>
              <div className="fs-4 fw-bold"> {TitleCase(userProfile.gender)} </div>
            </div>

          </div>

          <div className='row mb-10'>
            <div className='col-3'>
              <div className="fs-5 text-muted fw-semibold mt-2">Address 1</div>
              <div className="fs-4 fw-bold"> {userProfile.street} </div>
            </div>
            <div className='col-3'>
              <div className="fs-5 text-muted fw-semibold mt-2">Address 2</div>
              <div className="fs-4 fw-bold"> {userProfile.street2} </div>
            </div>
            <div className='col-3'>
              <div className="fs-5 text-muted fw-semibold mt-2">City</div>
              <div className="fs-4 fw-bold"> {userProfile.city} </div>
            </div>
            <div className='col-3'>
              <div className="fs-5 text-muted fw-semibold mt-2">State</div>
              <div className="fs-4 fw-bold"> {userProfile.state} </div>
            </div>

          </div>

          <div className='row mb-10'>
            <div className='col-3'>
              <div className="fs-5 text-muted fw-semibold mt-2">Zip Code</div>
              <div className="fs-4 fw-bold"> {userProfile.zip_code} </div>
            </div>
            <div className='col-3'>
              <div className="fs-5 text-muted fw-semibold mt-2">Phone</div>
              <div className="fs-4 fw-bold"> {userProfile.phone} </div>
            </div>
            <div className='col-3'>
              <div className="fs-5 text-muted fw-semibold mt-2">Mobile</div>
              <div className="fs-4 fw-bold"> {userProfile.mobile} </div>
            </div>
            <div className='col-3'>
              <div className="fs-5 text-muted fw-semibold mt-2">Email</div>
              <div className="fs-4 fw-bold"> {userProfile.email} </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileTab
