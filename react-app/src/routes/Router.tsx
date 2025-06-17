import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Preload from "../pages/Home/Preload";
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
    const loadResources = async () => {
      // Simula la carga de recursos críticos
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simula carga de recursos
      setIsLoading(false);
    };

    loadResources();
  }, []);

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={isLoading ? <Preload /> : <Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/especialidades" element={<Especialidades />} />
          <Route path="/contactanos" element={<Contactanos />} />
          <Route path="/gracias" element={<Gracias />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/login2" element={<Login2 />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/dashboard2" element={<Dashboard2 />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/pruebas"
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
