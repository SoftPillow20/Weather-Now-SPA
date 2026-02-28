import usePostContext from "../../contexts/UsePostContext";
import styles from "./ListOfDays.module.css";

type childrenProps = {
  setSelectedDay: React.Dispatch<React.SetStateAction<number>>;
};

function ListOfDays({ setSelectedDay }: childrenProps) {
  const { selectedCity, sortedDays } = usePostContext();
  return (
    <ul className={styles.listOfDays}>
      {selectedCity &&
        sortedDays.map((day, index) => (
          <li key={day} tabIndex={0} onClick={() => setSelectedDay(index)}>
            {day}
          </li>
        ))}
    </ul>
  );
}

export default ListOfDays;
