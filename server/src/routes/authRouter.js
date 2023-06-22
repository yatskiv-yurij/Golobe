import { Router  } from "express";
import authController from '../controllers/authController.js';
import { registerValidation, loginValidation } from "../validations/auth.js";

const authRouter = new Router();

authRouter.post('/register', registerValidation, authController.register)
authRouter.get('/login', loginValidation, authController.login)

export default authRouter;