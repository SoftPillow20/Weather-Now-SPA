import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import AppNav from "./components/AppNav/AppNav";
import AppLayout from "./Pages/AppLayout";
import Error from "./Pages/Error";

type units = "metric" | "imperial";
type unitsOption = true | false;

function App() {
  const [units, setUnits] = useState<units>("metric");
  const [openUnits, setOpenUnits] = useState<unitsOption>(false);

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
          units={units}
          setUnits={setUnits}
          openUnits={openUnits}
          setOpenUnits={setOpenUnits}
        />
        <Routes>
          <Route index element={<AppLayout setOpenUnits={setOpenUnits} />} />
          <Route path="error" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
