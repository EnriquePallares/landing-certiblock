import { Layout } from "@/components";
import { Home } from "@/pages/Home";
import React from "react";
import { Route, Routes } from "react-router-dom";
export interface AppRoutesInterface {}

const AppRoutes: React.FC<AppRoutesInterface> = () => {
  return (
    <Routes>
      <Route element={<Layout/>} >
        <Route path="/" element={<Home/>} />
      </Route>
      <Route path="/login" element={<></>} />
    </Routes>
  );
};

export default AppRoutes;
