import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city.trim() !== '') {
      onSearch(city.trim());
      setCity('');
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="px-4 py-2 rounded-lg w-full bg-slate-300 border placeholder-color"
        placeholder="Enter city name"
      />
      <button
        onClick={handleSearch}
        className="px-4 pt-2 pb-2.5 bg-slate-500 hover:bg-slate-700 border hover:border-slate-400 text-white rounded-lg"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;