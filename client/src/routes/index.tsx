import { createFileRoute } from "@tanstack/react-router";
import MonthWeekDay from "../components/MonthWeekDay/MonthWeekDay";
import { useState } from "react";
import CalendarType from "../types/CalendarType";
import Calendar from "../components/Calendar/Calendar";
import { IoIosLogOut } from "react-icons/io";
import { DateCalendar, StaticDatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { DateTime } from "luxon";
import { useAtom } from "jotai";
import { selectedDayAtom } from "../store/atoms";
import getMonthAndYear from "../utils/getMonthAndYear";
import { useAuth0 } from "@auth0/auth0-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [calendarType, setCalendarType] = useState<CalendarType>("Week");
  const [selectedDay, setSelectedDay] = useAtom(selectedDayAtom);
  const auth0 = useAuth0();

  return (
    <div className="w-screen h-screen bg-gray-200 overflow-x-auto grid grid-cols-4 p-5 gap-5 overflow-y-scroll">
      <div className="col-span-1 rounded-md h-full bg-white flex flex-col space-y-5">
        <div className="flex items-center justify-between w-full px-5 pt-5">
          <div>
            <div className="font-medium">{auth0.user?.name}</div>
            <div className="font-medium text-gray-500">{auth0.user?.email}</div>
          </div>
          <IoIosLogOut
            onClick={() => auth0.logout()}
            className="text-3xl text-red-500 hover:text-red-900 cursor-pointer"
          />
        </div>
        <div className="w-full border-b"></div>
        <div className="w-full flex justify-center items-center">
          <DateCalendar
            onChange={(d) => setSelectedDay(new Date(d))}
            value={DateTime.fromJSDate(selectedDay)}
            sx={{
              transform: "scale(0.9)",
              transformOrigin: "top",
            }}
          />
        </div>
        <div className="w-full border-b"></div>
      </div>
      <div className="col-span-3 rounded-md h-full bg-white p-5 flex flex-col space-y-5">
        <div className="flex items-center justify-between w-full">
          <div className="text-xl">
            {getMonthAndYear(selectedDay).monthName},{" "}
            {getMonthAndYear(selectedDay).year}
          </div>
          <MonthWeekDay onChange={setCalendarType} value={calendarType} />
        </div>
        <Calendar type={calendarType} />
      </div>
    </div>
  );
}
