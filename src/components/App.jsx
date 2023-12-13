import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout/Layout';

const Home = lazy(() => import('pages/Home'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));
const LogIn = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));
const Contacts = lazy(() => import('pages/Contacts'));

export const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contacts" element={<Contacts />} />{' '}
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  );
};
export default App;
