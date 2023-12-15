import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/authOperations';
import { useAuth } from 'hooks';
import Home from 'pages/HomePage';
import Login from 'pages/LoginPage';
import Phonebook from 'pages/PhonebookPage';
import Register from 'pages/RegisterPage';

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
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/phonebook" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/phonebook" component={<Login />} />
          }
        />
        <Route
          path="/phonebook"
          element={
            <PrivateRoute redirectTo="/phonebook" component={<Phonebook />} />
          }
        />
      </Route>
    </Routes>
  );
};
