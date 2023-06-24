import { Router } from "express";

import authRouter from './authRouter.js';
import reviewsRouter from "./rewiewRoutes.js";
import flightsRouter from "./flightsRouter.js";

const router = new Router();

router.use('/auth', authRouter);
router.use('/reviews', reviewsRouter);
router.use('/flights', flightsRouter);

export default router;