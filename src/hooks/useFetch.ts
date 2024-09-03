import { useState, useEffect } from 'react';
import axios from 'axios';
import { WeatherData } from '../types/WeatherData';
import { useDebounce } from './useDebounce';

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;

export const useFetch = (city: string) => {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const debouncedCity = useDebounce(city, 300); // Debounce city input by 300ms

  useEffect(() => {
    const fetchData = async () => {
      if (!debouncedCity) {
        setData(null);
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `${API_URL}?q=${debouncedCity}&appid=${API_KEY}&units=metric`
        );

        if (response.status === 200) {
          setData(response.data);
        } else {
          setData(null); 
          setError(`Error: ${response.status} - ${response.statusText}`);
        }
      } catch (err) {
        setData(null); 
        if (axios.isAxiosError(err)) {
          if (err.response) {
            if (err.response.status === 404) {
              setError('City not found. Please try again with a different city.');
            } else {
              setError(`Error: ${err.response.status} - ${err.response.statusText}`);
            }
          } else if (err.request) {
            setError('Network error. Please check your connection.');
          } else {
            setError(`Error: ${err.message}`);
          }
        } else {
          setError('An unexpected error occurred.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [debouncedCity]);

  return { data, loading, error };
};
