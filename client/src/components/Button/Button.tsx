import React from "react";
import { cn } from "../../utils/cn";

interface IButton
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "primary" | "secondary";
}

const Button: React.FC<IButton> = (p) => {
  return (
    <button
      {...p}
      className={cn(
        "w-28 h-12 rounded-md",
        (p.variant === "primary" || !p.variant) &&
          "bg-blue-500 hover:bg-blue-600 text-white",
        p.variant === "secondary" && "white hover:bg-gray-200 text-black"
      )}
    />
  );
};

export default Button;
