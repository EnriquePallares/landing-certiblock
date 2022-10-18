import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../Navbar';
export interface LayoutInterface {}

const Layout : React.FC<LayoutInterface> = () => {
	return <>
		<Navbar />
		<Outlet />
	</>;
};

export default Layout;
