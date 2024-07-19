import { DateTime } from "luxon";

function getDayAndNumber(day: Date) {
  // Create a DateTime object for the given date string
  const date = DateTime.fromJSDate(day);

  // Get the day of the week and the day number
  const dayOfWeek = date.toFormat("cccc"); // Full day name (Sunday, Monday, etc.)
  const dayNumber = Number(date.toFormat("d")); // Day number (1, 2, ..., 31)

  return {
    dayOfWeek,
    dayNumber,
  };
}

export default getDayAndNumber;
