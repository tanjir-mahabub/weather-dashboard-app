import React from 'react';

interface CityHistoryProps {
  history: string[];
  onSelectCity: (city: string) => void;
}

const CityHistory: React.FC<CityHistoryProps> = ({ history, onSelectCity }) => {
  return (
    <div className="flex flex-col gap-2 bg-slate-300 rounded-lg drop-shadow border p-4">
      <h2 className="text-sm sm:text-xl font-bold mb-2">Search History</h2>
      {history.length > 0 ? (
        <ul className='flex gap-3'>
          {history.map((city, index) => (
            <li key={index} className="mb-2">
              <button
                className="text-sm text-slate-300 bg-slate-800 rounded-2xl shadow-sm px-3 py-[5px] pb-2 hover:underline"
                onClick={() => onSelectCity(city)}
              >
                {city}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No search history available.</p>
      )}
    </div>
  );
};

export default CityHistory;