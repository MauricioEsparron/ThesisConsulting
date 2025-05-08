import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Importar Framer Motion
import "../../../index.css";
import "../../../css/Header.css";
import videoBanner from "../../../media/banner.mp4";
import ContactForm from "./ContactForm";

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
          <div className="content-header">
            <h1 className="titulo-Header" translate="no">
              THESIS CONSULTING
            </h1>
            <h3 className="subtitulo-header" translate="no">
              Tu conocimiento, nuestro impacto
            </h3>

            {/* Botón con efecto de rebote */}
            <motion.button
              className="button-header"
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
            <ContactForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
