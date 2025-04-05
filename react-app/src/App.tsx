import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Especialidades from "./components/Especialidades.tsx";
import Gracias from "./components/Gracias";
import Contactanos from "./components/Contactanos";
import Login from "./components/Login.tsx";
import Login2 from "./components/login2.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Especialidades" element={<Especialidades />} />
        <Route path="/Contactanos" element={<Contactanos />} />
        <Route path="/Gracias" element={<Gracias />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Login2" element={<Login2 />} />
      </Routes>
    </Router>
  );
}
export default App;
