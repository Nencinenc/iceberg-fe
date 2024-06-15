import React from "react";
import МаpView from "@/components/locations/MapView";

const locations = [
  'ул. "Цар Самуил" 47, 1000 София',
  'ул. "Цар Самуил" 47, 1000 София',
  'ул. "Цар Самуил" 47, 1000 София',
  'ул. "Цар Самуил" 47, 1000 София',
  'ул. "Цар Самуил" 47, 1000 София',
  'ул. "Цар Самуил" 47, 1000 София',
  'ул. "Цар Самуил" 47, 1000 София',
  'ул. "Цар Самуил" 47, 1000 София',
  'ул. "Цар Самуил" 47, 1000 София',
  'ул. "Цар Самуил" 47, 1000 София',
];

const Locations = () => {
  return (
    <div className="py-24 px-16 md:px-32">
      <h1 className="text-3xl font-bold">Локации с магазини</h1>
      <div className="flex flex-col md:flex-row w-full pt-12 gap-2">
        <div className="md:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {locations.map((location, index) => (
            <div key={index} className="p-3 rounded-lg">
              <div className="font-bold">Магазин</div>
              <div>{location}</div>
            </div>
          ))}
        </div>
        <div className="md:w-1/2 w-full mt-8 md:mt-0">
          <МаpView />
        </div>
      </div>
    </div>
  );
};

export default Locations;
