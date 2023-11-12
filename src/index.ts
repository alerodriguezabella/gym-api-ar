import express, { Request, Response } from "express";
import cors from "cors";
import exercisesRoutes from './routes/exercisesRoutes'
import sessionsRoutes from './routes/sessionsRoutes'

const app = express();
app.use(cors())

const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Typescript Express!');
});

app.use('/exercises', exercisesRoutes)

app.use('/sessions', sessionsRoutes)


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})