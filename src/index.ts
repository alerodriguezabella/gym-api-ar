import express, { Request, Response } from "express";
import exercisesRoutes from './routes/exercisesRoutes'

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Typescript Express!');
});

app.use('/exercises', exercisesRoutes)


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})