import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

// Importamos las imágenes
import img1 from "../img/montañas1.webp";
import img2 from "../img/montañas2.webp";
import img3 from "../img/montañas3.webp";
import img4 from "../img/montañas4.webp";
import img5 from "../img/montañas5.webp";
import img6 from "../img/montañas6.webp";

const images = [img1, img2, img3, img4, img5, img6];

const Login2 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [fade, setFade] = useState(false);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  // Pre-cargar imágenes
  useEffect(() => {
    const loadImages = async () => {
      const loaded = await Promise.all(
        images.map((src) => {
          return new Promise<string | null>((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve(src);
            img.onerror = () => resolve(null);
          });
        })
      );
      setLoadedImages(loaded.filter((img): img is string => img !== null));
    };

    loadImages();
  }, []);

  // Efecto para cambiar imágenes
  useEffect(() => {
    if (loadedImages.length === 0) return;

    const interval = setInterval(() => {
      const nextIndex = (currentImageIndex + 1) % loadedImages.length;
      setNextImageIndex(nextIndex);
      setFade(true);

      setTimeout(() => {
        setCurrentImageIndex(nextIndex);
        setFade(false);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, [loadedImages, currentImageIndex]);

  if (loadedImages.length === 0) {
    return (
      <div className="tw-flex tw-items-center tw-justify-center tw-h-screen">
        Cargando imágenes...
      </div>
    );
  }

  return (
    <div id="tailwind-container" className="tw-relative tw-min-h-screen">
      {/* Fondo con dos capas superpuestas */}
      <div className="tw-absolute tw-inset-0 tw-z-[-1] tw-overflow-hidden">
        {/* Capa con la imagen actual */}
        <div
          className={`tw-absolute tw-inset-0 tw-bg-cover tw-bg-center tw-filter tw-blur-sm ${
            fade ? "tw-opacity-0" : "tw-opacity-100"
          } tw-transition-opacity tw-duration-1000 tw-ease-in-out`}
          style={{ backgroundImage: `url(${loadedImages[currentImageIndex]})` }}
        />

        {/* Capa con la siguiente imagen */}
        <div
          className={`tw-absolute tw-inset-0 tw-bg-cover tw-bg-center tw-filter tw-blur-sm ${
            fade ? "tw-opacity-100" : "tw-opacity-0"
          } tw-transition-opacity tw-duration-1000 tw-ease-in-out`}
          style={{ backgroundImage: `url(${loadedImages[nextImageIndex]})` }}
        />
      </div>

      {/* Contenedor principal */}
      <div className="tw-flex tw-items-center tw-justify-center tw-min-h-screen tw-p-4">
        <div className="tw-w-full tw-max-w-4xl tw-bg-white tw-bg-opacity-90 tw-rounded-xl tw-overflow-hidden tw-shadow-2xl tw-flex tw-flex-col md:tw-flex-row">
          {/* Imagen del formulario con dos capas */}
          <div className="tw-relative tw-w-full tw-h-64 md:tw-h-auto md:tw-w-1/2">
            <img
              src={loadedImages[currentImageIndex]}
              alt="imagen-formulario"
              className={`tw-absolute tw-inset-0 tw-w-full tw-h-full tw-object-cover ${
                fade ? "tw-opacity-0" : "tw-opacity-100"
              } tw-transition-opacity tw-duration-1000 tw-ease-in-out`}
            />
            <img
              src={loadedImages[nextImageIndex]}
              alt="imagen-formulario-next"
              className={`tw-absolute tw-inset-0 tw-w-full tw-h-full tw-object-cover ${
                fade ? "tw-opacity-100" : "tw-opacity-0"
              } tw-transition-opacity tw-duration-1000 tw-ease-in-out`}
            />
          </div>

          {/* Formulario */}
          <div className="tw-w-full tw-p-8 md:tw-w-1/2">
            <div className="tw-text-center tw-mb-8">
              <h1 className="tw-text-3xl tw-font-bold tw-text-gray-800">
                Welcome !
              </h1>
            </div>

            <div className="tw-space-y-6">
              <div className="tw-space-y-4">
                <div className="tw-flex tw-items-center tw-border-b tw-border-gray-300 tw-py-2">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="tw-text-gray-500 tw-mr-3"
                  />
                  <input
                    type="text"
                    placeholder="@username"
                    required
                    className="tw-w-full tw-bg-transparent tw-outline-none tw-placeholder-gray-400"
                  />
                </div>

                <div className="tw-flex tw-items-center tw-border-b tw-border-gray-300 tw-py-2">
                  <FontAwesomeIcon
                    icon={faLock}
                    className="tw-text-gray-500 tw-mr-3"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    className="tw-w-full tw-bg-transparent tw-outline-none tw-placeholder-gray-400"
                  />
                </div>
              </div>

              <div className="tw-flex tw-flex-col tw-space-y-4">
                <div className="tw-text-right">
                  <a
                    href="#"
                    className="tw-text-sm tw-text-blue-600 hover:tw-text-blue-800"
                  >
                    Olvidaste tu contraseña?
                  </a>
                </div>

                <button
                  type="submit"
                  className="tw-w-full tw-bg-blue-600 hover:tw-bg-blue-700 tw-text-white tw-py-2 tw-px-4 tw-rounded tw-transition tw-duration-300"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login2;
