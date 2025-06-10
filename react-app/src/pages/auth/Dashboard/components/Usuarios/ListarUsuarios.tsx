import React, { useState, useEffect } from "react";
import {
  UserService,
  UsuarioDTO,
} from "../../../../../service/api/userService";

const ListarUsuarios: React.FC = () => {
  const [users, setUsers] = useState<UsuarioDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await UserService.getAllUsers();
        setUsers(data);
      } catch (err) {
        setError("Error al cargar usuarios");
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div className="text-center py-10">Cargando...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
        Lista de Usuarios
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg shadow-sm">
          <thead>
            <tr className="bg-blue-100 text-blue-800 text-sm font-semibold uppercase">
              <th className="px-6 py-3 text-left">ID</th>
              <th className="px-6 py-3 text-left">Username</th>
              <th className="px-6 py-3 text-left">Estado</th>
              <th className="px-6 py-3 text-left">Tipo</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.userId}
                className="hover:bg-gray-100 border-b border-gray-200 transition"
              >
                <td className="px-6 py-4">{user.userId}</td>
                <td className="px-6 py-4">{user.username}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      user.active === 1
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {user.active === 1 ? "Activo" : "Inactivo"}
                  </span>
                </td>
                <td className="px-6 py-4">{user.userType.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListarUsuarios;
