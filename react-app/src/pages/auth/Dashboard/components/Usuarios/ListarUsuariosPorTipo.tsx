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
  tipoSeleccionado?: number; // Si se quiere usar externamente
}

const ListarUsuariosPorTipo: React.FC<ListarUsuariosPorTipoProps> = ({
  tipoSeleccionado,
}) => {
  const [usuarios, setUsuarios] = useState<UsuarioDTO[]>([]);
  const [tiposUsuario, setTiposUsuario] = useState<TipoUsuarioDTO[]>([]);
  const [tipoActual, setTipoActual] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Cargar tipos de usuario al inicio
  useEffect(() => {
    const fetchTipos = async () => {
      try {
        const tipos = await UserTypeService.getAllUserType();
        const tiposArray = Array.isArray(tipos) ? tipos : [tipos];
        setTiposUsuario(tiposArray);

        // Establecer tipoActual solo si aún no hay uno
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
  }, []); // Solo una vez al montar

  // Cargar usuarios cada vez que cambia el tipo seleccionado
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

  // Cambio manual desde el select
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
    <div className="p-4">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Seleccionar Tipo de Usuario:
        </label>
        <select
          value={tipoActual || ""}
          onChange={(e) => handleChangeTipo(Number(e.target.value))}
          className="border rounded p-2"
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
          <h2 className="text-xl font-bold mb-4">
            Usuarios de tipo:{" "}
            {tiposUsuario.find((t) => t.userTypeId === tipoActual)
              ?.description || tipoActual}
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full border">
              <thead className="bg-gray-100">
                <tr>
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
                      <td className="p-2">{usuario.name}</td>
                      <td className="p-2">{usuario.person?.lastname}</td>
                      <td className="p-2">{usuario.person?.mail}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3} className="p-2 text-center">
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
