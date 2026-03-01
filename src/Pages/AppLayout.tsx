import { useState } from "react";
import NoResults from "../components/SearchBar/NoResults";
import SearchBar from "../components/SearchBar/SearchBar";
import WeatherForecast from "../components/Forecasts/WeatherForecast";

type isNoResults = boolean;

function AppLayout() {
  const [noResults, setNoResults] = useState<isNoResults>(false);
  console.log(noResults);
  return (
    <>
      <SearchBar setNoResults={setNoResults} />
      {noResults ? <NoResults /> : <WeatherForecast />}
    </>
  );
}

export default AppLayout;
