import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';

import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/authOperations';
import { useAuth } from 'hooks';

const HomePage = lazy(() => import('pages/Home'));

const LoginPage = lazy(() => import('pages/Login'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const PhonebookPage = lazy(() => import('pages/Phonebook'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/phonebook"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute
              redirectTo="/phonebook"
              component={<LoginPage />}
            />
          }
        />
        <Route
          path="/phonebook"
          element={
            <PrivateRoute
              redirectTo="/phonebook"
              component={<PhonebookPage />}
            />
          }
        />
      </Route>
    </Routes>
  );
};
