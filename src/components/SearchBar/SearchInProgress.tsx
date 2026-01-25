import styles from "./SearchInProgress.module.css";

function SearchInProgress() {
  return (
    <div className={styles.searchInProgress}>
      <div className={styles.loadingSpinner}></div>
      <p>Search in progress</p>
    </div>
  );
}

export default SearchInProgress;
