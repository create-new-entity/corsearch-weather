

import { Paper } from '../../Paper';
import type {
    CurrentWeather as CurrentWeatherData
} from '../../../features/weather/api';
import styles from './CurrentWeather.module.scss';
import { getReadableDate, getWeatherMeta } from '../../../util';

type CurrentWeatherProps = {
  current: CurrentWeatherData;
  units: Record<string, string>;
};

const CurrentWeather = ({ current, units }: CurrentWeatherProps) => {
  const dayLabel = current.is_day === 1 ? 'Day' : 'Night';

  const { day, date, time } = getReadableDate(current.time);
  const { label, icon } = getWeatherMeta(current.weather_code, current.is_day);

  return (
    <Paper className={`${styles.paperOverRide} fade-in-up`}>
      <section className={styles.current}>
        <h3>Current Weather</h3>
        <div className={styles.weatherIconContainer}>
            <div className={styles.weatherIcon}>
                {icon}
            </div>
            <div className={styles.temperature}>
                <span className={styles.temperatureValue}>
                    {current.temperature_2m}
                </span>
                <span className={styles.temperatureUnit}>
                    {units.temperature_2m}
                </span>
            </div>
            <p>{label}</p>
        </div>
        <div>
            <p>
                Feels like {current.apparent_temperature}{units.apparent_temperature}
            </p>
        </div>
        <p>{day}, {time}, {date}</p>
        <p>Rain {current.rain} {units.rain}, Snowfall {current.snowfall} {units.snowfall}</p>
        <p>Time of the day: {dayLabel}</p>
      </section>
    </Paper>
  );
};

export default CurrentWeather;