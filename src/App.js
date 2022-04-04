import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import World from "./pages/world/World";
import Politics from "./pages/politics/Politics";
import Tech from "./pages/tech/Tech";
import Health from "./pages/health/Health";
import Details from "./pages/details/Details";
import ArticlesProvider from "./contexts/ArticlesContext";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import NotFound from "./pages/notFound/NotFound";
import StickyHeader from "./components/stickyheader/StickyHeader";

import "./App.css";
import InfoSection from "./components/infosection/InfoSection";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <InfoSection />
        <StickyHeader />
        <ArticlesProvider>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/world" element={<World />} />
            <Route path="/politics" element={<Politics />} />
            <Route path="/tech" element={<Tech />} />
            <Route path="/health" element={<Health />} />
            <Route path="/details" element={<Details />}>
              <Route path=":id" element={<Details />} />
            </Route>
          </Routes>
        </ArticlesProvider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
