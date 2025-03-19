import React, { useState } from "react";
import { Button } from "./ui/button";

const CustomButton = ({ variant, size, customClass, text, icon, ...props }) => {
  const [hovered, setHovered] = useState(false);

  const classGenerator = () => {
    let className =
      "relative rounded-[36px] text-white border border-[#207C97] flex px-4 py-2 justify-center items-center gap-1 overflow-hidden transition-transform duration-500 ease-in-out bg-[#207C97]"; // ✅ Default background set

    if (variant === "primary") {
      className += " w-[159px]";
    } else if (variant === "secondary") {
      className += " w-fit hover:text-[#207C97] text-[14px] hover:bg-[#207C97]";
    }

    if (size === "small") {
      className += " text-sm";
    } else if (size === "large") {
      className += " text-lg";
    }

    return className;
  };

  return (
    <Button
      className={`${classGenerator()} ${customClass}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...props}
    >
      {/* Fast text transition */}
      <span className="relative z-10 flex items-center gap-2 transition-colors duration-150">
        <span className={hovered ? "text-[#207C97]" : "text-white"}>
          {text}
        </span>
        {icon && (
          <span
            className={`transition-transform duration-300 ${
              hovered ? "translate-x-1" : ""
            }`}
          >
            {icon}
          </span>
        )}
      </span>

      {/* Expanding circle effect from bottom-right */}
      <span
        className={`absolute rounded-full bg-white w-[100%] h-[150%] ${
          hovered ? "scale-100" : "scale-0"
        } transition-transform duration-700 ease-in-out origin-bottom`}
      />
    </Button>
  );
};

export default CustomButton;
