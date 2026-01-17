import type { Dispatch, SetStateAction } from "react";
import styles from "./SearchBar.module.css";

type unitsOption = true | false;

type childrenProps = {
  setOpenUnits: Dispatch<SetStateAction<unitsOption>>;
};

function SearchBar({ setOpenUnits }: childrenProps) {
  return (
    <div className={styles.searchBar}>
      <h1 className="title">How's the sky looking today?</h1>
      <div>
        <div className={styles.search}>
          <input
            name="searchBar"
            type="text"
            placeholder="Search for a place..."
            onClick={() => setOpenUnits(false)}
          />
          <img src="./assets/images/icon-search.svg" alt="search icon" />
        </div>
        <button role="button" className={styles.searchBtn}>
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
