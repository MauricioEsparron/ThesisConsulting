import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Preload from "../pages/Home/Preload"; // <- Asegúrate de tener este componente creado

import Home from "../pages/Home/Home";
import Especialidades from "../pages/Especialidades/Especialidades";
import Contactanos from "../pages/Contactanos/Contactanos";
import Gracias from "../pages/Gracias/Gracias";
import Login from "../pages/auth/Login/Login";
import Login2 from "../pages/auth/Login/login2";
import Dashboard from "../pages/auth/Dashboard/Dashboard";
import Pruebas from "../pages/auth/Dashboard/components/Pruebas/Pruebas";
import Nosotros from "../pages/Nosotros/Nosotros";
import Dashboard2 from "../pages/auth/Dashboard/Dashboard2";

import { ProtectedRoute } from "./ProtectedRoute";
import { AuthProvider } from "../stores/Auth.store";

export const AppRouter = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Tiempo de la animación de preload

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Mostrar Preload solo en "/" */}
          {isLoading ? (
            <Route path="/" element={<Preload />} />
          ) : (
            <Route path="/Home" element={<Home />} />
          )}

          {/* Rutas públicas */}
          <Route path="/Especialidades" element={<Especialidades />} />
          <Route path="/Contactanos" element={<Contactanos />} />
          <Route path="/Gracias" element={<Gracias />} />
          <Route path="/auth/Login" element={<Login />} />
          <Route path="/auth/Login2" element={<Login2 />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Dashboard2" element={<Dashboard2 />} />

          {/* Rutas protegidas */}
          <Route
            path="/Dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Pruebas"
            element={
              <ProtectedRoute>
                <Pruebas />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
};
