import type { Dispatch, SetStateAction } from "react";
import styles from "./SearchResults.module.css";

type searchResult = {
  id: string | number;
  name: string;
};

type childrenProps = {
  res: searchResult[];
  setCityInput: Dispatch<SetStateAction<string>>;
};

function SearchResults({ setCityInput, res }: childrenProps) {
  function onKeyGetResults(e: React.KeyboardEvent, result: searchResult) {
    if (e.key === "Enter") {
      setCityInput("");
      console.log(result);
    }
  }

  function onClickGetResults(result: searchResult) {
    setCityInput("");
    console.log(result);
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
