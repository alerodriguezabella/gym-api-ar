import Workout, { WorkoutExerciseType, WorkoutType } from '../models/Workout'

export async function getWorkouts(): Promise<WorkoutType[]> {
  return await Workout.find({});
}

export async function getWorkout(id: string) {
  return await Workout.findById(id).populate({path: 'workoutExercises.exercise'});
}

export async function createWorkout({name, workoutExercises}: {name: string, workoutExercises: WorkoutExerciseType[]}) {
  return await Workout.create({name, workoutExercises});
}

export async function deleteWorkout(id: string) {
  return await Workout.findByIdAndDelete(id);
}

