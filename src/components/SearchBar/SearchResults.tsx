import type { Dispatch, SetStateAction } from "react";
import styles from "./SearchResults.module.css";

type resultsState = {
  id?: number;
  name?: string;
  country?: string;
  latitude?: number;
  longitude?: number;
};

type childrenProps = {
  res: resultsState[];
  setCityInput: Dispatch<SetStateAction<string>>;
  setSelectedCity: Dispatch<SetStateAction<resultsState>>;
};

function SearchResults({ setCityInput, res, setSelectedCity }: childrenProps) {
  function onKeyGetResults(e: React.KeyboardEvent, result: resultsState) {
    if (e.key === "Enter") {
      setCityInput("");
      setSelectedCity(() => result);
    }
  }

  function onClickGetResults(result: resultsState) {
    setCityInput("");
    setSelectedCity(() => result);
  }

  return (
    <ul className={styles.searchCitiesList}>
      {res.map((result) => (
        <li
          onClick={() => onClickGetResults(result)}
          onKeyDown={(e) => onKeyGetResults(e, result)}
          key={result.id}
          tabIndex={0}
        >
          {result.name}
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
