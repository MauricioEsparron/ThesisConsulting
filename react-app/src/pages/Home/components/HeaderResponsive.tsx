import "../../../index.css";
import "../../../css/Header.css";
import videoBanner from "../../../media/banner.mp4";

type HeaderResponsiveProps = {
  formRef: React.RefObject<HTMLFormElement>; // 🔹 Recibir `formRef` como prop
};

const HeaderResponsive: React.FC<HeaderResponsiveProps> = ({ formRef }) => {
  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" }); // Asegura que la vista se alinee con el inicio del formulario
    }

    // const scrollToForm = () => {
    //   if (formRef.current) {
    //     const offsetTop = formRef.current.offsetTop + 3300;
    //     window.scrollTo({ top: offsetTop, behavior: "smooth" });
    //   }
  };

  return (
    <div className="top-header">
      <video className="video-background" autoPlay loop muted>
        <source src={videoBanner} type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>

      <div className="TConsulting">
        <div className="content-header">
          <h1 className="titulo-Header" translate="no">
            THESIS CONSULTING
          </h1>
          <h3 className="subtitulo-header" translate="no">
            Tu conocimiento, nuestro impacto
          </h3>
          <h3 translate="no">Tu conocimiento, nuestro impacto</h3>
          <button
            className="button-header"
            onClick={scrollToForm}
            translate="no"
          >
            Ir al Formulario
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderResponsive;
