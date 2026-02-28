import { useMemo, useState } from "react";
import styles from "./HourlyForecast.module.css";
import ListOfDays from "./ListOfDays";
import usePostContext from "../../contexts/UsePostContext";

type btnOpen = true | false;
type selectedDay = number;

function HourlyForecast() {
  const { weatherState, sortedDays, getWeatherKey } = usePostContext();
  const [isBtnOpen, setIsBtnOpen] = useState<btnOpen>(false);
  const [selectedDay, setSelectedDay] = useState<selectedDay>(0);

  const hourlyTemp = weatherState.hourly?.temperature_2m;
  const hourlyWeatherCode = weatherState.hourly?.weather_code;

  const ITEMS_PER_PAGE = weatherState.hourly?.temperature_2m
    ? weatherState.hourly?.temperature_2m.length / 7
    : 0;

  const getHourlyTempResults = useMemo(() => {
    const start = selectedDay * ITEMS_PER_PAGE;
    const end = (selectedDay + 1) * ITEMS_PER_PAGE;
    return hourlyTemp?.slice(start, end);
  }, [selectedDay, ITEMS_PER_PAGE, hourlyTemp]);

  const getHourlyWeatherCode = useMemo(() => {
    const start = selectedDay * ITEMS_PER_PAGE;
    const end = (selectedDay + 1) * ITEMS_PER_PAGE;
    return hourlyWeatherCode?.slice(start, end);
  }, [selectedDay, ITEMS_PER_PAGE, hourlyWeatherCode]);

  return (
    <section className={styles.hourlyForecast}>
      <div>
        <h2>Hourly forecast</h2>
        <button onClick={() => setIsBtnOpen((bool) => (bool ? false : true))}>
          {sortedDays[selectedDay]}
          <img src="./assets/images/icon-dropdown.svg" alt="dropdown icon" />
          {isBtnOpen && <ListOfDays setSelectedDay={setSelectedDay} />}
        </button>
      </div>
      <ul className={styles.hourly}>
        {getHourlyTempResults?.map((item, index) => (
          <li key={`${index + 1}`} className={styles.hourlyList}>
            <div>
              <img
                src={`../assets/images/icon-${getWeatherKey(getHourlyWeatherCode![index])}.webp`}
                alt="overcast icon"
              />
              <span>{index + 1 + ` ${index >= 12 ? "PM" : "AM"}`}</span>
            </div>
            {Math.ceil(item)}&deg;
          </li>
        ))}
      </ul>
    </section>
  );
}

export default HourlyForecast;
