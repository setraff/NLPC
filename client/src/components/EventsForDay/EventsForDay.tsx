import React from "react";
import Event from "../../types/Event";
import getPreciseHours from "../../utils/getPreciseHours";
import colorToRgba from "../../utils/colorToRgba";
import { oneHourInRem } from "../../utils/oneHourInRem";
import { MdDelete } from "react-icons/md";
import { cn } from "../../utils/cn";
import { FaEdit } from "react-icons/fa";
import { LuDelete } from "react-icons/lu";
import ModalProvider from "../ModalProvider/ModalProvider";
import ModalButton from "../ModalProvider/ModalButton";
import ModalPanel from "../ModalProvider/ModalPanel";

interface IEventsForDay {
  events: Event[];
  className?: string;
  isLoading?: boolean;
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
                <ModalProvider>
                  <ModalButton>
                    <MdDelete
                      className="text-lg transform hover:scale-105 transition-transform duration-200"
                      color={e.color}
                      style={{ cursor: "pointer" }}
                    />
                  </ModalButton>
                  <ModalPanel
                    isLoading={p.isLoading}
                    onConfirm={() => {
                      if (p.onDelete) {
                        p.onDelete(e);
                      }
                    }}
                    showFooter
                    confirmText="Yes"
                  >
                    <div>Are you sure you want to delete this?</div>
                  </ModalPanel>
                </ModalProvider>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EventsForDay;
