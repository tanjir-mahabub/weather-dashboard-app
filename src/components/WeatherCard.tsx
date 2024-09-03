// components/WeatherCard.tsx
import React from 'react';
import { WeatherData } from '../types/WeatherData';
import StateDisplay from './StateDisplay';

interface WeatherCardProps {
  data: WeatherData | null;
  error: string | null;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ data, error }) => {
  
  const temperature = data?.main ? Math.round(data.main.temp) : 'N/A';
  
  const weatherDescription = data?.weather?.length
    ? data.weather[0].description
    : 'No weather description available';

  const weatherIcon = data?.weather?.length
    ? `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    : '';

  return (
    <StateDisplay error={error}>
      {data && (
        <div
          className={`flex justify-around items-center h-60 gap-10 w-full mx-auto p-4 bg-slate-400 border rounded-lg shadow-md transition-opacity duration-500 ease-in-out ${error ? 'opacity-0' : 'opacity-100'}`}
        >
          <div>
            <h2 className="text-2xl font-bold mb-2">{data.name}</h2>
            <div className="flex items-center mb-4">
              {weatherIcon && <img src={weatherIcon} alt="Weather icon" className="w-16 h-16" />}
              <span className="ml-4 text-3xl font-semibold">{temperature}°C</span>
            </div>
          </div>
          <div>
          <p className="text-sm sm:text-base mb-2 capitalize"><b>Weather: </b>{weatherDescription}</p>
          <p className="text-sm sm:text-base mb-2"><b>Humidity:</b> {data.main?.humidity ?? 'N/A'}%</p>
          <p className="text-sm sm:text-base"><b>Wind Speed:</b> {data.wind?.speed ?? 'N/A'} m/s</p>
          </div>
        </div>
      )}
    </StateDisplay>
  );
};

export default WeatherCard;
