import React from "react";
import CalendarType from "../../types/CalendarType";

import { oneHourInRem } from "../../utils/oneHourInRem";
import { twentyFourHours } from "../../utils/twentyFourHours";
import EventsForDayQuery from "../EventsForDayQuery/EventsForDayQuery";
import useSelectedDay from "../../hooks/useSelectedDay";
import getDaysOfWeek from "../../utils/getDaysOfWeek";
import EventsForWeek from "../EventsForWeek/EventsForWeek";

interface ICalendar {
  type: CalendarType;
}

const Calendar: React.FC<ICalendar> = (p) => {
  const [selectedDay] = useSelectedDay();
  const week = getDaysOfWeek(selectedDay).map((w) => new Date(w));

  switch (p.type) {
    case "Week":
      return <EventsForWeek />;
    case "Day":
      return (
        <div className="w-full grid grid-cols-8 gap-3">
          <div className="w-full h-full relative gid-cols-1">
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
          <EventsForDayQuery selectedDay={selectedDay} />
        </div>
      );
    case "Month":
      return (
        <div className="w-full h-full grid grid-cols-7">
          {new Array(35).fill(null).map(() => {
            return <div className="border w-full h-full"></div>;
          })}
        </div>
      );
  }
};

export default Calendar;
