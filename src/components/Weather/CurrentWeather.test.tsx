

// CurrentWeather.test.tsx
import { render, screen } from '@testing-library/react';
import { CurrentWeather } from './CurrentWeather';
import type { CurrentWeather as CurrentWeatherData } from '../../features/weather/api';

const current: CurrentWeatherData = {
  time: '2026-04-26T19:45',
  interval: 900,
  temperature_2m: 7.1,
  is_day: 1,
  weather_code: 1,
  rain: 0,
  snowfall: 0,
  apparent_temperature: -0.3,
};

const units = {
  time: 'iso8601',
  interval: 'seconds',
  temperature_2m: '°C',
  is_day: '',
  weather_code: 'wmo code',
  rain: 'mm',
  snowfall: 'cm',
  apparent_temperature: '°C',
};

describe('CurrentWeather', () => {
  it('renders the current weather heading', () => {
    render(<CurrentWeather current={current} units={units} />);

    expect(
      screen.getByRole('heading', { name: /current weather/i })
    ).toBeInTheDocument();
  });

  it('renders temperature with unit', () => {
    render(<CurrentWeather current={current} units={units} />);

    expect(screen.getByText('7.1')).toBeInTheDocument();
    expect(screen.getByText('°C')).toBeInTheDocument();
  });

  it('renders weather description based on weather code', () => {
    render(<CurrentWeather current={current} units={units} />);

    expect(screen.getByText('Mostly sunny')).toBeInTheDocument();
  });

  it('renders apparent temperature', () => {
    render(<CurrentWeather current={current} units={units} />);

    expect(screen.getByText(/feels like -0.3°C/i)).toBeInTheDocument();
  });

  it('renders readable date and time', () => {
    render(<CurrentWeather current={current} units={units} />);

    expect(
      screen.getByText(/sunday, 19:45, 26 april 2026/i)
    ).toBeInTheDocument();
  });

  it('renders rain and snowfall values with units', () => {
    render(<CurrentWeather current={current} units={units} />);

    expect(
      screen.getByText(/rain 0 mm, snowfall 0 cm/i)
    ).toBeInTheDocument();
  });

  it('renders day label when is_day is 1', () => {
    render(<CurrentWeather current={current} units={units} />);

    expect(screen.getByText(/time of the day: day/i)).toBeInTheDocument();
  });

  it('renders night label when is_day is 0', () => {
    render(
      <CurrentWeather
        current={{ ...current, is_day: 0, weather_code: 0 }}
        units={units}
      />
    );

    expect(screen.getByText(/time of the day: night/i)).toBeInTheDocument();
    expect(screen.getByText('Clear night')).toBeInTheDocument();
  });
});