import type { resultsState } from "../../Types/types";
import styles from "./SearchResults.module.css";
import usePostContext from "../../contexts/UsePostContext";

function SearchResults() {
  const { setcitySearchQuery, setSelectedCity, results } = usePostContext();

  function onKeyGetResults(e: React.KeyboardEvent, result: resultsState) {
    if (e.key === "Enter") {
      setcitySearchQuery("");
      setSelectedCity(() => result);
    }
  }

  function onClickGetResults(result: resultsState) {
    setcitySearchQuery("");
    setSelectedCity(() => result);
  }

  return (
    <ul className={styles.searchCitiesList}>
      {results.map((result) => (
        <li
          onClick={() => onClickGetResults(result)}
          onKeyDown={(e) => onKeyGetResults(e, result)}
          key={result.id}
          tabIndex={0}
        >
          <p>
            {result.name}, {result.country}
          </p>
          <span>{result.admin1}</span>
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
