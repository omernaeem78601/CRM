import {useFormik} from 'formik'
import {KTSVG} from '../../_metronic/helpers'
import {useEffect} from 'react'

const ChangeUserRole = ({deleteData, deleteDataFunction, deleteDataID, role, reqRole, subRole}) => {
  const userState = {
    userId: deleteDataID,
    role: role,
  }
  const initial = {
    userId: '',
    role: '',
  }
  const {values, setValues, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: initial,
    onSubmit: (values) => {
      deleteDataFunction(values)
    },
  })
  useEffect(() => {
    if (deleteDataID) {
      setValues(userState)
    }
  }, [deleteDataID])
  return (
    <div className='modal fade' tabIndex={-1} id='kt_modal_3'>
      <div className='modal-dialog'>
        {/* alert  */}
        <div className='modal-content alert alert-dismissible bg-light-success   px-10  mb-10'>
          <div className='modal-header'>
            <h5 className='modal-title'>Change Role</h5>
            <div
              className='btn btn-icon btn-sm btn-active-light-primary ms-2'
              data-bs-dismiss='modal'
              aria-label='Close'
            >
              <KTSVG
                path='/media/icons/duotune/arrows/arr061.svg'
                className='svg-icon svg-icon-2x'
              />
            </div>
          </div>
          <div className='modal-body'>
            <div className=''>
              <div className='text-center'>
                <h5 className='fw-bolder fs-1 mb-5'>
                  
                  <span className='fw-bold'>Change Role For {deleteData}</span>?
                </h5>
                <h5 className='fw-bolder fs-1 mb-5'>
                  {' '}
                  {role === 'customer'
                    ? `Requested For ${
                        subRole === 'customer' ? reqRole : `${subRole} in ${reqRole}`
                      }`
                    : ''}{' '}
                </h5>

                <div className='col-lg-12'>
                  <div className='row mb-10'>
                    <div className='col-12'>
                      <label className='form-label'>Roles</label>
                      <select
                        className='form-select'
                        name='role'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.role}
                      >
                        <option value='#'>Choose..</option>
                        <option value='vendor'>Vendor</option>
                        <option value='farmer'>Farmer</option>
                        <option value='golden_member'>Golden Member</option>
                        <option value='wholesaler'>Wholesaler</option>
                        <option value='agriculture'>Agriculture</option>
                        <option value='logistics'>Logistics</option>
                        <option value='customer'>Customer</option>
                        <option value='machinery'>Machinery Distributer</option>
                        <option value='seeds'>Seeds Distributer</option>
                        <option value='rawMaterial'>Raw Material Distributer</option>
                        <option value='landBrokers'>LandBroker</option>
                        <option value='transport'>Transporter</option>
                        <option value='account'>Accountant</option>
                        {/* {patientOption.title &&
                        patientOption.title?.map((title, index) => (
                          <option key={index} value={title.option_id}>
                            {title.option_value}
                          </option>
                        ))} */}
                      </select>
                    </div>
                  </div>
                </div>

                <div className='separator separator-dashed border-success opacity-25 mb-5'></div>

                <div className='d-flex flex-center flex-wrap'>
                  <button
                    type='button'
                    className='btn btn-outline btn-outline-success btn-active-success m-2'
                    data-bs-dismiss='modal'
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmit}
                    data-bs-dismiss='modal'
                    type='button'
                    className='btn btn-success m-2'
                  >
                    Change
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChangeUserRole
