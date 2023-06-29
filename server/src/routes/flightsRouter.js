import { Router } from "express";

import flightsController from "../controllers/flightsController.js";

const flightsRouter = new Router();

flightsRouter.post('/create', flightsController.create);
flightsRouter.get('/all', flightsController.getAll);
flightsRouter.get('/:id', flightsController.getById);

export default flightsRouter;