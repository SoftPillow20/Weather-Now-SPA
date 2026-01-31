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
type Weather = {
  current?: {
    time: string;
    temperature_2m: number;
    relative_humidity_2m: number;
    apparent_temperature: number;
    precipitation: number;
    wind_speed_10m: number;
    weather_code: number;
  };
};

type childrenProps = {
  isLoading: boolean;
  results: resultsState[];
  cityInput: string;
  selectedCity: resultsState;
  weatherState: Weather;
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
  weatherState,
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
      <WeatherForecast
        selectedCity={selectedCity}
        weatherState={weatherState}
      />
    </>
  );
}

export default AppLayout;
