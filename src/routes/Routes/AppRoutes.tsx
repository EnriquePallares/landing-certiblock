import { Layout } from "@/components";
import { Home } from "@/pages/Home";
import { Login } from "@/pages/Login";
import { Register } from "@/pages/Register";
import React from "react";
import { Route, Routes } from "react-router-dom";
export interface AppRoutesInterface {}

const AppRoutes = (props: AppRoutesInterface) => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route element={<Layout imagelessFooter={true}/>} >
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
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
