import type { Dispatch, SetStateAction } from "react";
import styles from "./AppNav.module.css";
import UnitsBtn from "./UnitsBtn";

type units = "metric" | "imperial";
type unitsOption = true | false;

type childrenProps = {
  units: string;
  setUnits: Dispatch<SetStateAction<units>>;
  openUnits: boolean;
  setOpenUnits: Dispatch<SetStateAction<unitsOption>>;
};

function AppNav({ units, setUnits, openUnits, setOpenUnits }: childrenProps) {
  return (
    <div className={styles.nav}>
      <img src="../assets/images/logo.svg" alt="Weather Now letter head" />
      <UnitsBtn
        units={units}
        setUnits={setUnits}
        openUnits={openUnits}
        setOpenUnits={setOpenUnits}
      />
    </div>
  );
}

export default AppNav;
