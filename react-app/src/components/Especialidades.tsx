import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "../css/Especialidades.css";
import asesoria1 from "../img/asesoria.jpg";
import asesoria2 from "../img/asesoria 2.jpg";
import video3 from "../img/video3.mp4";
import header2 from "../img/header2.jpg";
import Navbar from "./NavBar";

const Especialidades: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-out",
      once: true,
      mirror: false,
      offset: 150
    });
  
    const animatedElements = document.querySelectorAll(".slide-in-left, .slide-in-right");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            requestAnimationFrame(() => {
              entry.target.classList.add("active");
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: "50px 0px"
      }
    );
  
    animatedElements.forEach((el) => observer.observe(el));
  
    const cards = document.querySelectorAll(".especialidad-intercalada");
    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        const icon = card.querySelector(".icono") as HTMLElement;
        if (icon) {
          icon.style.transform = "rotate(15deg) scale(1.1)";
          icon.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.2)";
        }
      });

      card.addEventListener("mouseleave", () => {
        const icon = card.querySelector(".icono") as HTMLElement;
        if (icon) {
          icon.style.transform = "rotate(0) scale(1)";
          icon.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)";
        }
      });
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="especialidades-page" style={{ overflowX: "hidden" }}>
        <header className="especialidades-header">
          <div className="video-background-especialidades">
            <video autoPlay muted loop playsInline>
              <source src={video3} type="video/mp4" />
              <img src={header2} alt="Fondo alternativo" />
            </video>
            <div className="video-overlay-especialidades"></div>
          </div>
          <div className="header-content">
            <h1>Nuestras Especialidades</h1>
            <p>Servicios diseñados para potenciar tu impacto social y académico</p>
          </div>
        </header>

        <main className="especialidades-container">
          {especialidadesData.map((especialidad, index) => (
            <section
              key={index}
              className={`especialidad-intercalada ${index % 2 !== 0 ? "izquierda" : ""} slide-in-${index % 2 === 0 ? "left" : "right"}`}
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
    </>

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