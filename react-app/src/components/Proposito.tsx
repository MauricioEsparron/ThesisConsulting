import "../css/Proposito.css";

type Props = { imagen: string; titulo: string; texto: string };

function Proposito({ imagen, titulo, texto }: Props) {
  return (
    <div className="Proposito">
      <div className="Proposito-contenedor background">
        <div className="Proposito-imagen-contenedor">
          <ImagenProposito imagen={imagen} />
        </div>
        <div className="Proposito-info">
          <TituloProposito titulo={titulo} />
          <TextoProposito texto={texto} />
        </div>
      </div>
      <div className="contenedor-opciones">
        <div className="Proposito-opciones overlay">
          <OpcionProposito opcion="+5 AÑOS DE EXPERIENCIA" />
          <a
            href="#"
            className="boton-sesion-gratuita"
            onClick={(e) => {
              e.preventDefault();
              window.dispatchEvent(new Event("openForm"));
              setTimeout(() => {
                document.getElementById("formulario")?.scrollIntoView({
                  behavior: "smooth",
                });
              }, 100);
            }}
          >
            AGENDA UNA SESIÓN GRATUITA
          </a>
        </div>
      </div>
    </div>
  );
}

interface ImagenPropositoProps {
  imagen: string;
}
export function ImagenProposito({ imagen }: ImagenPropositoProps) {
  return (
    <img className="Proposito-imagen" src={imagen} alt="imagen de prueba" />
  );
}

interface TituloPropositoProps {
  titulo: string;
}
export function TituloProposito({ titulo }: TituloPropositoProps) {
  return <h2 className="Proposito-titulo">{titulo}</h2>;
}

interface TextoPropositoProps {
  texto: string;
}
export function TextoProposito({ texto }: TextoPropositoProps) {
  return <p className="Proposito-texto">{texto}</p>;
}

interface OpcionPropositoProps {
  opcion: string;
}
export function OpcionProposito({ opcion }: OpcionPropositoProps) {
  return <p className="Proposito-opcion">{opcion}</p>;
}

export default Proposito;
