import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles"
import Root from "./components/Root";
import Hero from "./components/Hero";
import About from "./components/About";
import Techicons from "./components/Techicons";
import WeatherApp from "./components/weather/WeatherApp";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<Root />} />
        <Route path='/hero' element={<Hero />} />
        <Route path='/about' element={<About />} />
        <Route path='/techicons' element={<Techicons />} />
        <Route path='/weather' element={<WeatherApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
