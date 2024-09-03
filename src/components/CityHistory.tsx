import React from 'react';

interface CityHistoryProps {
  history: string[];
  onSelectCity: (city: string) => void;
}

const CityHistory: React.FC<CityHistoryProps> = ({ history, onSelectCity }) => {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-bold">Search History</h3>
      <ul className="mt-2 space-y-2">
        {history.map((city) => (
          <li
            key={city}
            className="cursor-pointer text-blue-500"
            onClick={() => onSelectCity(city)}
          >
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CityHistory;