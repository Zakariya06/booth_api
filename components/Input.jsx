import React from "react";

const Input = React.forwardRef(
  (
    {
      input = true,
      className = "",
      type = "text",
      label,
      placeholder = "",
      ...props
    },
    ref
  ) => {
    const id = React.useId();
    return (
      <>
        <div className="inputHolder" ref={ref}>
          {label && (
            <label htmlFor={id} className="inputLabel">
              {label}
            </label>
          )}

          {input ? (
            <input
              className={`inputArea ${className}`}
              type={type}
              placeholder={placeholder}
              id={id}
              {...props}
            />
          ) : (
            <textarea
              className={`inputArea ${className}`}
              rows={6}
              placeholder={placeholder}
              id={id}
              {...props}
            ></textarea>
          )}
        </div>
      </>
    );
  }
);

export default Input;
