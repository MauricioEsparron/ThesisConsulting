import React from "react";
import iconHome from "../../../../img/icons/icon_home_w.png";
import iconGlobe from "../../../../img/icons/icon_globe_w.png";
import iconSettings from "../../../../img/icons/icon_settings_w.png";
import iconLogOut from "../../../../img/icons/icon_logout_w.png";

interface AdminMenuProps {
  setVistaActiva: (viewId: string) => void;
  setAbierto: (abierto: boolean) => void;
  handleLogout: () => void;
}

const AdminMenu: React.FC<AdminMenuProps> = ({
  setVistaActiva,
  setAbierto,
  handleLogout,
}) => {
  const menuItems = [
    {
      icon: iconHome,
      text: "Home",
      viewId: "home_admin",
    },
    {
      icon: iconGlobe,
      text: "Listar Usuarios",
      viewId: "listarUsuarios_admin",
    },
    {
      icon: iconGlobe,
      text: "Listar Usuarios por Id",
      viewId: "listarUsuariosPorId_admin",
    },
    {
      icon: iconGlobe,
      text: "Listar Usuarios por tipo",
      viewId: "listarUsuariosPorTipo_admin",
    },
    {
      icon: iconGlobe,
      text: "Listar Usuarios por Estado",
      viewId: "listarUsuariosPorEstado_admin",
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

export default AdminMenu;
