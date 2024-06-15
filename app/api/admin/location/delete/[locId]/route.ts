import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongoDb";
import Location from "@/models/Location";

export async function DELETE(req: NextRequest) {
  await connectToDatabase();

  const { locId } = await req.json();

  if (!locId) {
    return NextResponse.json(
      { message: "Missing required fields" },
      { status: 400 },
    );
  }

  try {
    const locationByLocId = await Location.findOneAndDelete({ locId });

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
