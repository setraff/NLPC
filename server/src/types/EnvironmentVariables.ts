import * as yup from "yup";
import { environmentVariablesSchema } from "../utils/environmentVariablesSchema";

export type EnvironmentVariables = yup.InferType<
  typeof environmentVariablesSchema
>;
