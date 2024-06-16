import connectToDatabase from "@/lib/mongoDb";
import Location from "@/models/Location";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDatabase();

    const locations = await Location.find();

    return NextResponse.json(locations, { status: 201 });
  } catch (error) {
    console.log("[LOCATION_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const body = await req.json();

    const { name, longitude, latitude } = body;

    if (!name || !longitude || !latitude) {
      return new NextResponse("Missing data", { status: 400 });
    }

    const locationData = {
      name,
      longitude,
      latitude,
    };

    console.log("[LOCATION_POST]", locationData);

    const address = await Location.create(locationData);

    return NextResponse.json(address, { status: 201 });
  } catch (error) {
    console.log("[LOCATION_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(req: Request) {
  await connectToDatabase();

  const { locId } = await req.json();
  console.log(locId);

  if (!locId) {
    return NextResponse.json(
      { message: "Missing required fields" },
      { status: 400 },
    );
  }

  try {
    const locationByLocId = await Location.findOneAndDelete({ _id: locId });

    if (!locationByLocId) {
      return NextResponse.json(
        { message: "Location not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(
      { message: "Location deleted successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error deleting location:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
