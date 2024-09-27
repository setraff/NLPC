function getPreciseHours(date: Date) {
  const dateUTC = new Date(date.getTime() + date.getTimezoneOffset() * 60000);

  const hours = dateUTC.getHours();
  const minutes = dateUTC.getMinutes();
  const seconds = dateUTC.getSeconds();
  const milliseconds = dateUTC.getMilliseconds();

  // Convert each component to hours and sum them
  const preciseHours =
    hours + minutes / 60 + seconds / 3600 + milliseconds / 3600000;

  return preciseHours;
}

export default getPreciseHours;
