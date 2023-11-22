import {Schema, model, InferSchemaType} from "mongoose";

const exerciseSetSchema = new Schema({
    repetitions: {type: Number, required: true},
    weight: {type: Number, required: true},
});

const workoutExerciseSchema = new Schema({
    notes: String,
    exercise: {
      type: Schema.Types.ObjectId,
      ref: "Exercise",
      required: true,
    },
    exerciseSets: [{ 
      type: exerciseSetSchema,
    }],
});

const workoutSchema = new Schema({
  name: { type: String, required: true },
  workoutExercises: [{
    type: workoutExerciseSchema,
  }]
},   
{ timestamps: true }
);

export type WorkoutType = InferSchemaType<typeof workoutSchema>;
export type WorkoutExerciseType = InferSchemaType<typeof workoutExerciseSchema>;
export type ExerciseSetType = InferSchemaType<typeof exerciseSetSchema>;


const Workout = model('Workout', workoutSchema);
export default Workout;