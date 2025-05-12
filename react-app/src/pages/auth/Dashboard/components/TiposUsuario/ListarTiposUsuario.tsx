import React, { useState, useEffect } from "react";
import {
  UserTypeService,
  TipoUsuarioDTO,
} from "../../../../../service/api/userTypeService";
import { useNavigate } from "react-router-dom";

interface ListarTiposUsuarioProps {
  reloadKey?: number; // <- NUEVO
}

const ListarTiposUsuario: React.FC<ListarTiposUsuarioProps> = ({
  reloadKey,
}) => {
  const [tiposUsuario, setTiposUsuario] = useState<TipoUsuarioDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserTypes = async () => {
      setLoading(true); // <- asegura que muestre el loader al recargar
      try {
        const data = await UserTypeService.getAllUserType();
        setTiposUsuario(Array.isArray(data) ? data : [data]);
      } catch (err) {
        setError("Error al cargar tipos de usuario");
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserTypes();
  }, [reloadKey]); // <- ahora se vuelve a ejecutar si cambia reloadKey

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        <span className="ml-4">Cargando tipos de usuario...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
        <strong>Error!</strong> {error}
        <button
          onClick={() => window.location.reload()}
          className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
        >
          Reintentar
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Tipos de Usuario</h1>
        <button
          onClick={() => navigate("/dashboard/tipos-usuario/nuevo")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Crear Nuevo Tipo
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                ID
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Descripción
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {tiposUsuario.length > 0 ? (
              tiposUsuario.map((tipo) => (
                <tr
                  key={tipo.userTypeId.toString()}
                  className="hover:bg-gray-50"
                >
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {tipo.userTypeId.toString()}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {tipo.description}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <button
                      onClick={() =>
                        navigate(
                          `/dashboard/tipos-usuario/editar/${tipo.userTypeId}`
                        )
                      }
                      className="text-blue-500 hover:text-blue-800 mr-3"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => console.log("Eliminar:", tipo.userTypeId)}
                      className="text-red-500 hover:text-red-800"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={3}
                  className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center"
                >
                  No se encontraron tipos de usuario
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListarTiposUsuario;
