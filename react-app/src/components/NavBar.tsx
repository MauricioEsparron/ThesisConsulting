// import { useState } from "react";
// import { Link } from "react-router-dom";
// import "../css/NavBar.css";

// type Props = {
//   logo: string;
// };

// export default function NavBar({ logo }: Props) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className="NavBar">
//       <div className="NavBar-contenedor">
//         <LogoNavBar logo={logo} />
//         <ul className="NavBar-contenedor-links">
//           <li className="NavBar-subcontenedor-link">
//             <Link to="#" className="Link">
//               Home
//             </Link>
//           </li>
//           <li className="NavBar-subcontenedor-link">
//             <Link to="#" className="Link">
//               Especialidades
//             </Link>
//           </li>
//           <li className="NavBar-subcontenedor-link">
//             <Link to="#" className="Link">
//               Contáctanos
//             </Link>
//           </li>
//         </ul>
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="NavBar-boton sm:hidden text-gray-600 hover:text-gray-800 focus:outline-none"
//         >
//           ☰
//         </button>
//       </div>
//       {isMenuOpen && <Menu />}
//     </nav>
//   );
// }

// interface LogoNavBarProps {
//   logo: string;
// }
// function LogoNavBar({ logo }: LogoNavBarProps) {
//   return <h1 className="NavBar-logo font-bold">{logo}</h1>;
// }

// function Menu() {
//   const menuItems = [
//     "Especialidades",
//     "Accede",
//     "Contáctanos",
//     "Redes Sociales",
//   ];

//   return (
//     <div className="NavBar-MenuItems sm:hidden mt-3 border-t bg-white shadow-md">
//       {menuItems.map((item, index) => (
//         <Link
//           key={index}
//           to="#"
//           className={`NavBar-Item block py-2 px-4 ${
//             index === 2
//               ? "text-yellow-500"
//               : index === menuItems.length - 1
//               ? "text-red-500"
//               : "text-gray-700"
//           } hover:bg-gray-100`}
//         >
//           {item}
//         </Link>
//       ))}
//     </div>
//   );
// }

import { useState } from "react";
import "../index.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        {/* <img src="#" alt="Logo" /> */}
        <h2 className="NavBar-nombre-empresa">Empresa</h2>
      </div>
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Especialidades</a>
        <a href="#">Contáctanos</a>
      </div>
      <div className="nav-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <i className="bi bi-list" id="menu-icon"></i>
      </div>

      {menuOpen && (
        <div className="menu-desplegable">
          <a href="#">
            <i className="bi bi-award"></i> Especialidades
          </a>
          <a href="#">
            <i className="bi bi-person"></i> Accede
          </a>
          <a href="#">
            <i className="bi bi-whatsapp"></i> Contáctanos
          </a>
          <a href="#">
            <i className="bi bi-globe2"></i> Redes Sociales
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
