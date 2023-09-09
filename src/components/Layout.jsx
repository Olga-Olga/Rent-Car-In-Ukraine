import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Navbar } from './Navbar';

export const Layout = () => {
  return (
    <LayoutWrapper>
      <Navbar />
      <Suspense>
        <Outlet />
      </Suspense>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;
`;
