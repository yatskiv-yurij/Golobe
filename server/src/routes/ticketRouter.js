import { Router } from "express";

import ticketController from "../controllers/ticketController.js";

const ticketRouter = new Router();

ticketRouter.post('/create', ticketController.create);
ticketRouter.get('/getTickets', ticketController.getTickets);

export default ticketRouter;