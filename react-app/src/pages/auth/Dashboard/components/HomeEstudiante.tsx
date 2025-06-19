import { useState, useEffect } from "react";
import "../../../../css/HomeEstudiante.css";
import { CourseService, CursoDTO } from "../../../../service/api/courseService";

const HomeEstudiante = () => {
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
    <>
      <h1 className="titulo-home-estudiantes">CONSULTAS</h1>

      <div className="cards-container">
        {courses.map((course) => (
          <div key={course.idCourse} className="card">
            <img src={`/uploads/curso/${course.name}`} alt={course.name} />
            <div className="card-content">
              <h2>{course.name}</h2>
              <p>{course.description}</p>
              <button className="more-options">
                {/* <span className="material-icons">more_vert</span> */}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeEstudiante;
