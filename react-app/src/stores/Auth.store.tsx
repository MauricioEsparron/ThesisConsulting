// src/stores/Auth.store.tsx
import { createContext, useContext, useState, ReactNode } from "react";

type AuthContextType = {
  token: string | null;
  setToken: (token: string | null) => void;
  isAuthenticated: boolean;
  logout: () => void;
  rol: string | null;
  setRol: (rol: string | null) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );
  const [rol, setRol] = useState<string | null>(localStorage.getItem("rol"));

  const logout = () => {
    setToken(null);
    setRol(null);
    localStorage.removeItem("token");
    localStorage.removeItem("rol");
  };

  return (
    <AuthContext.Provider
      value={{ token, setToken, isAuthenticated: !!token, logout, rol, setRol }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext)!;
