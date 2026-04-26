
import { SearchBar } from '../components/SearchBar/SearchBar';
import { useGeocoding } from '../features/weather/hooks';
import styles from './App.module.scss';

const App = () => {
  const { city, isLoading, error, searchCity, clearCity } = useGeocoding();

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          Weather lookup
        </h1>
      </header>
      <section className={styles.searchContainer}>
        <SearchBar
          city={city}
          isLoading={isLoading}
          onSearch={searchCity}
          onRemove={clearCity}
          error={error || ''}
        />
      </section>
    </main>
  );
};

export default App;
