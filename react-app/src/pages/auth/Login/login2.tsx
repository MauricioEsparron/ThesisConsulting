import { useState, useEffect } from "react";

import img1 from "../../../img/montañas1.webp";
import img2 from "../../../img/montañas2.webp";
import img3 from "../../../img/montañas3.webp";
import img4 from "../../../img/montañas4.webp";
import img5 from "../../../img/montañas5.webp";
import img6 from "../../../img/montañas6.webp";

import { login } from "../../../auth/Auth.service";

const images = [img1, img2, img3, img4, img5, img6];
import "../../../css/login2.css";

const Login2 = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 10000); // Cambia cada 10 segundos

    return () => clearInterval(interval);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = await login(username, password);

      localStorage.setItem("token", data.token);
      localStorage.setItem("username", username);
      localStorage.setItem("nombre", data.nombre);

      window.location.href = "/dashboard";
    } catch (err: any) {
      console.error(err);
      setError("Credenciales inválidas. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="wrapper-login2-2">
      <div
        className="main-contenedor-login2-2"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1s ease-in-out",
          display: "flex",
          // justifyContent: "flex-end",
          alignItems: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <div className="contenedor-login2-2">
          <form onSubmit={handleLogin}>
            <div className="contenedor-titulo-login2-2">
              <h2>Iniciar Sesión</h2>
            </div>
            <div className="contenedor-input-userename-login2-2">
              <span>Usuario:</span>
              <input
                type="text"
                placeholder="@username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="contenedor-input-password-login2-2">
              <span>Contraseña:</span>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
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

            <div className="contenedor-button-login2-2">
              <button
                type="submit"
                className="submit-button-login2"
                disabled={loading}
              >
                {loading ? "Cargando..." : "Login"}
              </button>
            </div>
            <div className="contenedor-reset-login2-2">
              <a href="#">¿Olvidaste tu contraseña?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login2;
