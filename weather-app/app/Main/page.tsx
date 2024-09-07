"use client";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ModeToggle } from "../../components/theme/toogle";
import { useRouter } from "next/navigation";
import { Sun, MoonStar, Copyright } from "lucide-react";
import { fetchWeather } from "@/components/Fetch/WeatherData";
import OtherCountry from "@/components/Daily/Country/page";
import WeeklyForecastPage from "@/components/Daily/WeeklyForeCast/page";
import { WeatherData } from "@/components/Types/CurrentWeather.types";
import { WeatherResponse } from "@/components/Types/Forecast.types";

import DailyOverview from "@/components/Daily/Overview/page";
import HourlyForecastPage from "@/components/Daily/HourlyForecast/page";
import WeatherHighlightPage from "@/components/Highlight/page";

const MainPage = () => {
  const router = useRouter();
  const [location, setLocation] = useState("London");
  const [CurrentWeatherData, setCurrentWeatherData] =
    useState<WeatherData | null>(null);
  const [ForecastWeatherData, setForecastWeatherData] =
    useState<WeatherResponse | null>(null);

  const fetchForecast = async () => {
    const data: WeatherResponse = await fetchWeather("forecast", location);
    if (!data) {
      alert("Location not found");
      setLocation("London");
      return;
    }
    setForecastWeatherData(data);
    console.log("Forecast", data);
  };

  const fetchCurrentWeather = async () => {
    const data: WeatherData = await fetchWeather("weather", location);
    setCurrentWeatherData(data);
    console.log("current", data);
  };

  useEffect(() => {
    fetchForecast();
    fetchCurrentWeather();
  }, [location]);

  const handlekeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setLocation((e.target as HTMLInputElement).value);
      fetchCurrentWeather();
      fetchForecast();
      console.log(location);
    } else {
      console.log(location, "oajs");
    }
  };

  const timeFormatter = (time: number) => {
    const date = new Date(time * 1000);
    const timeValue = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return timeValue;
  };

  return (
    <div>
      {CurrentWeatherData && ForecastWeatherData && (
        <div className="flex flex-col gap-6 px-10 py-5">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-3 items-end  text-white font-medium text-4xl font-serif">
              Weather
              <img src="/group.svg" alt="sunny" className="size-12 " />
            </div>

            <div className=" w-fit bg-white  flex flex-row gap-3 items-center  px-3 rounded-full ">
              <img className="size-4 " src="/search.svg" alt="search" />
              <input
                className="focus:outline-none w-[300px] "
                placeholder="Search"
                // value={location}

                onKeyDown={(e) => {
                  handlekeyPress(e);
                }}
              />
            </div>

            <div className="flex flex-row gap-3 items-center">
              <ModeToggle />
              <div
                onClick={() => router.push("/Main/Profile")}
                className="cursor-pointer"
              >
                <img
                  className="size-12 rounded-full"
                  src="/placePP1.avif"
                  alt="location"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row py-2 gap-10  items-center">
            <DailyOverview
              date={CurrentWeatherData.dt}
              description={CurrentWeatherData.weather[0].description}
              temp={CurrentWeatherData.main.temp}
              high={30}
              low={20}
              icon={CurrentWeatherData.weather[0].icon}
              city={ForecastWeatherData.city.name}
              country={ForecastWeatherData.city.country}
            />
            <HourlyForecastPage
              now={CurrentWeatherData.dt}
              data={ForecastWeatherData}
            />
            <OtherCountry city={ForecastWeatherData.city.name} />
          </div>
          <div className="flex flex-row w-fit gap-16 items-center">
            <div className="flex flex-col justify-center gap-5">
              <p className="font-semibold font-serif">Sunrise and Sunset</p>

              <div className=" flex flex-row p-5 -mt-3 gap-36">
                <div className="flex flex-row gap-3">
                  <Sun className="size-14 text-[#BAD4EB]" />
                  <div className="flex flex-col justify-center">
                    <div className="font-semibold font-serif">Sunrise</div>
                    <div className="text-lg font-semibold font-serif text-white">
                      {timeFormatter(CurrentWeatherData.sys.sunrise)}
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-3">
                  <MoonStar className="size-14 text-[#BAD4EB]" />
                  <div className="flex flex-col justify-center">
                    <div className="font-semibold font-serif">Sunset</div>
                    <div className="text-lg font-semibold font-serif text-white">
                      {timeFormatter(CurrentWeatherData.sys.sunset)}
                    </div>
                  </div>
                </div>
              </div>

              <p className="font-semibold font-serif -mt-3">Weeks</p>
              <div className="border border-blue-950 w-[580px]"></div>
              <WeeklyForecastPage data={ForecastWeatherData} />
              <div className="border border-blue-950 w-[580px]"></div>
            </div>

            <div className="h-[400px] w-0.5 border border-black"></div>

            <WeatherHighlightPage
              feels_like={CurrentWeatherData.main.feels_like}
              visibility={CurrentWeatherData.visibility}
              humidity={CurrentWeatherData.main.humidity}
              speed={CurrentWeatherData.wind.speed}
              pressure={CurrentWeatherData.main.pressure}
              clouds={CurrentWeatherData.clouds.all}
            />
          </div>
          <div className="flex justify-center font-serif
           font-medium">
           Copyright &copy; 2024 WeatherApp &reg; All rights reserved.
          </div>
        </div>
      )}
    </div>
  );
};

export default MainPage;
