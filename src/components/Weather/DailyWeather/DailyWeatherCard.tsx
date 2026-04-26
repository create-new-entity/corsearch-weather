

import { getReadableDate, formatDuration, getWeatherMeta } from '../../../util';
import styles from './DailyWeatherCard.module.scss';

export type DailyWeatherItem = {
  time: string;
  weatherCode: number;
  sunrise: string;
  sunset: string;
  temperatureMax: number;
  temperatureMin: number;
  daylightDuration: number;
  sunshineDuration: number;
};

type DailyWeatherCardProps = {
  day: DailyWeatherItem;
};


/*
  DailyWeatherCard renders forecast of a day.
*/
const DailyWeatherCard = ({ day }: DailyWeatherCardProps) => {
  const readableDate = getReadableDate(day.time);
  const sunrise = getReadableDate(day.sunrise);
  const sunset = getReadableDate(day.sunset);
  const weather = getWeatherMeta(day.weatherCode, 1);

  return (
    <article className={styles.card}>
      <header>
        <h3>{readableDate.day}</h3>
        <p>{readableDate.date}</p>
      </header>

      <div className={styles.main}>
        <span className={styles.icon}>{weather.icon}</span>
        <span>{weather.label}</span>
      </div>

      <p className={styles.temp}>
        {day.temperatureMin}°C / {day.temperatureMax}°C
      </p>

      <p>Sunrise {sunrise.time}</p>
      <p>Sunset {sunset.time}</p>
      <p>Daylight {formatDuration(day.daylightDuration)}</p>
      <p>Sunshine {formatDuration(day.sunshineDuration)}</p>
    </article>
  );
};

export default DailyWeatherCard;