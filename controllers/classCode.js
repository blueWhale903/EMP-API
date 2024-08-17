import { prisma } from "../lib/db.js";

export async function getAllClassCode(req, res) {
  const user = req.user;

  try {
    const allClassCodes = await prisma.class_codes.findMany({
      where: {
        department_id: user.data.department_id,
      },
    });
    res.status(200).json({
      success: true,
      data: allClassCodes,
      message: false,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      data: null,
      message: error.message,
    });
  }
}

export async function createClassCode(req, res) {
  const { name, faculty } = req.body;

  try {
    const newClassCode = await prisma.class_codes.create({
      data: {
        name: name,
        faculty: faculty,
      },
    });
    res.status(200).json(newClassCode);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

export async function updateClassCode(req, res) {
  const { name, faculty } = req.body;

  try {
    const classCode = await prisma.class_codes.findUnique({
      where: {
        name: name,
      },
    });

    if (!classCode) {
      res.status(400).json({ error: `class code '${name}' not exist` });
    } else {
      const updatedClassCode = await prisma.class_codes.update({
        where: {
          name: name,
        },
        data: {
          name: name,
          faculty: faculty,
        },
      });
      res.status(200).json(updatedClassCode);
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
}

export async function deleteClassCode(req, res) {
  const { name } = req.body;

  try {
    const deleteClassCode = await prisma.class_codes.delete({
      where: {
        name: name,
      },
    });
    res.status(200).json(deleteClassCode);
  } catch (error) {
    res.status(500).json(error.message);
  }
}
