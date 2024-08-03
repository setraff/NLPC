import { Radio, RadioGroup } from "@headlessui/react";
import colorToRgba from "../../utils/colorToRgba";
import { FaCheck } from "react-icons/fa";
import { useField } from "formik";

const colors = ["Red", "Blue", "Green", "Pink", "Yellow", "Orange"];

const ColorSelect = () => {
  const [field, meta, helpers] = useField("color");

  const hasError = Boolean(meta.touched && meta.error);
  const errorMessage = meta.error;

  return (
    <div className="flex flex-col space-y-5">
      <RadioGroup
        onChange={(v) => helpers.setValue(v)}
        value={field.value}
        className="grid grid-cols-6 w-full"
      >
        {colors.map((c) => {
          return (
            <Radio value={c} className={"flex justify-center items-center"}>
              {({ checked }) => {
                return (
                  <div
                    style={{
                      backgroundColor: colorToRgba(c, 0.2),
                      borderColor: checked ? c : colorToRgba(c, 0.2),
                      borderWidth: checked ? "2px" : "1px",
                    }}
                    className={
                      "w-9 h-9 border cursor-pointer hover:border-2 rounded-full flex justify-center items-center"
                    }
                  >
                    {/* {checked && <FaCheck color="white" />} */}
                  </div>
                );
              }}
            </Radio>
          );
        })}
      </RadioGroup>
    </div>
  );
};

export default ColorSelect;
