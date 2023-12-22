import React from 'react';
import { PageTitle } from './../../../_metronic/layout/core';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { MakeClaim } from './MakeClaim';
import ClaimList from './ClaimList';

const claimBreadcrumbs = [
  {
    title: 'Claims List',
    path: '/claim/view',
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

const ClaimPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path="view"
          element={
            <>
              {/* <PatientList /> */}
              <PageTitle breadcrumbs={claimBreadcrumbs}>Claim List</PageTitle>
              <ClaimList/>
            </>
          }
        />
        <Route
          path="add"
          element={
            <>
              <PageTitle breadcrumbs={claimBreadcrumbs}>Create New Patients</PageTitle>
              <MakeClaim />
            </>
          }
        />
        <Route index element={<Navigate to="/claim/view" />} />
        
      </Route>
    </Routes>
  );
};

export { ClaimPage };
