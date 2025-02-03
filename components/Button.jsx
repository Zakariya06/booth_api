"use client";
import React from "react";

const Button = React.forwardRef(
  ({ value = "", className = " ", ...props }, ref) => {
    return (
      <button ref={ref} className={`mainBtn ${className}`} {...props}>
        {value}
      </button>
    );
  }
);

export default Button;
