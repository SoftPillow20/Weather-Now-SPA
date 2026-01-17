import type { Dispatch, SetStateAction } from "react";
import styles from "./AppNav.module.css";
import UnitsBtn from "./UnitsBtn";

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

function AppNav({
  temp,
  setTemp,
  windSpeed,
  setWindSpeed,
  precipitation,
  setPrecipitation,
  openUnits,
  setOpenUnits,
}: childrenProps) {
  return (
    <div className={styles.nav}>
      <img src="../assets/images/logo.svg" alt="Weather Now letter head" />
      <UnitsBtn
        temp={temp}
        setTemp={setTemp}
        windSpeed={windSpeed}
        setWindSpeed={setWindSpeed}
        precipitation={precipitation}
        setPrecipitation={setPrecipitation}
        openUnits={openUnits}
        setOpenUnits={setOpenUnits}
      />
    </div>
  );
}

export default AppNav;
