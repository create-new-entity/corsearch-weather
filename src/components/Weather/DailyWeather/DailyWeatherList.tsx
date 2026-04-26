


import type { DailyWeather } from '../../../features/weather/api';
import DailyWeatherCard, { type DailyWeatherItem } from './DailyWeatherCard';
import styles from './DailyWeatherList.module.scss';

type DailyWeatherListProps = {
  daily: DailyWeather;
};

const DailyWeatherList = ({ daily }: DailyWeatherListProps) => {
  const dailyItems: DailyWeatherItem[] = daily.time.map((time, index) => ({
    time,
    weatherCode: daily.weather_code[index],
    sunrise: daily.sunrise[index],
    sunset: daily.sunset[index],
    temperatureMax: daily.temperature_2m_max[index],
    temperatureMin: daily.temperature_2m_min[index],
    daylightDuration: daily.daylight_duration[index],
    sunshineDuration: daily.sunshine_duration[index],
  }));

  return (
    <section className={`${styles.container} fade-in-up`}>
      <h2 className={styles.title}>Daily forecast</h2>

      <div className={styles.list}>
        {dailyItems.map((day) => (
          <DailyWeatherCard key={day.time} day={day} />
        ))}
      </div>
    </section>
  );
};

export default DailyWeatherList;