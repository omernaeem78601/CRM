import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  showChartNoteDataReq,
} from './__request/ChartNoteRequest'

import { Link } from 'react-router-dom'
import { ERROR_ALERT_ADMIN } from '../../../../utilities/AlertMsgConstant'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { editBillingIdAction } from '../../../../redux/action'
import { LoadingBar } from '../../../../utilities/LoadingBar'
import { formatDate } from '../../../../utilities/Helper'

const DetailChartNotes = () => {
  const chartNoteViewState = useSelector((state) => state.billingIdShowReducerComp)
  const patientViewState = useSelector((state) => state.patientIdShowReducerComp)

  const dispatch = useDispatch()
  const editBillingIdDispatch = (billingId) => {
    dispatch(editBillingIdAction(billingId))
  }


  const initialValues = {
    patient_id: patientViewState,
    facility_name: '',
    rendering_provider_name: '',
    referring_provider_name: '',
    date_of_service: '',
    status: '',
    is_active: true,
    icd_codes: [],
    cpt_codes: [],
  }
  const [chartNoteLoading, setChartNoteLoading] = useState(true)
  const [chartNoteData, setChartNoteData] = useState({
    ...initialValues,
    icd_codes: [],
    cpt_codes: [],
  })
  const chartNoteDetail = async () => {
    try {
      setChartNoteLoading(true)
      const response = await showChartNoteDataReq(patientViewState, chartNoteViewState)
      const billingDataFromAPI = response.data.data
      const icdCodes = JSON.parse(billingDataFromAPI.icd_codes)
      const cptCodes = JSON.parse(billingDataFromAPI.cpt_codes)
      setChartNoteData({
        patient_id: patientViewState,
        facility_name: billingDataFromAPI.facility_name,
        provider_id: billingDataFromAPI.provider_id,
        rendering_provider_name: billingDataFromAPI.rendering_provider_name,
        referring_provider_name: billingDataFromAPI.referring_provider_name,
        date_of_service: billingDataFromAPI.date_of_service,
        status: billingDataFromAPI.status,
        is_active: true,
        icd_codes: icdCodes,
        cpt_codes: cptCodes,
      })
      setChartNoteLoading(false)
    } catch (error) {
      toast.error(ERROR_ALERT_ADMIN)
      setChartNoteLoading(false)
    }
  }

  useEffect(() => {
    if (patientViewState || chartNoteViewState) {
      chartNoteDetail()
    }
  }, [chartNoteViewState])

  return (
    <>
      <div className='d-flex justify-content-between align-items-center mb-5'>
        <h3>Chart Notes Detail</h3>
        <Link
          to='/patient/detail/chart-notes/edit'
          onClick={() => editBillingIdDispatch(chartNoteViewState)}
          className='btn  btn-bg-success btn-active-color-white btn-color-white'
        >
          <i className='bi bi-pencil-fill fs-4 px-0'> </i> Edit
        </Link>
      </div>
      {chartNoteLoading ? (
        <LoadingBar />
      ) : (
        <div className='card p-5'>
          <div className="card-body p-0 d-flex flex-column">
            <div className='px-9 pt-7 card-rounded h-275px w-100 bg-light-primary'>
              Patient Chart Note
            </div>
            <div className="shadow-xs card-rounded mx-9 mb-9 px-6 py-9 position-relative z-index-1 bg-body" style={{ marginTop: "-100px" }}>
              <div className="row g-0">
                <div className="col">
                  <div className="fs-7 text-muted fw-semibold">Date of Service</div>
                  <div className="fs-4 fw-bold">{formatDate(chartNoteData.date_of_service)}</div>
                </div>

                <div className="col">
                  <div className="fs-7 text-muted fw-semibold">Default Location</div>
                  <div className="d-flex align-items-center">
                    <div className="fs-4 fw-bold">{chartNoteData.facility_name}</div>
                  </div>
                </div>
                <div className="col">
                  <div className="fs-7 text-muted fw-semibold">Rendering Provider</div>
                  <div className="fs-4 fw-bold">{chartNoteData.rendering_provider_name}</div>
                </div>
                <div className="col">
                  <div className="fs-7 text-muted fw-semibold">Referring Provider</div>
                  <div className="fs-4 fw-bold">{chartNoteData.referring_provider_name}</div>
                </div>
                <div className="col">
                  <div className="fs-7 text-muted fw-semibold">Status</div>
                  <div className="fs-4 fw-bold">{chartNoteData.status}</div>
                </div>

              </div>

            </div>

          </div>

          <div className='container my-5 pt-5'>
            <div className='d-flex justify-content-between'>
              <div className='stepper-label'>
                <h3 className='stepper-title '>Diagnosis Codes</h3>
                <div className='stepper-desc fw-semibold mb-5' >Diagnosis or nature of illness or injury</div>
              </div>
            </div>
            {chartNoteData.icd_codes.length == 0 ? (
              <div></div>
            ) : (
              <>
                <div className='row mb-10 me-4'>
                  <div className='col-6'>
                    <label className='form-label'>Diagnosis</label>

                  </div>
                  <div className='col-6'>
                    <label className='form-label '>Notes</label>
                  </div>
                </div>

                {chartNoteData.icd_codes.map((icd, index) => (
                  <div className='row mb-10 me-4' key={index}>
                    <div className='col-6'>
                      {icd.icd}
                    </div>
                    <div className='col-6'>
                      {icd.icd_notes}
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>

          <div className='container my-5 pt-5'>
            <div className='d-flex justify-content-between'>
              <div className='stepper-label'>
                <h3 className='stepper-title' >Procedures Codes</h3>
                <div className='stepper-desc fw-semibold mb-5' >
                  Procedures, services, or supplies, CPT/HCPCS, Modifier
                </div>
              </div>
            </div>
            {chartNoteData.cpt_codes.length === 0 ? (
              <div></div>
            ) : (
              <>
                <div className='row mb-10 me-4 mt-5'>
                  <div className='col-3'>
                    <label className='form-label'>Service Code</label>
                  </div>
                  <div className='col-1'>
                    <label className='form-label '>M1</label>
                  </div>
                  <div className='col-1'>
                    <label className='form-label '>M2</label>
                  </div>
                  <div className='col-1'>
                    <label className='form-label '>M3</label>
                  </div>
                  <div className='col-1'>
                    <label className='form-label '>M4</label>
                  </div>
                  <div className='col-2'>
                    <label className='form-label '>Unit</label>
                  </div>
                  <div className='col-3'>
                    <label className='form-label '>Service Duration</label>
                  </div>
                </div>

                {chartNoteData.cpt_codes.map((cpt, index) => (
                  <div className='row mb-10 me-4' key={index}>

                    <div className='col-3'>
                      {cpt.service_code}
                    </div>

                    <div className='col-1'>
                      {cpt.modifier1}
                    </div>

                    <div className='col-1'>
                      {cpt.modifier2}
                    </div>

                    <div className='col-1'>
                      {cpt.modifier3}
                    </div>

                    <div className='col-1'>
                      {cpt.modifier4}
                    </div>

                    <div className='col-2'>
                      {cpt.quantity}
                    </div>

                    <div className='col-3'>
                      {cpt.service_duration}
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export { DetailChartNotes }
