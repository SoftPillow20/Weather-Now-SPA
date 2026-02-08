import CurrentForecast from "./CurrentForecast";
import styles from "./WeatherForecast.module.css";
import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";

function WeatherForecast() {
  return (
    <main className={styles.forecast}>
      <div>
        <CurrentForecast />
        <DailyForecast />
      </div>
      <div>
        <HourlyForecast />
      </div>
    </main>
  );
}

export default WeatherForecast;
