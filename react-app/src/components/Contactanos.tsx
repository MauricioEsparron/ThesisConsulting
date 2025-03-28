import "../css/Contactanos.css";
import videoContactanos from "../media/Contactanos.mp4";

type Props = {};

function Contactanos({}: Props) {
  return (
    <>
      <div className="Contenedor-contactanos">
        <div className="contenedor-header">
          {/* Video dentro del header */}
          <video className="Contactanos-video-background" autoPlay muted loop>
            <source src={videoContactanos} type="video/mp4" />
            Tu navegador no soporta videos HTML5.
          </video>
          <div className="video-overlay"></div>

          <h1 className="titulo-contactanos">Transforma tu Proyecto</h1>
          <h2 className="subtitulo-contactanos">
            Contáctanos. Escríbenos por WhatsApp para una respuesta rápida
          </h2>
          <div className="contenedor-btn-wsp">
            <a
              href="https://wa.me/1234567890"
              className="btn btn-success btn-lg mt-3 btn-wsp"
            >
              <i className="fab fa-whatsapp me-2"></i> Hablar por WhatsApp
            </a>
          </div>
        </div>
        <div className="contenedor-secundario">
          <div className="contenedor-bloque1">
            <div className="contenedor-formulario">
              <h2 className="titulo-formulario">Envíanos un mensaje</h2>
              <form className="formulario-contactanos">
                <div className="form-group">
                  <label className="campo">Nombre Completo:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ingresa tu nombre"
                  />
                </div>
                <div className="form-group">
                  <label className="campo">Correo Electrónico:</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Tu correo"
                  />
                </div>
                <div className="form-group">
                  <label className="campo">Teléfono:</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Ingresa tu correo"
                  />
                </div>
                <div className="form-group">
                  <label className="campo">Mensaje:</label>
                  <textarea
                    className="form-control"
                    rows={4}
                    placeholder="Escribe tu mensaje"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="boton-enviar btn btn-primary btn-lg w-100 hover-effect submit-btn"
                >
                  <i className="fas fa-paper-plane me-2"></i> Enviar mensaje
                </button>
              </form>
            </div>
          </div>
          <div className="contenedor-bloque2">
            <div className="col-lg-5">
              <div className="info-container h-100">
                <h2 className="titulo-info-contacto mb-4">
                  Información de contacto
                </h2>

                <div className="whatsapp-card hover-effect-card mb-4 p-3 text-center">
                  <div className="contenedor-icono-wsp-card  mx-auto mb-3 bg-success">
                    <i className="icono-wsp-card fab fa-whatsapp fa-2x"></i>
                  </div>
                  <h4 className="titulo-card mb-2">Atención inmediata</h4>
                  <p className="texto-card mb-3">
                    Contáctanos directamente por WhatsApp para una respuesta
                    rápida
                  </p>
                  <div className="contenedor-btn-escribir">
                    <a
                      href="https://wa.me/1234567890"
                      className="btn-card-escribir btn btn-outline-success hover-effect"
                    >
                      <i className="icono-card-escribir fab fa-whatsapp me-2"></i>
                      Escribir ahora
                    </a>
                  </div>
                </div>

                {/* Tarjetas de contacto */}
                <div className="contenedor-info-contacto">
                  <div className="contact-method">
                    <div className="icon-circle">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div className="subcontenedor-info-contacto ms-3">
                      <h5>Teléfono</h5>
                      <p>+51 000 000 000</p>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="icon-circle">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="subcontenedor-info-contacto ms-3">
                      <h5>Email</h5>
                      <p>contacto@miempresa.com</p>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="icon-circle">
                      <i className="fas fa-clock"></i>
                    </div>
                    <div className="subcontenedor-info-contacto ms-3">
                      <h5>Horario</h5>
                      <p>Lunes a Viernes: 9am - 6pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contenedor-footer">
          <div className="contenedor-titulo-footer">
            <h2 className="mb-4">
              <i className="fas fa-hashtag hashtag-icon me-2"></i>
              Síguenos en redes
            </h2>
          </div>
          <div className="contenedor-texto-footer">
            <p className="lead mb-4">
              Conéctate con nosotros en nuestras redes sociales
            </p>
          </div>
          <div className="contenedor-icons d-flex justify-content-center gap-3 flex-wrap">
            <a href="#" className="social-icon hover-effect facebook">
              <i className="fab fa-facebook-f fa-lg"></i>
            </a>
            <a href="#" className="social-icon hover-effect instagram">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
            <a href="#" className="social-icon hover-effect linkedin">
              <i className="fab fa-linkedin-in fa-lg"></i>
            </a>
            <a href="#" className="social-icon hover-effect tiktok">
              <i className="fab fa-tiktok fa-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactanos;
