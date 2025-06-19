import React from "react";
import "../../css/EspecialidadesAcademicas.css";
import iconConsult from "../../img/icons/icon_consult.png";
import consult1 from "../../img/ConsultoriaAcademica1.jpg";
import consult2 from "../../img/ConsultoriaAcademica2.jpg";

// Datos de las especialidades para mejor mantenabilidad
const especialidades = [
  {
    id: 1,
    texto: "Asesoría en tesis con enfoque ODS"
  },
  {
    id: 2,
    texto: "Capacitación en herramientas avanzadas para tus proyectos"
  },
  {
    id: 3,
    texto: "Metodologías de investigación científica"
  },
  {
    id: 4,
    texto: "Alianzas estratégicas para impacto social"
  }
];

const EspecialidadesAcademicas: React.FC = () => {
  return (
    <section className="informacion-section" aria-labelledby="especialidades-title">
      <div className="informacion-container">
        {/* Panel izquierdo - Imagen principal */}
        <div className="left-panel">
          <div className="imagen-contenedores">
            <img 
              src={consult1} 
              alt="Equipo de consultoría académica trabajando en proyectos innovadores" 
              loading="lazy"
            />
          </div>
        </div>

        {/* Panel derecho - Contenido */}
        <div className="right-panel">
          {/* Sección de título */}
          <header className="title-section">
            <div className="titulo-con-banda">
              <div className="banda-roja" aria-hidden="true"></div>
              <h2 id="especialidades-title">
                NUESTRAS ESPECIALIDADES EN CONSULTORÍA ACADÉMICA
              </h2>
            </div>
          </header>

          {/* Contenido inferior */}
          <div className="bottom-content">
            {/* Segunda imagen */}
            <div className="imagen-cajas-container">
              <div className="imagen-cajas">
                <img 
                  src={consult2} 
                  alt="Herramientas y recursos de consultoría académica" 
                  loading="lazy"
                />
              </div>
            </div>

            {/* Sección de descripción */}
            <div className="description-section">
              <div className="inner-description">
                <ul className="list-academy" role="list">
                  {especialidades.map((especialidad) => (
                    <li key={especialidad.id} className="item-academy" role="listitem">
                      <img 
                        src={iconConsult} 
                        alt="" 
                        aria-hidden="true"
                        loading="lazy"
                      />
                      <p>{especialidad.texto}</p>
                    </li>
                  ))}
                </ul>

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EspecialidadesAcademicas;