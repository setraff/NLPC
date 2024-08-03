import * as yup from "yup";

const eventSchema = yup.object({
  name: yup.string().required("Event name is required"),
  startDateTime: yup.string().required("Start date & time is required"),
  endDateTime: yup.string().required("End date & time is required"),
  color: yup.string(),
});

export default eventSchema;
