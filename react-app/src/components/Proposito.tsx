import { motion } from "framer-motion";
import "../css/Proposito.css";

type Props = { imagen: string; titulo: string; texto: string };

function Proposito({ imagen, titulo, texto }: Props) {
  return (
    <motion.div
      className="Proposito"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="Proposito-contenedor background">
        <motion.div
          className="Proposito-imagen-contenedor"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <ImagenProposito imagen={imagen} />
        </motion.div>
        <motion.div
          className="Proposito-info"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <TituloProposito titulo={titulo} />
          <TextoProposito texto={texto} />
        </motion.div>
      </div>
      <motion.div
        className="contenedor-opciones"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="Proposito-opciones overlay">
          <OpcionProposito opcion="+5 AÑOS DE EXPERIENCIA" />
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
            AGENDA UNA SESIÓN GRATUITA
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

interface ImagenPropositoProps {
  imagen: string;
}
export function ImagenProposito({ imagen }: ImagenPropositoProps) {
  return (
    <img className="Proposito-imagen" src={imagen} alt="imagen de prueba" />
  );
}

interface TituloPropositoProps {
  titulo: string;
}
export function TituloProposito({ titulo }: TituloPropositoProps) {
  return <h2 className="Proposito-titulo">{titulo}</h2>;
}

interface TextoPropositoProps {
  texto: string;
}
export function TextoProposito({ texto }: TextoPropositoProps) {
  return <p className="Proposito-texto">{texto}</p>;
}

interface OpcionPropositoProps {
  opcion: string;
}
export function OpcionProposito({ opcion }: OpcionPropositoProps) {
  return <p className="Proposito-opcion">{opcion}</p>;
}

export default Proposito;
