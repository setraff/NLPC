import { DateTimeField } from "@mui/x-date-pickers";
import { useField } from "formik";
import { DateTime } from "luxon";
import React from "react";

interface IDateTimeField extends React.ComponentProps<typeof DateTimeField> {
  name: string;
}

const FormikDateTimeField: React.FC<IDateTimeField> = (p) => {
  const [field, meta, helpers] = useField(p.name);

  const hasError = Boolean(meta.touched && meta.error);
  const errorMessage = meta.error;

  return (
    <DateTimeField
      {...p}
      onBlur={() => helpers.setTouched(true)}
      value={DateTime.fromJSDate(new Date(field.value || undefined))}
      onChange={(d) => helpers.setValue(d?.toString())}
      slotProps={{
        textField: {
          error: hasError,
          helperText: p.helperText || (hasError && errorMessage),
        },
      }}
    />
  );
};

export default FormikDateTimeField;
