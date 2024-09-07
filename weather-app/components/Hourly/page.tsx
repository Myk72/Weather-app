import React from "react";
import DateFormatter from "../Format/time";

interface Props {
  item: {
    dt: number;
    tempHigh: number;
    tempLow: number;
    icon: string;
  };
}

const HourlyForecastCard: React.FC<Props> = ({ item }) => {
  const { dt, tempHigh: tempHigh,tempLow, icon } = item;
  const { time, day, formattedDate } = DateFormatter({ dateTime: dt });

  return (
    <div className="flex flex-col justify-center gap-3 rounded-2xl p-2 border border-blue-950 text-lg">
      <div className=" flex justify-center border-b border-black">
        <div className="text-white font-semibold text-xs py-2">{time}</div>
      </div>
      <div className="flex justify-center">
        <img src={`https://openweathermap.org/img/wn/${icon}@4x.png`} alt="Weather Icon" className="size-16"/>

      </div>
      <div className="flex justify-center text-white">
        <div className="font-semibold text-xs ">{tempHigh.toFixed()}&deg;c  {"/" } {tempLow.toFixed()}&deg;c</div>
      </div>
    </div>
  );
};

export default HourlyForecastCard;
