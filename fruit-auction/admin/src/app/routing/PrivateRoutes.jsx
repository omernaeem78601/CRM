import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { MasterLayout } from '../../_metronic/layout/MasterLayout';
import TopBarProgress from 'react-topbar-progress-indicator';
import { DashboardWrapper } from '../pages/dashboard/DashboardWrapper';
import { MenuTestPage } from '../pages/MenuTestPage';
import { getCSSVariableValue } from '../../_metronic/assets/ts/_utils';
import { WithChildren } from '../../_metronic/helpers';
import { ProfilePage } from '../modules/auth/profile/ProfilePage';
import { ClaimPage } from '../modules/claim/ClaimPage';
import UsersPage from '../modules/all-userManagement/UsersPage';

const PrivateRoutes = () => {
  const OrganizationPage = lazy(() => import('../modules/organization/OrganizationPage'));
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'));
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'));
  const UserManagmentPage = lazy(() => import('../modules/userManagement/UserManagmentPage'));
  const ProviderPage = lazy(() => import('../modules/providers/ProviderPage'));
  const PatientsPage = lazy(() => import('../modules/patients/PatientsPage'));
  const TasksPage = lazy(() => import('../modules/tasks/TasksPage'));

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after successful login/registration */}
        <Route path='login/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        <Route path='dashboard' element={<DashboardWrapper />} />
        <Route path='menu-test' element={<MenuTestPage />} />
        {/* Lazy Modules */}
        <Route
          path='/patient/*'
          element={
            <SuspensedView>
              <PatientsPage /> 
            </SuspensedView>
          }
        />
        <Route
          path='/user/*'
          element={
            <SuspensedView>
              <UsersPage /> 
            </SuspensedView>
          }
        />
        <Route
          path='/tasks/*'
          element={
            <SuspensedView>
              <TasksPage />
            </SuspensedView>
          }
        />
        <Route
          path='/claim/*'
          element={
            <SuspensedView>
              <ClaimPage />
            </SuspensedView>
          }
        />
        <Route
          path='/providers/*'
          element={
            <SuspensedView>
              <ProviderPage />
            </SuspensedView>
          }
        />
        <Route
          path='/organization/*'
          element={
            <SuspensedView>
              <OrganizationPage />
            </SuspensedView>
          }
        />
        <Route
          path='user/profile/*'
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/account/*'
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/chat/*'
          element={
            <SuspensedView>
              <ChatPage />
            </SuspensedView>
          }
        />
        <Route
          path='user-management/*'
          element={
            <SuspensedView>
              <UserManagmentPage />
            </SuspensedView>
          }
        />
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  );
};

const SuspensedView = ({ children }) => {
  const baseColor = getCSSVariableValue('--bs-primary');
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  });
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>;
};

export { PrivateRoutes };