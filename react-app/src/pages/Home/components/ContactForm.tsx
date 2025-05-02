import { forwardRef } from "react";
import "../../../index.css";
import "../../../css/ContactForm.css";

// 🛠 Definir correctamente la referencia y los props
const ContactForm = forwardRef<
  HTMLFormElement,
  React.HTMLProps<HTMLFormElement>
>((props, ref) => {
  return (
    <div className="form-container form-page">
      <form className="form" ref={ref} id="contact-form" {...props}>
        <h2>Contáctanos</h2>
        <div className="form-group">
          <label>Nombre Completo</label>
          <input type="text" placeholder="Tu nombre" required />
        </div>

        <div className="form-group-row">
          <div className="form-group">
            <label>DNI</label>
            <input type="text" placeholder="DNI" required />
          </div>
          <div className="form-group">
            <label>Teléfono</label>
            <input type="text" placeholder="Teléfono" required />
          </div>
        </div>

        <div className="form-group">
          <label>Nombre de la Institución</label>
          <input type="text" placeholder="Institución" required />
        </div>

        <div className="form-group">
          <label>Correo Electrónico</label>
          <input type="email" placeholder="Correo" required />
        </div>

        <div className="form-group">
          <label>Mensaje</label>
          <textarea placeholder="Escribe tu mensaje aquí"></textarea>
        </div>

        <div className="form-group-checkbox">
          <input type="checkbox" required />
          <label>Acepto los Términos y Condiciones</label>
        </div>

        <div className="form-group-checkbox">
          <input type="checkbox" />
          <label>Autorizo el uso de mis datos</label>
        </div>

        <button type="submit" className="submit-button">
          Enviar
        </button>
      </form>
    </div>
  );
});

export default ContactForm;
