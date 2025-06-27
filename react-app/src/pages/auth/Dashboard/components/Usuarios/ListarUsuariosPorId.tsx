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
      setError(error instanceof Error ? error.message : "Error desconocido");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
        Buscar Usuario por ID
      </h2>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Ingrese ID de usuario"
          className="border border-gray-300 rounded px-4 py-2 flex-1"
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
        <div className="bg-red-100 text-red-800 px-4 py-2 rounded mb-4">
          {error}
        </div>
      )}

      {usuario && (
        <div className="mt-4 border border-gray-200 rounded-lg shadow-sm p-4 bg-white text-black">
          <h3 className="text-xl font-semibold text-blue-700 mb-4 text-center">
            Detalles del Usuario (ID: {usuario.userId})
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-bold text-gray-700 mb-2">
                Información Básica
              </h4>
              <p className="text-black">
                <strong className="text-black">Nombre:</strong>{" "}
                <span className="text-black">{usuario.name}</span>
              </p>
              <p className="text-black">
                <strong className="text-black">Username:</strong>{" "}
                <span className="text-black">{usuario.username}</span>
              </p>
              <p className="text-black">
                <strong className="text-black">Tipo:</strong>{" "}
                <span className="text-black">
                  {usuario.userType.description}
                </span>
              </p>
              <p className="text-black">
                <strong className="text-black">Estado:</strong>{" "}
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    usuario.userState.userStateId === 1
                      ? "bg-green-100 text-green-800"
                      : usuario.userState.userStateId === 2
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {usuario.userState.description}
                </span>
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-700 mb-2">
                Información Personal
              </h4>
              <p className="text-black">
                <strong className="text-black">Nombre Completo:</strong>{" "}
                <span className="text-black">
                  {usuario.person.name} {usuario.person.lastname}
                </span>
              </p>
              <p className="text-black">
                <strong className="text-black">DNI:</strong>{" "}
                <span className="text-black">{usuario.person.dni}</span>
              </p>
              <p className="text-black">
                <strong className="text-black">Email:</strong>{" "}
                <span className="text-black">{usuario.person.mail}</span>
              </p>
              <p className="text-black">
                <strong className="text-black">Teléfono:</strong>{" "}
                <span className="text-black">{usuario.person.phone}</span>
              </p>
              <p className="text-black">
                <strong className="text-black">Dirección:</strong>{" "}
                <span className="text-black">{usuario.person.address}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListarUsuarioPorId;
