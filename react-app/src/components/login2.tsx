import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [fade, setFade] = useState(false);
  const [loadedImages, setLoadedImages] = useState([]);

  // Pre-cargar imágenes
  useEffect(() => {
    const loadImages = async () => {
      const loaded = await Promise.all(
        images.map((src) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve(src);
            img.onerror = () => resolve(null);
          });
        })
      );
      setLoadedImages(loaded.filter(Boolean));
    };

    loadImages();
  }, []);

  // Efecto para cambiar imágenes
  useEffect(() => {
    if (loadedImages.length === 0) return;

    const interval = setInterval(() => {
      // Calcular la siguiente imagen
      const nextIndex = (currentImageIndex + 1) % loadedImages.length;
      setNextImageIndex(nextIndex);

      // Iniciar transición
      setFade(true);

      // Cambiar la imagen actual después de la transición
      setTimeout(() => {
        setCurrentImageIndex(nextIndex);
        setFade(false);
      }, 1000); // Duración del fade
    }, 5000); // Intervalo entre cambios

    return () => clearInterval(interval);
  }, [loadedImages, currentImageIndex]);

  if (loadedImages.length === 0) {
    return <div className="loading-screen">Cargando imágenes...</div>;
  }

  return (
    <div>
      {/* Fondo con dos capas superpuestas */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: -1,
          overflow: "hidden",
        }}
      >
        {/* Capa con la imagen actual */}
        <div
          style={{
            backgroundImage: `url(${loadedImages[currentImageIndex]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "absolute",
            width: "100%",
            height: "100%",
            filter: "blur(3px)",
            opacity: fade ? 0 : 1,
            transition: "opacity 1s ease-in-out",
          }}
        />

        {/* Capa con la siguiente imagen */}
        <div
          style={{
            backgroundImage: `url(${loadedImages[nextImageIndex]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "absolute",
            width: "100%",
            height: "100%",
            filter: "blur(3px)",
            opacity: fade ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        />
      </div>

      {/* Contenedor principal */}
      <div className="contenedor-login2">
        <div className="subcontenedor-login2-global">
          {/* Imagen del formulario con dos capas */}
          <div className="contenedor-img-login2">
            {/* Imagen actual */}
            <img
              src={loadedImages[currentImageIndex]}
              alt="imagen-formulario"
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: fade ? 0 : 1,
                transition: "opacity 1s ease-in-out",
              }}
            />

            {/* Siguiente imagen */}
            <img
              src={loadedImages[nextImageIndex]}
              alt="imagen-formulario-next"
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: fade ? 1 : 0,
                transition: "opacity 1s ease-in-out",
              }}
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
