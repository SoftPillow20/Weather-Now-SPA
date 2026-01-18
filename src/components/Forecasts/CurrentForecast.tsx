import styles from "./CurrentForecast.module.css";

function CurrentForecast() {
  return (
    <section className={styles.currentForecast}>
      <div className={styles.location}>
        <div>
          <h2>Berlin, Germany</h2>
          <p>Tuesday, Aug 5, 2025</p>
        </div>
        <div className={styles.status}>
          <img src="../assets/images/icon-sunny.webp" alt="sunny icon" />
          <p>68&deg;</p>
        </div>
      </div>
      <div className={styles.currentOthers}>
        <p>
          Feels Like <span className={styles.currentData}>64&deg;</span>
        </p>
      </div>
      <div className={styles.currentOthers}>
        <p>
          Humidity <span className={styles.currentData}>46%</span>
        </p>
      </div>
      <div className={styles.currentOthers}>
        <p>
          Wind <span className={styles.currentData}>9 mph</span>
        </p>
      </div>
      <div className={styles.currentOthers}>
        <p>
          Precipitation <span className={styles.currentData}>0 in</span>
        </p>
      </div>
    </section>
  );
}

export default CurrentForecast;
