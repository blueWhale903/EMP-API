import express from "express";
import { getUserById } from "../controllers/users.js";
import { isAuth } from "../middlewares/isAuth.js";

export const userRouter = express.Router();

userRouter.get("/:id", isAuth, getUserById);
