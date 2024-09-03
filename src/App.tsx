import React, { useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import CityHistory from './components/CityHistory';
import { useFetch } from './hooks/useFetch';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useHistory } from './hooks/useHistory';

const App: React.FC = () => {
  const [city, setCity] = useLocalStorage('lastCity', ''); // Save and retrieve last city
  const { data, error } = useFetch(city);
  const { history, addCity } = useHistory();

  const handleSearch = (newCity: string) => {
    setCity(newCity);
    addCity(newCity);
  };

  const handleSelectCity = (city: string) => {
    setCity(city);
  };

  useEffect(() => {
    if (city) {
      addCity(city);
    }
  }, [city, addCity]);

  return (
    <div className="bg-slate-800 overflow-x-hidden">
      <div className="flex flex-col max-w-2xl mx-auto sm:justify-center content-center p-7 gap-12 h-screen">
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white mb-4 text-center">Weather Dashboard</h1>
        <SearchBar onSearch={handleSearch} />
        <div className="flex">
          {data ? <WeatherCard data={data} error={error} /> : (
            <div className="flex justify-center items-center h-60 w-full mx-auto p-4 bg-red-300 border rounded-lg shadow-md">
            <p className="text-red-800 font-semibold">{error}</p>
          </div>
          )}
        </div>
        <CityHistory history={history} onSelectCity={handleSelectCity} />
      </div>
    </div>
  );
};

export default App;
