import mongoose, { Document, Schema } from "mongoose";

export interface FrameworkDocument extends Document {
  Name: string;
  DevType: mongoose.Types.ObjectId;
}

const FrameworkSchema: Schema = new Schema({
  Name: { type: String, unique: true, required: true },
  DevType: { type: Schema.Types.ObjectId, ref: "DevType", required: true },
});

export default mongoose.model<FrameworkDocument>("Framework", FrameworkSchema);
