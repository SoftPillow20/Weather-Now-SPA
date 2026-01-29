import type { Dispatch, SetStateAction } from "react";
import styles from "./SearchBar.module.css";
import SearchResults from "./SearchResults";
import SearchInProgress from "./SearchInProgress";

type unitsOption = true | false;

type searchResult = {
  id: string | number;
  name: string;
};

type childrenProps = {
  isLoading: boolean;
  cityInput: string;
  results: searchResult[];
  setCityInput: Dispatch<SetStateAction<string>>;
  setOpenUnits: Dispatch<SetStateAction<unitsOption>>;
};

function SearchBar({
  isLoading,
  setCityInput,
  cityInput,
  setOpenUnits,
  results,
}: childrenProps) {
  // function updateInput(e: React.ChangeEvent<HTMLInputElement>) {
  //   setTimeout(() => {
  //     setCityInput(e.target.value);
  //   }, 500);
  // }

  function capitalizeEachWord(sentence: string) {
    const words = sentence.split(" ");

    const capitalizedWords = words.map((word) => {
      if (word.length === 0) return "";
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    return capitalizedWords.join(" ");
  }

  function onKeyGetFirstResult(e: React.KeyboardEvent, results: searchResult) {
    if (!results) return;

    if (results.name !== capitalizeEachWord(results.name)) {
      return;
    }

    if (e.key === "Enter") {
      setCityInput("");
      console.log(results);
    }
  }

  function onClickGetFirstResult(results: searchResult) {
    if (
      results.name !==
      cityInput.charAt(0).toUpperCase() + cityInput.slice(1)
    ) {
      return;
    }
    console.log(results);
  }

  const res = results.flatMap((res) => res);
  const firstRes = res[0];

  return (
    <div className={styles.searchBar}>
      <h1 className="title">How's the sky looking today?</h1>
      <div>
        <div className={styles.search}>
          <input
            name="searchBar"
            type="text"
            placeholder="Search for a place..."
            value={cityInput}
            onClick={() => setOpenUnits(false)} // closes an open unit setting
            onChange={(e) => setCityInput(e.target.value)} // updating state through event emitter
            onKeyDown={(e) => onKeyGetFirstResult(e, firstRes)}
          />
          <img src="./assets/images/icon-search.svg" alt="search icon" />
          {isLoading && <SearchInProgress />}
          {cityInput.split("").length >= 1 && (
            <SearchResults res={res} setCityInput={setCityInput} />
          )}
        </div>
        <button
          role="button"
          onClick={() => onClickGetFirstResult(firstRes)}
          onKeyDown={(e) => onKeyGetFirstResult(e, firstRes)}
          className={styles.searchBtn}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
