import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Especialidades from "./components/Especialidades.tsx";
import Gracias from "./components/Gracias";
import Contactanos from "./components/Contactanos";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Especialidades" element={<Especialidades />} />
        <Route path="/Contactanos" element={<Contactanos />} />
        <Route path="/Gracias" element={<Gracias />} />
      </Routes>
    </Router>
  );
}
export default App;
