import styles from "./APIError.module.css";

function APIError() {
  return (
    <div className={styles.error}>
      <div className={styles.errorIcon}>
        <img src="../assets/images/icon-error.svg" alt="error icon" />
      </div>
      <h1>Something went wrong</h1>
      <p>
        We couldn't connect to the server (API error). Please try again in a few
        moments.
      </p>
      {/* change this to Link later on */}
      <button>
        <img src="../assets/images/icon-retry.svg" alt="retry icon" />
        Retry
      </button>
    </div>
  );
}

export default APIError;
