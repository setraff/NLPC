import * as yup from "yup";

interface Event {
  id: number;
  title: string;
  startDateTime: string;
  endDateTime: string;
  color: string;
}

export default Event;
