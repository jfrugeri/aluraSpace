import React from "react";
import expand from "./open.png";
import like from "./favorito.png";

export default function Card({ item, style }) {
  return (
    <li key={item.id} className={style.galeria__card}>
      <img
        className={style.galeria__imagem}
        src={item.imagem}
        alt={item.titulo}
      />
      <p className={style.galeria__descricao}> {item.titulo} </p>
      <div>
        <p> {item.creditos} </p>
        <span>
          <img src={like} alt="Like Icon" />
          <img src={expand} alt="Expand Icon" />
        </span>
      </div>
    </li>
  );
}
