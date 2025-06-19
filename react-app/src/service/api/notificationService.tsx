import api from "./axiosConfig";
import { UsuarioDTO } from "./userService";


export interface NotificacionDTO {
    notificationId: number;
    description: string;
    date: string;
    read: number;
    userId: number;
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

// Función para manejar errores
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

export const NotificacionService = {
    getAllNotifications: async (): Promise<NotificacionDTO[]> => {
        try {
            const response = await api.get("/notifications");
            return response.data;
        } catch (error) {
            handleApiError(error);
        }
    },

    getNotificationById: async (notificationId: number): Promise<NotificacionDTO | null> => {
        try {
            const response = await api.get(`/notifications/${notificationId}`);
            return response.data;
        } catch (error) {
            if (isApiError(error) && error.response?.status === 404) {
                return null;
            }
            handleApiError(error);
        }
    },

    getNotificationsByUserId: async (userId: number): Promise<NotificacionDTO[]> => {
        try {
            const response = await api.get(`/notifications/user/${userId}`);
            return response.data;
        } catch (error) {
            handleApiError(error);
        }
    },

    createNotification: async (notificationData: NotificacionDTO): Promise<NotificacionDTO> => {
        try {
            const response = await api.post("/notifications", notificationData);
            return response.data;
        } catch (error) {
            handleApiError(error);
        }
    },

    updateNotification: async (notificationId: number, notificationData: NotificacionDTO): Promise<void> => {
        try {
            await api.put(`/notifications/${notificationId}`, notificationData);
        } catch (error) {
            handleApiError(error);
        }
    },

    deleteNotification: async (notificationId: number): Promise<void> => {
        try {
            await api.delete(`/notifications/${notificationId}`);
        } catch (error) {
            handleApiError(error);
        }
    },
};
