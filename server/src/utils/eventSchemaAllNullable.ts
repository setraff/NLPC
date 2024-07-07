import * as yup from "yup";

const eventSchemaAllNullable = yup.object({
  title: yup.string().nullable(),
  startDateTime: yup.string().datetime().nullable(),
  endDateTime: yup.string().datetime().nullable(),
  colorHex: yup.string().nullable(),
});

export default eventSchemaAllNullable;
