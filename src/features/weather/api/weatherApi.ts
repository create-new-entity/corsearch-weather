


const FORECAST_API_URL = 'https://api.open-meteo.com/v1/forecast';

/*
    Example usage:

    https://api.open-meteo.com/v1/forecast?latitude=60.1695&longitude=24.9354&daily=sunrise,sunset,weather_code,temperature_2m_max,temperature_2m_min,daylight_duration,sunshine_duration&hourly=temperature_2m,rain,snowfall,apparent_temperature,weather_code,is_day&current=temperature_2m,is_day,weather_code,rain,snowfall,apparent_temperature&timezone=auto&past_days=7&forecast_days=7&forecast_hours=12
*/

export type CurrentWeather = {
  time: string;
  weather_code: number;
  rain: number;
  snowfall: number;
  interval: number;
  temperature_2m: number;
  is_day: number;
  apparent_temperature: number;
};

export type HourlyWeather = {
  time: string[];
  weather_code: number[];
  temperature_2m: number[];
  rain: number[];
  snowfall: number[];
  apparent_temperature: number[];
  is_day: number[];
};

export type DailyWeather = {
  time: string[];
  weather_code: number[];
  sunrise: string[];
  sunset: string[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  daylight_duration: number[];
  sunshine_duration: number[];
};

export type WeatherData = {
  latitude: number;
  longitude: number;
  timezone: string;

  current: CurrentWeather;
  hourly: HourlyWeather;
  daily: DailyWeather;

  current_units: Record<string, string>;
  hourly_units: Record<string, string>;
  daily_units: Record<string, string>;
};

export async function fetchWeather(
  latitude: number,
  longitude: number
): Promise<WeatherData> {
  const url = new URL(FORECAST_API_URL);

  url.searchParams.set('latitude', String(latitude));
  url.searchParams.set('longitude', String(longitude));

  url.searchParams.set(
    'daily',
    'sunrise,sunset,weather_code,temperature_2m_max,temperature_2m_min,daylight_duration,sunshine_duration'
  );
  
  url.searchParams.set(
    'hourly',
    'temperature_2m,rain,snowfall,apparent_temperature,weather_code,is_day'
  );

  url.searchParams.set(
    'current',
    'temperature_2m,is_day,weather_code,rain,snowfall,apparent_temperature'
  );

  url.searchParams.set('timezone', 'Europe/Helsinki');
  url.searchParams.set('past_days', '7');
  url.searchParams.set('forecast_days', '7');
  url.searchParams.set('forecast_hours', '12');

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error('Failed to fetch weather data.');
  }

  const data = await response.json();

  if (!data.current || !data.hourly || !data.daily) {
    throw new Error('Weather data is incomplete.');
  }

  return data;
}