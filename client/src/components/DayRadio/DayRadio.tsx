import React from "react";
import { cn } from "../../utils/cn";
import { Radio } from "@headlessui/react";

interface IDayRadio extends React.ComponentProps<typeof Radio> {
  date: number;
  day: string;
}

const DayRadio: React.FC<IDayRadio> = (p) => {
  return (
    <Radio {...p}>
      {({ checked }) => {
        return (
          <div
            className={cn(
              "bg-gray-200 h-20  rounded-md flex flex-col items-center justify-center",
              checked && "text-white h-24 bg-gray-800"
            )}
          >
            <div className={cn("text-gray-700", checked && "text-white")}>
              {p.day}
            </div>
            <div className="text-3xl font-semibold">{p.date}</div>
          </div>
        );
      }}
    </Radio>
  );
};

export default DayRadio;
