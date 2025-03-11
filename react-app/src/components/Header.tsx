import "../index.css";
import videoBanner from "../media/banner.mp4";

const Header = () => {
  return (
    <div className="top-header">
      <video className="video-background" autoPlay muted loop>
        <source src={videoBanner} type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>

      <div className="header-main">
        <div className="TConsulting">
          <div className="content">
            <h1>
              <span className="title-line">THESIS</span>
              <span className="title-line">CONSULTING</span>
            </h1>
            <h3>Tu conocimiento, nuestro impacto</h3>
            <button className="button">Haz clic aquí</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
