import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/NavBar";
import Filosofia from "./Components/Filosofia";
import video3 from "../../img/video3.mp4";
import Valores from "../Home/components/Valores";
import Pilares from "../Home/components/Pilares";
import icon1 from "../../img/icon_libro.png";
import icon2 from "../../img/icon_computadora.png";
import icon3 from "../../img/icon_impacto.png";
type Props = {};

function Nosotros({}: Props) {
  return (
    <>
      <Navbar />
      <header className="especialidades-header">
        <div className="video-background-especialidades">
          <video autoPlay muted loop playsInline>
            <source src={video3} type="video/mp4" />
          </video>
          <div className="video-overlay-especialidades"></div>
        </div>
        <div className="header-content">
          {/* <h1>Contactanos</h1> */}
          {/* <p>
            Servicios diseñados para potenciar tu impacto social y académico
          </p> */}
        </div>
      </header>
      <Filosofia />
      <Valores />
      <Pilares
        imagen1={icon1}
        texto1={"Excelencia Académica"}
        imagen2={icon2}
        texto2={"Tecnología al servicio del conocimiento"}
        imagen3={icon3}
        texto3={"Impacto Sostenible"}
      />
      <Footer />
    </>
  );
}

export default Nosotros;
