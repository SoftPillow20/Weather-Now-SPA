import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import AppNav from "./components/AppNav/AppNav";
import AppLayout from "./Pages/AppLayout";

type temperature = "celsius" | "fahrenheit";
type windSpeed = "km/h" | "mph";
type precipitation = "mm" | "in";

function App() {
  const [temp, setTemp] = useState<temperature>("celsius");
  const [windSpeed, setWindSpeed] = useState<windSpeed>("km/h");
  const [precipitation, setPrecipitation] = useState<precipitation>("mm");
  const [openUnits, setOpenUnits] = useState(false);

  // Enables closing units button by clicking Escape anywhere on the screen
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenUnits(false);
    };

    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, []);

  return (
    <div>
      <BrowserRouter>
        <AppNav
          temp={temp}
          setTemp={setTemp}
          windSpeed={windSpeed}
          setWindSpeed={setWindSpeed}
          precipitation={precipitation}
          setPrecipitation={setPrecipitation}
          openUnits={openUnits}
          setOpenUnits={setOpenUnits}
        />
        <Routes>
          <Route index element={<AppLayout setOpenUnits={setOpenUnits} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
