const UserLogsTab = () => {
  return (
    <>
      <div className='card pt-4 mb-6 mb-xl-9'>
        <div className='card-header border-0'>
          <div className='card-title'>
            <h2>Login Sessions</h2>
          </div>
          <div className='card-toolbar'>
            <button
              type='button'
              className='btn btn-sm btn-flex btn-light-primary'
              id='kt_modal_sign_out_sesions'
            >
              <i className='ki-duotone ki-entrance-right fs-3'>
                <span className='path1' />
                <span className='path2' />
              </i>
              Sign out all sessions
            </button>
          </div>
        </div>
        <div className='card-body pt-0 pb-5'>
          {/*begin::Table wrapper*/}
          <div className='table-responsive'>
            {/*begin::Table*/}
            <table
              className='table align-middle table-row-dashed gy-5'
              id='kt_table_users_login_session'
            >
              <thead className='border-bottom border-gray-200 fs-7 fw-bold'>
                <tr className='text-start text-muted text-uppercase gs-0'>
                  <th className='min-w-100px'>Location</th>
                  <th>Device</th>
                  <th>IP Address</th>
                  <th className='min-w-125px'>Time</th>
                  <th className='min-w-70px'>Actions</th>
                </tr>
              </thead>
              <tbody className='fs-6 fw-semibold text-gray-600'>
                <tr>
                  <td>Australia</td>
                  <td>Chome - Windows</td>
                  <td>207.19.14.285</td>
                  <td>23 seconds ago</td>
                  <td>Current session</td>
                </tr>
                <tr>
                  <td>Australia</td>
                  <td>Safari - iOS</td>
                  <td>207.29.44.357</td>
                  <td>3 days ago</td>
                  <td>
                    <a href='#' data-kt-users-sign-out='single_user'>
                      Sign out
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Australia</td>
                  <td>Chrome - Windows</td>
                  <td>207.22.25.398</td>
                  <td>last week</td>
                  <td>Expired</td>
                </tr>
              </tbody>
            </table>
            {/*end::Table*/}
          </div>
          {/*end::Table wrapper*/}
        </div>
        {/*end::Card body*/}
      </div>
      <div className='card pt-4 mb-6 mb-xl-9'>
        <div className='card-header border-0'>
          <div className='card-title'>
            <h2>Logs</h2>
          </div>
          <div className='card-toolbar'>
            <button type='button' className='btn btn-sm btn-light-primary'>
              <i className='ki-duotone ki-cloud-download fs-3'>
                <span className='path1' />
                <span className='path2' />
              </i>
              Download Report
            </button>
            {/*end::Button*/}
          </div>
          {/*end::Card toolbar*/}
        </div>
        {/*end::Card header*/}
        {/*begin::Card body*/}
        <div className='card-body py-0'>
          {/*begin::Table wrapper*/}
          <div className='table-responsive'>
            {/*begin::Table*/}
            <table
              className='table align-middle table-row-dashed fw-semibold text-gray-600 fs-6 gy-5'
              id='kt_table_users_logs'
            >
              <tbody>
                <tr>
                  <td className='min-w-70px'>
                    <div className='badge badge-light-success'>200 OK</div>
                  </td>
                  <td>POST /v1/invoices/in_7705_1223/payment</td>
                  <td className='pe-0 text-end min-w-200px'>15 Apr 2023, 10:30 am</td>
                </tr>
                <tr>
                  <td className='min-w-70px'>
                    <div className='badge badge-light-warning'>404 WRN</div>
                  </td>
                  <td>POST /v1/customer/c_64aace77185d4/not_found</td>
                  <td className='pe-0 text-end min-w-200px'>19 Aug 2023, 6:05 pm</td>
                </tr>
                <tr>
                  <td className='min-w-70px'>
                    <div className='badge badge-light-danger'>500 ERR</div>
                  </td>
                  <td>POST /v1/invoice/in_2457_2502/invalid</td>
                  <td className='pe-0 text-end min-w-200px'>10 Nov 2023, 11:30 am</td>
                </tr>
                <tr>
                  <td className='min-w-70px'>
                    <div className='badge badge-light-warning'>404 WRN</div>
                  </td>
                  <td>POST /v1/customer/c_64aace77185d4/not_found</td>
                  <td className='pe-0 text-end min-w-200px'>24 Jun 2023, 11:30 am</td>
                </tr>
                <tr>
                  <td className='min-w-70px'>
                    <div className='badge badge-light-success'>200 OK</div>
                  </td>
                  <td>POST /v1/invoices/in_7080_3399/payment</td>
                  <td className='pe-0 text-end min-w-200px'>25 Oct 2023, 11:05 am</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserLogsTab