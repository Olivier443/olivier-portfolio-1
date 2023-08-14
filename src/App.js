import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import GlobalStyles from "./GlobalStyles"
import Techicons from "./components/Techicons";
import WeatherApp from "./components/weather/WeatherApp";
import Root from "./components/Root";
import { SliderData } from "./components/SliderData";
import Navbar1 from "./Navbar/Navbar1";

function App() {
    return (
      <BrowserRouter>
        <GlobalStyles />
        <Routes>

          <Route path='/' element={<Navbar1/>}>

          <Route index element={<Root />} />
            <Route path='hero' element={<Hero />} />
            <Route path='about' element={<About />} />
            <Route path='projects' element={<Projects slides={SliderData} />} />
            <Route path='techicons' element={<Techicons />} />
            <Route path='weather' element={<WeatherApp />} />
          </Route>

        </Routes>
      </BrowserRouter>
    );
  }

export default App;
