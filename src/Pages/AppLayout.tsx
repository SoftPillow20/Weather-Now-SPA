import SearchBar from "../components/SearchBar/SearchBar";
import type { Dispatch, SetStateAction } from "react";
type unitsOption = true | false;

type childrenProps = {
  setOpenUnits: Dispatch<SetStateAction<unitsOption>>;
};

function AppLayout({ setOpenUnits }: childrenProps) {
  return <SearchBar setOpenUnits={setOpenUnits} />;
}

export default AppLayout;
