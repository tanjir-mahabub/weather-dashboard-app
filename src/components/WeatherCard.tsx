import React from 'react';
import { WeatherData } from '../types/WeatherData';

interface WeatherCardProps {
  data: WeatherData | null;
  error: string | null;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ data, error }) => {
  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!data) {
    return <p>Loading...</p>;
  }

  const temperature = data.main ? (data.main.temp - 273.15).toFixed(2) : 'N/A';
  const weatherDescription = data.weather && data.weather.length > 0
    ? data.weather[0].description
    : 'No weather description available';

  return (
    <div>
      <h2>Temperature: {temperature}°C</h2>
      <p>Weather: {weatherDescription}</p>
      <p>Humidity: {data.main?.humidity ?? 'N/A'}%</p>
      <p>Wind Speed: {data.wind?.speed ?? 'N/A'} m/s</p>
    </div>
  );
};

export default WeatherCard;
