import React, { useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import CityHistory from './components/CityHistory';
import { useFetch } from './hooks/useFetch';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useHistory } from './hooks/useHistory';

const App: React.FC = () => {
  const [city, setCity] = useLocalStorage('lastCity', ''); // Save and retrieve last city
  const { data, loading, error } = useFetch(city);
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
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {data && <WeatherCard data={data} />}
      <CityHistory history={history} onSelectCity={handleSelectCity} />
    </div>
  );
};

export default App;