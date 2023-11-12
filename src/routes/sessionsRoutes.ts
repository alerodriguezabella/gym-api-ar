import { Router, Request, Response } from "express";
import { getSession } from "../services/sessionsService";

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json({data: getSession()})
});

export default router;