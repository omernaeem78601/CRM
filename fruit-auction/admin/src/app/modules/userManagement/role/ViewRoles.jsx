import React from 'react'

const ViewRoles = () => {
  return (
    <>
  {/*begin::Content*/}
  <div id="kt_app_content" className="app-content flex-column-fluid">
    {/*begin::Content container*/}
    <div id="kt_app_content_container" className="app-container container-xxl">
      {/*begin::Layout*/}
      <div className="d-flex flex-column flex-lg-row">
        {/*begin::Sidebar*/}
        <div className="flex-column flex-lg-row-auto w-100 w-lg-200px w-xl-300px mb-10">
          {/*begin::Card*/}
          <div className="card card-flush">
            {/*begin::Card header*/}
            <div className="card-header">
              {/*begin::Card title*/}
              <div className="card-title">
                <h2 className="mb-0">Developer</h2>
              </div>
              {/*end::Card title*/}
            </div>
            {/*end::Card header*/}
            {/*begin::Card body*/}
            <div className="card-body pt-0">
              {/*begin::Permissions*/}
              <div className="d-flex flex-column text-gray-600">
                <div className="d-flex align-items-center py-2">
                  <span className="bullet bg-primary me-3" />
                  Some Admin Controls
                </div>
                <div className="d-flex align-items-center py-2">
                  <span className="bullet bg-primary me-3" />
                  View Financial Summaries only
                </div>
                <div className="d-flex align-items-center py-2">
                  <span className="bullet bg-primary me-3" />
                  View and Edit API Controls
                </div>
                <div className="d-flex align-items-center py-2">
                  <span className="bullet bg-primary me-3" />
                  View Payouts only
                </div>
                <div className="d-flex align-items-center py-2">
                  <span className="bullet bg-primary me-3" />
                  View and Edit Disputes
                </div>
                <div className="d-flex align-items-center py-2 d-none">
                  <span className="bullet bg-primary me-3" />
                  <em>and 3 more...</em>
                </div>
              </div>
              {/*end::Permissions*/}
            </div>
            {/*end::Card body*/}
            {/*begin::Card footer*/}
            <div className="card-footer pt-0">
              <button
                type="button"
                className="btn btn-light btn-active-primary"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_update_role"
              >
                Edit Role
              </button>
            </div>
            {/*end::Card footer*/}
          </div>
          {/*end::Card*/}
          {/*begin::Modal*/}
          {/*begin::Modal - Update role*/}
          <div
            className="modal fade"
            id="kt_modal_update_role"
            tabIndex={-1}
            aria-hidden="true"
          >
            {/*begin::Modal dialog*/}
            <div className="modal-dialog modal-dialog-centered mw-750px">
              {/*begin::Modal content*/}
              <div className="modal-content">
                {/*begin::Modal header*/}
                <div className="modal-header">
                  {/*begin::Modal title*/}
                  <h2 className="fw-bold">Update Role</h2>
                  {/*end::Modal title*/}
                  {/*begin::Close*/}
                  <div
                    className="btn btn-icon btn-sm btn-active-icon-primary"
                    data-kt-roles-modal-action="close"
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
                <div className="modal-body scroll-y mx-5 my-7">
                  {/*begin::Form*/}
                  <form
                    id="kt_modal_update_role_form"
                    className="form"
                    action="#"
                  >
                    {/*begin::Scroll*/}
                    <div
                      className="d-flex flex-column scroll-y me-n7 pe-7"
                      id="kt_modal_update_role_scroll"
                      data-kt-scroll="true"
                      data-kt-scroll-activate="{default: false, lg: true}"
                      data-kt-scroll-max-height="auto"
                      data-kt-scroll-dependencies="#kt_modal_update_role_header"
                      data-kt-scroll-wrappers="#kt_modal_update_role_scroll"
                      data-kt-scroll-offset="300px"
                    >
                      {/*begin::Input group*/}
                      <div className="fv-row mb-10">
                        {/*begin::Label*/}
                        <label className="fs-5 fw-bold form-label mb-2">
                          <span className="required">Role name</span>
                        </label>
                        {/*end::Label*/}
                        {/*begin::Input*/}
                        <input
                          className="form-control form-control-solid"
                          placeholder="Enter a role name"
                          name="role_name"
                          defaultValue="Developer"
                        />
                        {/*end::Input*/}
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Permissions*/}
                      <div className="fv-row">
                        {/*begin::Label*/}
                        <label className="fs-5 fw-bold form-label mb-2">
                          Role Permissions
                        </label>
                        {/*end::Label*/}
                        {/*begin::Table wrapper*/}
                        <div className="table-responsive">
                          {/*begin::Table*/}
                          <table className="table align-middle table-row-dashed fs-6 gy-5">
                            {/*begin::Table body*/}
                            <tbody className="text-gray-600 fw-semibold">
                              {/*begin::Table row*/}
                              <tr>
                                <td className="text-gray-800">
                                  Administrator Access
                                  <span
                                    className="ms-1"
                                    data-bs-toggle="tooltip"
                                    title="Allows a full access to the system"
                                  >
                                    <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                                      <span className="path1" />
                                      <span className="path2" />
                                      <span className="path3" />
                                    </i>
                                  </span>
                                </td>
                                <td>
                                  {/*begin::Checkbox*/}
                                  <label className="form-check form-check-sm form-check-custom form-check-solid me-9">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      defaultValue=""
                                      id="kt_roles_select_all"
                                    />
                                    <span
                                      className="form-check-label"
                                      htmlFor="kt_roles_select_all"
                                    >
                                      Select all
                                    </span>
                                  </label>
                                  {/*end::Checkbox*/}
                                </td>
                              </tr>
                              {/*end::Table row*/}
                              {/*begin::Table row*/}
                              <tr>
                                {/*begin::Label*/}
                                <td className="text-gray-800">
                                  User Management
                                </td>
                                {/*end::Label*/}
                                {/*begin::Input group*/}
                                <td>
                                  {/*begin::Wrapper*/}
                                  <div className="d-flex">
                                    {/*begin::Checkbox*/}
                                    <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue=""
                                        name="user_management_read"
                                      />
                                      <span className="form-check-label">
                                        Read
                                      </span>
                                    </label>
                                    {/*end::Checkbox*/}
                                    {/*begin::Checkbox*/}
                                    <label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue=""
                                        name="user_management_write"
                                      />
                                      <span className="form-check-label">
                                        Write
                                      </span>
                                    </label>
                                    {/*end::Checkbox*/}
                                    {/*begin::Checkbox*/}
                                    <label className="form-check form-check-custom form-check-solid">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue=""
                                        name="user_management_create"
                                      />
                                      <span className="form-check-label">
                                        Create
                                      </span>
                                    </label>
                                    {/*end::Checkbox*/}
                                  </div>
                                  {/*end::Wrapper*/}
                                </td>
                                {/*end::Input group*/}
                              </tr>
                              {/*end::Table row*/}
                              {/*begin::Table row*/}
                              <tr>
                                {/*begin::Label*/}
                                <td className="text-gray-800">
                                  Content Management
                                </td>
                                {/*end::Label*/}
                                {/*begin::Input group*/}
                                <td>
                                  {/*begin::Wrapper*/}
                                  <div className="d-flex">
                                    {/*begin::Checkbox*/}
                                    <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue=""
                                        name="content_management_read"
                                      />
                                      <span className="form-check-label">
                                        Read
                                      </span>
                                    </label>
                                    {/*end::Checkbox*/}
                                    {/*begin::Checkbox*/}
                                    <label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue=""
                                        name="content_management_write"
                                      />
                                      <span className="form-check-label">
                                        Write
                                      </span>
                                    </label>
                                    {/*end::Checkbox*/}
                                    {/*begin::Checkbox*/}
                                    <label className="form-check form-check-custom form-check-solid">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue=""
                                        name="content_management_create"
                                      />
                                      <span className="form-check-label">
                                        Create
                                      </span>
                                    </label>
                                    {/*end::Checkbox*/}
                                  </div>
                                  {/*end::Wrapper*/}
                                </td>
                                {/*end::Input group*/}
                              </tr>
                              {/*end::Table row*/}
                              {/*begin::Table row*/}
                              <tr>
                                {/*begin::Label*/}
                                <td className="text-gray-800">
                                  Financial Management
                                </td>
                                {/*end::Label*/}
                                {/*begin::Input group*/}
                                <td>
                                  {/*begin::Wrapper*/}
                                  <div className="d-flex">
                                    {/*begin::Checkbox*/}
                                    <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue=""
                                        name="financial_management_read"
                                      />
                                      <span className="form-check-label">
                                        Read
                                      </span>
                                    </label>
                                    {/*end::Checkbox*/}
                                    {/*begin::Checkbox*/}
                                    <label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue=""
                                        name="financial_management_write"
                                      />
                                      <span className="form-check-label">
                                        Write
                                      </span>
                                    </label>
                                    {/*end::Checkbox*/}
                                    {/*begin::Checkbox*/}
                                    <label className="form-check form-check-custom form-check-solid">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue=""
                                        name="financial_management_create"
                                      />
                                      <span className="form-check-label">
                                        Create
                                      </span>
                                    </label>
                                    {/*end::Checkbox*/}
                                  </div>
                                  {/*end::Wrapper*/}
                                </td>
                                {/*end::Input group*/}
                              </tr>
                              {/*end::Table row*/}
                              {/*begin::Table row*/}
                              <tr>
                                {/*begin::Label*/}
                                <td className="text-gray-800">Reporting</td>
                                {/*end::Label*/}
                                {/*begin::Input group*/}
                                <td>
                                  {/*begin::Wrapper*/}
                                  <div className="d-flex">
                                    {/*begin::Checkbox*/}
                                    <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue=""
                                        name="reporting_read"
                                      />
                                      <span className="form-check-label">
                                        Read
                                      </span>
                                    </label>
                                    {/*end::Checkbox*/}
                                    {/*begin::Checkbox*/}
                                    <label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue=""
                                        name="reporting_write"
                                      />
                                      <span className="form-check-label">
                                        Write
                                      </span>
                                    </label>
                                    {/*end::Checkbox*/}
                                    {/*begin::Checkbox*/}
                                    <label className="form-check form-check-custom form-check-solid">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue=""
                                        name="reporting_create"
                                      />
                                      <span className="form-check-label">
                                        Create
                                      </span>
                                    </label>
                                    {/*end::Checkbox*/}
                                  </div>
                                  {/*end::Wrapper*/}
                                </td>
                                {/*end::Input group*/}
                              </tr>
                              {/*end::Table row*/}
                              {/*begin::Table row*/}
                              <tr>
                                {/*begin::Label*/}
                                <td className="text-gray-800">Payroll</td>
                                {/*end::Label*/}
                                {/*begin::Input group*/}
                                <td>
                                  {/*begin::Wrapper*/}
                                  <div className="d-flex">
                                    {/*begin::Checkbox*/}
                                    <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue=""
                                        name="payroll_read"
                                      />
                                      <span className="form-check-label">
                                        Read
                                      </span>
                                    </label>
                                    {/*end::Checkbox*/}
                                    {/*begin::Checkbox*/}
                                    <label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue=""
                                        name="payroll_write"
                                      />
                                      <span className="form-check-label">
                                        Write
                                      </span>
                                    </label>
                                    {/*end::Checkbox*/}
                                    {/*begin::Checkbox*/}
                                    <label className="form-check form-check-custom form-check-solid">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue=""
                                        name="payroll_create"
                                      />
                                      <span className="form-check-label">
                                        Create
                                      </span>
                                    </label>
                                    {/*end::Checkbox*/}
                                  </div>
                                  {/*end::Wrapper*/}
                                </td>
                                {/*end::Input group*/}
                              </tr>
                              {/*end::Table row*/}
                              {/*begin::Table row*/}
                              <tr>
                                {/*begin::Label*/}
                                <td className="text-gray-800">
                                  Disputes Management
                                </td>
                                {/*end::Label*/}
                                {/*begin::Input group*/}
                                <td>
                                  {/*begin::Wrapper*/}
                                  <div className="d-flex">
                                    {/*begin::Checkbox*/}
                                    <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue=""
                                        name="disputes_management_read"
                                      />
                                      <span className="form-check-label">
                                        Read
                                      </span>
                                    </label>
                                    {/*end::Checkbox*/}
                                    {/*begin::Checkbox*/}
                                    <label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue=""
                                        name="disputes_management_write"
                                      />
                                      <span className="form-check-label">
                                        Write
                                      </span>
                                    </label>
                                    {/*end::Checkbox*/}
                                    {/*begin::Checkbox*/}
                                    <label className="form-check form-check-custom form-check-solid">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue=""
                                        name="disputes_management_create"
                                      />
                                      <span className="form-check-label">
                                        Create
                                      </span>
                                    </label>
                                    {/*end::Checkbox*/}
                                  </div>
                                  {/*end::Wrapper*/}
                                </td>
                                {/*end::Input group*/}
                              </tr>
                              {/*end::Table row*/}
                              {/*begin::Table row*/}
                              <tr>
                                {/*begin::Label*/}
                                <td className="text-gray-800">API Controls</td>
                                {/*end::Label*/}
                                {/*begin::Input group*/}
                                <td>
                                  {/*begin::Wrapper*/}
                                  <div className="d-flex">
                                    {/*begin::Checkbox*/}
                                    <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue=""
                                        name="api_controls_read"
                                      />
                                      <span className="form-check-label">
                                        Read
                                      </span>
                                    </label>
                                    {/*end::Checkbox*/}
                                    {/*begin::Checkbox*/}
                                    <label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue=""
                                        name="api_controls_write"
                                      />
                                      <span className="form-check-label">
                                        Write
                                      </span>
                                    </label>
                                    {/*end::Checkbox*/}
                                    {/*begin::Checkbox*/}
                                    <label className="form-check form-check-custom form-check-solid">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue=""
                                        name="api_controls_create"
                                      />
                                      <span className="form-check-label">
                                        Create
                                      </span>
                                    </label>
                                    {/*end::Checkbox*/}
                                  </div>
                                  {/*end::Wrapper*/}
                                </td>
                                {/*end::Input group*/}
                              </tr>
                              {/*end::Table row*/}
                              {/*begin::Table row*/}
                              <tr>
                                {/*begin::Label*/}
                                <td className="text-gray-800">
                                  Database Management
                                </td>
                                {/*end::Label*/}
                                {/*begin::Input group*/}
                                <td>
                                  {/*begin::Wrapper*/}
                                  <div className="d-flex">
                                    {/*begin::Checkbox*/}
                                    <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue=""
                                        name="database_management_read"
                                      />
                                      <span className="form-check-label">
                                        Read
                                      </span>
                                    </label>
                                    {/*end::Checkbox*/}
                                    {/*begin::Checkbox*/}
                                    <label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue=""
                                        name="database_management_write"
                                      />
                                      <span className="form-check-label">
                                        Write
                                      </span>
                                    </label>
                                    {/*end::Checkbox*/}
                                    {/*begin::Checkbox*/}
                                    <label className="form-check form-check-custom form-check-solid">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue=""
                                        name="database_management_create"
                                      />
                                      <span className="form-check-label">
                                        Create
                                      </span>
                                    </label>
                                    {/*end::Checkbox*/}
                                  </div>
                                  {/*end::Wrapper*/}
                                </td>
                                {/*end::Input group*/}
                              </tr>
                              {/*end::Table row*/}
                              {/*begin::Table row*/}
                              <tr>
                                {/*begin::Label*/}
                                <td className="text-gray-800">
                                  Repository Management
                                </td>
                                {/*end::Label*/}
                                {/*begin::Input group*/}
                                <td>
                                  {/*begin::Wrapper*/}
                                  <div className="d-flex">
                                    {/*begin::Checkbox*/}
                                    <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue=""
                                        name="repository_management_read"
                                      />
                                      <span className="form-check-label">
                                        Read
                                      </span>
                                    </label>
                                    {/*end::Checkbox*/}
                                    {/*begin::Checkbox*/}
                                    <label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue=""
                                        name="repository_management_write"
                                      />
                                      <span className="form-check-label">
                                        Write
                                      </span>
                                    </label>
                                    {/*end::Checkbox*/}
                                    {/*begin::Checkbox*/}
                                    <label className="form-check form-check-custom form-check-solid">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue=""
                                        name="repository_management_create"
                                      />
                                      <span className="form-check-label">
                                        Create
                                      </span>
                                    </label>
                                    {/*end::Checkbox*/}
                                  </div>
                                  {/*end::Wrapper*/}
                                </td>
                                {/*end::Input group*/}
                              </tr>
                              {/*end::Table row*/}
                            </tbody>
                            {/*end::Table body*/}
                          </table>
                          {/*end::Table*/}
                        </div>
                        {/*end::Table wrapper*/}
                      </div>
                      {/*end::Permissions*/}
                    </div>
                    {/*end::Scroll*/}
                    {/*begin::Actions*/}
                    <div className="text-center pt-15">
                      <button
                        type="reset"
                        className="btn btn-light me-3"
                        data-kt-roles-modal-action="cancel"
                      >
                        Discard
                      </button>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        data-kt-roles-modal-action="submit"
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
          {/*end::Modal*/}
        </div>
        {/*end::Sidebar*/}
        {/*begin::Content*/}
        <div className="flex-lg-row-fluid ms-lg-10">
          {/*begin::Card*/}
          <div className="card card-flush mb-6 mb-xl-9">
            {/*begin::Card header*/}
            <div className="card-header pt-5">
              {/*begin::Card title*/}
              <div className="card-title">
                <h2 className="d-flex align-items-center">
                  Users Assigned
                  <span className="text-gray-600 fs-6 ms-1">(14)</span>
                </h2>
              </div>
              {/*end::Card title*/}
              {/*begin::Card toolbar*/}
              <div className="card-toolbar">
                {/*begin::Search*/}
                <div
                  className="d-flex align-items-center position-relative my-1"
                  data-kt-view-roles-table-toolbar="base"
                >
                  <i className="ki-duotone ki-magnifier fs-1 position-absolute ms-6">
                    <span className="path1" />
                    <span className="path2" />
                  </i>
                  <input
                    type="text"
                    data-kt-roles-table-filter="search"
                    className="form-control form-control-solid w-250px ps-15"
                    placeholder="Search Users"
                  />
                </div>
                {/*end::Search*/}
                {/*begin::Group actions*/}
                <div
                  className="d-flex justify-content-end align-items-center d-none"
                  data-kt-view-roles-table-toolbar="selected"
                >
                  <div className="fw-bold me-5">
                    <span
                      className="me-2"
                      data-kt-view-roles-table-select="selected_count"
                    />
                    Selected
                  </div>
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-kt-view-roles-table-select="delete_selected"
                  >
                    Delete Selected
                  </button>
                </div>
                {/*end::Group actions*/}
              </div>
              {/*end::Card toolbar*/}
            </div>
            {/*end::Card header*/}
            {/*begin::Card body*/}
            <div className="card-body pt-0">
              {/*begin::Table*/}
              <table
                className="table align-middle table-row-dashed fs-6 gy-5 mb-0"
                id="kt_roles_view_table"
              >
                <thead>
                  <tr className="text-start text-muted fw-bold fs-7 text-uppercase gs-0">
                    <th className="w-10px pe-2">
                      <div className="form-check form-check-sm form-check-custom form-check-solid me-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          data-kt-check="true"
                          data-kt-check-target="#kt_roles_view_table .form-check-input"
                          defaultValue={1}
                        />
                      </div>
                    </th>
                    <th className="min-w-50px">ID</th>
                    <th className="min-w-150px">User</th>
                    <th className="min-w-125px">Joined Date</th>
                    <th className="text-end min-w-100px">Actions</th>
                  </tr>
                </thead>
                <tbody className="fw-semibold text-gray-600">
                  <tr>
                    <td>
                      <div className="form-check form-check-sm form-check-custom form-check-solid">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue={1}
                        />
                      </div>
                    </td>
                    <td>ID6523</td>
                    <td className="d-flex align-items-center">
                      {/*begin:: Avatar */}
                      <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                        <a href="../../demo1/dist/apps/user-management/users/view.html">
                          <div className="symbol-label">
                            <img
                              src="assets/media/avatars/300-6.jpg"
                              alt="Emma Smith"
                              className="w-100"
                            />
                          </div>
                        </a>
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::User details*/}
                      <div className="d-flex flex-column">
                        <a
                          href="../../demo1/dist/apps/user-management/users/view.html"
                          className="text-gray-800 text-hover-primary mb-1"
                        >
                          Emma Smith
                        </a>
                        <span>smith@kpmg.com</span>
                      </div>
                      {/*begin::User details*/}
                    </td>
                    <td>21 Feb 2023, 10:10 pm</td>
                    <td className="text-end">
                      <a
                        href="#"
                        className="btn btn-sm btn-light btn-active-light-primary"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                      >
                        Actions
                        <i className="ki-duotone ki-down fs-5 m-0" />
                      </a>
                      {/*begin::Menu*/}
                      <div
                        className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                        data-kt-menu="true"
                      >
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a
                            href="../../demo1/dist/apps/user-management/users/view.html"
                            className="menu-link px-3"
                          >
                            View
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a
                            href="#"
                            className="menu-link px-3"
                            data-kt-roles-table-filter="delete_row"
                          >
                            Delete
                          </a>
                        </div>
                        {/*end::Menu item*/}
                      </div>
                      {/*end::Menu*/}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check form-check-sm form-check-custom form-check-solid">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue={1}
                        />
                      </div>
                    </td>
                    <td>ID7965</td>
                    <td className="d-flex align-items-center">
                      {/*begin:: Avatar */}
                      <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                        <a href="../../demo1/dist/apps/user-management/users/view.html">
                          <div className="symbol-label fs-3 bg-light-danger text-danger">
                            M
                          </div>
                        </a>
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::User details*/}
                      <div className="d-flex flex-column">
                        <a
                          href="../../demo1/dist/apps/user-management/users/view.html"
                          className="text-gray-800 text-hover-primary mb-1"
                        >
                          Melody Macy
                        </a>
                        <span>melody@altbox.com</span>
                      </div>
                      {/*begin::User details*/}
                    </td>
                    <td>20 Dec 2023, 6:05 pm</td>
                    <td className="text-end">
                      <a
                        href="#"
                        className="btn btn-sm btn-light btn-active-light-primary"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                      >
                        Actions
                        <i className="ki-duotone ki-down fs-5 m-0" />
                      </a>
                      {/*begin::Menu*/}
                      <div
                        className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                        data-kt-menu="true"
                      >
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a
                            href="../../demo1/dist/apps/user-management/users/view.html"
                            className="menu-link px-3"
                          >
                            View
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a
                            href="#"
                            className="menu-link px-3"
                            data-kt-roles-table-filter="delete_row"
                          >
                            Delete
                          </a>
                        </div>
                        {/*end::Menu item*/}
                      </div>
                      {/*end::Menu*/}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check form-check-sm form-check-custom form-check-solid">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue={1}
                        />
                      </div>
                    </td>
                    <td>ID8607</td>
                    <td className="d-flex align-items-center">
                      {/*begin:: Avatar */}
                      <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                        <a href="../../demo1/dist/apps/user-management/users/view.html">
                          <div className="symbol-label">
                            <img
                              src="assets/media/avatars/300-1.jpg"
                              alt="Max Smith"
                              className="w-100"
                            />
                          </div>
                        </a>
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::User details*/}
                      <div className="d-flex flex-column">
                        <a
                          href="../../demo1/dist/apps/user-management/users/view.html"
                          className="text-gray-800 text-hover-primary mb-1"
                        >
                          Max Smith
                        </a>
                        <span>max@kt.com</span>
                      </div>
                      {/*begin::User details*/}
                    </td>
                    <td>24 Jun 2023, 2:40 pm</td>
                    <td className="text-end">
                      <a
                        href="#"
                        className="btn btn-sm btn-light btn-active-light-primary"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                      >
                        Actions
                        <i className="ki-duotone ki-down fs-5 m-0" />
                      </a>
                      {/*begin::Menu*/}
                      <div
                        className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                        data-kt-menu="true"
                      >
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a
                            href="../../demo1/dist/apps/user-management/users/view.html"
                            className="menu-link px-3"
                          >
                            View
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a
                            href="#"
                            className="menu-link px-3"
                            data-kt-roles-table-filter="delete_row"
                          >
                            Delete
                          </a>
                        </div>
                        {/*end::Menu item*/}
                      </div>
                      {/*end::Menu*/}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check form-check-sm form-check-custom form-check-solid">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue={1}
                        />
                      </div>
                    </td>
                    <td>ID8694</td>
                    <td className="d-flex align-items-center">
                      {/*begin:: Avatar */}
                      <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                        <a href="../../demo1/dist/apps/user-management/users/view.html">
                          <div className="symbol-label">
                            <img
                              src="assets/media/avatars/300-5.jpg"
                              alt="Sean Bean"
                              className="w-100"
                            />
                          </div>
                        </a>
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::User details*/}
                      <div className="d-flex flex-column">
                        <a
                          href="../../demo1/dist/apps/user-management/users/view.html"
                          className="text-gray-800 text-hover-primary mb-1"
                        >
                          Sean Bean
                        </a>
                        <span>sean@dellito.com</span>
                      </div>
                      {/*begin::User details*/}
                    </td>
                    <td>20 Jun 2023, 11:30 am</td>
                    <td className="text-end">
                      <a
                        href="#"
                        className="btn btn-sm btn-light btn-active-light-primary"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                      >
                        Actions
                        <i className="ki-duotone ki-down fs-5 m-0" />
                      </a>
                      {/*begin::Menu*/}
                      <div
                        className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                        data-kt-menu="true"
                      >
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a
                            href="../../demo1/dist/apps/user-management/users/view.html"
                            className="menu-link px-3"
                          >
                            View
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a
                            href="#"
                            className="menu-link px-3"
                            data-kt-roles-table-filter="delete_row"
                          >
                            Delete
                          </a>
                        </div>
                        {/*end::Menu item*/}
                      </div>
                      {/*end::Menu*/}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check form-check-sm form-check-custom form-check-solid">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue={1}
                        />
                      </div>
                    </td>
                    <td>ID1386</td>
                    <td className="d-flex align-items-center">
                      {/*begin:: Avatar */}
                      <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                        <a href="../../demo1/dist/apps/user-management/users/view.html">
                          <div className="symbol-label">
                            <img
                              src="assets/media/avatars/300-25.jpg"
                              alt="Brian Cox"
                              className="w-100"
                            />
                          </div>
                        </a>
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::User details*/}
                      <div className="d-flex flex-column">
                        <a
                          href="../../demo1/dist/apps/user-management/users/view.html"
                          className="text-gray-800 text-hover-primary mb-1"
                        >
                          Brian Cox
                        </a>
                        <span>brian@exchange.com</span>
                      </div>
                      {/*begin::User details*/}
                    </td>
                    <td>10 Mar 2023, 5:20 pm</td>
                    <td className="text-end">
                      <a
                        href="#"
                        className="btn btn-sm btn-light btn-active-light-primary"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                      >
                        Actions
                        <i className="ki-duotone ki-down fs-5 m-0" />
                      </a>
                      {/*begin::Menu*/}
                      <div
                        className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                        data-kt-menu="true"
                      >
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a
                            href="../../demo1/dist/apps/user-management/users/view.html"
                            className="menu-link px-3"
                          >
                            View
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a
                            href="#"
                            className="menu-link px-3"
                            data-kt-roles-table-filter="delete_row"
                          >
                            Delete
                          </a>
                        </div>
                        {/*end::Menu item*/}
                      </div>
                      {/*end::Menu*/}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check form-check-sm form-check-custom form-check-solid">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue={1}
                        />
                      </div>
                    </td>
                    <td>ID8889</td>
                    <td className="d-flex align-items-center">
                      {/*begin:: Avatar */}
                      <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                        <a href="../../demo1/dist/apps/user-management/users/view.html">
                          <div className="symbol-label fs-3 bg-light-warning text-warning">
                            C
                          </div>
                        </a>
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::User details*/}
                      <div className="d-flex flex-column">
                        <a
                          href="../../demo1/dist/apps/user-management/users/view.html"
                          className="text-gray-800 text-hover-primary mb-1"
                        >
                          Mikaela Collins
                        </a>
                        <span>mik@pex.com</span>
                      </div>
                      {/*begin::User details*/}
                    </td>
                    <td>25 Jul 2023, 5:30 pm</td>
                    <td className="text-end">
                      <a
                        href="#"
                        className="btn btn-sm btn-light btn-active-light-primary"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                      >
                        Actions
                        <i className="ki-duotone ki-down fs-5 m-0" />
                      </a>
                      {/*begin::Menu*/}
                      <div
                        className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                        data-kt-menu="true"
                      >
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a
                            href="../../demo1/dist/apps/user-management/users/view.html"
                            className="menu-link px-3"
                          >
                            View
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a
                            href="#"
                            className="menu-link px-3"
                            data-kt-roles-table-filter="delete_row"
                          >
                            Delete
                          </a>
                        </div>
                        {/*end::Menu item*/}
                      </div>
                      {/*end::Menu*/}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check form-check-sm form-check-custom form-check-solid">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue={1}
                        />
                      </div>
                    </td>
                    <td>ID7071</td>
                    <td className="d-flex align-items-center">
                      {/*begin:: Avatar */}
                      <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                        <a href="../../demo1/dist/apps/user-management/users/view.html">
                          <div className="symbol-label">
                            <img
                              src="assets/media/avatars/300-9.jpg"
                              alt="Francis Mitcham"
                              className="w-100"
                            />
                          </div>
                        </a>
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::User details*/}
                      <div className="d-flex flex-column">
                        <a
                          href="../../demo1/dist/apps/user-management/users/view.html"
                          className="text-gray-800 text-hover-primary mb-1"
                        >
                          Francis Mitcham
                        </a>
                        <span>f.mit@kpmg.com</span>
                      </div>
                      {/*begin::User details*/}
                    </td>
                    <td>10 Nov 2023, 8:43 pm</td>
                    <td className="text-end">
                      <a
                        href="#"
                        className="btn btn-sm btn-light btn-active-light-primary"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                      >
                        Actions
                        <i className="ki-duotone ki-down fs-5 m-0" />
                      </a>
                      {/*begin::Menu*/}
                      <div
                        className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                        data-kt-menu="true"
                      >
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a
                            href="../../demo1/dist/apps/user-management/users/view.html"
                            className="menu-link px-3"
                          >
                            View
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a
                            href="#"
                            className="menu-link px-3"
                            data-kt-roles-table-filter="delete_row"
                          >
                            Delete
                          </a>
                        </div>
                        {/*end::Menu item*/}
                      </div>
                      {/*end::Menu*/}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check form-check-sm form-check-custom form-check-solid">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue={1}
                        />
                      </div>
                    </td>
                    <td>ID8287</td>
                    <td className="d-flex align-items-center">
                      {/*begin:: Avatar */}
                      <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                        <a href="../../demo1/dist/apps/user-management/users/view.html">
                          <div className="symbol-label fs-3 bg-light-danger text-danger">
                            O
                          </div>
                        </a>
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::User details*/}
                      <div className="d-flex flex-column">
                        <a
                          href="../../demo1/dist/apps/user-management/users/view.html"
                          className="text-gray-800 text-hover-primary mb-1"
                        >
                          Olivia Wild
                        </a>
                        <span>olivia@corpmail.com</span>
                      </div>
                      {/*begin::User details*/}
                    </td>
                    <td>19 Aug 2023, 11:30 am</td>
                    <td className="text-end">
                      <a
                        href="#"
                        className="btn btn-sm btn-light btn-active-light-primary"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                      >
                        Actions
                        <i className="ki-duotone ki-down fs-5 m-0" />
                      </a>
                      {/*begin::Menu*/}
                      <div
                        className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                        data-kt-menu="true"
                      >
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a
                            href="../../demo1/dist/apps/user-management/users/view.html"
                            className="menu-link px-3"
                          >
                            View
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a
                            href="#"
                            className="menu-link px-3"
                            data-kt-roles-table-filter="delete_row"
                          >
                            Delete
                          </a>
                        </div>
                        {/*end::Menu item*/}
                      </div>
                      {/*end::Menu*/}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check form-check-sm form-check-custom form-check-solid">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue={1}
                        />
                      </div>
                    </td>
                    <td>ID6305</td>
                    <td className="d-flex align-items-center">
                      {/*begin:: Avatar */}
                      <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                        <a href="../../demo1/dist/apps/user-management/users/view.html">
                          <div className="symbol-label fs-3 bg-light-primary text-primary">
                            N
                          </div>
                        </a>
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::User details*/}
                      <div className="d-flex flex-column">
                        <a
                          href="../../demo1/dist/apps/user-management/users/view.html"
                          className="text-gray-800 text-hover-primary mb-1"
                        >
                          Neil Owen
                        </a>
                        <span>owen.neil@gmail.com</span>
                      </div>
                      {/*begin::User details*/}
                    </td>
                    <td>20 Jun 2023, 11:30 am</td>
                    <td className="text-end">
                      <a
                        href="#"
                        className="btn btn-sm btn-light btn-active-light-primary"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                      >
                        Actions
                        <i className="ki-duotone ki-down fs-5 m-0" />
                      </a>
                      {/*begin::Menu*/}
                      <div
                        className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                        data-kt-menu="true"
                      >
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a
                            href="../../demo1/dist/apps/user-management/users/view.html"
                            className="menu-link px-3"
                          >
                            View
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a
                            href="#"
                            className="menu-link px-3"
                            data-kt-roles-table-filter="delete_row"
                          >
                            Delete
                          </a>
                        </div>
                        {/*end::Menu item*/}
                      </div>
                      {/*end::Menu*/}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check form-check-sm form-check-custom form-check-solid">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue={1}
                        />
                      </div>
                    </td>
                    <td>ID3385</td>
                    <td className="d-flex align-items-center">
                      {/*begin:: Avatar */}
                      <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                        <a href="../../demo1/dist/apps/user-management/users/view.html">
                          <div className="symbol-label">
                            <img
                              src="assets/media/avatars/300-23.jpg"
                              alt="Dan Wilson"
                              className="w-100"
                            />
                          </div>
                        </a>
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::User details*/}
                      <div className="d-flex flex-column">
                        <a
                          href="../../demo1/dist/apps/user-management/users/view.html"
                          className="text-gray-800 text-hover-primary mb-1"
                        >
                          Dan Wilson
                        </a>
                        <span>dam@consilting.com</span>
                      </div>
                      {/*begin::User details*/}
                    </td>
                    <td>25 Jul 2023, 8:43 pm</td>
                    <td className="text-end">
                      <a
                        href="#"
                        className="btn btn-sm btn-light btn-active-light-primary"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                      >
                        Actions
                        <i className="ki-duotone ki-down fs-5 m-0" />
                      </a>
                      {/*begin::Menu*/}
                      <div
                        className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                        data-kt-menu="true"
                      >
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a
                            href="../../demo1/dist/apps/user-management/users/view.html"
                            className="menu-link px-3"
                          >
                            View
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a
                            href="#"
                            className="menu-link px-3"
                            data-kt-roles-table-filter="delete_row"
                          >
                            Delete
                          </a>
                        </div>
                        {/*end::Menu item*/}
                      </div>
                      {/*end::Menu*/}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check form-check-sm form-check-custom form-check-solid">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue={1}
                        />
                      </div>
                    </td>
                    <td>ID4302</td>
                    <td className="d-flex align-items-center">
                      {/*begin:: Avatar */}
                      <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                        <a href="../../demo1/dist/apps/user-management/users/view.html">
                          <div className="symbol-label fs-3 bg-light-danger text-danger">
                            E
                          </div>
                        </a>
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::User details*/}
                      <div className="d-flex flex-column">
                        <a
                          href="../../demo1/dist/apps/user-management/users/view.html"
                          className="text-gray-800 text-hover-primary mb-1"
                        >
                          Emma Bold
                        </a>
                        <span>emma@intenso.com</span>
                      </div>
                      {/*begin::User details*/}
                    </td>
                    <td>25 Jul 2023, 5:20 pm</td>
                    <td className="text-end">
                      <a
                        href="#"
                        className="btn btn-sm btn-light btn-active-light-primary"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                      >
                        Actions
                        <i className="ki-duotone ki-down fs-5 m-0" />
                      </a>
                      {/*begin::Menu*/}
                      <div
                        className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                        data-kt-menu="true"
                      >
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a
                            href="../../demo1/dist/apps/user-management/users/view.html"
                            className="menu-link px-3"
                          >
                            View
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a
                            href="#"
                            className="menu-link px-3"
                            data-kt-roles-table-filter="delete_row"
                          >
                            Delete
                          </a>
                        </div>
                        {/*end::Menu item*/}
                      </div>
                      {/*end::Menu*/}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check form-check-sm form-check-custom form-check-solid">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue={1}
                        />
                      </div>
                    </td>
                    <td>ID6346</td>
                    <td className="d-flex align-items-center">
                      {/*begin:: Avatar */}
                      <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                        <a href="../../demo1/dist/apps/user-management/users/view.html">
                          <div className="symbol-label">
                            <img
                              src="assets/media/avatars/300-12.jpg"
                              alt="Ana Crown"
                              className="w-100"
                            />
                          </div>
                        </a>
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::User details*/}
                      <div className="d-flex flex-column">
                        <a
                          href="../../demo1/dist/apps/user-management/users/view.html"
                          className="text-gray-800 text-hover-primary mb-1"
                        >
                          Ana Crown
                        </a>
                        <span>ana.cf@limtel.com</span>
                      </div>
                      {/*begin::User details*/}
                    </td>
                    <td>19 Aug 2023, 10:30 am</td>
                    <td className="text-end">
                      <a
                        href="#"
                        className="btn btn-sm btn-light btn-active-light-primary"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                      >
                        Actions
                        <i className="ki-duotone ki-down fs-5 m-0" />
                      </a>
                      {/*begin::Menu*/}
                      <div
                        className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                        data-kt-menu="true"
                      >
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a
                            href="../../demo1/dist/apps/user-management/users/view.html"
                            className="menu-link px-3"
                          >
                            View
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a
                            href="#"
                            className="menu-link px-3"
                            data-kt-roles-table-filter="delete_row"
                          >
                            Delete
                          </a>
                        </div>
                        {/*end::Menu item*/}
                      </div>
                      {/*end::Menu*/}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check form-check-sm form-check-custom form-check-solid">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue={1}
                        />
                      </div>
                    </td>
                    <td>ID8941</td>
                    <td className="d-flex align-items-center">
                      {/*begin:: Avatar */}
                      <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                        <a href="../../demo1/dist/apps/user-management/users/view.html">
                          <div className="symbol-label fs-3 bg-light-info text-info">
                            A
                          </div>
                        </a>
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::User details*/}
                      <div className="d-flex flex-column">
                        <a
                          href="../../demo1/dist/apps/user-management/users/view.html"
                          className="text-gray-800 text-hover-primary mb-1"
                        >
                          Robert Doe
                        </a>
                        <span>robert@benko.com</span>
                      </div>
                      {/*begin::User details*/}
                    </td>
                    <td>22 Sep 2023, 8:43 pm</td>
                    <td className="text-end">
                      <a
                        href="#"
                        className="btn btn-sm btn-light btn-active-light-primary"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                      >
                        Actions
                        <i className="ki-duotone ki-down fs-5 m-0" />
                      </a>
                      {/*begin::Menu*/}
                      <div
                        className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                        data-kt-menu="true"
                      >
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a
                            href="../../demo1/dist/apps/user-management/users/view.html"
                            className="menu-link px-3"
                          >
                            View
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a
                            href="#"
                            className="menu-link px-3"
                            data-kt-roles-table-filter="delete_row"
                          >
                            Delete
                          </a>
                        </div>
                        {/*end::Menu item*/}
                      </div>
                      {/*end::Menu*/}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check form-check-sm form-check-custom form-check-solid">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue={1}
                        />
                      </div>
                    </td>
                    <td>ID8355</td>
                    <td className="d-flex align-items-center">
                      {/*begin:: Avatar */}
                      <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                        <a href="../../demo1/dist/apps/user-management/users/view.html">
                          <div className="symbol-label">
                            <img
                              src="assets/media/avatars/300-13.jpg"
                              alt="John Miller"
                              className="w-100"
                            />
                          </div>
                        </a>
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::User details*/}
                      <div className="d-flex flex-column">
                        <a
                          href="../../demo1/dist/apps/user-management/users/view.html"
                          className="text-gray-800 text-hover-primary mb-1"
                        >
                          John Miller
                        </a>
                        <span>miller@mapple.com</span>
                      </div>
                      {/*begin::User details*/}
                    </td>
                    <td>10 Nov 2023, 8:43 pm</td>
                    <td className="text-end">
                      <a
                        href="#"
                        className="btn btn-sm btn-light btn-active-light-primary"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                      >
                        Actions
                        <i className="ki-duotone ki-down fs-5 m-0" />
                      </a>
                      {/*begin::Menu*/}
                      <div
                        className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                        data-kt-menu="true"
                      >
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a
                            href="../../demo1/dist/apps/user-management/users/view.html"
                            className="menu-link px-3"
                          >
                            View
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a
                            href="#"
                            className="menu-link px-3"
                            data-kt-roles-table-filter="delete_row"
                          >
                            Delete
                          </a>
                        </div>
                        {/*end::Menu item*/}
                      </div>
                      {/*end::Menu*/}
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
        {/*end::Content*/}
      </div>
      {/*end::Layout*/}
    </div>
    {/*end::Content container*/}
  </div>
  {/*end::Content*/}
</>

  )
}

export default ViewRoles
