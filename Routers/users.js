import express from 'express';
import { getUsers, postUserData } from '../Controllers/userController.js';
const userRouter = express.Router();

userRouter.route('/')
    .post(postUserData)
    .get(getUsers);

export default userRouter;