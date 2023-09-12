import Gallery from "../../components/Gallery";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Populares from "../../components/Populares";
import banner from "./banner.png";
import styles from "./PaginaInicial.module.scss";

export default function Main() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.principal}>
          <Menu />
          <div className={styles.principal__imagem}>
            <h1>A galeria mais completa do espaço</h1>
            <img src={banner} alt="A imagem da terra vista do espaco" />
          </div>
        </section>
        <div>
          <Gallery />
          <Populares />
        </div>
      </main>
    </>
  );
}
