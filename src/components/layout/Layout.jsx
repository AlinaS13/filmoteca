import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigaion } from 'components/navigation';
import { Container } from 'pages/home/Home.styled';

export default function Layout() {
  return (
    <>
      <Navigaion />
      <Container>
        <Suspense fallback={<h1>Loading</h1>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
}
