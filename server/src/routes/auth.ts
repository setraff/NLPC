import privateProcedure from "../trpc/procedures/privateProcedure";
import router from "../trpc/appRouter";
import t from "../trpc/trpc";

const authRouter = t.router({
  me: privateProcedure.query(() => {
    return null;
  }),
});

export default authRouter;
