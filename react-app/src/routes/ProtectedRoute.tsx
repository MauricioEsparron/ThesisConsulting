import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getAuthToken, getUserRol } from "../auth/AuthStorage";

interface ProtectedRouteProps {
  children: JSX.Element;
  allowedRoles?: string[];
}

export const ProtectedRoute = ({
  children,
  allowedRoles,
}: ProtectedRouteProps) => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    rol: null as string | null,
    isLoading: true,
  });

  useEffect(() => {
    const checkAuth = () => {
      const token = getAuthToken();
      const rol = getUserRol();

      setAuthState({
        isAuthenticated: !!token,
        rol,
        isLoading: false,
      });
    };

    checkAuth();
  }, []);

  if (authState.isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!authState.isAuthenticated) {
    return <Navigate to="/auth/Login" replace />;
  }

  if (allowedRoles && authState.rol && !allowedRoles.includes(authState.rol)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};
