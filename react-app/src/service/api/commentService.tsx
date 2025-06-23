import api from "./axiosConfig";
import { UsuarioDTO } from "./userService";

export interface CommentDTO {
  commentId: number;
  description: string;
  date: string;
  userId: number;
  advanceId: number;
  state: number;
  user: UsuarioDTO;
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
    const status = error.response?.status;
    const message =
      error.response?.data?.message || error.message || "Error desconocido";

    switch (status) {
      case 400:
        throw new Error("Petición incorrecta: " + message);
      case 404:
        throw new Error("No encontrado: " + message);
      case 500:
        throw new Error("Error del servidor: " + message);
      default:
        throw new Error(message);
    }
  }
  throw new Error("Error desconocido de tipo inesperado");
}

export async function getAllComments(): Promise<CommentDTO[]> {
  try {
    const response = await api.get<CommentDTO[]>("/comments");
    return response.data ?? [];
  } catch (error) {
    handleApiError(error);
  }
}

export async function getCommentById(id: number): Promise<CommentDTO | null> {
  try {
    const response = await api.get<CommentDTO>(`/comments/${id}`);
    return response.data;
  } catch (error) {
    if (isApiError(error) && error.response?.status === 404) {
      return null;
    }
    handleApiError(error);
  }
}

export async function getCommentsByUser(userId: number): Promise<CommentDTO[]> {
  try {
    const response = await api.get<CommentDTO[]>(`/comments/user/${userId}`);
    return response.data ?? [];
  } catch (error) {
    handleApiError(error);
  }
}

export async function getCommentsByAdvance(advanceId: number): Promise<CommentDTO[]> {
  try {
    const response = await api.get<CommentDTO[]>(`/comments/advance/${advanceId}`);
    return response.data ?? [];
  } catch (error) {
    handleApiError(error);
  }
}

export async function getCommentsByState(state: number): Promise<CommentDTO[]> {
  try {
    const response = await api.get<CommentDTO[]>(`/comments/state`, {
      params: { value: state },
    });
    return response.data ?? [];
  } catch (error) {
    handleApiError(error);
  }
}

export async function createComment(data: CommentDTO): Promise<CommentDTO> {
  try {
    const response = await api.post<CommentDTO>("/comments", data);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
}


export async function updateComment(id: number, data: CommentDTO): Promise<CommentDTO | null> {
  try {
    const response = await api.put<CommentDTO>(`/comments/${id}`, data);
    return response.data;
  } catch (error) {
    if (isApiError(error) && error.response?.status === 404) {
      return null;
    }
    handleApiError(error);
  }
}


export async function deleteComment(id: number): Promise<boolean> {
  try {
    await api.delete(`/comments/${id}`);
    return true;
  } catch (error) {
    if (isApiError(error) && error.response?.status === 404) {
      return false;
    }
    handleApiError(error);
  }
}
