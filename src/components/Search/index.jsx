import { useState } from "react";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Search() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(search); 
  };

  return (
    <form onSubmit={handleSearch} className={styles.searchBar}>
      <input
      className={styles.inputSearch}
        type="text"
        placeholder="BUSCA ÉPICA..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className={styles.btnSearcstyles}><FontAwesomeIcon icon={faSearch} /> </button>
    </form>
  );}
