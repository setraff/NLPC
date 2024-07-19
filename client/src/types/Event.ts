interface Event {
  name: string;
  startDateTime: Date;
  endDateTime: Date;
  color: "Red" | "Green" | "Yellow" | "Blue" | "Pink" | "Orange";
}

export default Event;
