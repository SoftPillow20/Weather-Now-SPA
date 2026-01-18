import styles from "./CurrentForecast.module.css";

function CurrentForecast() {
  return (
    <div className={styles.currentForecast}>
      <section>
        <div>
          <h2>Berlin, Germany</h2>
          <p>Tuesday, Aug 5, 2025</p>
        </div>
        <div className={styles.container}>
          <img src="../assets/images/icon-sunny.webp" alt="sunny icon" />
          <p>68&deg;</p>
        </div>
      </section>
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
    </div>
  );
}

export default CurrentForecast;
