import CurrentForecast from "./CurrentForecast";
import styles from "./WeatherForecast.module.css";

function WeatherForecast() {
  return (
    <main className={styles.forecast}>
      <div>
        <CurrentForecast />
      </div>
      <div>hourly forecast</div>
    </main>
  );
}

export default WeatherForecast;
