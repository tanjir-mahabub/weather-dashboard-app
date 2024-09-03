import React from 'react';
import { WeatherData } from '../types/WeatherData';

interface WeatherCardProps {
  data: WeatherData | null;
  error: string | null;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ data, error }) => {
  
  if (error) {
    return (
      <div className="flex justify-center items-center h-60 w-full mx-auto p-4 bg-red-300 border rounded-lg shadow-md">
        <p className="text-red-800 font-semibold">{error}</p>
      </div>
    );
  }

  if (!data) {
    return null; // If there's no data and no error, don't render anything
  }

  const temperature = data.main ? Math.round(data.main.temp) : 'N/A';
  const weatherDescription = data.weather?.[0]?.description || 'No weather description available';
  const weatherIcon = data.weather?.[0]?.icon
    ? `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    : '';

  return (
    <div
      className="flex justify-around items-center h-60 gap-10 w-full mx-auto p-4 bg-slate-300 border rounded-lg shadow-md transition-opacity duration-500 ease-in-out"
    >
      <div className='flex flex-col justify-center gap-1'>
        <h2 className="text-2xl font-bold">{data.name}</h2>
        <div className="flex items-center">
          {weatherIcon && <img src={weatherIcon} alt="Weather icon" className="w-16 h-16" />}
          <span className="ml-4 text-3xl font-semibold">{temperature}°C</span>
        </div>
      </div>
      <div className='flex flex-col gap-1 justify-start'>
        <p className="text-sm sm:text-base capitalize"><b>Weather: </b>{weatherDescription}</p>
        <p className="text-sm sm:text-base"><b>Humidity:</b> {data.main?.humidity ?? 'N/A'}%</p>
        <p className="text-sm sm:text-base"><b>Wind Speed:</b> {data.wind?.speed ?? 'N/A'} m/s</p>
      </div>
    </div>
  );
};

export default WeatherCard;
