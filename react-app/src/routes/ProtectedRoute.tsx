import { Navigate } from "react-router-dom";
import { useAuth } from "../stores/Auth.store";

interface ProtectedRouteProps {
  children: JSX.Element;
  allowedRoles?: string[];
}

export const ProtectedRoute = ({
  children,
  allowedRoles,
}: ProtectedRouteProps) => {
  const { isAuthenticated, rol } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/auth/Login" />;
  }

  if (allowedRoles && !allowedRoles.includes(rol || "")) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};
