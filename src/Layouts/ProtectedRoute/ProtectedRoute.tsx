import useAuth from "@src/Hooks/useAuth";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({
  redirectPath = "/",
  children,
}: {
  redirectPath?: string;
  children?: React.ReactNode;
}) => {
  const { auth } = useAuth();
  if (!!!auth) {
    return <Navigate to={redirectPath} replace />;
  }

  return <>{children ? children : <Outlet />}</>;
};

export default ProtectedRoute;
