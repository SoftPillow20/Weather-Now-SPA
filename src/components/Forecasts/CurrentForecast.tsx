import usePostContext from "../../contexts/UsePostContext";
import styles from "./CurrentForecast.module.css";

function CurrentForecast() {
  const { weatherState, selectedCity, getWeatherKey } = usePostContext();

  const weatherCodeDaily = weatherState.daily?.weather_code[0];

  const weatherToday = getWeatherKey(!weatherCodeDaily ? -1 : weatherCodeDaily);

  const date = new Date();

  // Format for a specific locale (e.g., British English)
  const formattedGB = new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);

  return (
    <section className={styles.currentForecast}>
      {selectedCity.latitude && selectedCity.longitude ? (
        <div className={`${styles.location}`}>
          <div>
            <h2>
              {selectedCity.name}, {selectedCity.country}
            </h2>
            <p>{formattedGB}</p>
          </div>
          <div className={styles.status}>
            <img
              src={`../assets/images/icon-${weatherToday}.webp`}
              alt="sunny icon"
            />
            <p>{weatherState.current?.temperature_2m}&deg;</p>
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
            <span className={styles.currentData}>
              {weatherState.current?.apparent_temperature}&deg;
            </span>
          ) : (
            <span>&mdash;</span>
          )}
        </p>
      </div>
      <div className={styles.currentOthers}>
        <p>
          Humidity
          {selectedCity.latitude && selectedCity.longitude ? (
            <span className={styles.currentData}>
              {weatherState.current?.relative_humidity_2m}%
            </span>
          ) : (
            <span>&mdash;</span>
          )}
        </p>
      </div>
      <div className={styles.currentOthers}>
        <p>
          Wind
          {selectedCity.latitude && selectedCity.longitude ? (
            <span className={styles.currentData}>
              {weatherState.current?.wind_speed_10m} mph
            </span>
          ) : (
            <span>&mdash;</span>
          )}
        </p>
      </div>
      <div className={styles.currentOthers}>
        <p>
          Precipitation
          {selectedCity.latitude && selectedCity.longitude ? (
            <span className={styles.currentData}>
              {weatherState.current?.precipitation} in
            </span>
          ) : (
            <span>&mdash;</span>
          )}
        </p>
      </div>
    </section>
  );
}

export default CurrentForecast;
