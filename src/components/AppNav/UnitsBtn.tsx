import type { Dispatch, SetStateAction } from "react";
import styles from "./UnitsBtn.module.css";

type units = "metric" | "imperial";
type unitsOption = true | false;

type childrenProps = {
  units: string;
  setUnits: Dispatch<SetStateAction<units>>;
  openUnits: boolean;
  setOpenUnits: Dispatch<SetStateAction<unitsOption>>;
};

function UnitsBtn({ units, setUnits, openUnits, setOpenUnits }: childrenProps) {
  function btnActive() {
    setOpenUnits((bool) => !bool);
  }

  function changeUnits() {
    setUnits((units) => (units === "metric" ? "imperial" : "metric"));
  }

  return (
    <div className={styles.unitsBtn}>
      <button onClick={() => btnActive()} className={styles.btn}>
        <img src="../assets/images/icon-units.svg" />
        <span>Units</span>
        <img src="../assets/images/icon-dropdown.svg" />
      </button>

      {openUnits && (
        <div className={styles.imperialUnits}>
          <button onClick={() => changeUnits()}>
            Switch to {units === "metric" ? "Imperial" : "Metric"}
          </button>
          <ul className={styles.imperialUnitsList}>
            <p>Temperature</p>
            <li className={units === "metric" ? styles.active : ""}>
              Celcius (°C)
              {units === "metric" ? (
                <img src="../assets/images/icon-checkmark.svg" />
              ) : (
                ""
              )}
            </li>
            <li className={units === "imperial" ? styles.active : ""}>
              Fahrenheit (°F)
              {units === "imperial" ? (
                <img src="../assets/images/icon-checkmark.svg" />
              ) : (
                ""
              )}
            </li>
          </ul>
          <ul className={styles.imperialUnitsList}>
            <p>Wind Speed</p>
            <li className={units === "metric" ? styles.active : ""}>
              km/h
              {units === "metric" ? (
                <img src="../assets/images/icon-checkmark.svg" />
              ) : (
                ""
              )}
            </li>
            <li className={units === "imperial" ? styles.active : ""}>
              mph
              {units === "imperial" ? (
                <img src="../assets/images/icon-checkmark.svg" />
              ) : (
                ""
              )}
            </li>
          </ul>
          <ul className={styles.imperialUnitsList}>
            <p>Precipitation</p>
            <li className={units === "metric" ? styles.active : ""}>
              Millimeters (mm)
              {units === "metric" ? (
                <img src="../assets/images/icon-checkmark.svg" />
              ) : (
                ""
              )}
            </li>
            <li className={units === "imperial" ? styles.active : ""}>
              Inches (in)
              {units == "imperial" ? (
                <img src="../assets/images/icon-checkmark.svg" />
              ) : (
                ""
              )}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default UnitsBtn;
