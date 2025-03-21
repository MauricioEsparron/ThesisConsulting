
import "../css/Footer.css"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Texto de Redes Sociales */}
        <p className="footer-title">REDES SOCIALES</p>

        {/* Iconos y enlaces de Redes Sociales */}
        <div className="footer-links">
          <a href="https://wa.me/51936956726" className="footer-link">
            WhatsApp
          </a>
          <a href="#" className="footer-link">Instagram</a>
          <a href="#" className="footer-link">LinkedIn</a>
          <a href="#" className="footer-link">Facebook</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
