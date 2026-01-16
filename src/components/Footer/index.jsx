import styles from "./styles.module.css";
import logoBlue from "../../assets/logoblue.png"
export default function Footer() {
    return (
        <footer>
            <div className={styles.infoSection}>
                <div className={styles.footerLinks}>
                    <img src={logoBlue} alt="Logo ZodiacGeek" className={styles.footerLogo} />
                    <strong className={styles.socialLabel}>Siga-nós:</strong>
                    <div className={styles.socialSection}>
                        <img src="https://img.icons8.com/material-outlined/ffffff/facebook-new.png" alt="facebook-new" className={styles.socialLink} />
                        <img src="https://img.icons8.com/windows/ffffff/instagram-new.png" alt="instagram-new" className={styles.socialLink} />
                        <img src="https://img.icons8.com/glyph-neue/ffffff/tiktok.png" alt="tiktok" className={styles.socialLink} />
                    </div>
                </div>
                <div className={styles.contactSection}>
                    <h3 className={styles.socialLabel}> Fale conosco</h3>
                    <p>(31)9xxxx-xxxx</p>
                    <p>(31)36xxx-xxxx</p>
                    <p>atendimento@zodiackgeek.com</p>

                </div>
                <div className={styles.contactSection}>
                    <h3 className={styles.socialLabel}> Institucional</h3>
                    <p>Quem somos</p>
                    <p>Como comprar</p>
                    <p>Política de privacidade</p>
                    <p>trabalhe conosco</p>
                </div>
                <div className={styles.contactSection}>
                    <h3 className={styles.socialLabel}> Sobre o desenvolvedor</h3>
                    <p>xxxxxx@gmail.com</p>
                    <p>(31)9xxxx-xxxx</p>
                    <p>Portfólio</p>
                    <div className={styles.contactDev}>
                        <a href="" download="">
                            <button className={styles.curriculo}>Baixar cv</button>
                        </a>
                        <a href="https://wa.me/5581999999999" target="_blank">
                            <button className={styles.wpp}> whatsapp</button>
                        </a>
                    </div>
                </div>
            </div>









            <div className={styles.extraInfo}>
                <p>CNPJ: xx.xxx.xxx/0001-xx. Cidade Jardim, 8755. Belo Horizonte/MG </p>
                <p>Esse site foi desenvolvido apenas <span>com intuito acadêmico</span></p>
            </div>
        </footer>
    )
}