import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "../css/login.css";

// Importamos las imágenes
import img1 from "../img/montañas1.jpg";
import img2 from "../img/montañas2.jpg";
import img3 from "../img/montañas3.jpg";
import img4 from "../img/montañas4.jpg";
import img5 from "../img/montañas5.jpg";
import img6 from "../img/montañas6.jpg";

const images = [img1, img2, img3, img4, img5, img6];

const Login2 = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Función simplificada para cambio inmediato
  const changeImage = (direction: "prev" | "next") => {
    if (direction === "next") {
      setCurrentImage((prev) => (prev + 1) % images.length);
    } else {
      setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <div>
      {/* Fondo con efecto blur - sin transición */}
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
            {/* Flecha izquierda */}
            <button
              className="carrusel-button left"
              onClick={() => changeImage("prev")}
              aria-label="Imagen anterior"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            {/* Imagen del formulario - sin clases de fade */}
            <img
              src={images[currentImage]}
              alt="imagen-formulario"
              className="imagen-formulario"
            />

            {/* Flecha derecha */}
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
            <div className="contenedor-form-login2">
              <div className="contenedor-inputs-login2">
                <div className="form-group-login2">
                  <div className="contenedor-input-login2">
                    <FontAwesomeIcon icon={faUser} className="icono-input" />
                    <input type="text" placeholder="@username" required />
                  </div>
                </div>
                <div className="form-group-login2">
                  <div className="contenedor-input-login2">
                    <FontAwesomeIcon icon={faLock} className="icono-input" />
                    <input type="password" placeholder="Password" required />
                  </div>
                </div>
                <div className="contenedor-options-login2">
                  <div className="contenedor-reset-login2">
                    <a href="#">Olvidaste tu contraseña?</a>
                  </div>
                  <div className="contenedor-button-login2">
                    <button type="submit" className="submit-button-login2">
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login2;
