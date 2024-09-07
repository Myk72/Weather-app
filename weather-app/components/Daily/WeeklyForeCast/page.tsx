import DailyForecastCard from "@/components/Day/page";
import React from "react";
import { WeatherResponse } from "@/components/Types/Forecast.types";

interface Props {
  data: WeatherResponse;
}

const WeeklyForecastPage: React.FC<Props> = ({ data }) => {
  const daily = data.list
    .filter((e) => {
      const date = new Date(e.dt * 1000);
      return (
        date.getHours() === 0 &&
        date.getMinutes() === 0 &&
        date.getSeconds() === 0
      );
    })
    .map((e) => {
      return {
        date: e.dt,
        tempHigh: e.main.temp_max,
        tempLow: e.main.temp_min,
        icon: e.weather[0].icon,
      };
    });
  // console.log(daily, "daily");

  return (
    <div>
      <div className="flex flex-row gap-5 px-5">
        {daily.map((daily, index) => (
          <DailyForecastCard
            key={index}
            day={new Date(daily.date * 1000).toLocaleString("en-us", {
              weekday: "short",
            })}
            high={daily.tempHigh}
            low={daily.tempLow}
            icon={daily.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default WeeklyForecastPage;
