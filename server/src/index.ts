import app from "./app";
import config from "./config";

const start = () => {
  app.listen(config.PORT, () => {
    console.log("App listening on port", config.PORT);
  });
};

start();
