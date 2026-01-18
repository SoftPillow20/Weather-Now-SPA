import type { Dispatch, SetStateAction } from "react";
// import NoResults from "../components/SearchBar/NoResults";
import SearchBar from "../components/SearchBar/SearchBar";
import WeatherForecast from "../components/Forecasts/WeatherForecast";

type unitsOption = true | false;

type childrenProps = {
  setOpenUnits: Dispatch<SetStateAction<unitsOption>>;
};

function AppLayout({ setOpenUnits }: childrenProps) {
  return (
    <>
      <SearchBar setOpenUnits={setOpenUnits} />
      <WeatherForecast />
    </>
  );
}

export default AppLayout;
