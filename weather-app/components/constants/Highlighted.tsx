import { ThermometerSun, Eye, Gauge, Wind, Cloudy } from "lucide-react";

export interface Highlight {
  title: string;
  metric: string;
  icon: JSX.Element;
}

export const highlights: Highlight[] = [
  {
    title: "Feels like",
    metric: "°C",
    icon: <ThermometerSun className="size-14 text-[#BAD4EB]" />,
  },
  {
    title: "Visibility",
    metric: "km",
    icon: <Eye className="size-14 text-[#BAD4EB]" />,
  },
  {
    title: "Humidity",
    metric: "%",
    icon: (
      <div className="flex justify-center">
        <img className="size-14" src="/humidity.svg" alt="humidity" />
      </div>
    ),
  },
  {
    title: "Wind",
    metric: "m/s",
    icon: <Wind className="size-14 text-[#BAD4EB]" />,
  },
  {
    title: "Pressure",
    metric: "hPa",
    icon: <Gauge className="size-14 text-[#BAD4EB]" />,
  },
  {
    title: "Clouds",
    metric: "%",
    icon: <Cloudy className="size-14 text-[#BAD4EB]" />,
  },
];
