import api from "./axiosConfig";  
import { UsuarioDTO } from "./userService"; 

export interface AvanceTesisDTO {
  advanceId: number;
  studentId: number;
  title: string;
  description: string;
  fileUrl: string;
  idEstadoAvanceTesis: number;
  uploadDate: string;
  stateProgressThesis: EstadoAvanceTesisDTO;
  student: UsuarioDTO;
}

export interface EstadoAvanceTesisDTO {
  id: number;
  name: string;
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

export const ThesisAdvanceService = {
  getAllAdvances: async (): Promise<AvanceTesisDTO[]> => {
    try {
      const response = await api.get("/thesis-advances");
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  },

  getAdvanceById: async (advanceId: number): Promise<AvanceTesisDTO | null> => {
    try {
      const response = await api.get(`/thesis-advances/${advanceId}`);
      return response.data;
    } catch (error) {
      if (isApiError(error) && error.response?.status === 404) {
        return null;
      }
      handleApiError(error);
    }
  },

  getAdvancesByStudentId: async (studentId: number): Promise<AvanceTesisDTO[]> => {
    try {
      const response = await api.get(`/thesis-advances/student/${studentId}`);
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  },

  getAdvancesByStatus: async (state: number): Promise<AvanceTesisDTO[]> => {
    try {
      const response = await api.get(`/thesis-advances/state?value=${state}`);
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  },

  getAdvancesByTitle: async (title: string): Promise<AvanceTesisDTO[]> => {
    try {
      const response = await api.get(`/thesis-advances/title?title=${title}`);
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  },

  createAdvance: async (advance: AvanceTesisDTO): Promise<AvanceTesisDTO> => {
    try {
      const response = await api.post("/thesis-advances/create", advance);
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  },

  updateAdvance: async (advanceId: number, advance: AvanceTesisDTO): Promise<void> => {
    try {
      await api.put(`/thesis-advances/${advanceId}`, advance);
    } catch (error) {
      handleApiError(error);
    }
  },

  deleteAdvance: async (advanceId: number): Promise<void> => {
    try {
      await api.delete(`/thesis-advances/${advanceId}`);
    } catch (error) {
      handleApiError(error);
    }
  },
};
