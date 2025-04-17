import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Especialidades from "../pages/Especialidades/Especialidades";
import Contactanos from "../pages/Contactanos/Contactanos";
import Gracias from "../pages/Gracias/Gracias";
import Login from "../pages/auth/Login/Login";
import Login2 from "../pages/auth/Login/login2";
import Dashboard from "../pages/auth/Dashboard/Dashboard";
import Dashboard2 from "../pages/auth/Dashboard/Dashboard2";
import Pruebas from "../pages/auth/Dashboard/components/Pruebas/Pruebas";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Especialidades" element={<Especialidades />} />
        <Route path="/Contactanos" element={<Contactanos />} />
        <Route path="/Gracias" element={<Gracias />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Login2" element={<Login2 />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Dashboard2" element={<Dashboard2 />} />
        <Route path="/Pruebas" element={<Pruebas />} />
      </Routes>
    </Router>
  );
};
