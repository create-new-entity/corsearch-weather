export type WeatherMeta = {
    label: string;
    icon: string;
  };
  
  export function getWeatherMeta(code: number, isDay: number): WeatherMeta {
    const isNight = isDay === 0;
  
    /*
        0 - 99 -> WMO Weather codes: https://www.nodc.noaa.gov/archive/arc0021/0002199/1.1/data/0-data/HTML/WMO-CODE/WMO4677.HTM
    */
    switch (code) {
      case 0:
        return isNight
          ? { label: 'Clear night', icon: '🌙' }
          : { label: 'Sunny', icon: '☀️' };
  
      case 1:
        return isNight
          ? { label: 'Mostly clear', icon: '🌙' }
          : { label: 'Mostly sunny', icon: '🌤️' };
  
      case 2:
        return { label: 'Partly cloudy', icon: '⛅' };
  
      case 3:
        return { label: 'Overcast', icon: '☁️' };
  
      case 45:
      case 48:
        return { label: 'Fog', icon: '🌫️' };
  
      case 51:
      case 53:
      case 55:
        return { label: 'Drizzle', icon: '🌦️' };
  
      case 61:
      case 63:
      case 65:
        return { label: 'Rain', icon: '🌧️' };
  
      case 66:
      case 67:
        return { label: 'Freezing rain', icon: '🌧️' };
  
      case 71:
      case 73:
      case 75:
        return { label: 'Snow', icon: '🌨️' };
  
      case 77:
        return { label: 'Snow grains', icon: '🌨️' };
  
      case 80:
      case 81:
      case 82:
        return { label: 'Rain showers', icon: '🌦️' };
  
      case 85:
      case 86:
        return { label: 'Snow showers', icon: '🌨️' };
  
      case 95:
        return { label: 'Thunderstorm', icon: '⛈️' };
  
      case 96:
      case 99:
        return { label: 'Thunderstorm with hail', icon: '⛈️' };
  
      default:
        return { label: 'Unknown', icon: '❔' };
    }
  }