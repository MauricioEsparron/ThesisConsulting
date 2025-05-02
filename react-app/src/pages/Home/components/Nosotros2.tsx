import { motion } from "framer-motion";
import "../../../css/Carrusel.css";
import "../../../css/Nosotros2.css";

type Props = { titulo: string };

function Nosotros2({ titulo }: Props) {
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
      className="parentNosotros2_1"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="Ndiv1"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <TituloNosotros titulo={titulo} />
      </motion.div>
      <motion.div
        className="parentNosotros2_2"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="Ndiv3"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <span className="subtitulo2-efecto">Estudiantes</span>
        </motion.div>
        <motion.div
          className="Ndiv4"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <span className="subtitulo2-efecto">Organizaciones</span>
        </motion.div>
        <motion.div
          className="Ndiv5"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <span className="subtitulo2-efecto">Profesionales</span>
        </motion.div>
        <motion.div
          className="Ndiv6"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          onClick={abrirFormulario} // 🔹 Se abre el formulario al hacer clic
          style={{ cursor: "pointer" }} // 🔹 Indica que es interactivo
        >
          <span id="enlace-to-form-nosotros2" className="subtitulo2-efecto">
            <a
              href="#"
              className="boton-sesion-gratuita"
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new Event("openForm"));
                setTimeout(() => {
                  const formElement =
                    document.getElementById("formulario") ||
                    document.getElementById("contact-form");
                  formElement?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
            >
              Contáctanos
            </a>
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

interface TituloNosotrosProps {
  titulo: string;
}
export function TituloNosotros({ titulo }: TituloNosotrosProps) {
  return <h2 className="Nosotros2-titulo">{titulo}</h2>;
}

export default Nosotros2;
