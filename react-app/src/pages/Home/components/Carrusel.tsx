import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../../../css/Carrusel.css"; // Importa la hoja de estilos

interface Imagen {
  src: string;
  descripcion: string;
}

interface Props {
  imagenes: Imagen[];
}

const Carrusel: React.FC<Props> = ({ imagenes }) => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % imagenes.length);
  };

  const handlePrevious = () => {
    setIndex((prev) => (prev - 1 + imagenes.length) % imagenes.length);
  };

  return (
    <div className="carrusel-container">
      {/* Imagen con animación */}
      <AnimatePresence mode="wait">
        <motion.img
          key={imagenes[index].src}
          src={imagenes[index].src}
          alt="Imagen del carrusel"
          className="carrusel-imagen"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>

      {/* Descripción */}
      <AnimatePresence mode="wait">
        <motion.p
          key={imagenes[index].descripcion}
          className="carrusel-descripcion"
          initial={{ opacity: 0, scale: 0.9, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {imagenes[index].descripcion}
        </motion.p>
      </AnimatePresence>

      {/* Indicadores con animación */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="carrusel-indicadores"
          initial={{ opacity: 0, scale: 0.9, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {imagenes.map((_, i) => (
            <motion.div
              key={i}
              className={`carrusel-indicador ${i === index ? "activo" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Botón Anterior */}
      <button
        className="carrusel-boton carrusel-boton-anterior"
        onClick={handlePrevious}
      >
        <ChevronLeft size={24} />
      </button>

      {/* Botón Siguiente */}
      <button
        className="carrusel-boton carrusel-boton-siguiente"
        onClick={handleNext}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default Carrusel;
