import styles from "./AppNav.module.css";
import UnitsBtn from "./UnitsBtn";

function AppNav() {
  return (
    <div className={styles.nav}>
      <img src="../assets/images/logo.svg" alt="Weather Now letter head" />
      <UnitsBtn />
    </div>
  );
}

export default AppNav;
