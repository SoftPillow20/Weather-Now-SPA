import { useState } from "react";
import styles from "./HourlyForecast.module.css";
import ListOfDays from "./ListOfDays";

type btnOpen = true | false;

function HourlyForecast() {
  const [isBtnOpen, setIsBtnOpen] = useState<btnOpen>(false);

  return (
    <section className={styles.hourlyForecast}>
      <div>
        <h2>Hourly forecast</h2>
        <button onClick={() => setIsBtnOpen((bool) => (bool ? false : true))}>
          Tuesday
          <img src="./assets/images/icon-dropdown.svg" alt="dropdown icon" />
          {isBtnOpen && <ListOfDays />}
        </button>
      </div>
      <ul className={styles.hourly}>
        <li className={styles.hourlyList}>
          <div>
            <img
              src="../assets/images/icon-overcast.webp"
              alt="overcast icon"
            />
            <span>3 PM</span>
          </div>
          68&deg;
        </li>
      </ul>
    </section>
  );
}

export default HourlyForecast;
