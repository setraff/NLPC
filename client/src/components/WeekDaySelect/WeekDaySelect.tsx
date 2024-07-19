import React, { Fragment } from "react";
import DayRadio from "../DayRadio/DayRadio";
import { IoMdTime } from "react-icons/io";
import { RadioGroup } from "@headlessui/react";
import { useAtom } from "jotai";
import { selectedDayAtom } from "../../store/atoms";
import getDaysOfWeek from "../../utils/getDaysOfWeek";
import getDayAndNumber from "../../utils/getDayAndNumber";

const WeekDaySelect = () => {
  const [selectedDay, setSelectedDay] = useAtom(selectedDayAtom);
  const week = getDaysOfWeek(selectedDay).map((w) => new Date(w));
  const value = getDayAndNumber(selectedDay).dayOfWeek;

  return (
    <RadioGroup
      value={value}
      className={
        "w-full grid grid-cols-8 gap-3 items-center sticky top-0 z-10 "
      }
    >
      <div></div>
      {week.map((w) => {
        const dayAndNumber = getDayAndNumber(w);
        return (
          <DayRadio
            value={dayAndNumber.dayOfWeek}
            day={dayAndNumber.dayOfWeek}
            date={dayAndNumber.dayNumber}
          />
        );
      })}
    </RadioGroup>
  );
};

export default WeekDaySelect;
