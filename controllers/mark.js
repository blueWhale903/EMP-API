import { prisma } from "../lib/db.js";

export async function getMarkCategory(req, res) {
  const schoolYear = req.query.schoolYear || "23-24";
  const semester = req.query.semester || 1;

  try {
    const markCategory = await prisma.mark_category.groupBy({
      where: {
        school_year: schoolYear,
        semester: semester,
      },
      by: ["category"],
      orderBy: {
        category: "asc",
      },
    });

    res.status(200).json({
      success: true,
      data: markCategory,
      message: null,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
}
