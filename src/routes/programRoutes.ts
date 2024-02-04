import { Router, Request, Response } from "express";
import { createProgram, deleteProgram, getProgram, getPrograms, updateProgram } from "../services/programService";

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  const programs = await getPrograms();
  res.json({data: programs})
});

router.get('/:id', async (req: Request, res: Response) => {
  const {id} = req.params;
  if(typeof id !== 'string'){
    throw new Error('Invalid id')
  }

  const program = await getProgram(id);
  res.json({data: program})
});

router.post('/', async (req: Request, res: Response) => {
  const {name, programPhases} = req.body;
  if(typeof name !== 'string' || !Array.isArray(programPhases)){
    throw new Error('Invalid payload')
  }

  const program = await createProgram({name, programPhases});
  res.json({data: program})
});

router.delete('/:id', async (req: Request, res: Response) => {
  const {id} = req.params
  if(typeof id !== 'string'){
    throw new Error('Invalid id')
  }

  const program = await deleteProgram(id)
  res.json({data: program})
})

router.put('/:id', async (req: Request, res: Response) => {
  const {id} = req.params;
  const program = req.body;

  if(typeof id !== 'string'){
    throw new Error('Invalid id')
  }
  if(program == null){
    throw new Error('Invalid program')
  }

  const programUpdated = await updateProgram(id, program)
  res.json({data: programUpdated})
});

export default router;