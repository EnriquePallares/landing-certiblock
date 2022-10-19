import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
export interface LayoutInterface {}

const Layout: React.FC<LayoutInterface> = () => {
  return (
    <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#04113D] to-[#051755]">
      <div className="text-white h-screen ">
        <Navbar />
        <div className="container mx-auto">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
