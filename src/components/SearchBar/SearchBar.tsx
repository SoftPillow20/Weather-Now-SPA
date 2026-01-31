import type { Dispatch, SetStateAction } from "react";
import styles from "./SearchBar.module.css";
import SearchResults from "./SearchResults";
import SearchInProgress from "./SearchInProgress";

type unitsOption = true | false;

type resultsState = {
  id?: number;
  name?: string;
  country?: string;
  latitude?: number;
  longitude?: number;
};

type childrenProps = {
  isLoading: boolean;
  cityInput: string;
  results: resultsState[];
  setCityInput: Dispatch<SetStateAction<string>>;
  setOpenUnits: Dispatch<SetStateAction<unitsOption>>;
  setSelectedCity: Dispatch<SetStateAction<resultsState>>;
};

function SearchBar({
  isLoading,
  setCityInput,
  cityInput,
  setOpenUnits,
  results,
  setSelectedCity,
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

  function onKeyGetFirstResult(e: React.KeyboardEvent, results: resultsState) {
    if (!results) return;

    if (results.name !== capitalizeEachWord(results.name!)) {
      return;
    }

    if (e.key === "Enter") {
      setCityInput("");
      setSelectedCity(() => results);
    }
  }

  function onClickGetFirstResult(results: resultsState) {
    if (
      results.name !==
      cityInput.charAt(0).toUpperCase() + cityInput.slice(1)
    ) {
      return;
    }
    setSelectedCity(() => results);
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
            <SearchResults
              res={res}
              setCityInput={setCityInput}
              setSelectedCity={setSelectedCity}
            />
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
