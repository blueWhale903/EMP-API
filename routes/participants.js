import express from "express";
import {
  getEventsByParticipant,
  getTotalMarkByParticipant,
} from "../controllers/participants.js";
import { isAuth } from "../middlewares/isAuth.js";

export const participantRouter = express.Router();

participantRouter.get("/:studentid/events", isAuth, getEventsByParticipant);
participantRouter.get("/:studentid/mark", isAuth, getTotalMarkByParticipant);
