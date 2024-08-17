import { prisma } from "../lib/db.js";
const currentYear = new Date().getFullYear();
const currentYearDate = new Date(currentYear, 8, 31);
const previousYearDate = new Date(currentYear - 1, 7, 1);

export async function getEventCountByMonth(req, res) {
  try {
    const events = await prisma.events.findMany({
      where: {
        start_date: {
          gt: previousYearDate,
          lte: currentYearDate,
        },
      },
    });

    const groupedByMonth = events.reduce((acc, obj) => {
      // Convert the date string into a Date object
      const date = new Date(obj.start_date);
      const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
        2,
        "0"
      )}`;

      if (!acc[key]) {
        acc[key] = 0;
      }

      acc[key] += 1;

      return acc;
    }, {});
    const groupedByCategory = events.reduce((acc, obj) => {
      const category = obj.category_index;

      if (!acc[category]) {
        acc[category] = 0;
      }

      acc[category] += 1;

      return acc;
    }, {});

    const ordered = Object.keys(groupedByMonth)
      .sort()
      .reduce((obj, key) => {
        obj[key] = groupedByMonth[key];
        return obj;
      }, {});

    res.status(200).json({
      success: true,
      data: { byMonths: ordered, byCategories: groupedByCategory },
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

export async function getParticipationByMonth(req, res) {
  const currentYear = new Date().getFullYear();
  const currentYearDate = new Date(currentYear, 8, 31);
  const previousYearDate = new Date(currentYear - 1, 7, 1);
  try {
    const participations = await prisma.participations.findMany({
      where: {
        events: {
          start_date: {
            gt: previousYearDate,
            lte: currentYearDate,
          },
        },
      },
      include: {
        events: true,
      },
    });

    const groupedByMonth = participations.reduce((acc, obj) => {
      // Convert the date string into a Date object
      const date = new Date(obj.events.start_date);
      const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
        2,
        "0"
      )}`;

      if (!acc[key]) {
        acc[key] = 0;
      }

      acc[key] += 1;

      return acc;
    }, {});

    const ordered = Object.keys(groupedByMonth)
      .sort()
      .reduce((obj, key) => {
        obj[key] = groupedByMonth[key];
        return obj;
      }, {});

    res.status(200).json({
      success: true,
      data: groupedByMonth,
      message: null,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      data: null,
      message: error.message,
    });
  }
}
export async function getTotalEvents(req, res) {
  const currentMonth = new Date().getMonth();
  const month = req.query.month || currentMonth;

  if (month < 0 || month > 11) {
    res.status(500).json({
      success: false,
      data: null,
      message: "Invalid month (month should be in range 0-11)",
    });
    return;
  }

  const startDate = new Date(currentYear, month, 1);
  const endDate = new Date(currentYear, month + 1, 0);

  const prevStartDate = new Date(currentYear, month - 1, 1);
  const prevEndDate = new Date(currentYear, month, 0);

  try {
    const currentMonthCount = await prisma.events.count({
      where: {
        start_date: {
          gt: startDate,
          lte: endDate,
        },
      },
    });
    const prevMonthCount = await prisma.events.count({
      where: {
        start_date: {
          gt: prevStartDate,
          lte: prevEndDate,
        },
      },
    });
    const ratio = currentMonthCount / prevMonthCount;
    const percentOfChange = ratio >= 1 ? 1 - ratio : ratio - 1;

    res.status(200).json({
      success: true,
      data: {
        count: currentMonthCount,
        percentOfChange: percentOfChange.toFixed(2),
      },
      message: null,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, data: null, message: error.message });
  }
}

export async function getTotalParticipation(req, res) {
  const currentMonth = new Date().getMonth();
  const month = req.query.month || currentMonth;

  if (month < 0 || month > 11) {
    res.status(500).json({
      success: false,
      data: null,
      message: "Invalid month (month should be in range 0-11)",
    });
    return;
  }

  const startDate = new Date(currentYear, month, 1);
  const endDate = new Date(currentYear, month + 1, 0);

  const prevStartDate = new Date(currentYear, month - 1, 1);
  const prevEndDate = new Date(currentYear, month, 0);

  try {
    const currentMonthCount = await prisma.participations.count({
      where: {
        events: {
          start_date: {
            gt: startDate,
            lte: endDate,
          },
        },
      },
    });
    const prevMonthCount = await prisma.participations.count({
      where: {
        events: {
          start_date: {
            gt: prevStartDate,
            lte: prevEndDate,
          },
        },
      },
    });

    const ratio = currentMonthCount / prevMonthCount;
    const percentOfChange = ratio >= 1 ? ratio - 1 : 1 - ratio;

    res.status(200).json({
      success: true,
      data: {
        count: currentMonthCount,
        percentOfChange: percentOfChange.toFixed(2),
      },
      message: null,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, data: null, message: error.message });
  }
}
