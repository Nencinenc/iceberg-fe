import mongoose, { Schema, Document, Model } from "mongoose";

export interface LocationToCreate {
  name: string;
  longitude: number;
  latitude: number;
}

export interface ILocation extends Document {
  name: string;
  longitude: number;
  latitude: number;
}

const locationSchema: Schema = new Schema({
  name: { type: String, required: true },
  longitude: { type: Number, required: true },
  latitude: { type: Number, required: true },
});

const Location: Model<ILocation> =
  mongoose.models.Location ||
  mongoose.model<ILocation>("Location", locationSchema);

export default Location;
