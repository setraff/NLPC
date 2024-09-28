import { DateTime } from "luxon";
import p from "../prisma/p";

const getEventsForDay = async (date: Date, userId: string) => {
  const start = new Date(date);
  const end = DateTime.fromJSDate(new Date(date)).plus({ day: 1 }).toJSDate();
  start.setHours(0, 0, 0);
  end.setHours(0, 0, 0);
  const events = await p.event.findMany({
    where: {
      auth0UserId: userId,
      startDateTime: {
        lt: end,
      },
      endDateTime: {
        gte: start,
      },
    },
  });

  return events;
};

export default getEventsForDay;
