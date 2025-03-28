import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Especialidades from "./components/Especialidades.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/especialidades" element={<Especialidades />} />
      </Routes>
    </Router>
  );
}
export default App;
