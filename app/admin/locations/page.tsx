"use client";

import React, { useEffect, useState } from "react";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import toast from "react-hot-toast";
import { ILocation } from "@/models/Location";

const getLocations = async () => {
  return fetch("/api/admin/location", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      console.error("Failed to get products");
      return null;
    }
  });
};

const deleteLocation = async (locId: string) => {
  const response = await fetch("/api/admin/location", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ locId }),
  });

  if (response.ok) {
    toast.success("Локацията е успешно изтрит");
  }
};

const AllLocations: React.FC = () => {
  const [locations, setLocations] = useState<ILocation[] | null>(null);

  useEffect(() => {
    getLocations().then(locations => {
      setLocations(locations);
    });
  }, []);

  return (
    <div className="mx-auto mt-24 md:mt-48 max-w-screen-lg px-2 ">
      <div className="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row">
        <p className="flex-1 text-base font-bold">Всички локации</p>
        <a href="/admin/add-location">Добави нова локация</a>
      </div>

      <div className="mt-6 overflow-hidden rounded-xl border shadow">
        <table className="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
          <thead className="hidden border-b lg:table-header-group">
            <tr className="">
              <td width="50%" className="whitespace-normal py-4 text-sm font-medium  sm:px-6">
                Име
              </td>
            </tr>
          </thead>

          <tbody className="lg:border-gray-300">
            {locations?.map(loc => (
              <tr key={loc._id}>
                <td width="50%" className="whitespace-no-wrap py-4 text-sm font-bold sm:px-6">
                  {loc.name}
                </td>

                <td
                  onClick={() => deleteLocation(loc._id)}
                  className="py-4 text-sm flex flex-row justify-evenly text-red-400 font-normal sm:px-6 hover:cursor-pointer"
                >
                  <FontAwesomeIcon icon={faX} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllLocations;
