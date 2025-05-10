import api from "./axiosConfig";

export interface UsuarioDTO {
  userId: number;
  username: string;
  password?: string;
  personId: number;
  userTypeId: number;
  active: number;
  name: string;
  person: {
    personId: number;
    name: string;
    lastname: string;
    phone: string;
    age: number;
    dni: string;
    mail: string;
    address: string;
    state: number;
  };
  userType: {
    userType: number;
    description: string;
  };
}

// Tipo personalizado para errores de API
interface ApiError {
  response?: {
    status?: number;
    data?: {
      message?: string;
    };
  };
  message?: string;
}

// Type Guard para verificar si es un ApiError
function isApiError(error: unknown): error is ApiError {
  return (
    typeof error === "object" &&
    error !== null &&
    ("response" in error || "message" in error)
  );
}

// Función para manejar errores de forma consistente
// Función para manejar errores de forma consistente
function handleApiError(error: unknown): never {
  if (isApiError(error)) {
    const message =
      error.response?.data?.message || error.message || "Error desconocido";

    // Aquí puedes diferenciar entre el tipo de error
    if (error.response?.status === 400) {
      throw new Error("Petición incorrecta: " + message);
    }
    if (error.response?.status === 404) {
      throw new Error("No encontrado: " + message);
    }
    if (error.response?.status === 500) {
      throw new Error("Error del servidor: " + message);
    }

    throw new Error(message);
  }
  throw new Error("Error desconocido de tipo inesperado");
}

export const UserService = {
  /**
   * Obtiene todos los usuarios
   */
  getAllUsers: async (): Promise<UsuarioDTO[]> => {
    try {
      const response = await api.get("/users");
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  },

  /**
   * Obtiene un usuario por ID
   */
  getUserById: async (userId: number): Promise<UsuarioDTO | null> => {
    try {
      const response = await api.get(`/users/${userId}`);
      return response.data;
    } catch (error) {
      if (isApiError(error) && error.response?.status === 404) {
        return null;
      }
      handleApiError(error);
    }
  },

  /**
   * Obtiene usuarios por estado
   */
  getUsersByState: async (estado: number): Promise<UsuarioDTO[]> => {
    try {
      const response = await api.get(`/users/state/${estado}`);
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  },

  /**
   * Obtiene usuarios por tipo
   */
  getUsersByType: async (userType: number): Promise<UsuarioDTO[]> => {
    try {
      const response = await api.get(`/users/type/${userType}`);
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  },

  /**
   * Crea un nuevo usuario
   */
  createUser: async (userData: UsuarioDTO): Promise<UsuarioDTO> => {
    try {
      const response = await api.post("/users", userData);
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  },

  /**
   * Actualiza un usuario existente
   */
  updateUser: async (id: number, userData: UsuarioDTO): Promise<void> => {
    try {
      await api.put(`/users/${id}`, userData);
    } catch (error) {
      handleApiError(error);
    }
  },

  /**
   * Elimina un usuario
   */
  deleteUser: async (userId: number): Promise<void> => {
    try {
      await api.delete(`/users/${userId}`);
    } catch (error) {
      handleApiError(error);
    }
  },
};
