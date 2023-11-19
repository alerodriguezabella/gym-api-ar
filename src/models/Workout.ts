import {Schema, model} from "mongoose";

const workoutSchema = new Schema({
  name: { type: String, required: true },
  exercises : [{ 
    type: Schema.Types.ObjectId, 
    ref: "Exercise",
  }],
},   
{ timestamps: true }
);

const Workout = model('Workout', workoutSchema);
export default Workout;