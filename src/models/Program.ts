import {Schema, model, InferSchemaType} from "mongoose";

const programPhaseSchema = new Schema({
  name: { type: String, required: true },
  workouts: [{
      type: Schema.Types.ObjectId,
      ref: "Workout",
      required: true
  }]
},   
{ timestamps: true }
);

const programSchema = new Schema({
  name: { type: String, required: true },
  programPhases: [{
      type: programPhaseSchema,
      required: true
  }]
},   
{ timestamps: true }
);

export type ProgramPhaseType = InferSchemaType<typeof programPhaseSchema>;
export type ProgramType = InferSchemaType<typeof programSchema>;

const Program = model('Program', programSchema);
export default Program;