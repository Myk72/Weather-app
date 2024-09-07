import DateFormatter from "@/components/Format/time";
import { MapPin } from "lucide-react";
import React from "react";
interface Props {
  date: number;
  description: string;
  temp: number;
  high: number;
  low: number;
  icon: string;
  city: string;
  country: string;
}
const DailyOverview: React.FC<Props> = ({
  date,
  description,
  temp,
  high,
  low,
  icon,
  city,
  country,
}) => {
  const { time, day, formattedDate } = DateFormatter({ dateTime: date });
  return (
    <div className=" font-serif h-fit border border-blue-950 gap-2 rounded-3xl justify-center flex flex-row p-5">
      <div className="flex flex-col justify-between py-4 px-2">
        <div className="flex flex-row gap-2">
          <div className="flex items-center">
            <MapPin className="size-6" />
          </div>
          <div className="text-lg w-full">
            {city} {country}
          </div>
        </div>
        <div>
          <div className="text-4xl">{day}</div>
          <div className="text-sm">{formattedDate}</div>
          <div className="text-sm">{time}</div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-4xl">{temp.toFixed()} &deg;c</div>
          <div className="text-xs font-semibold flex flex-row gap-2">
            <div>High: {high.toFixed()}&deg;C</div>
            <div>Low: {low.toFixed()}&deg;C</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <img
            src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
            alt="Weather Icon"
          />

          <div className="flex justify-end  font-semibold  text-xl ">
            {description}
          </div>
        </div>
        <div className="flex flex-row gap-1 justify-end font-semibold  ">
          <div>Have a lovely day</div>
          <img className="size-6 flex " src="/smile.svg" alt="sunny" />
        </div>
      </div>
    </div>
  );
};

export default DailyOverview;
