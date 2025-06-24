// src/components/AdminViews.tsx
import React from "react";
import { Suspense, lazy } from "react";
import HomeAdministrador from "../HomeAdministrador";
import Consultas2 from "../Consultoria/Consultas2";
import ListarUsuarios from "../Usuarios/ListarUsuarios";
import ListarUsuariosPorTipo from "../Usuarios/ListarUsuariosPorTipo";
import ListarUsuariosPorId from "../Usuarios/ListarUsuariosPorId";
import ListarUsuariosPorEstado from "../Usuarios/ListarUsuariosPorEstado";
import ListarCursos from "../curso/ListarCursos";
import ListarPersonas from "../Persona/ListarPersonas";

const Actividades = lazy(() => import("../Actividades/Actividades"));
const Consultoria = lazy(() => import("../Consultoria/Consultoria"));
const Configuracion = lazy(() => import("../Configuration/Configuracion"));

interface AdminViewsProps {
  vistaActiva: string;
}

const AdminViews: React.FC<AdminViewsProps> = ({ vistaActiva }) => {
  return (
    <Suspense fallback={<div className="cargando">Cargando vista...</div>}>
      {vistaActiva === "home_admin" && <HomeAdministrador />}
      {vistaActiva === "consultoria_admin" && (
        <>
          <Consultoria />
          <Consultas2 />
        </>
      )}
      {vistaActiva === "actividades_admin" && <Actividades />}
      {vistaActiva === "configuracion_admin" && <Configuracion />}
      {vistaActiva === "listarUsuarios_admin" && <ListarUsuarios />}
      {vistaActiva === "listarUsuariosPorId_admin" && <ListarUsuariosPorId />}
      {vistaActiva === "listarUsuariosPorTipo_admin" && (
        <ListarUsuariosPorTipo />
      )}
      {vistaActiva === "listarUsuariosPorEstado_admin" && (
        <ListarUsuariosPorEstado />
      )}
      {vistaActiva === "listarCursos_admin" && <ListarCursos />}
      {vistaActiva === "listarPersonas_admin" && <ListarPersonas />}
    </Suspense>
  );
};

export default AdminViews;
