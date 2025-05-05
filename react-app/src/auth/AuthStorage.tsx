// src/auth/AuthStorage.ts

export const saveAuthData = (data: {
  token: string;
  username: string;
  nombre: string;
  rol: string;
}) => {
  localStorage.setItem("token", data.token);
  localStorage.setItem("username", data.username);
  localStorage.setItem("nombre", data.nombre);
  localStorage.setItem("rol", data.rol);
};

export const getAuthToken = () => localStorage.getItem("token");

export const getUserRol = (): string | null => {
  return localStorage.getItem("rol");
};

export const clearAuthData = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  localStorage.removeItem("nombre");
  localStorage.removeItem("rol");
};
