import desc0857 from "../../img/DSC_0857.png";
import "../../css/EspecialidadesAcademicas.css";
import desc0477 from "../../img/DSC_0857.png";
import iconConsult from "../../img/icons/icon_consult.png"
const EspecialidadesAcademicas: React.FC = () => {
  return (
    <section className="informacion-section">
      <div className="informacion-container">
        <div className="left-panel">
          <div className="imagen-contenedores">
            <img src={desc0477} alt="Contenedores" />
          </div>
        </div>

        <div className="right-panel">
          <div className="title-section">
            <div className="titulo-con-banda">
              <div className="banda-roja"></div>
              <h2>NUESTRAS ESPECIALIDADES EN CONSULTORÍA ACADÉMICA</h2>
            </div>
          </div>

          <div className="bottom-content">
            {/* Second image */}
            <div className="imagen-cajas-container">
              <div className="imagen-cajas">
                <img src={desc0857} alt="Cajas" />
              </div>
            </div>

            <div className="description-section">
              <div className="inner-description">

                <ul className="list-academy">
                  <li className="item-academy">
                    <img src={iconConsult} alt="icon  " />
                    <p> Asesoría en tesis con enfoque ODS.</p>
                  </li>
                  <li className="item-academy">
                    <img src={iconConsult} alt="icon  " />
                    <p> Capacitación en herramientas avanzadas para tus proyectos. </p>
                  </li>
                  <li className="item-academy">
                    <img src={iconConsult} alt="icon  " />
                    <p>Capacitación en herramientas avanzadas</p>
                  </li>
                  <li className="item-academy">
                    <img src={iconConsult} alt="icon  " />
                    <p>Alianzas estratégicas para impacto social</p>
                  </li>
                </ul>

                {/* <div className="button-container">
                  <button className="btn-contacto">Contáctanos</button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EspecialidadesAcademicas;
