import { Schema, model, Document } from "mongoose";
import { Pet } from "./pet.model";

export interface Tutor extends Document {
  id: number;
  name: string;
  phone: string;
  email: string;
  date_of_birth: string;
  zip_code: string;
  pets: Array<Pet>;
}

const tutorSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  date_of_birth: { type: String, required: true },
  zip_code: { type: String, required: true },
  pets: [{ type: Schema.Types.ObjectId, ref: "Pet" }],
});

export default model<Tutor>("Tutor", tutorSchema);
