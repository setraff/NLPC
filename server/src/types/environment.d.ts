import * as yup from "yup";
import { environmentVariablesSchema } from "../utils/environmentVariablesSchema";
declare global {
  namespace NodeJS {
    interface ProcessEnv
      extends yup.InferType<typeof environmentVariablesSchema> {}
  }
}

export {};
