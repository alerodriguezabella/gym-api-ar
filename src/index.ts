require('dotenv').config()
import express, { Request, Response } from "express";
// import mongoose from 'mongoose'
import cors from "cors";
import exercisesRoutes from './routes/exercisesRoutes'
import sessionsRoutes from './routes/sessionsRoutes'
import connectDB from './config/db'

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

connectDB();                           

// mongoose.connect('mongodb://localhost:27017/usersdb',
//   {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
//   }
// );

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