import express from "express";
import t from "./trpc/trpc";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import router from "./trpc/appRouter";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import { createContext } from "./trpc/createContext";

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(morgan("tiny"));
app.use(express.static("./dist"));
app.use(
  "/trpc",
  createExpressMiddleware({
    router: router,
    createContext: createContext,
    onError: (e) => console.log(e.error),
  })
);

app.get("*", (_req, res) => {
  res.sendFile("index.html", { root: "./dist" });
});

export default app;
