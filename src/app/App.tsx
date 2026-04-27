
import {
  SearchBar, CurrentWeather, Loader,
  HourlyWeatherList, DailyWeatherList, WelcomeBanner,
  Paper
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
        <Paper>
          <h1 className={styles.title}>
            Weather App
          </h1>
        </Paper>
      </header>
      <section className={`${styles.search} fade-in-up`}>
        <Paper className={styles.paperOverride}>
          <SearchBar
            city={city}
            isLoading={isLoading}
            onSearch={searchCity}
            onRemove={clearCity}
            error={error || ''}
          />
        </Paper>
      </section>
      <section className={styles.current}>
        {
          !city && !isWeatherLoading && <WelcomeBanner />
        }
        {
          isCurrentWeatherAvailable &&
          <CurrentWeather current={weather.current} units={weather.current_units}/>
        }
        {
          isWeatherLoading &&
          <Loader/>
        }
      </section>
      <section className={styles.hourly}>
        {
          isCurrentWeatherAvailable &&
          <HourlyWeatherList hourly={weather.hourly} />
        }
      </section>
      <section className={styles.daily}>
        {
          isCurrentWeatherAvailable &&
          <DailyWeatherList daily={weather.daily} />
        }
      </section>
    </main>
  );
};

export default App;
