import { useState, useRef, useEffect, Suspense, lazy } from "react";
import "../../../css/Dashboard.css";
import iconHome from "../../../img/icons/icon_home_w.png";
import iconHoja from "../../../img/icons/icon_hoja_w.png";
import iconLogOut from "../../../img/icons/icon_logout_w.png";
import iconGlobe from "../../../img/icons/icon_globe_w.png";
import iconSettings from "../../../img/icons/icon_settings_w.png";
import iconBurger from "../../../img/icons/icon_burger_w.png";
import { logout } from "../../../auth/Auth.service"; // Asegúrate de que la ruta sea correcta

// Lazy loading de componentes
const Actividades = lazy(() => import("./components/Actividades/Actividades"));
const Consultoria = lazy(() => import("./components/Consultoria/Consultoria"));
const Configuracion = lazy(
  () => import("./components/Configuration/Configuracion")
);

const Dashboard = () => {
  const [nombre, setNombre] = useState<string>(""); // CAMBIO 1: Cambié de username a nombre
  const [abierto, setAbierto] = useState(false);
  const [vistaActiva, setVistaActiva] = useState("Home");
  const sidebarRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Pre-carga opcional de componentes al montar el dashboard
  useEffect(() => {
    import("./components/Consultoria/Consultoria");
    import("./components/Actividades/Actividades");
    import("./components/Configuration/Configuracion");
  }, []);

  // Cerrar el menú si se hace click fuera de él
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

  // Obtener nombre desde localStorage
  useEffect(() => {
    const storedNombre = localStorage.getItem("nombre"); // CAMBIO 2: Ahora obtiene "nombre" en vez de "username"
    if (storedNombre) {
      setNombre(storedNombre);
    }
  }, []);

  // Función para cerrar sesión
  const handleLogout = () => {
    logout(); // Llamar a la función logout centralizada
    window.location.href = "/auth/Login"; // Redirigir a la página de login después de cerrar sesión
  };

  return (
    <div className="contenedor-global-dashboard-slide">
      {/* Navbar superior */}
      <div className="navbar-superior">
        <div className="navbar-titulo">InvexiaLab</div>
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
      </div>

      {/* Navbar lateral */}
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

            {/* CAMBIO 4: Mostramos nombre aquí */}
          </div>
        </div>

        <div className="contenedor-opciones-dashboard">
          {[
            {
              icon: iconHome,
              text: "Home",
            },
            {
              icon: iconHoja,
              text: "Consultoría",
            },
            {
              icon: iconGlobe,
              text: "Actividades",
            },
            {
              icon: iconSettings,
              text: "Configuración",
            },
            {
              icon: iconLogOut,
              text: "Cerrar sesión",
              onClick: handleLogout,
              className: "icon-logout",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`opcion-dashboard ${item.className || ""}`}
              onClick={() => {
                if (item.text !== "Cerrar sesión") {
                  setVistaActiva(item.text);
                }
                setAbierto(false);
                if (item.onClick) item.onClick();
              }}
            >
              <img className="icon-dashboard" src={item.icon} alt={item.text} />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Contenido principal */}
      <div className="contenedor-slider">
        <Suspense fallback={<div className="cargando">Cargando vista...</div>}>
          {vistaActiva === "Home" && (
            <>
              <h1>Contenido Principal</h1>
              <h1>Bienvenido, {nombre}</h1>{" "}
              {/* CAMBIO 5: También en el contenido principal */}
              <p>El navbar lateral ahora aparece debajo del navbar superior.</p>
            </>
          )}
          {vistaActiva === "Consultoría" && <Consultoria />}
          {vistaActiva === "Actividades" && <Actividades />}
          {vistaActiva === "Configuración" && <Configuracion />}
        </Suspense>
      </div>
    </div>
  );
};

export default Dashboard;
