import "../../../../../css/actividades2.css";
import commentIcon from "../../../../../img/comment.png";
import consultIcon from "../../../../../img/consulticon.png";
const Actividades2 = () => {
  const actividades = [
    {
      fecha: "13 mar. 2025",
      tipo: "COMENTARIO",
      descripcion: "Lore Ipsum is simply dummy text",
      icono: commentIcon,
    },
    {
      fecha: "13 mar. 2025",
      tipo: "CONSULTA ABIERTA",
      descripcion: "Lore Ipsum is simply dummy text",
      icono: consultIcon,
    },
  ];

  return (
    <div className="actividades-container">
      <h1 className="actividades-titulo">Actividades</h1>
      <div className="actividades-linea"></div>

      <div className="timeline">
        {actividades.map((act, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-date">{act.fecha}</div>
            <div className="timeline-content">
              <div className="timeline-icon-container">
                <img src={act.icono} alt={act.tipo} className="timeline-icon" />
              </div>
              <span className="blue-Line"></span>
              <div className="timeline-details">
                <h3 className="timeline-title">{act.tipo}</h3>

                <p className="timeline-description">{act.descripcion}</p>
                <button className="timeline-button">Ver Mensaje</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Actividades2;
