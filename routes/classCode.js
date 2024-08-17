import express from "express";
import {
  createClassCode,
  deleteClassCode,
  getAllClassCode,
  updateClassCode,
} from "../controllers/classCode.js";
import { isAuth } from "../middlewares/isAuth.js";

export const classCodeRouter = express.Router();

classCodeRouter.get("/", isAuth, getAllClassCode);
classCodeRouter.post("/", isAuth, createClassCode);
classCodeRouter.put("/", isAuth, updateClassCode);
classCodeRouter.delete("/", isAuth, deleteClassCode);
