import connectToDatabase from "@/lib/mongoDb";
import Product from "@/models/Product";
import { NextResponse } from "next/server";
import slugify from "slugify";

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const body = await req.json();

    const {
      title,
      description,
      imageUrl,
      weight,
      flavor,
      strength,
      unitsInPackage,
    } = body;

    if (
      !title ||
      !description ||
      !imageUrl ||
      !weight ||
      !flavor ||
      !strength ||
      !unitsInPackage
    ) {
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

    const product = await Product.updateOne(productData);

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.log("[PRPODUCT_UPDATE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
