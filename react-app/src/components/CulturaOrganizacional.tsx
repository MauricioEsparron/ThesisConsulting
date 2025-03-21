import { motion } from "framer-motion";
import imgCultura from "../img/CulturaOrganizacional.jpg";
import "../css/CulturaOrganizacional.css";

const CulturaOrganizacional = () => {
    return (
        <motion.section 
            className="cultura-container"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
        >
            <motion.div 
                className="cultura-image"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
            >
                <img src={imgCultura} alt="Cultura Organizacional" />
                <motion.div 
                    className="cultura-text-overlay"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    CULTURA ORGANIZACIONAL
                </motion.div>
            </motion.div>
            <motion.div 
                className="cultura-content"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
            >
                <p>
                    En <strong>Thesis Consulting</strong> valoramos la curiosidad, la excelencia y la colaboración. Nuestro equipo
                    multidisciplinario trabaja con pasión para transformar investigaciones académicas en proyectos que generen
                    impacto real y sostenible.
                </p>
                <motion.p 
                    className="cultura-handle" 
                    style={{ textAlign: "center" }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    @LatamBusinessConsulting
                </motion.p>
            </motion.div>
        </motion.section>
    );
}

export default CulturaOrganizacional;
