import axios from "axios";

// Crear instancia de Axios
const api = axios.create({
  baseURL: "http://localhost:8080/dashboard/api/v1", // Ajusta si usas otra ruta base
  headers: {
    "Content-Type": "application/json",
  },
});

// Agregar token automáticamente en cada solicitud
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Manejo de errores (opcional pero recomendable)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn("Sesión expirada o token inválido");
      // Puedes redirigir al login o mostrar mensaje
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default api;
