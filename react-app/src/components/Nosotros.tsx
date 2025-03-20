import "../css/Nosotros.css";

type Props = { titulo: string; subtitulo: string; imagen: string };

function Nosotros({ titulo, subtitulo, imagen }: Props) {
  return (
    <div className="parent">
      <div className="div1">
        <TituloNosotros titulo={titulo} />
      </div>
      <div className="div2">
        <SubTituloNosotros subtitulo={subtitulo} />
      </div>
      <div className="div3"> Estudiantes</div>
      <div className="div4"> Organizaciones</div>
      <div className="div5"> Profesionales</div>
      <div className="div6">
        <ImagenNosotros imagen={imagen} />
      </div>
    </div>
  );
}
interface TituloNosotrosProps {
  titulo: string;
}
export function TituloNosotros({ titulo }: TituloNosotrosProps) {
  return <h2 className="Nosotros-titulo">{titulo}</h2>;
}

interface SubTituloNosotrosProps {
  subtitulo: string;
}
export function SubTituloNosotros({ subtitulo }: SubTituloNosotrosProps) {
  return <h4 className="Nosotros-subtitulo">{subtitulo}</h4>;
}

interface ImagenNosotrosProps {
  imagen: string;
}
export function ImagenNosotros({ imagen }: ImagenNosotrosProps) {
  return (
    <img className="Nosotros-imagen" src={imagen} alt="imagen de prueba" />
  );
}
export default Nosotros;
