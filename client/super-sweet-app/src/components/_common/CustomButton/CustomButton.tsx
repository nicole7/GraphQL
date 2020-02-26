import React from "react";
import "./CustomButton.scss";

interface CustomButtonProps {
  additionalStyle?: string | null;
  isDisabled?: boolean;
  isBordered?: boolean;
  title?: string;
  onClick: () => void;
  children?: JSX.Element;
}

export const CustomButton = ({
  title,
  isBordered = false,
  isDisabled = false,
  onClick,
  additionalStyle,
  children
}: CustomButtonProps): JSX.Element => {
  return (
    <button
      disabled={isDisabled}
      className={`CustomButton-Default ${
        isBordered ? "CustomButton-Bordered" : "CustomButton-Plain"
      } ${additionalStyle && additionalStyle} ${
        isDisabled ? "CustomButton-Disabled" : ""
      }`}
      onClick={onClick}
    >
      {title || children}
    </button>
  );
};
