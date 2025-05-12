import api from "./axiosConfig";

export interface TipoUsuarioDTO {
  userTypeId: number;
  description: String;
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

export const UserTypeService = {
  getAllUserType: async (): Promise<TipoUsuarioDTO> => {
    try {
      const respone = await api.get("type-user");
      return respone.data;
    } catch (error) {
      handleApiError(error);
    }
  },
};
