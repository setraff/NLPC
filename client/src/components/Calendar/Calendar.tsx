import React from "react";
import CalendarType from "../../types/CalendarType";
import { RadioGroup } from "@headlessui/react";
import { cn } from "../../utils/cn";
import DayRadio from "../DayRadio/DayRadio";
import WeekDaySelect from "../WeekDaySelect/WeekDaySelect";
import EventsForDay from "../EventsForDay/EventsForDay";
import {
  eventsDay1,
  eventsDay2,
  eventsDay3,
  eventsDay4,
  eventsDay5,
  eventsDay6,
  eventsDay7,
} from "../../data/events";
import { oneHourInRem } from "../../utils/oneHourInRem";
import { twentyFourHours } from "../../utils/twentyFourHours";
import EventsForDayQuery from "../EventsForDayQuery/EventsForDayQuery";

interface ICalendar {
  type: CalendarType;
}

const Calendar: React.FC<ICalendar> = (p) => {
  switch (p.type) {
    case "Week":
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
            <EventsForDay events={eventsDay1} />
            <EventsForDay events={eventsDay2} />
            <EventsForDay events={eventsDay3} />
            <EventsForDay events={eventsDay4} />
            <EventsForDay events={eventsDay5} />
            <EventsForDay events={eventsDay6} />
            <EventsForDay events={eventsDay7} />
          </div>
        </div>
      );
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
          <EventsForDayQuery />
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
