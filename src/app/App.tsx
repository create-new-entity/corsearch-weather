
import {
  SearchBar, CurrentWeather, Loader, HourlyWeatherList
} from '../components';
import { useGeocoding, useWeather } from '../features/weather/hooks';
import styles from './App.module.scss';

const App = () => {
  const { city, isLoading, error, searchCity, clearCity } = useGeocoding();

  const { weather, isLoading: isWeatherLoading } = useWeather(city);
  const isCurrentWeatherAvailable = weather && weather.current && weather.current_units;

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          Weather App
        </h1>
      </header>
      <section className={`${styles.searchContainer} fade-in-up`}>
        <SearchBar
          city={city}
          isLoading={isLoading}
          onSearch={searchCity}
          onRemove={clearCity}
          error={error || ''}
        />
      </section>
      <section className={styles.currentWeather}>
        {
          isCurrentWeatherAvailable &&
          <CurrentWeather current={weather.current} units={weather.current_units}/>
        }
        {
          isWeatherLoading &&
          <Loader/>
        }
      </section>
      <section className={styles.hourlyWeather}>
        {
          isCurrentWeatherAvailable &&
          <HourlyWeatherList hourly={weather.hourly} />
        }
      </section>
    </main>
  );
};

export default App;
