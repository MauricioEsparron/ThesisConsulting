import React, { useState, useEffect } from "react";
import {
  PersonService,
  PersonaDTO,
} from "../../../../../service/api/personService";

const ListarPersonas: React.FC = () => {
  const [persons, setPersons] = useState<PersonaDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPersons = async () => {
      try {
        const data = await PersonService.getAllPersons();
        setPersons(data);
      } catch (err) {
        setError("Error al cargar personas");
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPersons();
  }, []);

  if (loading) return <div className="text-center py-10">Cargando...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
        Lista de Personas
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg shadow-sm">
          <thead>
            <tr className="bg-blue-100 text-blue-800 text-sm font-semibold uppercase">
              <th className="px-6 py-3 text-left">ID</th>
              <th className="px-6 py-3 text-left">Nombre</th>
              <th className="px-6 py-3 text-left">Apellido</th>
              <th className="px-6 py-3 text-left">Telefono</th>
              <th className="px-6 py-3 text-left">Edad</th>
              <th className="px-6 py-3 text-left">Dni</th>
              <th className="px-6 py-3 text-left">Email</th>
              <th className="px-6 py-3 text-left">Direccion</th>
              <th className="px-6 py-3 text-left">Estado</th>
            </tr>
          </thead>
          <tbody>
            {persons.map((person) => {
              console.log(
                "Person state:",
                person.personStateId,
                typeof person.personStateId
              );

              return (
                <tr
                  key={person.personId}
                  className="hover:bg-gray-100 border-b border-gray-200 transition"
                >
                  <td className="px-6 py-4">{person.personId}</td>
                  <td className="px-6 py-4">{person.name}</td>
                  <td className="px-6 py-4">{person.lastname}</td>
                  <td className="px-6 py-4">{person.phone}</td>
                  <td className="px-6 py-4">{person.age}</td>
                  <td className="px-6 py-4">{person.dni}</td>
                  <td className="px-6 py-4">{person.mail}</td>
                  <td className="px-6 py-4">{person.address}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        person.personStateId === 1
                          ? "bg-green-100 text-green-800"
                          : person.personStateId === 2
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {person.personStateId === 1
                        ? "Activo"
                        : person.personStateId === 2
                        ? "En mantenimiento"
                        : "Inactivo"}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListarPersonas;
