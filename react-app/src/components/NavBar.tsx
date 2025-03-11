import { useState, useEffect } from "react";
import "../index.css";
import "../css/NavBar.css";
import { FaUser, FaGraduationCap, FaWhatsapp, FaGlobe } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Manejar clics fuera del menú para cerrarlo
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        !event.target.closest(".menu-desplegable") &&
        !event.target.closest(".nav-icon")
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <h2 className="NavBar-nombre-empresa">Empresa</h2>
      </div>
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Especialidades</a>
        <a href="#">Contáctanos</a>
      </div>
      <div className="nav-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <i className="bi bi-list" id="menu-icon">
          ☰
        </i>
      </div>

      <div className={`menu-desplegable ${menuOpen ? "active" : ""}`}>
        <a href="#">
          <FaGraduationCap style={{ marginRight: "8px" }} /> Especialidades
        </a>
        <a href="#">
          <FaUser style={{ marginRight: "8px" }} /> Acceder
        </a>
        <a href="#">
          <FaWhatsapp style={{ marginRight: "8px" }} /> Contáctenos
        </a>
        <a href="#">
          <FaGlobe style={{ marginRight: "8px" }} /> Redes sociales
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
