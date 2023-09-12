import React from "react";
import "../../pages/Main/PaginaInicial.module.scss";
import Tags from "../Tags";
import styles from "./Galley.module.scss";
import Cards from "./Cards";
import fotos from "./fotos.json";

export default function Gallery() {
  return (
    <section className={styles.galeria}>
      <h2>Navegue pelas galerias</h2>
      <Tags />
      <Cards itens={fotos} style={styles} />
    </section>
  );
}
