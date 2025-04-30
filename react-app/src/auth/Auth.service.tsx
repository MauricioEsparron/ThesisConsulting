// src/auth/Auth.service.ts

import { login as loginAPI } from "../service/api/authService";
import { saveAuthData, clearAuthData } from "./AuthStorage";

export const login = async (username: string, password: string) => {
  const data = await loginAPI(username, password);

  saveAuthData({
    token: data.token,
    username,
    nombre: data.nombre,
  });

  return data;
};

export const logout = () => {
  clearAuthData();
  window.location.href = "/login";
};
