import "../index.css";
import "../css/Header.css";
import videoBanner from "../media/banner.mp4";

type HeaderResponsiveProps = {
  formRef: React.RefObject<HTMLFormElement>; // 🔹 Recibir `formRef` como prop
};

const HeaderResponsive: React.FC<HeaderResponsiveProps> = ({ formRef }) => {
  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" }); // 🔹 Hacer scroll al formulario
    }
  };

  return (
    <div className="top-header">
      <video className="video-background" autoPlay loop muted>
        <source src={videoBanner} type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>

      <div className="TConsulting">
        <div className="content">
          <h1>
            <span className="title-line" translate="no">
              THESIS
            </span>
            <span className="title-line" translate="no">
              CONSULTING
            </span>
          </h1>
          <h3 translate="no">Tu conocimiento, nuestro impacto</h3>

          <button className="button" onClick={scrollToForm} translate="no">
            Ir al Formulario
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderResponsive;
