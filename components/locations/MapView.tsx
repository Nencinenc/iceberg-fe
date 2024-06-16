"use client";

import React, { useState, useEffect } from "react";
import {
  Map,
  AdvancedMarker,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import { ILocation } from "@/models/Location";

const getLocations = (): Promise<ILocation[] | null> => {
  return fetch(`/api/admin/location`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        console.error("Failed to get locations");
        return null;
      }
    });
};

const MapView = () => {
  const [locations, setLocations] = useState<ILocation[] | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<ILocation | null>(
    null
  );

  useEffect(() => {
    getLocations().then(locations => {
      setLocations(locations);
    });
  }, []);

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
          onClick={() => setSelectedLocation(loc)}
        />
      ))}

      {selectedLocation && (
        <InfoWindow
          position={{
            lat: selectedLocation.latitude,
            lng: selectedLocation.longitude,
          }}
          onCloseClick={() => setSelectedLocation(null)}
        >
          <div className="text-black">
            <h2>{selectedLocation.name}</h2>
            <p>{`Lat: ${selectedLocation.latitude}, Lng: ${selectedLocation.longitude}`}</p>
            <p>Description: asd</p>
          </div>
        </InfoWindow>
      )}
    </Map>
  );
};

export default MapView;
