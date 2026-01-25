import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import AppNav from "./components/AppNav/AppNav";
import AppLayout from "./Pages/AppLayout";
import Error from "./Pages/Error";

type units = "metric" | "imperial";
type unitsOption = true | false;

type searchResult = {
  id: string | number;
  name: string;
};

function App() {
  const [units, setUnits] = useState<units>("metric");
  const [openUnits, setOpenUnits] = useState<unitsOption>(false);
  const [cityInput, setCityInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [results, setResults] = useState<searchResult[]>([]);

  // Enables closing units button by clicking Escape anywhere on the screen
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenUnits(false);
    };

    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, []);

  useEffect(() => {
    async function getCities() {
      if (!cityInput) {
        setIsLoading(false);
        return;
      }

      if (cityInput.split("").length >= 1) {
        setIsLoading(true);
      }

      const data = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${cityInput}&count=4&language=en&format=json`,
      );

      const city = data.json();
      return city;
    }
    getCities().then((result) =>
      result?.results ? setResults(() => [result.results]) : [],
    );
  }, [isLoading, cityInput]);

  return (
    <div>
      <BrowserRouter>
        <AppNav
          units={units}
          setUnits={setUnits}
          openUnits={openUnits}
          setOpenUnits={setOpenUnits}
        />
        <Routes>
          <Route
            index
            element={
              <AppLayout
                isLoading={isLoading}
                setOpenUnits={setOpenUnits}
                setCityInput={setCityInput}
                cityInput={cityInput}
                results={results}
              />
            }
          />
          <Route path="error" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
