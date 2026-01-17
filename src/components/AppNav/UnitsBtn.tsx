import type { Dispatch, SetStateAction } from "react";
import styles from "./UnitsBtn.module.css";

type temperature = "celsius" | "fahrenheit";
type windSpeed = "km/h" | "mph";
type precipitation = "mm" | "in";
type unitsOption = true | false;

type childrenProps = {
  temp: string;
  setTemp: Dispatch<SetStateAction<temperature>>;
  windSpeed: string;
  setWindSpeed: Dispatch<SetStateAction<windSpeed>>;
  precipitation: string;
  setPrecipitation: Dispatch<SetStateAction<precipitation>>;
  openUnits: boolean;
  setOpenUnits: Dispatch<SetStateAction<unitsOption>>;
};

function UnitsBtn({
  temp,
  setTemp,
  windSpeed,
  setWindSpeed,
  precipitation,
  setPrecipitation,
  openUnits,
  setOpenUnits,
}: childrenProps) {
  function btnActive() {
    setOpenUnits((bool) => !bool);
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
          <p>Switch to Imperial</p>
          <ul className={styles.imperialUnitsList}>
            <p>Temperature</p>
            <li onClick={() => setTemp("celsius")}>
              Celcius (°C)
              {temp === "celsius" ? (
                <img src="../assets/images/icon-checkmark.svg" />
              ) : (
                ""
              )}
            </li>
            <li onClick={() => setTemp("fahrenheit")}>
              Fahrenheit (°F)
              {temp === "fahrenheit" ? (
                <img src="../assets/images/icon-checkmark.svg" />
              ) : (
                ""
              )}
            </li>
          </ul>
          <ul className={styles.imperialUnitsList}>
            <p>Wind Speed</p>
            <li onClick={() => setWindSpeed("km/h")}>
              km/h
              {windSpeed === "km/h" ? (
                <img src="../assets/images/icon-checkmark.svg" />
              ) : (
                ""
              )}
            </li>
            <li onClick={() => setWindSpeed("mph")}>
              mph
              {windSpeed === "mph" ? (
                <img src="../assets/images/icon-checkmark.svg" />
              ) : (
                ""
              )}
            </li>
          </ul>
          <ul className={styles.imperialUnitsList}>
            <p>Precipitation</p>
            <li onClick={() => setPrecipitation("mm")}>
              Millimeters (mm)
              {precipitation === "mm" ? (
                <img src="../assets/images/icon-checkmark.svg" />
              ) : (
                ""
              )}
            </li>
            <li onClick={() => setPrecipitation("in")}>
              Inches (in)
              {precipitation == "in" ? (
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
