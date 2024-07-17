import eventsRouter from "../routes/events.route";
import t from "./trpc";

const router = t.router({
  events: eventsRouter,
});
export default router;
