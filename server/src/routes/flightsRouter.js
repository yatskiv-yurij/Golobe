import { Router } from "express";

import flightsController from "../controllers/flightsController.js";

const flightsRouter = new Router();

// flightsRouter.get('/all');
flightsRouter.post('/create', flightsController.create);

export default flightsRouter;