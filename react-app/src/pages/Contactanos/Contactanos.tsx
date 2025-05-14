import Footer from "../../components/shared/Footer";
import "../../css/Contactanos.css";
import imgContacto from "../../img/contactanos.jpg";
import video3 from "../../img/video3.mp4";
import header2 from "../../img/header2.jpg";
import Navbar from "../../components/shared/NavBar";
import { FaLinkedin, FaRegClock, FaWhatsapp } from "react-icons/fa";
type Props = {};

function Contactanos({}: Props) {
  return (
    <div>
      <Navbar />
      <div className="contenedor-header-contactanos">
        <header className="especialidades-header">
          <div className="video-background-especialidades">
            <video autoPlay muted loop playsInline>
              <source src={video3} type="video/mp4" />
              <img src={header2} alt="Fondo alternativo" />
            </video>
            <div className="video-overlay-especialidades"></div>
          </div>
          <div className="header-content">
            <h1>Contactanos</h1>
            <p>
              Servicios diseñados para potenciar tu impacto social y académico
            </p>
          </div>
        </header>
      </div>
      <div className="contact-container">
        <div className="form-section">
          <div className="form-left">
            <h1 className="form-title-contactanos">
              <span className="blue-rectangle">|</span> TRANSFORMA TU PROYECTO!
            </h1>
            <form className="contact-form">
              <div className="form-row">
                <input type="text" placeholder="Nombre y apellidos" required />
                <input type="text" placeholder="DNI" required />
              </div>
              <div className="form-row">
                <input type="email" placeholder="Correo" required />
                <input type="text" placeholder="Universidad" required />
                <input type="text" placeholder="Carrera" required />
              </div>
              <textarea
                placeholder="Mensaje"
                className="message-box"
                required
              ></textarea>
              <button type="submit" className="submit-btn">
                Enviar
              </button>
            </form>
          </div>
          <div className="form-right">
            <img
              src={imgContacto}
              alt="Imagen de contacto"
              className="contact-image"
            />
          </div>
        </div>

        <div className="info-cards-contactanos">
          <a href="#" className="enlace-cardContactanos">
            <div className="cardContactanos linkedin-card">
              <i className="bi bi-linkedin">
                <a href="#">
                  <FaLinkedin
                    className="icono-footer"
                    style={{ margin: "5px", fontSize: "40px" }}
                  />
                </a>
              </i>
              <h3>linkedin</h3>
              <p>Explora nuestros proyectos y alianzas en LinkedIn.</p>
              <p>www.aaa.com</p>
            </div>
          </a>
          <a href="#" className="enlace-cardContactanos">
            <div className="cardContactanos schedule-card">
              <i className="bi bi-clock">
                <a href="#">
                  <FaRegClock
                    className="icono-footer"
                    style={{ margin: "5px", fontSize: "40px" }}
                  />
                </a>
              </i>
              <h3>Horario de Atención</h3>
              <p>Lunes a sábado, 9:00 a.m. – 6:00 p.m.</p>
            </div>
          </a>
          <a href="#" className="enlace-cardContactanos">
            <div className="cardContactanos whatsapp-card">
              <i className="bi bi-whatsapp">
                <a href="#">
                  <FaWhatsapp
                    className="icono-footer"
                    style={{ margin: "5px", fontSize: "40px" }}
                  />
                </a>
              </i>
              <h3>whatsapp</h3>
              <p>¿Listo para empezar? Escríbenos ahora</p>
              <p>999 999 99</p>
            </div>
          </a>
        </div>

        <div className="location-section-contactanos">
          <h2 className="section-title-contactanos">
            <span className="blue-rectangle">|</span> UBICANOS
          </h2>
          <div className="map-container-contactanos">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sMonumen%20Nasional!5e0!3m2!1sen!2sid!4v1605482382734!5m2!1sen!2sid"
              width="100%"
              height="450"
              // frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contactanos;
