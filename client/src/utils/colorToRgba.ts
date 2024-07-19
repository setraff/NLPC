const colorToRgba = (color: string, alpha: number) => {
  const colors: { [key: string]: string } = {
    Red: "255, 0, 0",
    Green: "0, 128, 0",
    Yellow: "255, 255, 0",
    Blue: "0, 0, 255",
    Pink: "255, 192, 203",
    Orange: "255, 165, 0",
  };
  return `rgba(${colors[color]}, ${alpha})`;
};

export default colorToRgba;
