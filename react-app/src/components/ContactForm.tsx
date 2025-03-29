import { forwardRef } from "react";
import "../index.css";
import "../css/ContactForm.css";

// 🛠 Definir correctamente la referencia y los props
const ContactForm = forwardRef<
  HTMLFormElement,
  React.HTMLProps<HTMLFormElement>
>((props, ref) => {
  return (
    <div className="form-container">
      <form className="form" ref={ref} id="contact-form" {...props}>
        <h2>Contáctanos</h2>
        <div className="form-group">
          <label htmlFor="nombre">Nombre Completo</label>
          <input type="text" id="nombre" name="nombre" required />
        </div>
        <div className="form-group-row">
          <div className="form-group">
            <label htmlFor="dni">DNI</label>
            <input type="text" id="dni" name="dni" required />
          </div>
          <div className="form-group">
            <label htmlFor="telefono">Teléfono</label>
            <input type="tel" id="telefono" name="telefono" required />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="institucion">Nombre de la Institución</label>
          <input type="text" id="institucion" name="institucion" required />
        </div>
        <div className="form-group">
          <label htmlFor="correo">Correo Electrónico</label>
          <input type="email" id="correo" name="correo" required />
        </div>
        <div className="form-group">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea id="mensaje" name="mensaje" required></textarea>
        </div>
        <div className="form-group-checkbox">
          <input type="checkbox" id="terminos" name="terminos" required />
          <label htmlFor="terminos">Acepto los Términos y Condiciones</label>
        </div>
        <div className="form-group-checkbox">
          <input type="checkbox" id="datos" name="datos" />
          <label htmlFor="datos">Autorizo el uso de mis datos</label>
        </div>
        <button type="submit" className="submit-button">
          Enviar
        </button>
      </form>
    </div>
  );
});

export default ContactForm;
