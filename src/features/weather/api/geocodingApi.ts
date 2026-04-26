
const GEOCODING_API_URL = 'https://geocoding-api.open-meteo.com/v1/search';

export type City = {
    name: string;
    latitude: number;
    longitude: number;
    country: string;
    admin1?: string;
    admin2?: string;
    admin3?: string;
};


export async function fetchCity(city: string): Promise<City | null> {

    if (!city.trim()) {
        return null;
    };
    const url = new URL(GEOCODING_API_URL);
  
    url.searchParams.set('name', city);
    url.searchParams.set('count', '1');
    url.searchParams.set('language', 'en');
    url.searchParams.set('format', 'json');
  
    const response = await fetch(url.toString());
  
    if (!response.ok) {
      throw new Error('Failed to fetch city data.');
    }

    const data = await response.json();

    if (!data.results || data.results.length === 0) {
        return null;
    };

    return {
        name: data.results[0].name,
        latitude: data.results[0].latitude,
        longitude: data.results[0].longitude,
        country: data.results[0].country,

        // admin1, admin2, admin3 are alternative names of the city.
        admin1: data.results[0].admin1,
        admin2: data.results[0].admin2,
        admin3: data.results[0].admin3
    };
  }