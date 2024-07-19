function getPreciseHours(date: Date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const milliseconds = date.getMilliseconds();

  // Convert each component to hours and sum them
  const preciseHours =
    hours + minutes / 60 + seconds / 3600 + milliseconds / 3600000;

  return preciseHours;
}

export default getPreciseHours;
