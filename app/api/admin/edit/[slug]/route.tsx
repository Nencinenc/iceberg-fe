import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongoDb";
import Product from "@/models/Product";

export async function PUT(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;
  const { title, description, flavor } = await req.json();

  if (!title || !description || !flavor) {
    return NextResponse.json(
      { message: "Missing required fields" },
      { status: 400 }
    );
  }

  await connectToDatabase();

  try {
    const updatedProduct = await Product.findOneAndUpdate(
      { slug },
      { title, description, flavor },
      { new: true }
    );

    if (!updatedProduct) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedProduct, { status: 200 });
  } catch (error) {
    console.error("Error updating product:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
