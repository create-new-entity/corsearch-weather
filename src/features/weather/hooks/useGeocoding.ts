
import { useState } from 'react';
import { fetchCity, type City } from '../api';


type GeocodingState = {
  city: City | null;
  isLoading: boolean;
  error: string | null;
};

const emptyState: GeocodingState = {
  city: null,
  isLoading: false,
  error: null,
};

export function useGeocoding() {
  const [state, setState] = useState<GeocodingState>(emptyState);

  const searchCity = async (query: string) => {
    setState({ city: null, isLoading: true, error: null });
    const city = await fetchCity(query);
    const isMatchedCityName = city?.name.toLowerCase().includes(query.toLowerCase()) || city?.admin3?.toLowerCase().includes(query.toLowerCase());
    if(!isMatchedCityName) {
      setState({ city: null, isLoading: false, error: 'No such city found.' });
      return;
    }
    setState({ city, isLoading: false, error: null });
  };

  const clearCity = () => {
    setState(emptyState);
  };

  return {
    city: state.city,
    isLoading: state.isLoading,
    error: state.error,
    searchCity,
    clearCity
  };
};