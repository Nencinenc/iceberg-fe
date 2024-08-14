import mongoose, { Schema, Document, Model } from "mongoose";
import { v4 as uuidv4 } from "uuid"; // Import UUID

export interface LocationToCreate {
  name: string;
  longitude: number;
  latitude: number;
}

export interface ILocation extends Document {
  _id: string;
  name: string;
  longitude: number;
  latitude: number;
}

const locationSchema: Schema = new Schema({
  _id: { type: String, default: uuidv4 }, // Use UUID as the default value for _id
  name: { type: String, required: true },
  longitude: { type: Number, required: true },
  latitude: { type: Number, required: true },
});

const Location: Model<ILocation> = mongoose.models.Location || mongoose.model<ILocation>("Location", locationSchema);

export default Location;
