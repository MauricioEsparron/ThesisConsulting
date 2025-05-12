import { useState, useRef, useEffect, Suspense, lazy } from "react";
import "../../../css/Dashboard.css";
import iconHome from "../../../img/icons/icon_home_w.png";
import iconHoja from "../../../img/icons/icon_hoja_w.png";
import iconLogOut from "../../../img/icons/icon_logout_w.png";
import iconGlobe from "../../../img/icons/icon_globe_w.png";
import iconSettings from "../../../img/icons/icon_settings_w.png";
import iconBurger from "../../../img/icons/icon_burger_w.png";
import { logout } from "../../../auth/Auth.service";
import HomeAministrador from "./components/HomeAministrador";
import Consultas2 from "./components/Consultoria/Consultas2";
import { useAuth } from "../../../stores/Auth.store";
import HomeEstudiante from "./components/HomeEstudiante";
import ListarUsuarios from "./components/Usuarios/ListarUsuarios";
import ListarUsuariosPorTipo from "./components/Usuarios/ListarUsuariosPorTipo";
import ListarUsuariosPorEstado from "./components/Usuarios/ListarUsuariosPorEstado";

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
          {[
            {
              icon: iconHome,
              text: "Home",
              viewId: "home_admin",
              roles: ["Administrador"],
            },
            // {
            //   icon: iconHoja,
            //   text: "Consultoría",
            //   viewId: "consultoria_admin",
            //   roles: ["Administrador"],
            // },
            // {
            //   icon: iconGlobe,
            //   text: "Actividades",
            //   viewId: "actividades_admin",
            //   roles: ["Administrador"],
            // },
            {
              icon: iconGlobe,
              text: "Listar Usuarios",
              viewId: "listarUsuarios_admin",
              roles: ["Administrador"],
            },
            {
              icon: iconGlobe,
              text: "Listar Usuarios por tipo",
              viewId: "listarUsuariosPorTipo_admin",
              roles: ["Administrador"],
            },
            {
              icon: iconGlobe,
              text: "Listar Usuarios por Estado",
              viewId: "listarUsuariosPorEstado_admin",
              roles: ["Administrador"],
            },
            {
              icon: iconHome,
              text: "Home",
              viewId: "home_estudiante",
              roles: [
                "Estudiante",
                "Asesor de Experiencia",
                "Docente Asesor",
                "Jefe Académico",
              ],
            },
            {
              icon: iconHoja,
              text: "Consultoría",
              viewId: "consultoria_estudiante",
              roles: [
                "Estudiante",
                "Asesor de Experiencia",
                "Docente Asesor",
                "Jefe Académico",
              ],
            },
            {
              icon: iconGlobe,
              text: "Actividades",
              viewId: "actividades_estudiante",
              roles: [
                "Estudiante",
                "Asesor de Experiencia",
                "Docente Asesor",
                "Jefe Académico",
              ],
            },
            {
              icon: iconSettings,
              text: "Configuración",
              viewId: "configuracion_estudiante",
              roles: [
                "Administrador",
                "Estudiante",
                "Asesor de Experiencia",
                "Docente Asesor",
                "Jefe Académico",
              ],
            },
            {
              icon: iconLogOut,
              text: "Cerrar sesión",
              viewId: "cerrar_sesion",
              onClick: handleLogout,
              className: "icon-logout",
              roles: [
                "Administrador",
                "Estudiante",
                "Asesor de Experiencia",
                "Docente Asesor",
                "Jefe Académico",
              ],
            },
          ]
            .filter((item) => !item.roles || (rol && item.roles.includes(rol)))
            .map((item, index) => (
              <div
                key={index}
                className={`opcion-dashboard ${item.className || ""}`}
                onClick={() => {
                  if (item.viewId !== "cerrar_sesion")
                    setVistaActiva(item.viewId);
                  setAbierto(false);
                  if (item.onClick) item.onClick();
                }}
              >
                <img
                  className="icon-dashboard"
                  src={item.icon}
                  alt={item.text}
                />
                <span>{item.text}</span>
              </div>
            ))}
        </div>
      </div>

      {/* Contenido principal */}
      <div className="contenedor-slider">
        <Suspense fallback={<div className="cargando">Cargando vista...</div>}>
          {/* Admin */}
          {vistaActiva === "home_admin" && <HomeAministrador />}
          {vistaActiva === "consultoria_admin" && (
            <>
              <Consultoria />
              <Consultas2 />
            </>
          )}
          {vistaActiva === "actividades_admin" && <Actividades />}
          {vistaActiva === "configuracion_admin" && <Configuracion />}
          {vistaActiva === "listarUsuarios_admin" && <ListarUsuarios />}
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
        </Suspense>
      </div>
    </div>
  );
};

export default Dashboard;
