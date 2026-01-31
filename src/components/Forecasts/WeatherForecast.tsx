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

type Weather = {
  current?: {
    time: string;
    temperature_2m: number;
    relative_humidity_2m: number;
    apparent_temperature: number;
    precipitation: number;
    wind_speed_10m: number;
    weather_code: number;
  };
};

type childrenProps = {
  selectedCity: resultsState;
  weatherState: Weather;
};

function WeatherForecast({ weatherState, selectedCity }: childrenProps) {
  return (
    <main className={styles.forecast}>
      <div>
        <CurrentForecast
          selectedCity={selectedCity}
          weatherState={weatherState}
        />
        <DailyForecast />
      </div>
      <div>
        <HourlyForecast />
      </div>
    </main>
  );
}

export default WeatherForecast;
