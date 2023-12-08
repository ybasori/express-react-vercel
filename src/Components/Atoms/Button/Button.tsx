import React from "react";

const Button: React.FC<{
  children?: React.ReactNode;
  type?: "button" | "reset" | "submit";
  color?: "primary";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  loading?: boolean;
}> = ({
  children,
  type,
  onClick,
  color,
  disabled = false,
  loading = false,
}) => {
  return (
    <>
      <button
        className={`button ${color ? `is-${color}` : ``} ${
          loading ? `is-loading` : ``
        }`}
        type={type}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
