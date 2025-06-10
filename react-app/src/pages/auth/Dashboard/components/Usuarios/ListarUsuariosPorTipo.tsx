import React, { useState, useEffect } from "react";
import {
  UserService,
  UsuarioDTO,
} from "../../../../../service/api/userService";
import {
  UserTypeService,
  TipoUsuarioDTO,
} from "../../../../../service/api/userTypeService";

interface ListarUsuariosPorTipoProps {
  tipoSeleccionado?: number;
}

const ListarUsuariosPorTipo: React.FC<ListarUsuariosPorTipoProps> = ({
  tipoSeleccionado,
}) => {
  const [usuarios, setUsuarios] = useState<UsuarioDTO[]>([]);
  const [tiposUsuario, setTiposUsuario] = useState<TipoUsuarioDTO[]>([]);
  const [tipoActual, setTipoActual] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTipos = async () => {
      try {
        const tipos = await UserTypeService.getAllUserType();
        const tiposArray = Array.isArray(tipos) ? tipos : [tipos];
        setTiposUsuario(tiposArray);

        if (tipoActual === null && tiposArray.length > 0) {
          const tipoInicial = tipoSeleccionado || tiposArray[0].userTypeId;
          setTipoActual(tipoInicial);
        }
      } catch (error) {
        setError("Error al obtener tipos de usuario");
        console.error(error);
      }
    };

    fetchTipos();
  }, []);

  useEffect(() => {
    const fetchUsuarios = async () => {
      if (!tipoActual) return;

      try {
        setLoading(true);
        const usuariosPorTipo = await UserService.getUsersByType(tipoActual);
        setUsuarios(usuariosPorTipo);
      } catch (error) {
        setError("Error al obtener usuarios");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsuarios();
  }, [tipoActual]);

  const handleChangeTipo = (tipoId: number) => {
    setTipoActual(tipoId);
  };

  if (loading) {
    return <div className="p-4">Cargando datos...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">{error}</div>;
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Seleccionar Tipo de Usuario:
        </label>
        <select
          value={tipoActual || ""}
          onChange={(e) => handleChangeTipo(Number(e.target.value))}
          className="border border-gray-300 rounded-md px-3 py-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {tiposUsuario.map((tipo) => (
            <option key={tipo.userTypeId} value={tipo.userTypeId}>
              {tipo.description}
            </option>
          ))}
        </select>
      </div>

      {tipoActual && (
        <>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Usuarios de tipo:{" "}
            {tiposUsuario.find((t) => t.userTypeId === tipoActual)
              ?.description || tipoActual}
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold">
                    Nombre
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">
                    Apellido
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">
                    Correo
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {usuarios.length > 0 ? (
                  usuarios.map((usuario) => (
                    <tr
                      key={usuario.userId}
                      className="border-b hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4">{usuario.name}</td>
                      <td className="px-6 py-4">{usuario.person?.lastname}</td>
                      <td className="px-6 py-4">{usuario.person?.mail}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={3}
                      className="px-6 py-4 text-center text-gray-500"
                    >
                      No hay usuarios de este tipo
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

export default ListarUsuariosPorTipo;
