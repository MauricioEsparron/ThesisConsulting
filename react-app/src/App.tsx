import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
<<<<<<< HEAD
import Especialidades from "./components/Especialidades.tsx";
=======
import Gracias from "./components/Gracias";
import Contactanos from "./components/Contactanos";
>>>>>>> 60ae812 (se agrego componente Contactanos.tsx, Contactanos.css y se realizaron modificaciones en rutas dentro del componente Navbar.tsx y App.tsx)

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< HEAD
        <Route path="/especialidades" element={<Especialidades />} />
=======
        <Route path="/Contactanos" element={<Contactanos />} />
        <Route path="/Gracias" element={<Gracias />} />
>>>>>>> 60ae812 (se agrego componente Contactanos.tsx, Contactanos.css y se realizaron modificaciones en rutas dentro del componente Navbar.tsx y App.tsx)
      </Routes>
    </Router>
  );
}
export default App;
