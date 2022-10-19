import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
export interface LayoutInterface {}

const Layout : React.FC<LayoutInterface> = () => {
	return <>
		<Navbar />
		<Outlet />
	</>;
};

export default Layout;