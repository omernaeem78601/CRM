import { Route, Routes, Outlet, Navigate } from 'react-router-dom'
import { PageTitle } from '../../../_metronic/layout/core'
import UserList from './UserList'

const userBreadcrumbs = [
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

const useraddBreadCrumbs = [{
  title: 'Users list',
  path: '/user/list',
  isSeparator: false,
  isActive: false,
}, {
  title: '',
  path: '',
  isSeparator: true,
  isActive: false,
}]

const UsersPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>

        <Route
          path='list'
          element={
            <>
              <PageTitle breadcrumbs={userBreadcrumbs}>Users List</PageTitle>
              <UserList />
            </>
          }
        />
        <Route
          path='add'
          element={
            <>
              <PageTitle breadcrumbs={useraddBreadCrumbs}>Add New Users</PageTitle>
              {/* <AddPatients /> */}
            </>
          }
        />
        <Route
          path='edit/:id'
          element={
            <>
              <PageTitle breadcrumbs={useraddBreadCrumbs}>Update Users</PageTitle>
              {/* <EditPatients /> */}
            </>
          }
        />
        <Route
          path='detail/*'
          element={
            <>
              {/* <PatientDetailPage /> */}
            </>
          }
        />
        <Route index element={<Navigate to='/user' />} />
      </Route>
    </Routes>
  )
}

export default UsersPage
