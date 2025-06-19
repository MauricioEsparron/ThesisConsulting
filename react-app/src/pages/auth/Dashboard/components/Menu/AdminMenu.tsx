import React, { useState } from "react";
import iconHome from "../../../../../img/icons/icon_home_w.png";
import iconGlobe from "../../../../../img/icons/icon_globe_w.png";
import iconSettings from "../../../../../img/icons/icon_settings_w.png";
import iconLogOut from "../../../../../img/icons/icon_logout_w.png";

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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    {
      icon: iconHome,
      text: "Home",
      viewId: "home_admin",
    },
    {
      icon: iconGlobe,
      text: "Listado",
      viewId: "listado",
      subItems: [
        {
          text: "Listar Usuarios",
          viewId: "listarUsuarios_admin",
        },
        {
          text: "Listar Usuarios por Id",
          viewId: "listarUsuariosPorId_admin",
        },
        {
          text: "Listar Usuarios por tipo",
          viewId: "listarUsuariosPorTipo_admin",
        },
        {
          text: "Listar Usuarios por Estado",
          viewId: "listarUsuariosPorEstado_admin",
        },
      ],
    },
    {
      icon: iconGlobe,
      text: "Registro",
      viewId: "registro",
      subItems: [
        {
          text: "Registrar Usuario",
          viewId: "registroUsuario_admin",
        },
        {
          text: "Registrar Tipo de Usuario",
          viewId: "registroTipoUsuario_admin",
        },
      ],
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

  const toggleDropdown = (viewId: string) => {
    setActiveDropdown(activeDropdown === viewId ? null : viewId);
  };

  return (
    <div className="contenedor-opciones-dashboard">
      {menuItems.map((item, index) => (
        <div key={index} className="relative">
          <div
            className={`opcion-dashboard ${item.className || ""}`}
            onClick={() => {
              if (item.subItems) {
                toggleDropdown(item.viewId);
              } else {
                if (item.viewId !== "cerrar_sesion") {
                  setVistaActiva(item.viewId);
                }
                setAbierto(false);
                if (item.onClick) item.onClick();
              }
            }}
          >
            <img className="icon-dashboard" src={item.icon} alt={item.text} />
            <span>{item.text}</span>
          </div>
          {item.subItems && activeDropdown === item.viewId && (
            <div className="bg-white shadow-md py-2 w-full transition-all duration-300">
              {item.subItems.map((subItem, subIndex) => (
                <div
                  key={subIndex}
                  className="p-2 hover:bg-gray-200 cursor-pointer opcion-dashboard"
                  onClick={() => {
                    setVistaActiva(subItem.viewId);
                    setAbierto(false);
                  }}
                >
                  <span>{subItem.text}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AdminMenu;
