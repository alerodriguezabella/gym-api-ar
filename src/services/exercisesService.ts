// const exercises = [
//   {
//       "id": 1,
//       "name": "Squat",
//       "videoUrl": "",
//       "set": 4,
//      "reps": 15
//   },
//   {
//       "id": 2,
//       "name": "Lounges",
//       "videoUrl": "",
//       "set": 4,
//      "reps": 15
//   },
//   {
//       "id": 3,
//       "name": "Lat pulldown",
//       "videoUrl": "",
//       "set": 4,
//      "reps": 15
//   },
//   {
//       "id": 4,
//       "name": "Leg press",
//       "videoUrl": "",
//       "set": 4,
//      "reps": 15
//   }
// ]

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

