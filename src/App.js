import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Politics from "./pages/politics/Politics";
import Science from "./pages/science/Science";
import Health from "./pages/health/Health";
import Details from "./pages/details/Details";
import DetailsProvider from "./contexts/DetailsContext";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <DetailsProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/science" element={<Science />} />
            <Route path="/health" element={<Health />} />
            <Route path="/politics" element={<Politics />} />
            <Route path="/details" element={<Details />}>
              <Route path=":id" element={<Details />} />
            </Route>
          </Routes>
        </DetailsProvider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
