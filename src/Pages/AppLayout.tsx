// import NoResults from "../components/SearchBar/NoResults";
import SearchBar from "../components/SearchBar/SearchBar";
import WeatherForecast from "../components/Forecasts/WeatherForecast";

function AppLayout() {
  return (
    <>
      <SearchBar />
      <WeatherForecast />
    </>
  );
}

export default AppLayout;
