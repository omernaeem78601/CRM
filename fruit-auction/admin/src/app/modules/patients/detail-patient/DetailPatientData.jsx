import 'react-toastify/dist/ReactToastify.css'
import { formatDate, snakeToPascal, TitleCase } from '../../../utilities/Helper'

const DetailPatientData = ({ patientData }) => {
  return (
    <>
      <div className="col-xl-12">
        <div className="card mb-3 mb-xl-5">
          <div className="card-header cursor-pointer">
            <div className="card-title m-0">
              <h3 className="fw-bold m-0">Patient Demographic</h3>
            </div>
          </div>
          <div className='card-body'>
            <div className='row  me-4'>
              <div className="card-body p-3">

                <div className="row g-0 mb-7">
                  <div className="col-sm">
                    <div className="fs-5 text-muted fw-semibold">Title</div>
                    <div className="fs-4 fw-bold">{snakeToPascal(patientData.title)}</div>
                  </div>

                  <div className="col-sm">
                    <div className="fs-5 text-muted fw-semibold">First Name</div>
                    <div className="fs-4 fw-bold">{snakeToPascal(patientData.first_name)}</div>
                  </div>

                  <div className="col-sm">
                    <div className="fs-5 text-muted fw-semibold">Middle Name</div>
                    <div className="fs-4 fw-bold">{snakeToPascal(patientData.middle_name)}</div>
                  </div>

                  <div className="col-sm">
                    <div className="fs-5 text-muted fw-semibold">Last Name </div>
                    <div className="fs-4 fw-bold">{snakeToPascal(patientData.last_name)}</div>
                  </div>

                  <div className="col-sm">
                    <div className="fs-5 text-muted fw-semibold">Suffix</div>
                    <div className="fs-4 fw-bold">{snakeToPascal(patientData.suffix)}</div>
                  </div>

                </div>

                <div className="row g-0 mb-7">

                  <div className="col-sm">
                    <div className="fs-5 text-muted fw-semibold">DOB</div>
                    <div className="fs-4 fw-bold">{formatDate(patientData.dob)}</div>
                  </div>

                  <div className="col-sm">
                    <div className="fs-5 text-muted fw-semibold">Gender</div>
                    <div className="fs-4 fw-bold">{snakeToPascal(patientData.gender)}</div>
                  </div>

                  <div className="col-sm">
                    <div className="fs-5 text-muted fw-semibold">Marital Status</div>
                    <div className="fs-4 fw-bold">{snakeToPascal(patientData.marital_status)}</div>
                  </div>

                  <div className="col-sm">
                    <div className="fs-5 text-muted fw-semibold">SSN</div>
                    <div className="fs-4 fw-bold">{patientData.ssn}</div>
                  </div>

                  <div className="col-sm">
                    <div className="fs-5 text-muted fw-semibold">Home Phone</div>
                    <div className="fs-4 fw-bold">{patientData.hphone}</div>
                  </div>

                </div>

                <div className="row g-0 mb-3">
                  <div className="col">
                    <div className="fs-5 text-muted fw-semibold">Work Phone</div>
                    <div className="fs-4 fw-bold">{patientData.wphone}</div>
                  </div>

                  <div className="col">
                    <div className="fs-5 text-muted fw-semibold">Mobile Number</div>
                    <div className="fs-4 fw-bold">{patientData.mobile}</div>
                  </div>

                  <div className="col">
                    <div className="fs-5 text-muted fw-semibold">Email</div>
                    <div className="fs-4 fw-bold">{patientData.email}</div>
                  </div>

                  <div className="col">
                    <div className="fs-5 text-muted fw-semibold">Address </div>
                    <div className="fs-4 fw-bold">{patientData.address}</div>
                  </div>

                  <div className="col">
                    <div className="fs-5 text-muted fw-semibold"> </div>
                    <div className="fs-4 fw-bold"></div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-12">
        <div className="card mb-3 mb-xl-5">
          <div className="card-header cursor-pointer">
            <div className="card-title m-0">
              <h3 className="fw-bold m-0">Other Information</h3>
            </div>
          </div>
          <div className='card-body'>
            <div className='row mb-5 me-4'>
              <div className="card-body p-3">
                <div className="row g-0 mb-7 ">
                  <div className="col mr-8">
                    <div className="fs-5 text-muted fw-semibold">Race</div>
                    <div className="d-flex align-items-center">
                      <div className="fs-4 fw-bold me-5">{snakeToPascal(patientData.race)}</div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="fs-5 text-muted fw-semibold">Ethnicity</div>
                    <div className="fs-4 fw-bold"> {snakeToPascal(patientData.ethnicity)}</div>
                  </div>
                  <div className="col">
                    <div className="fs-5 text-muted fw-semibold">Gender Identity</div>
                    <div className="fs-4 fw-bold">{snakeToPascal(patientData.gender_identity)}</div>
                  </div>
                  <div className="col">
                    <div className="fs-5 text-muted fw-semibold">Sexual Orientation</div>
                    <div className="fs-4 fw-bold"> {snakeToPascal(patientData.sexual_orientation)}</div>
                  </div>

                  <div className="col">
                    <div className="fs-5 text-muted fw-semibold">Preferred Language</div>
                    <div className="fs-4 fw-bold"> {snakeToPascal(patientData.language)}</div>
                  </div>
                </div>
                <div className="row g-0  ">
                  <div className="col mr-8">
                    <div className="fs-5 text-muted fw-semibold">Occupation</div>
                    <div className="d-flex align-items-center">
                      <div className="fs-4 fw-bold me-5">{patientData.occupation}</div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="fs-5 text-muted fw-semibold">Education</div>
                    <div className="fs-4 fw-bold">{patientData.education}</div>
                  </div>
                  <div className="col">
                    <div className="fs-5 text-muted fw-semibold">Facility Location</div>
                    <div className="fs-4 fw-bold"> {patientData.facility_name}</div>
                  </div>

                  <div className="col">
                    <div className="fs-5 text-muted fw-semibold"></div>
                    <div className="fs-4 fw-bold"></div>
                  </div>

                  <div className="col">
                    <div className="fs-5 text-muted fw-semibold"></div>
                    <div className="fs-4 fw-bold"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='col-xl-12'>
        <div className="card mb-5 mb-xl-10">
          <div className="card-header cursor-pointer">
            <div className="card-title m-0">
              <h3 className="fw-bold m-0">Remarks</h3>
            </div>
          </div>
          <div className='card-body'>
            <div className='row  me-4'>
              <div className="card-body p-3">
                <div className="row ">
                  <span className="fw-bold fs-4 text-gray-800"> {patientData.remarks}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailPatientData
