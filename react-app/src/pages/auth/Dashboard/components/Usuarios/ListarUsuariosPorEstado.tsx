import { useEffect, useState } from "react";
import {
  UserService,
  UsuarioDTO,
} from "../../../../../service/api/userService";
import {
  UserStateService,
  EstadoUsuarioDTO,
} from "../../../../../service/api/userStateService";

interface ListarUsuariosPorEstadoProps {
  estadoSeleccionado?: number;
}

const ListarUsuariosPorEstado: React.FC<ListarUsuariosPorEstadoProps> = ({
  estadoSeleccionado,
}) => {
  const [usuarios, setUsuarios] = useState<UsuarioDTO[]>([]);
  const [estadosUsuario, setEstadosUsuario] = useState<EstadoUsuarioDTO[]>([]);
  const [estadoActual, setEstadoActual] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Obtener estados de usuario
        const estadosResponse = await UserStateService.getAllUserState();
        const estadosArray = Array.isArray(estadosResponse)
          ? estadosResponse
          : [estadosResponse];
        setEstadosUsuario(estadosArray);

        // Establecer estado inicial
        const estadoInicial =
          estadoSeleccionado ||
          (estadosArray.length > 0 ? estadosArray[0].userStateId : null);
        setEstadoActual(estadoInicial);
      } catch (error) {
        setError("Error al obtener estados de usuario");
        console.error("Error fetching user states:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [estadoSeleccionado]);

  useEffect(() => {
    const fetchUsuariosPorEstado = async () => {
      if (estadoActual === null) return;

      try {
        setLoading(true);
        const usuariosResponse = await UserService.getUsersByState(
          estadoActual
        );
        setUsuarios(
          Array.isArray(usuariosResponse)
            ? usuariosResponse
            : [usuariosResponse]
        );
      } catch (error) {
        setError("Error al obtener usuarios por estado");
        console.error("Error fetching users by state:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsuariosPorEstado();
  }, [estadoActual]);

  const handleChangeEstado = (estadoId: number) => {
    setEstadoActual(estadoId);
  };

  if (loading) {
    return <div className="p-4">Cargando datos...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">{error}</div>;
  }

  return (
    <div className="p-4">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Seleccionar Estado de Usuario:
        </label>
        <select
          value={estadoActual || ""}
          onChange={(e) => handleChangeEstado(Number(e.target.value))}
          className="border rounded p-2 w-full max-w-xs"
          disabled={estadosUsuario.length === 0}
        >
          {estadosUsuario.map((estado) => (
            <option key={estado.userStateId} value={estado.userStateId}>
              {estado.description}
            </option>
          ))}
        </select>
      </div>

      {estadoActual && (
        <>
          <h2 className="text-xl font-bold mb-4">
            Usuarios con estado:{" "}
            {estadosUsuario.find((e) => e.userStateId === estadoActual)
              ?.description || "Desconocido"}
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full border">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 text-left">ID</th>
                  <th className="p-2 text-left">Nombre</th>
                  <th className="p-2 text-left">Apellido</th>
                  <th className="p-2 text-left">Correo</th>
                </tr>
              </thead>
              <tbody>
                {usuarios.length > 0 ? (
                  usuarios.map((usuario) => (
                    <tr
                      key={usuario.userId}
                      className="border-b hover:bg-gray-50"
                    >
                      <td className="p-2">{usuario.userId}</td>
                      <td className="p-2">{usuario.name}</td>
                      <td className="p-2">
                        {usuario.person?.lastname || "N/A"}
                      </td>
                      <td className="p-2">{usuario.person?.mail || "N/A"}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="p-2 text-center">
                      No hay usuarios con este estado
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default ListarUsuariosPorEstado;
