import React from "react";
import CountryPage from "../../country/page";
import { cities } from "./CountryDispaly";
interface Props {
  city: string;
}
const OtherCountry: React.FC<Props> = ({ city }) => {
  // console.log(city);
  const otherCities = cities.filter((c) => c.name !== city).slice(0, 4);

  return (
    <div className="flex flex-col gap-3 ">
      <div className="font-serif font-semibold">Other Cities</div>
      <div className="flex flex-wrap justify-center py-2 w-[310px] gap-3">
        {otherCities.map((c, index) => (
          <CountryPage key={index} city={c.name} />
        ))}
      </div>
    </div>
  );
};

export default OtherCountry;
