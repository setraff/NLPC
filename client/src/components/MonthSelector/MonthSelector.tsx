import React from "react";
import Button from "../Button/Button";
import {
  Menu,
  MenuButton,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverPanel,
  Radio,
  RadioGroup,
} from "@headlessui/react";
import { cn } from "../../utils/cn";
import months from "../../data/months";
import { DateTime } from "luxon";

function isDateObject(value: unknown): value is Date {
  return value instanceof Date;
}

interface IMonthSelector extends React.ComponentProps<typeof RadioGroup> {}

const MonthSelector: React.FC<IMonthSelector> = (p) => {
  if (!isDateObject(p.value)) {
    return;
  }

  const dateTime = DateTime.fromISO(p.value.toISOString());

  return (
    <Popover className={"relative"}>
      <PopoverButton className={"focus:outline-none"}>
        <Button className="w-40 focus:outline-none desktop:w-48 flex justify-center items-center text-lg bg-whote text-black border-1 border hover:border-black">
          {dateTime.monthLong} {dateTime.year}
        </Button>
      </PopoverButton>
      <PopoverPanel>
        <RadioGroup
          className={
            "absolute w-80 desktop:w-96 h-fit bg-white rounded-md border shadow-xl grid grid-cols-3 p-3 gap-2"
          }
        >
          {months.map((m) => {
            return (
              <Radio value={m}>
                {({ checked }) => {
                  return (
                    <div
                      className={cn(
                        "p-2 flex justify-center items-center  cursor-pointer rounded-md",
                        checked
                          ? "text-white bg-@Crayola hover:bg-@Chef"
                          : "hover:bg-gray-200"
                      )}
                    >
                      {m}
                    </div>
                  );
                }}
              </Radio>
            );
          })}
        </RadioGroup>
      </PopoverPanel>
    </Popover>
  );
};

export default MonthSelector;
