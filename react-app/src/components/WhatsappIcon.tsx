import { useState } from "react";
import imgWhatsapp from "../img/whatsapp.png";
import "../css/WhatsappFloatIcon.css"

const WhatsappIcon = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const number = "51936956726";
    const url = `https://wa.me/${number}`;

    return (
        <>
            <div className="whatsapp-container">
                <div className="whatsapp-float" onClick={() => setModalOpen(true)}>
                    <img src={imgWhatsapp} alt="WhatsApp" />
                </div>

                {modalOpen && (
                    <div className="whatsapp-bubble">
                        <button className="close-btn" onClick={() => setModalOpen(false)}>✖</button>
                        <p>¿Quieres enviar un mensaje?</p>
                        <button onClick={() => window.open(url, "_blank")} className="send-btn">Enviar mensaje</button>
                    </div>
                )}
            </div>
        </>
    );
};

export default WhatsappIcon;
