

import { render, screen } from '@testing-library/react';
import WelcomeBanner from './WelcomeBanner';

describe('WelcomeBanner', () => {
  it('renders the welcome title', () => {
    render(<WelcomeBanner />);

    expect(
      screen.getByRole('heading', { name: /welcome/i })
    ).toBeInTheDocument();
  });

  it('asks the user to search for a city', () => {
    render(<WelcomeBanner />);

    expect(
      screen.getByText(/search for a city/i)
    ).toBeInTheDocument();
  });

  it('mentions the available weather views', () => {
    render(<WelcomeBanner />);

    expect(screen.getByText(/current weather/i)).toBeInTheDocument();
    expect(screen.getByText(/hourly forecasts/i)).toBeInTheDocument();
    expect(screen.getByText(/daily insights/i)).toBeInTheDocument();
  });
});