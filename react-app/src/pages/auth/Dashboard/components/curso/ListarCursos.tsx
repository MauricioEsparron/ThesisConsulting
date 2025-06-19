import React, { useState, useEffect } from "react";
import {
  CourseService,
  CursoDTO,
} from "../../../../../service/api/courseService";

const ListarCursos: React.FC = () => {
  const [courses, setCourses] = useState<CursoDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await CourseService.getAllCourses();
        setCourses(data);
      } catch (err) {
        setError("Error al cargar cursos");
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) return <div className="text-center py-10">Cargando...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
        Lista de Cursos
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg shadow-sm">
          <thead>
            <tr className="bg-blue-100 text-blue-800 text-sm font-semibold uppercase">
              <th className="px-6 py-3 text-left">ID</th>
              <th className="px-6 py-3 text-left">Nombre curso</th>
              <th className="px-6 py-3 text-left">Descripcion</th>
              <th className="px-6 py-3 text-left">Estado</th>
              <th className="px-6 py-3 text-left">Profesor</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr
                key={course.idCourse}
                className="hover:bg-gray-100 border-b border-gray-200 transition"
              >
                <td className="px-6 py-4">{course.idCourse}</td>
                <td className="px-6 py-4">{course.name}</td>
                <td className="px-6 py-4">{course.description}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      course.state === 1
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {course.state === 1 ? "Activo" : "Inactivo"}
                  </span>
                </td>
                <td className="px-6 py-4">{course.professorFullName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListarCursos;
