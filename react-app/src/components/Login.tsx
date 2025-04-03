import "../css/Login.css";

type Props = {};

function Login({}: Props) {
  return (
    <div className="contenedor-login">
      <div className="sub-contenedor-login">
        <div className="contenedor-titulo-login">
          <h1>Login</h1>
        </div>
        <div>
          <img src="" alt="" />
        </div>
        <div className="contenedor-form-login">
          <div className="form-group-login">
            <div className="contenedor-label-login">
              <label>Usuario</label>
            </div>
            <div className="contenedor-input-login">
              <input type="text" placeholder="Usuario" required />
            </div>
          </div>

          <div className="form-group-login">
            <div className="contenedor-label-login">
              <label>Contraseña</label>
            </div>
            <div className="contenedor-input-login">
              <input type="password" placeholder="Contraseña" required />
            </div>
          </div>
          <div className="contenedor-options-login">
            <div className="contenedor-checkbox-login">
              <input type="checkbox" />
              <label>Recordar contraseña</label>
            </div>
            <div className="contenedor-reset-login">
              <a href="#">Olvidaste tu contraseña?</a>
            </div>
          </div>
          <div className="contenedor-button-login">
            <button type="submit" className="submit-button-login">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
