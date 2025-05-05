
import "../../../../../css/Configuracion.css";

type Props = {};

function Configuracion({}: Props) {
  return (
    <>
      <div className="main-contenedor-configuracion">
        <div>
          <div className="configuracion-header">
            <h2 className="title-configuracion">Menú de opciones</h2>
          </div>
          <form className="form-configuracion">
            <h2 className="titulo-form-configuracion">
              Actualizar información personal
            </h2>
            <div className="form-group">
              <label>Nombre</label>
              <input type="text" placeholder="Nombre" required />
            </div>
            <div className="form-group">
              <label>Apellido</label>
              <input type="text" placeholder="Apellido" required />
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
              <label>Email</label>
              <input type="text" placeholder="Email" required />
            </div>

            <div className="form-group">
              <label>Direccion</label>
              <input type="email" placeholder="Direccion" required />
            </div>

            <button type="submit" className="submit-button">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Configuracion;
