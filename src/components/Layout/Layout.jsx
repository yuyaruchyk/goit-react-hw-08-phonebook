import { Outlet } from 'react-router-dom';

import { Suspense } from 'react';
import Header from 'components/Header/Header';
import { Container } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Layout;
