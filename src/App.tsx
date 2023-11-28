import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WeatherPage from './views/weatherPage/WeatherPage';

export const API = "https://dataservice.accuweather.com";
export const API_KEY = "3vMphpay81AU2hjh6QZXGlketl9M62WJ";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WeatherPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
