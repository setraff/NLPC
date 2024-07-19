import React from "react";
import Event from "../../types/Event";
import getPreciseHours from "../../utils/getPreciseHours";
import colorToRgba from "../../utils/colorToRgba";
import { oneHourInRem } from "../../utils/oneHourInRem";
import { twentyFourHours } from "../../utils/twentyFourHours";

interface IEventsForDay {
  events: Event[];
}

const EventsForDay: React.FC<IEventsForDay> = (p) => {
  return (
    <div
      style={{
        height: `${oneHourInRem * 24}rem`,
      }}
      className="rounded-sm relative flex flex-col w-full"
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
              height: `${(getPreciseHours(e.endDateTime) - getPreciseHours(e.startDateTime)) * oneHourInRem}rem`,
              top: `${getPreciseHours(e.startDateTime) * oneHourInRem}rem`,
              backgroundColor: colorToRgba(e.color, 0.2),
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
