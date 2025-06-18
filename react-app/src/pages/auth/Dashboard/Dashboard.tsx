// src/components/Dashboard.tsx
import { useState, useRef, useEffect } from "react";
import "../../../css/Dashboard.css";
import iconBurger from "../../../img/icons/icon_burger_w.png";
import { logout } from "../../../auth/Auth.service";
import { useAuth } from "../../../stores/Auth.store";
import AdminMenu from "./components/Menu/AdminMenu";
import StudentMenu from "./components/Menu/StudentMenu";
import AsesorMenu from "./components/Menu/AsesorMenu";
import AdminViews from "./components/views/AdminViews";
import StudentViews from "./components/views/StudentViews";
import AsesorViews from "./components/views/AsesorViews";

const Dashboard = () => {
  const [nombre, setNombre] = useState<string>("");
  const [abierto, setAbierto] = useState(false);
  const [vistaActiva, setVistaActiva] = useState("Home");
  const sidebarRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { rol } = useAuth();
  // console.log("Rol in Dashboard:", rol);

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
        {rol === "Administrador" && <AdminViews vistaActiva={vistaActiva} />}
        {rol === "Estudiante" && <StudentViews vistaActiva={vistaActiva} />}
        {rol === "Asesor" && <AsesorViews vistaActiva={vistaActiva} />}
      </div>
    </div>
  );
};

export default Dashboard;
