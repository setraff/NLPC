import * as yup from "yup";

export const environmentVariablesSchema = yup.object({
  PORT: yup.number().required("Missing Environment Variable: PORT"),
  NODE_ENV: yup
    .string()
    .oneOf(["development", "production", "testing"], "Unsupported NODE_ENV")
    .required("Missing Environment Variable: NODE_ENV"),
  AUTH0_CLIENT_SECRET: yup
    .string()
    .required("Missing Environment Variable: AUTH0_CLIENT_SECRET"),
  AUTH0_DOMAIN: yup
    .string()
    .required("Missing Environment Variable: AUTH0_DOMAIN"),
  AUTH0_CLIENT_ID: yup
    .string()
    .required("Missing Environment Variable: AUTH0_CLIENT_ID"),
  DATABASE_URL: yup
    .string()
    .required("Missing Environment Variable: DATABASE_URL"),
});
