import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppNav from "./components/AppNav/AppNav";
import AppLayout from "./Pages/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <AppNav />
      <Routes>
        <Route index element={<AppLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
