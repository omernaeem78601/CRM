import React from 'react'

const Permission = () => {
  return (
    <>
  {/*begin::Content*/}
  <div id="kt_app_content" className="app-content flex-column-fluid">
    {/*begin::Content container*/}
    <div id="kt_app_content_container" className="app-container container-xxl">
     
      {/*begin::Card*/}
      <div className="card card-flush">
        {/*begin::Card header*/}
        <div className="card-header mt-6">
          {/*begin::Card title*/}
          <div className="card-title">
            {/*begin::Search*/}
            <div className="d-flex align-items-center position-relative my-1 me-5">
              <i className="ki-duotone ki-magnifier fs-3 position-absolute ms-5">
                <span className="path1" />
                <span className="path2" />
              </i>
              <input
                type="text"
                data-kt-permissions-table-filter="search"
                className="form-control form-control-solid w-250px ps-13"
                placeholder="Search Permissions"
              />
            </div>
            {/*end::Search*/}
          </div>
          {/*end::Card title*/}
          {/*begin::Card toolbar*/}
          <div className="card-toolbar">
            {/*begin::Button*/}
            <button
              type="button"
              className="btn btn-light-primary"
              data-bs-toggle="modal"
              data-bs-target="#kt_modal_add_permission"
            >
              <i className="ki-duotone ki-plus-square fs-3">
                <span className="path1" />
                <span className="path2" />
                <span className="path3" />
              </i>
              Add Permission
            </button>
            {/*end::Button*/}
          </div>
          {/*end::Card toolbar*/}
        </div>
        {/*end::Card header*/}
        {/*begin::Card body*/}
        <div className="card-body pt-0">
         
         
         
         
         
         
         
          {/*begin::Table*/}
          <table
            className="table align-middle table-row-dashed fs-6 gy-5 mb-0"
            id="kt_permissions_table"
          >
            <thead>
              <tr className="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
                <th className="min-w-125px">Name</th>
                <th className="min-w-250px">Assigned to</th>
                <th className="min-w-125px">Created Date</th>
                <th className="text-end min-w-100px">Actions</th>
              </tr>
            </thead>
            <tbody className="fw-semibold text-gray-600">
              <tr>
                <td>User Management</td>
                <td>
                  <a
                    href="../../demo1/dist/apps/user-management/roles/view.html"
                    className="badge badge-light-primary fs-7 m-1"
                  >
                    Administrator
                  </a>
                </td>
                <td>10 Nov 2023, 8:43 pm</td>
                <td className="text-end">
                  <button
                    className="btn btn-icon btn-active-light-primary w-30px h-30px me-3"
                    data-bs-toggle="modal"
                    data-bs-target="#kt_modal_update_permission"
                  >
                    <i className="ki-duotone ki-setting-3 fs-3">
                      <span className="path1" />
                      <span className="path2" />
                      <span className="path3" />
                      <span className="path4" />
                      <span className="path5" />
                    </i>
                  </button>
                  <button
                    className="btn btn-icon btn-active-light-primary w-30px h-30px"
                    data-kt-permissions-table-filter="delete_row"
                  >
                    <i className="ki-duotone ki-trash fs-3">
                      <span className="path1" />
                      <span className="path2" />
                      <span className="path3" />
                      <span className="path4" />
                      <span className="path5" />
                    </i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>Content Management</td>
                <td>
                  <a
                    href="../../demo1/dist/apps/user-management/roles/view.html"
                    className="badge badge-light-primary fs-7 m-1"
                  >
                    Administrator
                  </a>
                  <a
                    href="../../demo1/dist/apps/user-management/roles/view.html"
                    className="badge badge-light-danger fs-7 m-1"
                  >
                    Developer
                  </a>
                  <a
                    href="../../demo1/dist/apps/user-management/roles/view.html"
                    className="badge badge-light-success fs-7 m-1"
                  >
                    Analyst
                  </a>
                  <a
                    href="../../demo1/dist/apps/user-management/roles/view.html"
                    className="badge badge-light-info fs-7 m-1"
                  >
                    Support
                  </a>
                  <a
                    href="../../demo1/dist/apps/user-management/roles/view.html"
                    className="badge badge-light-warning fs-7 m-1"
                  >
                    Trial
                  </a>
                </td>
                <td>20 Dec 2023, 11:30 am</td>
                <td className="text-end">
                  <button
                    className="btn btn-icon btn-active-light-primary w-30px h-30px me-3"
                    data-bs-toggle="modal"
                    data-bs-target="#kt_modal_update_permission"
                  >
                    <i className="ki-duotone ki-setting-3 fs-3">
                      <span className="path1" />
                      <span className="path2" />
                      <span className="path3" />
                      <span className="path4" />
                      <span className="path5" />
                    </i>
                  </button>
                  <button
                    className="btn btn-icon btn-active-light-primary w-30px h-30px"
                    data-kt-permissions-table-filter="delete_row"
                  >
                    <i className="ki-duotone ki-trash fs-3">
                      <span className="path1" />
                      <span className="path2" />
                      <span className="path3" />
                      <span className="path4" />
                      <span className="path5" />
                    </i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>Financial Management</td>
                <td>
                  <a
                    href="../../demo1/dist/apps/user-management/roles/view.html"
                    className="badge badge-light-primary fs-7 m-1"
                  >
                    Administrator
                  </a>
                  <a
                    href="../../demo1/dist/apps/user-management/roles/view.html"
                    className="badge badge-light-success fs-7 m-1"
                  >
                    Analyst
                  </a>
                </td>
                <td>05 May 2023, 5:30 pm</td>
                <td className="text-end">
                  <button
                    className="btn btn-icon btn-active-light-primary w-30px h-30px me-3"
                    data-bs-toggle="modal"
                    data-bs-target="#kt_modal_update_permission"
                  >
                    <i className="ki-duotone ki-setting-3 fs-3">
                      <span className="path1" />
                      <span className="path2" />
                      <span className="path3" />
                      <span className="path4" />
                      <span className="path5" />
                    </i>
                  </button>
                  <button
                    className="btn btn-icon btn-active-light-primary w-30px h-30px"
                    data-kt-permissions-table-filter="delete_row"
                  >
                    <i className="ki-duotone ki-trash fs-3">
                      <span className="path1" />
                      <span className="path2" />
                      <span className="path3" />
                      <span className="path4" />
                      <span className="path5" />
                    </i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>Reporting</td>
                <td>
                  <a
                    href="../../demo1/dist/apps/user-management/roles/view.html"
                    className="badge badge-light-primary fs-7 m-1"
                  >
                    Administrator
                  </a>
                  <a
                    href="../../demo1/dist/apps/user-management/roles/view.html"
                    className="badge badge-light-success fs-7 m-1"
                  >
                    Analyst
                  </a>
                </td>
                <td>05 May 2023, 6:05 pm</td>
                <td className="text-end">
                  <button
                    className="btn btn-icon btn-active-light-primary w-30px h-30px me-3"
                    data-bs-toggle="modal"
                    data-bs-target="#kt_modal_update_permission"
                  >
                    <i className="ki-duotone ki-setting-3 fs-3">
                      <span className="path1" />
                      <span className="path2" />
                      <span className="path3" />
                      <span className="path4" />
                      <span className="path5" />
                    </i>
                  </button>
                  <button
                    className="btn btn-icon btn-active-light-primary w-30px h-30px"
                    data-kt-permissions-table-filter="delete_row"
                  >
                    <i className="ki-duotone ki-trash fs-3">
                      <span className="path1" />
                      <span className="path2" />
                      <span className="path3" />
                      <span className="path4" />
                      <span className="path5" />
                    </i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>Payroll</td>
                <td>
                  <a
                    href="../../demo1/dist/apps/user-management/roles/view.html"
                    className="badge badge-light-primary fs-7 m-1"
                  >
                    Administrator
                  </a>
                  <a
                    href="../../demo1/dist/apps/user-management/roles/view.html"
                    className="badge badge-light-success fs-7 m-1"
                  >
                    Analyst
                  </a>
                </td>
                <td>19 Aug 2023, 8:43 pm</td>
                <td className="text-end">
                  <button
                    className="btn btn-icon btn-active-light-primary w-30px h-30px me-3"
                    data-bs-toggle="modal"
                    data-bs-target="#kt_modal_update_permission"
                  >
                    <i className="ki-duotone ki-setting-3 fs-3">
                      <span className="path1" />
                      <span className="path2" />
                      <span className="path3" />
                      <span className="path4" />
                      <span className="path5" />
                    </i>
                  </button>
                  <button
                    className="btn btn-icon btn-active-light-primary w-30px h-30px"
                    data-kt-permissions-table-filter="delete_row"
                  >
                    <i className="ki-duotone ki-trash fs-3">
                      <span className="path1" />
                      <span className="path2" />
                      <span className="path3" />
                      <span className="path4" />
                      <span className="path5" />
                    </i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>Disputes Management</td>
                <td>
                  <a
                    href="../../demo1/dist/apps/user-management/roles/view.html"
                    className="badge badge-light-primary fs-7 m-1"
                  >
                    Administrator
                  </a>
                  <a
                    href="../../demo1/dist/apps/user-management/roles/view.html"
                    className="badge badge-light-danger fs-7 m-1"
                  >
                    Developer
                  </a>
                  <a
                    href="../../demo1/dist/apps/user-management/roles/view.html"
                    className="badge badge-light-info fs-7 m-1"
                  >
                    Support
                  </a>
                </td>
                <td>20 Dec 2023, 6:43 am</td>
                <td className="text-end">
                  <button
                    className="btn btn-icon btn-active-light-primary w-30px h-30px me-3"
                    data-bs-toggle="modal"
                    data-bs-target="#kt_modal_update_permission"
                  >
                    <i className="ki-duotone ki-setting-3 fs-3">
                      <span className="path1" />
                      <span className="path2" />
                      <span className="path3" />
                      <span className="path4" />
                      <span className="path5" />
                    </i>
                  </button>
                  <button
                    className="btn btn-icon btn-active-light-primary w-30px h-30px"
                    data-kt-permissions-table-filter="delete_row"
                  >
                    <i className="ki-duotone ki-trash fs-3">
                      <span className="path1" />
                      <span className="path2" />
                      <span className="path3" />
                      <span className="path4" />
                      <span className="path5" />
                    </i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>API Controls</td>
                <td>
                  <a
                    href="../../demo1/dist/apps/user-management/roles/view.html"
                    className="badge badge-light-primary fs-7 m-1"
                  >
                    Administrator
                  </a>
                  <a
                    href="../../demo1/dist/apps/user-management/roles/view.html"
                    className="badge badge-light-danger fs-7 m-1"
                  >
                    Developer
                  </a>
                </td>
                <td>05 May 2023, 5:30 pm</td>
                <td className="text-end">
                  <button
                    className="btn btn-icon btn-active-light-primary w-30px h-30px me-3"
                    data-bs-toggle="modal"
                    data-bs-target="#kt_modal_update_permission"
                  >
                    <i className="ki-duotone ki-setting-3 fs-3">
                      <span className="path1" />
                      <span className="path2" />
                      <span className="path3" />
                      <span className="path4" />
                      <span className="path5" />
                    </i>
                  </button>
                  <button
                    className="btn btn-icon btn-active-light-primary w-30px h-30px"
                    data-kt-permissions-table-filter="delete_row"
                  >
                    <i className="ki-duotone ki-trash fs-3">
                      <span className="path1" />
                      <span className="path2" />
                      <span className="path3" />
                      <span className="path4" />
                      <span className="path5" />
                    </i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>Database Management</td>
                <td>
                  <a
                    href="../../demo1/dist/apps/user-management/roles/view.html"
                    className="badge badge-light-primary fs-7 m-1"
                  >
                    Administrator
                  </a>
                  <a
                    href="../../demo1/dist/apps/user-management/roles/view.html"
                    className="badge badge-light-danger fs-7 m-1"
                  >
                    Developer
                  </a>
                </td>
                <td>19 Aug 2023, 5:20 pm</td>
                <td className="text-end">
                  <button
                    className="btn btn-icon btn-active-light-primary w-30px h-30px me-3"
                    data-bs-toggle="modal"
                    data-bs-target="#kt_modal_update_permission"
                  >
                    <i className="ki-duotone ki-setting-3 fs-3">
                      <span className="path1" />
                      <span className="path2" />
                      <span className="path3" />
                      <span className="path4" />
                      <span className="path5" />
                    </i>
                  </button>
                  <button
                    className="btn btn-icon btn-active-light-primary w-30px h-30px"
                    data-kt-permissions-table-filter="delete_row"
                  >
                    <i className="ki-duotone ki-trash fs-3">
                      <span className="path1" />
                      <span className="path2" />
                      <span className="path3" />
                      <span className="path4" />
                      <span className="path5" />
                    </i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>Repository Management</td>
                <td>
                  <a
                    href="../../demo1/dist/apps/user-management/roles/view.html"
                    className="badge badge-light-primary fs-7 m-1"
                  >
                    Administrator
                  </a>
                  <a
                    href="../../demo1/dist/apps/user-management/roles/view.html"
                    className="badge badge-light-danger fs-7 m-1"
                  >
                    Developer
                  </a>
                </td>
                <td>20 Dec 2023, 2:40 pm</td>
                <td className="text-end">
                  <button
                    className="btn btn-icon btn-active-light-primary w-30px h-30px me-3"
                    data-bs-toggle="modal"
                    data-bs-target="#kt_modal_update_permission"
                  >
                    <i className="ki-duotone ki-setting-3 fs-3">
                      <span className="path1" />
                      <span className="path2" />
                      <span className="path3" />
                      <span className="path4" />
                      <span className="path5" />
                    </i>
                  </button>
                  <button
                    className="btn btn-icon btn-active-light-primary w-30px h-30px"
                    data-kt-permissions-table-filter="delete_row"
                  >
                    <i className="ki-duotone ki-trash fs-3">
                      <span className="path1" />
                      <span className="path2" />
                      <span className="path3" />
                      <span className="path4" />
                      <span className="path5" />
                    </i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          {/*end::Table*/}
        </div>
        {/*end::Card body*/}
      </div>
      {/*end::Card*/}





















      {/*begin::Modals*/}
      {/*begin::Modal - Add permissions*/}
      <div
        className="modal fade"
        id="kt_modal_add_permission"
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
              <h2 className="fw-bold">Add a Permission</h2>
              {/*end::Modal title*/}
              {/*begin::Close*/}
              <div
                className="btn btn-icon btn-sm btn-active-icon-primary"
                data-kt-permissions-modal-action="close"
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
                id="kt_modal_add_permission_form"
                className="form"
                action="#"
              >
                {/*begin::Input group*/}
                <div className="fv-row mb-7">
                  {/*begin::Label*/}
                  <label className="fs-6 fw-semibold form-label mb-2">
                    <span className="required">Permission Name</span>
                    <span
                      className="ms-2"
                      data-bs-toggle="popover"
                      data-bs-trigger="hover"
                      data-bs-html="true"
                      data-bs-content="Permission names is required to be unique."
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
                    placeholder="Enter a permission name"
                    name="permission_name"
                  />
                  {/*end::Input*/}
                </div>
                {/*end::Input group*/}
                {/*begin::Input group*/}
                <div className="fv-row mb-7">
                  {/*begin::Checkbox*/}
                  <label className="form-check form-check-custom form-check-solid me-9">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      name="permissions_core"
                      id="kt_permissions_core"
                    />
                    <span
                      className="form-check-label"
                      htmlFor="kt_permissions_core"
                    >
                      Set as core permission
                    </span>
                  </label>
                  {/*end::Checkbox*/}
                </div>
                {/*end::Input group*/}
                {/*begin::Disclaimer*/}
                <div className="text-gray-600">
                  Permission set as a
                  <strong className="me-1">Core Permission</strong>will be
                  locked and
                  <strong className="me-1">not editable</strong>in future
                </div>
                {/*end::Disclaimer*/}
                {/*begin::Actions*/}
                <div className="text-center pt-15">
                  <button
                    type="reset"
                    className="btn btn-light me-3"
                    data-kt-permissions-modal-action="cancel"
                  >
                    Discard
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    data-kt-permissions-modal-action="submit"
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
      {/*end::Modal - Add permissions*/}












      {/*begin::Modal - Update permissions*/}
      <div
        className="modal fade"
        id="kt_modal_update_permission"
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
              <h2 className="fw-bold">Update Permission</h2>
              {/*end::Modal title*/}
              {/*begin::Close*/}
              <div
                className="btn btn-icon btn-sm btn-active-icon-primary"
                data-kt-permissions-modal-action="close"
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
              {/*begin::Notice*/}
              {/*begin::Notice*/}
              <div className="notice d-flex bg-light-warning rounded border-warning border border-dashed mb-9 p-6">
                {/*begin::Icon*/}
                <i className="ki-duotone ki-information fs-2tx text-warning me-4">
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
                      <strong className="me-1">Warning!</strong>By editing the
                      permission name, you might break the system permissions
                      functionality. Please ensure you're absolutely certain
                      before proceeding.
                    </div>
                  </div>
                  {/*end::Content*/}
                </div>
                {/*end::Wrapper*/}
              </div>
              {/*end::Notice*/}
              {/*end::Notice*/}
              {/*begin::Form*/}
              <form
                id="kt_modal_update_permission_form"
                className="form"
                action="#"
              >
                {/*begin::Input group*/}
                <div className="fv-row mb-7">
                  {/*begin::Label*/}
                  <label className="fs-6 fw-semibold form-label mb-2">
                    <span className="required">Permission Name</span>
                    <span
                      className="ms-2"
                      data-bs-toggle="popover"
                      data-bs-trigger="hover"
                      data-bs-html="true"
                      data-bs-content="Permission names is required to be unique."
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
                    placeholder="Enter a permission name"
                    name="permission_name"
                  />
                  {/*end::Input*/}
                </div>
                {/*end::Input group*/}
                {/*begin::Actions*/}
                <div className="text-center pt-15">
                  <button
                    type="reset"
                    className="btn btn-light me-3"
                    data-kt-permissions-modal-action="cancel"
                  >
                    Discard
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    data-kt-permissions-modal-action="submit"
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
      {/*end::Modal - Update permissions*/}












      {/*end::Modals*/}
    </div>
    {/*end::Content container*/}
  </div>
  {/*end::Content*/}
</>

  )
}

export default Permission
