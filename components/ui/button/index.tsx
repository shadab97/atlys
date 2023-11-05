"use client";
import React, { ButtonHTMLAttributes } from "react";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  block: boolean;
}
const Button = ({ text, type = "button", block = false }: ButtonProps) => {
  return (
    <button
      className="bg-blue p-3 rounded-md text-white text-base font-medium text-center w-full"
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
