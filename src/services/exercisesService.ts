import Exercise from "../models/Exercise";

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

