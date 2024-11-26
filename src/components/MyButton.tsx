import React from 'react';
import cn from "classnames";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: "primary" | "outlined";
  children: React.ReactNode;
};

function MyButton({ children, color, className, ...rest }: IProps) {
  return (
    <button
      className={cn(
        'inline-flex justify-center items-center gap-1 border-4 px-8 py-1 text-black hover:opacity-80',
        (color === "primary") ? "border-yellow-400 bg-yellow-400" : "",
        (color === "outlined" ? "border-yellow-400" : ""),
        className
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

export default MyButton;