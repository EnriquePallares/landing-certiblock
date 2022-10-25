import { Layout } from "@/components";
import { Home } from "@/pages/Home";
import { Login } from "@/pages/Login";
import React from "react";
import { Route, Routes } from "react-router-dom";
export interface AppRoutesInterface {}

const AppRoutes: React.FC<AppRoutesInterface> = () => {
  return (
    <Routes>
      <Route element={<Layout/>} >
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
      </Route>
      <Route path="/login" element={<></>} />
    </Routes>
  );
};

export default AppRoutes;
