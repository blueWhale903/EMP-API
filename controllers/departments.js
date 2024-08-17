import { prisma } from "../lib/db.js";

export async function getAllDepartments(req, res) {
  try {
    const departments = await prisma.departments.findMany({
      orderBy: {
        id: "asc",
      },
    });
    res.status(200).json({
      success: true,
      data: departments,
      message: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: null,
      message: error.message,
    });
  }
}
