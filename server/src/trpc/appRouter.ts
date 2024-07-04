import authRouter from "../routes/auth.route";
import eventsRouter from "../routes/events.route";
import t from "./trpc";

const router = t.router({
  auth: authRouter,
  events: eventsRouter,
});
export default router;
