import t from "../trpc";

const publicProcedure = t.procedure.use(({ next }) => {
  return next();
});

export default publicProcedure;
