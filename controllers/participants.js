import { prisma } from "../lib/db.js";
import { calculateMark } from "../lib/utils.js";

export async function getTotalMarkByParticipant(req, res) {
  const studentid = req.params.studentid;
  const schoolYear = req.query.schoolyear || "23-24";
  const semester = parseInt(req.query.semester) || 1;

  try {
    const participations = await prisma.participations.findMany({
      where: {
        student_id: studentid,
        events: {
          school_year: schoolYear,
          semester: semester,
        },
      },
      include: {
        events: true,
      },
    });
    const data = calculateMark(participations);
    res.status(200).json({ success: true, data: data, message: null });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, data: null, message: error.message });
  }
}

export async function getEventsByParticipant(req, res) {
  const studentid = req.params.studentid;
  const schoolYear = req.query.schoolyear || "23-24";
  const semester = parseInt(req.query.semester) || 1;

  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const offset = limit * (Math.max(1, page) - 1);

  try {
    const participations = await prisma.participations.findMany({
      where: {
        student_id: studentid,
        events: {
          school_year: schoolYear,
          semester: semester,
        },
      },
      include: {
        events: {
          select: {
            category: true,
            name: true,
          },
        },
      },
      take: limit,
      skip: offset,
    });

    res.status(200).json({
      success: true,
      data: { participations },
      message: null,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, data: null, message: error.message });
  }
}
