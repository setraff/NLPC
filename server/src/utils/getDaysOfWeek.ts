import { DateTime } from "luxon";

function getDaysOfWeek(dateString: Date) {
  // Create a DateTime object for the given date string
  const date = DateTime.fromJSDate(dateString);

  // Get the start and end of the week
  const startOfWeek = date.startOf("week");
  const endOfWeek = date.endOf("week");

  // Create an array to hold all the days of the week
  const daysOfWeek = [];

  // Iterate through each day of the week
  for (let day = startOfWeek; day <= endOfWeek; day = day.plus({ days: 1 })) {
    daysOfWeek.push(new Date(day.toString()));
  }

  return daysOfWeek;
}

export default getDaysOfWeek;
