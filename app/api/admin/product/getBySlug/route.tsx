import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongoDb";
import Product from "@/models/Product";

export async function POST(req: NextRequest) {
  const { slug } = await req.json();

  if (!slug) {
    return NextResponse.json(
      { message: "Missing required fields" },
      { status: 400 }
    );
  }

  await connectToDatabase();

  try {
    const productByslug = await Product.findOne({ slug });

    if (!productByslug) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(productByslug, { status: 200 });
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
