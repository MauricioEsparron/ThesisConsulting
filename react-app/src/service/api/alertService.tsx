import api from "./axiosConfig";
import { UsuarioDTO } from "./userService";

// Interface
export interface AlertDto {
    alertId: number;
    description: string;
    date: string; // ISO format string
    subscription: number;
    userId: number;
    user: UsuarioDTO;
}

// Error Handling
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
// Métodos
export async function getAlerts(): Promise<AlertDto[]> {
    try {
        const response = await api.get<AlertDto[]>("/alerts");
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
}

export async function getAlertById(id: number): Promise<AlertDto> {
    try {
        const response = await api.get<AlertDto>(`/alerts/${id}`);
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
}

export async function createAlert(data: AlertDto): Promise<AlertDto> {
    try {
        const response = await api.post<AlertDto>("/alerts", data);
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
}

export async function updateAlert(id: number, data: AlertDto): Promise<AlertDto> {
    try {
        const response = await api.put<AlertDto>(`/alerts/${id}`, data);
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
}

export async function deleteAlert(id: number): Promise<boolean> {
    try {
        await api.delete(`/alerts/${id}`);
        return true;
    } catch (error) {
        if (isApiError(error) && error.response?.status === 404) {
            return false;
        }
        handleApiError(error);
    }
}

export async function getAlertsByUserId(userId: number): Promise<AlertDto[]> {
    try {
        const response = await api.get<AlertDto[]>(`/alerts/user/${userId}`);
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
}

export async function getAlertsByDateRange(start: string, end: string): Promise<AlertDto[]> {
    try {
        const response = await api.get<AlertDto[]>("/alerts/date-range", {
            params: {
                start,
                end,
            },
        });
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
}
