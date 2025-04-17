import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Importar Framer Motion
import "../../../index.css";
import "../../../css/Header.css";
import videoBanner from "../../../media/banner.mp4";

const Header = () => {
  const [formOpen, setFormOpen] = useState(false);

  // 📌 Escucha el evento global y abre el formulario
  useEffect(() => {
    const handleOpenForm = () => setFormOpen(true);
    window.addEventListener("openForm", handleOpenForm);

    return () => {
      window.removeEventListener("openForm", handleOpenForm);
    };
  }, []);

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
              <span className="title-line" translate="no">
                THESIS CONSULTING
              </span>
            </h1>
            <h3 className="subtitulo-header" translate="no">
              Tu conocimiento, nuestro impacto
            </h3>

            {/* Botón con efecto de rebote */}
            <motion.button
              className="button"
              onClick={() => setFormOpen(!formOpen)}
              translate="no"
              whileTap={{ scale: 0.8 }} // Rebote al hacer clic
              animate={{ scale: [1, 1.2, 1] }} // Animación de rebote
              transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
            >
              {formOpen ? "Cerrar formulario" : "Haz clic aquí"}
            </motion.button>
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
