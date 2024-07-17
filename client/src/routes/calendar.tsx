import { createFileRoute } from "@tanstack/react-router";
import { IoChevronBackOutline } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";
import Button from "../components/Button/Button";
import EventCreator from "../components/EventCreator/EventCreator";
import MonthSelector from "../components/MonthSelector/MonthSelector";
import getDaysInMonth from "../utils/getDaysInMonth";
import { cn } from "../utils/cn";
import { useState } from "react";
import { PiUser } from "react-icons/pi";
import { useAuth0 } from "@auth0/auth0-react";

export const Route = createFileRoute("/calendar")({
  component: () => {
    const auth0 = useAuth0();

    const [month, setMonth] = useState(new Date());
    return (
      <>
        <div className="w-full bg-white p-5 flex items-center justify-between rounded-md h-fit">
          <div className="w-fit flex items-center space-x-5">
            <IoChevronBackOutline
              onClick={() => {
                setMonth((p) => {
                  p.setMonth(p.getMonth() - 1);
                  return new Date(p);
                });
              }}
              className="text-xl cursor-pointer hover:text-@SkyBlue"
            />
            <MonthSelector value={month} />
            <IoChevronForward
              onClick={() => {
                setMonth((p) => {
                  p.setMonth(p.getMonth() + 1);
                  return new Date(p);
                });
              }}
              className="text-xl cursor-pointer hover:text-@SkyBlue"
            />
          </div>
          <Button className="w-[3.25rem] h-[3.25rem] min-w-[3.25rem] rounded-full bg-pink-500">
            <PiUser className="text-3xl" />
          </Button>
        </div>
        <div className="w-full grid grid-cols-7 bg-white rounded-md">
          <div className="w-full p-2  flex justify-center items-center">
            Sun
          </div>
          <div className="w-full p-2  flex justify-center items-center">
            Mon
          </div>
          <div className="w-full p-2  flex justify-center items-center">
            Tue
          </div>
          <div className="w-full p-2  flex justify-center items-center">
            Wed
          </div>
          <div className="w-full p-2  flex justify-center items-center">
            Thu
          </div>
          <div className="w-full p-2  flex justify-center items-center">
            Fri
          </div>
          <div className="w-full p-2  flex justify-center items-center">
            Sat
          </div>
          {getDaysInMonth(month).map((d) => {
            return (
              <div
                className={cn(
                  "col-span-1 min-h-32 border py-2 hover:bg-gray-100 cursor-pointer flex flex-col items-center space-y-1",
                  !d.isSameMonth && "opacity-50"
                )}
              >
                <div>{d.date}</div>
                <div className="w-full border-l-4 border-green-500 px-1">
                  Meeting
                </div>
                <div className="w-full bg-purple-500 text-white px-1">
                  Hello
                </div>
              </div>
            );
          })}
        </div>
        <EventCreator />
      </>
    );
  },
});
