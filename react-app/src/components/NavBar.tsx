import { useState, useEffect } from "react";
import "../index.css";
import "../css/NavBar.css";
import { FaUser, FaGraduationCap, FaWhatsapp, FaGlobe } from "react-icons/fa";

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
          <h2 className="NavBar-nombre-empresa">Empresa</h2>
        </div>
        <div className="nav-links">
          <a translate="no" href="/">
            Home
          </a>
          <a href="#">Especialidades</a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/51936956726"
          >
            Contáctanos
          </a>
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
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/51936956726"
          >
            <FaWhatsapp style={{ marginRight: "8px" }} /> Contáctanos
          </a>

          <a href="#">
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
