import authRouter from "../routes/auth";
import t from "./trpc";

const router = t.router({
  auth: authRouter,
});

export default router;
