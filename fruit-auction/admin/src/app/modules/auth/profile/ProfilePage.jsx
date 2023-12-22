import { Navigate, Route, Routes, Outlet } from 'react-router-dom';
import { PageTitle } from '../../../../_metronic/layout/core';
import { UpdateProfile } from './UpdateProfile';

const ProfilePage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='/:id'
          element={
            <>
              <PageTitle>My Profile</PageTitle>
              <UpdateProfile />
            </>
          }
        />
        <Route index element={<Navigate to='/user/profile' />} />
      </Route>
    </Routes>
  );
};

export { ProfilePage };
