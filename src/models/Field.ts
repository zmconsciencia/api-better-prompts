import mongoose from "mongoose";

export type FieldType = {
  type: "snippet" | "free";
  value: string;
  minimized: boolean;
};

const FieldSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["snippet", "free"],
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  minimized: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model<FieldType>("Field", FieldSchema);
