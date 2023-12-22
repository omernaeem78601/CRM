import React from 'react'

const ViewUser = () => {
  return (
    <>
    {/*begin::Content*/}
    <div id="kt_app_content" className="app-content flex-column-fluid">
      {/*begin::Content container*/}
      <div id="kt_app_content_container" className="app-container container-xxl">
        {/*begin::Layout*/}
        <div className="d-flex flex-column flex-lg-row">
          {/*begin::Sidebar*/}
          <div className="flex-column flex-lg-row-auto w-lg-250px w-xl-350px mb-10">
            {/*begin::Card*/}
            <div className="card mb-5 mb-xl-8">
              {/*begin::Card body*/}
              <div className="card-body">
                {/*begin::Summary*/}
                {/*begin::User Info*/}
                <div className="d-flex flex-center flex-column py-5">
                  {/*begin::Avatar*/}
                  <div className="symbol symbol-100px symbol-circle mb-7">
                    <img src="assets/media/avatars/300-6.jpg" alt="image" />
                  </div>
                  {/*end::Avatar*/}
                  {/*begin::Name*/}
                  <a
                    href="#"
                    className="fs-3 text-gray-800 text-hover-primary fw-bold mb-3"
                  >
                    Emma Smith
                  </a>
                  {/*end::Name*/}
                  {/*begin::Position*/}
                  <div className="mb-9">
                    {/*begin::Badge*/}
                    <div className="badge badge-lg badge-light-primary d-inline">
                      Administrator
                    </div>
                    {/*begin::Badge*/}
                  </div>
                  {/*end::Position*/}
                  {/*begin::Info*/}
                  {/*begin::Info heading*/}
                  <div className="fw-bold mb-3">
                    Assigned Tickets
                    <span
                      className="ms-2"
                      ddata-bs-toggle="popover"
                      data-bs-trigger="hover"
                      data-bs-html="true"
                      data-bs-content="Number of support tickets assigned, closed and pending this week."
                    >
                      <i className="ki-duotone ki-information fs-7">
                        <span className="path1" />
                        <span className="path2" />
                        <span className="path3" />
                      </i>
                    </span>
                  </div>
                  {/*end::Info heading*/}
                  <div className="d-flex flex-wrap flex-center">
                    {/*begin::Stats*/}
                    <div className="border border-gray-300 border-dashed rounded py-3 px-3 mb-3">
                      <div className="fs-4 fw-bold text-gray-700">
                        <span className="w-75px">243</span>
                        <i className="ki-duotone ki-arrow-up fs-3 text-success">
                          <span className="path1" />
                          <span className="path2" />
                        </i>
                      </div>
                      <div className="fw-semibold text-muted">Total</div>
                    </div>
                    {/*end::Stats*/}
                    {/*begin::Stats*/}
                    <div className="border border-gray-300 border-dashed rounded py-3 px-3 mx-4 mb-3">
                      <div className="fs-4 fw-bold text-gray-700">
                        <span className="w-50px">56</span>
                        <i className="ki-duotone ki-arrow-down fs-3 text-danger">
                          <span className="path1" />
                          <span className="path2" />
                        </i>
                      </div>
                      <div className="fw-semibold text-muted">Solved</div>
                    </div>
                    {/*end::Stats*/}
                    {/*begin::Stats*/}
                    <div className="border border-gray-300 border-dashed rounded py-3 px-3 mb-3">
                      <div className="fs-4 fw-bold text-gray-700">
                        <span className="w-50px">188</span>
                        <i className="ki-duotone ki-arrow-up fs-3 text-success">
                          <span className="path1" />
                          <span className="path2" />
                        </i>
                      </div>
                      <div className="fw-semibold text-muted">Open</div>
                    </div>
                    {/*end::Stats*/}
                  </div>
                  {/*end::Info*/}
                </div>
                {/*end::User Info*/}
                {/*end::Summary*/}
                {/*begin::Details toggle*/}
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
                    <span className="ms-2 rotate-180">
                      <i className="ki-duotone ki-down fs-3" />
                    </span>
                  </div>
                  <span
                    data-bs-toggle="tooltip"
                    data-bs-trigger="hover"
                    title="Edit customer details"
                  >
                    <a
                      href="#"
                      className="btn btn-sm btn-light-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#kt_modal_update_details"
                    >
                      Edit
                    </a>
                  </span>
                </div>
                {/*end::Details toggle*/}
                <div className="separator" />
                {/*begin::Details content*/}
                <div id="kt_user_view_details" className="collapse show">
                  <div className="pb-5 fs-6">
                    {/*begin::Details item*/}
                    <div className="fw-bold mt-5">Account ID</div>
                    <div className="text-gray-600">ID-45453423</div>
                    {/*begin::Details item*/}
                    {/*begin::Details item*/}
                    <div className="fw-bold mt-5">Email</div>
                    <div className="text-gray-600">
                      <a href="#" className="text-gray-600 text-hover-primary">
                        info@keenthemes.com
                      </a>
                    </div>
                    {/*begin::Details item*/}
                    {/*begin::Details item*/}
                    <div className="fw-bold mt-5">Address</div>
                    <div className="text-gray-600">
                      101 Collin Street,
                      <br />
                      Melbourne 3000 VIC
                      <br />
                      Australia
                    </div>
                    {/*begin::Details item*/}
                    {/*begin::Details item*/}
                    <div className="fw-bold mt-5">Language</div>
                    <div className="text-gray-600">English</div>
                    {/*begin::Details item*/}
                    {/*begin::Details item*/}
                    <div className="fw-bold mt-5">Last Login</div>
                    <div className="text-gray-600">10 Nov 2023, 10:10 pm</div>
                    {/*begin::Details item*/}
                  </div>
                </div>
                {/*end::Details content*/}
              </div>
              {/*end::Card body*/}
            </div>
            {/*end::Card*/}
            {/*begin::Connected Accounts*/}
            <div className="card mb-5 mb-xl-8">
              {/*begin::Card header*/}
              <div className="card-header border-0">
                <div className="card-title">
                  <h3 className="fw-bold m-0">Connected Accounts</h3>
                </div>
              </div>
              {/*end::Card header*/}
              {/*begin::Card body*/}
              <div className="card-body pt-2">
                {/*begin::Notice*/}
                <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed mb-9 p-6">
                  {/*begin::Icon*/}
                  <i className="ki-duotone ki-design-1 fs-2tx text-primary me-4" />
                  {/*end::Icon*/}
                  {/*begin::Wrapper*/}
                  <div className="d-flex flex-stack flex-grow-1">
                    {/*begin::Content*/}
                    <div className="fw-semibold">
                      <div className="fs-6 text-gray-700">
                        By connecting an account, you hereby agree to our
                        <a href="#" className="me-1">
                          privacy policy
                        </a>
                        and
                        <a href="#">terms of use</a>.
                      </div>
                    </div>
                    {/*end::Content*/}
                  </div>
                  {/*end::Wrapper*/}
                </div>
                {/*end::Notice*/}
                {/*begin::Items*/}
                <div className="py-2">
                  {/*begin::Item*/}
                  <div className="d-flex flex-stack">
                    <div className="d-flex">
                      <img
                        src="assets/media/svg/brand-logos/google-icon.svg"
                        className="w-30px me-6"
                        alt=""
                      />
                      <div className="d-flex flex-column">
                        <a
                          href="#"
                          className="fs-5 text-dark text-hover-primary fw-bold"
                        >
                          Google
                        </a>
                        <div className="fs-6 fw-semibold text-muted">
                          Plan properly your workflow
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end">
                      {/*begin::Switch*/}
                      <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                        {/*begin::Input*/}
                        <input
                          className="form-check-input"
                          name="google"
                          type="checkbox"
                          defaultValue={1}
                          id="kt_modal_connected_accounts_google"
                          defaultChecked="checked"
                        />
                        {/*end::Input*/}
                        {/*begin::Label*/}
                        <span
                          className="form-check-label fw-semibold text-muted"
                          htmlFor="kt_modal_connected_accounts_google"
                        />
                        {/*end::Label*/}
                      </label>
                      {/*end::Switch*/}
                    </div>
                  </div>
                  {/*end::Item*/}
                  <div className="separator separator-dashed my-5" />
                  {/*begin::Item*/}
                  <div className="d-flex flex-stack">
                    <div className="d-flex">
                      <img
                        src="assets/media/svg/brand-logos/github.svg"
                        className="w-30px me-6"
                        alt=""
                      />
                      <div className="d-flex flex-column">
                        <a
                          href="#"
                          className="fs-5 text-dark text-hover-primary fw-bold"
                        >
                          Github
                        </a>
                        <div className="fs-6 fw-semibold text-muted">
                          Keep eye on on your Repositories
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end">
                      {/*begin::Switch*/}
                      <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                        {/*begin::Input*/}
                        <input
                          className="form-check-input"
                          name="github"
                          type="checkbox"
                          defaultValue={1}
                          id="kt_modal_connected_accounts_github"
                          defaultChecked="checked"
                        />
                        {/*end::Input*/}
                        {/*begin::Label*/}
                        <span
                          className="form-check-label fw-semibold text-muted"
                          htmlFor="kt_modal_connected_accounts_github"
                        />
                        {/*end::Label*/}
                      </label>
                      {/*end::Switch*/}
                    </div>
                  </div>
                  {/*end::Item*/}
                  <div className="separator separator-dashed my-5" />
                  {/*begin::Item*/}
                  <div className="d-flex flex-stack">
                    <div className="d-flex">
                      <img
                        src="assets/media/svg/brand-logos/slack-icon.svg"
                        className="w-30px me-6"
                        alt=""
                      />
                      <div className="d-flex flex-column">
                        <a
                          href="#"
                          className="fs-5 text-dark text-hover-primary fw-bold"
                        >
                          Slack
                        </a>
                        <div className="fs-6 fw-semibold text-muted">
                          Integrate Projects Discussions
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end">
                      {/*begin::Switch*/}
                      <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                        {/*begin::Input*/}
                        <input
                          className="form-check-input"
                          name="slack"
                          type="checkbox"
                          defaultValue={1}
                          id="kt_modal_connected_accounts_slack"
                        />
                        {/*end::Input*/}
                        {/*begin::Label*/}
                        <span
                          className="form-check-label fw-semibold text-muted"
                          htmlFor="kt_modal_connected_accounts_slack"
                        />
                        {/*end::Label*/}
                      </label>
                      {/*end::Switch*/}
                    </div>
                  </div>
                  {/*end::Item*/}
                </div>
                {/*end::Items*/}
              </div>
              {/*end::Card body*/}
              {/*begin::Card footer*/}
              <div className="card-footer border-0 d-flex justify-content-center pt-0">
                <button className="btn btn-sm btn-light-primary">
                  Save Changes
                </button>
              </div>
              {/*end::Card footer*/}
            </div>
            {/*end::Connected Accounts*/}
          </div>
          {/*end::Sidebar*/}
          {/*begin::Content*/}
          <div className="flex-lg-row-fluid ms-lg-15">
            {/*begin:::Tabs*/}
            <ul className="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-semibold mb-8">
              {/*begin:::Tab item*/}
              <li className="nav-item">
                <a
                  className="nav-link text-active-primary pb-4 active"
                  data-bs-toggle="tab"
                  href="#kt_user_view_overview_tab"
                >
                  Overview
                </a>
              </li>
              {/*end:::Tab item*/}
              {/*begin:::Tab item*/}
              <li className="nav-item">
                <a
                  className="nav-link text-active-primary pb-4"
                  data-kt-countup-tabs="true"
                  data-bs-toggle="tab"
                  href="#kt_user_view_overview_security"
                >
                  Security
                </a>
              </li>
              {/*end:::Tab item*/}
              {/*begin:::Tab item*/}
              <li className="nav-item">
                <a
                  className="nav-link text-active-primary pb-4"
                  data-bs-toggle="tab"
                  href="#kt_user_view_overview_events_and_logs_tab"
                >
                  Events &amp; Logs
                </a>
              </li>
              {/*end:::Tab item*/}
              {/*begin:::Tab item*/}
              <li className="nav-item ms-auto">
                {/*begin::Action menu*/}
                <a
                  href="#"
                  className="btn btn-primary ps-7"
                  data-kt-menu-trigger="click"
                  data-kt-menu-attach="parent"
                  data-kt-menu-placement="bottom-end"
                >
                  Actions
                  <i className="ki-duotone ki-down fs-2 me-0" />
                </a>
                {/*begin::Menu*/}
                <div
                  className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold py-4 w-250px fs-6"
                  data-kt-menu="true"
                >
                  {/*begin::Menu item*/}
                  <div className="menu-item px-5">
                    <div className="menu-content text-muted pb-2 px-5 fs-7 text-uppercase">
                      Payments
                    </div>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-5">
                    <a href="#" className="menu-link px-5">
                      Create invoice
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-5">
                    <a href="#" className="menu-link flex-stack px-5">
                      Create payments
                      <span
                        className="ms-2"
                        data-bs-toggle="tooltip"
                        title="Specify a target name for future usage and reference"
                      >
                        <i className="ki-duotone ki-information fs-7">
                          <span className="path1" />
                          <span className="path2" />
                          <span className="path3" />
                        </i>
                      </span>
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div
                    className="menu-item px-5"
                    data-kt-menu-trigger="hover"
                    data-kt-menu-placement="left-start"
                  >
                    <a href="#" className="menu-link px-5">
                      <span className="menu-title">Subscription</span>
                      <span className="menu-arrow" />
                    </a>
                    {/*begin::Menu sub*/}
                    <div className="menu-sub menu-sub-dropdown w-175px py-4">
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-5">
                          Apps
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-5">
                          Billing
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-5">
                          Statements
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu separator*/}
                      <div className="separator my-2" />
                      {/*end::Menu separator*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <div className="menu-content px-3">
                          <label className="form-check form-switch form-check-custom form-check-solid">
                            <input
                              className="form-check-input w-30px h-20px"
                              type="checkbox"
                              defaultValue=""
                              name="notifications"
                              defaultChecked="checked"
                              id="kt_user_menu_notifications"
                            />
                            <span
                              className="form-check-label text-muted fs-6"
                              htmlFor="kt_user_menu_notifications"
                            >
                              Notifications
                            </span>
                          </label>
                        </div>
                      </div>
                      {/*end::Menu item*/}
                    </div>
                    {/*end::Menu sub*/}
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu separator*/}
                  <div className="separator my-3" />
                  {/*end::Menu separator*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-5">
                    <div className="menu-content text-muted pb-2 px-5 fs-7 text-uppercase">
                      Account
                    </div>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-5">
                    <a href="#" className="menu-link px-5">
                      Reports
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-5 my-1">
                    <a href="#" className="menu-link px-5">
                      Account Settings
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-5">
                    <a href="#" className="menu-link text-danger px-5">
                      Delete customer
                    </a>
                  </div>
                  {/*end::Menu item*/}
                </div>
                {/*end::Menu*/}
                {/*end::Menu*/}
              </li>
              {/*end:::Tab item*/}
            </ul>
            {/*end:::Tabs*/}
            {/*begin:::Tab content*/}
            <div className="tab-content" id="myTabContent">
              {/*begin:::Tab pane*/}
              <div
                className="tab-pane fade show active"
                id="kt_user_view_overview_tab"
                role="tabpanel"
              >
                {/*begin::Card*/}
                <div className="card card-flush mb-6 mb-xl-9">
                  {/*begin::Card header*/}
                  <div className="card-header mt-6">
                    {/*begin::Card title*/}
                    <div className="card-title flex-column">
                      <h2 className="mb-1">User's Schedule</h2>
                      <div className="fs-6 fw-semibold text-muted">
                        2 upcoming meetings
                      </div>
                    </div>
                    {/*end::Card title*/}
                    {/*begin::Card toolbar*/}
                    <div className="card-toolbar">
                      <button
                        type="button"
                        className="btn btn-light-primary btn-sm"
                        data-bs-toggle="modal"
                        data-bs-target="#kt_modal_add_schedule"
                      >
                        <i className="ki-duotone ki-brush fs-3">
                          <span className="path1" />
                          <span className="path2" />
                        </i>
                        Add Schedule
                      </button>
                    </div>
                    {/*end::Card toolbar*/}
                  </div>
                  {/*end::Card header*/}
                  {/*begin::Card body*/}
                  <div className="card-body p-9 pt-4">
                    {/*begin::Dates*/}
                    <ul className="nav nav-pills d-flex flex-nowrap hover-scroll-x py-2">
                      {/*begin::Date*/}
                      <li className="nav-item me-1">
                        <a
                          className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-40px me-2 py-4 btn-active-primary"
                          data-bs-toggle="tab"
                          href="#kt_schedule_day_0"
                        >
                          <span className="opacity-50 fs-7 fw-semibold">Su</span>
                          <span className="fs-6 fw-bolder">21</span>
                        </a>
                      </li>
                      {/*end::Date*/}
                      {/*begin::Date*/}
                      <li className="nav-item me-1">
                        <a
                          className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-40px me-2 py-4 btn-active-primary active"
                          data-bs-toggle="tab"
                          href="#kt_schedule_day_1"
                        >
                          <span className="opacity-50 fs-7 fw-semibold">Mo</span>
                          <span className="fs-6 fw-bolder">22</span>
                        </a>
                      </li>
                      {/*end::Date*/}
                      {/*begin::Date*/}
                      <li className="nav-item me-1">
                        <a
                          className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-40px me-2 py-4 btn-active-primary"
                          data-bs-toggle="tab"
                          href="#kt_schedule_day_2"
                        >
                          <span className="opacity-50 fs-7 fw-semibold">Tu</span>
                          <span className="fs-6 fw-bolder">23</span>
                        </a>
                      </li>
                      {/*end::Date*/}
                      {/*begin::Date*/}
                      <li className="nav-item me-1">
                        <a
                          className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-40px me-2 py-4 btn-active-primary"
                          data-bs-toggle="tab"
                          href="#kt_schedule_day_3"
                        >
                          <span className="opacity-50 fs-7 fw-semibold">We</span>
                          <span className="fs-6 fw-bolder">24</span>
                        </a>
                      </li>
                      {/*end::Date*/}
                      {/*begin::Date*/}
                      <li className="nav-item me-1">
                        <a
                          className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-40px me-2 py-4 btn-active-primary"
                          data-bs-toggle="tab"
                          href="#kt_schedule_day_4"
                        >
                          <span className="opacity-50 fs-7 fw-semibold">Th</span>
                          <span className="fs-6 fw-bolder">25</span>
                        </a>
                      </li>
                      {/*end::Date*/}
                      {/*begin::Date*/}
                      <li className="nav-item me-1">
                        <a
                          className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-40px me-2 py-4 btn-active-primary"
                          data-bs-toggle="tab"
                          href="#kt_schedule_day_5"
                        >
                          <span className="opacity-50 fs-7 fw-semibold">Fr</span>
                          <span className="fs-6 fw-bolder">26</span>
                        </a>
                      </li>
                      {/*end::Date*/}
                      {/*begin::Date*/}
                      <li className="nav-item me-1">
                        <a
                          className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-40px me-2 py-4 btn-active-primary"
                          data-bs-toggle="tab"
                          href="#kt_schedule_day_6"
                        >
                          <span className="opacity-50 fs-7 fw-semibold">Sa</span>
                          <span className="fs-6 fw-bolder">27</span>
                        </a>
                      </li>
                      {/*end::Date*/}
                      {/*begin::Date*/}
                      <li className="nav-item me-1">
                        <a
                          className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-40px me-2 py-4 btn-active-primary"
                          data-bs-toggle="tab"
                          href="#kt_schedule_day_7"
                        >
                          <span className="opacity-50 fs-7 fw-semibold">Su</span>
                          <span className="fs-6 fw-bolder">28</span>
                        </a>
                      </li>
                      {/*end::Date*/}
                      {/*begin::Date*/}
                      <li className="nav-item me-1">
                        <a
                          className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-40px me-2 py-4 btn-active-primary"
                          data-bs-toggle="tab"
                          href="#kt_schedule_day_8"
                        >
                          <span className="opacity-50 fs-7 fw-semibold">Mo</span>
                          <span className="fs-6 fw-bolder">29</span>
                        </a>
                      </li>
                      {/*end::Date*/}
                      {/*begin::Date*/}
                      <li className="nav-item me-1">
                        <a
                          className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-40px me-2 py-4 btn-active-primary"
                          data-bs-toggle="tab"
                          href="#kt_schedule_day_9"
                        >
                          <span className="opacity-50 fs-7 fw-semibold">Tu</span>
                          <span className="fs-6 fw-bolder">30</span>
                        </a>
                      </li>
                      {/*end::Date*/}
                      {/*begin::Date*/}
                      <li className="nav-item me-1">
                        <a
                          className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-40px me-2 py-4 btn-active-primary"
                          data-bs-toggle="tab"
                          href="#kt_schedule_day_10"
                        >
                          <span className="opacity-50 fs-7 fw-semibold">We</span>
                          <span className="fs-6 fw-bolder">31</span>
                        </a>
                      </li>
                      {/*end::Date*/}
                    </ul>
                    {/*end::Dates*/}
                    {/*begin::Tab Content*/}
                    <div className="tab-content">
                      {/*begin::Day*/}
                      <div id="kt_schedule_day_0" className="tab-pane fade show">
                        {/*begin::Time*/}
                        <div className="d-flex flex-stack position-relative mt-6">
                          {/*begin::Bar*/}
                          <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                          {/*end::Bar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold ms-5">
                            {/*begin::Time*/}
                            <div className="fs-7 mb-1">
                              11:00 - 11:45
                              <span className="fs-7 text-muted text-uppercase">
                                am
                              </span>
                            </div>
                            {/*end::Time*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="fs-5 fw-bold text-dark text-hover-primary mb-2"
                            >
                              9 Degree Project Estimation Meeting
                            </a>
                            {/*end::Title*/}
                            {/*begin::User*/}
                            <div className="fs-7 text-muted">
                              Lead by
                              <a href="#">Walter White</a>
                            </div>
                            {/*end::User*/}
                          </div>
                          {/*end::Info*/}
                          {/*begin::Action*/}
                          <a
                            href="#"
                            className="btn btn-light bnt-active-light-primary btn-sm"
                          >
                            View
                          </a>
                          {/*end::Action*/}
                        </div>
                        {/*end::Time*/}
                        {/*begin::Time*/}
                        <div className="d-flex flex-stack position-relative mt-6">
                          {/*begin::Bar*/}
                          <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                          {/*end::Bar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold ms-5">
                            {/*begin::Time*/}
                            <div className="fs-7 mb-1">
                              9:00 - 10:00
                              <span className="fs-7 text-muted text-uppercase">
                                am
                              </span>
                            </div>
                            {/*end::Time*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="fs-5 fw-bold text-dark text-hover-primary mb-2"
                            >
                              Team Backlog Grooming Session
                            </a>
                            {/*end::Title*/}
                            {/*begin::User*/}
                            <div className="fs-7 text-muted">
                              Lead by
                              <a href="#">Terry Robins</a>
                            </div>
                            {/*end::User*/}
                          </div>
                          {/*end::Info*/}
                          {/*begin::Action*/}
                          <a
                            href="#"
                            className="btn btn-light bnt-active-light-primary btn-sm"
                          >
                            View
                          </a>
                          {/*end::Action*/}
                        </div>
                        {/*end::Time*/}
                        {/*begin::Time*/}
                        <div className="d-flex flex-stack position-relative mt-6">
                          {/*begin::Bar*/}
                          <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                          {/*end::Bar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold ms-5">
                            {/*begin::Time*/}
                            <div className="fs-7 mb-1">
                              9:00 - 10:00
                              <span className="fs-7 text-muted text-uppercase">
                                am
                              </span>
                            </div>
                            {/*end::Time*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="fs-5 fw-bold text-dark text-hover-primary mb-2"
                            >
                              Sales Pitch Proposal
                            </a>
                            {/*end::Title*/}
                            {/*begin::User*/}
                            <div className="fs-7 text-muted">
                              Lead by
                              <a href="#">Sean Bean</a>
                            </div>
                            {/*end::User*/}
                          </div>
                          {/*end::Info*/}
                          {/*begin::Action*/}
                          <a
                            href="#"
                            className="btn btn-light bnt-active-light-primary btn-sm"
                          >
                            View
                          </a>
                          {/*end::Action*/}
                        </div>
                        {/*end::Time*/}
                      </div>
                      {/*end::Day*/}
                      {/*begin::Day*/}
                      <div
                        id="kt_schedule_day_1"
                        className="tab-pane fade show active"
                      >
                        {/*begin::Time*/}
                        <div className="d-flex flex-stack position-relative mt-6">
                          {/*begin::Bar*/}
                          <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                          {/*end::Bar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold ms-5">
                            {/*begin::Time*/}
                            <div className="fs-7 mb-1">
                              14:30 - 15:30
                              <span className="fs-7 text-muted text-uppercase">
                                pm
                              </span>
                            </div>
                            {/*end::Time*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="fs-5 fw-bold text-dark text-hover-primary mb-2"
                            >
                              Project Review &amp; Testing
                            </a>
                            {/*end::Title*/}
                            {/*begin::User*/}
                            <div className="fs-7 text-muted">
                              Lead by
                              <a href="#">Peter Marcus</a>
                            </div>
                            {/*end::User*/}
                          </div>
                          {/*end::Info*/}
                          {/*begin::Action*/}
                          <a
                            href="#"
                            className="btn btn-light bnt-active-light-primary btn-sm"
                          >
                            View
                          </a>
                          {/*end::Action*/}
                        </div>
                        {/*end::Time*/}
                        {/*begin::Time*/}
                        <div className="d-flex flex-stack position-relative mt-6">
                          {/*begin::Bar*/}
                          <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                          {/*end::Bar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold ms-5">
                            {/*begin::Time*/}
                            <div className="fs-7 mb-1">
                              9:00 - 10:00
                              <span className="fs-7 text-muted text-uppercase">
                                am
                              </span>
                            </div>
                            {/*end::Time*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="fs-5 fw-bold text-dark text-hover-primary mb-2"
                            >
                              Lunch &amp; Learn Catch Up
                            </a>
                            {/*end::Title*/}
                            {/*begin::User*/}
                            <div className="fs-7 text-muted">
                              Lead by
                              <a href="#">David Stevenson</a>
                            </div>
                            {/*end::User*/}
                          </div>
                          {/*end::Info*/}
                          {/*begin::Action*/}
                          <a
                            href="#"
                            className="btn btn-light bnt-active-light-primary btn-sm"
                          >
                            View
                          </a>
                          {/*end::Action*/}
                        </div>
                        {/*end::Time*/}
                        {/*begin::Time*/}
                        <div className="d-flex flex-stack position-relative mt-6">
                          {/*begin::Bar*/}
                          <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                          {/*end::Bar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold ms-5">
                            {/*begin::Time*/}
                            <div className="fs-7 mb-1">
                              10:00 - 11:00
                              <span className="fs-7 text-muted text-uppercase">
                                am
                              </span>
                            </div>
                            {/*end::Time*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="fs-5 fw-bold text-dark text-hover-primary mb-2"
                            >
                              9 Degree Project Estimation Meeting
                            </a>
                            {/*end::Title*/}
                            {/*begin::User*/}
                            <div className="fs-7 text-muted">
                              Lead by
                              <a href="#">Bob Harris</a>
                            </div>
                            {/*end::User*/}
                          </div>
                          {/*end::Info*/}
                          {/*begin::Action*/}
                          <a
                            href="#"
                            className="btn btn-light bnt-active-light-primary btn-sm"
                          >
                            View
                          </a>
                          {/*end::Action*/}
                        </div>
                        {/*end::Time*/}
                        {/*begin::Time*/}
                        <div className="d-flex flex-stack position-relative mt-6">
                          {/*begin::Bar*/}
                          <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                          {/*end::Bar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold ms-5">
                            {/*begin::Time*/}
                            <div className="fs-7 mb-1">
                              16:30 - 17:30
                              <span className="fs-7 text-muted text-uppercase">
                                pm
                              </span>
                            </div>
                            {/*end::Time*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="fs-5 fw-bold text-dark text-hover-primary mb-2"
                            >
                              Weekly Team Stand-Up
                            </a>
                            {/*end::Title*/}
                            {/*begin::User*/}
                            <div className="fs-7 text-muted">
                              Lead by
                              <a href="#">Michael Walters</a>
                            </div>
                            {/*end::User*/}
                          </div>
                          {/*end::Info*/}
                          {/*begin::Action*/}
                          <a
                            href="#"
                            className="btn btn-light bnt-active-light-primary btn-sm"
                          >
                            View
                          </a>
                          {/*end::Action*/}
                        </div>
                        {/*end::Time*/}
                        {/*begin::Time*/}
                        <div className="d-flex flex-stack position-relative mt-6">
                          {/*begin::Bar*/}
                          <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                          {/*end::Bar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold ms-5">
                            {/*begin::Time*/}
                            <div className="fs-7 mb-1">
                              9:00 - 10:00
                              <span className="fs-7 text-muted text-uppercase">
                                am
                              </span>
                            </div>
                            {/*end::Time*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="fs-5 fw-bold text-dark text-hover-primary mb-2"
                            >
                              Lunch &amp; Learn Catch Up
                            </a>
                            {/*end::Title*/}
                            {/*begin::User*/}
                            <div className="fs-7 text-muted">
                              Lead by
                              <a href="#">Bob Harris</a>
                            </div>
                            {/*end::User*/}
                          </div>
                          {/*end::Info*/}
                          {/*begin::Action*/}
                          <a
                            href="#"
                            className="btn btn-light bnt-active-light-primary btn-sm"
                          >
                            View
                          </a>
                          {/*end::Action*/}
                        </div>
                        {/*end::Time*/}
                      </div>
                      {/*end::Day*/}
                      {/*begin::Day*/}
                      <div id="kt_schedule_day_2" className="tab-pane fade show">
                        {/*begin::Time*/}
                        <div className="d-flex flex-stack position-relative mt-6">
                          {/*begin::Bar*/}
                          <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                          {/*end::Bar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold ms-5">
                            {/*begin::Time*/}
                            <div className="fs-7 mb-1">
                              16:30 - 17:30
                              <span className="fs-7 text-muted text-uppercase">
                                pm
                              </span>
                            </div>
                            {/*end::Time*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="fs-5 fw-bold text-dark text-hover-primary mb-2"
                            >
                              9 Degree Project Estimation Meeting
                            </a>
                            {/*end::Title*/}
                            {/*begin::User*/}
                            <div className="fs-7 text-muted">
                              Lead by
                              <a href="#">Kendell Trevor</a>
                            </div>
                            {/*end::User*/}
                          </div>
                          {/*end::Info*/}
                          {/*begin::Action*/}
                          <a
                            href="#"
                            className="btn btn-light bnt-active-light-primary btn-sm"
                          >
                            View
                          </a>
                          {/*end::Action*/}
                        </div>
                        {/*end::Time*/}
                        {/*begin::Time*/}
                        <div className="d-flex flex-stack position-relative mt-6">
                          {/*begin::Bar*/}
                          <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                          {/*end::Bar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold ms-5">
                            {/*begin::Time*/}
                            <div className="fs-7 mb-1">
                              9:00 - 10:00
                              <span className="fs-7 text-muted text-uppercase">
                                am
                              </span>
                            </div>
                            {/*end::Time*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="fs-5 fw-bold text-dark text-hover-primary mb-2"
                            >
                              Creative Content Initiative
                            </a>
                            {/*end::Title*/}
                            {/*begin::User*/}
                            <div className="fs-7 text-muted">
                              Lead by
                              <a href="#">Caleb Donaldson</a>
                            </div>
                            {/*end::User*/}
                          </div>
                          {/*end::Info*/}
                          {/*begin::Action*/}
                          <a
                            href="#"
                            className="btn btn-light bnt-active-light-primary btn-sm"
                          >
                            View
                          </a>
                          {/*end::Action*/}
                        </div>
                        {/*end::Time*/}
                        {/*begin::Time*/}
                        <div className="d-flex flex-stack position-relative mt-6">
                          {/*begin::Bar*/}
                          <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                          {/*end::Bar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold ms-5">
                            {/*begin::Time*/}
                            <div className="fs-7 mb-1">
                              11:00 - 11:45
                              <span className="fs-7 text-muted text-uppercase">
                                am
                              </span>
                            </div>
                            {/*end::Time*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="fs-5 fw-bold text-dark text-hover-primary mb-2"
                            >
                              Development Team Capacity Review
                            </a>
                            {/*end::Title*/}
                            {/*begin::User*/}
                            <div className="fs-7 text-muted">
                              Lead by
                              <a href="#">Kendell Trevor</a>
                            </div>
                            {/*end::User*/}
                          </div>
                          {/*end::Info*/}
                          {/*begin::Action*/}
                          <a
                            href="#"
                            className="btn btn-light bnt-active-light-primary btn-sm"
                          >
                            View
                          </a>
                          {/*end::Action*/}
                        </div>
                        {/*end::Time*/}
                        {/*begin::Time*/}
                        <div className="d-flex flex-stack position-relative mt-6">
                          {/*begin::Bar*/}
                          <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                          {/*end::Bar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold ms-5">
                            {/*begin::Time*/}
                            <div className="fs-7 mb-1">
                              9:00 - 10:00
                              <span className="fs-7 text-muted text-uppercase">
                                am
                              </span>
                            </div>
                            {/*end::Time*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="fs-5 fw-bold text-dark text-hover-primary mb-2"
                            >
                              Weekly Team Stand-Up
                            </a>
                            {/*end::Title*/}
                            {/*begin::User*/}
                            <div className="fs-7 text-muted">
                              Lead by
                              <a href="#">Sean Bean</a>
                            </div>
                            {/*end::User*/}
                          </div>
                          {/*end::Info*/}
                          {/*begin::Action*/}
                          <a
                            href="#"
                            className="btn btn-light bnt-active-light-primary btn-sm"
                          >
                            View
                          </a>
                          {/*end::Action*/}
                        </div>
                        {/*end::Time*/}
                      </div>
                      {/*end::Day*/}
                      {/*begin::Day*/}
                      <div id="kt_schedule_day_3" className="tab-pane fade show">
                        {/*begin::Time*/}
                        <div className="d-flex flex-stack position-relative mt-6">
                          {/*begin::Bar*/}
                          <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                          {/*end::Bar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold ms-5">
                            {/*begin::Time*/}
                            <div className="fs-7 mb-1">
                              12:00 - 13:00
                              <span className="fs-7 text-muted text-uppercase">
                                pm
                              </span>
                            </div>
                            {/*end::Time*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="fs-5 fw-bold text-dark text-hover-primary mb-2"
                            >
                              Marketing Campaign Discussion
                            </a>
                            {/*end::Title*/}
                            {/*begin::User*/}
                            <div className="fs-7 text-muted">
                              Lead by
                              <a href="#">Walter White</a>
                            </div>
                            {/*end::User*/}
                          </div>
                          {/*end::Info*/}
                          {/*begin::Action*/}
                          <a
                            href="#"
                            className="btn btn-light bnt-active-light-primary btn-sm"
                          >
                            View
                          </a>
                          {/*end::Action*/}
                        </div>
                        {/*end::Time*/}
                        {/*begin::Time*/}
                        <div className="d-flex flex-stack position-relative mt-6">
                          {/*begin::Bar*/}
                          <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                          {/*end::Bar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold ms-5">
                            {/*begin::Time*/}
                            <div className="fs-7 mb-1">
                              9:00 - 10:00
                              <span className="fs-7 text-muted text-uppercase">
                                am
                              </span>
                            </div>
                            {/*end::Time*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="fs-5 fw-bold text-dark text-hover-primary mb-2"
                            >
                              Lunch &amp; Learn Catch Up
                            </a>
                            {/*end::Title*/}
                            {/*begin::User*/}
                            <div className="fs-7 text-muted">
                              Lead by
                              <a href="#">David Stevenson</a>
                            </div>
                            {/*end::User*/}
                          </div>
                          {/*end::Info*/}
                          {/*begin::Action*/}
                          <a
                            href="#"
                            className="btn btn-light bnt-active-light-primary btn-sm"
                          >
                            View
                          </a>
                          {/*end::Action*/}
                        </div>
                        {/*end::Time*/}
                        {/*begin::Time*/}
                        <div className="d-flex flex-stack position-relative mt-6">
                          {/*begin::Bar*/}
                          <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                          {/*end::Bar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold ms-5">
                            {/*begin::Time*/}
                            <div className="fs-7 mb-1">
                              9:00 - 10:00
                              <span className="fs-7 text-muted text-uppercase">
                                am
                              </span>
                            </div>
                            {/*end::Time*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="fs-5 fw-bold text-dark text-hover-primary mb-2"
                            >
                              Dashboard UI/UX Design Review
                            </a>
                            {/*end::Title*/}
                            {/*begin::User*/}
                            <div className="fs-7 text-muted">
                              Lead by
                              <a href="#">Michael Walters</a>
                            </div>
                            {/*end::User*/}
                          </div>
                          {/*end::Info*/}
                          {/*begin::Action*/}
                          <a
                            href="#"
                            className="btn btn-light bnt-active-light-primary btn-sm"
                          >
                            View
                          </a>
                          {/*end::Action*/}
                        </div>
                        {/*end::Time*/}
                        {/*begin::Time*/}
                        <div className="d-flex flex-stack position-relative mt-6">
                          {/*begin::Bar*/}
                          <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                          {/*end::Bar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold ms-5">
                            {/*begin::Time*/}
                            <div className="fs-7 mb-1">
                              16:30 - 17:30
                              <span className="fs-7 text-muted text-uppercase">
                                pm
                              </span>
                            </div>
                            {/*end::Time*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="fs-5 fw-bold text-dark text-hover-primary mb-2"
                            >
                              Lunch &amp; Learn Catch Up
                            </a>
                            {/*end::Title*/}
                            {/*begin::User*/}
                            <div className="fs-7 text-muted">
                              Lead by
                              <a href="#">Caleb Donaldson</a>
                            </div>
                            {/*end::User*/}
                          </div>
                          {/*end::Info*/}
                          {/*begin::Action*/}
                          <a
                            href="#"
                            className="btn btn-light bnt-active-light-primary btn-sm"
                          >
                            View
                          </a>
                          {/*end::Action*/}
                        </div>
                        {/*end::Time*/}
                        {/*begin::Time*/}
                        <div className="d-flex flex-stack position-relative mt-6">
                          {/*begin::Bar*/}
                          <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                          {/*end::Bar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold ms-5">
                            {/*begin::Time*/}
                            <div className="fs-7 mb-1">
                              13:00 - 14:00
                              <span className="fs-7 text-muted text-uppercase">
                                pm
                              </span>
                            </div>
                            {/*end::Time*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="fs-5 fw-bold text-dark text-hover-primary mb-2"
                            >
                              Committee Review Approvals
                            </a>
                            {/*end::Title*/}
                            {/*begin::User*/}
                            <div className="fs-7 text-muted">
                              Lead by
                              <a href="#">Peter Marcus</a>
                            </div>
                            {/*end::User*/}
                          </div>
                          {/*end::Info*/}
                          {/*begin::Action*/}
                          <a
                            href="#"
                            className="btn btn-light bnt-active-light-primary btn-sm"
                          >
                            View
                          </a>
                          {/*end::Action*/}
                        </div>
                        {/*end::Time*/}
                      </div>
                      {/*end::Day*/}
                      {/*begin::Day*/}
                      <div id="kt_schedule_day_4" className="tab-pane fade show">
                        {/*begin::Time*/}
                        <div className="d-flex flex-stack position-relative mt-6">
                          {/*begin::Bar*/}
                          <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                          {/*end::Bar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold ms-5">
                            {/*begin::Time*/}
                            <div className="fs-7 mb-1">
                              9:00 - 10:00
                              <span className="fs-7 text-muted text-uppercase">
                                am
                              </span>
                            </div>
                            {/*end::Time*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="fs-5 fw-bold text-dark text-hover-primary mb-2"
                            >
                              Weekly Team Stand-Up
                            </a>
                            {/*end::Title*/}
                            {/*begin::User*/}
                            <div className="fs-7 text-muted">
                              Lead by
                              <a href="#">Bob Harris</a>
                            </div>
                            {/*end::User*/}
                          </div>
                          {/*end::Info*/}
                          {/*begin::Action*/}
                          <a
                            href="#"
                            className="btn btn-light bnt-active-light-primary btn-sm"
                          >
                            View
                          </a>
                          {/*end::Action*/}
                        </div>
                        {/*end::Time*/}
                        {/*begin::Time*/}
                        <div className="d-flex flex-stack position-relative mt-6">
                          {/*begin::Bar*/}
                          <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                          {/*end::Bar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold ms-5">
                            {/*begin::Time*/}
                            <div className="fs-7 mb-1">
                              11:00 - 11:45
                              <span className="fs-7 text-muted text-uppercase">
                                am
                              </span>
                            </div>
                            {/*end::Time*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="fs-5 fw-bold text-dark text-hover-primary mb-2"
                            >
                              9 Degree Project Estimation Meeting
                            </a>
                            {/*end::Title*/}
                            {/*begin::User*/}
                            <div className="fs-7 text-muted">
                              Lead by
                              <a href="#">Bob Harris</a>
                            </div>
                            {/*end::User*/}
                          </div>
                          {/*end::Info*/}
                          {/*begin::Action*/}
                          <a
                            href="#"
                            className="btn btn-light bnt-active-light-primary btn-sm"
                          >
                            View
                          </a>
                          {/*end::Action*/}
                        </div>
                        {/*end::Time*/}
                        {/*begin::Time*/}
                        <div className="d-flex flex-stack position-relative mt-6">
                          {/*begin::Bar*/}
                          <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                          {/*end::Bar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold ms-5">
                            {/*begin::Time*/}
                            <div className="fs-7 mb-1">
                              14:30 - 15:30
                              <span className="fs-7 text-muted text-uppercase">
                                pm
                              </span>
                            </div>
                            {/*end::Time*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="fs-5 fw-bold text-dark text-hover-primary mb-2"
                            >
                              Committee Review Approvals
                            </a>
                            {/*end::Title*/}
                            {/*begin::User*/}
                            <div className="fs-7 text-muted">
                              Lead by
                              <a href="#">Terry Robins</a>
                            </div>
                            {/*end::User*/}
                          </div>
                          {/*end::Info*/}
                          {/*begin::Action*/}
                          <a
                            href="#"
                            className="btn btn-light bnt-active-light-primary btn-sm"
                          >
                            View
                          </a>
                          {/*end::Action*/}
                        </div>
                        {/*end::Time*/}
                        {/*begin::Time*/}
                        <div className="d-flex flex-stack position-relative mt-6">
                          {/*begin::Bar*/}
                          <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                          {/*end::Bar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold ms-5">
                            {/*begin::Time*/}
                            <div className="fs-7 mb-1">
                              13:00 - 14:00
                              <span className="fs-7 text-muted text-uppercase">
                                pm
                              </span>
                            </div>
                            {/*end::Time*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="fs-5 fw-bold text-dark text-hover-primary mb-2"
                            >
                              Development Team Capacity Review
                            </a>
                            {/*end::Title*/}
                            {/*begin::User*/}
                            <div className="fs-7 text-muted">
                              Lead by
                              <a href="#">Mark Randall</a>
                            </div>
                            {/*end::User*/}
                          </div>
                          {/*end::Info*/}
                          {/*begin::Action*/}
                          <a
                            href="#"
                            className="btn btn-light bnt-active-light-primary btn-sm"
                          >
                            View
                          </a>
                          {/*end::Action*/}
                        </div>
                        {/*end::Time*/}
                      </div>
                      {/*end::Day*/}
                      {/*begin::Day*/}
                      <div id="kt_schedule_day_5" className="tab-pane fade show">
                        {/*begin::Time*/}
                        <div className="d-flex flex-stack position-relative mt-6">
                          {/*begin::Bar*/}
                          <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                          {/*end::Bar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold ms-5">
                            {/*begin::Time*/}
                            <div className="fs-7 mb-1">
                              11:00 - 11:45
                              <span className="fs-7 text-muted text-uppercase">
                                am
                              </span>
                            </div>
                            {/*end::Time*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="fs-5 fw-bold text-dark text-hover-primary mb-2"
                            >
                              Committee Review Approvals
                            </a>
                            {/*end::Title*/}
                            {/*begin::User*/}
                            <div className="fs-7 text-muted">
                              Lead by
                              <a href="#">Michael Walters</a>
                            </div>
                            {/*end::User*/}
                          </div>
                          {/*end::Info*/}
                          {/*begin::Action*/}
                          <a
                            href="#"
                            className="btn btn-light bnt-active-light-primary btn-sm"
                          >
                            View
                          </a>
                          {/*end::Action*/}
                        </div>
                        {/*end::Time*/}
                        {/*begin::Time*/}
                        <div className="d-flex flex-stack position-relative mt-6">
                          {/*begin::Bar*/}
                          <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                          {/*end::Bar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold ms-5">
                            {/*begin::Time*/}
                            <div className="fs-7 mb-1">
                              14:30 - 15:30
                              <span className="fs-7 text-muted text-uppercase">
                                pm
                              </span>
                            </div>
                            {/*end::Time*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="fs-5 fw-bold text-dark text-hover-primary mb-2"
                            >
                              Dashboard UI/UX Design Review
                            </a>
                            {/*end::Title*/}
                            {/*begin::User*/}
                            <div className="fs-7 text-muted">
                              Lead by
                              <a href="#">Mark Randall</a>
                            </div>
                            {/*end::User*/}
                          </div>
                          {/*end::Info*/}
                          {/*begin::Action*/}
                          <a
                            href="#"
                            className="btn btn-light bnt-active-light-primary btn-sm"
                          >
                            View
                          </a>
                          {/*end::Action*/}
                        </div>
                        {/*end::Time*/}
                        {/*begin::Time*/}
                        <div className="d-flex flex-stack position-relative mt-6">
                          {/*begin::Bar*/}
                          <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                          {/*end::Bar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold ms-5">
                            {/*begin::Time*/}
                            <div className="fs-7 mb-1">
                              14:30 - 15:30
                              <span className="fs-7 text-muted text-uppercase">
                                pm
                              </span>
                            </div>
                            {/*end::Time*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="fs-5 fw-bold text-dark text-hover-primary mb-2"
                            >
                              Sales Pitch Proposal
                            </a>
                            {/*end::Title*/}
                            {/*begin::User*/}
                            <div className="fs-7 text-muted">
                              Lead by
                              <a href="#">Terry Robins</a>
                            </div>
                            {/*end::User*/}
                          </div>
                          {/*end::Info*/}
                          {/*begin::Action*/}
                          <a
                            href="#"
                            className="btn btn-light bnt-active-light-primary btn-sm"
                          >
                            View
                          </a>
                          {/*end::Action*/}
                        </div>
                        {/*end::Time*/}
                      </div>
                      {/*end::Day*/}
                      {/*begin::Day*/}
                      <div id="kt_schedule_day_6" className="tab-pane fade show">
                        {/*begin::Time*/}
                        <div className="d-flex flex-stack position-relative mt-6">
                          {/*begin::Bar*/}
                          <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                          {/*end::Bar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold ms-5">
                            {/*begin::Time*/}
                            <div className="fs-7 mb-1">
                              9:00 - 10:00
                              <span className="fs-7 text-muted text-uppercase">
                                am
                              </span>
                            </div>
                            {/*end::Time*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="fs-5 fw-bold text-dark text-hover-primary mb-2"
                            >
                              Dashboard UI/UX Design Review
                            </a>
                            {/*end::Title*/}
                            {/*begin::User*/}
                            <div className="fs-7 text-muted">
                              Lead by
                              <a href="#">Sean Bean</a>
                            </div>
                            {/*end::User*/}
                          </div>
                          {/*end::Info*/}
                          {/*begin::Action*/}
                          <a
                            href="#"
                            className="btn btn-light bnt-active-light-primary btn-sm"
                          >
                            View
                          </a>
                          {/*end::Action*/}
                        </div>
                        {/*end::Time*/}
                        {/*begin::Time*/}
                        <div className="d-flex flex-stack position-relative mt-6">
                          {/*begin::Bar*/}
                          <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                          {/*end::Bar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold ms-5">
                            {/*begin::Time*/}
                            <div className="fs-7 mb-1">
                              12:00 - 13:00
                              <span className="fs-7 text-muted text-uppercase">
                                pm
                              </span>
                            </div>
                            {/*end::Time*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="fs-5 fw-bold text-dark text-hover-primary mb-2"
                            >
                              Dashboard UI/UX Design Review
                            </a>
                            {/*end::Title*/}
                            {/*begin::User*/}
                            <div className="fs-7 text-muted">
                              Lead by
                              <a href="#">Mark Randall</a>
                            </div>
                            {/*end::User*/}
                          </div>
                          {/*end::Info*/}
                          {/*begin::Action*/}
                          <a
                            href="#"
                            className="btn btn-light bnt-active-light-primary btn-sm"
                          >
                            View
                          </a>
                          {/*end::Action*/}
                        </div>
                        {/*end::Time*/}
                        {/*begin::Time*/}
                        <div className="d-flex flex-stack position-relative mt-6">
                          {/*begin::Bar*/}
                          <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                          {/*end::Bar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold ms-5">
                            {/*begin::Time*/}
                            <div className="fs-7 mb-1">
                              9:00 - 10:00
                              <span className="fs-7 text-muted text-uppercase">
                                am
                              </span>
                            </div>
                            {/*end::Time*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="fs-5 fw-bold text-dark text-hover-primary mb-2"
                            >
                              Dashboard UI/UX Design Review
                            </a>
                            {/*end::Title*/}
                            {/*begin::User*/}
                            <div className="fs-7 text-muted">
                              Lead by
                              <a href="#">Kendell Trevor</a>
                            </div>
                            {/*end::User*/}
                          </div>
                          {/*end::Info*/}
                          {/*begin::Action*/}
                          <a
                            href="#"
                            className="btn btn-light bnt-active-light-primary btn-sm"
                          >
                            View
                          </a>
                          {/*end::Action*/}
                        </div>
                        {/*end::Time*/}
                        {/*begin::Time*/}
                        <div className="d-flex flex-stack position-relative mt-6">
                          {/*begin::Bar*/}
                          <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                          {/*end::Bar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold ms-5">
                            {/*begin::Time*/}
                            <div className="fs-7 mb-1">
                              11:00 - 11:45
                              <span className="fs-7 text-muted text-uppercase">
                                am
                              </span>
                            </div>
                            {/*end::Time*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="fs-5 fw-bold text-dark text-hover-primary mb-2"
                            >
                              Committee Review Approvals
                            </a>
                            {/*end::Title*/}
                            {/*begin::User*/}
                            <div className="fs-7 text-muted">
                              Lead by
                              <a href="#">Mark Randall</a>
                            </div>
                            {/*end::User*/}
                          </div>
                          {/*end::Info*/}
                          {/*begin::Action*/}
                          <a
                            href="#"
                            className="btn btn-light bnt-active-light-primary btn-sm"
                          >
                            View
                          </a>
                          {/*end::Action*/}
                        </div>
                        {/*end::Time*/}
                      </div>
                      {/*end::Day*/}
                      {/*begin::Day*/}
                      <div id="kt_schedule_day_7" className="tab-pane fade show">
                        {/*begin::Time*/}
                        <div className="d-flex flex-stack position-relative mt-6">
                          {/*begin::Bar*/}
                          <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                          {/*end::Bar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold ms-5">
                            {/*begin::Time*/}
                            <div className="fs-7 mb-1">
                              16:30 - 17:30
                              <span className="fs-7 text-muted text-uppercase">
                                pm
                              </span>
                            </div>
                            {/*end::Time*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="fs-5 fw-bold text-dark text-hover-primary mb-2"
                            >
                              Development Team Capacity Review
                            </a>
                            {/*end::Title*/}
                            {/*begin::User*/}
                            <div className="fs-7 text-muted">
                              Lead by
                              <a href="#">Terry Robins</a>
                            </div>
                            {/*end::User*/}
                          </div>
                          {/*end::Info*/}
                          {/*begin::Action*/}
                          <a
                            href="#"
                            className="btn btn-light bnt-active-light-primary btn-sm"
                          >
                            View
                          </a>
                          {/*end::Action*/}
                        </div>
                        {/*end::Time*/}
                        {/*begin::Time*/}
                        <div className="d-flex flex-stack position-relative mt-6">
                          {/*begin::Bar*/}
                          <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                          {/*end::Bar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold ms-5">
                            {/*begin::Time*/}
                            <div className="fs-7 mb-1">
                              11:00 - 11:45
                              <span className="fs-7 text-muted text-uppercase">
                                am
                              </span>
                            </div>
                            {/*end::Time*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="fs-5 fw-bold text-dark text-hover-primary mb-2"
                            >
                              Team Backlog Grooming Session
                            </a>
                            {/*end::Title*/}
                            {/*begin::User*/}
                            <div className="fs-7 text-muted">
                              Lead by
                              <a href="#">Peter Marcus</a>
                            </div>
                            {/*end::User*/}
                          </div>
                          {/*end::Info*/}
                          {/*begin::Action*/}
                          <a
                            href="#"
                            className="btn btn-light bnt-active-light-primary btn-sm"
                          >
                            View
                          </a>
                          {/*end::Action*/}
                        </div>
                        {/*end::Time*/}
                        {/*begin::Time*/}
                        <div className="d-flex flex-stack position-relative mt-6">
                          {/*begin::Bar*/}
                          <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                          {/*end::Bar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold ms-5">
                            {/*begin::Time*/}
                            <div className="fs-7 mb-1">
                              11:00 - 11:45
                              <span className="fs-7 text-muted text-uppercase">
                                am
                              </span>
                            </div>
                            {/*end::Time*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="fs-5 fw-bold text-dark text-hover-primary mb-2"
                            >
                              Marketing Campaign Discussion
                            </a>
                            {/*end::Title*/}
                            {/*begin::User*/}
                            <div className="fs-7 text-muted">
                              Lead by
                              <a href="#">Michael Walters</a>
                            </div>
                            {/*end::User*/}
                          </div>
                          {/*end::Info*/}
                          {/*begin::Action*/}
                          <a
                            href="#"
                            className="btn btn-light bnt-active-light-primary btn-sm"
                          >
                            View
                          </a>
                          {/*end::Action*/}
                        </div>
                        {/*end::Time*/}
                      </div>
                      {/*end::Day*/}
                      {/*begin::Day*/}
                      <div id="kt_schedule_day_8" className="tab-pane fade show">
                        {/*begin::Time*/}
                        <div className="d-flex flex-stack position-relative mt-6">
                          {/*begin::Bar*/}
                          <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                          {/*end::Bar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold ms-5">
                            {/*begin::Time*/}
                            <div className="fs-7 mb-1">
                              12:00 - 13:00
                              <span className="fs-7 text-muted text-uppercase">
                                pm
                              </span>
                            </div>
                            {/*end::Time*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="fs-5 fw-bold text-dark text-hover-primary mb-2"
                            >
                              Sales Pitch Proposal
                            </a>
                            {/*end::Title*/}
                            {/*begin::User*/}
                            <div className="fs-7 text-muted">
                              Lead by
                              <a href="#">Kendell Trevor</a>
                            </div>
                            {/*end::User*/}
                          </div>
                          {/*end::Info*/}
                          {/*begin::Action*/}
                          <a
                            href="#"
                            className="btn btn-light bnt-active-light-primary btn-sm"
                          >
                            View
                          </a>
                          {/*end::Action*/}
                        </div>
                        {/*end::Time*/}
                        {/*begin::Time*/}
                        <div className="d-flex flex-stack position-relative mt-6">
                          {/*begin::Bar*/}
                          <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                          {/*end::Bar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold ms-5">
                            {/*begin::Time*/}
                            <div className="fs-7 mb-1">
                              16:30 - 17:30
                              <span className="fs-7 text-muted text-uppercase">
                                pm
                              </span>
                            </div>
                            {/*end::Time*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="fs-5 fw-bold text-dark text-hover-primary mb-2"
                            >
                              Sales Pitch Proposal
                            </a>
                            {/*end::Title*/}
                            {/*begin::User*/}
                            <div className="fs-7 text-muted">
                              Lead by
                              <a href="#">Yannis Gloverson</a>
                            </div>
                            {/*end::User*/}
                          </div>
                          {/*end::Info*/}
                          {/*begin::Action*/}
                          <a
                            href="#"
                            className="btn btn-light bnt-active-light-primary btn-sm"
                          >
                            View
                          </a>
                          {/*end::Action*/}
                        </div>
                        {/*end::Time*/}
                        {/*begin::Time*/}
                        <div className="d-flex flex-stack position-relative mt-6">
                          {/*begin::Bar*/}
                          <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                          {/*end::Bar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold ms-5">
                            {/*begin::Time*/}
                            <div className="fs-7 mb-1">
                              10:00 - 11:00
                              <span className="fs-7 text-muted text-uppercase">
                                am
                              </span>
                            </div>
                            {/*end::Time*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="fs-5 fw-bold text-dark text-hover-primary mb-2"
                            >
                              Sales Pitch Proposal
                            </a>
                            {/*end::Title*/}
                            {/*begin::User*/}
                            <div className="fs-7 text-muted">
                              Lead by
                              <a href="#">Karina Clarke</a>
                            </div>
                            {/*end::User*/}
                          </div>
                          {/*end::Info*/}
                          {/*begin::Action*/}
                          <a
                            href="#"
                            className="btn btn-light bnt-active-light-primary btn-sm"
                          >
                            View
                          </a>
                          {/*end::Action*/}
                        </div>
                        {/*end::Time*/}
                      </div>
                      {/*end::Day*/}
                      {/*begin::Day*/}
                      <div id="kt_schedule_day_9" className="tab-pane fade show">
                        {/*begin::Time*/}
                        <div className="d-flex flex-stack position-relative mt-6">
                          {/*begin::Bar*/}
                          <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                          {/*end::Bar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold ms-5">
                            {/*begin::Time*/}
                            <div className="fs-7 mb-1">
                              11:00 - 11:45
                              <span className="fs-7 text-muted text-uppercase">
                                am
                              </span>
                            </div>
                            {/*end::Time*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="fs-5 fw-bold text-dark text-hover-primary mb-2"
                            >
                              Team Backlog Grooming Session
                            </a>
                            {/*end::Title*/}
                            {/*begin::User*/}
                            <div className="fs-7 text-muted">
                              Lead by
                              <a href="#">Michael Walters</a>
                            </div>
                            {/*end::User*/}
                          </div>
                          {/*end::Info*/}
                          {/*begin::Action*/}
                          <a
                            href="#"
                            className="btn btn-light bnt-active-light-primary btn-sm"
                          >
                            View
                          </a>
                          {/*end::Action*/}
                        </div>
                        {/*end::Time*/}
                        {/*begin::Time*/}
                        <div className="d-flex flex-stack position-relative mt-6">
                          {/*begin::Bar*/}
                          <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                          {/*end::Bar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold ms-5">
                            {/*begin::Time*/}
                            <div className="fs-7 mb-1">
                              14:30 - 15:30
                              <span className="fs-7 text-muted text-uppercase">
                                pm
                              </span>
                            </div>
                            {/*end::Time*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="fs-5 fw-bold text-dark text-hover-primary mb-2"
                            >
                              Committee Review Approvals
                            </a>
                            {/*end::Title*/}
                            {/*begin::User*/}
                            <div className="fs-7 text-muted">
                              Lead by
                              <a href="#">Michael Walters</a>
                            </div>
                            {/*end::User*/}
                          </div>
                          {/*end::Info*/}
                          {/*begin::Action*/}
                          <a
                            href="#"
                            className="btn btn-light bnt-active-light-primary btn-sm"
                          >
                            View
                          </a>
                          {/*end::Action*/}
                        </div>
                        {/*end::Time*/}
                        {/*begin::Time*/}
                        <div className="d-flex flex-stack position-relative mt-6">
                          {/*begin::Bar*/}
                          <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                          {/*end::Bar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold ms-5">
                            {/*begin::Time*/}
                            <div className="fs-7 mb-1">
                              14:30 - 15:30
                              <span className="fs-7 text-muted text-uppercase">
                                pm
                              </span>
                            </div>
                            {/*end::Time*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="fs-5 fw-bold text-dark text-hover-primary mb-2"
                            >
                              Lunch &amp; Learn Catch Up
                            </a>
                            {/*end::Title*/}
                            {/*begin::User*/}
                            <div className="fs-7 text-muted">
                              Lead by
                              <a href="#">Kendell Trevor</a>
                            </div>
                            {/*end::User*/}
                          </div>
                          {/*end::Info*/}
                          {/*begin::Action*/}
                          <a
                            href="#"
                            className="btn btn-light bnt-active-light-primary btn-sm"
                          >
                            View
                          </a>
                          {/*end::Action*/}
                        </div>
                        {/*end::Time*/}
                        {/*begin::Time*/}
                        <div className="d-flex flex-stack position-relative mt-6">
                          {/*begin::Bar*/}
                          <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                          {/*end::Bar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold ms-5">
                            {/*begin::Time*/}
                            <div className="fs-7 mb-1">
                              12:00 - 13:00
                              <span className="fs-7 text-muted text-uppercase">
                                pm
                              </span>
                            </div>
                            {/*end::Time*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="fs-5 fw-bold text-dark text-hover-primary mb-2"
                            >
                              Sales Pitch Proposal
                            </a>
                            {/*end::Title*/}
                            {/*begin::User*/}
                            <div className="fs-7 text-muted">
                              Lead by
                              <a href="#">David Stevenson</a>
                            </div>
                            {/*end::User*/}
                          </div>
                          {/*end::Info*/}
                          {/*begin::Action*/}
                          <a
                            href="#"
                            className="btn btn-light bnt-active-light-primary btn-sm"
                          >
                            View
                          </a>
                          {/*end::Action*/}
                        </div>
                        {/*end::Time*/}
                      </div>
                      {/*end::Day*/}
                      {/*begin::Day*/}
                      <div id="kt_schedule_day_10" className="tab-pane fade show">
                        {/*begin::Time*/}
                        <div className="d-flex flex-stack position-relative mt-6">
                          {/*begin::Bar*/}
                          <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                          {/*end::Bar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold ms-5">
                            {/*begin::Time*/}
                            <div className="fs-7 mb-1">
                              13:00 - 14:00
                              <span className="fs-7 text-muted text-uppercase">
                                pm
                              </span>
                            </div>
                            {/*end::Time*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="fs-5 fw-bold text-dark text-hover-primary mb-2"
                            >
                              Dashboard UI/UX Design Review
                            </a>
                            {/*end::Title*/}
                            {/*begin::User*/}
                            <div className="fs-7 text-muted">
                              Lead by
                              <a href="#">Michael Walters</a>
                            </div>
                            {/*end::User*/}
                          </div>
                          {/*end::Info*/}
                          {/*begin::Action*/}
                          <a
                            href="#"
                            className="btn btn-light bnt-active-light-primary btn-sm"
                          >
                            View
                          </a>
                          {/*end::Action*/}
                        </div>
                        {/*end::Time*/}
                        {/*begin::Time*/}
                        <div className="d-flex flex-stack position-relative mt-6">
                          {/*begin::Bar*/}
                          <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                          {/*end::Bar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold ms-5">
                            {/*begin::Time*/}
                            <div className="fs-7 mb-1">
                              10:00 - 11:00
                              <span className="fs-7 text-muted text-uppercase">
                                am
                              </span>
                            </div>
                            {/*end::Time*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="fs-5 fw-bold text-dark text-hover-primary mb-2"
                            >
                              Dashboard UI/UX Design Review
                            </a>
                            {/*end::Title*/}
                            {/*begin::User*/}
                            <div className="fs-7 text-muted">
                              Lead by
                              <a href="#">Sean Bean</a>
                            </div>
                            {/*end::User*/}
                          </div>
                          {/*end::Info*/}
                          {/*begin::Action*/}
                          <a
                            href="#"
                            className="btn btn-light bnt-active-light-primary btn-sm"
                          >
                            View
                          </a>
                          {/*end::Action*/}
                        </div>
                        {/*end::Time*/}
                        {/*begin::Time*/}
                        <div className="d-flex flex-stack position-relative mt-6">
                          {/*begin::Bar*/}
                          <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
                          {/*end::Bar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold ms-5">
                            {/*begin::Time*/}
                            <div className="fs-7 mb-1">
                              12:00 - 13:00
                              <span className="fs-7 text-muted text-uppercase">
                                pm
                              </span>
                            </div>
                            {/*end::Time*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="fs-5 fw-bold text-dark text-hover-primary mb-2"
                            >
                              Committee Review Approvals
                            </a>
                            {/*end::Title*/}
                            {/*begin::User*/}
                            <div className="fs-7 text-muted">
                              Lead by
                              <a href="#">Peter Marcus</a>
                            </div>
                            {/*end::User*/}
                          </div>
                          {/*end::Info*/}
                          {/*begin::Action*/}
                          <a
                            href="#"
                            className="btn btn-light bnt-active-light-primary btn-sm"
                          >
                            View
                          </a>
                          {/*end::Action*/}
                        </div>
                        {/*end::Time*/}
                      </div>
                      {/*end::Day*/}
                    </div>
                    {/*end::Tab Content*/}
                  </div>
                  {/*end::Card body*/}
                </div>
                {/*end::Card*/}
                {/*begin::Tasks*/}
                <div className="card card-flush mb-6 mb-xl-9">
                  {/*begin::Card header*/}
                  <div className="card-header mt-6">
                    {/*begin::Card title*/}
                    <div className="card-title flex-column">
                      <h2 className="mb-1">User's Tasks</h2>
                      <div className="fs-6 fw-semibold text-muted">
                        Total 25 tasks in backlog
                      </div>
                    </div>
                    {/*end::Card title*/}
                    {/*begin::Card toolbar*/}
                    <div className="card-toolbar">
                      <button
                        type="button"
                        className="btn btn-light-primary btn-sm"
                        data-bs-toggle="modal"
                        data-bs-target="#kt_modal_add_task"
                      >
                        <i className="ki-duotone ki-add-files fs-3">
                          <span className="path1" />
                          <span className="path2" />
                          <span className="path3" />
                        </i>
                        Add Task
                      </button>
                    </div>
                    {/*end::Card toolbar*/}
                  </div>
                  {/*end::Card header*/}
                  {/*begin::Card body*/}
                  <div className="card-body d-flex flex-column">
                    {/*begin::Item*/}
                    <div className="d-flex align-items-center position-relative mb-7">
                      {/*begin::Label*/}
                      <div className="position-absolute top-0 start-0 rounded h-100 bg-secondary w-4px" />
                      {/*end::Label*/}
                      {/*begin::Details*/}
                      <div className="fw-semibold ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bold text-dark text-hover-primary"
                        >
                          Create FureStibe branding logo
                        </a>
                        {/*begin::Info*/}
                        <div className="fs-7 text-muted">
                          Due in 1 day
                          <a href="#">Karina Clark</a>
                        </div>
                        {/*end::Info*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Menu*/}
                      <button
                        type="button"
                        className="btn btn-icon btn-active-light-primary w-30px h-30px ms-auto"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                      >
                        <i className="ki-duotone ki-setting-3 fs-3">
                          <span className="path1" />
                          <span className="path2" />
                          <span className="path3" />
                          <span className="path4" />
                          <span className="path5" />
                        </i>
                      </button>
                      {/*begin::Task menu*/}
                      <div
                        className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                        data-kt-menu="true"
                        data-kt-menu-id="kt-users-tasks"
                      >
                        {/*begin::Header*/}
                        <div className="px-7 py-5">
                          <div className="fs-5 text-dark fw-bold">
                            Update Status
                          </div>
                        </div>
                        {/*end::Header*/}
                        {/*begin::Menu separator*/}
                        <div className="separator border-gray-200" />
                        {/*end::Menu separator*/}
                        {/*begin::Form*/}
                        <form
                          className="form px-7 py-5"
                          data-kt-menu-id="kt-users-tasks-form"
                        >
                          {/*begin::Input group*/}
                          <div className="fv-row mb-10">
                            {/*begin::Label*/}
                            <label className="form-label fs-6 fw-semibold">
                              Status:
                            </label>
                            {/*end::Label*/}
                            {/*begin::Input*/}
                            <select
                              className="form-select form-select-solid"
                              name="task_status"
                              data-kt-select2="true"
                              data-placeholder="Select option"
                              data-allow-clear="true"
                              data-hide-search="true"
                            >
                              <option />
                              <option value={1}>Approved</option>
                              <option value={2}>Pending</option>
                              <option value={3}>In Process</option>
                              <option value={4}>Rejected</option>
                            </select>
                            {/*end::Input*/}
                          </div>
                          {/*end::Input group*/}
                          {/*begin::Actions*/}
                          <div className="d-flex justify-content-end">
                            <button
                              type="button"
                              className="btn btn-sm btn-light btn-active-light-primary me-2"
                              data-kt-users-update-task-status="reset"
                            >
                              Reset
                            </button>
                            <button
                              type="submit"
                              className="btn btn-sm btn-primary"
                              data-kt-users-update-task-status="submit"
                            >
                              <span className="indicator-label">Apply</span>
                              <span className="indicator-progress">
                                Please wait...
                                <span className="spinner-border spinner-border-sm align-middle ms-2" />
                              </span>
                            </button>
                          </div>
                          {/*end::Actions*/}
                        </form>
                        {/*end::Form*/}
                      </div>
                      {/*end::Task menu*/}
                      {/*end::Menu*/}
                    </div>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <div className="d-flex align-items-center position-relative mb-7">
                      {/*begin::Label*/}
                      <div className="position-absolute top-0 start-0 rounded h-100 bg-secondary w-4px" />
                      {/*end::Label*/}
                      {/*begin::Details*/}
                      <div className="fw-semibold ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bold text-dark text-hover-primary"
                        >
                          Schedule a meeting with FireBear CTO John
                        </a>
                        {/*begin::Info*/}
                        <div className="fs-7 text-muted">
                          Due in 3 days
                          <a href="#">Rober Doe</a>
                        </div>
                        {/*end::Info*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Menu*/}
                      <button
                        type="button"
                        className="btn btn-icon btn-active-light-primary w-30px h-30px ms-auto"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                      >
                        <i className="ki-duotone ki-setting-3 fs-3">
                          <span className="path1" />
                          <span className="path2" />
                          <span className="path3" />
                          <span className="path4" />
                          <span className="path5" />
                        </i>
                      </button>
                      {/*begin::Task menu*/}
                      <div
                        className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                        data-kt-menu="true"
                        data-kt-menu-id="kt-users-tasks"
                      >
                        {/*begin::Header*/}
                        <div className="px-7 py-5">
                          <div className="fs-5 text-dark fw-bold">
                            Update Status
                          </div>
                        </div>
                        {/*end::Header*/}
                        {/*begin::Menu separator*/}
                        <div className="separator border-gray-200" />
                        {/*end::Menu separator*/}
                        {/*begin::Form*/}
                        <form
                          className="form px-7 py-5"
                          data-kt-menu-id="kt-users-tasks-form"
                        >
                          {/*begin::Input group*/}
                          <div className="fv-row mb-10">
                            {/*begin::Label*/}
                            <label className="form-label fs-6 fw-semibold">
                              Status:
                            </label>
                            {/*end::Label*/}
                            {/*begin::Input*/}
                            <select
                              className="form-select form-select-solid"
                              name="task_status"
                              data-kt-select2="true"
                              data-placeholder="Select option"
                              data-allow-clear="true"
                              data-hide-search="true"
                            >
                              <option />
                              <option value={1}>Approved</option>
                              <option value={2}>Pending</option>
                              <option value={3}>In Process</option>
                              <option value={4}>Rejected</option>
                            </select>
                            {/*end::Input*/}
                          </div>
                          {/*end::Input group*/}
                          {/*begin::Actions*/}
                          <div className="d-flex justify-content-end">
                            <button
                              type="button"
                              className="btn btn-sm btn-light btn-active-light-primary me-2"
                              data-kt-users-update-task-status="reset"
                            >
                              Reset
                            </button>
                            <button
                              type="submit"
                              className="btn btn-sm btn-primary"
                              data-kt-users-update-task-status="submit"
                            >
                              <span className="indicator-label">Apply</span>
                              <span className="indicator-progress">
                                Please wait...
                                <span className="spinner-border spinner-border-sm align-middle ms-2" />
                              </span>
                            </button>
                          </div>
                          {/*end::Actions*/}
                        </form>
                        {/*end::Form*/}
                      </div>
                      {/*end::Task menu*/}
                      {/*end::Menu*/}
                    </div>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <div className="d-flex align-items-center position-relative mb-7">
                      {/*begin::Label*/}
                      <div className="position-absolute top-0 start-0 rounded h-100 bg-secondary w-4px" />
                      {/*end::Label*/}
                      {/*begin::Details*/}
                      <div className="fw-semibold ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bold text-dark text-hover-primary"
                        >
                          9 Degree Project Estimation
                        </a>
                        {/*begin::Info*/}
                        <div className="fs-7 text-muted">
                          Due in 1 week
                          <a href="#">Neil Owen</a>
                        </div>
                        {/*end::Info*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Menu*/}
                      <button
                        type="button"
                        className="btn btn-icon btn-active-light-primary w-30px h-30px ms-auto"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                      >
                        <i className="ki-duotone ki-setting-3 fs-3">
                          <span className="path1" />
                          <span className="path2" />
                          <span className="path3" />
                          <span className="path4" />
                          <span className="path5" />
                        </i>
                      </button>
                      {/*begin::Task menu*/}
                      <div
                        className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                        data-kt-menu="true"
                        data-kt-menu-id="kt-users-tasks"
                      >
                        {/*begin::Header*/}
                        <div className="px-7 py-5">
                          <div className="fs-5 text-dark fw-bold">
                            Update Status
                          </div>
                        </div>
                        {/*end::Header*/}
                        {/*begin::Menu separator*/}
                        <div className="separator border-gray-200" />
                        {/*end::Menu separator*/}
                        {/*begin::Form*/}
                        <form
                          className="form px-7 py-5"
                          data-kt-menu-id="kt-users-tasks-form"
                        >
                          {/*begin::Input group*/}
                          <div className="fv-row mb-10">
                            {/*begin::Label*/}
                            <label className="form-label fs-6 fw-semibold">
                              Status:
                            </label>
                            {/*end::Label*/}
                            {/*begin::Input*/}
                            <select
                              className="form-select form-select-solid"
                              name="task_status"
                              data-kt-select2="true"
                              data-placeholder="Select option"
                              data-allow-clear="true"
                              data-hide-search="true"
                            >
                              <option />
                              <option value={1}>Approved</option>
                              <option value={2}>Pending</option>
                              <option value={3}>In Process</option>
                              <option value={4}>Rejected</option>
                            </select>
                            {/*end::Input*/}
                          </div>
                          {/*end::Input group*/}
                          {/*begin::Actions*/}
                          <div className="d-flex justify-content-end">
                            <button
                              type="button"
                              className="btn btn-sm btn-light btn-active-light-primary me-2"
                              data-kt-users-update-task-status="reset"
                            >
                              Reset
                            </button>
                            <button
                              type="submit"
                              className="btn btn-sm btn-primary"
                              data-kt-users-update-task-status="submit"
                            >
                              <span className="indicator-label">Apply</span>
                              <span className="indicator-progress">
                                Please wait...
                                <span className="spinner-border spinner-border-sm align-middle ms-2" />
                              </span>
                            </button>
                          </div>
                          {/*end::Actions*/}
                        </form>
                        {/*end::Form*/}
                      </div>
                      {/*end::Task menu*/}
                      {/*end::Menu*/}
                    </div>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <div className="d-flex align-items-center position-relative mb-7">
                      {/*begin::Label*/}
                      <div className="position-absolute top-0 start-0 rounded h-100 bg-secondary w-4px" />
                      {/*end::Label*/}
                      {/*begin::Details*/}
                      <div className="fw-semibold ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bold text-dark text-hover-primary"
                        >
                          Dashboard UI &amp; UX for Leafr CRM
                        </a>
                        {/*begin::Info*/}
                        <div className="fs-7 text-muted">
                          Due in 1 week
                          <a href="#">Olivia Wild</a>
                        </div>
                        {/*end::Info*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Menu*/}
                      <button
                        type="button"
                        className="btn btn-icon btn-active-light-primary w-30px h-30px ms-auto"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                      >
                        <i className="ki-duotone ki-setting-3 fs-3">
                          <span className="path1" />
                          <span className="path2" />
                          <span className="path3" />
                          <span className="path4" />
                          <span className="path5" />
                        </i>
                      </button>
                      {/*begin::Task menu*/}
                      <div
                        className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                        data-kt-menu="true"
                        data-kt-menu-id="kt-users-tasks"
                      >
                        {/*begin::Header*/}
                        <div className="px-7 py-5">
                          <div className="fs-5 text-dark fw-bold">
                            Update Status
                          </div>
                        </div>
                        {/*end::Header*/}
                        {/*begin::Menu separator*/}
                        <div className="separator border-gray-200" />
                        {/*end::Menu separator*/}
                        {/*begin::Form*/}
                        <form
                          className="form px-7 py-5"
                          data-kt-menu-id="kt-users-tasks-form"
                        >
                          {/*begin::Input group*/}
                          <div className="fv-row mb-10">
                            {/*begin::Label*/}
                            <label className="form-label fs-6 fw-semibold">
                              Status:
                            </label>
                            {/*end::Label*/}
                            {/*begin::Input*/}
                            <select
                              className="form-select form-select-solid"
                              name="task_status"
                              data-kt-select2="true"
                              data-placeholder="Select option"
                              data-allow-clear="true"
                              data-hide-search="true"
                            >
                              <option />
                              <option value={1}>Approved</option>
                              <option value={2}>Pending</option>
                              <option value={3}>In Process</option>
                              <option value={4}>Rejected</option>
                            </select>
                            {/*end::Input*/}
                          </div>
                          {/*end::Input group*/}
                          {/*begin::Actions*/}
                          <div className="d-flex justify-content-end">
                            <button
                              type="button"
                              className="btn btn-sm btn-light btn-active-light-primary me-2"
                              data-kt-users-update-task-status="reset"
                            >
                              Reset
                            </button>
                            <button
                              type="submit"
                              className="btn btn-sm btn-primary"
                              data-kt-users-update-task-status="submit"
                            >
                              <span className="indicator-label">Apply</span>
                              <span className="indicator-progress">
                                Please wait...
                                <span className="spinner-border spinner-border-sm align-middle ms-2" />
                              </span>
                            </button>
                          </div>
                          {/*end::Actions*/}
                        </form>
                        {/*end::Form*/}
                      </div>
                      {/*end::Task menu*/}
                      {/*end::Menu*/}
                    </div>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <div className="d-flex align-items-center position-relative">
                      {/*begin::Label*/}
                      <div className="position-absolute top-0 start-0 rounded h-100 bg-secondary w-4px" />
                      {/*end::Label*/}
                      {/*begin::Details*/}
                      <div className="fw-semibold ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bold text-dark text-hover-primary"
                        >
                          Mivy App R&amp;D, Meeting with clients
                        </a>
                        {/*begin::Info*/}
                        <div className="fs-7 text-muted">
                          Due in 2 weeks
                          <a href="#">Sean Bean</a>
                        </div>
                        {/*end::Info*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Menu*/}
                      <button
                        type="button"
                        className="btn btn-icon btn-active-light-primary w-30px h-30px ms-auto"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                      >
                        <i className="ki-duotone ki-setting-3 fs-3">
                          <span className="path1" />
                          <span className="path2" />
                          <span className="path3" />
                          <span className="path4" />
                          <span className="path5" />
                        </i>
                      </button>
                      {/*begin::Task menu*/}
                      <div
                        className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                        data-kt-menu="true"
                        data-kt-menu-id="kt-users-tasks"
                      >
                        {/*begin::Header*/}
                        <div className="px-7 py-5">
                          <div className="fs-5 text-dark fw-bold">
                            Update Status
                          </div>
                        </div>
                        {/*end::Header*/}
                        {/*begin::Menu separator*/}
                        <div className="separator border-gray-200" />
                        {/*end::Menu separator*/}
                        {/*begin::Form*/}
                        <form
                          className="form px-7 py-5"
                          data-kt-menu-id="kt-users-tasks-form"
                        >
                          {/*begin::Input group*/}
                          <div className="fv-row mb-10">
                            {/*begin::Label*/}
                            <label className="form-label fs-6 fw-semibold">
                              Status:
                            </label>
                            {/*end::Label*/}
                            {/*begin::Input*/}
                            <select
                              className="form-select form-select-solid"
                              name="task_status"
                              data-kt-select2="true"
                              data-placeholder="Select option"
                              data-allow-clear="true"
                              data-hide-search="true"
                            >
                              <option />
                              <option value={1}>Approved</option>
                              <option value={2}>Pending</option>
                              <option value={3}>In Process</option>
                              <option value={4}>Rejected</option>
                            </select>
                            {/*end::Input*/}
                          </div>
                          {/*end::Input group*/}
                          {/*begin::Actions*/}
                          <div className="d-flex justify-content-end">
                            <button
                              type="button"
                              className="btn btn-sm btn-light btn-active-light-primary me-2"
                              data-kt-users-update-task-status="reset"
                            >
                              Reset
                            </button>
                            <button
                              type="submit"
                              className="btn btn-sm btn-primary"
                              data-kt-users-update-task-status="submit"
                            >
                              <span className="indicator-label">Apply</span>
                              <span className="indicator-progress">
                                Please wait...
                                <span className="spinner-border spinner-border-sm align-middle ms-2" />
                              </span>
                            </button>
                          </div>
                          {/*end::Actions*/}
                        </form>
                        {/*end::Form*/}
                      </div>
                      {/*end::Task menu*/}
                      {/*end::Menu*/}
                    </div>
                    {/*end::Item*/}
                  </div>
                  {/*end::Card body*/}
                </div>
                {/*end::Tasks*/}
              </div>
              {/*end:::Tab pane*/}
              {/*begin:::Tab pane*/}
              <div
                className="tab-pane fade"
                id="kt_user_view_overview_security"
                role="tabpanel"
              >
                {/*begin::Card*/}
                <div className="card pt-4 mb-6 mb-xl-9">
                  {/*begin::Card header*/}
                  <div className="card-header border-0">
                    {/*begin::Card title*/}
                    <div className="card-title">
                      <h2>Profile</h2>
                    </div>
                    {/*end::Card title*/}
                  </div>
                  {/*end::Card header*/}
                  {/*begin::Card body*/}
                  <div className="card-body pt-0 pb-5">
                    {/*begin::Table wrapper*/}
                    <div className="table-responsive">
                      {/*begin::Table*/}
                      <table
                        className="table align-middle table-row-dashed gy-5"
                        id="kt_table_users_login_session"
                      >
                        <tbody className="fs-6 fw-semibold text-gray-600">
                          <tr>
                            <td>Email</td>
                            <td>smith@kpmg.com</td>
                            <td className="text-end">
                              <button
                                type="button"
                                className="btn btn-icon btn-active-light-primary w-30px h-30px ms-auto"
                                data-bs-toggle="modal"
                                data-bs-target="#kt_modal_update_email"
                              >
                                <i className="ki-duotone ki-pencil fs-3">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>Password</td>
                            <td>******</td>
                            <td className="text-end">
                              <button
                                type="button"
                                className="btn btn-icon btn-active-light-primary w-30px h-30px ms-auto"
                                data-bs-toggle="modal"
                                data-bs-target="#kt_modal_update_password"
                              >
                                <i className="ki-duotone ki-pencil fs-3">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>Role</td>
                            <td>Administrator</td>
                            <td className="text-end">
                              <button
                                type="button"
                                className="btn btn-icon btn-active-light-primary w-30px h-30px ms-auto"
                                data-bs-toggle="modal"
                                data-bs-target="#kt_modal_update_role"
                              >
                                <i className="ki-duotone ki-pencil fs-3">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      {/*end::Table*/}
                    </div>
                    {/*end::Table wrapper*/}
                  </div>
                  {/*end::Card body*/}
                </div>
                {/*end::Card*/}
                {/*begin::Card*/}
                <div className="card pt-4 mb-6 mb-xl-9">
                  {/*begin::Card header*/}
                  <div className="card-header border-0">
                    {/*begin::Card title*/}
                    <div className="card-title flex-column">
                      <h2 className="mb-1">Two Step Authentication</h2>
                      <div className="fs-6 fw-semibold text-muted">
                        Keep your account extra secure with a second
                        authentication step.
                      </div>
                    </div>
                    {/*end::Card title*/}
                    {/*begin::Card toolbar*/}
                    <div className="card-toolbar">
                      {/*begin::Add*/}
                      <button
                        type="button"
                        className="btn btn-light-primary btn-sm"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                      >
                        <i className="ki-duotone ki-fingerprint-scanning fs-3">
                          <span className="path1" />
                          <span className="path2" />
                          <span className="path3" />
                          <span className="path4" />
                          <span className="path5" />
                        </i>
                        Add Authentication Step
                      </button>
                      {/*begin::Menu*/}
                      <div
                        className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-6 w-200px py-4"
                        data-kt-menu="true"
                      >
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a
                            href="#"
                            className="menu-link px-3"
                            data-bs-toggle="modal"
                            data-bs-target="#kt_modal_add_auth_app"
                          >
                            Use authenticator app
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a
                            href="#"
                            className="menu-link px-3"
                            data-bs-toggle="modal"
                            data-bs-target="#kt_modal_add_one_time_password"
                          >
                            Enable one-time password
                          </a>
                        </div>
                        {/*end::Menu item*/}
                      </div>
                      {/*end::Menu*/}
                      {/*end::Add*/}
                    </div>
                    {/*end::Card toolbar*/}
                  </div>
                  {/*end::Card header*/}
                  {/*begin::Card body*/}
                  <div className="card-body pb-5">
                    {/*begin::Item*/}
                    <div className="d-flex flex-stack">
                      {/*begin::Content*/}
                      <div className="d-flex flex-column">
                        <span>SMS</span>
                        <span className="text-muted fs-6">+61 412 345 678</span>
                      </div>
                      {/*end::Content*/}
                      {/*begin::Action*/}
                      <div className="d-flex justify-content-end align-items-center">
                        {/*begin::Button*/}
                        <button
                          type="button"
                          className="btn btn-icon btn-active-light-primary w-30px h-30px ms-auto me-5"
                          data-bs-toggle="modal"
                          data-bs-target="#kt_modal_add_one_time_password"
                        >
                          <i className="ki-duotone ki-pencil fs-3">
                            <span className="path1" />
                            <span className="path2" />
                          </i>
                        </button>
                        {/*end::Button*/}
                        {/*begin::Button*/}
                        <button
                          type="button"
                          className="btn btn-icon btn-active-light-primary w-30px h-30px ms-auto"
                          id="kt_users_delete_two_step"
                        >
                          <i className="ki-duotone ki-trash fs-3">
                            <span className="path1" />
                            <span className="path2" />
                            <span className="path3" />
                            <span className="path4" />
                            <span className="path5" />
                          </i>
                        </button>
                        {/*end::Button*/}
                      </div>
                      {/*end::Action*/}
                    </div>
                    {/*end::Item*/}
                    {/*begin:Separator*/}
                    <div className="separator separator-dashed my-5" />
                    {/*end:Separator*/}
                    {/*begin::Disclaimer*/}
                    <div className="text-gray-600">
                      If you lose your mobile device or security key, you can
                      <a href="#" className="me-1">
                        generate a backup code
                      </a>
                      to sign in to your account.
                    </div>
                    {/*end::Disclaimer*/}
                  </div>
                  {/*end::Card body*/}
                </div>
                {/*end::Card*/}
                {/*begin::Card*/}
                <div className="card pt-4 mb-6 mb-xl-9">
                  {/*begin::Card header*/}
                  <div className="card-header border-0">
                    {/*begin::Card title*/}
                    <div className="card-title flex-column">
                      <h2>Email Notifications</h2>
                      <div className="fs-6 fw-semibold text-muted">
                        Choose what messages you’d like to receive for each of
                        your accounts.
                      </div>
                    </div>
                    {/*end::Card title*/}
                  </div>
                  {/*end::Card header*/}
                  {/*begin::Card body*/}
                  <div className="card-body">
                    {/*begin::Form*/}
                    <form className="form" id="kt_users_email_notification_form">
                      {/*begin::Item*/}
                      <div className="d-flex">
                        {/*begin::Checkbox*/}
                        <div className="form-check form-check-custom form-check-solid">
                          {/*begin::Input*/}
                          <input
                            className="form-check-input me-3"
                            name="email_notification_0"
                            type="checkbox"
                            defaultValue={0}
                            id="kt_modal_update_email_notification_0"
                            defaultChecked="checked"
                          />
                          {/*end::Input*/}
                          {/*begin::Label*/}
                          <label
                            className="form-check-label"
                            htmlFor="kt_modal_update_email_notification_0"
                          >
                            <div className="fw-bold">Successful Payments</div>
                            <div className="text-gray-600">
                              Receive a notification for every successful payment.
                            </div>
                          </label>
                          {/*end::Label*/}
                        </div>
                        {/*end::Checkbox*/}
                      </div>
                      {/*end::Item*/}
                      <div className="separator separator-dashed my-5" />
                      {/*begin::Item*/}
                      <div className="d-flex">
                        {/*begin::Checkbox*/}
                        <div className="form-check form-check-custom form-check-solid">
                          {/*begin::Input*/}
                          <input
                            className="form-check-input me-3"
                            name="email_notification_1"
                            type="checkbox"
                            defaultValue={1}
                            id="kt_modal_update_email_notification_1"
                          />
                          {/*end::Input*/}
                          {/*begin::Label*/}
                          <label
                            className="form-check-label"
                            htmlFor="kt_modal_update_email_notification_1"
                          >
                            <div className="fw-bold">Payouts</div>
                            <div className="text-gray-600">
                              Receive a notification for every initiated payout.
                            </div>
                          </label>
                          {/*end::Label*/}
                        </div>
                        {/*end::Checkbox*/}
                      </div>
                      {/*end::Item*/}
                      <div className="separator separator-dashed my-5" />
                      {/*begin::Item*/}
                      <div className="d-flex">
                        {/*begin::Checkbox*/}
                        <div className="form-check form-check-custom form-check-solid">
                          {/*begin::Input*/}
                          <input
                            className="form-check-input me-3"
                            name="email_notification_2"
                            type="checkbox"
                            defaultValue={2}
                            id="kt_modal_update_email_notification_2"
                          />
                          {/*end::Input*/}
                          {/*begin::Label*/}
                          <label
                            className="form-check-label"
                            htmlFor="kt_modal_update_email_notification_2"
                          >
                            <div className="fw-bold">Application fees</div>
                            <div className="text-gray-600">
                              Receive a notification each time you collect a fee
                              from an account.
                            </div>
                          </label>
                          {/*end::Label*/}
                        </div>
                        {/*end::Checkbox*/}
                      </div>
                      {/*end::Item*/}
                      <div className="separator separator-dashed my-5" />
                      {/*begin::Item*/}
                      <div className="d-flex">
                        {/*begin::Checkbox*/}
                        <div className="form-check form-check-custom form-check-solid">
                          {/*begin::Input*/}
                          <input
                            className="form-check-input me-3"
                            name="email_notification_3"
                            type="checkbox"
                            defaultValue={3}
                            id="kt_modal_update_email_notification_3"
                            defaultChecked="checked"
                          />
                          {/*end::Input*/}
                          {/*begin::Label*/}
                          <label
                            className="form-check-label"
                            htmlFor="kt_modal_update_email_notification_3"
                          >
                            <div className="fw-bold">Disputes</div>
                            <div className="text-gray-600">
                              Receive a notification if a payment is disputed by a
                              customer and for dispute resolutions.
                            </div>
                          </label>
                          {/*end::Label*/}
                        </div>
                        {/*end::Checkbox*/}
                      </div>
                      {/*end::Item*/}
                      <div className="separator separator-dashed my-5" />
                      {/*begin::Item*/}
                      <div className="d-flex">
                        {/*begin::Checkbox*/}
                        <div className="form-check form-check-custom form-check-solid">
                          {/*begin::Input*/}
                          <input
                            className="form-check-input me-3"
                            name="email_notification_4"
                            type="checkbox"
                            defaultValue={4}
                            id="kt_modal_update_email_notification_4"
                            defaultChecked="checked"
                          />
                          {/*end::Input*/}
                          {/*begin::Label*/}
                          <label
                            className="form-check-label"
                            htmlFor="kt_modal_update_email_notification_4"
                          >
                            <div className="fw-bold">Payment reviews</div>
                            <div className="text-gray-600">
                              Receive a notification if a payment is marked as an
                              elevated risk.
                            </div>
                          </label>
                          {/*end::Label*/}
                        </div>
                        {/*end::Checkbox*/}
                      </div>
                      {/*end::Item*/}
                      <div className="separator separator-dashed my-5" />
                      {/*begin::Item*/}
                      <div className="d-flex">
                        {/*begin::Checkbox*/}
                        <div className="form-check form-check-custom form-check-solid">
                          {/*begin::Input*/}
                          <input
                            className="form-check-input me-3"
                            name="email_notification_5"
                            type="checkbox"
                            defaultValue={5}
                            id="kt_modal_update_email_notification_5"
                          />
                          {/*end::Input*/}
                          {/*begin::Label*/}
                          <label
                            className="form-check-label"
                            htmlFor="kt_modal_update_email_notification_5"
                          >
                            <div className="fw-bold">Mentions</div>
                            <div className="text-gray-600">
                              Receive a notification if a teammate mentions you in
                              a note.
                            </div>
                          </label>
                          {/*end::Label*/}
                        </div>
                        {/*end::Checkbox*/}
                      </div>
                      {/*end::Item*/}
                      <div className="separator separator-dashed my-5" />
                      {/*begin::Item*/}
                      <div className="d-flex">
                        {/*begin::Checkbox*/}
                        <div className="form-check form-check-custom form-check-solid">
                          {/*begin::Input*/}
                          <input
                            className="form-check-input me-3"
                            name="email_notification_6"
                            type="checkbox"
                            defaultValue={6}
                            id="kt_modal_update_email_notification_6"
                          />
                          {/*end::Input*/}
                          {/*begin::Label*/}
                          <label
                            className="form-check-label"
                            htmlFor="kt_modal_update_email_notification_6"
                          >
                            <div className="fw-bold">Invoice Mispayments</div>
                            <div className="text-gray-600">
                              Receive a notification if a customer sends an
                              incorrect amount to pay their invoice.
                            </div>
                          </label>
                          {/*end::Label*/}
                        </div>
                        {/*end::Checkbox*/}
                      </div>
                      {/*end::Item*/}
                      <div className="separator separator-dashed my-5" />
                      {/*begin::Item*/}
                      <div className="d-flex">
                        {/*begin::Checkbox*/}
                        <div className="form-check form-check-custom form-check-solid">
                          {/*begin::Input*/}
                          <input
                            className="form-check-input me-3"
                            name="email_notification_7"
                            type="checkbox"
                            defaultValue={7}
                            id="kt_modal_update_email_notification_7"
                          />
                          {/*end::Input*/}
                          {/*begin::Label*/}
                          <label
                            className="form-check-label"
                            htmlFor="kt_modal_update_email_notification_7"
                          >
                            <div className="fw-bold">Webhooks</div>
                            <div className="text-gray-600">
                              Receive notifications about consistently failing
                              webhook endpoints.
                            </div>
                          </label>
                          {/*end::Label*/}
                        </div>
                        {/*end::Checkbox*/}
                      </div>
                      {/*end::Item*/}
                      <div className="separator separator-dashed my-5" />
                      {/*begin::Item*/}
                      <div className="d-flex">
                        {/*begin::Checkbox*/}
                        <div className="form-check form-check-custom form-check-solid">
                          {/*begin::Input*/}
                          <input
                            className="form-check-input me-3"
                            name="email_notification_8"
                            type="checkbox"
                            defaultValue={8}
                            id="kt_modal_update_email_notification_8"
                          />
                          {/*end::Input*/}
                          {/*begin::Label*/}
                          <label
                            className="form-check-label"
                            htmlFor="kt_modal_update_email_notification_8"
                          >
                            <div className="fw-bold">Trial</div>
                            <div className="text-gray-600">
                              Receive helpful tips when you try out our products.
                            </div>
                          </label>
                          {/*end::Label*/}
                        </div>
                        {/*end::Checkbox*/}
                      </div>
                      {/*end::Item*/}
                      {/*begin::Action buttons*/}
                      <div className="d-flex justify-content-end align-items-center mt-12">
                        {/*begin::Button*/}
                        <button
                          type="button"
                          className="btn btn-light me-5"
                          id="kt_users_email_notification_cancel"
                        >
                          Cancel
                        </button>
                        {/*end::Button*/}
                        {/*begin::Button*/}
                        <button
                          type="button"
                          className="btn btn-primary"
                          id="kt_users_email_notification_submit"
                        >
                          <span className="indicator-label">Save</span>
                          <span className="indicator-progress">
                            Please wait...
                            <span className="spinner-border spinner-border-sm align-middle ms-2" />
                          </span>
                        </button>
                        {/*end::Button*/}
                      </div>
                      {/*begin::Action buttons*/}
                    </form>
                    {/*end::Form*/}
                  </div>
                  {/*end::Card body*/}
                  {/*begin::Card footer*/}
                  {/*end::Card footer*/}
                </div>
                {/*end::Card*/}
              </div>
              {/*end:::Tab pane*/}
              {/*begin:::Tab pane*/}
              <div
                className="tab-pane fade"
                id="kt_user_view_overview_events_and_logs_tab"
                role="tabpanel"
              >
                {/*begin::Card*/}
                <div className="card pt-4 mb-6 mb-xl-9">
                  {/*begin::Card header*/}
                  <div className="card-header border-0">
                    {/*begin::Card title*/}
                    <div className="card-title">
                      <h2>Login Sessions</h2>
                    </div>
                    {/*end::Card title*/}
                    {/*begin::Card toolbar*/}
                    <div className="card-toolbar">
                      {/*begin::Filter*/}
                      <button
                        type="button"
                        className="btn btn-sm btn-flex btn-light-primary"
                        id="kt_modal_sign_out_sesions"
                      >
                        <i className="ki-duotone ki-entrance-right fs-3">
                          <span className="path1" />
                          <span className="path2" />
                        </i>
                        Sign out all sessions
                      </button>
                      {/*end::Filter*/}
                    </div>
                    {/*end::Card toolbar*/}
                  </div>
                  {/*end::Card header*/}
                  {/*begin::Card body*/}
                  <div className="card-body pt-0 pb-5">
                    {/*begin::Table wrapper*/}
                    <div className="table-responsive">
                      {/*begin::Table*/}
                      <table
                        className="table align-middle table-row-dashed gy-5"
                        id="kt_table_users_login_session"
                      >
                        <thead className="border-bottom border-gray-200 fs-7 fw-bold">
                          <tr className="text-start text-muted text-uppercase gs-0">
                            <th className="min-w-100px">Location</th>
                            <th>Device</th>
                            <th>IP Address</th>
                            <th className="min-w-125px">Time</th>
                            <th className="min-w-70px">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="fs-6 fw-semibold text-gray-600">
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
                              <a href="#" data-kt-users-sign-out="single_user">
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
                {/*end::Card*/}
                {/*begin::Card*/}
                <div className="card pt-4 mb-6 mb-xl-9">
                  {/*begin::Card header*/}
                  <div className="card-header border-0">
                    {/*begin::Card title*/}
                    <div className="card-title">
                      <h2>Logs</h2>
                    </div>
                    {/*end::Card title*/}
                    {/*begin::Card toolbar*/}
                    <div className="card-toolbar">
                      {/*begin::Button*/}
                      <button
                        type="button"
                        className="btn btn-sm btn-light-primary"
                      >
                        <i className="ki-duotone ki-cloud-download fs-3">
                          <span className="path1" />
                          <span className="path2" />
                        </i>
                        Download Report
                      </button>
                      {/*end::Button*/}
                    </div>
                    {/*end::Card toolbar*/}
                  </div>
                  {/*end::Card header*/}
                  {/*begin::Card body*/}
                  <div className="card-body py-0">
                    {/*begin::Table wrapper*/}
                    <div className="table-responsive">
                      {/*begin::Table*/}
                      <table
                        className="table align-middle table-row-dashed fw-semibold text-gray-600 fs-6 gy-5"
                        id="kt_table_users_logs"
                      >
                        <tbody>
                          <tr>
                            <td className="min-w-70px">
                              <div className="badge badge-light-success">
                                200 OK
                              </div>
                            </td>
                            <td>POST /v1/invoices/in_7705_1223/payment</td>
                            <td className="pe-0 text-end min-w-200px">
                              15 Apr 2023, 10:30 am
                            </td>
                          </tr>
                          <tr>
                            <td className="min-w-70px">
                              <div className="badge badge-light-warning">
                                404 WRN
                              </div>
                            </td>
                            <td>POST /v1/customer/c_64aace77185d4/not_found</td>
                            <td className="pe-0 text-end min-w-200px">
                              19 Aug 2023, 6:05 pm
                            </td>
                          </tr>
                          <tr>
                            <td className="min-w-70px">
                              <div className="badge badge-light-danger">
                                500 ERR
                              </div>
                            </td>
                            <td>POST /v1/invoice/in_2457_2502/invalid</td>
                            <td className="pe-0 text-end min-w-200px">
                              10 Nov 2023, 11:30 am
                            </td>
                          </tr>
                          <tr>
                            <td className="min-w-70px">
                              <div className="badge badge-light-warning">
                                404 WRN
                              </div>
                            </td>
                            <td>POST /v1/customer/c_64aace77185d4/not_found</td>
                            <td className="pe-0 text-end min-w-200px">
                              24 Jun 2023, 11:30 am
                            </td>
                          </tr>
                          <tr>
                            <td className="min-w-70px">
                              <div className="badge badge-light-success">
                                200 OK
                              </div>
                            </td>
                            <td>POST /v1/invoices/in_7080_3399/payment</td>
                            <td className="pe-0 text-end min-w-200px">
                              25 Oct 2023, 11:05 am
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      {/*end::Table*/}
                    </div>
                    {/*end::Table wrapper*/}
                  </div>
                  {/*end::Card body*/}
                </div>
                {/*end::Card*/}
                {/*begin::Card*/}
                <div className="card pt-4 mb-6 mb-xl-9">
                  {/*begin::Card header*/}
                  <div className="card-header border-0">
                    {/*begin::Card title*/}
                    <div className="card-title">
                      <h2>Events</h2>
                    </div>
                    {/*end::Card title*/}
                    {/*begin::Card toolbar*/}
                    <div className="card-toolbar">
                      {/*begin::Button*/}
                      <button
                        type="button"
                        className="btn btn-sm btn-light-primary"
                      >
                        <i className="ki-duotone ki-cloud-download fs-3">
                          <span className="path1" />
                          <span className="path2" />
                        </i>
                        Download Report
                      </button>
                      {/*end::Button*/}
                    </div>
                    {/*end::Card toolbar*/}
                  </div>
                  {/*end::Card header*/}
                  {/*begin::Card body*/}
                  <div className="card-body py-0">
                    {/*begin::Table*/}
                    <table
                      className="table align-middle table-row-dashed fs-6 text-gray-600 fw-semibold gy-5"
                      id="kt_table_customers_events"
                    >
                      <tbody>
                        <tr>
                          <td className="min-w-400px">
                            <a
                              href="#"
                              className="text-gray-600 text-hover-primary me-1"
                            >
                              Emma Smith
                            </a>
                            has made payment to
                            <a
                              href="#"
                              className="fw-bold text-gray-900 text-hover-primary"
                            >
                              #XRS-45670
                            </a>
                          </td>
                          <td className="pe-0 text-gray-600 text-end min-w-200px">
                            20 Jun 2023, 2:40 pm
                          </td>
                        </tr>
                        <tr>
                          <td className="min-w-400px">
                            <a
                              href="#"
                              className="text-gray-600 text-hover-primary me-1"
                            >
                              Max Smith
                            </a>
                            has made payment to
                            <a
                              href="#"
                              className="fw-bold text-gray-900 text-hover-primary"
                            >
                              #SDK-45670
                            </a>
                          </td>
                          <td className="pe-0 text-gray-600 text-end min-w-200px">
                            15 Apr 2023, 6:43 am
                          </td>
                        </tr>
                        <tr>
                          <td className="min-w-400px">
                            Invoice
                            <a
                              href="#"
                              className="fw-bold text-gray-900 text-hover-primary me-1"
                            >
                              #KIO-45656
                            </a>
                            status has changed from
                            <span className="badge badge-light-succees me-1">
                              In Transit
                            </span>
                            to
                            <span className="badge badge-light-success">
                              Approved
                            </span>
                          </td>
                          <td className="pe-0 text-gray-600 text-end min-w-200px">
                            15 Apr 2023, 5:30 pm
                          </td>
                        </tr>
                        <tr>
                          <td className="min-w-400px">
                            <a
                              href="#"
                              className="text-gray-600 text-hover-primary me-1"
                            >
                              Brian Cox
                            </a>
                            has made payment to
                            <a
                              href="#"
                              className="fw-bold text-gray-900 text-hover-primary"
                            >
                              #OLP-45690
                            </a>
                          </td>
                          <td className="pe-0 text-gray-600 text-end min-w-200px">
                            05 May 2023, 11:05 am
                          </td>
                        </tr>
                        <tr>
                          <td className="min-w-400px">
                            <a
                              href="#"
                              className="text-gray-600 text-hover-primary me-1"
                            >
                              Max Smith
                            </a>
                            has made payment to
                            <a
                              href="#"
                              className="fw-bold text-gray-900 text-hover-primary"
                            >
                              #SDK-45670
                            </a>
                          </td>
                          <td className="pe-0 text-gray-600 text-end min-w-200px">
                            19 Aug 2023, 5:20 pm
                          </td>
                        </tr>
                        <tr>
                          <td className="min-w-400px">
                            <a
                              href="#"
                              className="text-gray-600 text-hover-primary me-1"
                            >
                              Emma Smith
                            </a>
                            has made payment to
                            <a
                              href="#"
                              className="fw-bold text-gray-900 text-hover-primary"
                            >
                              #XRS-45670
                            </a>
                          </td>
                          <td className="pe-0 text-gray-600 text-end min-w-200px">
                            21 Feb 2023, 5:20 pm
                          </td>
                        </tr>
                        <tr>
                          <td className="min-w-400px">
                            <a
                              href="#"
                              className="text-gray-600 text-hover-primary me-1"
                            >
                              Emma Smith
                            </a>
                            has made payment to
                            <a
                              href="#"
                              className="fw-bold text-gray-900 text-hover-primary"
                            >
                              #XRS-45670
                            </a>
                          </td>
                          <td className="pe-0 text-gray-600 text-end min-w-200px">
                            20 Dec 2023, 6:43 am
                          </td>
                        </tr>
                        <tr>
                          <td className="min-w-400px">
                            Invoice
                            <a
                              href="#"
                              className="fw-bold text-gray-900 text-hover-primary me-1"
                            >
                              #WER-45670
                            </a>
                            is
                            <span className="badge badge-light-info">
                              In Progress
                            </span>
                          </td>
                          <td className="pe-0 text-gray-600 text-end min-w-200px">
                            22 Sep 2023, 10:10 pm
                          </td>
                        </tr>
                        <tr>
                          <td className="min-w-400px">
                            Invoice
                            <a
                              href="#"
                              className="fw-bold text-gray-900 text-hover-primary me-1"
                            >
                              #WER-45670
                            </a>
                            is
                            <span className="badge badge-light-info">
                              In Progress
                            </span>
                          </td>
                          <td className="pe-0 text-gray-600 text-end min-w-200px">
                            05 May 2023, 2:40 pm
                          </td>
                        </tr>
                        <tr>
                          <td className="min-w-400px">
                            Invoice
                            <a
                              href="#"
                              className="fw-bold text-gray-900 text-hover-primary me-1"
                            >
                              #SEP-45656
                            </a>
                            status has changed from
                            <span className="badge badge-light-warning me-1">
                              Pending
                            </span>
                            to
                            <span className="badge badge-light-info">
                              In Progress
                            </span>
                          </td>
                          <td className="pe-0 text-gray-600 text-end min-w-200px">
                            15 Apr 2023, 9:23 pm
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    {/*end::Table*/}
                  </div>
                  {/*end::Card body*/}
                </div>
                {/*end::Card*/}
              </div>
              {/*end:::Tab pane*/}
            </div>
            {/*end:::Tab content*/}
          </div>
          {/*end::Content*/}
        </div>
        {/*end::Layout*/}
        {/*begin::Modals*/}
        {/*begin::Modal - Update user details*/}
        <div
          className="modal fade"
          id="kt_modal_update_details"
          tabIndex={-1}
          aria-hidden="true"
        >
          {/*begin::Modal dialog*/}
          <div className="modal-dialog modal-dialog-centered mw-650px">
            {/*begin::Modal content*/}
            <div className="modal-content">
              {/*begin::Form*/}
              <form className="form" action="#" id="kt_modal_update_user_form">
                {/*begin::Modal header*/}
                <div className="modal-header" id="kt_modal_update_user_header">
                  {/*begin::Modal title*/}
                  <h2 className="fw-bold">Update User Details</h2>
                  {/*end::Modal title*/}
                  {/*begin::Close*/}
                  <div
                    className="btn btn-icon btn-sm btn-active-icon-primary"
                    data-kt-users-modal-action="close"
                  >
                    <i className="ki-duotone ki-cross fs-1">
                      <span className="path1" />
                      <span className="path2" />
                    </i>
                  </div>
                  {/*end::Close*/}
                </div>
                {/*end::Modal header*/}
                {/*begin::Modal body*/}
                <div className="modal-body py-10 px-lg-17">
                  {/*begin::Scroll*/}
                  <div
                    className="d-flex flex-column scroll-y me-n7 pe-7"
                    id="kt_modal_update_user_scroll"
                    data-kt-scroll="true"
                    data-kt-scroll-activate="{default: false, lg: true}"
                    data-kt-scroll-max-height="auto"
                    data-kt-scroll-dependencies="#kt_modal_update_user_header"
                    data-kt-scroll-wrappers="#kt_modal_update_user_scroll"
                    data-kt-scroll-offset="300px"
                  >
                    {/*begin::User toggle*/}
                    <div
                      className="fw-bolder fs-3 rotate collapsible mb-7"
                      data-bs-toggle="collapse"
                      href="#kt_modal_update_user_user_info"
                      role="button"
                      aria-expanded="false"
                      aria-controls="kt_modal_update_user_user_info"
                    >
                      User Information
                      <span className="ms-2 rotate-180">
                        <i className="ki-duotone ki-down fs-3" />
                      </span>
                    </div>
                    {/*end::User toggle*/}
                    {/*begin::User form*/}
                    <div
                      id="kt_modal_update_user_user_info"
                      className="collapse show"
                    >
                      {/*begin::Input group*/}
                      <div className="mb-7">
                        {/*begin::Label*/}
                        <label className="fs-6 fw-semibold mb-2">
                          <span>Update Avatar</span>
                          <span
                            className="ms-1"
                            data-bs-toggle="tooltip"
                            title="Allowed file types: png, jpg, jpeg."
                          >
                            <i className="ki-duotone ki-information fs-7">
                              <span className="path1" />
                              <span className="path2" />
                              <span className="path3" />
                            </i>
                          </span>
                        </label>
                        {/*end::Label*/}
                        {/*begin::Image input wrapper*/}
                        <div className="mt-1">
                          {/*begin::Image placeholder*/}
                          <style
                            dangerouslySetInnerHTML={{
                              __html:
                                ".image-input-placeholder { background-image: url('assets/media/svg/avatars/blank.svg'); } [data-bs-theme=\"dark\"] .image-input-placeholder { background-image: url('assets/media/svg/avatars/blank-dark.svg'); }"
                            }}
                          />
                          {/*end::Image placeholder*/}
                          {/*begin::Image input*/}
                          <div
                            className="image-input image-input-outline image-input-placeholder"
                            data-kt-image-input="true"
                          >
                            {/*begin::Preview existing avatar*/}
                            <div
                              className="image-input-wrapper w-125px h-125px"
                              style={{
                                backgroundImage:
                                  "url(assets/media/avatars/300-6.jpg"
                              }}
                            />
                            {/*end::Preview existing avatar*/}
                            {/*begin::Edit*/}
                            <label
                              className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                              data-kt-image-input-action="change"
                              data-bs-toggle="tooltip"
                              title="Change avatar"
                            >
                              <i className="ki-duotone ki-pencil fs-7">
                                <span className="path1" />
                                <span className="path2" />
                              </i>
                              {/*begin::Inputs*/}
                              <input
                                type="file"
                                name="avatar"
                                accept=".png, .jpg, .jpeg"
                              />
                              <input type="hidden" name="avatar_remove" />
                              {/*end::Inputs*/}
                            </label>
                            {/*end::Edit*/}
                            {/*begin::Cancel*/}
                            <span
                              className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                              data-kt-image-input-action="cancel"
                              data-bs-toggle="tooltip"
                              title="Cancel avatar"
                            >
                              <i className="ki-duotone ki-cross fs-2">
                                <span className="path1" />
                                <span className="path2" />
                              </i>
                            </span>
                            {/*end::Cancel*/}
                            {/*begin::Remove*/}
                            <span
                              className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                              data-kt-image-input-action="remove"
                              data-bs-toggle="tooltip"
                              title="Remove avatar"
                            >
                              <i className="ki-duotone ki-cross fs-2">
                                <span className="path1" />
                                <span className="path2" />
                              </i>
                            </span>
                            {/*end::Remove*/}
                          </div>
                          {/*end::Image input*/}
                        </div>
                        {/*end::Image input wrapper*/}
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Input group*/}
                      <div className="fv-row mb-7">
                        {/*begin::Label*/}
                        <label className="fs-6 fw-semibold mb-2">Name</label>
                        {/*end::Label*/}
                        {/*begin::Input*/}
                        <input
                          type="text"
                          className="form-control form-control-solid"
                          placeholder=""
                          name="name"
                          defaultValue="Emma Smith"
                        />
                        {/*end::Input*/}
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Input group*/}
                      <div className="fv-row mb-7">
                        {/*begin::Label*/}
                        <label className="fs-6 fw-semibold mb-2">
                          <span>Email</span>
                          <span
                            className="ms-1"
                            data-bs-toggle="tooltip"
                            title="Email address must be active"
                          >
                            <i className="ki-duotone ki-information fs-7">
                              <span className="path1" />
                              <span className="path2" />
                              <span className="path3" />
                            </i>
                          </span>
                        </label>
                        {/*end::Label*/}
                        {/*begin::Input*/}
                        <input
                          type="email"
                          className="form-control form-control-solid"
                          placeholder=""
                          name="email"
                          defaultValue="smith@kpmg.com"
                        />
                        {/*end::Input*/}
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Input group*/}
                      <div className="fv-row mb-7">
                        {/*begin::Label*/}
                        <label className="fs-6 fw-semibold mb-2">
                          Description
                        </label>
                        {/*end::Label*/}
                        {/*begin::Input*/}
                        <input
                          type="text"
                          className="form-control form-control-solid"
                          placeholder=""
                          name="description"
                        />
                        {/*end::Input*/}
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Input group*/}
                      <div className="fv-row mb-15">
                        {/*begin::Label*/}
                        <label className="fs-6 fw-semibold mb-2">Language</label>
                        {/*end::Label*/}
                        {/*begin::Input*/}
                        <select
                          name="language"
                          aria-label="Select a Language"
                          data-control="select2"
                          data-placeholder="Select a Language..."
                          className="form-select form-select-solid"
                          data-dropdown-parent="#kt_modal_update_details"
                        >
                          <option />
                          <option value="id">
                            Bahasa Indonesia - Indonesian
                          </option>
                          <option value="msa">Bahasa Melayu - Malay</option>
                          <option value="ca">Català - Catalan</option>
                          <option value="cs">Čeština - Czech</option>
                          <option value="da">Dansk - Danish</option>
                          <option value="de">Deutsch - German</option>
                          <option value="en">English</option>
                          <option value="en-gb">
                            English UK - British English
                          </option>
                          <option value="es">Español - Spanish</option>
                          <option value="fil">Filipino</option>
                          <option value="fr">Français - French</option>
                          <option value="ga">Gaeilge - Irish (beta)</option>
                          <option value="gl">Galego - Galician (beta)</option>
                          <option value="hr">Hrvatski - Croatian</option>
                          <option value="it">Italiano - Italian</option>
                          <option value="hu">Magyar - Hungarian</option>
                          <option value="nl">Nederlands - Dutch</option>
                          <option value="no">Norsk - Norwegian</option>
                          <option value="pl">Polski - Polish</option>
                          <option value="pt">Português - Portuguese</option>
                          <option value="ro">Română - Romanian</option>
                          <option value="sk">Slovenčina - Slovak</option>
                          <option value="fi">Suomi - Finnish</option>
                          <option value="sv">Svenska - Swedish</option>
                          <option value="vi">Tiếng Việt - Vietnamese</option>
                          <option value="tr">Türkçe - Turkish</option>
                          <option value="el">Ελληνικά - Greek</option>
                          <option value="bg">Български език - Bulgarian</option>
                          <option value="ru">Русский - Russian</option>
                          <option value="sr">Српски - Serbian</option>
                          <option value="uk">Українська мова - Ukrainian</option>
                          <option value="he">עִבְרִית - Hebrew</option>
                          <option value="ur">اردو - Urdu (beta)</option>
                          <option value="ar">العربية - Arabic</option>
                          <option value="fa">فارسی - Persian</option>
                          <option value="mr">मराठी - Marathi</option>
                          <option value="hi">हिन्दी - Hindi</option>
                          <option value="bn">বাংলা - Bangla</option>
                          <option value="gu">ગુજરાતી - Gujarati</option>
                          <option value="ta">தமிழ் - Tamil</option>
                          <option value="kn">ಕನ್ನಡ - Kannada</option>
                          <option value="th">ภาษาไทย - Thai</option>
                          <option value="ko">한국어 - Korean</option>
                          <option value="ja">日本語 - Japanese</option>
                          <option value="zh-cn">
                            简体中文 - Simplified Chinese
                          </option>
                          <option value="zh-tw">
                            繁體中文 - Traditional Chinese
                          </option>
                        </select>
                        {/*end::Input*/}
                      </div>
                      {/*end::Input group*/}
                    </div>
                    {/*end::User form*/}
                    {/*begin::Address toggle*/}
                    <div
                      className="fw-bolder fs-3 rotate collapsible mb-7"
                      data-bs-toggle="collapse"
                      href="#kt_modal_update_user_address"
                      role="button"
                      aria-expanded="false"
                      aria-controls="kt_modal_update_user_address"
                    >
                      Address Details
                      <span className="ms-2 rotate-180">
                        <i className="ki-duotone ki-down fs-3" />
                      </span>
                    </div>
                    {/*end::Address toggle*/}
                    {/*begin::Address form*/}
                    <div
                      id="kt_modal_update_user_address"
                      className="collapse show"
                    >
                      {/*begin::Input group*/}
                      <div className="d-flex flex-column mb-7 fv-row">
                        {/*begin::Label*/}
                        <label className="fs-6 fw-semibold mb-2">
                          Address Line 1
                        </label>
                        {/*end::Label*/}
                        {/*begin::Input*/}
                        <input
                          className="form-control form-control-solid"
                          placeholder=""
                          name="address1"
                          defaultValue="101, Collins Street"
                        />
                        {/*end::Input*/}
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Input group*/}
                      <div className="d-flex flex-column mb-7 fv-row">
                        {/*begin::Label*/}
                        <label className="fs-6 fw-semibold mb-2">
                          Address Line 2
                        </label>
                        {/*end::Label*/}
                        {/*begin::Input*/}
                        <input
                          className="form-control form-control-solid"
                          placeholder=""
                          name="address2"
                        />
                        {/*end::Input*/}
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Input group*/}
                      <div className="d-flex flex-column mb-7 fv-row">
                        {/*begin::Label*/}
                        <label className="fs-6 fw-semibold mb-2">Town</label>
                        {/*end::Label*/}
                        {/*begin::Input*/}
                        <input
                          className="form-control form-control-solid"
                          placeholder=""
                          name="city"
                          defaultValue="Melbourne"
                        />
                        {/*end::Input*/}
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Input group*/}
                      <div className="row g-9 mb-7">
                        {/*begin::Col*/}
                        <div className="col-md-6 fv-row">
                          {/*begin::Label*/}
                          <label className="fs-6 fw-semibold mb-2">
                            State / Province
                          </label>
                          {/*end::Label*/}
                          {/*begin::Input*/}
                          <input
                            className="form-control form-control-solid"
                            placeholder=""
                            name="state"
                            defaultValue="Victoria"
                          />
                          {/*end::Input*/}
                        </div>
                        {/*end::Col*/}
                        {/*begin::Col*/}
                        <div className="col-md-6 fv-row">
                          {/*begin::Label*/}
                          <label className="fs-6 fw-semibold mb-2">
                            Post Code
                          </label>
                          {/*end::Label*/}
                          {/*begin::Input*/}
                          <input
                            className="form-control form-control-solid"
                            placeholder=""
                            name="postcode"
                            defaultValue={3000}
                          />
                          {/*end::Input*/}
                        </div>
                        {/*end::Col*/}
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Input group*/}
                      <div className="d-flex flex-column mb-7 fv-row">
                        {/*begin::Label*/}
                        <label className="fs-6 fw-semibold mb-2">
                          <span>Country</span>
                          <span
                            className="ms-1"
                            data-bs-toggle="tooltip"
                            title="Country of origination"
                          >
                            <i className="ki-duotone ki-information fs-7">
                              <span className="path1" />
                              <span className="path2" />
                              <span className="path3" />
                            </i>
                          </span>
                        </label>
                        {/*end::Label*/}
                        {/*begin::Input*/}
                        <select
                          name="country"
                          aria-label="Select a Country"
                          data-control="select2"
                          data-placeholder="Select a Country..."
                          className="form-select form-select-solid"
                          data-dropdown-parent="#kt_modal_update_details"
                        >
                          <option value="">Select a Country...</option>
                          <option value="AF">Afghanistan</option>
                          <option value="AX">Aland Islands</option>
                          <option value="AL">Albania</option>
                          <option value="DZ">Algeria</option>
                          <option value="AS">American Samoa</option>
                          <option value="AD">Andorra</option>
                          <option value="AO">Angola</option>
                          <option value="AI">Anguilla</option>
                          <option value="AG">Antigua and Barbuda</option>
                          <option value="AR">Argentina</option>
                          <option value="AM">Armenia</option>
                          <option value="AW">Aruba</option>
                          <option value="AU">Australia</option>
                          <option value="AT">Austria</option>
                          <option value="AZ">Azerbaijan</option>
                          <option value="BS">Bahamas</option>
                          <option value="BH">Bahrain</option>
                          <option value="BD">Bangladesh</option>
                          <option value="BB">Barbados</option>
                          <option value="BY">Belarus</option>
                          <option value="BE">Belgium</option>
                          <option value="BZ">Belize</option>
                          <option value="BJ">Benin</option>
                          <option value="BM">Bermuda</option>
                          <option value="BT">Bhutan</option>
                          <option value="BO">
                            Bolivia, Plurinational State of
                          </option>
                          <option value="BQ">
                            Bonaire, Sint Eustatius and Saba
                          </option>
                          <option value="BA">Bosnia and Herzegovina</option>
                          <option value="BW">Botswana</option>
                          <option value="BR">Brazil</option>
                          <option value="IO">
                            British Indian Ocean Territory
                          </option>
                          <option value="BN">Brunei Darussalam</option>
                          <option value="BG">Bulgaria</option>
                          <option value="BF">Burkina Faso</option>
                          <option value="BI">Burundi</option>
                          <option value="KH">Cambodia</option>
                          <option value="CM">Cameroon</option>
                          <option value="CA">Canada</option>
                          <option value="CV">Cape Verde</option>
                          <option value="KY">Cayman Islands</option>
                          <option value="CF">Central African Republic</option>
                          <option value="TD">Chad</option>
                          <option value="CL">Chile</option>
                          <option value="CN">China</option>
                          <option value="CX">Christmas Island</option>
                          <option value="CC">Cocos (Keeling) Islands</option>
                          <option value="CO">Colombia</option>
                          <option value="KM">Comoros</option>
                          <option value="CK">Cook Islands</option>
                          <option value="CR">Costa Rica</option>
                          <option value="CI">Côte d'Ivoire</option>
                          <option value="HR">Croatia</option>
                          <option value="CU">Cuba</option>
                          <option value="CW">Curaçao</option>
                          <option value="CZ">Czech Republic</option>
                          <option value="DK">Denmark</option>
                          <option value="DJ">Djibouti</option>
                          <option value="DM">Dominica</option>
                          <option value="DO">Dominican Republic</option>
                          <option value="EC">Ecuador</option>
                          <option value="EG">Egypt</option>
                          <option value="SV">El Salvador</option>
                          <option value="GQ">Equatorial Guinea</option>
                          <option value="ER">Eritrea</option>
                          <option value="EE">Estonia</option>
                          <option value="ET">Ethiopia</option>
                          <option value="FK">Falkland Islands (Malvinas)</option>
                          <option value="FJ">Fiji</option>
                          <option value="FI">Finland</option>
                          <option value="FR">France</option>
                          <option value="PF">French Polynesia</option>
                          <option value="GA">Gabon</option>
                          <option value="GM">Gambia</option>
                          <option value="GE">Georgia</option>
                          <option value="DE">Germany</option>
                          <option value="GH">Ghana</option>
                          <option value="GI">Gibraltar</option>
                          <option value="GR">Greece</option>
                          <option value="GL">Greenland</option>
                          <option value="GD">Grenada</option>
                          <option value="GU">Guam</option>
                          <option value="GT">Guatemala</option>
                          <option value="GG">Guernsey</option>
                          <option value="GN">Guinea</option>
                          <option value="GW">Guinea-Bissau</option>
                          <option value="HT">Haiti</option>
                          <option value="VA">
                            Holy See (Vatican City State)
                          </option>
                          <option value="HN">Honduras</option>
                          <option value="HK">Hong Kong</option>
                          <option value="HU">Hungary</option>
                          <option value="IS">Iceland</option>
                          <option value="IN">India</option>
                          <option value="ID">Indonesia</option>
                          <option value="IR">Iran, Islamic Republic of</option>
                          <option value="IQ">Iraq</option>
                          <option value="IE">Ireland</option>
                          <option value="IM">Isle of Man</option>
                          <option value="IL">Israel</option>
                          <option value="IT">Italy</option>
                          <option value="JM">Jamaica</option>
                          <option value="JP">Japan</option>
                          <option value="JE">Jersey</option>
                          <option value="JO">Jordan</option>
                          <option value="KZ">Kazakhstan</option>
                          <option value="KE">Kenya</option>
                          <option value="KI">Kiribati</option>
                          <option value="KP">
                            Korea, Democratic People's Republic of
                          </option>
                          <option value="KW">Kuwait</option>
                          <option value="KG">Kyrgyzstan</option>
                          <option value="LA">
                            Lao People's Democratic Republic
                          </option>
                          <option value="LV">Latvia</option>
                          <option value="LB">Lebanon</option>
                          <option value="LS">Lesotho</option>
                          <option value="LR">Liberia</option>
                          <option value="LY">Libya</option>
                          <option value="LI">Liechtenstein</option>
                          <option value="LT">Lithuania</option>
                          <option value="LU">Luxembourg</option>
                          <option value="MO">Macao</option>
                          <option value="MG">Madagascar</option>
                          <option value="MW">Malawi</option>
                          <option value="MY">Malaysia</option>
                          <option value="MV">Maldives</option>
                          <option value="ML">Mali</option>
                          <option value="MT">Malta</option>
                          <option value="MH">Marshall Islands</option>
                          <option value="MQ">Martinique</option>
                          <option value="MR">Mauritania</option>
                          <option value="MU">Mauritius</option>
                          <option value="MX">Mexico</option>
                          <option value="FM">
                            Micronesia, Federated States of
                          </option>
                          <option value="MD">Moldova, Republic of</option>
                          <option value="MC">Monaco</option>
                          <option value="MN">Mongolia</option>
                          <option value="ME">Montenegro</option>
                          <option value="MS">Montserrat</option>
                          <option value="MA">Morocco</option>
                          <option value="MZ">Mozambique</option>
                          <option value="MM">Myanmar</option>
                          <option value="NA">Namibia</option>
                          <option value="NR">Nauru</option>
                          <option value="NP">Nepal</option>
                          <option value="NL">Netherlands</option>
                          <option value="NZ">New Zealand</option>
                          <option value="NI">Nicaragua</option>
                          <option value="NE">Niger</option>
                          <option value="NG">Nigeria</option>
                          <option value="NU">Niue</option>
                          <option value="NF">Norfolk Island</option>
                          <option value="MP">Northern Mariana Islands</option>
                          <option value="NO">Norway</option>
                          <option value="OM">Oman</option>
                          <option value="PK">Pakistan</option>
                          <option value="PW">Palau</option>
                          <option value="PS">
                            Palestinian Territory, Occupied
                          </option>
                          <option value="PA">Panama</option>
                          <option value="PG">Papua New Guinea</option>
                          <option value="PY">Paraguay</option>
                          <option value="PE">Peru</option>
                          <option value="PH">Philippines</option>
                          <option value="PL">Poland</option>
                          <option value="PT">Portugal</option>
                          <option value="PR">Puerto Rico</option>
                          <option value="QA">Qatar</option>
                          <option value="RO">Romania</option>
                          <option value="RU">Russian Federation</option>
                          <option value="RW">Rwanda</option>
                          <option value="BL">Saint Barthélemy</option>
                          <option value="KN">Saint Kitts and Nevis</option>
                          <option value="LC">Saint Lucia</option>
                          <option value="MF">Saint Martin (French part)</option>
                          <option value="VC">
                            Saint Vincent and the Grenadines
                          </option>
                          <option value="WS">Samoa</option>
                          <option value="SM">San Marino</option>
                          <option value="ST">Sao Tome and Principe</option>
                          <option value="SA">Saudi Arabia</option>
                          <option value="SN">Senegal</option>
                          <option value="RS">Serbia</option>
                          <option value="SC">Seychelles</option>
                          <option value="SL">Sierra Leone</option>
                          <option value="SG">Singapore</option>
                          <option value="SX">Sint Maarten (Dutch part)</option>
                          <option value="SK">Slovakia</option>
                          <option value="SI">Slovenia</option>
                          <option value="SB">Solomon Islands</option>
                          <option value="SO">Somalia</option>
                          <option value="ZA">South Africa</option>
                          <option value="KR">South Korea</option>
                          <option value="SS">South Sudan</option>
                          <option value="ES">Spain</option>
                          <option value="LK">Sri Lanka</option>
                          <option value="SD">Sudan</option>
                          <option value="SR">Suriname</option>
                          <option value="SZ">Swaziland</option>
                          <option value="SE">Sweden</option>
                          <option value="CH">Switzerland</option>
                          <option value="SY">Syrian Arab Republic</option>
                          <option value="TW">Taiwan, Province of China</option>
                          <option value="TJ">Tajikistan</option>
                          <option value="TZ">Tanzania, United Republic of</option>
                          <option value="TH">Thailand</option>
                          <option value="TG">Togo</option>
                          <option value="TK">Tokelau</option>
                          <option value="TO">Tonga</option>
                          <option value="TT">Trinidad and Tobago</option>
                          <option value="TN">Tunisia</option>
                          <option value="TR">Turkey</option>
                          <option value="TM">Turkmenistan</option>
                          <option value="TC">Turks and Caicos Islands</option>
                          <option value="TV">Tuvalu</option>
                          <option value="UG">Uganda</option>
                          <option value="UA">Ukraine</option>
                          <option value="AE">United Arab Emirates</option>
                          <option value="GB">United Kingdom</option>
                          <option value="US">United States</option>
                          <option value="UY">Uruguay</option>
                          <option value="UZ">Uzbekistan</option>
                          <option value="VU">Vanuatu</option>
                          <option value="VE">
                            Venezuela, Bolivarian Republic of
                          </option>
                          <option value="VN">Vietnam</option>
                          <option value="VI">Virgin Islands</option>
                          <option value="YE">Yemen</option>
                          <option value="ZM">Zambia</option>
                          <option value="ZW">Zimbabwe</option>
                        </select>
                        {/*end::Input*/}
                      </div>
                      {/*end::Input group*/}
                    </div>
                    {/*end::Address form*/}
                  </div>
                  {/*end::Scroll*/}
                </div>
                {/*end::Modal body*/}
                {/*begin::Modal footer*/}
                <div className="modal-footer flex-center">
                  {/*begin::Button*/}
                  <button
                    type="reset"
                    className="btn btn-light me-3"
                    data-kt-users-modal-action="cancel"
                  >
                    Discard
                  </button>
                  {/*end::Button*/}
                  {/*begin::Button*/}
                  <button
                    type="submit"
                    className="btn btn-primary"
                    data-kt-users-modal-action="submit"
                  >
                    <span className="indicator-label">Submit</span>
                    <span className="indicator-progress">
                      Please wait...
                      <span className="spinner-border spinner-border-sm align-middle ms-2" />
                    </span>
                  </button>
                  {/*end::Button*/}
                </div>
                {/*end::Modal footer*/}
              </form>
              {/*end::Form*/}
            </div>
          </div>
        </div>
        {/*end::Modal - Update user details*/}
        {/*begin::Modal - Add schedule*/}
        <div
          className="modal fade"
          id="kt_modal_add_schedule"
          tabIndex={-1}
          aria-hidden="true"
        >
          {/*begin::Modal dialog*/}
          <div className="modal-dialog modal-dialog-centered mw-650px">
            {/*begin::Modal content*/}
            <div className="modal-content">
              {/*begin::Modal header*/}
              <div className="modal-header">
                {/*begin::Modal title*/}
                <h2 className="fw-bold">Add an Event</h2>
                {/*end::Modal title*/}
                {/*begin::Close*/}
                <div
                  className="btn btn-icon btn-sm btn-active-icon-primary"
                  data-kt-users-modal-action="close"
                >
                  <i className="ki-duotone ki-cross fs-1">
                    <span className="path1" />
                    <span className="path2" />
                  </i>
                </div>
                {/*end::Close*/}
              </div>
              {/*end::Modal header*/}
              {/*begin::Modal body*/}
              <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
                {/*begin::Form*/}
                <form id="kt_modal_add_schedule_form" className="form" action="#">
                  {/*begin::Input group*/}
                  <div className="fv-row mb-7">
                    {/*begin::Label*/}
                    <label className="required fs-6 fw-semibold form-label mb-2">
                      Event Name
                    </label>
                    {/*end::Label*/}
                    {/*begin::Input*/}
                    <input
                      type="text"
                      className="form-control form-control-solid"
                      name="event_name"
                      defaultValue=""
                    />
                    {/*end::Input*/}
                  </div>
                  {/*end::Input group*/}
                  {/*begin::Input group*/}
                  <div className="fv-row mb-7">
                    {/*begin::Label*/}
                    <label className="fs-6 fw-semibold form-label mb-2">
                      <span className="required">Date &amp; Time</span>
                      <span
                        className="ms-2"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-html="true"
                        data-bs-content="Select a date & time."
                      >
                        <i className="ki-duotone ki-information fs-7">
                          <span className="path1" />
                          <span className="path2" />
                          <span className="path3" />
                        </i>
                      </span>
                    </label>
                    {/*end::Label*/}
                    {/*begin::Input*/}
                    <input
                      className="form-control form-control-solid"
                      placeholder="Pick date & time"
                      name="event_datetime"
                      id="kt_modal_add_schedule_datepicker"
                    />
                    {/*end::Input*/}
                  </div>
                  {/*end::Input group*/}
                  {/*begin::Input group*/}
                  <div className="fv-row mb-7">
                    {/*begin::Label*/}
                    <label className="required fs-6 fw-semibold form-label mb-2">
                      Event Organiser
                    </label>
                    {/*end::Label*/}
                    {/*begin::Input*/}
                    <input
                      type="text"
                      className="form-control form-control-solid"
                      name="event_org"
                      defaultValue=""
                    />
                    {/*end::Input*/}
                  </div>
                  {/*end::Input group*/}
                  {/*begin::Input group*/}
                  <div className="fv-row mb-7">
                    {/*begin::Label*/}
                    <label className="required fs-6 fw-semibold form-label mb-2">
                      Send Event Details To
                    </label>
                    {/*end::Label*/}
                    {/*begin::Input*/}
                    <input
                      id="kt_modal_add_schedule_tagify"
                      type="text"
                      className="form-control form-control-solid"
                      name="event_invitees"
                      defaultValue="smith@kpmg.com, melody@altbox.com"
                    />
                    {/*end::Input*/}
                  </div>
                  {/*end::Input group*/}
                  {/*begin::Actions*/}
                  <div className="text-center pt-15">
                    <button
                      type="reset"
                      className="btn btn-light me-3"
                      data-kt-users-modal-action="cancel"
                    >
                      Discard
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      data-kt-users-modal-action="submit"
                    >
                      <span className="indicator-label">Submit</span>
                      <span className="indicator-progress">
                        Please wait...
                        <span className="spinner-border spinner-border-sm align-middle ms-2" />
                      </span>
                    </button>
                  </div>
                  {/*end::Actions*/}
                </form>
                {/*end::Form*/}
              </div>
              {/*end::Modal body*/}
            </div>
            {/*end::Modal content*/}
          </div>
          {/*end::Modal dialog*/}
        </div>
        {/*end::Modal - Add schedule*/}
        {/*begin::Modal - Add task*/}
        <div
          className="modal fade"
          id="kt_modal_add_task"
          tabIndex={-1}
          aria-hidden="true"
        >
          {/*begin::Modal dialog*/}
          <div className="modal-dialog modal-dialog-centered mw-650px">
            {/*begin::Modal content*/}
            <div className="modal-content">
              {/*begin::Modal header*/}
              <div className="modal-header">
                {/*begin::Modal title*/}
                <h2 className="fw-bold">Add a Task</h2>
                {/*end::Modal title*/}
                {/*begin::Close*/}
                <div
                  className="btn btn-icon btn-sm btn-active-icon-primary"
                  data-kt-users-modal-action="close"
                >
                  <i className="ki-duotone ki-cross fs-1">
                    <span className="path1" />
                    <span className="path2" />
                  </i>
                </div>
                {/*end::Close*/}
              </div>
              {/*end::Modal header*/}
              {/*begin::Modal body*/}
              <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
                {/*begin::Form*/}
                <form id="kt_modal_add_task_form" className="form" action="#">
                  {/*begin::Input group*/}
                  <div className="fv-row mb-7">
                    {/*begin::Label*/}
                    <label className="required fs-6 fw-semibold form-label mb-2">
                      Task Name
                    </label>
                    {/*end::Label*/}
                    {/*begin::Input*/}
                    <input
                      type="text"
                      className="form-control form-control-solid"
                      name="task_name"
                      defaultValue=""
                    />
                    {/*end::Input*/}
                  </div>
                  {/*end::Input group*/}
                  {/*begin::Input group*/}
                  <div className="fv-row mb-7">
                    {/*begin::Label*/}
                    <label className="fs-6 fw-semibold form-label mb-2">
                      <span className="required">Task Due Date</span>
                      <span
                        className="ms-2"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-html="true"
                        data-bs-content="Select a due date."
                      >
                        <i className="ki-duotone ki-information fs-7">
                          <span className="path1" />
                          <span className="path2" />
                          <span className="path3" />
                        </i>
                      </span>
                    </label>
                    {/*end::Label*/}
                    {/*begin::Input*/}
                    <input
                      className="form-control form-control-solid"
                      placeholder="Pick date"
                      name="task_duedate"
                      id="kt_modal_add_task_datepicker"
                    />
                    {/*end::Input*/}
                  </div>
                  {/*end::Input group*/}
                  {/*begin::Input group*/}
                  <div className="fv-row mb-7">
                    {/*begin::Label*/}
                    <label className="fs-6 fw-semibold form-label mb-2">
                      Task Description
                    </label>
                    {/*end::Label*/}
                    {/*begin::Input*/}
                    <textarea
                      className="form-control form-control-solid rounded-3"
                      defaultValue={""}
                    />
                    {/*end::Input*/}
                  </div>
                  {/*end::Input group*/}
                  {/*begin::Actions*/}
                  <div className="text-center pt-15">
                    <button
                      type="reset"
                      className="btn btn-light me-3"
                      data-kt-users-modal-action="cancel"
                    >
                      Discard
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      data-kt-users-modal-action="submit"
                    >
                      <span className="indicator-label">Submit</span>
                      <span className="indicator-progress">
                        Please wait...
                        <span className="spinner-border spinner-border-sm align-middle ms-2" />
                      </span>
                    </button>
                  </div>
                  {/*end::Actions*/}
                </form>
                {/*end::Form*/}
              </div>
              {/*end::Modal body*/}
            </div>
            {/*end::Modal content*/}
          </div>
          {/*end::Modal dialog*/}
        </div>
        {/*end::Modal - Add task*/}
        {/*begin::Modal - Update email*/}
        <div
          className="modal fade"
          id="kt_modal_update_email"
          tabIndex={-1}
          aria-hidden="true"
        >
          {/*begin::Modal dialog*/}
          <div className="modal-dialog modal-dialog-centered mw-650px">
            {/*begin::Modal content*/}
            <div className="modal-content">
              {/*begin::Modal header*/}
              <div className="modal-header">
                {/*begin::Modal title*/}
                <h2 className="fw-bold">Update Email Address</h2>
                {/*end::Modal title*/}
                {/*begin::Close*/}
                <div
                  className="btn btn-icon btn-sm btn-active-icon-primary"
                  data-kt-users-modal-action="close"
                >
                  <i className="ki-duotone ki-cross fs-1">
                    <span className="path1" />
                    <span className="path2" />
                  </i>
                </div>
                {/*end::Close*/}
              </div>
              {/*end::Modal header*/}
              {/*begin::Modal body*/}
              <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
                {/*begin::Form*/}
                <form id="kt_modal_update_email_form" className="form" action="#">
                  {/*begin::Notice*/}
                  {/*begin::Notice*/}
                  <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed mb-9 p-6">
                    {/*begin::Icon*/}
                    <i className="ki-duotone ki-information fs-2tx text-primary me-4">
                      <span className="path1" />
                      <span className="path2" />
                      <span className="path3" />
                    </i>
                    {/*end::Icon*/}
                    {/*begin::Wrapper*/}
                    <div className="d-flex flex-stack flex-grow-1">
                      {/*begin::Content*/}
                      <div className="fw-semibold">
                        <div className="fs-6 text-gray-700">
                          Please note that a valid email address is required to
                          complete the email verification.
                        </div>
                      </div>
                      {/*end::Content*/}
                    </div>
                    {/*end::Wrapper*/}
                  </div>
                  {/*end::Notice*/}
                  {/*end::Notice*/}
                  {/*begin::Input group*/}
                  <div className="fv-row mb-7">
                    {/*begin::Label*/}
                    <label className="fs-6 fw-semibold form-label mb-2">
                      <span className="required">Email Address</span>
                    </label>
                    {/*end::Label*/}
                    {/*begin::Input*/}
                    <input
                      className="form-control form-control-solid"
                      placeholder=""
                      name="profile_email"
                      defaultValue="smith@kpmg.com"
                    />
                    {/*end::Input*/}
                  </div>
                  {/*end::Input group*/}
                  {/*begin::Actions*/}
                  <div className="text-center pt-15">
                    <button
                      type="reset"
                      className="btn btn-light me-3"
                      data-kt-users-modal-action="cancel"
                    >
                      Discard
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      data-kt-users-modal-action="submit"
                    >
                      <span className="indicator-label">Submit</span>
                      <span className="indicator-progress">
                        Please wait...
                        <span className="spinner-border spinner-border-sm align-middle ms-2" />
                      </span>
                    </button>
                  </div>
                  {/*end::Actions*/}
                </form>
                {/*end::Form*/}
              </div>
              {/*end::Modal body*/}
            </div>
            {/*end::Modal content*/}
          </div>
          {/*end::Modal dialog*/}
        </div>
        {/*end::Modal - Update email*/}
        {/*begin::Modal - Update password*/}
        <div
          className="modal fade"
          id="kt_modal_update_password"
          tabIndex={-1}
          aria-hidden="true"
        >
          {/*begin::Modal dialog*/}
          <div className="modal-dialog modal-dialog-centered mw-650px">
            {/*begin::Modal content*/}
            <div className="modal-content">
              {/*begin::Modal header*/}
              <div className="modal-header">
                {/*begin::Modal title*/}
                <h2 className="fw-bold">Update Password</h2>
                {/*end::Modal title*/}
                {/*begin::Close*/}
                <div
                  className="btn btn-icon btn-sm btn-active-icon-primary"
                  data-kt-users-modal-action="close"
                >
                  <i className="ki-duotone ki-cross fs-1">
                    <span className="path1" />
                    <span className="path2" />
                  </i>
                </div>
                {/*end::Close*/}
              </div>
              {/*end::Modal header*/}
              {/*begin::Modal body*/}
              <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
                {/*begin::Form*/}
                <form
                  id="kt_modal_update_password_form"
                  className="form"
                  action="#"
                >
                  {/*begin::Input group=*/}
                  <div className="fv-row mb-10">
                    <label className="required form-label fs-6 mb-2">
                      Current Password
                    </label>
                    <input
                      className="form-control form-control-lg form-control-solid"
                      type="password"
                      placeholder=""
                      name="current_password"
                      autoComplete="off"
                    />
                  </div>
                  {/*end::Input group=*/}
                  {/*begin::Input group*/}
                  <div className="mb-10 fv-row" data-kt-password-meter="true">
                    {/*begin::Wrapper*/}
                    <div className="mb-1">
                      {/*begin::Label*/}
                      <label className="form-label fw-semibold fs-6 mb-2">
                        New Password
                      </label>
                      {/*end::Label*/}
                      {/*begin::Input wrapper*/}
                      <div className="position-relative mb-3">
                        <input
                          className="form-control form-control-lg form-control-solid"
                          type="password"
                          placeholder=""
                          name="new_password"
                          autoComplete="off"
                        />
                        <span
                          className="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2"
                          data-kt-password-meter-control="visibility"
                        >
                          <i className="ki-duotone ki-eye-slash fs-1">
                            <span className="path1" />
                            <span className="path2" />
                            <span className="path3" />
                            <span className="path4" />
                          </i>
                          <i className="ki-duotone ki-eye d-none fs-1">
                            <span className="path1" />
                            <span className="path2" />
                            <span className="path3" />
                          </i>
                        </span>
                      </div>
                      {/*end::Input wrapper*/}
                      {/*begin::Meter*/}
                      <div
                        className="d-flex align-items-center mb-3"
                        data-kt-password-meter-control="highlight"
                      >
                        <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2" />
                        <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2" />
                        <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2" />
                        <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px" />
                      </div>
                      {/*end::Meter*/}
                    </div>
                    {/*end::Wrapper*/}
                    {/*begin::Hint*/}
                    <div className="text-muted">
                      Use 8 or more characters with a mix of letters, numbers
                      &amp; symbols.
                    </div>
                    {/*end::Hint*/}
                  </div>
                  {/*end::Input group=*/}
                  {/*begin::Input group=*/}
                  <div className="fv-row mb-10">
                    <label className="form-label fw-semibold fs-6 mb-2">
                      Confirm New Password
                    </label>
                    <input
                      className="form-control form-control-lg form-control-solid"
                      type="password"
                      placeholder=""
                      name="confirm_password"
                      autoComplete="off"
                    />
                  </div>
                  {/*end::Input group=*/}
                  {/*begin::Actions*/}
                  <div className="text-center pt-15">
                    <button
                      type="reset"
                      className="btn btn-light me-3"
                      data-kt-users-modal-action="cancel"
                    >
                      Discard
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      data-kt-users-modal-action="submit"
                    >
                      <span className="indicator-label">Submit</span>
                      <span className="indicator-progress">
                        Please wait...
                        <span className="spinner-border spinner-border-sm align-middle ms-2" />
                      </span>
                    </button>
                  </div>
                  {/*end::Actions*/}
                </form>
                {/*end::Form*/}
              </div>
              {/*end::Modal body*/}
            </div>
            {/*end::Modal content*/}
          </div>
          {/*end::Modal dialog*/}
        </div>
        {/*end::Modal - Update password*/}
        {/*begin::Modal - Update role*/}
        <div
          className="modal fade"
          id="kt_modal_update_role"
          tabIndex={-1}
          aria-hidden="true"
        >
          {/*begin::Modal dialog*/}
          <div className="modal-dialog modal-dialog-centered mw-650px">
            {/*begin::Modal content*/}
            <div className="modal-content">
              {/*begin::Modal header*/}
              <div className="modal-header">
                {/*begin::Modal title*/}
                <h2 className="fw-bold">Update User Role</h2>
                {/*end::Modal title*/}
                {/*begin::Close*/}
                <div
                  className="btn btn-icon btn-sm btn-active-icon-primary"
                  data-kt-users-modal-action="close"
                >
                  <i className="ki-duotone ki-cross fs-1">
                    <span className="path1" />
                    <span className="path2" />
                  </i>
                </div>
                {/*end::Close*/}
              </div>
              {/*end::Modal header*/}
              {/*begin::Modal body*/}
              <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
                {/*begin::Form*/}
                <form id="kt_modal_update_role_form" className="form" action="#">
                  {/*begin::Notice*/}
                  {/*begin::Notice*/}
                  <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed mb-9 p-6">
                    {/*begin::Icon*/}
                    <i className="ki-duotone ki-information fs-2tx text-primary me-4">
                      <span className="path1" />
                      <span className="path2" />
                      <span className="path3" />
                    </i>
                    {/*end::Icon*/}
                    {/*begin::Wrapper*/}
                    <div className="d-flex flex-stack flex-grow-1">
                      {/*begin::Content*/}
                      <div className="fw-semibold">
                        <div className="fs-6 text-gray-700">
                          Please note that reducing a user role rank, that user
                          will lose all priviledges that was assigned to the
                          previous role.
                        </div>
                      </div>
                      {/*end::Content*/}
                    </div>
                    {/*end::Wrapper*/}
                  </div>
                  {/*end::Notice*/}
                  {/*end::Notice*/}
                  {/*begin::Input group*/}
                  <div className="fv-row mb-7">
                    {/*begin::Label*/}
                    <label className="fs-6 fw-semibold form-label mb-5">
                      <span className="required">Select a user role</span>
                    </label>
                    {/*end::Label*/}
                    {/*begin::Input row*/}
                    <div className="d-flex">
                      {/*begin::Radio*/}
                      <div className="form-check form-check-custom form-check-solid">
                        {/*begin::Input*/}
                        <input
                          className="form-check-input me-3"
                          name="user_role"
                          type="radio"
                          defaultValue={0}
                          id="kt_modal_update_role_option_0"
                          defaultChecked="checked"
                        />
                        {/*end::Input*/}
                        {/*begin::Label*/}
                        <label
                          className="form-check-label"
                          htmlFor="kt_modal_update_role_option_0"
                        >
                          <div className="fw-bold text-gray-800">
                            Administrator
                          </div>
                          <div className="text-gray-600">
                            Best for business owners and company administrators
                          </div>
                        </label>
                        {/*end::Label*/}
                      </div>
                      {/*end::Radio*/}
                    </div>
                    {/*end::Input row*/}
                    <div className="separator separator-dashed my-5" />
                    {/*begin::Input row*/}
                    <div className="d-flex">
                      {/*begin::Radio*/}
                      <div className="form-check form-check-custom form-check-solid">
                        {/*begin::Input*/}
                        <input
                          className="form-check-input me-3"
                          name="user_role"
                          type="radio"
                          defaultValue={1}
                          id="kt_modal_update_role_option_1"
                        />
                        {/*end::Input*/}
                        {/*begin::Label*/}
                        <label
                          className="form-check-label"
                          htmlFor="kt_modal_update_role_option_1"
                        >
                          <div className="fw-bold text-gray-800">Developer</div>
                          <div className="text-gray-600">
                            Best for developers or people primarily using the API
                          </div>
                        </label>
                        {/*end::Label*/}
                      </div>
                      {/*end::Radio*/}
                    </div>
                    {/*end::Input row*/}
                    <div className="separator separator-dashed my-5" />
                    {/*begin::Input row*/}
                    <div className="d-flex">
                      {/*begin::Radio*/}
                      <div className="form-check form-check-custom form-check-solid">
                        {/*begin::Input*/}
                        <input
                          className="form-check-input me-3"
                          name="user_role"
                          type="radio"
                          defaultValue={2}
                          id="kt_modal_update_role_option_2"
                        />
                        {/*end::Input*/}
                        {/*begin::Label*/}
                        <label
                          className="form-check-label"
                          htmlFor="kt_modal_update_role_option_2"
                        >
                          <div className="fw-bold text-gray-800">Analyst</div>
                          <div className="text-gray-600">
                            Best for people who need full access to analytics
                            data, but don't need to update business settings
                          </div>
                        </label>
                        {/*end::Label*/}
                      </div>
                      {/*end::Radio*/}
                    </div>
                    {/*end::Input row*/}
                    <div className="separator separator-dashed my-5" />
                    {/*begin::Input row*/}
                    <div className="d-flex">
                      {/*begin::Radio*/}
                      <div className="form-check form-check-custom form-check-solid">
                        {/*begin::Input*/}
                        <input
                          className="form-check-input me-3"
                          name="user_role"
                          type="radio"
                          defaultValue={3}
                          id="kt_modal_update_role_option_3"
                        />
                        {/*end::Input*/}
                        {/*begin::Label*/}
                        <label
                          className="form-check-label"
                          htmlFor="kt_modal_update_role_option_3"
                        >
                          <div className="fw-bold text-gray-800">Support</div>
                          <div className="text-gray-600">
                            Best for employees who regularly refund payments and
                            respond to disputes
                          </div>
                        </label>
                        {/*end::Label*/}
                      </div>
                      {/*end::Radio*/}
                    </div>
                    {/*end::Input row*/}
                    <div className="separator separator-dashed my-5" />
                    {/*begin::Input row*/}
                    <div className="d-flex">
                      {/*begin::Radio*/}
                      <div className="form-check form-check-custom form-check-solid">
                        {/*begin::Input*/}
                        <input
                          className="form-check-input me-3"
                          name="user_role"
                          type="radio"
                          defaultValue={4}
                          id="kt_modal_update_role_option_4"
                        />
                        {/*end::Input*/}
                        {/*begin::Label*/}
                        <label
                          className="form-check-label"
                          htmlFor="kt_modal_update_role_option_4"
                        >
                          <div className="fw-bold text-gray-800">Trial</div>
                          <div className="text-gray-600">
                            Best for people who need to preview content data, but
                            don't need to make any updates
                          </div>
                        </label>
                        {/*end::Label*/}
                      </div>
                      {/*end::Radio*/}
                    </div>
                    {/*end::Input row*/}
                  </div>
                  {/*end::Input group*/}
                  {/*begin::Actions*/}
                  <div className="text-center pt-15">
                    <button
                      type="reset"
                      className="btn btn-light me-3"
                      data-kt-users-modal-action="cancel"
                    >
                      Discard
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      data-kt-users-modal-action="submit"
                    >
                      <span className="indicator-label">Submit</span>
                      <span className="indicator-progress">
                        Please wait...
                        <span className="spinner-border spinner-border-sm align-middle ms-2" />
                      </span>
                    </button>
                  </div>
                  {/*end::Actions*/}
                </form>
                {/*end::Form*/}
              </div>
              {/*end::Modal body*/}
            </div>
            {/*end::Modal content*/}
          </div>
          {/*end::Modal dialog*/}
        </div>
        {/*end::Modal - Update role*/}
        {/*begin::Modal - Add task*/}
        <div
          className="modal fade"
          id="kt_modal_add_auth_app"
          tabIndex={-1}
          aria-hidden="true"
        >
          {/*begin::Modal dialog*/}
          <div className="modal-dialog modal-dialog-centered mw-650px">
            {/*begin::Modal content*/}
            <div className="modal-content">
              {/*begin::Modal header*/}
              <div className="modal-header">
                {/*begin::Modal title*/}
                <h2 className="fw-bold">Add Authenticator App</h2>
                {/*end::Modal title*/}
                {/*begin::Close*/}
                <div
                  className="btn btn-icon btn-sm btn-active-icon-primary"
                  data-kt-users-modal-action="close"
                >
                  <i className="ki-duotone ki-cross fs-1">
                    <span className="path1" />
                    <span className="path2" />
                  </i>
                </div>
                {/*end::Close*/}
              </div>
              {/*end::Modal header*/}
              {/*begin::Modal body*/}
              <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
                {/*begin::Content*/}
                <div className="fw-bold d-flex flex-column justify-content-center mb-5">
                  {/*begin::Label*/}
                  <div
                    className="text-center mb-5"
                    data-kt-add-auth-action="qr-code-label"
                  >
                    Download the
                    <a href="#">Authenticator app</a>, add a new account, then
                    scan this barcode to set up your account.
                  </div>
                  <div
                    className="text-center mb-5 d-none"
                    data-kt-add-auth-action="text-code-label"
                  >
                    Download the
                    <a href="#">Authenticator app</a>, add a new account, then
                    enter this code to set up your account.
                  </div>
                  {/*end::Label*/}
                  {/*begin::QR code*/}
                  <div
                    className="d-flex flex-center"
                    data-kt-add-auth-action="qr-code"
                  >
                    <img src="assets/media/misc/qr.png" alt="Scan this QR code" />
                  </div>
                  {/*end::QR code*/}
                  {/*begin::Text code*/}
                  <div
                    className="border rounded p-5 d-flex flex-center d-none"
                    data-kt-add-auth-action="text-code"
                  >
                    <div className="fs-1">gi2kdnb54is709j</div>
                  </div>
                  {/*end::Text code*/}
                </div>
                {/*end::Content*/}
                {/*begin::Action*/}
                <div className="d-flex flex-center">
                  <div
                    className="btn btn-light-primary"
                    data-kt-add-auth-action="text-code-button"
                  >
                    Enter code manually
                  </div>
                  <div
                    className="btn btn-light-primary d-none"
                    data-kt-add-auth-action="qr-code-button"
                  >
                    Scan barcode instead
                  </div>
                </div>
                {/*end::Action*/}
              </div>
              {/*end::Modal body*/}
            </div>
            {/*end::Modal content*/}
          </div>
          {/*end::Modal dialog*/}
        </div>
        {/*end::Modal - Add task*/}
        {/*begin::Modal - Add task*/}
        <div
          className="modal fade"
          id="kt_modal_add_one_time_password"
          tabIndex={-1}
          aria-hidden="true"
        >
          {/*begin::Modal dialog*/}
          <div className="modal-dialog modal-dialog-centered mw-650px">
            {/*begin::Modal content*/}
            <div className="modal-content">
              {/*begin::Modal header*/}
              <div className="modal-header">
                {/*begin::Modal title*/}
                <h2 className="fw-bold">Enable One Time Password</h2>
                {/*end::Modal title*/}
                {/*begin::Close*/}
                <div
                  className="btn btn-icon btn-sm btn-active-icon-primary"
                  data-kt-users-modal-action="close"
                >
                  <i className="ki-duotone ki-cross fs-1">
                    <span className="path1" />
                    <span className="path2" />
                  </i>
                </div>
                {/*end::Close*/}
              </div>
              {/*end::Modal header*/}
              {/*begin::Modal body*/}
              <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
                {/*begin::Form*/}
                <form className="form" id="kt_modal_add_one_time_password_form">
                  {/*begin::Label*/}
                  <div className="fw-bold mb-9">
                    Enter the new phone number to receive an SMS to when you log
                    in.
                  </div>
                  {/*end::Label*/}
                  {/*begin::Input group*/}
                  <div className="fv-row mb-7">
                    {/*begin::Label*/}
                    <label className="fs-6 fw-semibold form-label mb-2">
                      <span className="required">Mobile number</span>
                      <span
                        className="ms-2"
                        data-bs-toggle="tooltip"
                        title="A valid mobile number is required to receive the one-time password to validate your account login."
                      >
                        <i className="ki-duotone ki-information fs-7">
                          <span className="path1" />
                          <span className="path2" />
                          <span className="path3" />
                        </i>
                      </span>
                    </label>
                    {/*end::Label*/}
                    {/*begin::Input*/}
                    <input
                      type="text"
                      className="form-control form-control-solid"
                      name="otp_mobile_number"
                      placeholder="+6123 456 789"
                      defaultValue=""
                    />
                    {/*end::Input*/}
                  </div>
                  {/*end::Input group*/}
                  {/*begin::Separator*/}
                  <div className="separator saperator-dashed my-5" />
                  {/*end::Separator*/}
                  {/*begin::Input group*/}
                  <div className="fv-row mb-7">
                    {/*begin::Label*/}
                    <label className="fs-6 fw-semibold form-label mb-2">
                      <span className="required">Email</span>
                    </label>
                    {/*end::Label*/}
                    {/*begin::Input*/}
                    <input
                      type="email"
                      className="form-control form-control-solid"
                      name="otp_email"
                      defaultValue="smith@kpmg.com"
                      readOnly="readonly"
                    />
                    {/*end::Input*/}
                  </div>
                  {/*end::Input group*/}
                  {/*begin::Input group*/}
                  <div className="fv-row mb-7">
                    {/*begin::Label*/}
                    <label className="fs-6 fw-semibold form-label mb-2">
                      <span className="required">Confirm password</span>
                    </label>
                    {/*end::Label*/}
                    {/*begin::Input*/}
                    <input
                      type="password"
                      className="form-control form-control-solid"
                      name="otp_confirm_password"
                      defaultValue=""
                    />
                    {/*end::Input*/}
                  </div>
                  {/*end::Input group*/}
                  {/*begin::Actions*/}
                  <div className="text-center pt-15">
                    <button
                      type="reset"
                      className="btn btn-light me-3"
                      data-kt-users-modal-action="cancel"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      data-kt-users-modal-action="submit"
                    >
                      <span className="indicator-label">Submit</span>
                      <span className="indicator-progress">
                        Please wait...
                        <span className="spinner-border spinner-border-sm align-middle ms-2" />
                      </span>
                    </button>
                  </div>
                  {/*end::Actions*/}
                </form>
                {/*end::Form*/}
              </div>
              {/*end::Modal body*/}
            </div>
            {/*end::Modal content*/}
          </div>
          {/*end::Modal dialog*/}
        </div>
        {/*end::Modal - Add task*/}
        {/*end::Modals*/}
      </div>
      {/*end::Content container*/}
    </div>
    {/*end::Content*/}
  </>
  
  )
}

export default ViewUser
