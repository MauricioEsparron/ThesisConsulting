import "../../css/Preload.css"; // Asegúrate de que el CSS esté en el archivo correcto
// src/components/Preload.tsx
import { useEffect } from "react";

const Preload = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      sessionStorage.setItem("preload-shown", "true");
      window.location.href = "/Home"; // Redirige nuevamente a Home
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="loader-container">
      <div className="logo-animation">
        <h1 className="logo">
          <span className="letter">I</span>
          <span className="letter">N</span>
          <span className="letter">V</span>
          <span className="letter">E</span>
          <span className="letter">X</span>
          <span className="letter">I</span>
          <span className="letter">A</span>
          <span className="letter">L</span>
          <span className="letter">A</span>
          <span className="letter">B</span>
        </h1>
        <p className="slogan">Tu conocimiento, nuestro impacto</p>
      </div>
    </div>
  );
};

export default Preload;
