import styles from "./HourlyForecast.module.css";

function HourlyForecast() {
  return (
    <section className={styles.hourlyForecast}>
      <div>
        <h2>Hourly forecast</h2>
        <button>
          Tuesday
          <img src="./assets/images/icon-dropdown.svg" alt="dropdown icon" />
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
