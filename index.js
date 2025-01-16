import express from 'express';
import cors from 'cors';
import corsOptions from './Config/corsOptions.js';
import { configDotenv } from 'dotenv';
import connectDB from './Config/dbConn.js';
import mongoose from 'mongoose';
import userRouter from './Routers/users.js';
import cookieParser from 'cookie-parser';
const app = express();
const PORT = process.env.PORT || 3500;

//MIDDLEWARE
configDotenv();
connectDB();
app.use(cookieParser())
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//ROUTES
app.use('/users', userRouter);

mongoose.connection.once('open', () => {
    console.log("Connected to MongoDB!");
    app.listen(PORT, () => console.log("Up and Running!"));
})