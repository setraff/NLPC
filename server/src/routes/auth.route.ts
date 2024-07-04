import privateProcedure from "../trpc/procedures/privateProcedure";
import router from "../trpc/appRouter";
import t from "../trpc/trpc";
import publicProcedure from "../trpc/procedures/publicProcedure";

const authRouter = t.router({
  getMe: privateProcedure.query(() => {
    return null;
  }),
  signUp: publicProcedure.mutation(() => {}),
});

export default authRouter;
