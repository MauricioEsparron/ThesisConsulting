import { useState } from "react";
import "../../../../../css/Consultorias.css"; // Incluye tu archivo CSS
import imgPrueba from "../../../../../img/montañas1.webp"; // Imágenes de ejemplo

type Props = {};

const Consultoria = ({}: Props) => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  const toggleMenu = (index: number) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  return (
    <div className="consultoria-container">
      <div className="consultoria-header">
        <h2 className="titulo-consultoria">Consultorías Disponibles</h2>
        <p className="descripcion-consultoria">
          Elija entre las opciones de consultoría disponibles y comience su
          aprendizaje.
        </p>
      </div>

      <div className="consultoria-cards-container">
        {/* Tarjeta de Consultoría */}
        <div className="consultoria-card">
          <div className="opciones-menu">
            <button className="btn-opciones" onClick={() => toggleMenu(0)}>
              ⋮
            </button>
            {activeMenu === 0 && (
              <div className="menu-desplegable">
                <button onClick={() => console.log("Editar")}>Editar</button>
                <button onClick={() => console.log("Eliminar")}>
                  Eliminar
                </button>
              </div>
            )}
          </div>
          <a href="" className="consultoria-link">
            <img
              src={imgPrueba}
              alt="Consultoría"
              className="consultoria-image"
            />
            <div className="consultoria-info">
              <p className="consultoria-title">
                Diagnóstico Inicial y definicion de objetivos
              </p>
              <span className="consultoria-profesor">Ricardo Milian</span>
            </div>
          </a>
        </div>

        {/* Repite la tarjeta para más consultorías */}
        <div className="consultoria-card">
          <a href="" className="consultoria-link">
            <img
              src={imgPrueba}
              alt="Consultoría"
              className="consultoria-image"
            />
            <div className="consultoria-info">
              <p className="consultoria-title">
                Alianzas Estratégicas para impacto social
              </p>
              <span className="consultoria-profesor">Carlos Pérez</span>
            </div>
          </a>
        </div>

        <div className="consultoria-card">
          <a href="" className="consultoria-link">
            <img
              src={imgPrueba}
              alt="Consultoría"
              className="consultoria-image"
            />
            <div className="consultoria-info">
              <p className="consultoria-title">Análisis Avanzado</p>
              <span className="consultoria-profesor">Ana López</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Consultoria;
