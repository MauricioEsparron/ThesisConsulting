import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "../css/Especialidades.css";
import asesoria2 from "../img/asesoria 2.jpg";
import asesoria1 from "../img/asesoria.jpg";
import video3 from "../img/video3.mp4";
import header2 from "../img/header2.jpg";
import NavBar from "./NavBar";

const Especialidades: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <NavBar />
      <div className="esp-page-wrapper">
        <header className="esp-header">
          <div className="esp-video-bg">
            <video autoPlay muted loop playsInline className="esp-video">
              <source src={video3} type="video/mp4" />
              <img src={header2} alt="Fondo alternativo" />
            </video>
            <div className="esp-overlay"></div>
          </div>

          <div className="esp-header-content">
            <div className="esp-text-center">
              <h1 className="esp-title">Nuestras Especialidades</h1>
              <p className="esp-subtitle">
                Servicios diseñados para potenciar tu impacto social y académico
              </p>
            </div>
          </div>
        </header>

        <main className="especialidades-container">
          {especialidadesData.map((especialidad, index) => (
            <section
              key={index}
              className={`especialidad-intercalada ${
                index % 2 !== 0 ? "izquierda" : ""
              } ${index % 2 === 0 ? "slide-in-left" : "slide-in-right"}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="imagen-local">
                <img src={especialidad.imagen} alt={especialidad.titulo} />
              </div>
              <div className="especialidad-content">
                <div className="icono">
                  <i className={especialidad.icono}></i>
                </div>
                <div className="texto">
                  <h2>{especialidad.titulo}</h2>
                  <p>{especialidad.descripcion}</p>
                </div>
              </div>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
};

const especialidadesData = [
  {
    imagen: asesoria1,
    icono: "fas fa-book-open",
    titulo: "Asesoría en tesis con enfoque ODS",
    descripcion:
      "Te guiamos en el desarrollo de tu investigación académica alineada con los Objetivos de Desarrollo Sostenible de la ONU, asegurando que tu trabajo contribuya a resolver problemas globales mientras cumples con los requisitos académicos.",
  },
  {
    imagen: asesoria2,
    icono: "fas fa-tools",
    titulo: "Capacitación en herramientas avanzadas para tus proyectos",
    descripcion:
      "Domina las herramientas tecnológicas más innovadoras que potenciarán tus proyectos. Desde gestión de datos hasta visualización de información, te capacitamos para que lleves tus ideas al siguiente nivel.",
  },
  {
    imagen: asesoria1,
    icono: "fas fa-laptop-code",
    titulo: "Capacitación en herramientas avanzadas",
    descripcion:
      "Programas intensivos para el dominio de software especializado, lenguajes de programación y plataformas colaborativas. Ideal para investigadores y profesionales que buscan optimizar sus procesos.",
  },
  {
    imagen: asesoria2,
    icono: "fas fa-handshake",
    titulo: "Alianzas estratégicas para impacto social",
    descripcion:
      "Conectamos tu organización con redes de colaboración que amplificarán tu impacto. Facilitamos alianzas entre sector público, privado y academia para proyectos con propósito social.",
  },
];

export default Especialidades;
