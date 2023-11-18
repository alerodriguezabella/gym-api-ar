import {Schema, model} from "mongoose";

const exerciseSchema = new Schema({
  name: { type: String, required: true },
  videoUrl: { type: String, required: true },
},   
{ timestamps: true }
);

const Exercise = model('Exercise', exerciseSchema);
export default Exercise;