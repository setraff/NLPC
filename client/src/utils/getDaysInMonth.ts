import { DateTime, Interval } from "luxon";

function getDaysInMonth(d: Date) {
  const dateTime = DateTime.fromISO(d.toISOString());
  const start = dateTime.startOf("month").startOf("week");
  const end = dateTime.endOf("month").endOf("week");
  const range = Interval.fromDateTimes(start.minus(1), end.minus(1)).splitBy({
    days: 1,
  });
  const formattedDays = range.map((interval) => {
    if (interval.start?.month === dateTime.month) {
      return {
        isSameMonth: true,
        date: interval.start?.day,
      };
    } else {
      return {
        isSameMonth: false,
        date: interval.start?.toFormat("yyyy-MM-dd"),
      };
    }
  });

  return formattedDays;
}

export default getDaysInMonth;
