import { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import Navbar from "../../components/shared/NavBar";
import "../../index.css";
import "../../css/ContactForm.css";
import Pilares from "./components/Pilares";
import icon1 from "../../img/icon_libro.png";
import icon2 from "../../img/icon_computadora.png";
import icon3 from "../../img/icon_impacto.png";
import Proposito from "./components/Proposito";
import imgProposito from "../../img/Aprendizaje Interactivo y Práctico.jpg";
import Metodologia from "./components/Metodologia";
import imgMetodologia1 from "../../img/Aprendizaje Interactivo y Práctico.jpg";
import imgMetodologia2 from "../../img/agencia de Marketing y publicidad.jpg";
import imgMetodologia3 from "../../img/organizaciones.webp";
import Nosotros from "./components/Nosotros";
import CulturaOrganizacional from "./components/CulturaOrganizacional";
import EmailMessage from "./components/EmailMessage";
import WhatsappIcon from "../../components/ui/WhatsappIcon/WhatsappIcon";
import Footer from "../../components/shared/Footer";
import Nosotros2 from "./components/Nosotros2";
import HeaderResponsive from "./components/HeaderResponsive";
import ContactForm from "./components/ContactForm";
import EspecialidadesAcademicas from "../Especialidades/EspecialidadesAcademicas";

const imagenesMetodologia2 = [
  {
    src: imgMetodologia1,
    alt: "Aprendizaje Interactivo y Práctico",
    descripcion: "Desarrollo inicial y definición de objetivos",
  },
  {
    src: imgMetodologia2,
    alt: "Agencia de Marketing y Publicidad",
    descripcion: "Desarrollo de contenidos personalizados",
  },
  {
    src: imgMetodologia3,
    alt: "Publicidad Digital",
    descripcion: "Implementación colaborativa",
  },
];

type Props = {};

function Home({}: Props) {
  const [width, setWidth] = useState(window.innerWidth);
  const formRef = useRef<HTMLFormElement | null>(null); // 🔹 Referencia para el formulario

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Navbar />
      {width >= 914 ? <Header /> : <HeaderResponsive formRef={formRef} />}
      <div id="tailwind-container"></div>
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
        imagenes={imagenesMetodologia2}
      />
       <EspecialidadesAcademicas /> 
      {width >= 914 ? (
        <Nosotros titulo="¿QUIENES SOMOS?" subtitulo="IMPACTO" />
      ) : (
        <Nosotros2 titulo="¿QUIENES SOMOS?" />
      )}
      {width <= 913 && <ContactForm ref={formRef} />} <CulturaOrganizacional />
      <EmailMessage />
      <WhatsappIcon />
      <Footer />
    </>
  );
}

export default Home;
