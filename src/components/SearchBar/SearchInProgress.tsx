import styles from "./SearchInProgress.module.css";

function SearchInProgress() {
  return (
    <div className={styles.searchInProgress}>
      <img src="../assets/images/icon-loading.svg" alt="loading icon" />
      <p>Search in progress</p>
    </div>
  );
}

export default SearchInProgress;
