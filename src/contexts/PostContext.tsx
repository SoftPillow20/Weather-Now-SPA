import { createContext, useState, useReducer, useEffect } from "react";
import type {
  units,
  unitsOption,
  resultsState,
  Weather,
  weatherAction,
  PostContextType,
  props,
  WMO,
} from "../Types/types";
import { fetchWeatherApi } from "openmeteo";

const initialWeatherState: Weather = {};

function weatherReducer(state: Weather, action: weatherAction): Weather {
  switch (action.type) {
    case "SET_CURRENT_WEATHER":
      return {
        ...state,
        current: action.payload,
      };
    case "SET_DAILY_WEATHER":
      return {
        ...state,
        daily: action.payload,
      };
    default:
      return state;
  }
}

const URL = "https://api.open-meteo.com/v1/forecast";
const PostContext = createContext<PostContextType | null>(null);

function PostProvider({ children }: props) {
  const [units, setUnits] = useState<units>("metric");
  const [openUnits, setOpenUnits] = useState<unitsOption>(false);
  const [cityInput, setCityInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [results, setResults] = useState<resultsState[]>([]);
  const [selectedCity, setSelectedCity] = useState<resultsState>({});
  const [weatherState, dispatch] = useReducer(
    weatherReducer,
    initialWeatherState,
  );

  const WMO: WMO = {
    sunny: [0, 1],
    "partly-cloudy": [2],
    overcast: [3],
    drizzle: [51, 53, 55, 56, 57],
    rain: [61, 63, 65, 66, 67, 80, 81, 82],
    snow: [71, 73, 75, 77, 85, 86],
    storm: [95, 96, 99],
  };

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  function sortDaysFromToday(days: string[]) {
    const todayIndex = new Date().getDay();

    return [...days.slice(todayIndex), ...days.slice(0, todayIndex)];
  }

  const sortedDays = sortDaysFromToday(days);

  function getWeatherKey(code: number): keyof typeof WMO | undefined {
    if (code === -1) {
      return;
    }

    return (Object.keys(WMO) as (keyof typeof WMO)[]).find((key) =>
      WMO[key].includes(code),
    );
  }

  // Enables closing units button by clicking Escape anywhere on the screen
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenUnits(false);
    };

    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, []);

  // Get city's results
  useEffect(() => {
    const controller = new AbortController();

    async function getCities() {
      // If no city input, set loading to false and return early (guard clause)
      if (!cityInput) {
        return;
      }

      // fetching the data from an API using fetch API
      const data = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${cityInput}&count=4&language=en&format=json`,
        { signal: controller.signal },
      );

      // this will be the data that are in the array
      const city: { results: [] } = await data.json();

      // return the city data
      return city;
    }

    getCities()
      .then((result) =>
        result?.results ? setResults(() => [...result.results]) : [],
      )
      .catch((err) => {
        if (err.name !== "AbortError") {
          console.error(err.message);
        }
      });

    return function () {
      controller.abort();
    };
  }, [cityInput]);

  // Get the weather API data
  useEffect(() => {
    async function getWeatherData() {
      // these params are in the open-meteo website
      const params = {
        latitude: selectedCity.latitude,
        longitude: selectedCity.longitude,
        daily: ["weather_code", "temperature_2m_max", "temperature_2m_min"],
        current: [
          "temperature_2m",
          "relative_humidity_2m",
          "apparent_temperature",
          "is_day",
          "precipitation",
          "wind_speed_10m",
        ],
        timezone: "auto",
      };

      // checks if there's a selected city (guard clause)
      if (Object.keys(selectedCity).length === 0) return;

      const responses = await fetchWeatherApi(URL, params);

      const response = responses[0];

      const daily = response.daily()!;
      const current = response.current()!;

      // Note: The order of weather variables in the URL query and the indices below need to match! (from open-meteo)

      // Save current weather data to the state
      dispatch({
        type: "SET_CURRENT_WEATHER",
        payload: {
          time: new Date().toDateString(),
          temperature_2m: Math.round(current.variables(0)!.value()),
          relative_humidity_2m: current.variables(1)!.value(),
          apparent_temperature: Math.round(current.variables(2)!.value()),
          precipitation: Math.round(current.variables(3)!.value()),
          wind_speed_10m: Math.round(current.variables(4)!.value()),
          weather_code: current.variables(5)!.value(),
        },
      });

      const weatherCode = daily.variables(0)?.valuesArray();
      const tempMaxDaily = daily.variables(1)?.valuesArray();
      const tempMinDaily = daily.variables(2)!.valuesArray();

      if (!weatherCode || !tempMaxDaily || !tempMinDaily) return;

      dispatch({
        type: "SET_DAILY_WEATHER",
        payload: {
          weather_code: Array.from(weatherCode),
          temperature_2m_max: Array.from(tempMaxDaily),
          temperature_2m_min: Array.from(tempMinDaily),
        },
      });
    }
    getWeatherData();
  }, [selectedCity]);

  return (
    <PostContext.Provider
      value={{
        units,
        setUnits,
        openUnits,
        setOpenUnits,
        cityInput,
        setCityInput,
        isLoading,
        setIsLoading,
        results,
        setResults,
        selectedCity,
        setSelectedCity,
        weatherState,
        dispatch,
        getWeatherKey,
        sortedDays,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

export { PostProvider, PostContext };
