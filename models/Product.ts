import mongoose, { Schema, Document, Model } from "mongoose";

export interface ICreateProduct {
  title: string;
  description: string;
  imageUrl: string;
  weight: number;
  flavor: string;
  strength: string;
  unitsInPackage: number;
}

export interface IProduct extends Document {
  title: string;
  slug: string;
  description: string;
  imageUrl: string;
  weight: number;
  flavor: string;
  strength: string;
  unitsInPackage: number;
}

const productSchema: Schema = new Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  weight: { type: Number, required: true },
  flavor: { type: String, required: true },
  strength: { type: String, required: true },
  unitsInPackage: { type: Number, required: true },
});

const Product: Model<IProduct> = mongoose.models.Product || mongoose.model<IProduct>("Product", productSchema);

export default Product;
