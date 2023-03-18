import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigaion } from 'components/navigation';

export default function Layout() {
  return (
    <>
      <Navigaion />
      <Suspense fallback={<h1>Loading</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
}
