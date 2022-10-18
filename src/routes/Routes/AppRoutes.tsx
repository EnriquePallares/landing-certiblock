import { Layout } from "@/components/Layout";
import { Home } from "@/pages/Home";
import React from "react";
import { Route, Routes } from "react-router-dom";
export interface AppRoutesInterface {}

const AppRoutes: React.FC<AppRoutesInterface> = () => {
  return (
    <Routes>
      <Route element={<Layout/>} >
        <Route path="/home" element={<Home/>} />
      </Route>
      <Route path="/" element={<></>} />
    </Routes>
  );
};

export default AppRoutes;
