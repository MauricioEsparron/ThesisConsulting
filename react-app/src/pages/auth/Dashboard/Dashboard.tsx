import { useState, useRef, useEffect, Suspense, lazy } from "react";
import "../../../css/Dashboard.css";
import iconBurger from "../../../img/icons/icon_burger_w.png";
import { logout } from "../../../auth/Auth.service";
import HomeAdministrador from "./components/HomeAdministrador";
import Consultas2 from "./components/Consultoria/Consultas2";
import { useAuth } from "../../../stores/Auth.store";
import HomeEstudiante from "./components/HomeEstudiante";
import ListarUsuarios from "./components/Usuarios/ListarUsuarios";
import ListarUsuariosPorTipo from "./components/Usuarios/ListarUsuariosPorTipo";
import ListarUsuariosPorId from "./components/Usuarios/ListarUsuariosPorId";
import ListarUsuariosPorEstado from "./components/Usuarios/ListarUsuariosPorEstado";
import AdminMenu from "./components/AdminMenu";
import StudentMenu from "./components/StudentMenu";
import AsesorMenu from "./components/AsesorMenu";

const Actividades = lazy(() => import("./components/Actividades/Actividades"));
const Consultoria = lazy(() => import("./components/Consultoria/Consultoria"));
const Configuracion = lazy(
  () => import("./components/Configuration/Configuracion")
);

const Dashboard = () => {
  const [nombre, setNombre] = useState<string>("");
  const [abierto, setAbierto] = useState(false);
  const [vistaActiva, setVistaActiva] = useState("Home");
  const sidebarRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { rol } = useAuth();
  console.log("Rol in Dashboard:", rol);

  // Precarga
  useEffect(() => {
    import("./components/Consultoria/Consultoria");
    import("./components/Actividades/Actividades");
    import("./components/Configuration/Configuracion");
  }, []);

  // Cerrar menú si se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setAbierto(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Obtener nombre
  useEffect(() => {
    const storedNombre = localStorage.getItem("nombre");
    if (storedNombre) {
      setNombre(storedNombre);
    }
  }, []);

  // Obtener la vista activa del localStorage
  useEffect(() => {
    const vistaGuardada = localStorage.getItem("vistaActiva");
    if (vistaGuardada) {
      setVistaActiva(vistaGuardada);
    }
  }, []);

  // Guardar vista activa en localStorage
  useEffect(() => {
    localStorage.setItem("vistaActiva", vistaActiva);
  }, [vistaActiva]);

  const handleLogout = () => {
    logout();
    localStorage.removeItem("vistaActiva");
    window.location.href = "/auth/Login";
  };

  return (
    <div className="contenedor-global-dashboard-slide">
      {/* Navbar superior */}
      <div className="navbar-superior">
        <button
          ref={buttonRef}
          className="boton-desplegable"
          onClick={() => setAbierto((prev) => !prev)}
          aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
        >
          <img
            className={`icon-dashboard ${abierto ? "icono-girado" : ""}`}
            src={iconBurger}
            alt="Menú"
          />
        </button>
        <div className="navbar-titulo">InvexiaLab</div>
      </div>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`contenedor-dashboard ${abierto ? "abierto" : ""}`}
      >
        <div className="contenedor-perfil">
          <div className="contenedor-imagen-perfil">
            <img
              className="imagen-perfil"
              src="https://images.pexels.com/photos/1435517/pexels-photo-1435517.jpeg"
              alt="Usuario"
            />
          </div>
          <div className="contenedor-nombre-usuario">
            <h4 className="nombre-usuario">Bienvenido {nombre || "Usuario"}</h4>
            <span>vista {rol}</span>
          </div>
        </div>

        <div className="contenedor-opciones-dashboard">
          {rol === "Administrador" ? (
            <AdminMenu
              setVistaActiva={setVistaActiva}
              setAbierto={setAbierto}
              handleLogout={handleLogout}
            />
          ) : rol === "Asesor" ? (
            <AsesorMenu
              setVistaActiva={setVistaActiva}
              setAbierto={setAbierto}
              handleLogout={handleLogout}
            />
          ) : (
            <StudentMenu
              setVistaActiva={setVistaActiva}
              setAbierto={setAbierto}
              handleLogout={handleLogout}
            />
          )}
        </div>
      </div>

      {/* Contenido principal */}
      <div className="contenedor-slider">
        <Suspense fallback={<div className="cargando">Cargando vista...</div>}>
          {/* Admin */}
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
          {vistaActiva === "listarUsuariosPorId_admin" && (
            <ListarUsuariosPorId />
          )}
          {vistaActiva === "listarUsuariosPorTipo_admin" && (
            <ListarUsuariosPorTipo />
          )}
          {vistaActiva === "listarUsuariosPorEstado_admin" && (
            <ListarUsuariosPorEstado />
          )}
          {/* Estudiantes */}
          {vistaActiva === "home_estudiante" && <HomeEstudiante />}
          {vistaActiva === "consultoria_estudiante" && (
            <>
              <Consultoria />
              <Consultas2 />
            </>
          )}
          {vistaActiva === "actividades_estudiante" && <Actividades />}
          {vistaActiva === "configuracion_estudiante" && <Configuracion />}

          {/* Asesor */}
          {/* {vistaActiva === "home_asesor" && <HomeAsesor />} */}
          {vistaActiva === "consultoria_asesor" && (
            <>
              <Consultoria />
              <Consultas2 />
            </>
          )}
          {vistaActiva === "actividades_asesor" && <Actividades />}
          {vistaActiva === "configuracion_asesor" && <Configuracion />}
        </Suspense>
      </div>
    </div>
  );
};

export default Dashboard;
