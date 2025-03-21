import { motion } from "framer-motion";
import "../css/EmailMessage.css";

const EmailMessage = () => {
    return (
        <motion.section 
            className="email-message-container"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <motion.div 
                className="email-overlay"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <h2 className="email-title">¡Transforma <br></br>tu proyecto!</h2>
                <p className="email-text">Escribe tu gmail:</p>
                <motion.input 
                    type="email" 
                    placeholder="example@gmail.com" 
                    className="email-input"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                />
                <motion.button 
                    className="email-button"
                    whileHover={{ scale: 1.1, backgroundColor: "#ffcc00" }}
                    transition={{ duration: 0.3 }}
                >
                    Enviar
                </motion.button>
                <motion.p 
                    className="email-whatsapp"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    o Contáctanos por WhatsApp!
                </motion.p>
            </motion.div>
        </motion.section>
    );
};

export default EmailMessage;