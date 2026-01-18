import styles from "./DailyForecast.module.css";

function DailyForecast() {
  return (
    <section className={styles.dailyForecast}>
      <h2>Daily forecast</h2>
      <ul className={styles.daily}>
        <li>
          <p>Tue</p>
          <img src="../assets/images/icon-rain.webp" alt="rain icon" />
          <div>
            <p>68&deg;</p>
            <p>57&deg;</p>
          </div>
        </li>
        <li>
          <p>Wed</p>
          <img src="../assets/images/icon-drizzle.webp" alt="rain icon" />
          <div>
            <p>70&deg;</p>
            <p>59&deg;</p>
          </div>
        </li>
        <li>
          <p>Thu</p>
          <img src="../assets/images/icon-sunny.webp" alt="rain icon" />
          <div>
            <p>75&deg;</p>
            <p>57&deg;</p>
          </div>
        </li>
        <li>
          <p>Fri</p>
          <img src="../assets/images/icon-partly-cloudy.webp" alt="rain icon" />
          <div>
            <p>77&deg;</p>
            <p>55&deg;</p>
          </div>
        </li>
        <li>
          <p>Sat</p>
          <img src="../assets/images/icon-storm.webp" alt="rain icon" />
          <div>
            <p>70&deg;</p>
            <p>59&deg;</p>
          </div>
        </li>
        <li>
          <p>Sun</p>
          <img src="../assets/images/icon-snow.webp" alt="rain icon" />
          <div>
            <p>77&deg;</p>
            <p>61&deg;</p>
          </div>
        </li>
        <li>
          <p>Mon</p>
          <img src="../assets/images/icon-fog.webp" alt="rain icon" />
          <div>
            <p>75&deg;</p>
            <p>59&deg;</p>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default DailyForecast;
