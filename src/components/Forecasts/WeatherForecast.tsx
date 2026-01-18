import CurrentForecast from "./CurrentForecast";
import styles from "./WeatherForecast.module.css";
import DailyForecast from "./DailyForecast";

function WeatherForecast() {
  return (
    <main className={styles.forecast}>
      <div>
        <CurrentForecast />
        <DailyForecast />
      </div>
      <div>hourly forecast</div>
    </main>
  );
}

export default WeatherForecast;
