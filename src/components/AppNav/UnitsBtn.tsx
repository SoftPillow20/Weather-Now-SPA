import styles from "./UnitsBtn.module.css";

function UnitsBtn() {
  return (
    <button className={styles.btn}>
      <img src="../assets/images/icon-units.svg" />
      <span>Units</span>
      <img src="../assets/images/icon-dropdown.svg" />
    </button>
  );
}

export default UnitsBtn;
