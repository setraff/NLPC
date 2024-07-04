import { EnvironmentVariables } from "./EnvironmentVariables";

declare global {
  namespace NodeJS {
    interface ProcessEnv extends EnvironmentVariables {}
  }
}

export {};
