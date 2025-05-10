import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/NavBar";
import Filosofia from "./Components/Filosofia";
import video3 from "../../img/video3.mp4";
import Valores from "../Home/components/Valores";
import "../../css/Nosotros.css";
import NuestrosPilares from "./Components/NuestrosPilares";
import NuestroEquipo from "./Components/NuestroEquipo";
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
      <div className="contenedor-valores-nosotros">
        <div>
          <Valores />
        </div>
        <NuestrosPilares />
      </div>
      <NuestroEquipo />
      <Footer />
    </>
  );
}

export default Nosotros;
