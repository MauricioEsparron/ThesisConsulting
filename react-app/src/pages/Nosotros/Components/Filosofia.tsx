type Props = {};
import "../../../css/Filosofia.css";
import imgFilosofia from "../../../img/profesionales.webp";
function Filosofia({}: Props) {
  return (
    <>
      <div className="contenedor-filosofia">
        <div className="subcontenedor-filosofia-info">
          <div className="contenedor-titulo">
            <h1>QUIENES SOMOS?</h1>
          </div>
          <div className="contenedor-texto">
            <p>
              Somos la unidad de Latam Business Consulting especializada en
              asesorar investigaciones académicas con un enfoque en
              sostenibilidad, innovación y excelencia. Acompañamos a estudiantes
              y profesionales en cada etapa del proceso de tesis, asegurando
              resultados originales, relevantes y alineados con los desafíos
              globales.
            </p>
          </div>
        </div>
        <div className="subcontenedor-filosofia-imagen">
          <div className="contenedor-imagen">
            <img src={imgFilosofia} alt="imgFilosofia" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Filosofia;
