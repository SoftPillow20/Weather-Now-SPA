import type { Dispatch, SetStateAction } from "react";
import styles from "./SearchBar.module.css";
import SearchResults from "./SearchResults";
import SearchInProgress from "./SearchInProgress";

type unitsOption = true | false;

type childrenProps = {
  isLoading: boolean;
  setCityInput: Dispatch<SetStateAction<string>>;
  setOpenUnits: Dispatch<SetStateAction<unitsOption>>;
};

function SearchBar({ isLoading, setCityInput, setOpenUnits }: childrenProps) {
  function updateInput(e: React.ChangeEvent<HTMLInputElement>) {
    setTimeout(() => {
      setCityInput(e.target.value);
    }, 500);
  }

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
            onChange={(e) => updateInput(e)}
          />
          <img src="./assets/images/icon-search.svg" alt="search icon" />
          {isLoading && <SearchInProgress />}
          {/* <SearchResults /> */}
        </div>
        <button role="button" className={styles.searchBtn}>
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
