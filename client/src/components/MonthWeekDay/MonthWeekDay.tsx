import { Radio, RadioGroup } from "@headlessui/react";
import React from "react";
import { cn } from "../../utils/cn";
import CalendarType from "../../types/CalendarType";

interface IMonthWeekDay extends React.ComponentProps<typeof RadioGroup> {
  value: CalendarType;
}

const MonthWeekDay: React.FC<IMonthWeekDay> = (p) => {
  return (
    <RadioGroup
      {...p}
      as="div"
      className=" flex justify-center items-center gap-5"
    >
      <div className="h-10 w-72 bg-gray-200 rounded-md grid grid-cols-3 p-1">
        <Radio value="Month">
          {({ checked }) => {
            return (
              <div
                className={cn(
                  "w-full h-full flex justify-center items-center cursor-pointer",
                  checked ? "bg-white rounded-md font-medium" : "text-gray-700"
                )}
              >
                Month
              </div>
            );
          }}
        </Radio>
        <Radio value="Week">
          {({ checked }) => {
            return (
              <div
                className={cn(
                  "w-full h-full flex justify-center items-center cursor-pointer",
                  checked ? "bg-white rounded-md font-medium" : "text-gray-800"
                )}
              >
                Week
              </div>
            );
          }}
        </Radio>
        <Radio value="Day">
          {({ checked }) => {
            return (
              <div
                className={cn(
                  "w-full h-full flex justify-center items-center cursor-pointer",
                  checked ? "bg-white rounded-md font-medium" : "text-gray-800"
                )}
              >
                Day
              </div>
            );
          }}
        </Radio>
      </div>
    </RadioGroup>
  );
};

export default MonthWeekDay;
