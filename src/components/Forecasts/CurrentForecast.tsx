import styles from "./CurrentForecast.module.css";

type resultsState = {
  id?: number;
  name?: string;
  country?: string;
  latitude?: number;
  longitude?: number;
};

type childrenProps = {
  selectedCity: resultsState;
};

function CurrentForecast({ selectedCity }: childrenProps) {
  return (
    <section className={styles.currentForecast}>
      {selectedCity.latitude && selectedCity.longitude ? (
        <div className={`${styles.location}`}>
          <div>
            <h2>
              {selectedCity.name}, {selectedCity.country}
            </h2>
            <p>Tuesday, Aug 5, 2025</p>
          </div>
          <div className={styles.status}>
            <img src="../assets/images/icon-sunny.webp" alt="sunny icon" />
            <p>68&deg;</p>
          </div>
        </div>
      ) : (
        <div className={styles.loadingLocation}>
          <div className={styles.loading}></div>
          <p>Loading...</p>
        </div>
      )}

      <div className={styles.currentOthers}>
        <p>
          Feels Like
          {selectedCity.latitude && selectedCity.longitude ? (
            <span className={styles.currentData}>64&deg;</span>
          ) : (
            <span>&mdash;</span>
          )}
        </p>
      </div>
      <div className={styles.currentOthers}>
        <p>
          Humidity
          {selectedCity.latitude && selectedCity.longitude ? (
            <span className={styles.currentData}>46%</span>
          ) : (
            <span>&mdash;</span>
          )}
        </p>
      </div>
      <div className={styles.currentOthers}>
        <p>
          Wind
          {selectedCity.latitude && selectedCity.longitude ? (
            <span className={styles.currentData}>9 mph</span>
          ) : (
            <span>&mdash;</span>
          )}
        </p>
      </div>
      <div className={styles.currentOthers}>
        <p>
          Precipitation
          {selectedCity.latitude && selectedCity.longitude ? (
            <span className={styles.currentData}>0 in</span>
          ) : (
            <span>&mdash;</span>
          )}
        </p>
      </div>
    </section>
  );
}

export default CurrentForecast;
