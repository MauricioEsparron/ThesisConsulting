import "../css/Carrusel.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  imagenes: string[];
};

function Carrusel({ imagenes }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === imagenes.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? imagenes.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      {/* Animación de cambio de imagen */}
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={imagenes[currentIndex]}
          alt={`Imagen ${currentIndex + 1}`}
          className="carousel-images"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>

      <div className="contenedor-carrusel">
        {/* Botones de navegación */}
        <div className="slide-direction">
          <button
            className="left"
            onClick={handlePrevious}
            aria-label="Imagen anterior"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 0 24 24"
              width="20"
            >
              <path d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
            </svg>
          </button>
          <button
            className="right"
            onClick={handleNext}
            aria-label="Imagen siguiente"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 0 24 24"
              width="20"
            >
              <path d="M9 6l-1.41 1.41L12.17 12l-4.58 4.59L9 18l6-6z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Indicadores (dots) */}
      <div className="carousel-indicator">
        {imagenes.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentIndex === index ? "activeCarrucel" : ""}`}
            onClick={() => handleDotClick(index)}
            role="button"
            aria-label={`Ir a la imagen ${index + 1}`}
            tabIndex={0}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Carrusel;
