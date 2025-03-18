import Carrusel from "./Carrusel";
import "../css/Metodologia.css";

type Props = { titulo: string; texto: string; imagenes: string[] };

function Metodologia({ titulo, texto, imagenes }: Props) {
  return (
    <div className="Metodologia">
      <div className="Metodologia-contenedor">
        <div className="Metodologia-info">
          <TituloMetodologia titulo={titulo} />
          <TextoMetodologia texto={texto} />
        </div>
        <div className="Metodologia-imagen">
          <Carrusel imagenes={imagenes} />
        </div>
      </div>
    </div>
  );
}

interface TextoMetodologiaProps {
  texto: string;
}

export function TextoMetodologia({ texto }: TextoMetodologiaProps) {
  return <p className="Metodologia-texto">{texto}</p>;
}

interface TituloMetodologiaProps {
  titulo: string;
}

export function TituloMetodologia({ titulo }: TituloMetodologiaProps) {
  return <h2 className="Metodologia-titulo">{titulo}</h2>;
}

export default Metodologia;
