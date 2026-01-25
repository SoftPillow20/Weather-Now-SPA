import styles from "./SearchResults.module.css";

type searchResult = {
  id: string | number;
  name: string;
};

type childrenProps = {
  res: searchResult[];
};

function SearchResults({ res }: childrenProps) {
  return (
    <ul className={styles.searchCitiesList}>
      {res.map((result) => (
        <li onClick={() => console.log(result.id)} key={result.id} tabIndex={0}>
          {result.name}
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
