import { useState, useEffect } from "react";
import Header from "../components/Header";
import Navbar from "../components/NavBar";
import "../index.css";
import "../css/ContactForm.css";
import Pilares from "../components/Pilares";
<<<<<<< HEAD
=======

>>>>>>> 60ae812 (se agrego componente Contactanos.tsx, Contactanos.css y se realizaron modificaciones en rutas dentro del componente Navbar.tsx y App.tsx)
import icon1 from "../img/icon_libro.png";
import icon2 from "../img/icon_computadora.png";
import icon3 from "../img/icon_impacto.png";
import Proposito from "../components/Proposito";
import imgProposito from "../img/Aprendizaje Interactivo y Práctico.jpg";
import Metodologia from "../components/Metodologia";

// Importación directa de imágenes
import imgMetodologia1 from "../img/Aprendizaje Interactivo y Práctico.jpg";
import imgMetodologia2 from "../img/agencia de Marketing y publicidad.jpg";
import imgMetodologia3 from "../img/agencia de Marketing y publicidad2.jpg";
import Nosotros from "../components/Nosotros";
import CulturaOrganizacional from "../components/CulturaOrganizacional";
import Valores from "../components/Valores";
import EmailMessage from "../components/EmailMessage";
import WhatsappIcon from "../components/WhatsappIcon";
import Footer from "../components/Footer";
import Nosotros2 from "../components/Nosotros2";

const imagenesMetodologia = [imgMetodologia1, imgMetodologia2, imgMetodologia3];

type Props = {};

function Home({}: Props) {
  // Estado para la resolución
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Función para actualizar el estado cuando la ventana cambie de tamaño
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup: remover el evento al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      {/* Mostrar la resolución en pantalla */}
      <div style={{ textAlign: "center", padding: "10px", color: "blue" }}>
        <h3>Resolución actual:</h3>
        <p>{`Ancho: ${width}px`}</p>
      </div>
      <Pilares
        imagen1={icon1}
        texto1={"Excelencia Académica"}
        imagen2={icon2}
        texto2={"Tecnología al servicio del conocimiento"}
        imagen3={icon3}
        texto3={"Impacto Sostenible"}
      />

      <Proposito
        imagen={imgProposito}
        titulo="NUESTRO PROPÓSITO"
        texto="Guiar a estudiantes y profesionales en la creación de investigaciones de impacto global, utilizando metodologías avanzadas, herramientas tecnológicas y un enfoque en sostenibilidad y los Objetivos de Desarrollo Sostenible (ODS)."
      />

      <Metodologia
        titulo="METODOLOGÍA"
        texto="Un enfoque innovador para investigaciones de alto impacto. Nuestro método combina tecnología, sostenibilidad y personalización:"
        imagenes={imagenesMetodologia}
      />

      {/* Condición para mostrar Nosotros o Nosotros2 según la resolución */}
      {width >= 914 ? (
        <Nosotros titulo="¿QUIENES SOMOS?" subtitulo="IMPACTO" />
      ) : width < 913 ? (
        <Nosotros2 titulo="¿QUIENES SOMOS?" subtitulo="IMPACTO" />
      ) : null}

      <CulturaOrganizacional />
      <Valores />
      <EmailMessage />
      <WhatsappIcon />
      <Footer />
    </>
  );
}

export default Home;
