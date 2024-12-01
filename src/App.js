import React, { useState } from 'react';
import axios from 'axios';
import Weather from './Weather';
import Search from './Search';
import './App.css';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = 'b67cc70c956fb78e3a5e1b848aa4ae3a';
  const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

  const handleSearch = async (cityName) => {
    try {
      const response = await axios.get(`${BASE_URL}?q=${cityName}&appid=${API_KEY}&units=metric&lang=pt_br`);
      setWeatherData(response.data);
      setError(null);
    } catch (err) {
      setError('Cidade não encontrada');
      setWeatherData(null);
    }
  };

  return (
    <div>
      <h1>Previsão do Tempo</h1>
      <Search onSearch={handleSearch} />
      {error && <p>{error}</p>}
      {weatherData && <Weather data={weatherData} />}
    </div>
  );
};

export default App;
