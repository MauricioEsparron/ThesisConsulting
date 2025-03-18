import Header from "../components/Header";
import Navbar from "../components/NavBar";
import "../index.css";
import "../css/ContactForm.css";
import Pilares from "../components/Pilares";

import imagen from "../assets/react.svg";
import Proposito from "../components/Proposito";
import imgProposito from "../img/Aprendizaje Interactivo y Práctico.jpg";

type Props = {};

function Home({}: Props) {
  return (
    <>
      <Navbar />
      <Header />
      <Pilares
        imagen1={imagen}
        texto1={"Excelencia Académica"}
        imagen2={imagen}
        texto2={"Tecnología al servicio del conocimiento"}
        imagen3={imagen}
        texto3={"Impacto Sostenible"}
      ></Pilares>
      <Proposito
        imagen={imgProposito}
        titulo="NUESTRO PROPÓSITO"
        texto={
          "Guiar a estudiantes y profesionales en la creación de investigaciones de impacto global, utilizando metodologías avanzadas, herramientas tecnológicas y un enfoque en sostenibilidad y los Objetivos de Desarrollo Sostenible (ODS)."
        }
      />
    </>
  );
}

export default Home;
