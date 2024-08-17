import express from "express";
import { getAllDepartments } from "../controllers/departments.js";
import { isAuth } from "../middlewares/isAuth.js";

export const departmentRouter = express.Router();

departmentRouter.get("/", isAuth, getAllDepartments);
