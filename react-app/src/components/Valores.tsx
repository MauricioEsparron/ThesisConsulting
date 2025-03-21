import { motion } from "framer-motion";
import imgEtica from "../img/Etica.jpg";
import imgInnovacion from "../img/Innovacion.jpg";
import imgCompromiso from "../img/Compromiso.jpg";
import "../css/Valores.css";

const Valores = () => {
  return (
    <section className="valores-container">
      <h2 className="valores-title">NUESTROS VALORES</h2>
      <div className="valores-grid">
        {[{ img: imgEtica, text: "Ética y originalidad" },
          { img: imgInnovacion, text: "Innovación aplicada" },
          { img: imgCompromiso, text: "Compromiso con los ODS" }].map((valor, index) => (
          <motion.div 
            key={index} 
            className="valores-item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.1 }}
  
          >
            <motion.img 
              src={valor.img} 
              alt={valor.text} 
              className="valores-img"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
            <motion.div 
              className="valores-text"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {valor.text}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Valores;