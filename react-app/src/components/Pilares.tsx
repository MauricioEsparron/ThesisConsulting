import "../css/Pilares.css";
type Props = {
  imagen1: string;
  imagen2: string;
  imagen3: string;
  texto1: string;
  texto2: string;
  texto3: string;
};

function Pilares({ imagen1, imagen2, imagen3, texto1, texto2, texto3 }: Props) {
  return (
    <div className="Pilares">
      <div className="Pilares-contenedor Pilar-contenedor1">
        <ImagenPilares imagen={imagen1} />
        <TextoPilares texto={texto1} />
      </div>
      <div className="Pilares-contenedor Pilar-contenedor2">
        <ImagenPilares imagen={imagen2} />
        <TextoPilares texto={texto2} />
      </div>
      <div className="Pilares-contenedor Pilar-contenedor3">
        <ImagenPilares imagen={imagen3} />
        <TextoPilares texto={texto3} />
      </div>
    </div>
  );
}

interface ImagenPilaresProps {
  imagen: string;
}
export function ImagenPilares({ imagen }: ImagenPilaresProps) {
  return <img className="Pilares-imagen" src={imagen} alt="imagen de prueba" />;
}

interface TextoPilaresProps {
  texto: string;
}

export function TextoPilares({ texto }: TextoPilaresProps) {
  return <p className="Pilares-texto">{texto}</p>;
}

export default Pilares;
