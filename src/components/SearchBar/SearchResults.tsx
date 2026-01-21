import styles from "./SearchResults.module.css";

function SearchResults() {
  return (
    <ul className={styles.searchCitiesList}>
      <li tabIndex={0}>City Name</li>
      <li tabIndex={0}>City Name</li>
      <li tabIndex={0}>City Name</li>
      <li tabIndex={0}>City Name</li>
    </ul>
  );
}

export default SearchResults;
