import type { Dispatch, SetStateAction } from "react";
// import NoResults from "../components/SearchBar/NoResults";
import SearchBar from "../components/SearchBar/SearchBar";
import WeatherForecast from "../components/Forecasts/WeatherForecast";

type unitsOption = true | false;

type resultsState = {
  id?: number;
  name?: string;
  country?: string;
  latitude?: number;
  longitude?: number;
};

type childrenProps = {
  isLoading: boolean;
  results: resultsState[];
  cityInput: string;
  selectedCity: resultsState;
  setSelectedCity: Dispatch<SetStateAction<resultsState>>;
  setCityInput: Dispatch<SetStateAction<string>>;
  setOpenUnits: Dispatch<SetStateAction<unitsOption>>;
};

function AppLayout({
  results,
  isLoading,
  cityInput,
  setCityInput,
  setOpenUnits,
  selectedCity,
  setSelectedCity,
}: childrenProps) {
  return (
    <>
      <SearchBar
        setOpenUnits={setOpenUnits}
        setCityInput={setCityInput}
        cityInput={cityInput}
        isLoading={isLoading}
        results={results}
        setSelectedCity={setSelectedCity}
      />
      <WeatherForecast selectedCity={selectedCity} />
    </>
  );
}

export default AppLayout;
