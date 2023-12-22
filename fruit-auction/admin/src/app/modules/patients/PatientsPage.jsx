import { Route, Routes, Outlet, Navigate } from 'react-router-dom'
import { PageLink, PageTitle } from '../../../_metronic/layout/core'
import AddPatients from './add-patients/AddPatients'
import { PatientDetailPage } from './detail-patient/PatientDetailPage'
import Patient from './PatientList'
import EditPatients from './add-patients/EditPatients'

const patientBreadcrumbs = [
  {
    title: 'dashboard',
    path: '/dashboard',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const patientaddBreadCrumbs = [{
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

const PatientsPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>

        <Route
          path='list'
          element={
            <>
              <PageTitle breadcrumbs={patientBreadcrumbs}>Patients List</PageTitle>
              <Patient />
            </>
          }
        />
        <Route
          path='add'
          element={
            <>
              <PageTitle breadcrumbs={patientaddBreadCrumbs}>Add New Patient</PageTitle>
              <AddPatients />
            </>
          }
        />
        <Route
          path='edit/:id'
          element={
            <>
              <PageTitle breadcrumbs={patientaddBreadCrumbs}>Update Patient</PageTitle>
              <EditPatients />
            </>
          }
        />
        <Route
          path='detail/*'
          element={
            <>
              <PatientDetailPage />
            </>
          }
        />
        <Route index element={<Navigate to='/patient' />} />
      </Route>
    </Routes>
  )
}

export default PatientsPage
