import { useState } from "react";
import "../../../css/Dasboard2.css";
import iconHome from "../../../img/icons/icon_home_b.png";
import iconHoja from "../../../img/icons/icon_hoja_b.png";
import iconLogOut from "../../../img/icons/icon_logout_b.png";
import iconGlobe from "../../../img/icons/icon_globe_b.png";
import iconSettings from "../../../img/icons/icon_settings_b.png";
import Actividades from "./components/Actividades/Actividades";
import Consultas from "./components/Consultoria/Consultas";
import Settings from "./components/Configuration/Configuracion";

type MenuItem = {
  id: string;
  title: string;
  icon: string;
  path: string;
  isLogout?: boolean;
};

type Props = {
  onMenuItemClick?: (itemId: string) => void;
};

function Dashboard({ onMenuItemClick }: Props) {
  const [isCompact, setIsCompact] = useState(false);
  const [activeItem, setActiveItem] = useState("home");

  const menuItems: MenuItem[] = [
    { id: "home", title: "Home", icon: iconHome, path: "#" },
    { id: "consultoria", title: "Consultoría", icon: iconHoja, path: "#" },
    { id: "actividades", title: "Actividades", icon: iconGlobe, path: "#" },
    { id: "settings", title: "Settings", icon: iconSettings, path: "#" },
    {
      id: "logout",
      title: "Logout",
      icon: iconLogOut,
      path: "#",
      isLogout: true,
    },
  ];

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId);
    if (onMenuItemClick) {
      onMenuItemClick(itemId);
    }
  };

  const toggleSidebar = () => {
    setIsCompact(!isCompact);
  };

  return (
    <div className="contenedor-global-dashboard-slide">
      <div className={`contenedor-dashboard ${isCompact ? "compact" : ""}`}>
        <button className="toggle-btn" onClick={toggleSidebar}>
          {isCompact ? "→" : "←"}
        </button>

        <div className="contenedor-perfil">
          <div className="contenedor-imagen-perfil">
            <img
              className="imagen-perfil"
              src="https://images.pexels.com/photos/1435517/pexels-photo-1435517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="imagen-usuario"
            />
          </div>
          <div className="contenedor-nombre-usuario">
            <h4 className="nombre-usuario">Mauricio Ramirez Esparron</h4>
          </div>
        </div>

        <div className="contenedor-opciones">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className={`opcion-dashboard ${
                activeItem === item.id ? "active" : ""
              } ${item.isLogout ? "icon-logout" : ""}`}
              onClick={() => handleItemClick(item.id)}
              data-tooltip={item.title}
            >
              <img
                className="icon-dashboard"
                src={item.icon}
                alt={`icono-${item.id}`}
              />
              <span className="opcion-texto">{item.title}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="contenedor-slider">
        {/* Contenido principal de tu aplicación */}
        <h1>Bienvenido al Dashboard</h1>
        <p>Selecciona una opción del menú</p>
        <Consultas />
        <Actividades />
        <Settings />
      </div>
    </div>
  );
}

export default Dashboard;
