import { useState, useEffect, useContext } from 'react'
import { KTIcon } from '../../../_metronic/helpers'
import { showProviderReq } from './__request/RequestProvider'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ERROR_ALERT_ADMIN } from '../../utilities/AlertMsgConstant'
import { LoadingBar } from '../../utilities/LoadingBar';
import { useDispatch, useSelector } from 'react-redux'
import { showProviderIdAction } from '../../redux/action'
const DetailProvider = () => {
  const dispatch = useDispatch();

  const providerState = useSelector((state) => state.providerIdShowReducerComp)
  const providerType = useSelector((state) => state.providerTypeReducer)
  const [formValues, setFormValues] = useState([]);

  const [providerDetailLoading, setProviderDetailLoading] = useState(true);

  // single data
  const providerData = async () => {
    setProviderDetailLoading(true);
    try {
      const response = await showProviderReq(providerState, providerType)
      setFormValues(response.data.data)
      setProviderDetailLoading(false);
      dispatch(showProviderIdAction(null));
    } catch (error) {
      toast.error(ERROR_ALERT_ADMIN + " detail provider")
      setProviderDetailLoading(false);
    }
  }

  useEffect(() => {
    if (providerState && (providerType === 'rendering' || providerType === 'refering')) {
      providerData()
    }
  }, [providerState]);

  return (
    <div
      id='kt_detailprovider'
      className='bg-body'
      data-kt-drawer='true'
      data-kt-drawer-name='detailprovider'
      data-kt-drawer-activate='true'
      data-kt-drawer-overlay='true'
      data-kt-drawer-width="{default:'300px', 'lg': '900px'}"
      data-kt-drawer-direction='end'
      data-kt-drawer-toggle='#kt_detailprovider_toggle'
      data-kt-drawer-close='#kt_detailprovider_close'
    >
      <div className='card shadow-none rounded-0 '>
        <div className='card-header' id='kt_insurancedetail_header'>
          <h3 className='card-title fw-bolder text-dark'>Provider Detail</h3>
          <div className='card-toolbar'>
            <button
              type='button'
              className='btn btn-sm btn-icon btn-active-light-primary me-n5'
              id='kt_detailprovider_close'
            >
              <KTIcon iconName='cross' className='fs-1' />
            </button>
          </div>
        </div>

        <div
          className='card-body position-relative p-0'
          style={{ width: '69rem' }}
          id='kt_insurancedetail_body'
        >
          <div className="card card-xl-stretch mb-xl-8 border-0">
            {providerDetailLoading ? (
              <LoadingBar />
            ) : (
              <div className="card-body p-0 d-flex flex-column">
                <div className='px-9 pt-7 card-rounded h-275px w-100 bg-light-primary'>
                  <h3 className="card-title align-items-start flex-column">
                    <span
                      className={`badge badge-light-${formValues.is_active ? 'success' : 'danger'
                        } fw-bold me-auto px-4 py-3`}
                    >
                      {formValues.is_active ? 'Active' : 'Inactive'}
                    </span>
                  </h3>
                  <div className="d-flex text-center flex-column text-success pt-8">
                    <span className="fw-semibold fs-7">{formValues.npi}</span>
                    <span className="fw-bold fs-2x pt-1">{formValues.full_name}</span>
                  </div>
                </div>
                <div className="shadow-xs card-rounded mx-9 mb-9 px-6 py-9 position-relative z-index-1 bg-body" style={{ marginTop: "-100px" }}>
                  <div className="row g-0">
                    <div className="col">
                      <div className="fs-7 text-muted fw-semibold">Title</div>
                      <div className="fs-4 fw-bold">{formValues.title}</div>
                    </div>
                    <div className="col mr-8">
                      <div className="fs-7 text-muted fw-semibold">First Name</div>
                      <div className="d-flex align-items-center">
                        <div className="fs-4 fw-bold">{formValues.first_name}</div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="fs-7 text-muted fw-semibold">Middle Name</div>
                      <div className="fs-4 fw-bold">{formValues.middle_name}</div>
                    </div>
                    <div className="col">
                      <div className="fs-7 text-muted fw-semibold">Last Name</div>
                      <div className="fs-4 fw-bold">{formValues.last_name}</div>
                    </div>
                  </div>

                  <div className="row g-0 mt-8">
                    <div className="col">
                      <div className="fs-7 text-muted fw-semibold">Suffix</div>
                      <div className="fs-4 fw-bold">{formValues.suffix}</div>
                    </div>
                    <div className="col">
                      <div className="fs-7 text-muted fw-semibold">Specialty</div>
                      <div className="fs-4 fw-bold">{formValues.specialty}</div>
                    </div>
                    <div className="col mr-8">
                      <div className="fs-7 text-muted fw-semibold">Taxonomy</div>
                      <div className="d-flex align-items-center">
                        <div className="fs-4 fw-bold">{formValues.taxonomy}</div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="fs-7 text-muted fw-semibold">SSN</div>
                      <div className="fs-4 fw-bold">{formValues.ssn}</div>
                    </div>
                  </div>

                  <div className="row g-0 mt-8">
                    <div className="col">
                      <div className="fs-7 text-muted fw-semibold">Address Line 1</div>
                      <div className="fs-4 fw-bold">{formValues.address_line_1}</div>
                    </div>
                    <div className="col mr-8">
                      <div className="fs-7 text-muted fw-semibold">Address Line 2</div>
                      <div className="d-flex align-items-center">
                        <div className="fs-4 fw-bold">{formValues.address_line_2}</div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="fs-7 text-muted fw-semibold">City</div>
                      <div className="fs-4 fw-bold">{formValues.city}</div>
                    </div>
                    <div className="col">
                      <div className="fs-7 text-muted fw-semibold">State</div>
                      <div className="fs-4 fw-bold">{formValues.state}</div>
                    </div>
                  </div>

                  <div className="row g-0 mt-8">
                    <div className="col">
                      <div className="fs-7 text-muted fw-semibold">Contact Person</div>
                      <div className="fs-4 fw-bold">{formValues.contact_person}</div>
                    </div>
                    <div className="col mr-8">
                      <div className="fs-7 text-muted fw-semibold">Phone</div>
                      <div className="d-flex align-items-center">
                        <div className="fs-4 fw-bold">{formValues.phone}</div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="fs-7 text-muted fw-semibold">Fax</div>
                      <div className="fs-4 fw-bold">{formValues.fax}</div>
                    </div>
                    <div className="col">
                      <div className="fs-7 text-muted fw-semibold">Email</div>
                      <div className="fs-4 fw-bold">{formValues.email}</div>
                    </div>
                  </div>

                  <div className="row g-0 mt-8">
                    <div className="col-3">
                      <div className="fs-7 text-muted fw-semibold">Zip Code</div>
                      <div className="fs-4 fw-bold">{formValues.zip_code}</div>
                    </div>
                    <div className="col-3">
                      <div className="fs-7 text-muted fw-semibold">Tax ID</div>
                      <div className="fs-4 fw-bold">{formValues.tax_id}</div>
                    </div>
                    <div className="col-3">
                      <div className="fs-7 text-muted fw-semibold">License ID</div>
                      <div className="fs-4 fw-bold">{formValues.license_id}</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div
          className='card-footer py-2 d-flex justify-content-end  '
          id='kt_insurancedetail_footer'
        >
          <div>
            <button
              type='button'
              className='btn btn-bg-body text-primary text-decoration-none'
              id='kt_detailprovider_close'
            >
              Back
              <KTIcon iconName='arrow-right' className='fs-3 text-primary' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export { DetailProvider }
