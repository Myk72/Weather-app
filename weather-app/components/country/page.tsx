import React from "react";
import { useState, useEffect } from "react";
import { WeatherData } from "../Types/CurrentWeather.types";
import { fetchWeather } from "../Fetch/WeatherData";
interface Props {
  city: string;
}
const CountryPage: React.FC<Props> = ({ city }) => {
  const [CurrentWeatherData, setCurrentWeatherData] =
    useState<WeatherData | null>(null);
  const fetchCurrentWeather = async () => {
    const data: WeatherData = await fetchWeather("weather", city);
    setCurrentWeatherData(data);
  };
  useEffect(() => {
    fetchCurrentWeather();
  }, [city]);
  return (
    <div>
      {CurrentWeatherData && (
        <div className="rounded-2xl p-2 flex flex-row justify-center w-36  border border-blue-950">
          <div className="flex font-serif flex-col text-lg justify-between p-2">
            <div className="text-white">{city}</div>
            <div>{CurrentWeatherData.main.temp.toFixed()}&deg;C</div>
          </div>
          <div className="flex items-center ">
            <img
            className="size-16"
            src={`https://openweathermap.org/img/wn/${CurrentWeatherData.weather[0].icon}@4x.png`}
            alt="Weather Icon"
          />
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryPage;
