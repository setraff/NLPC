import { createFileRoute } from "@tanstack/react-router";
import MonthWeekDay from "../components/MonthWeekDay/MonthWeekDay";
import { useState } from "react";
import CalendarType from "../types/CalendarType";
import Calendar from "../components/Calendar/Calendar";
import { IoIosLogOut } from "react-icons/io";
import { DateCalendar, StaticDatePicker } from "@mui/x-date-pickers";
import { GoPlus } from "react-icons/go";
import { DateTime } from "luxon";
import { useAtom } from "jotai";
import { selectedDayAtom } from "../store/atoms";
import getMonthAndYear from "../utils/getMonthAndYear";
import { useAuth0 } from "@auth0/auth0-react";
import UserInfo from "../components/UserInfo/UserInfo";
import Modal from "../components/Modal/Modal";
import Button from "../components/Button/Button";
import useModal from "../hooks/useModal";
import NewEventForm from "../components/NewEventForm/NewEventForm";
import NewEventModal from "../components/NewEventModal/NewEventModal";
import { LuCalendarPlus } from "react-icons/lu";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [calendarType, setCalendarType] = useState<CalendarType>("Week");
  const [selectedDay, setSelectedDay] = useAtom(selectedDayAtom);
  const nem = useModal();

  return (
    <div className="w-screen h-screen bg-gray-200 overflow-x-auto grid grid-cols-4 p-5 gap-5 overflow-y-scroll">
      <div className="col-span-1 rounded-md h-full bg-white flex flex-col space-y-5">
        <UserInfo />
        <NewEventModal open={nem.isOpen} onClose={nem.close} />

        <div className="w-full border-b"></div>
        <div className="w-full px-4">
          <div
            onClick={nem.open}
            className="w-full h-12 border hover:text-blue-600 hover:border-blue-600 cursor-pointer rounded-md flex items-center px-2 space-x-2 text-gray-700"
          >
            <LuCalendarPlus className="text-2xl" />
            <div className="font-medium">New Event</div>
          </div>
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
          <div className="text-xl flex items-center space-x-2">
            <div className="font-medium">
              {getMonthAndYear(selectedDay).monthName}
            </div>
            <div className="text-gray-500 font-medium">
              {getMonthAndYear(selectedDay).year}
            </div>
          </div>
          <MonthWeekDay onChange={setCalendarType} value={calendarType} />
        </div>
        <Calendar type={calendarType} />
      </div>
    </div>
  );
}
