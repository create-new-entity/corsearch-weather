import { useEffect, useState } from 'react';
import { fetchWeather, type WeatherData } from '../api/weatherApi';
import type { City } from '../api';

type WeatherState = {
  weather: WeatherData | null;
  isLoading: boolean;
  error: string | null;
};

const emptyState: WeatherState = {
  weather: null,
  isLoading: false,
  error: null,
};

export function useWeather(city: City | null) {
  const [state, setState] = useState<WeatherState>(emptyState);

  useEffect(() => {
    if (!city) return;

    const loadWeather = async () => {
      try {
        setState({ weather: null, isLoading: true, error: null });

        const weather = await fetchWeather(city.latitude, city.longitude);

        setState({
          weather,
          isLoading: false,
          error: null,
        });
      } catch {
        setState({
          weather: null,
          isLoading: false,
          error: 'Failed to load weather data.',
        });
      }
    };

    loadWeather();
  }, [city]);

  if (!city) {
    return emptyState;
  }

  return {
    weather: state.weather,
    isLoading: state.isLoading,
    error: state.error,
  };
}