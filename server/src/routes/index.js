import { Router } from "express";

import authRouter from './authRouter.js';
import reviewsRouter from "./rewiewRoutes.js";
import flightsRouter from "./flightsRouter.js";
import staysRouter from "./staysRouter.js";
import cardRouter from "./cardRouter.js";
import ticketRouter from "./ticketRouter.js";

const router = new Router();

router.use('/auth', authRouter);
router.use('/reviews', reviewsRouter);
router.use('/flights', flightsRouter);
router.use('/stays', staysRouter);
router.use('/card', cardRouter);
router.use('/ticket', ticketRouter);

export default router;