

import { render, screen } from '@testing-library/react';
import HourlyWeatherCard, { type HourlyWeatherItem } from './HourlyWeatherCard';

describe('HourlyWeatherCard', () => {
  const hour: HourlyWeatherItem = {
    time: '2026-04-27T09:00',
    weatherCode: 0,
    temperature: 4.9,
    rain: 0,
    snowfall: 0,
    apparentTemperature: -0.9,
    isDay: 1,
  };

  it('renders hourly weather information', () => {
    render(<HourlyWeatherCard hour={hour} />);

    expect(screen.getByRole('heading', { name: '09:00' })).toBeInTheDocument();

    expect(screen.getByText('☀️')).toBeInTheDocument();
    expect(screen.getByText('4.9°C')).toBeInTheDocument();
    expect(screen.getByText('Sunny')).toBeInTheDocument();

    expect(screen.getByText('Feels like -0.9°C')).toBeInTheDocument();
    expect(screen.getByText('Rain 0 mm')).toBeInTheDocument();
    expect(screen.getByText('Snowfall 0 cm')).toBeInTheDocument();
  });

  it('renders night weather metadata when isDay is 0', () => {
    render(
      <HourlyWeatherCard
        hour={{
          ...hour,
          isDay: 0,
        }}
      />
    );

    expect(screen.getByText('🌙')).toBeInTheDocument();
    expect(screen.getByText('Clear night')).toBeInTheDocument();
  });
});