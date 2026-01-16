import styles from "./styles.module.css";
import logo from "../../assets/logo.png"
import Search from "../Search";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className={styles.headerContent}>
            <Link to="/">
            <img src={logo} alt="Logo Zodiac-Geek" className={styles.headerLogo} /></Link>
            <Search />
            <nav className={styles.iconNav}>
                <a href="/comments" className={styles.div_icon} aria-label="Comentários">
                    <img src="https://img.icons8.com/windows/ffffff/comments--v1.png" alt="comments--v1"className={styles.fa_icon}/>
                    <p className={styles.textIcon}> SAC</p>
                </a>


                <a href="/profile" className={styles.div_icon} aria-label="Perfil">
                    <img src="https://img.icons8.com/windows/ffffff/gender-neutral-user.png" alt="Perfil" className={styles.fa_icon}/>
                    <p className={styles.textIcon}> LOGIN</p>
                </a>
                <a href="/cart" className={styles.div_icon} aria-label="Carrinho de compras">
                    <img src="https://img.icons8.com/metro/ffffff/shopping-cart.png" alt="Carrinho de compras" className={styles.fa_icon}/>
                </a>
            </nav>






        </header>

    )
} 