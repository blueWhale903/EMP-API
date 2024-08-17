import { prisma } from "../lib/db.js";

export async function getUserById(req, res) {
  const id = req.params.id;

  try {
    const user = await prisma.users.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        name: true,
        username: true,
        department_id: true,
      },
    });
    if (user) {
      res.status(200).json({
        success: true,
        data: user,
        message: null,
      });
    } else {
      res.status(400).json({
        success: false,
        data: null,
        message: "User id not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      data: null,
      message: error.message,
    });
  }
}
