import { useState } from "react";
import "../css/Proposito.css";

type Props = { imagen: string; titulo: string; texto: string };

function Proposito({ imagen, titulo, texto }: Props) {
  return (
    <div className="Proposito">
      <div className="Proposito-contenedor">
        <div className="Proposito-imagen-contenedor">
          <ImagenProposito imagen={imagen} />
        </div>
        <div className="Proposito-info">
          <TituloProposito titulo={titulo} />
          <TextoProposito texto={texto} />
        </div>
      </div>
      <div className="Proposito-opciones">
        <OpcionProposito opcion="+5 AÑOS DE EXPERIENCIA" />
        <a href="#formulario" className="boton-experiencia">
          Agenda una sesión gratuita
        </a>
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
