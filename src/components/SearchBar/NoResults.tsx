import styles from "./noResults.module.css";

function NoResults() {
  return (
    <div className={styles.noResults}>
      <p className={styles.message}>No search result found!</p>
    </div>
  );
}

export default NoResults;
