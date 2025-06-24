import api from "./axiosConfig";

export interface PersonaDTO {
  personId: number;
  name: String;
  lastname: String;
  phone: String;
  age: number;
  dni: String;
  mail: String;
  address: String;
  state: number;
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

export const PersonService = {
  getAllPersons: async (): Promise<PersonaDTO[]> => {
    try {
      const response = await api.get("/persons");
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  },

  getPersonById: async (personId: number): Promise<PersonaDTO | null> => {
    try {
      const response = await api.get(`/persons/${personId}`);
      return response.data;
    } catch (error) {
      if (isApiError(error) && error.response?.status === 404) {
        return null;
      }
      handleApiError(error);
    }
  },

  getPersonByAge: async (age: number): Promise<PersonaDTO | null> => {
    try {
      const response = await api.get(`/persons/${age}`);
      return response.data;
    } catch (error) {
      if (isApiError(error) && error.response?.status === 404) {
        return null;
      }
      handleApiError(error);
    }
  },

  getPersonByAddress: async (address: string): Promise<PersonaDTO | null> => {
    try {
      const response = await api.get(`/persons/${address}`);
      return response.data;
    } catch (error) {
      if (isApiError(error) && error.response?.status === 404) {
        return null;
      }
      handleApiError(error);
    }
  },

  getUsersByState: async (state: number): Promise<PersonaDTO[]> => {
    try {
      const response = await api.get(`/persons/state/${state}`);
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  },

  createPerson: async (personData: PersonaDTO): Promise<PersonaDTO> => {
    try {
      const response = await api.post("/persons", personData);
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  },

  updatePerson: async (id: number, personData: PersonaDTO): Promise<void> => {
    try {
      await api.put(`/persons/${id}`, personData);
    } catch (error) {
      handleApiError(error);
    }
  },

  deletePerson: async (personId: number): Promise<void> => {
    try {
      await api.delete(`/persons/${personId}`);
    } catch (error) {
      handleApiError(error);
    }
  },
};
