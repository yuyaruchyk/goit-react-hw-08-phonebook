import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from '../Header/Header';
import { Container } from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <nav>
        <Header />
      </nav>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default Layout;
