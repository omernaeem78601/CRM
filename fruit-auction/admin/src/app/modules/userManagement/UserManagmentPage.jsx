import React from 'react';
import { Route, Routes, Outlet, Navigate } from 'react-router-dom';
import { PageLink, PageTitle } from '../../../_metronic/layout/core';
import Permission from './Permission';
import UserList from './users/UserList';
import ViewUser from './users/ViewUser';
import RoleList from './role/RoleList';
import ViewRoles from './role/ViewRoles';

const usersBreadcrumbs = [
  {
    title: 'User Management',
    path: '/user-management/users',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
];

const UserManagmentPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='users'
          element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}>Users List</PageTitle>
              <UserList />
            </>
          }
        />
        <Route
          path='view-users'
          element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}>View User</PageTitle>
              <ViewUser />
            </>
          }
        />
        <Route
          path='roles'
          element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}>Roles List</PageTitle>
              <RoleList />
            </>
          }
        />
        <Route
          path='view-roles'
          element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}>View Roles</PageTitle>
              <ViewRoles />
            </>
          }
        />
        <Route
          path='permissions'
          element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}>Permission List</PageTitle>
              <Permission />
            </>
          }
        />
        <Route index element={<Navigate to='/user-management/users' />} />
      </Route>
    </Routes>
  );
};

export default UserManagmentPage;