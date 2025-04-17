import { motion } from "framer-motion";
import "../../../css/Metodologia.css";
import Carrusel2 from "./Carrusel";

type Imagen = { src: string; descripcion: string };

type Props = { titulo: string; texto: string; imagenes: Imagen[] };

function Metodologia({ titulo, texto, imagenes }: Props) {
  return (
    <motion.div
      className="Metodologia"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="Metodologia-contenedor">
        <motion.div
          className="Metodologia-info"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <TituloMetodologia titulo={titulo} />
          <TextoMetodologia texto={texto} />
        </motion.div>
        <motion.div
          className="Metodologia-imagen"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Carrusel2 imagenes={imagenes} />
        </motion.div>
      </div>
    </motion.div>
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
