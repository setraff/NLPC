import eventsRouter from "../routers/eventsRouter";
import t from "./trpc";

const router = t.router({
  events: eventsRouter,
});
export default router;
