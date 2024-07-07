import * as yup from "yup";

const eventSchema = yup.object({
  title: yup.string().required(),
  startDateTime: yup.string().datetime().required(),
  endDateTime: yup.string().datetime().required(),
  colorHex: yup.string().required(),
});

export default eventSchema;
