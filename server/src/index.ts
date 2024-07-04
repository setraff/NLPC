import app from "./app";
import p from "./prisma/p";
import { environmentVariablesSchema } from "./utils/environmentVariablesSchema";

const start = async () => {
  try {
    environmentVariablesSchema.validateSync(process.env);
    await p.$connect();
    app.listen(process.env.PORT, () => {
      console.log("App listening on port", process.env.PORT);
    });
  } catch (error) {
    if (error && error instanceof Error && "errors" in error) {
      console.log(error.errors);
      process.exit(1);
    }
  }
};

start();
