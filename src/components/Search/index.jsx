import { useState } from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/ProductListVIew/${"pesquisa;"+search}`)
  };

  return (
    <form onSubmit={handleSearch} className={styles.searchBar}>
      <input
      className={styles.inputSearch}
        type="text"
        placeholder="O QUE VOCÊ PROCURA?"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className={styles.btnSearcstyles}>
        <img src="https://img.icons8.com/ios-filled/40/ffffff/search--v1.png" alt="search--v1"/>
       </button>
    </form>
  );}
