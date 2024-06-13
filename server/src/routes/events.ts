import privateProcedure from "../trpc/procedures/privateProcedure";
import * as yup from "yup";
import t from "../trpc/trpc";

const eventsRouter = t.router({
  createEvent: privateProcedure
    .input(
      yup.object({
        name: yup.string().required("Event name is required"),
        startDate: yup
          .string()
          .datetime("Invalid start date")
          .required("Start date is required"),
        endDate: yup
          .string()
          .datetime("Invalid end date")
          .required("End date is required"),
        color: yup.string().required("Color is required"),
      })
    )
    .mutation(({ ctx, input }) => {
      return null;
    }),
  getEvents: privateProcedure
    .input(
      yup.object({
        startDate: yup
          .string()
          .datetime("Invalid start date")
          .required("Start date is required"),
        endDate: yup
          .string()
          .datetime("Invalid end date")
          .required("End date is required"),
      })
    )
    .query(({ ctx, input }) => {
      return [];
    }),
  deleteEvent: privateProcedure.mutation(() => {
    return null;
  }),
  modifyEvent: privateProcedure.mutation(() => {
    return null;
  }),
});

export default eventsRouter;
