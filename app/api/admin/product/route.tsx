import connectToDatabase from "@/lib/mongoDb";
import Product from "@/models/Product";
import { NextResponse } from "next/server";
import slugify from "slugify";

export async function GET() {
  try {
    await connectToDatabase();
    const products = await Product.find();
    return NextResponse.json(products, { status: 200 });
  } catch (e) {
    console.log("[PRODUCTS_GET]", e);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const body = await req.json();

    const { title, description, imageUrl, weight, flavor, strength, unitsInPackage } = body;

    if (!title || !description || !imageUrl || !weight || !flavor || !strength || !unitsInPackage) {
      return new NextResponse("Missing data", { status: 400 });
    }

    const slug = slugify(title, {
      lower: true,
      strict: true,
      remove: /[*+~.()'"!:@]/g,
    });

    const productData = {
      title,
      slug,
      description,
      imageUrl,
      weight,
      flavor,
      strength,
      unitsInPackage,
    };

    const product = await Product.create(productData);

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.log("[PRODUCT_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(req: Request) {
  await connectToDatabase();

  const { slug } = await req.json();

  if (!slug) {
    return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
  }

  try {
    const deletedProduct = await Product.findOneAndDelete({ slug });

    if (!deletedProduct) {
      return NextResponse.json({ message: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(deletedProduct, { status: 200 });
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
