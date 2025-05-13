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

interface ApiError {
  response?: {
    status?: number;
    data?: {
      message?: string;
    };
  };
  message?: string;
}

function isApiError(error: unknown): error is ApiError {
  return (
    typeof error === "object" &&
    error !== null &&
    ("response" in error || "message" in error)
  );
}

function handleApiError(error: unknown): never {
  if (isApiError(error)) {
    const message =
      error.response?.data?.message || error.message || "Error desconocido";

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

export const UserIdService = {
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
};
