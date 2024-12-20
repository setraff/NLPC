import React from "react";
import { trpc } from "../../utils/trpc";
import EventsForDay from "../EventsForDay/EventsForDay";
import useSelectedDay from "../../hooks/useSelectedDay";
import { useQueryClient } from "@tanstack/react-query";
import { getQueryKey } from "@trpc/react-query";

interface IEventsForDayQuery {
  selectedDay: Date;
}
const EventsForDayQuery: React.FC<IEventsForDayQuery> = (p) => {
  const selectedDay = p.selectedDay;
  const qc = useQueryClient();
  const query = trpc.events.getEventsForDay.useQuery({
    day: selectedDay.toISOString(),
  });
  const deleteMutation = trpc.events.deleteEvent.useMutation({
    onSuccess(data, variables, context) {
      qc.invalidateQueries(
        getQueryKey(trpc.events.getEventsForDay, {
          day: selectedDay.toISOString(),
        })
      );
    },
  });

  const events = (query.data || []).map((e) => ({ ...e, name: e.title }));

  return (
    <div className="col-span-7">
      <EventsForDay
        isLoading={deleteMutation.isLoading || deleteMutation.isSuccess}
        onDelete={(e) => deleteMutation.mutate({ eventId: e.id })}
        events={events}
      />
    </div>
  );
};

export default EventsForDayQuery;
