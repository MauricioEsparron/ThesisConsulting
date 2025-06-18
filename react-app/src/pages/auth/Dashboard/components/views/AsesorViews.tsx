// src/components/AsesorViews.tsx
import React from "react";
import { Suspense, lazy } from "react";
import Consultas2 from "../Consultoria/Consultas2";

const Actividades = lazy(() => import("../Actividades/Actividades"));
const Consultoria = lazy(() => import("../Consultoria/Consultoria"));
const Configuracion = lazy(() => import("../Configuration/Configuracion"));

interface AsesorViewsProps {
  vistaActiva: string;
}

const AsesorViews: React.FC<AsesorViewsProps> = ({ vistaActiva }) => {
  return (
    <Suspense fallback={<div className="cargando">Cargando vista...</div>}>
      {vistaActiva === "consultoria_asesor" && (
        <>
          <Consultoria />
          <Consultas2 />
        </>
      )}
      {vistaActiva === "actividades_asesor" && <Actividades />}
      {vistaActiva === "configuracion_asesor" && <Configuracion />}
    </Suspense>
  );
};

export default AsesorViews;
