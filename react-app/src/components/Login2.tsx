import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import "../css/login2.css";

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
  const [fade, setFade] = useState(false);

  // Cambia la imagen cada 5 segundos con efecto de fade
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // Activamos fade-out
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setFade(false); // Activamos fade-in
      }, 1); // 1.5s para la transición
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* 🔹 Fondo con transición suave */}
      <div
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
          filter: "blur(3px)",
          transition: "opacity 1.5s ease-in-out",
          opacity: fade ? 0 : 1,
          zIndex: -1,
        }}
      ></div>

      {/* Contenedor principal */}
      <div className="contenedor-login2">
        <div className="subcontenedor-login2-global">
          {/* 🔹 Imagen del formulario con efecto de fade */}
          <div className="contenedor-img-login2">
            <img
              src={images[currentImage]}
              alt="imagen-formulario"
              className={`fade-image ${fade ? "fade-out" : "fade-in"}`}
            />
          </div>

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
