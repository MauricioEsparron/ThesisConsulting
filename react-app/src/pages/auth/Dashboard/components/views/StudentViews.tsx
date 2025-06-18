// src/components/StudentViews.tsx
import React from "react";
import { Suspense, lazy } from "react";
import HomeEstudiante from "../HomeEstudiante";
import Consultas2 from "../Consultoria/Consultas2";

const Actividades = lazy(() => import("../Actividades/Actividades"));
const Consultoria = lazy(() => import("../Consultoria/Consultoria"));
const Configuracion = lazy(() => import("../Configuration/Configuracion"));

interface StudentViewsProps {
  vistaActiva: string;
}

const StudentViews: React.FC<StudentViewsProps> = ({ vistaActiva }) => {
  return (
    <Suspense fallback={<div className="cargando">Cargando vista...</div>}>
      {vistaActiva === "home_estudiante" && <HomeEstudiante />}
      {vistaActiva === "consultoria_estudiante" && (
        <>
          <Consultoria />
          <Consultas2 />
        </>
      )}
      {vistaActiva === "actividades_estudiante" && <Actividades />}
      {vistaActiva === "configuracion_estudiante" && <Configuracion />}
    </Suspense>
  );
};

export default StudentViews;
