import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "../../../css/login.css";
import img1 from "../../../img/montañas1.webp";
import img2 from "../../../img/montañas2.webp";
import img3 from "../../../img/montañas3.webp";
import img4 from "../../../img/montañas4.webp";
import img5 from "../../../img/montañas5.webp";
import img6 from "../../../img/montañas6.webp";
import axios from "axios"; // << AÑADIMOS AXIOS

const images = [img1, img2, img3, img4, img5, img6];

// API URL que conecta a tu backend
const API_URL = "http://localhost:8080/dashboard/api/v1/auth";

const Login = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [username, setUsername] = useState(""); // << CAPTURAMOS USUARIO
  const [password, setPassword] = useState(""); // << CAPTURAMOS PASSWORD
  const [loading, setLoading] = useState(false); // << Indicador de carga
  const [error, setError] = useState(""); // << Para mostrar errores

  const changeImage = (direction: "prev" | "next") => {
    if (direction === "next") {
      setCurrentImage((prev) => (prev + 1) % images.length);
    } else {
      setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  // Función para manejar el login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(`${API_URL}/login`, {
        username,
        password,
      });

      const { token } = response.data; // Asumimos que backend devuelve { token: "..." }

      // Guardar el token en localStorage para futuras peticiones
      localStorage.setItem("token", token);

      // Redireccionar o hacer algo más
      window.location.href = "/dashboard"; // <-- CAMBIA si quieres ir a otra página
    } catch (err: any) {
      console.error(err);
      setError("Credenciales inválidas. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Fondo con efecto blur */}
      <div
        className="imagen-fondo-login2"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          filter: "blur(2px)",
          zIndex: -1,
        }}
      ></div>

      {/* Contenedor principal */}
      <div className="contenedor-login2">
        <div className="subcontenedor-login2-global">
          {/* Contenedor de imagen con flechas */}
          <div className="contenedor-img-login2">
            <button
              className="carrusel-button left"
              onClick={() => changeImage("prev")}
              aria-label="Imagen anterior"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <img
              src={images[currentImage]}
              alt="imagen-formulario"
              className="imagen-formulario"
            />
            <button
              className="carrusel-button right"
              onClick={() => changeImage("next")}
              aria-label="Siguiente imagen"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>

          {/* Formulario de login */}
          <div className="subcontenedor-login2">
            <div className="contendor_titulo-login2">
              <h1>Welcome !</h1>
            </div>
            <form className="contenedor-form-login2" onSubmit={handleLogin}>
              <div className="contenedor-inputs-login2">
                <div className="form-group-login2">
                  <div className="contenedor-input-login2">
                    <FontAwesomeIcon icon={faUser} className="icono-input" />
                    <input
                      type="text"
                      placeholder="@username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="form-group-login2">
                  <div className="contenedor-input-login2">
                    <FontAwesomeIcon icon={faLock} className="icono-input" />
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {error && (
                  <div
                    className="error-message"
                    style={{
                      color: "red",
                      textAlign: "center",
                      marginBottom: "10px",
                    }}
                  >
                    {error}
                  </div>
                )}

                <div className="contenedor-options-login2">
                  <div className="contenedor-reset-login2">
                    <a href="#">¿Olvidaste tu contraseña?</a>
                  </div>
                  <div className="contenedor-button-login2">
                    <button
                      type="submit"
                      className="submit-button-login2"
                      disabled={loading}
                    >
                      {loading ? "Cargando..." : "Login"}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
