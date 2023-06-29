import { Router } from "express";

import staysController from "../controllers/staysController.js";

const staysRouter = new Router();

staysRouter.post('/create', staysController.create);
// staysRouter.get('/all', staysController.getAll);
// staysRouter.get('/:id', staysController.getById);

export default staysRouter;