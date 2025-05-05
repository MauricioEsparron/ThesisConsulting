import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/NavBar";
import Filosofia from "./Components/Filosofia";
import video3 from "../../img/video3.mp4";

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
      <Footer />
    </>
  );
}

export default Nosotros;
