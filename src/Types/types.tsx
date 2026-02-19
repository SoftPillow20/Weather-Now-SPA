export type units = "metric" | "imperial";
export type unitsOption = true | false;

export type props = {
  children: React.ReactNode;
};

export type resultsState = {
  id?: number;
  name?: string;
  country?: string;
  latitude?: number;
  longitude?: number;
};

export type Weather = {
  current?: {
    time: string;
    temperature_2m: number;
    relative_humidity_2m: number;
    apparent_temperature: number;
    precipitation: number;
    wind_speed_10m: number;
    weather_code: number;
  };
  daily?: {
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
  };
};

export type weatherAction =
  | {
      type: "SET_CURRENT_WEATHER";
      payload: Weather["current"];
    }
  | {
      type: "SET_DAILY_WEATHER";
      payload: Weather["daily"];
    };

export type WMO = {
  sunny: number[];
  "partly-cloudy": number[];
  overcast: number[];
  drizzle: number[];
  rain: number[];
  snow: number[];
  storm: number[];
};

export type PostContextType = {
  units: units;
  setUnits: React.Dispatch<React.SetStateAction<units>>;
  openUnits: unitsOption;
  setOpenUnits: React.Dispatch<React.SetStateAction<unitsOption>>;
  cityInput: string;
  setCityInput: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  results: resultsState[];
  setResults: React.Dispatch<React.SetStateAction<resultsState[]>>;
  selectedCity: resultsState;
  setSelectedCity: React.Dispatch<React.SetStateAction<resultsState>>;
  weatherState: Weather;
  dispatch: React.Dispatch<weatherAction>;
  sortedDays: string[];
  getWeatherKey: (code: number) => keyof WMO | undefined;
};
