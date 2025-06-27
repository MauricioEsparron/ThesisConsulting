import React, { useState, useEffect } from "react";
import {
  UserService,
  UsuarioDTO,
} from "../../../../../service/api/userService";
import {
  UserStateService,
  EstadoUsuarioDTO,
} from "../../../../../service/api/userStateService";
import {
  UserTypeService,
  TipoUsuarioDTO,
} from "../../../../../service/api/userTypeService";

const ListarUsuarios: React.FC = () => {
  const [users, setUsers] = useState<UsuarioDTO[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<UsuarioDTO[]>([]);
  const [userStates, setUserStates] = useState<EstadoUsuarioDTO[]>([]);
  const [userTypes, setUserTypes] = useState<TipoUsuarioDTO[]>([]);
  const [selectedState, setSelectedState] = useState<number | null>(null);
  const [selectedType, setSelectedType] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [usersResponse, statesResponse, typesResponse] =
          await Promise.all([
            UserService.getAllUsers(),
            UserStateService.getAllUserState(),
            UserTypeService.getAllUserType(),
          ]);

        const usersArray = Array.isArray(usersResponse)
          ? usersResponse
          : [usersResponse];
        const statesArray = Array.isArray(statesResponse)
          ? statesResponse
          : [statesResponse];
        const typesArray = Array.isArray(typesResponse)
          ? typesResponse
          : [typesResponse];

        setUsers(usersArray);
        setFilteredUsers(usersArray);
        setUserStates(statesArray);
        setUserTypes(typesArray);
      } catch (error) {
        setError("Error al obtener datos iniciales");
        console.error("Error fetching initial data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let filtered = [...users];

    if (selectedState !== null) {
      filtered = filtered.filter(
        (user) => user.userState.userStateId === selectedState
      );
    }

    if (selectedType !== null) {
      filtered = filtered.filter(
        (user) => user.userType.userTypeId === selectedType
      );
    }

    setFilteredUsers(filtered);
  }, [selectedState, selectedType, users]);

  const handleStateChange = (stateId: number | null) => {
    setSelectedState(stateId);
  };

  const handleTypeChange = (typeId: number | null) => {
    setSelectedType(typeId);
  };

  if (loading) return <div className="text-center py-10">Cargando...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
        Lista de Usuarios
      </h2>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Seleccionar Estado de Usuario:
          </label>
          <select
            value={selectedState || ""}
            onChange={(e) =>
              handleStateChange(e.target.value ? Number(e.target.value) : null)
            }
            className="border border-gray-300 rounded-lg p-2 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Todos</option>
            {userStates.map((state) => (
              <option key={state.userStateId} value={state.userStateId}>
                {state.description}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Seleccionar Tipo de Usuario:
          </label>
          <select
            value={selectedType || ""}
            onChange={(e) =>
              handleTypeChange(e.target.value ? Number(e.target.value) : null)
            }
            className="border border-gray-300 rounded-lg p-2 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Todos</option>
            {userTypes.map((type) => (
              <option key={type.userTypeId} value={type.userTypeId}>
                {type.description}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg shadow-sm">
          <thead>
            <tr className="bg-blue-100 text-blue-800 text-sm font-semibold uppercase">
              <th className="px-6 py-3 text-left">ID</th>
              <th className="px-6 py-3 text-left">Username</th>
              <th className="px-6 py-3 text-left">Estado</th>
              <th className="px-6 py-3 text-left">Tipo</th>
              <th className="px-6 py-3 text-left">Nombre</th>
              <th className="px-6 py-3 text-left">Apellido</th>
              <th className="px-6 py-3 text-left">Correo</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr
                  key={user.userId}
                  className="hover:bg-gray-100 border-b border-gray-200 transition"
                >
                  <td className="px-6 py-4">{user.userId}</td>
                  <td className="px-6 py-4">{user.username}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        user.userState.userStateId === 1
                          ? "bg-green-100 text-green-800"
                          : user.userState.userStateId === 2
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {user.userState.description}
                    </span>
                  </td>
                  <td className="px-6 py-4">{user.userType.description}</td>
                  <td className="px-6 py-4">{user.name}</td>
                  <td className="px-6 py-4">
                    {user.person?.lastname || "N/A"}
                  </td>
                  <td className="px-6 py-4">{user.person?.mail || "N/A"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="px-6 py-4 text-center text-gray-500">
                  No hay usuarios con los filtros seleccionados
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListarUsuarios;
