import { useState } from 'react';

export const useHistory = (initialHistory: string[] = []) => {
  const [history, setHistory] = useState<string[]>(initialHistory);

  const addCity = (city: string) => {
    if (!history.includes(city)) {
      setHistory([...history, city]);
    }
  };

  const removeCity = (city: string) => {
    setHistory(history.filter(item => item !== city));
  };

  return { history, addCity, removeCity };
};
