

import { render, screen } from '@testing-library/react';
import type { DailyWeather } from '../../../features/weather/api';
import DailyWeatherList from './DailyWeatherList';

describe('DailyWeatherList', () => {
  const daily: DailyWeather = {
    time: ['2026-04-27', '2026-04-28'],
    weather_code: [3, 51],
    sunrise: ['2026-04-27T05:27', '2026-04-28T05:24'],
    sunset: ['2026-04-27T21:08', '2026-04-28T21:10'],
    temperature_2m_max: [9.8, 8.2],
    temperature_2m_min: [1.6, 1.5],
    daylight_duration: [56399.18, 56718.38],
    sunshine_duration: [41972.04, 51461.55],
  };

  it('renders the section title', () => {
    render(<DailyWeatherList daily={daily} />);

    expect(
      screen.getByRole('heading', { name: 'Daily forecast' })
    ).toBeInTheDocument();
  });

  it('renders one card per daily item', () => {
    render(<DailyWeatherList daily={daily} />);

    expect(screen.getByRole('heading', { name: 'Monday' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Tuesday' })).toBeInTheDocument();

    expect(screen.getByText('27 April 2026')).toBeInTheDocument();
    expect(screen.getByText('28 April 2026')).toBeInTheDocument();

    expect(screen.getByText('Overcast')).toBeInTheDocument();
    expect(screen.getByText('Drizzle')).toBeInTheDocument();

    expect(screen.getByText('1.6°C / 9.8°C')).toBeInTheDocument();
    expect(screen.getByText('1.5°C / 8.2°C')).toBeInTheDocument();
  });
});