import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PostProvider } from "./PostContext";
import AppNav from "./components/AppNav/AppNav";
import AppLayout from "./Pages/AppLayout";
import Error from "./Pages/Error";

function App() {
  return (
    <div>
      <PostProvider>
        <BrowserRouter>
          <AppNav />
          <Routes>
            <Route index element={<AppLayout />} />
            <Route path="error" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </PostProvider>
    </div>
  );
}

export default App;
