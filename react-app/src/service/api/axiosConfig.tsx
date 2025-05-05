import axios from "axios";

// Crear instancia de Axios
const api = axios.create({
  baseURL: "http://localhost:8080/dashboard/api/v1",
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
    // Manejo de error 401 (Token inválido o sesión expirada)
    if (error.response?.status === 401) {
      console.warn("Sesión expirada o token inválido");
      alert("Tu token es inválido o las credenciales son incorrectas.");
      // window.location.href = "/auth/login"; (para redirigir)
    }

    // Manejo de errores de red (por ejemplo, si la API no responde o está caída)
    else if (error.request) {
      console.error("Error de red o servidor no accesible", error.request);
      alert(
        "No se pudo conectar con el servidor. Intenta nuevamente más tarde."
      );
    }

    // Manejo de otros tipos de error (como un timeout o error general)
    else {
      console.error("Error desconocido", error.message);
      alert("Ocurrió un error inesperado. Intenta nuevamente.");
    }

    return Promise.reject(error); // Propaga el error para que pueda ser manejado donde se llama
  }
);

export default api;
