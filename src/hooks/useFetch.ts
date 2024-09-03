import { useState, useEffect } from 'react';
import axios from 'axios';
import { WeatherData } from '../types/WeatherData';

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;

console.log('API Key:', API_KEY); 
console.log('API URL:', API_URL); 

export const useFetch = (city: string) => {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
        );

        if (response.status === 200) {
          setData(response.data);
        } else {
          setError(`Error: ${response.status} - ${response.statusText}`);
        }
      } catch (err) {        
        if (axios.isAxiosError(err)) {
          if (err.response) {            
            setError(`Error: ${err.response.status} - ${err.response.statusText}`);
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

    if (city) {
      fetchData();
    }
  }, [city]);

  return { data, loading, error };
};
