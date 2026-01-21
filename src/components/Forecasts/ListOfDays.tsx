import styles from "./ListOfDays.module.css";

function ListOfDays() {
  return (
    <ul className={styles.listOfDays}>
      <li tabIndex={0}>Monday</li>
      <li tabIndex={0}>Tuesday</li>
      <li tabIndex={0}>Wednesday</li>
      <li tabIndex={0}>Thursday</li>
      <li tabIndex={0}>Friday</li>
      <li tabIndex={0}>Saturday</li>
      <li tabIndex={0}>Sunday</li>
    </ul>
  );
}

export default ListOfDays;
