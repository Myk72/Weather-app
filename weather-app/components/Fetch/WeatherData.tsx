import axios from "axios";
const apiUrl = "https://api.openweathermap.org/data/2.5";
const units = "metric";

export const fetchWeather = async (endpoint: string, location: string) => {
  try {
    const url = `${apiUrl}/${endpoint}?q=${location}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&units=${units}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${endpoint} data`);
  }
};
