// src/auth/AuthStorage.ts

export const saveAuthData = (data: {
  token: string;
  username: string;
  nombre: string;
  rol: string;
}) => {
  sessionStorage.setItem("token", data.token); // Cambiado a sessionStorage
  sessionStorage.setItem("username", data.username);
  sessionStorage.setItem("nombre", data.nombre);
  sessionStorage.setItem("rol", data.rol);
};

export const getAuthToken = () => sessionStorage.getItem("token"); // Cambiado a sessionStorage

export const getUserRol = (): string | null => {
  return sessionStorage.getItem("rol"); // Cambiado a sessionStorage
};

export const clearAuthData = () => {
  sessionStorage.removeItem("token"); // Cambiado a sessionStorage
  sessionStorage.removeItem("username");
  sessionStorage.removeItem("nombre");
  sessionStorage.removeItem("rol");
};
