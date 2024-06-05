import connectToDatabase from "@/lib/mongoDb";
import Location from "@/models/Location";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
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
