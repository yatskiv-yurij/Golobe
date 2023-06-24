import { Router  } from "express";

import reviewsController from '../controllers/reviewsController.js';

const reviewsRouter = new Router();

reviewsRouter.get('/all', reviewsController.getAll);
reviewsRouter.post('/create', reviewsController.create);

export default reviewsRouter;