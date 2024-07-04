import * as yup from "yup";

const eventSchema = yup.object({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  startDateTime: yup
    .string()
    .datetime("Invalid datetime")
    .required("Start time is required"),
  endDateTime: yup
    .string()
    .datetime("Invalid datetime")
    .required("End time is required"),
  color: yup.string().required("Color is required"),
});

export default eventSchema;
