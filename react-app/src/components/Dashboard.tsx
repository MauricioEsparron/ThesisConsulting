import { useState, useRef, useEffect, Suspense, lazy } from "react";
import "../css/Dashboard.css";
import iconHome from "../img/icons/icon_home_w.png";
import iconHoja from "../img/icons/icon_hoja_w.png";
import iconLogOut from "../img/icons/icon_logout_w.png";
import iconGlobe from "../img/icons/icon_globe_w.png";
import iconSettings from "../img/icons/icon_settings_w.png";
import iconBurger from "../img/icons/icon_burger_w.png";

// Lazy loading de componentes
const Actividades = lazy(() => import("./Actividades"));
const Consultoria = lazy(() => import("./Consultoria"));
const Configuracion = lazy(() => import("./Configuracion"));

function Dashboard() {
  const [abierto, setAbierto] = useState(false);
  const [vistaActiva, setVistaActiva] = useState("Home");
  const sidebarRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Pre-carga opcional de componentes al montar el dashboard
  useEffect(() => {
    import("./Consultoria");
    import("./Actividades");
    import("./Configuracion");
  }, []);

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

  return (
    <div className="contenedor-global-dashboard-slide">
      {/* Navbar superior */}
      <div className="navbar-superior">
        <div className="navbar-titulo">Mi Aplicación</div>
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
            <h4 className="nombre-usuario">Bienvenido Tilin</h4>
          </div>
        </div>

        <div className="contenedor-opciones-dashboard">
          {[
            { icon: iconHome, text: "Home" },
            { icon: iconHoja, text: "Consultoría" },
            { icon: iconGlobe, text: "Actividades" },
            { icon: iconSettings, text: "Configuración" },
            {
              icon: iconLogOut,
              text: "Cerrar sesión",
              className: "icon-logout",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`opcion-dashboard ${item.className || ""}`}
              onClick={() => {
                setVistaActiva(item.text);
                setAbierto(false);
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
              <p>El navbar lateral ahora aparece debajo del navbar superior.</p>
            </>
          )}
          {vistaActiva === "Consultoría" && <Consultoria />}
          {vistaActiva === "Actividades" && <Actividades />}
          {vistaActiva === "Configuración" && <Configuracion />}
          {vistaActiva === "Cerrar sesión" && (
            <h2>Sesión cerrada (aquí podrías redirigir o limpiar datos)</h2>
          )}
        </Suspense>
      </div>
    </div>
  );
}

export default Dashboard;
