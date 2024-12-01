import React from 'react';

const Weather = ({ data }) => {
  const { name, main, weather } = data;

  return (
    <div>
      <h2>{name}</h2>
      <p>Temperatura: {main.temp}°C</p>
      <p>Condição: {weather[0].description}</p>
      <img
        src={`https://openweathermap.org/img/wn/${weather[0].icon}.png`}
        alt={weather[0].description}
      />
    </div>
  );
};

export default Weather;
