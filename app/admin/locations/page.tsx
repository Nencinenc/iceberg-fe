import React from "react";
import connectToDatabase from "@/lib/mongoDb";
import { faEdit, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Location, { ILocation } from "@/models/Location";

const getLocations = async (): Promise<ILocation[]> => {
  await connectToDatabase();
  const locations = await Location.find().lean();
  return locations;
};

const AllLocations: React.FC = async () => {
  const locations = await getLocations();

  return (
    <div className="mx-auto mt-24 md:mt-48 max-w-screen-lg px-2 text-white">
      <div className="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row">
        <p className="flex-1 text-base font-bold">Всички локации</p>
        <a href="/admin/add-location">Добави нова локация</a>
      </div>

      <div className="mt-6 overflow-hidden rounded-xl border shadow">
        <table className="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
          <thead className="hidden border-b lg:table-header-group">
            <tr className="">
              <td
                width="50%"
                className="whitespace-normal py-4 text-sm font-medium  sm:px-6"
              >
                Име
              </td>
            </tr>
          </thead>

          <tbody className="lg:border-gray-300">
            {locations.map((loc) => (
              <tr key={loc.locId} className="">
                <td
                  width="50%"
                  className="whitespace-no-wrap py-4 text-sm font-bold sm:px-6"
                >
                  {loc.name}
                </td>

                <td className="py-4 text-sm flex flex-row justify-evenly text-red-400 font-normal sm:px-6">
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
