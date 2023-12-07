import { Router, Request, Response } from "express";
import { createExercise, deleteExercise, getExercise, getExercises, updateExercise } from "../services/exercisesService";

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  const exercises = await getExercises();
  res.json({data: exercises})
});

router.get('/:id', async (req: Request, res: Response) => {
  const {id} = req.params;
  if(typeof id !== 'string'){
    throw new Error('Invalid id')
  }

  const exercise = await getExercise(id)
  res.json({data: exercise})
});

router.post('/', async (req: Request, res: Response) => {
  const {name, videoUrl} = req.body;
  if(typeof name !== 'string' || typeof videoUrl !== 'string'){
    throw new Error('Invalid payload')
  }

  const exercise = await createExercise({name, videoUrl});
  res.json({data: exercise})
});

router.delete('/:id', async (req: Request, res: Response) => {
  const {id} = req.params
  if(typeof id !== 'string'){
    throw new Error('Invalid id')
  }

  const exercise = await deleteExercise(id)
  res.json({data: exercise})
})

router.put('/:id', async (req: Request, res: Response) => {
  const {id} = req.params;
  const exercise = req.body;

  if(typeof id !== 'string'){
    throw new Error('Invalid id')
  }
  if(exercise == null){
    throw new Error('Invalid exercise')
  }

  const exerciseUpdated = await updateExercise(id, exercise)
  res.json({data: exerciseUpdated})
});

export default router;