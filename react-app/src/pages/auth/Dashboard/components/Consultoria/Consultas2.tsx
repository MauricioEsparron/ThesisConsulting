import "../../../../../css/Consultas.css";
import { MoreVertical } from "lucide-react";
import banner from "../../../../../img/BannerConsultas.jpg";
import emailIcon from "../../../../../img/mailicon.png";
import profilepic from "../../../../../img/profilepic.png";
import fileIcon from "../../../../../img/file.png";
import asesorIcon from "../../../../../img/asesorImage.png";
import { Link } from "react-router-dom";
const Consultas2 = () => {
  const asesorias = [
    {
      id: 1,
      titulo: "Ricardo Millian ha publicado un nuevo material: Asesoría N°2",
      fecha: "13 mar, 2025",
    },
    {
      id: 2,
      titulo: "Ricardo Millian ha publicado un nuevo material: Asesoría N°1",
      fecha: "10 mar, 2025",
    },
    // Puedes agregar más objetos conforme necesites
  ];

  return (
    <div className="consultas-container">
      <div className="content-area">
        <img src={banner} alt="Banner" className="banner" />
        <div className="content-grid">
          <div className="advisor-card">
            <h2 className="section-title">Asesor de la consulta</h2>

            <div className="advisor-profile">
              <div className="profile-image-container">
                <img
                  src={asesorIcon}
                  alt="Profile"
                  className="profile-image-advisor"
                />
              </div>
              <div className="advisor-info">
                <p className="advisor-name">RICARDO MILLIAN J.</p>
                <p className="advisor-position">Asesor de Marketing</p>
              </div>
              <img src={emailIcon} className="mail-icon" />
            </div>

            <hr className="divider" />

            <div className="advisor-details">
              <h3 className="details-title">Detalles</h3>

              <div className="detail-item">
                <span className="detail-bullet">•</span>
                <span className="detail-text">Seguimiento de Progreso</span>
              </div>
              <div className="progress-button">Revisar</div>

              <div className="detail-item">
                <span className="detail-bullet">•</span>
                <span className="detail-text">Documentos Subidos</span>
              </div>
              <div className="progress-button">Revisar</div>
            </div>
          </div>

          <div className="right-content">
            <div className="announcement-input-container">
              <div className="announcement-logo">
                <img src={profilepic} alt="Logo" className="small-logo" />
              </div>
              <input
                type="text"
                placeholder="Anuncia algo a tu asesor..."
                className="announcement-input"
              />
            </div>

            <div className="material-cards">
              {asesorias.map((asesoria) => (
                <div key={asesoria.id} className="material-card">
                  <div className="material-header">
                    <div className="material-icon-container">
                      <img className="document-icon" src={fileIcon} />
                    </div>
                    <div className="material-info">
                      <Link to="/Detalle">
                        <h3 className="material-title">{asesoria.titulo}</h3>
                      </Link>
                      <p className="material-date">{asesoria.fecha}</p>
                    </div>
                    <button className="more-options-button">
                      <MoreVertical size={20} />
                    </button>
                  </div>
                  <hr className="material-divider" />
                  <div className="material-footer">
                    <p className="comments-text">Comentarios</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultas2;
