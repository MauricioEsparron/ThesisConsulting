type Props = {};
import { FaFacebook, FaGoogle, FaWhatsapp } from "react-icons/fa";
import "../../css/Footer.css";
import Logo from "./Logo";
function Footer({}: Props) {
  return (
    <>
      <div className="contenedor-footer">
        <div className="subcontenedor-bloque1-footer">
          <div className="subcontenedor-footer-info">
            <Logo />
            <div className="slogan-footer">
              <p>Tu conocimiento, nuestro impacto</p>
            </div>
          </div>
          <div className="contenedor-footer-enlaces">
            <div className="footer-enlaces">
              <div className="subcontenedor-footer-enlaces">
                <h2 className="titulo-footer1">PÁGINA PRINCIPAL</h2>
                <div className="sub-subcontenedor-footer-enlaces">
                  <div className="footer-enlaces-bloque1">
                    <a href="/">Inicio</a>
                    <a href="/Nosotros">Nosotros</a>
                    {/* <a href="#">Servicios</a> */}{" "}
                  </div>
                  <div className="footer-enlaces-bloque2">
                    <a href="/Especialidades">Especialidades</a>
                    {/* <a href="#">Productos</a> */}
                    <a href="/Contactanos">Contáctanos</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-iconos">
              <h2 className="titulo-footer2">REDES SOCIALES</h2>
              <div className="footer-iconos-redes">
                <a href="#">
                  <FaFacebook
                    className="icono-footer"
                    style={{ margin: "5px", fontSize: "40px" }}
                  />
                </a>
                <a href="#">
                  <FaGoogle
                    className="icono-footer"
                    style={{ margin: "5px", fontSize: "40px" }}
                  />
                </a>
                <a href="#">
                  <FaWhatsapp
                    className="icono-footer"
                    style={{ margin: "5px", fontSize: "40px" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="subcontenedor-bloque2-footer">
          <a href="#">Libro de Reclamaciones</a>
        </div>
      </div>
    </>
  );
}

export default Footer;
