interface WeatherCondition {
    id: number;
    main: string;
    description: string;
    icon: string;
  }
  

  
  interface MainForecast {
    temp: number;
    temp_min: number;
    temp_max: number;
  }
  
  interface Forecast {
    dt: number;
    main: MainForecast;
    weather: WeatherCondition[];
    dt_txt: string;
  }
  
  interface City {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  }
  
  interface WeatherResponse {
    list: Forecast[];
    city: City;
  }

export type { WeatherResponse, Forecast, City, MainForecast , WeatherCondition };