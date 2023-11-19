import Workout from '../models/Workout'

export async function getWorkouts() {
  return await Workout.find({});
}

export async function getWorkout(id: string) {
  return await Workout.findById(id).populate({path: 'exercises'});
}

export async function createWorkout({name, exercises}: {name: string, exercises: string[]}) {
  return await Workout.create({name, exercises});
}

export async function deleteWorkout(id: string) {
  return await Workout.findByIdAndDelete(id);
}

