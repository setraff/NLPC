import privateProcedure from "../trpc/procedures/privateProcedure";
import * as yup from "yup";
import t from "../trpc/trpc";
import p from "../prisma/p";
import eventSchema from "../utils/eventSchema";
import { Event } from "@prisma/client";
import generateRandomHexColor from "../utils/generateRandomHexColor";
import eventSchemaAllNullable from "../utils/eventSchemaAllNullable";
import filterTruthyKeys from "../utils/filterTruthyKeys";

const eventsRouter = t.router({
  getEvents: privateProcedure.query(async ({ ctx }) => {
    const userId = ctx.auth0UserId;
    const events = await p.event.findMany({
      where: {
        auth0UserId: userId,
      },
    });
    return events;
  }),
  createEvent: privateProcedure
    .input(eventSchema)
    .mutation(async ({ ctx, input }) => {
      const created = await p.event.create({
        data: {
          auth0UserId: ctx.auth0UserId,
          title: input.name,
          startDateTime: input.startDateTime,
          endDateTime: input.endDateTime,
          color: input.color || "Blue",
        },
      });
      return created;
    }),
  deleteEvent: privateProcedure
    .input(
      yup.object({
        eventId: yup.number().required("Event ID is required"),
      })
    )
    .mutation(async ({ input }) => {
      return await p.event.delete({
        where: {
          id: input.eventId,
        },
      });
    }),
  updateEvent: privateProcedure
    .input(
      eventSchemaAllNullable.concat(
        yup.object({
          eventId: yup.number().required("ID is required"),
        })
      )
    )
    .mutation(async ({ ctx, input }) => {
      return await p.event.update({
        where: {
          id: input.eventId,
        },
        data: {
          ...filterTruthyKeys(input),
        },
      });
    }),
});

export default eventsRouter;
