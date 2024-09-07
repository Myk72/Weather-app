import { CalendarDays } from "lucide-react";
import React from "react";
import HighlightCard from "./HighlightedCard/page";
import { highlights } from "../constants/Highlighted";
interface HighlightCardProps {
  feels_like: number;
  visibility: number;
  humidity: number;
  speed: number;
  pressure: number;
  clouds: number;
}

const WeatherHighlightPage: React.FC<HighlightCardProps> = ({
  feels_like,
  visibility,
  humidity,
  speed,
  pressure,
  clouds,
}) => {
  const weatherValues = [
    feels_like,
    parseInt((visibility / 1000).toFixed()),
    humidity,
    speed,
    pressure,
    clouds,
  ];

  return (
    <div>
      <div className="flex flex-col w-it h-fit p-4 gap-2">
        <div className="font-semibold flex flex-row font-serif gap-2 underline ">
          <CalendarDays className="text-[#BAD4EB]" />
          Today's Highlight
        </div>
        <div className="flex flex-wrap justify-center gap-5 p-3">
          {highlights.map((highlight, index) => (
            <HighlightCard
              key={index}
              title={highlight.title}
              metrics={highlight.metric}
              value={weatherValues[index]}
              icon={highlight.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherHighlightPage;
