import express from "express";
import {
  getFilteredEvents,
  getEventById,
  getEventParticipants,
} from "../controllers/events.js";
import { isAuth } from "../middlewares/isAuth.js";

export const eventRouter = express.Router();

eventRouter.get("/", isAuth, getFilteredEvents);
eventRouter.get("/:id", isAuth, getEventById);
eventRouter.get("/:id/participants", isAuth, getEventParticipants);
