import Exercise, {ExerciseType} from "../models/Exercise";

export async function getExercises() {
  return await Exercise.find({});
}

export async function getExercise(id: string) {
  return await Exercise.findById(id)
}

export async function createExercise({name, videoUrl}: {name: string, videoUrl: string}) {
  return await Exercise.create({name, videoUrl});
}

export async function deleteExercise(id: string) {
  return await Exercise.findByIdAndDelete(id)
}

export async function updateExercise(id: string, exercise: ExerciseType) {
  return await Exercise.findOneAndUpdate({_id: id}, exercise, {new: true} )
}
