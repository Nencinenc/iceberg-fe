"use client";

import React from "react";
import {
  ControlPosition,
  MapControl,
  AdvancedMarker,
  Map,
  useMap,
  useMapsLibrary,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";
import { ILocation } from "@/models/Location";

const getLocations = async (): Promise<ILocation[] | null> => {
  // To edit
  const response = await fetch(`http://localhost:3000/api/admin/location`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    const locations = await response.json();
    return locations;
  } else {
    console.error("Failed to get locations");
    return null;
  }
};

const MapView = async () => {
  const locations = await getLocations();

  return (
    <Map
      style={{ width: "100%", height: "480px", marginBottom: "12px" }}
      defaultZoom={7}
      defaultCenter={{ lat: 42.43, lng: 25.28 }}
      gestureHandling={"greedy"}
      disableDefaultUI={true}
      mapId={"bf51a910020fa25a"}
    >
      {locations?.map((loc, idx) => (
        <AdvancedMarker
          key={idx}
          position={{ lat: loc.latitude, lng: loc.longitude }}
          title={loc.name}
        />
      ))}
    </Map>
  );
};

export default MapView;
