import { useState, useEffect } from "react";
import "../../../../../css/Consultorias.css";
import imgPrueba from "../../../../../img/montañas1.webp";
import {
  CourseService,
  CursoDTO,
} from "../../../../../service/api/courseService";

const Consultoria = () => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [courses, setCourses] = useState<CursoDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await CourseService.getAllCourses();
        setCourses(data);
      } catch (err) {
        setError("Error al cargar consultorías");
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const toggleMenu = (index: number) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  if (loading) return <div className="text-center py-10">Cargando...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="main-container">
      <div className="contenedor-slider">
        <div className="consultoria-container">
          <div className="consultoria-header">
            <h2 className="titulo-consultoria">Consultorías Disponibles</h2>
            <p className="descripcion-consultoria">
              Elija entre las opciones de consultoría disponibles y comience su
              aprendizaje.
            </p>
          </div>

          <div className="consultoria-cards-container">
            {courses.map((course, index) => (
              <div key={course.idCourse} className="consultoria-card">
                <div className="opciones-menu">
                  <button
                    className="btn-opciones"
                    onClick={() => toggleMenu(index)}
                  >
                    ⋮
                  </button>
                  {activeMenu === index && (
                    <div className="menu-desplegable">
                      <button onClick={() => console.log("Editar")}>
                        Editar
                      </button>
                      <button onClick={() => console.log("Eliminar")}>
                        Eliminar
                      </button>
                    </div>
                  )}
                </div>
                <a href="#" className="consultoria-link">
                  <img
                    src={course.imageUrl || imgPrueba}
                    alt="Consultoría"
                    className="consultoria-image"
                  />
                  <div className="consultoria-info">
                    <p className="consultoria-title">{course.name}</p>
                    <span className="consultoria-profesor">
                      {course.professorFullName}
                    </span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultoria;
