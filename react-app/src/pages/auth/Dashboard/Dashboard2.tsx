import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../../css/Dashboard2.css";
import profilePic from "../../../img/profilepic.png";
import houseIcon from "../../../img/Houseicon.png";
import consultIcon from "../../../img/consulticon.png";
import globalIcon from "../../../img/Globalicon.png";
import logoutIcon from "../../../img/Logouticon.png";

const Dashboard2 = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const currentPath = location.pathname;
    document.querySelectorAll(".nav-item").forEach((item) => {
      item.classList.remove("active");
    });

    switch (currentPath) {
      case "/":
        document.getElementById("home-link")?.classList.add("active");
        break;
      case "/Consultorias":
        document.getElementById("consultoria-link")?.classList.add("active");
        break;
      case "/Actividades":
        document.getElementById("activities-link")?.classList.add("active");
        break;
      default:
        break;
    }
  }, [location.pathname]);

  return (
    <aside
      className={`sidebar ${collapsed ? "collapsed" : ""}`}
      id="sidebar"
      onClick={() => setCollapsed(!collapsed)}
    >
      <div className="profile">
        <div className="profile-image">
          <img src={profilePic} alt="Profile" className="avatar" />
        </div>
        <div className="profile-name">LORENA M.</div>
      </div>

      <nav className="nav-menu">
        <Link to="/" className="nav-item" id="home-link">
          <img src={houseIcon} alt="Home" className="nav-icon" />
          <span className="nav-text">Home</span>
        </Link>
        <Link to="/Consultorias" className="nav-item" id="consultoria-link">
          <img src={consultIcon} alt="Consultoría" className="nav-icon" />
          <span className="nav-text">Consultoría</span>
        </Link>
        <Link to="/Actividades" className="nav-item" id="activities-link">
          <img src={globalIcon} alt="Actividades" className="nav-icon" />
          <span className="nav-text">Actividades</span>
        </Link>
      </nav>

      <div className="logout">
        <button className="logout-btn">
          <img src={logoutIcon} alt="Cerrar sesión" className="nav-icon" />
          <span className="nav-text">CERRAR SESIÓN</span>
        </button>
      </div>
    </aside>
  );
};

export default Dashboard2;
