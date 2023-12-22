import { useState, useEffect, useContext } from 'react'
import { Navigate, Routes, Route, Outlet, useLocation } from 'react-router-dom'
import { PageTitle } from '../../../../_metronic/layout/core'
import { DetailPatientHeader } from './DetailPatientHeader'
import DetailPatientData from './DetailPatientData'
import DetailTemplate from './detail-patient-components/DetailTemplate'

import { useDispatch, useSelector } from 'react-redux'
import { showPatientDataReq } from '../__request/RequestPatient'
import { ERROR_ALERT_ADMIN } from '../../../utilities/AlertMsgConstant'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { LoadingBar } from '../../../utilities/LoadingBar'
import { setDataContext } from '../../../utilities/SettingContext'
import { ChartNotes } from './patient-chart/ChartNotes'
import { AddChartNote } from './patient-chart/AddChartNote'
import { DetailChartNotes } from './patient-chart/DetailChartNotes'
import { UpdateChartNotes } from './patient-chart/UpdateChartNotes'
import { AddInsuranceTab } from './insurances/AddInsuranceTab'
import InsuranceList from './insurances/InsuranceList'
import AlertList from './alerts/AlertList'

const patientBreadCrumbs = [{
  title: 'Patient list',
  path: '/patient/list',
  isSeparator: false,
  isActive: false,
}, {
  title: '',
  path: '',
  isSeparator: true,
  isActive: false,
}]

const patientEditDetailBreadCrumbs = [{
  title: 'chart-notes',
  path: 'patient/detail/chart-notes',
  isSeparator: false,
  isActive: false,
}, {
  title: '',
  path: '',
  isSeparator: true,
  isActive: false,
}]
function PatientDetailPage() {
  const { patientRefresh, setPatientRefresh, patientData,setPatientValues ,setRefresh, refresh } = useContext(setDataContext)
  const patientViewState = useSelector((state) => state.patientIdShowReducerComp)
  const [patientLoading, setPatientLoading] = useState(true)

  const getPatientDataObj = async () => {
    try {
      const response = await showPatientDataReq(patientViewState)
      setPatientValues(response.data.data)
      setPatientLoading(false)
      setPatientRefresh(false)
      setRefresh(false)
    } catch (error) {
      toast.error(ERROR_ALERT_ADMIN)
      setRefresh(false)
      setPatientLoading(false)
      setPatientRefresh(false)
    } 
  }
  useEffect(() => {
    if ((patientViewState && patientLoading) || patientRefresh) {
      getPatientDataObj()
    }
  }, [patientViewState, patientLoading, patientRefresh])

  useEffect(() => {
    if (refresh) {
      getPatientDataObj()
    }
  }, [refresh])




  return (
    <>
      {patientLoading  ? (
        <LoadingBar />
      ) : (
        <Routes>
          <Route
            element={
              <>
                <DetailPatientHeader patientData={patientData} />
                <Outlet />
              </>
            }
          >
            <Route
              path='/patient-data'
              element={
                <>
                  <PageTitle breadcrumbs={patientBreadCrumbs} >Patient Detail</PageTitle>
                  <DetailPatientData patientData={patientData} />
                </>
              }
            />
            <Route
              path='insurance'
              element={
                <>
                  <PageTitle breadcrumbs={patientBreadCrumbs}>Insurances</PageTitle>
                  {patientData.insurances.length > 0 ? (
                    patientRefresh ? (
                      <LoadingBar />
                    ) :
                      (<InsuranceList patientData={patientData} />
                      )) : (
                    <AddInsuranceTab /> 
                  )}
                </>
              }
            />

            <Route
              path='chart-notes'
              element={
                <>
                  <PageTitle breadcrumbs={patientBreadCrumbs}>Chart Notes</PageTitle>
                  <ChartNotes patientData={patientData} />
                </>
              }
            />
            <Route
              path='claim'
              element={
                <>
                 <PageTitle breadcrumbs={patientBreadCrumbs}>Claim</PageTitle>
                 <DetailTemplate />
                </>
              }
            />
            <Route
              path='chart-notes/add'
              element={
                <>
                  <PageTitle breadcrumbs={patientEditDetailBreadCrumbs}>Add Chart Notes</PageTitle>
                  <AddChartNote />
                </>
              }
            />
            <Route
              path='chart-notes/detail'
              element={
                <>
                  <PageTitle breadcrumbs={patientEditDetailBreadCrumbs}>Detail Chart Notes</PageTitle>
                  <DetailChartNotes />
                </>
              }
            />
            <Route
              path='chart-notes/edit'
              element={
                <>
                  {/* <PageTitle breadcrumbs={patientEditDetailBreadCrumbs}>Edit Chart Notes</PageTitle> */}
                  <UpdateChartNotes />
                </>
              }
            />
            <Route
              path='template'
              element={
                <>
                  <PageTitle breadcrumbs={patientBreadCrumbs}>Template</PageTitle>
                  <DetailTemplate />
                </>
              }
            />
            <Route
              path='alert'
              element={
                <>
                  <PageTitle breadcrumbs={patientBreadCrumbs}>Alerts</PageTitle>
                  <AlertList />
                </> 
              }
            />
            <Route index element={<Navigate to='/patient/detail/patient-data' />} />
          </Route>
        </Routes>
      )}
    </>
  )
}

export { PatientDetailPage }
