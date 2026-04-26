

import { render, screen } from '@testing-library/react';
import type { HourlyWeather } from '../../../features/weather/api';
import HourlyWeatherList from './HourlyWeatherList';

describe('HourlyWeatherList', () => {
  const hourly: HourlyWeather = {
    time: ['2026-04-27T08:00', '2026-04-27T09:00'],
    temperature_2m: [3.3, 4.9],
    rain: [0, 0.2],
    snowfall: [0, 0],
    apparent_temperature: [-2.7, -0.9],
    weather_code: [1, 0],
    is_day: [1, 1],
  };

  it('renders the section title', () => {
    render(<HourlyWeatherList hourly={hourly} />);

    expect(
      screen.getByRole('heading', { name: 'Next 12 hours' })
    ).toBeInTheDocument();
  });

  it('renders one card per hourly item', () => {
    render(<HourlyWeatherList hourly={hourly} />);

    expect(screen.getByRole('heading', { name: '08:00' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '09:00' })).toBeInTheDocument();

    expect(screen.getByText('3.3°C')).toBeInTheDocument();
    expect(screen.getByText('4.9°C')).toBeInTheDocument();

    expect(screen.getByText('Mostly sunny')).toBeInTheDocument();
    expect(screen.getByText('Sunny')).toBeInTheDocument();

    expect(screen.getByText('Rain 0 mm')).toBeInTheDocument();
    expect(screen.getByText('Rain 0.2 mm')).toBeInTheDocument();
  });
});