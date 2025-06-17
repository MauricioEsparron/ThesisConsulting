import React from "react";
import "../../css/Gracias.css";
import videoGracias from "../../media/Gracias.mp4";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Gracias: React.FC = () => {
  return (
    <div>
      {/* Video de fondo */}
      <video className="Gracias-video-background" autoPlay muted loop>
        <source src={videoGracias} type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>

      <div className="video-overlay"></div>

      {/* Contenedor principal centrado */}
      <div className="center-wrapper">
        <div className="Gracias-contenedor">
          <div className="check-icon">
            <i className="fas fa-check-circle"></i>
          </div>
          <h2 className="Titulo-gracias mb-4">¡Gracias por contactarnos!</h2>
          <p className="Subtitulo-gracias lead mb-4">
            Hemos recibido tu mensaje y te responderemos pronto.
          </p>
          <p className="Mensaje-gracias mb-4">
            Mientras tanto, puedes contactarnos directamente por WhatsApp:
          </p>
          <a
            href="https://wa.me/1234567890"
            className="btn btn-success btn-lg mt-3 btn-wsp"
          >
            <i className="fab fa-whatsapp me-2"></i>Hablar por WhatsApp
          </a>
          <div className="mt-5">
            <a
              href="/contactanos"
              className="btn btn-outline-primary btn-final"
            >
              <i className="fas fa-arrow-left me-2"></i>Volver al inicio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gracias;
