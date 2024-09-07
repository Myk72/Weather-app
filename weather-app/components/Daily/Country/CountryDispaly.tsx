import React from 'react';

export const cities = [
  { name: 'London' },
  { name: 'Paris' },
  { name: 'Rome' },
  { name: 'Sydney' },
  { name: 'Tokyo' },
];

const CityDisplay = () => {
  return cities.map((city, index) => (
    city.name
  ));
};

export default CityDisplay;