import { motion } from "framer-motion";
import "../../../css/Nosotros.css";

type Props = { titulo: string; subtitulo?: string };

function Nosotros({ titulo, subtitulo }: Props) {
  const abrirFormulario = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new Event("openForm"));
    setTimeout(() => {
      document.getElementById("formulario")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

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
      {/* <motion.div
        className="parent2"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      > */}
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
        <span className="subtitulo-efecto">Estudiantes</span>
      </motion.div>
      <motion.div
        className="div4"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <span className="subtitulo-efecto">Organizaciones</span>
      </motion.div>
      <motion.div
        className="div5"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <span className="subtitulo-efecto">Profesionales</span>
      </motion.div>
      <motion.div
        className="div6"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        onClick={abrirFormulario} // 🔹 Se abre el formulario al hacer clic
        style={{ cursor: "pointer" }} // 🔹 Indica que es interactivo
      >
        <span className="subtitulo-efecto">Contáctanos</span>
      </motion.div>
      {/* </motion.div> */}
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
  subtitulo?: string;
}
export function SubTituloNosotros({ subtitulo }: SubTituloNosotrosProps) {
  if (!subtitulo) return null;

  const [primeraParte, ...resto] = subtitulo.split(" ");
  const segundaParte = resto.join(" ");

  return (
    <h4 className="Nosotros-subtitulo-home">
      <span className="impacto">{primeraParte}</span>{" "}
      <span className="linea">{segundaParte}</span>
    </h4>
  );
}

export default Nosotros;
