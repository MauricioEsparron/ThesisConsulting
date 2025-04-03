import { useState, useEffect } from "react";
import "../index.css";
import "../css/NavBar.css";
import { FaUser, FaGraduationCap, FaWhatsapp, FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false); // Estado para el formulario

  // Manejar clics fuera del menú para cerrarlo
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuOpen &&
        event.target instanceof Node && // Verificar que event.target es un Node
        !document.querySelector(".menu-desplegable")?.contains(event.target) &&
        !document.querySelector(".nav-icon")?.contains(event.target)
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
    <>
      <nav className="navbar">
        <div className="nav-logo">
          <h2 className="NavBar-nombre-empresa">InvexiaLab</h2>
        </div>
        <div className="nav-links">
          <Link translate="no" to="/">
            Home
          </Link>
          <Link to="/Especialidades">Especialidades</Link>
          {/* <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/51936956726"
          >
            Contáctanos
          </a> */}
          <a target="_blank" href="/Contactanos">
            Contáctanos
          </a>
        </div>
        <div className="nav-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <i className="bi bi-list" id="menu-icon">
            ☰
          </i>
        </div>

        <div className={`menu-desplegable ${menuOpen ? "active" : ""}`}>
          <div className="nav-icon" onClick={() => setMenuOpen(!menuOpen)}>
            <i
              className=" cerrar-opcion-menu-desplegable bi bi-list"
              id="menu-icon"
            >
              ☰
            </i>
          </div>
          <Link className="opcion1-navbar" to="/Especialidades">
            <FaGraduationCap style={{ marginRight: "8px" }} /> Especialidades
          </Link>
          <Link to="/Login">
            <FaUser style={{ marginRight: "8px" }} /> Acceder
          </Link>
          <Link to="/Contactanos">
            <FaWhatsapp style={{ marginRight: "8px" }} /> Contáctanos
          </Link>
          <a href="#">
            {" "}
            {/* Si Redes Sociales es un enlace externo, usa <a> */}
            <FaGlobe style={{ marginRight: "8px" }} /> Redes sociales
          </a>
        </div>
      </nav>

      {/* Formulario emergente */}
      {formOpen && (
        <div className="form-overlay">
          <div className="form-container">
            <button className="close-btn" onClick={() => setFormOpen(false)}>
              ✖
            </button>
            <h2>Contáctanos</h2>
            <form>
              <input type="text" placeholder="Nombre Completo" />
              <input type="text" placeholder="DNI" />
              <input type="text" placeholder="Teléfono" />
              <input type="text" placeholder="Nombre de la Institución" />
              <input type="email" placeholder="Correo Electrónico" />
              <textarea placeholder="Mensaje"></textarea>
              <div className="checkboxes">
                <label>
                  <input type="checkbox" /> Acepto los Términos y Condiciones
                </label>
                <label>
                  <input type="checkbox" /> Autorizo el uso de mis datos
                </label>
              </div>
              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
