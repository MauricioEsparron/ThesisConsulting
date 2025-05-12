// auth/AuthHook.ts
import { useEffect, useState } from "react";
import { getAuthToken, getUserRol, clearAuthData } from "../auth/AuthStorage";

export const useAuth = () => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    rol: null as string | null,
  });

  const setAuthData = (token: string, rol: string) => {
    setAuthState({
      isAuthenticated: !!token,
      rol,
    });
  };

  const clearAuth = () => {
    clearAuthData();
    setAuthState({
      isAuthenticated: false,
      rol: null,
    });
  };

  // Verificar al montar
  useEffect(() => {
    const token = getAuthToken();
    const rol = getUserRol();
    setAuthData(token || "", rol || "");
  }, []);

  return {
    ...authState,
    setAuthData,
    clearAuth,
  };
};
