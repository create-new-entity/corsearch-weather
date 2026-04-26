

import { useState } from 'react';
import styles from './SearchBar.module.scss';

import type { City } from '../../features/weather/api';
import { Chip } from './Chip';

type SearchBarProps = {
  city: City | null;
  onRemove: () => void;
  onSearch: (query: string) => void;
  isLoading?: boolean;
  error: string;
};

export function SearchBar(props: SearchBarProps) {
  const { city, isLoading = false, onSearch, onRemove, error = '' } = props;
  const [query, setQuery] = useState('');

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedQuery = query.trim();

    if (!trimmedQuery || isLoading) {
        return;
    }

    onSearch(trimmedQuery);
    setQuery('');
  };

  return (
    <form className={styles.searchBar} onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor='city-search'>
        Search city
      </label>

      <div className={styles.controls}>
        <input
          id='city-search'
          className={styles.input}
          type='search'
          value={query}
          placeholder='Search for a city...'
          disabled={isLoading}
          onChange={(event) => setQuery(event.target.value)}
          required
        />

        <button className={styles.button} type='submit' disabled={isLoading}>
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </div>
      {
        error &&
        <p className={styles.error}>{error}</p>
      }
      {
        city &&
        <Chip
          city={city.name}
          country={city.country}
          onRemove={onRemove}
        />
      }
    </form>
  );
}