import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { PrivateRoutes } from './PrivateRoutes';
import { ErrorsPage } from '../modules/errors/ErrorsPage';
import { AuthPage } from '../modules/auth';
import { App } from '../App';
import { useSelector } from 'react-redux';

/**
 * Base URL of the website.
 *
 * @see https://facebook.github.io/create-react-app/docs/using-the-public-folder
 */
const { PUBLIC_URL } = process.env;

const AppRoutes = () => {
  const currentUser = localStorage.getItem("token");
  const logout = useSelector((state) => state.logoutReducer);
  return (
    <BrowserRouter basename={PUBLIC_URL}>
      <Routes>
        <Route element={<App />}>
          <Route path='error/*' element={<ErrorsPage />} />
          {logout ? (
            <>
              <Route path='*' element={<PrivateRoutes />} />
              <Route index element={<Navigate to='/dashboard' />} />

            </>
          ) : ( 
            <>
              <Route path='login/*' element={<AuthPage />} />
              <Route path='*' element={<Navigate to='login/' />} />
            </>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
