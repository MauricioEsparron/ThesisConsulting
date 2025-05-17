import { useState } from "react";
import { UsuarioDTO } from "../../../../../service/api/userService";
import { UserIdService } from "../../../../../service/api/userIdService";

const ListarUsuarioPorId = () => {
  const [userId, setUserId] = useState<string>("");
  const [usuario, setUsuario] = useState<UsuarioDTO | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    if (!userId) {
      setError("Por favor ingrese un ID válido");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const id = parseInt(userId);

      if (isNaN(id)) {
        throw new Error("El ID debe ser un número");
      }

      const usuarioEncontrado = await UserIdService.getUserById(id);

      if (!usuarioEncontrado) {
        setError("Usuario no encontrado");
        setUsuario(null);
        return;
      }

      setUsuario(usuarioEncontrado);
    } catch (error) {
      setUsuario(null);
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Error desconocido al buscar usuario");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold underline">Listar Por ID Usuario</h1>
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Ingrese ID de usuario"
          className="border rounded p-2 flex-1"
        />
        <button
          onClick={handleSearch}
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
        >
          {loading ? "Buscando..." : "Buscar"}
        </button>
      </div>

      {error && (
        <div className="p-3 mb-4 bg-red-100 text-red-700 rounded">{error}</div>
      )}

      {usuario && (
        <div className="border rounded-lg overflow-hidden">
          <div className="bg-gray-100 p-3 font-bold border-b">
            Detalles del Usuario (ID: {usuario.userId})
          </div>
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Información Básica
                </h3>
                <p>
                  <span className="font-medium">Nombre:</span> {usuario.name}
                </p>
                <p>
                  <span className="font-medium">Usuario:</span>{" "}
                  {usuario.username}
                </p>
                <p>
                  <span className="font-medium">Tipo:</span>{" "}
                  {usuario.userType.description}
                </p>
                <p>
                  <span className="font-medium">Estado:</span>{" "}
                  {usuario.active ? "Activo" : "Inactivo"}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Información Personal
                </h3>
                <p>
                  <span className="font-medium">Nombre Completo:</span>{" "}
                  {usuario.person.name} {usuario.person.lastname}
                </p>
                <p>
                  <span className="font-medium">DNI:</span> {usuario.person.dni}
                </p>
                <p>
                  <span className="font-medium">Email:</span>{" "}
                  {usuario.person.mail}
                </p>
                <p>
                  <span className="font-medium">Teléfono:</span>{" "}
                  {usuario.person.phone}
                </p>
                <p>
                  <span className="font-medium">Dirección:</span>{" "}
                  {usuario.person.address}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListarUsuarioPorId;
