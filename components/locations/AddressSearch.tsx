"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ControlPosition,
  MapControl,
  AdvancedMarker,
  Map,
  useMap,
  useMapsLibrary,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";
import { ILocation, LocationToCreate } from "@/models/Location";
import toast from "react-hot-toast";

const addAddress = async (addressToCreate: LocationToCreate): Promise<ILocation | null> => {
  const response = await fetch("/api/admin/location", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...addressToCreate }),
  });

  if (response.ok) {
    const address = await response.json();
    return address;
  } else {
    console.error("Failed to add address");
    return null;
  }
};

const AddressSearch: React.FC = () => {
  const [selectedPlace, setSelectedPlace] = useState<google.maps.places.PlaceResult | null>(null);
  const [markerRef, marker] = useAdvancedMarkerRef();

  const handleAdd = async () => {
    try {
      if (
        selectedPlace &&
        selectedPlace.name &&
        selectedPlace.geometry?.location?.lng() &&
        selectedPlace.geometry?.location?.lat()
      ) {
        const location = await addAddress({
          name: selectedPlace.name,
          longitude: selectedPlace.geometry.location.lng(),
          latitude: selectedPlace.geometry.location.lat(),
        });
        if (location) {
          toast.success("Адресът е добавен успешно");
        }
      }
    } catch (error) {
      console.error("Failed to add address", error);
      toast.error("Грешка при добавяне на адрес");
    }
  };

  return (
    <>
      <Map
        style={{ width: "100%", height: "480px", marginBottom: "12px" }}
        defaultZoom={7}
        defaultCenter={{ lat: 42.43, lng: 25.28 }}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
        mapId={"bf51a910020fa25a"}
      >
        <AdvancedMarker ref={markerRef} position={null} />
      </Map>
      <MapControl position={ControlPosition.LEFT_TOP}>
        <div className="autocomplete-control">
          <PlaceAutocomplete onPlaceSelect={setSelectedPlace} />
        </div>
      </MapControl>
      <MapHandler place={selectedPlace} marker={marker} />
      <button disabled={!selectedPlace} className="p-2 rounded-md bg-blue-400" onClick={handleAdd}>
        <span className="">Добави адрес</span>
      </button>
    </>
  );
};

interface MapHandlerProps {
  place: google.maps.places.PlaceResult | null;
  marker: google.maps.marker.AdvancedMarkerElement | null;
}

const MapHandler = ({ place, marker }: MapHandlerProps) => {
  const map = useMap();

  useEffect(() => {
    if (!map || !place || !marker) return;

    if (place.geometry?.viewport) {
      map.fitBounds(place.geometry?.viewport);
    }
    marker.position = place.geometry?.location;
  }, [map, place, marker]);

  return null;
};

interface PlaceAutocompleteProps {
  onPlaceSelect: (place: google.maps.places.PlaceResult | null) => void;
}

const PlaceAutocomplete = ({ onPlaceSelect }: PlaceAutocompleteProps) => {
  const [placeAutocomplete, setPlaceAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const places = useMapsLibrary("places");

  useEffect(() => {
    if (!places || !inputRef.current) return;

    const options = {
      fields: ["geometry", "name", "formatted_address"],
    };

    setPlaceAutocomplete(new places.Autocomplete(inputRef.current, options));
  }, [places]);

  useEffect(() => {
    if (!placeAutocomplete) return;

    placeAutocomplete.addListener("place_changed", () => {
      onPlaceSelect(placeAutocomplete.getPlace());
    });
  }, [onPlaceSelect, placeAutocomplete]);

  return (
    <div className="autocomplete-container">
      <input ref={inputRef} className="p-3 text-lg rounded-md text-black" />
    </div>
  );
};

export default AddressSearch;
