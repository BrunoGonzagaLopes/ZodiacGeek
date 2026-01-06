import styles from "./styles.module.css";
import logo from "../../assets/logo.png"
import Search from "../Search";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCartPlus,faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons';

export default function Header() {
    return (
        <header style={{backgroundColor:"#ECF1FB"}}>
            <div className={styles.topBar}><p className={styles.text_TopBar}>Produtos à altura de quem já ultrapassou os limites do corpo e da matéria.</p></div>
            <div className={styles.headerContent}>

                {/* <Link to={''}></Link>*/} <img src={logo} alt="Logo Zodiac-Geek" className={styles.headerLogo} /> 

                <Search />

                <div className={styles.fa_icon}>
                    <FontAwesomeIcon icon={faCartPlus} />
                    <FontAwesomeIcon icon={faUser} />
                </div>
            </div>
            <nav>
                <p className={styles.navItens}>CANECAS<FontAwesomeIcon icon={faChevronDown} /></p>
                <p className={styles.navItens}>CAMISAS<FontAwesomeIcon icon={faChevronDown} /></p>
                <p className={styles.navItens}>MOLETONS<FontAwesomeIcon icon={faChevronDown} /></p>
            </nav>
            
        </header>

    )
} 