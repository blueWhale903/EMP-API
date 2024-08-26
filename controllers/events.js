import { prisma } from "../lib/db.js";

export async function getFilteredEvents(req, res) {
  // Academic Period
  const schoolYear = req.query.schoolyear || "23-24";
  const semester = parseInt(req.query.semester) || 1;

  // Pagination
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 20;
  const offset = limit * (Math.max(1, page) - 1);

  // Filter query
  const name = req.query.name;
  const category = req.query.category;
  const status = req.query.status;
  const start_date = req.query.startdate;
  const end_date = req.query.enddate;
  const department = req.query.department;
  const org_name = req.query.orgname;
  console.log(category);
  let whereConditions = {
    school_year: schoolYear,
    semester: semester,
  };

  if (name) {
    whereConditions["name"] = {};
    whereConditions["name"].contains = name;
  }

  if (category) {
    whereConditions["category"] = {};
    whereConditions["category"].in = category.split(" ");
    console.log(category, category.split(" "));
  }

  if (status) whereConditions["status"] = status == "Confirmed" ? true : false;
  if (start_date && end_date) {
    whereConditions["start_date"] = {
      lte: new Date(parseInt(end_date)),
      gt: new Date(parseInt(start_date)),
    };
  }
  console.log(new Date(parseInt(end_date)), new Date(parseInt(start_date)));
  whereConditions["users"] = {};
  if (department) {
    whereConditions.users.department_id = parseInt(department);
  }
  if (org_name) {
    whereConditions.users.name = org_name;
  }

  try {
    const count = await prisma.events.count({
      where: whereConditions,
    });

    const events = await prisma.events.findMany({
      where: whereConditions,
      orderBy: {
        start_date: "desc",
      },
      include: {
        users: {
          select: {
            name: true,
          },
        },
      },
      take: limit,
      skip: offset,
    });
    res.status(200).json({
      success: true,
      data: {
        count: count,
        events: events,
      },
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

export async function getEventById(req, res) {
  const id = req.params.id;
  try {
    const event = await prisma.events.findUnique({
      where: {
        id: id,
      },
    });

    if (!event) {
      res.status(400).json({
        success: false,
        data: null,
        message: "EVENT ID NOT FOUND",
      });
    } else {
      res.status(200).json({
        success: true,
        data: { event },
        message: null,
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

export async function getEventParticipants(req, res) {
  const id = req.params.id;

  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const offset = limit * (Math.max(1, page) - 1);

  try {
    const participantsCount = await prisma.participations.count({
      where: { event_id: id },
    });

    const participants = await prisma.participations.findMany({
      where: {
        event_id: id,
      },
    });

    res.status(200).json({
      success: true,
      data: { count: participantsCount, participants: participants },
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
