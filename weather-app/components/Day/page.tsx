import React from "react";
interface Props {
  day:string;
  high:number;
  low:number;
  icon:string;
}
const DailyForecastCard: React.FC<Props> = ({ day , high ,low,icon}) => {
  
  return (
    <div className="flex flex-col justify-center gap-3 rounded-2xl border border-blue-950 p-3 ">
      <div className=" flex justify-center border-b border-black">
        <div className="text-white">{day}</div>
      </div>
      <div className="flex justify-center">
        <img
        src={`http://openweathermap.org/img/w/${icon}.png`}
        alt="Weather icon"
        className="size-16"
        />
      </div>
      <div className="flex text-xs justify-center  text-white">
        {high.toFixed()}&deg;c {"/"} {low.toFixed()}&deg;c
      </div>
    </div>
  );
};

export default DailyForecastCard;
