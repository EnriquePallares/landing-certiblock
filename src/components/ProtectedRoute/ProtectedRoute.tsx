import {
  AppContextValue,
  AuthContext,
} from '@/context/AuthContextProvider/AuthContextProvider';
import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
export interface ProtectedRouteInterface {}

const ProtectedRoute: React.FC<ProtectedRouteInterface> = () => {
  const [user] = useContext<any>(AuthContext);

  return user ? <Outlet /> : <Navigate to={'/login'} />;
};

export default ProtectedRoute;
