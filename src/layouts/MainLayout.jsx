import Header from "../components/Header";
import Footer from "../components/Footer"; 
import styles from "./MainLayout.module.css"
export default function MainLayout({ children }) {
  return (
    <div className={styles.layout}>
      <Header />
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
}
