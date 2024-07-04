import * as yup from "yup";

const eventSchemaAllNullable = yup.object({
  title: yup.string().notRequired(),
  description: yup.string().notRequired(),
  startDateTime: yup.string().datetime("Invalid datetime").notRequired(),
  endDateTime: yup.string().datetime("Invalid datetime").notRequired(),
  color: yup.string().notRequired(),
});

export default eventSchemaAllNullable;
