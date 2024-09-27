import eventsRouter from "../routers/eventsRouter";
import nlpRouter from "../routers/nlpRouter";
import t from "./trpc";

const router = t.router({
  events: eventsRouter,
  nlp: nlpRouter,
});
export default router;
