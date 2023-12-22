import React, { useEffect } from 'react';
import { Route, Routes, Outlet, useLocation} from 'react-router-dom';
import {PageTitle } from '../../../_metronic/layout/core';
import { ProvidersList } from './ProvidersList';
import { TitleCase } from '../../utilities/Helper';
import { useDispatch } from 'react-redux';
import { providerTypeAction } from '../../redux/action';

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
];

const ProviderPage = () => {
  const location = useLocation();
  const urlPath = location.pathname === '/providers/rendering' ? 'rendering' : 'refering';
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(providerTypeAction(urlPath));
  }, [urlPath]);

  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path={urlPath}
          element={
            <>
              <PageTitle breadcrumbs={patientBreadcrumbs}>{TitleCase(urlPath) + ' Provider'}</PageTitle>
              <ProvidersList />
            </>
          }
        />
      </Route>
    </Routes>
  );
};

export default ProviderPage;
