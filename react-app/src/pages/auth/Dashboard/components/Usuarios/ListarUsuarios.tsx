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

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            {/* <th>Email</th> */}
            <th>Estado</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.userId}>
              <td>{user.userId}</td>
              <td>{user.username}</td>
              <td>{user.active === 1 ? "Activo" : "Inactivo"}</td>
              <td>{user.userType.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListarUsuarios;
