import express from "express";
import { prisma } from "../lib/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const authRouter = express.Router();

function generateToken(user) {
  const data = {
    id: user.id,
    department_id: user.department_id,
  };
  const signature = process.env.JWT_SECRET;
  const expiration = "1d";

  return jwt.sign({ data }, signature, { expiresIn: expiration });
}

export async function createUser(req, res) {
  const { username, password } = req.body;

  try {
    const user = await prisma.users.findUnique({
      where: {
        username: username,
      },
    });

    if (user) {
      res.status(400).json({ error: "user already exsist" });
    }

    bcrypt.hash(password, 10).then(async function (hash) {
      await prisma.users.create({
        data: {
          username: username,
          password: hash,
        },
      });
    });

    res.status(200).json({ message: "Create user successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function login(req, res) {
  const { username, password } = req.body;

  const user = await prisma.users.findFirst({
    where: {
      username: username,
    },
  });

  if (!user) {
    res.status(401).json({
      success: false,
      data: null,
      message: "User not found",
    });
  }

  bcrypt.compare(password, user.password).then(function (result) {
    if (result) {
      res
        .status(200)
        .json({
          success: true,
          data: { user },
          token: generateToken(user),
        })
        .end();
    } else {
      res.status(401).json({
        success: false,
        data: null,
        message: "Password not match",
      });
    }
  });
}
authRouter.post("/sign-up", createUser);
authRouter.post("/login", login);
