import { useEffect, useState } from "react";

interface PersonaDTO {
  personId: number;
  name: string;
  lastname: string;
  phone: string;
  age: number;
  dni: string;
  mail: string;
  address: string;
  state: number;
}

function Pruebas() {
  const [personas, setPersonas] = useState<PersonaDTO[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/dashboard/api/v1/persons")
      .then((response) => {
        console.log("Respuesta recibida:", response);
        if (!response.ok) throw new Error("Error al obtener las personas");
        return response.json();
      })
      .then((data) => {
        console.log("Personas recibidas:", data);
        setPersonas(data);
      })
      .catch((error) => {
        console.error("Error en fetch:", error);
      });
  }, []);

  return (
    <div>
      <h2>Listado de Personas</h2>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          border: "1px solid black",
        }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Telefono</th>
            <th>Edad</th>
            <th>Dirección</th>
            <th>Activo</th>
          </tr>
        </thead>
        <tbody>
          {personas.map((persona) => (
            <tr key={persona.personId}>
              {" "}
              {/* Usamos personId como key */}
              <td>{persona.personId}</td>
              <td>{persona.name}</td>
              <td>{persona.lastname}</td>
              <td>{persona.phone}</td>
              <td>{persona.age}</td>
              <td>{persona.address}</td>
              <td>{persona.state === 1 ? "Activo" : "Inactivo"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Pruebas;
