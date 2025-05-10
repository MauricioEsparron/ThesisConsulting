type Props = {};
import iconRobot from "../../../img/robot.png";
import "../../../css/NuestroEquipo.css";

function NuestroEquipo({}: Props) {
  return (
    <>
      <div className="main-contenedor-nuestroEquipo">
        <div className="contenedor-titulo-nuestroEquipo">
          <h1 className="titulo-nuestroEquipo">Nuestro Equipo</h1>
        </div>
        <div className="contenedor-bloques-nuestroEquipo">
          <div className="subcontenedor-bloque-nuestroEquipo">
            <div className="contenedor-imagen-nuestroEquipo">
              <img src={iconRobot} alt="imgEquipo" className="imagen-equipo" />
            </div>
            <div className="contenedor-texto-nuestroEquipo">
              <p>Dirección General dawdwad wdaw </p>
            </div>
          </div>
          <div className="subcontenedor-bloque-nuestroEquipo">
            <div className="contenedor-imagen-nuestroEquipo">
              <img src={iconRobot} alt=" imgEquipo" className="imagen-equipo" />
            </div>
            <div className="contenedor-texto-nuestroEquipo">
              <p>Dirección General</p>
            </div>
          </div>
          <div className="subcontenedor-bloque-nuestroEquipo">
            <div className="contenedor-imagen-nuestroEquipo">
              <img src={iconRobot} alt="imgEquipo" className="imagen-equipo" />
            </div>
            <div className="contenedor-texto-nuestroEquipo">
              <p>Dirección General dawd awdwad</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NuestroEquipo;
