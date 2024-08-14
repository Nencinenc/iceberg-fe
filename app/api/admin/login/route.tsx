import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import connectToDatabase from "@/lib/mongoDb";
import Admin from "@/models/Admin";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  await connectToDatabase();

  const admin = await Admin.findOne({ email });
  if (!admin || !(await bcrypt.compare(password, admin.password))) {
    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
  }

  const token = jwt.sign({ email: admin.email }, process.env.NEXT_PUBLIC_JWT_SECRET as string, { expiresIn: "24h" });

  const response = NextResponse.json({ message: "Login successful" });
  response.cookies.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 3600,
  });
  return response;
}
