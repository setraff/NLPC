import React from "react";
import Event from "../../types/Event";
import getPreciseHours from "../../utils/getPreciseHours";
import colorToRgba from "../../utils/colorToRgba";
import { oneHourInRem } from "../../utils/oneHourInRem";
import { MdDelete } from "react-icons/md";
import { cn } from "../../utils/cn";
import { FaEdit } from "react-icons/fa";
import { LuDelete } from "react-icons/lu";

interface IEventsForDay {
  events: Event[];
  className?: string;
  onDelete?: (e: Event) => void;
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
            key={e.title}
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
            <div className="flex justify-between">
              <span>{e.title}</span>
              <div className="flex space-x-1 absolute top-1 right-1">
                {/* <FaEdit
                  className="hover:text-black transform hover:scale-105 transition-transform duration-200"
                  color={e.color}
                  style={{ cursor: "pointer" }}
                  onClick={() => null}
                /> */}
                <MdDelete
                  className="text-lg transform hover:scale-105 transition-transform duration-200"
                  color={e.color}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    if (p.onDelete) {
                      p.onDelete(e);
                    }
                  }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EventsForDay;
