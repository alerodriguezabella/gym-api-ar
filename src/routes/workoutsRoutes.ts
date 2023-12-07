import { Router, Request, Response } from "express";
import { createWorkout, deleteWorkout, getWorkout, getWorkouts, updateWorkout } from "../services/workoutsService";

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  const workouts = await getWorkouts();
  res.json({data: workouts})
});

router.get('/:id', async (req: Request, res: Response) => {
  const {id} = req.params;
  if(typeof id !== 'string'){
    throw new Error('Invalid id')
  }

  const workout = await getWorkout(id);
  res.json({data: workout})
});

router.post('/', async (req: Request, res: Response) => {
  const {name, workoutExercises} = req.body;
  if(typeof name !== 'string' || !Array.isArray(workoutExercises)){
    throw new Error('Invalid payload')
  }

  const workout = await createWorkout({name, workoutExercises});
  res.json({data: workout})
});

router.delete('/:id', async (req: Request, res: Response) => {
  const {id} = req.params
  if(typeof id !== 'string'){
    throw new Error('Invalid id')
  }

  const workout = await deleteWorkout(id)
  res.json({data: workout})
})

router.put('/:id', async (req: Request, res: Response) => {
  const {id} = req.params;
  const workout = req.body;

  if(typeof id !== 'string'){
    throw new Error('Invalid id')
  }
  if(workout == null){
    throw new Error('Invalid workout')
  }

  const workoutUpdated = await updateWorkout(id, workout)
  res.json({data: workoutUpdated})
});

export default router;