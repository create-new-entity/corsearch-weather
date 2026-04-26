

import { getReadableDate } from './../../../util/date';
import { getWeatherMeta } from './../../../util/weatherCode';
import styles from './HourlyWeatherCard.module.scss';


export type HourlyWeatherItem = {
  time: string;
  weatherCode: number;
  temperature: number;
  rain: number;
  snowfall: number;
  apparentTemperature: number;
  isDay: number;
};

type HourlyWeatherCardProps = {
  hour: HourlyWeatherItem;
};

const HourlyWeatherCard = ({ hour }: HourlyWeatherCardProps) => {
  const { time } = getReadableDate(hour.time);
  const weather = getWeatherMeta(hour.weatherCode, hour.isDay);

  return (
    <article className={styles.card}>
      <h3 className={styles.time}>{time}</h3>
      <div className={styles.main}>
        <span className={styles.icon}>{weather.icon}</span>
        <span className={styles.temp}>{hour.temperature}°C</span>
      </div>
      <p>{weather.label}</p>
      <p>Feels like {hour.apparentTemperature}°C</p>
      <p>Rain {hour.rain} mm</p>
      <p className={styles.meta}>
        Snowfall {hour.snowfall} cm
      </p>
    </article>
  );
};

export default HourlyWeatherCard;
