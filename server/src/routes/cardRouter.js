import { Router } from "express";

import cardController from "../controllers/cardController.js";

const cardRouter = new Router();

cardRouter.post("/create", cardController.create);
cardRouter.get("/:id", cardController.getUserCard);
cardRouter.delete("/delete/:id", cardController.delete);


export default cardRouter;