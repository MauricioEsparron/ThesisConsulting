// src/auth/AuthStorage.ts

export const saveAuthData = (data: {
  token: string;
  username: string;
  nombre: string;
}) => {
  localStorage.setItem("token", data.token);
  localStorage.setItem("username", data.username);
  localStorage.setItem("nombre", data.nombre);
};

export const getAuthToken = () => localStorage.getItem("token");

export const clearAuthData = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  localStorage.removeItem("nombre");
};
