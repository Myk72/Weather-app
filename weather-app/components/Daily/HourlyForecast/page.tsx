import HourlyForecastCard from "@/components/Hourly/page";
import React from "react";

import { WeatherResponse } from "@/components/Types/Forecast.types";
interface Props {
  now: number;
  data: WeatherResponse;
}

const HourlyForecastPage: React.FC<Props> = ({ now, data }) => {
  
  const hourly = data.list
    ?.filter((e) => e.dt > now)
    .slice(0, 6)
    .map((newData) => ({
      tempHigh: newData.main.temp_max,
      tempLow: newData.main.temp_min,
      dt: newData.dt,
      icon: newData.weather[0].icon,
    }));
    // console.log(hourly,"hourl")
    
  return (
    <div>
      <div className="flex gap-3 p-2">
      {hourly.map((item, index) => (
        <HourlyForecastCard key={index} item={item} />
      ))}
      </div>
    </div>
  );
};

export default HourlyForecastPage;
