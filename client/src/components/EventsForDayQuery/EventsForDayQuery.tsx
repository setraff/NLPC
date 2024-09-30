import React from "react";
import { trpc } from "../../utils/trpc";
import EventsForDay from "../EventsForDay/EventsForDay";
import useSelectedDay from "../../hooks/useSelectedDay";

interface IEventsForDayQuery {
  selectedDay: Date;
}
const EventsForDayQuery: React.FC<IEventsForDayQuery> = (p) => {
  const selectedDay = p.selectedDay;
  const query = trpc.events.getEventsForDay.useQuery({
    day: selectedDay.toISOString(),
  });

  const events = (query.data || []).map((e) => ({ ...e, name: e.title }));

  return (
    <div className=" col-span-7">
      <EventsForDay events={events} />
    </div>
  );
};

export default EventsForDayQuery;
