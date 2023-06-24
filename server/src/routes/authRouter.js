import { Router  } from "express";

import authController from '../controllers/authController.js';

import { registerValidation, loginValidation } from "../validations/auth.js";
import { checkUser } from "../utils/checkUser.js";


const authRouter = new Router();

authRouter.post('/register', registerValidation, authController.register);
authRouter.get('/login', loginValidation, authController.login);
authRouter.get('/me',checkUser, authController.getMe);
authRouter.patch('/update',checkUser, authController.updateMe);

export default authRouter;