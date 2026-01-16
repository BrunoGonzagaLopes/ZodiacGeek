import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import LoadingScreen from "../LoadingScreen"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function AnimeFilterCategory({ limit }) {

    const [animeCategories, setAnimeCategories] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();

    const handleClick = (id) =>{
        navigate(`/ProductListVIew/${id}`)
    }

    useEffect(() => {
        let url = '/api/animeFilterCategory.php'
        if (limit) {
            url += `?limit=${limit}`;
        }
        fetch(url)
            .then(res => {
                if (!res.ok) throw new Error('Erro na API');
                return res.json();
                
            })
            .then(data => {setAnimeCategories(data);
                setLoading(false)
            })
            .catch(err => console.error(err));
            
    }, 
    []);
    if(loading){
        return(
            <LoadingScreen/>
        )
    }
    
    return (

        <div className={styles.categoriesSection}>
            <div className={styles.categoriesHeader}>
                <p className={styles.categoriesTitle}>  CATEGORIAS </p>
                <Link to= "filter" className={styles.showMoreButton}> VER MAIS</Link>
            </div>
           
            <div className={styles.categoriesList}
            >
                {animeCategories.map(item =>
                
                    <div key={item.id} className={styles.categoryCard} onClick={()=>handleClick(item.id)}>
                        <img src={item.imagem_url} className={styles.categoryImage}></img>
                        <p className={styles.categoryName}>{item.nome}</p></div>
                        
                )}

            </div>
        </div>);
}