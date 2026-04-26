

import type { HourlyWeather } from '../../../features/weather/api';
import type { HourlyWeatherItem } from './HourlyWeatherCard';
import HourlyWeatherCard from './HourlyWeatherCard';
import styles from './HourlyWeatherList.module.scss';

type HourlyWeatherListProps = {
    hourly: HourlyWeather;
};
  
const HourlyWeatherList = ({ hourly }: HourlyWeatherListProps) => {
    const hourlyItems: HourlyWeatherItem[] = hourly.time.map((time, index) => ({
      time,
      weatherCode: hourly.weather_code[index],
      temperature: hourly.temperature_2m[index],
      rain: hourly.rain[index],
      snowfall: hourly.snowfall[index],
      apparentTemperature: hourly.apparent_temperature[index],
      isDay: hourly.is_day[index],
    }));
  
    return (
      <section className={`${styles.container} fade-in-up`}>
        <h2 className={styles.title}>
          Next 12 hours
        </h2>
        <div className={styles.list}>
          {
            hourlyItems.map((hour) => {
              return <HourlyWeatherCard key={hour.time} hour={hour} />;
            })
          }
        </div>
    </section>);
};

export default HourlyWeatherList;