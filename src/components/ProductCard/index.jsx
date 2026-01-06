import styles from "./styles.module.css";

export default function ProductCard() {
    return (
        <div className={styles.containerCard}>
            <div className={styles.cardUnique}>
                
                <p className={styles.infinityCard}>Limitado</p>
                
                <img src="https://res.cloudinary.com/dbjccjfpw/image/upload/v1767586608/f6831150c930d3cfffb24e2e639c616f_fp3f2u.jpg" className={styles.ProductImage} />

                <div className={styles.product_description}>
                    <p className={styles.description_text}>Moletom com capuz do Tanjiro -100% Algodão</p>
                    <p className={styles.description_value}>R$100,00</p>
                </div>
                <button className={styles.btn_comprar}>ADICIONAR AO CARRINHO</button>
            </div>
        </div>
    )
}