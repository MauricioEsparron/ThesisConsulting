import iconTierra from "../../../img/tierra.png";
import iconBirrete from "../../../img/birrete.png";
import iconRobot from "../../../img/robot.png";
import "../../../css/NuestrosPilares.css";

type Props = {};

function NuestrosPilares({}: Props) {
  return (
    <>
      <div className="main-contenedor-nuestrosPilares">
        <div className="contenedor-titulo-nuestrosPilares">
          <h1 className="titulo-nuestrosPilares">Nuestros Pilares</h1>
        </div>
        <div className="contenedor-bloques-nuestrosPilares">
          <div className="subcontenedor-bloque-nuestrosPilares">
            <div className="contenedor-imagen-nuestrosPilares">
              <img src={iconBirrete} alt="" />
            </div>
            <div className="contenedor-texto-nuestrosPilares">
              <p>Excelencia Académica</p>
            </div>
          </div>
          <div className="subcontenedor-bloque-nuestrosPilares">
            <div className="contenedor-imagen-nuestrosPilares">
              <img src={iconRobot} alt="" />
            </div>
            <div className="contenedor-texto-nuestrosPilares">
              <p>Tecnología al servicio del conocimiento</p>
            </div>
          </div>
          <div className="subcontenedor-bloque-nuestrosPilares">
            <div className="contenedor-imagen-nuestrosPilares">
              <img src={iconTierra} alt="" />
            </div>
            <div className="contenedor-texto-nuestrosPilares">
              <p>Impacto Sostenible</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NuestrosPilares;
