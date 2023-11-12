import { Router, Request, Response } from "express";
import { getExercises } from "../services/exercisesService";

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json({data: getExercises()})
});

export default router;