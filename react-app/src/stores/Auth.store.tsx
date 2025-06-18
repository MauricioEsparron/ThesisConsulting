import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

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
    sessionStorage.getItem("token")
  );
  const [rol, setRol] = useState<string | null>(sessionStorage.getItem("rol"));

  useEffect(() => {
    // Actualiza el token y el rol desde sessionStorage cuando el componente se monta
    const userToken = sessionStorage.getItem("token");
    const userRol = sessionStorage.getItem("rol");
    setToken(userToken);
    setRol(userRol);
  }, []);

  const logout = () => {
    setToken(null);
    setRol(null);
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("rol");
  };

  return (
    <AuthContext.Provider
      value={{ token, setToken, isAuthenticated: !!token, logout, rol, setRol }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
