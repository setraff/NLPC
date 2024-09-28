import React from "react";
import WeekDaySelect from "../WeekDaySelect/WeekDaySelect";
import { twentyFourHours } from "../../utils/twentyFourHours";
import { oneHourInRem } from "../../utils/oneHourInRem";
import useSelectedDay from "../../hooks/useSelectedDay";
import getDaysOfWeek from "../../utils/getDaysOfWeek";
import EventsForDayQuery from "../EventsForDayQuery/EventsForDayQuery";
import { trpc } from "../../utils/trpc";
import EventsForDay from "../EventsForDay/EventsForDay";

const EventsForWeek = () => {
  const [selectedDay] = useSelectedDay();
  const week = getDaysOfWeek(selectedDay).map((w) => new Date(w));

  const eventsForWeekQuery = trpc.events.getEventsForWeek.useQuery({
    weekOf: week[0].toISOString(),
  });

  const events = eventsForWeekQuery.data || [];
  return (
    <div className="w-full h-full flex flex-col space-y-3">
      <WeekDaySelect />
      <div className="w-full h-full grid grid-cols-8 gap-3 items-center">
        <div className="w-full h-full relative">
          {twentyFourHours.map((h) => {
            return (
              <div
                style={{ top: `${oneHourInRem * h}rem` }}
                className="absolute w-full h-[1px] bg-gray-200"
              >
                <div className="p-2 text-gray-700">{h}:00</div>
              </div>
            );
          })}
        </div>
        {events?.map((e) => {
          return <EventsForDay events={e} />;
        })}
      </div>
    </div>
  );
};

export default EventsForWeek;
