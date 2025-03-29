import { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import Navbar from "../components/NavBar";
import "../index.css";
import "../css/ContactForm.css";
import Pilares from "../components/Pilares";
import icon1 from "../img/icon_libro.png";
import icon2 from "../img/icon_computadora.png";
import icon3 from "../img/icon_impacto.png";
import Proposito from "../components/Proposito";
import imgProposito from "../img/Aprendizaje Interactivo y Práctico.jpg";
import Metodologia from "../components/Metodologia";
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
import HeaderResponsive from "../components/HeaderResponsive";
import ContactForm from "../components/ContactForm";

const imagenesMetodologia = [imgMetodologia1, imgMetodologia2, imgMetodologia3];

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
      {/* 🔹 Pasamos `formRef` como prop */}
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
      {width >= 914 ? (
        <Nosotros titulo="¿QUIENES SOMOS?" subtitulo="IMPACTO" />
      ) : (
        <Nosotros2 titulo="¿QUIENES SOMOS?" subtitulo="IMPACTO" />
      )}
      {width <= 913 && <ContactForm ref={formRef} />}{" "}
      {/* 🔹 Referencia en ContactForm */}
      <CulturaOrganizacional />
      <Valores />
      <EmailMessage />
      <WhatsappIcon />
      <Footer />
    </>
  );
}

export default Home;
