import React from "react";
import Event from "../../types/Event";
import getPreciseHours from "../../utils/getPreciseHours";
import colorToRgba from "../../utils/colorToRgba";
import { oneHourInRem } from "../../utils/oneHourInRem";
import { twentyFourHours } from "../../utils/twentyFourHours";
import { cn } from "../../utils/cn";

interface IEventsForDay {
  events: Event[];
  className?: string;
}

const EventsForDay: React.FC<IEventsForDay> = (p) => {
  return (
    <div
      style={{
        height: `${oneHourInRem * 24}rem`,
      }}
      className={cn("rounded-sm relative flex flex-col w-full", p.className)}
    >
      <div
        style={{
          top: `${getPreciseHours(new Date()) * oneHourInRem}rem`,
        }}
        className="absolute w-full h-[1px] bg-red-500"
      ></div>

      {p.events.map((e) => {
        return (
          <div
            key={e.name}
            style={{
              height: `${(getPreciseHours(new Date(e.endDateTime)) - getPreciseHours(new Date(e.startDateTime))) * oneHourInRem}rem`,
              top: `${getPreciseHours(new Date(e.startDateTime)) * oneHourInRem}rem`,
              backgroundColor: colorToRgba(e.color || "Blue", 0.2),
              borderColor: e.color,
              borderWidth: "1px",
              minHeight: `${oneHourInRem}rem`,
            }}
            className="absolute rounded-md w-full border text-xs p-3 text-black font-medium"
          >
            {e.name}
          </div>
        );
      })}
    </div>
  );
};

export default EventsForDay;
