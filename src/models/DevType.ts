// src/models/DevType.ts
import mongoose, { Document, Schema } from "mongoose";

export interface DevTypeDocument extends Document {
  Name: string;
}

const DevTypeSchema: Schema = new Schema({
  Name: { type: String, unique: true, required: true },
});

export default mongoose.model<DevTypeDocument>("DevType", DevTypeSchema);
