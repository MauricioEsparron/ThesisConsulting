import React from "react";
import iconHome from "../../../../../img/icons/icon_home_w.png";
import iconHoja from "../../../../../img/icons/icon_hoja_w.png";
import iconGlobe from "../../../../../img/icons/icon_globe_w.png";
import iconSettings from "../../../../../img/icons/icon_settings_w.png";
import iconLogOut from "../../../../../img/icons/icon_logout_w.png";

interface AsesorMenuProps {
  setVistaActiva: (viewId: string) => void;
  setAbierto: (abierto: boolean) => void;
  handleLogout: () => void;
}

const AsesorMenu: React.FC<AsesorMenuProps> = ({
  setVistaActiva,
  setAbierto,
  handleLogout,
}) => {
  const menuItems = [
    {
      icon: iconHome,
      text: "Home",
      viewId: "home_estudiante",
    },
    {
      icon: iconHoja,
      text: "Consultoría",
      viewId: "consultoria_estudiante",
    },
    {
      icon: iconGlobe,
      text: "Actividades",
      viewId: "actividades_estudiante",
    },
    {
      icon: iconSettings,
      text: "Configuración",
      viewId: "configuracion_estudiante",
    },
    {
      icon: iconLogOut,
      text: "Cerrar sesión",
      viewId: "cerrar_sesion",
      onClick: handleLogout,
      className: "icon-logout",
    },
  ];

  return (
    <div className="contenedor-opciones-dashboard">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className={`opcion-dashboard ${item.className || ""}`}
          onClick={() => {
            if (item.viewId !== "cerrar_sesion") {
              setVistaActiva(item.viewId);
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
  );
};

export default AsesorMenu;
