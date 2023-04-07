import { Outlet } from 'react-router-dom';
import React from 'react';
import Navbar from './navBar';

const Root = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

export default Root;
