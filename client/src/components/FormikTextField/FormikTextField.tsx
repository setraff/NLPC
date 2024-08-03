import { TextField } from "@mui/material";
import { useField } from "formik";
import React from "react";

interface IFormikTextField extends React.ComponentProps<typeof TextField> {
  name: string;
}

const FormikTextField: React.FC<IFormikTextField> = (p) => {
  const [field, meta, helpers] = useField(p.name);

  const hasError = Boolean(meta.touched && meta.error);
  const errorMessage = meta.error;

  return (
    <TextField
      {...p}
      onBlur={() => helpers.setTouched(true)}
      value={field.value}
      error={hasError}
      helperText={p.helperText || (hasError && errorMessage)}
      onChange={(e) => helpers.setValue(e.target.value)}
    />
  );
};

export default FormikTextField;
