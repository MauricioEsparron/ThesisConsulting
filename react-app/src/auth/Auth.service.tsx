import { login as loginAPI } from "../service/api/authService";
import { saveAuthData, clearAuthData, getAuthToken } from "./AuthStorage";
import { RoleMap } from "../constants/RoleMap";

const normalizeRole = (role: string): string => {
  const normalizedRole = role.replace(/\s+/g, "_").toUpperCase();
  // console.log("Normalized role:", normalizedRole);
  return normalizedRole;
};

export const login = async (username: string, password: string) => {
  const data = await loginAPI(username, password);

  const normalizedRoleKey = normalizeRole(data.rol);
  const readableRole = RoleMap[normalizedRoleKey] ?? data.rol;

  //sole.log("Readable role:", readableRole); //

  saveAuthData({
    token: data.token,
    username,
    nombre: data.nombre,
    rol: readableRole,
  });

  return {
    ...data,
    rol: readableRole,
  };
};

export const logout = () => {
  clearAuthData();
  window.location.href = "/login";
};

// Nueva función para verificar sesión al cargar
export const checkSession = (): boolean => {
  return !!getAuthToken();
};
