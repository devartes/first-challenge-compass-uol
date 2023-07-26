import { Schema, model, Document } from 'mongoose';

export interface IPet extends Document {
  id: number;
  name: string;
  species: string;
  carry: string;
  weight: number;
  date_of_birth: string;
}

const petSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  species: { type: String, required: true },
  carry: { type: String, required: true },
  weight: { type: Number, required: true },
  date_of_birth: { type: String, required: true },
});

export default model<IPet>('Pet', petSchema);
