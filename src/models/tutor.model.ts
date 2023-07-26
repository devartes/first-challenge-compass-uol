import { Schema, model, Document, Types } from "mongoose";
import { IPet } from "./pet.model";

interface ITutor extends Document {
  id: number;
  name: string;
  phone: string;
  email: string;
  date_of_birth: string;
  zip_code: string;
  pets: Types.Array<IPet>;
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

export default model<ITutor>("Tutor", tutorSchema);
