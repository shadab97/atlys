"use client";
import React, { InputHTMLAttributes, ReactElement } from "react";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  endIcon?: ReactElement;
  extraLink?: ReactElement;
}
const Input = ({
  placeholder = "",
  type = "text",
  name = "input",
  label = "",
  endIcon,
  extraLink,
}: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <label className="text-grey_100 font-medium  text-sm" htmlFor={name}>
          {label}
        </label>
        {extraLink}
      </div>
      <div className="flex relative">
        <input
          className="border-2 flex-1 p-3 bg-inherit border-grey_400 rounded "
          id={name}
          placeholder={placeholder}
          type={type}
        />
        <span className="absolute right-[5%] top-1/2 -translate-y-1/2 translate-x-1/2">
          {endIcon}
        </span>
      </div>
    </div>
  );
};

export default Input;
