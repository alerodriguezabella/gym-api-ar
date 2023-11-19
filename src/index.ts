require('dotenv').config()
import express, { Request, Response } from "express";
import cors from "cors";
import exercisesRoutes from './routes/exercisesRoutes'
import workoutsRoutes from './routes/workoutsRoutes'
import connectDB from './config/db'

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

connectDB();                           

app.use(cors())

const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Typescript Express!');
});

app.use('/exercises', exercisesRoutes)

app.use('/workouts', workoutsRoutes)


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})