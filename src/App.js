import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Politics from './pages/politics/Politics';
import Science from './pages/science/Science';
import Health from './pages/health/Health';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/science' element={<Science/>}></Route>
          <Route path='/health' element={<Health />}></Route>
          <Route path='/politics' element={<Politics/>}></Route>
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
