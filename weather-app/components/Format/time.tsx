import React from "react";
interface Props {
  dateTime: number;
}
interface DateFormatterResult {
  time: string;
  day: string;
  formattedDate: string;
}

const DateFormatter = ({
  dateTime,
}: {
  dateTime: number;
}): DateFormatterResult => {
  const date = new Date(dateTime * 1000);

  const time = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const day = date.toLocaleString("en-US", { weekday: "long" });
  const formattedDate = `${date.getDate()} ${date.toLocaleString("en-US", {
    month: "long",
  })} ${date.getFullYear()}`;

  return { time, day, formattedDate };
};

export default DateFormatter;
