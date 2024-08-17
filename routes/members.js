import express from "express";

import {
  createMember,
  deleteMember,
  getFilteredMembers,
  updateMember,
} from "../controllers/members.js";
import { isAuth } from "../middlewares/isAuth.js";

export const memberRouter = express.Router();

memberRouter.get("/", isAuth, getFilteredMembers);
memberRouter.post("/", isAuth, createMember);
memberRouter.put("/", isAuth, updateMember);
memberRouter.delete("/", isAuth, deleteMember);
