export const saveAuthData = (data: {
  token: string;
  username: string;
  nombre: string;
  rol: string;
}) => {
  // console.log("Saving auth data:", data);
  sessionStorage.setItem("token", data.token);
  sessionStorage.setItem("username", data.username);
  sessionStorage.setItem("nombre", data.nombre);
  sessionStorage.setItem("rol", data.rol);
};

export const getAuthToken = () => sessionStorage.getItem("token");

export const getUserRol = (): string | null => {
  const rol = sessionStorage.getItem("rol");
  // console.log("Retrieved rol:", rol);
  return rol;
};

export const clearAuthData = () => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("username");
  sessionStorage.removeItem("nombre");
  sessionStorage.removeItem("rol");
};
