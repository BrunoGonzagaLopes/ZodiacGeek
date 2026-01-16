import styles from "./styles.module.css";
import LoadingScreen from "../LoadingScreen";


import { useEffect, useState } from "react";


export default function ProductCard({ filter }) {
    const [getproductCard, setGetProductcard] = useState([])
    const [loading, setLoading] = useState(true)
    const hoje = new Date();
    
    useEffect(() => {

       
        let url = '/api/productCardAPI.php'
        if (filter) {
            url += `?filter=${filter}`;
        }
        fetch(url)
            .then(res => {
                if (!res.ok) throw new Error('Erro na API');
                return res.json();

            })
            .then(data => {
                setGetProductcard(data);
                setLoading(false)
            })
            .catch(err => console.error(err));

    },
        []);

    if (loading) {
        return (
            <LoadingScreen />
        )
    }
    if(getproductCard.length<= 0){
        return(
            <div className={styles.componenteVazio}>
                <p>Não há nada aqui, por enquanto</p>
            </div>
        )
    }
    return (

        <div className={styles.productCard}>
            {getproductCard.map((item) => {
                const dataCriacao = new Date(item.criado_em)
                const coresArray = item.cores
                    .replace(/[{}]/g, "")
                    .split(",");

                return (
                    
                    <div key={item.id} className={styles.productContent}>


                       {dataCriacao.getTime() >= new Date(hoje).setMonth(hoje.getMonth() - 2) && (


                            <b className={styles.lançamentoSpan}>Lançamento</b>
                        )}
                        <img src={item.imagem_url} className={styles.productImage} />
                        <div className={styles.productDetails}>

                            <p className={styles.productName}>{item.nome}</p>
                            <div className={styles.productInfo}>
                                <p className={styles.productMaterial}>{item.detalhes}</p>
                                <p className={styles.productPrice}>{new Intl.NumberFormat("pt-BR", {
                                    style: "currency",
                                    currency: "BRL",
                                }).format(item.preco_final)}
                                </p>
                            </div>
                            <div className={styles.productInfo}>
                                <div className={styles.colorContainer}>
                                    {coresArray.map(cor => {
                                        return (
                                            <span
                                                style={{ backgroundColor: `#${cor}` }}
                                                className={styles.coloresProductCard}>
                                            </span>
                                        )
                                    }

                                    )}
                                </div>
                                <p>10x {new Intl.NumberFormat("pt-BR", {
                                    style: "currency",
                                    currency: "BRL",
                                }).format(item.preco_final / 10)}</p>
                            </div>
                        </div>
                        <div className={styles.productAction}>
                            <button className={styles.buyButton}>COMPRA</button>
                        </div>
                    </div>


                )
            }
            )
            }

        </div>
    )

}
