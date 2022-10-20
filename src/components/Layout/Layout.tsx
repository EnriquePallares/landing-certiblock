import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
export interface LayoutInterface {}

const Layout: React.FC<LayoutInterface> = () => {
  return (
    <div className="text-white">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
