import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Preload.css";

const Preload = () => {
  const navigate = useNavigate();
  const [isResourcesLoaded, setIsResourcesLoaded] = useState(false);

  useEffect(() => {
    const loadResources = async () => {
      // Simula la carga de recursos críticos
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simula carga de recursos
      setIsResourcesLoaded(true);
    };

    loadResources();
  }, []);

  useEffect(() => {
    if (isResourcesLoaded) {
      navigate("/home", { replace: true });
    }
  }, [isResourcesLoaded, navigate]);

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
