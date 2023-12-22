import { Navigate, Routes, Route, Outlet } from 'react-router-dom'
import { PageLink, PageTitle } from '../../../_metronic/layout/core'
import { Profile } from './components/Profile'
import { Documents } from './components/Documents'
import { Connections } from './components/Connections'
import { OrganizationHeader } from './OrganizationHeader'

import { FacilityList } from './components/facilities/FacilityList'
import { CptCodes } from './components/cpt-codes/CptCodes'
import { Settings } from './components/settings/Settings'
import { Preference } from './components/preference/Preference'
import { IcdCodes } from './components/icd-codes/IcdCodes'

const organizationBreadCrumbs = [
  {
    title: 'Organization',
    path: '/organization/profile',
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

const ProfilePage = () => (
  <Routes>
    <Route
      element={
        <>
          <OrganizationHeader />
          <Outlet />
        </>
      }
    >
      <Route
        path='profile'
        element={
          <>
            <PageTitle breadcrumbs={organizationBreadCrumbs}>Profile</PageTitle>
            <Profile />
          </>
        }
      />

      <Route
        path='facilities'
        element={
          <>
            <PageTitle breadcrumbs={organizationBreadCrumbs}>Facilities</PageTitle>
            <FacilityList />
          </>
        }
      />

      <Route
        path='cpt-codes'
        element={
          <>
            <PageTitle breadcrumbs={organizationBreadCrumbs}>CPT Codes</PageTitle>
            <CptCodes />
          </>
        }
      />

      <Route
        path='icd-codes'
        element={
          <>
            <PageTitle breadcrumbs={organizationBreadCrumbs}>ICD Codes</PageTitle>
            <IcdCodes />
          </>
        }
      />

      <Route
        path='settings'
        element={
          <>
            <PageTitle breadcrumbs={organizationBreadCrumbs}>Settings</PageTitle>
            <Settings />
          </>
        }
      />
      <Route
        path='preference'
        element={
          <>
            <PageTitle breadcrumbs={organizationBreadCrumbs}>Preference</PageTitle>
            <Preference />
          </>
        }
      />
      <Route
        path='documents'
        element={
          <>
            <PageTitle breadcrumbs={organizationBreadCrumbs}>Documents</PageTitle>
            <Documents />
          </>
        }
      />
      <Route
        path='connections'
        element={
          <>
            <PageTitle breadcrumbs={organizationBreadCrumbs}>Connections</PageTitle>
            <Connections />
          </>
        }
      />
      <Route index element={<Navigate to='/crafted/pages/profile/overview' />} />
    </Route>
  </Routes>
)

export default ProfilePage
