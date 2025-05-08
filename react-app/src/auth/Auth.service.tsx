// src/auth/Auth.service.ts

import { login as loginAPI } from "../service/api/authService";
import { saveAuthData, clearAuthData } from "./AuthStorage";
import { RoleMap } from "../constants/RoleMap";

const normalizeRole = (role: string): string => {
  // Reemplaza espacios por guiones bajos y quita acentos si es necesario
  return role.replace(/\s+/g, "_").toUpperCase();
};

export const login = async (username: string, password: string) => {
  const data = await loginAPI(username, password);

  const normalizedRoleKey = normalizeRole(data.rol);
  const readableRole = RoleMap[normalizedRoleKey] ?? data.rol;

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
