import { Radio, RadioGroup } from "@headlessui/react";
import React from "react";
import { cn } from "../../utils/cn";
import { FaCheck } from "react-icons/fa";

let colors = [
  "#FF0000",
  "#FFA500",
  "#FFFF00",
  "#008000",
  "#0000FF",
  "#4B0082",
  "#EE82EE",
];

interface IColorPicker extends React.ComponentProps<typeof RadioGroup> {}

const ColorPicker: React.FC<IColorPicker> = (p) => {
  return (
    <RadioGroup {...p} as="div" className={"w-full grid grid-cols-7"}>
      {colors.map((c) => {
        return (
          <Radio
            className={"w-full flex justify-center items-center"}
            value={c}
          >
            {({ checked }) => {
              return (
                <div
                  style={{ backgroundColor: c }}
                  className={cn(
                    "w-9 h-9 rounded-full cursor-pointer border-2 flex justify-center items-center"
                  )}
                >
                  {checked && <FaCheck className="text-white" />}
                </div>
              );
            }}
          </Radio>
        );
      })}
    </RadioGroup>
  );
};

export default ColorPicker;
