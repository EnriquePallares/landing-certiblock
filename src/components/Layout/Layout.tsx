import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import FooterImageless from '../FooterImageless/FooterImageless';
import Header from '../Header/Header';
export interface LayoutInterface {
  imagelessFooter?: boolean;
}

const Layout = (props: LayoutInterface) => {
  return (
    <div className="layout text-white">
      <Header />
      <Outlet />
      {!props.imagelessFooter ? <Footer /> : <FooterImageless />}
    </div>
  );
};

export default Layout;
