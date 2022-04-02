import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Politics from "./pages/politics/Politics";
import Science from "./pages/science/Science";
import Health from "./pages/health/Health";
import Details from "./pages/details/Details";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/science" element={<Science />} />
          <Route path="/health" element={<Health />} />
          <Route path="/politics" element={<Politics />} />
          <Route path="/details" element={<Details />}>
            <Route path=":id" element={<Details />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
