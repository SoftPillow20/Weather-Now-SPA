import usePostContext from "../../contexts/UsePostContext";
import styles from "./DailyForecast.module.css";

function DailyForecast() {
  const { weatherState, selectedCity, sortedDays, getWeatherKey } =
    usePostContext();

  // const dailyTempMax = weatherState.daily?.temperature_2m_max;
  // const dailyTempMin = weatherState.daily?.temperature_2m_min;
  // const dailyWeatherCode = weatherState.daily?.weather_code;

  return (
    <section className={styles.dailyForecast}>
      <h2>Daily forecast</h2>
      <ul className={styles.daily}>
        {selectedCity && weatherState.daily
          ? sortedDays.map((day, index) => (
              <li key={day}>
                <p>{day}</p>
                <img
                  src={`../assets/images/icon-${getWeatherKey(weatherState.daily!.weather_code[index])}.webp`}
                  alt={`${getWeatherKey(weatherState.daily!.weather_code[index])} icon`}
                />
                <div>
                  <p>
                    {Math.ceil(weatherState.daily!.temperature_2m_max[index])}
                    &deg;
                  </p>
                  <p>
                    {Math.ceil(weatherState.daily!.temperature_2m_min[index])}
                    &deg;
                  </p>
                </div>
              </li>
            ))
          : sortedDays.map((day) => <li key={day}></li>)}
      </ul>
    </section>
  );
}

export default DailyForecast;
