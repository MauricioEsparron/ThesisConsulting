import api from "./axiosConfig";

export interface CursoDTO {
  idCourse: number;
  name: string;
  description: string;
  fileName: string;
  typeMime: string;
  size: number;
  filePath: string;
  publicUrl: string;
  imageUrl: string;
  professorId: number;
  typeUserDescription: string;
  typeUserId: number;
  restrictedAcces: number;
  state: number;
  professorEmail: string;
  professorFirstName: string;
  professorLastName: string;
  professorFullName: string;
  studentCount: number;
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

export const CourseService = {
  getAllCourses: async (): Promise<CursoDTO[]> => {
    try {
      const response = await api.get("/courses");
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  },

  getCourseById: async (idCourse: number): Promise<CursoDTO | null> => {
    try {
      const response = await api.get(`/courses/${idCourse}`);
      return response.data;
    } catch (error) {
      if (isApiError(error) && error.response?.status === 404) {
        return null;
      }
      handleApiError(error);
    }
  },

  getCourseByState: async (state: number): Promise<CursoDTO[]> => {
    try {
      const response = await api.get(`/courses/state/${state}`);
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  },

  getCourseByProfessorId: async (professorId: number): Promise<CursoDTO[]> => {
    try {
      const response = await api.get(`/courses/professor/${professorId}`);
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  },

  createCourse: async (courseData: CursoDTO): Promise<CursoDTO> => {
    try {
      const response = await api.post("/courses", courseData);
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  },

  updateCourse: async (id: number, courseData: CursoDTO): Promise<void> => {
    try {
      await api.put(`/courses/${id}`, courseData);
    } catch (error) {
      handleApiError(error);
    }
  },

  deleteCourse: async (idCourse: number): Promise<void> => {
    try {
      await api.delete(`/courses/${idCourse}`);
    } catch (error) {
      handleApiError(error);
    }
  },
};
