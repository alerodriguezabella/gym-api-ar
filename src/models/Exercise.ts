import {Schema, model, InferSchemaType} from "mongoose";

const exerciseSchema = new Schema({
  name: { type: String, required: true },
  videoUrl: { type: String, required: true },
},   
{ timestamps: true }
);

export type ExerciseType = InferSchemaType<typeof exerciseSchema>;

const Exercise = model('Exercise', exerciseSchema);
export default Exercise;