import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  round: "rounded-lg",
};
const variants = {
  fill: {
    indigo_A200_1e: "bg-indigo-A200_1e",
    white_A700_28: "bg-white-A700_28",
    indigo_A200: "bg-indigo-A200 text-white-A700",
    gray_100: "bg-gray-100 text-gray-900_01",
    orange_200_28: "bg-orange-200_28",
    orange_50_01: "bg-orange-50_01 text-gray-900_01",
  },
};
const sizes = {
  md: "h-[36px] px-[33px] text-sm",
  xl: "h-[56px] px-[17px] text-base",
  sm: "h-[33px] px-2.5 text-sm",
  xs: "h-[20px] px-1",
  lg: "h-[36px] px-2",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "lg",
  color = "orange_200_28",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["md", "xl", "sm", "xs", "lg"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "indigo_A200_1e",
    "white_A700_28",
    "indigo_A200",
    "gray_100",
    "orange_200_28",
    "orange_50_01",
  ]),
};

export { Button };
