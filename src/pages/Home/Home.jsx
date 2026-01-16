import { Link } from "react-router-dom";

// `Importe de componentes`
import ImageCarousel from "../../components/ImageCarousel";
import ProductCard from "../../components/ProductCard";
import AnimeFilterCategory from '../../components/AnimeFilterCategory/index';

// împorte do css
import styles from "./style.module.css"

export default function Home() {
  return (
    <main>
      <ImageCarousel />

      <AnimeFilterCategory limit={4}/>
      <div className={styles.homeSection}>
        <p className={styles.sectionTitle}>  Lançamentos </p>
        <Link to="/ProductListVIew" className={styles.showMoreButton}> VER MAIS</Link>
      </div>
      <ProductCard filter={'home'}/>
    </main>

  );
}