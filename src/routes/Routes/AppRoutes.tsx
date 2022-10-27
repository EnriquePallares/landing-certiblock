import { Layout } from '@/components';
import { AboutUs } from '@/pages/AboutUs';
import { Home } from '@/pages/Home';
import { Login } from '@/pages/Login';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
export interface AppRoutesInterface {}

const AppRoutes: React.FC<AppRoutesInterface> = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route element={<Layout imagelessFooter={true} />}>
        <Route path="/login" element={<Login />} />
      </Route>
      <Route element={<Layout />}>
        <Route path="/about-us" element={<AboutUs />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
