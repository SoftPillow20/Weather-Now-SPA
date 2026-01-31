import CurrentForecast from "./CurrentForecast";
import styles from "./WeatherForecast.module.css";
import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";

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

function WeatherForecast({ selectedCity }: childrenProps) {
  return (
    <main className={styles.forecast}>
      <div>
        <CurrentForecast selectedCity={selectedCity} />
        <DailyForecast />
      </div>
      <div>
        <HourlyForecast />
      </div>
    </main>
  );
}

export default WeatherForecast;
