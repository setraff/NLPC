import privateProcedure from "../trpc/procedures/privateProcedure";
import * as yup from "yup";
import t from "../trpc/trpc";
import p from "../prisma/p";
import eventSchema from "../utils/eventSchema";
import { Event } from "@prisma/client";
import generateRandomHexColor from "../utils/generateRandomHexColor";
import eventSchemaAllNullable from "../utils/eventSchemaAllNullable";
import filterTruthyKeys from "../utils/filterTruthyKeys";
import { DateTime, Interval } from "luxon";
import getEventsForDay from "../utils/getEventsForDay";
import getDaysOfWeek from "../utils/getDaysOfWeek";
import { TRPCError } from "@trpc/server";

const eventsRouter = t.router({
  getEventsForDay: privateProcedure
    .input(yup.object({ day: yup.string().required() }))
    .query(async ({ ctx, input }) => {
      const start = new Date(input.day);
      const end = DateTime.fromJSDate(new Date(input.day))
        .plus({ day: 1 })
        .toJSDate();
      start.setHours(0, 0, 0);
      end.setHours(0, 0, 0);
      const events = await p.event.findMany({
        where: {
          auth0UserId: ctx.auth0UserId,
          startDateTime: {
            lt: end,
          },
          endDateTime: {
            gte: start,
          },
        },
      });

      return events;
    }),
  getEventsForWeek: privateProcedure
    .input(
      yup.object({
        weekOf: yup.string().required(),
      })
    )
    .query(async ({ ctx, input }) => {
      const days = getDaysOfWeek(new Date(input.weekOf));
      const events = [];
      for (const day of days) {
        if (day) {
          events.push(await getEventsForDay(day, ctx.auth0UserId));
        }
      }
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
