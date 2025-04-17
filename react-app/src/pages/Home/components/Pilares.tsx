import { motion } from "framer-motion";
import "../../../css/Pilares.css";

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
      <motion.div
        className="Pilares-contenedor Pilar-contenedor1"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <ImagenPilares imagen={imagen1} />
        <TextoPilares texto={texto1} />
      </motion.div>

      <motion.div
        className="Pilares-contenedor Pilar-contenedor2"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <ImagenPilares imagen={imagen2} />
        <TextoPilares texto={texto2} />
      </motion.div>

      <motion.div
        className="Pilares-contenedor Pilar-contenedor3"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <ImagenPilares imagen={imagen3} />
        <TextoPilares texto={texto3} />
      </motion.div>
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
