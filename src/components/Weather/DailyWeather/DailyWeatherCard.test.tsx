

import { render, screen } from '@testing-library/react';
import DailyWeatherCard, { type DailyWeatherItem } from './DailyWeatherCard';

describe('DailyWeatherCard', () => {
  const day: DailyWeatherItem = {
    time: '2026-04-27',
    weatherCode: 3,
    sunrise: '2026-04-27T05:27',
    sunset: '2026-04-27T21:08',
    temperatureMax: 9.8,
    temperatureMin: 1.6,
    daylightDuration: 56399.18,
    sunshineDuration: 41972.04,
  };

  it('renders daily weather information', () => {
    render(<DailyWeatherCard day={day} />);

    expect(screen.getByRole('heading', { name: 'Monday' })).toBeInTheDocument();
    expect(screen.getByText('27 April 2026')).toBeInTheDocument();

    expect(screen.getByText('☁️')).toBeInTheDocument();
    expect(screen.getByText('Overcast')).toBeInTheDocument();

    expect(screen.getByText('1.6°C / 9.8°C')).toBeInTheDocument();

    expect(screen.getByText('Sunrise 05:27')).toBeInTheDocument();
    expect(screen.getByText('Sunset 21:08')).toBeInTheDocument();

    expect(screen.getByText('Daylight 15h 40m')).toBeInTheDocument();
    expect(screen.getByText('Sunshine 11h 40m')).toBeInTheDocument();
  });
});