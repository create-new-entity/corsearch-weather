

import { Paper } from './../Paper';
import styles from './WelcomeBanner.module.scss';

const WelcomeBanner = () => {
  return (
    <Paper className={`${styles.banner} fade-in-up`}>
      <section className={styles.content}>
        <h2 className={styles.title}>Welcome 👋</h2>

        <p className={styles.message}>
          Search for a city in the search box to view current weather, hourly forecasts, and daily insights.
        </p>
      </section>
    </Paper>
  );
};

export default WelcomeBanner;