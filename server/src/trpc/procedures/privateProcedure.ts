import t from "../trpc";

const privateProcedure = t.procedure.use(({ next }) => {
  return next();
});

export default privateProcedure;
