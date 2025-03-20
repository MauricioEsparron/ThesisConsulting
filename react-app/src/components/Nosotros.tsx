import { motion } from "framer-motion";
import "../css/Nosotros.css";

type Props = { titulo: string; subtitulo: string; imagen: string };

function Nosotros({ titulo, subtitulo, imagen }: Props) {
  return (
    <motion.div
      className="parent"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="div1"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <TituloNosotros titulo={titulo} />
      </motion.div>
      <motion.div
        className="div2"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <SubTituloNosotros subtitulo={subtitulo} />
      </motion.div>
      <motion.div
        className="div3"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        Estudiantes
      </motion.div>
      <motion.div
        className="div4"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        Organizaciones
      </motion.div>
      <motion.div
        className="div5"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        Profesionales
      </motion.div>
      <motion.div
        className="div6"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <ImagenNosotros imagen={imagen} />
      </motion.div>
    </motion.div>
  );
}

interface TituloNosotrosProps {
  titulo: string;
}
export function TituloNosotros({ titulo }: TituloNosotrosProps) {
  return <h2 className="Nosotros-titulo">{titulo}</h2>;
}

interface SubTituloNosotrosProps {
  subtitulo: string;
}
export function SubTituloNosotros({ subtitulo }: SubTituloNosotrosProps) {
  return <h4 className="Nosotros-subtitulo">{subtitulo}</h4>;
}

interface ImagenNosotrosProps {
  imagen: string;
}
export function ImagenNosotros({ imagen }: ImagenNosotrosProps) {
  return (
    <a
      href="#"
      className="boton-sesion-gratuita"
      onClick={(e) => {
        e.preventDefault();
        window.dispatchEvent(new Event("openForm"));
        setTimeout(() => {
          document.getElementById("formulario")?.scrollIntoView({
            behavior: "smooth",
          });
        }, 100);
      }}
    >
      <img className="Nosotros-imagen" src={imagen} alt="imagen de prueba" />
    </a>
  );
}

export default Nosotros;
