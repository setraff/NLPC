import React from "react";
import { cn } from "../../utils/cn";

interface IButton
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Button: React.FC<IButton> = (p) => {
  return (
    <button
      {...p}
      className={cn(
        "border-2 rounded-md h-12 min-w-24 flex justify-center items-center bg-@Crayola text-white hover:border-@SkyBlue",
        p.className || ""
      )}
    >
      {p.children}
    </button>
  );
};

export default Button;
