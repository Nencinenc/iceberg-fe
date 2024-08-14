import React from "react";
import МаpView from "@/components/locations/MapView";

const Locations = () => {
  return (
    <div className="py-32 px-16 md:px-32">
      <h1 className="text-3xl font-bold mb-4">Локации с магазини</h1>
      <МаpView />
    </div>
  );
};

export default Locations;
