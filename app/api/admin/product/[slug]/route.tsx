import connectToDatabase from "@/lib/mongoDb";
import Product from "@/models/Product";
import { NextResponse } from "next/server";
import slugify from "slugify";

export async function GET(req: Request,  { params }: { params: { slug: string } }) {
    try {
      await connectToDatabase();
      const product = await Product.findOne({slug: params.slug});
      return NextResponse.json(product, { status: 200 });
    }
    catch (e) {
      console.log("[PRODUCT_GET]", e);
      return new NextResponse("Internal error", { status: 500 });
    }
  }

  export async function PUT(req: Request, { params }: { params: { slug: string } }) {
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
  
      const newSlug = slugify(title, {
        lower: true,
        strict: true,
        remove: /[*+~.()'"!:@]/g,
      });
  
      const productData = {
        title,
        slug: newSlug,
        description,
        imageUrl,
        weight,
        flavor,
        strength,
        unitsInPackage,
      };
      
      const product = await Product.findOneAndUpdate(
        { slug: params.slug },
        productData,
        { new: true, upsert: true } // 'new: true' returns the updated document, 'upsert: true' creates a new document if none is found
      );
  
      if (!product) {
        return new NextResponse("Product not found", { status: 404 });
      }
      
      return NextResponse.json(product, { status: 200 });
    } catch (error) {
      console.log("[PRPODUCT_UPDATE]", error);
      return new NextResponse("Internal error", { status: 500 });
    }
  }