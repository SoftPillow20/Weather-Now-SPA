import type { resultsState } from "../../Types/types";
import styles from "./SearchBar.module.css";
import SearchResults from "./SearchResults";
import SearchInProgress from "./SearchInProgress";
import usePostContext from "../../contexts/UsePostContext";
import { useEffect } from "react";

function SearchBar() {
  const {
    isLoading,
    setIsLoading,
    setCityInput,
    cityInput,
    setOpenUnits,
    results,
    setSelectedCity,
  } = usePostContext();

  useEffect(
    function () {
      if (results.length >= 1) {
        setIsLoading(false);
      }
    },
    [results.length, setIsLoading],
  );

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
            onChange={(e) => {
              setCityInput(e.target.value);
              if (!results.length) {
                setIsLoading(true);
              }
            }} // updating state through event emitter
            onKeyDown={(e) => onKeyGetFirstResult(e, firstRes)}
          />
          <img src="./assets/images/icon-search.svg" alt="search icon" />
          {!isLoading ? null : <SearchInProgress />}
          {cityInput.split("").length > 1 && (
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
