import React, { useState, useEffect } from "react";
import Navbar from "../../components/shared/NavBar";
import Header from "./components/Header";
import HeaderResponsive from "./components/HeaderResponsive";
import "../../index.css";
import "../../css/ContactForm.css";

import icon1 from "../../img/icon_libro.png";
import icon2 from "../../img/icon_computadora.png";
import icon3 from "../../img/icon_impacto.png";
import imgProposito from "../../img/Aprendizaje Interactivo y Práctico.jpg";
import imgMetodologia1 from "../../img/Aprendizaje Interactivo y Práctico.jpg";
import imgMetodologia2 from "../../img/agencia de Marketing y publicidad.jpg";
import imgMetodologia3 from "../../img/organizaciones.webp";

import Pilares from "./components/Pilares";
import Proposito from "./components/Proposito";
import Metodologia from "./components/Metodologia";
import CulturaOrganizacional from "./components/CulturaOrganizacional";
import EmailMessage from "./components/EmailMessage";
import WhatsappIcon from "../../components/ui/WhatsappIcon/WhatsappIcon";
import Footer from "../../components/shared/Footer";

// Lazy loading para componentes no críticos
const Nosotros = React.lazy(() => import("./components/Nosotros"));
const Nosotros2 = React.lazy(() => import("./components/Nosotros2"));
const ContactForm = React.lazy(() => import("./components/ContactForm"));
const EspecialidadesAcademicas = React.lazy(
  () => import("../Especialidades/EspecialidadesAcademicas")
);

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

function Home() {
  const [width, setWidth] = useState(window.innerWidth);
  const formRef = React.useRef<HTMLFormElement | null>(null);

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
        texto="Guiar a estudiantes y profesionales en la creación de investigaciones de impacto global..."
      />
      <Metodologia
        titulo="METODOLOGÍA"
        texto="Un enfoque innovador para investigaciones de alto impacto..."
        imagenes={imagenesMetodologia2}
      />
      <React.Suspense fallback={null}>
        <EspecialidadesAcademicas />
        {width >= 991 ? (
          <Nosotros titulo="¿QUIENES SOMOS?" subtitulo="IMPACTO ――――" />
        ) : (
          <Nosotros2 titulo="¿QUIENES SOMOS?" />
        )}
        {width <= 913 && <ContactForm ref={formRef} />}
      </React.Suspense>
      <CulturaOrganizacional />
      <EmailMessage />
      <WhatsappIcon />
      <Footer />
    </>
  );
}

export default Home;
