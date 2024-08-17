import { prisma } from "../lib/db.js";

export async function getFilteredMembers(req, res) {
  const { id, name, classcode } = req.query;
  const user = req.user;

  let whereConditions = {};

  try {
    if (id) whereConditions["id"] = id;
    if (name) {
      whereConditions["name"] = {};
      whereConditions["name"].contains = name;
    }
    if (classcode) whereConditions["class_code"] = classcode;

    const count = await prisma.members.count({
      where: whereConditions,
    });

    const members = await prisma.members.findMany({
      where: whereConditions,
      include: {
        departments: {
          select: {
            name: true,
          },
        },
      },
    });
    res.status(200).json({
      success: true,
      data: { count: count, members: members },
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

export async function createMember(req, res) {
  const { id, name, class_code } = req.body;
  const user = req.user;

  if (!id || !name || !class_code) {
    res
      .status(400)
      .json({
        success: false,
        data: null,
        message: "Missing fields",
      })
      .end();
    return;
  }

  try {
    const member = await prisma.members.findUnique({
      where: {
        id: id,
      },
    });
    if (member) {
      res
        .status(400)
        .json({ error: `Member ${id} - ${member.name} already exist` });
      return;
    }
    const newMember = await prisma.members.create({
      data: {
        id: id,
        name: name,
        class_code: class_code,
        department_id: user.data.department_id,
      },
    });
    res.status(200).json(newMember);
  } catch (error) {
    res.status(500).json(error.message);
  }
}

export async function updateMember(req, res) {
  const { id, name, classCode } = req.body;

  try {
    const member = await prisma.members.findUnique({
      where: {
        id: id,
      },
    });
    if (!member) {
      res
        .status(400)
        .json({ error: `Member ${student_id} - ${name} not exist` });
      return;
    }
    const newMember = await prisma.members.update({
      where: {
        id: id,
      },
      data: {
        name: name,
        class_code: classCode,
      },
    });
    res.status(200).json(newMember);
  } catch (error) {
    res.status(500).json(error.message);
  }
}

export async function deleteMember(req, res) {
  const { student_id } = req.body;

  try {
    const member = await prisma.members.findUnique({
      where: {
        id: student_id,
      },
    });
    if (!member) {
      res
        .status(400)
        .json({ error: `Member ${student_id} - ${name} not exist` });
      return;
    }
    const newMember = await prisma.members.delete({
      where: {
        id: student_id,
      },
    });
    res.status(200).json(newMember);
  } catch (error) {
    res.status(500).json(error.message);
  }
}
