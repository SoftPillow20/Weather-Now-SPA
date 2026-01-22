import type { Dispatch, SetStateAction } from "react";
// import NoResults from "../components/SearchBar/NoResults";
import SearchBar from "../components/SearchBar/SearchBar";
import WeatherForecast from "../components/Forecasts/WeatherForecast";

type unitsOption = true | false;

type childrenProps = {
  isLoading: boolean;
  setCityInput: Dispatch<SetStateAction<string>>;
  setOpenUnits: Dispatch<SetStateAction<unitsOption>>;
};

function AppLayout({ isLoading, setCityInput, setOpenUnits }: childrenProps) {
  return (
    <>
      <SearchBar
        setOpenUnits={setOpenUnits}
        setCityInput={setCityInput}
        isLoading={isLoading}
      />
      <WeatherForecast />
    </>
  );
}

export default AppLayout;
