import { getAuthToken, getUserRol } from "../auth/AuthStorage";

export const useAuth = () => {
  const token = getAuthToken();
  const rol = getUserRol();

  return {
    isAuthenticated: !!token,
    rol,
  };
};
