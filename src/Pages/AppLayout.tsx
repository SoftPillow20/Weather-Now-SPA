import type { Dispatch, SetStateAction } from "react";
// import NoResults from "../components/SearchBar/NoResults";
import SearchBar from "../components/SearchBar/SearchBar";
import WeatherForecast from "../components/Forecasts/WeatherForecast";

type unitsOption = true | false;

type searchResult = {
  id: string | number;
  name: string;
};

type childrenProps = {
  isLoading: boolean;
  results: searchResult[];
  cityInput: string;
  setCityInput: Dispatch<SetStateAction<string>>;
  setOpenUnits: Dispatch<SetStateAction<unitsOption>>;
};

function AppLayout({
  results,
  isLoading,
  cityInput,
  setCityInput,
  setOpenUnits,
}: childrenProps) {
  return (
    <>
      <SearchBar
        setOpenUnits={setOpenUnits}
        setCityInput={setCityInput}
        cityInput={cityInput}
        isLoading={isLoading}
        results={results}
      />
      <WeatherForecast />
    </>
  );
}

export default AppLayout;
