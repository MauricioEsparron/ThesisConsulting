import "../index.css";
import "../css/Header.css";
import videoBanner from "../media/banner.mp4";
import { useState } from "react";

const Header = () => {
  const [formOpen, setFormOpen] = useState(false); // Estado para mostrar/ocultar formulario

  return (
    <div className={`top-header ${formOpen ? "active" : ""}`}>
      <video className="video-background" autoPlay loop muted>
        <source src={videoBanner} type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>

      <div className={`header-main ${formOpen ? "active" : ""}`}>
        <div className="TConsulting">
          <div className="content">
            <h1>
              <span className="title-line">THESIS</span>
              <span className="title-line">CONSULTING</span>
            </h1>
            <h3>Tu conocimiento, nuestro impacto</h3>
            <button className="button" onClick={() => setFormOpen(!formOpen)}>
              {formOpen ? "Cerrar formulario" : "Haz clic aquí"}
            </button>
          </div>
        </div>

        {/* Renderizar solo si formOpen es true */}
        {formOpen && (
          <div id="formulario" className="formulario visible">
            <div className="form-container">
              <div className="form">
                <button
                  className="close-btn"
                  onClick={() => setFormOpen(false)}
                >
                  ✖
                </button>
                <h2>Contáctanos</h2>
                <form>
                  <div className="form-group">
                    <label>Nombre Completo</label>
                    <input type="text" placeholder="Tu nombre" required />
                  </div>

                  <div className="form-group-row">
                    <div className="form-group">
                      <label>DNI</label>
                      <input type="text" placeholder="DNI" required />
                    </div>
                    <div className="form-group">
                      <label>Teléfono</label>
                      <input type="text" placeholder="Teléfono" required />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Nombre de la Institución</label>
                    <input type="text" placeholder="Institución" required />
                  </div>

                  <div className="form-group">
                    <label>Correo Electrónico</label>
                    <input type="email" placeholder="Correo" required />
                  </div>

                  <div className="form-group">
                    <label>Mensaje</label>
                    <textarea placeholder="Escribe tu mensaje aquí"></textarea>
                  </div>

                  <div className="form-group-checkbox">
                    <input type="checkbox" required />
                    <label>Acepto los Términos y Condiciones</label>
                  </div>

                  <div className="form-group-checkbox">
                    <input type="checkbox" />
                    <label>Autorizo el uso de mis datos</label>
                  </div>

                  <button type="submit" className="submit-button">
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
