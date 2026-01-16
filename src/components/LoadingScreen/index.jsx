import styles from './styles.module.css';
import logoBlue from "../../assets/logoblue.png"


export default function LoadingScreen() {
  return (
    <div className={styles.loadingContainer}>
      <img src={logoBlue} alt="Zodiac Geekstore Logo" className={styles.logo} />
      <div className={styles.loader}></div>
    </div>
  );
}