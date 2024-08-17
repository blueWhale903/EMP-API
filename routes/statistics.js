import express from "express";
import { isAuth } from "../middlewares/isAuth.js";
import {
  getEventCountByMonth,
  getParticipationByMonth,
  getTotalEvents,
  getTotalParticipation,
} from "../controllers/statistics.js";

export const statisticsRouter = express.Router();

statisticsRouter.get("/events/", isAuth, getEventCountByMonth);
statisticsRouter.get("/events/count", isAuth, getTotalEvents);
statisticsRouter.get("/participations/count", isAuth, getTotalParticipation);
statisticsRouter.get("/participations/months", isAuth, getParticipationByMonth);
