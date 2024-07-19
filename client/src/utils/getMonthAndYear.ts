import { DateTime } from "luxon";

function getMonthAndYear(dateString: Date) {
  // Create a DateTime object for the given date string
  const date = DateTime.fromJSDate(dateString);

  // Get the month name and the year
  const monthName = date.toFormat("LLLL"); // Full month name (January, February, etc.)
  const year = date.toFormat("yyyy"); // Year

  return {
    monthName,
    year,
  };
}

export default getMonthAndYear;
