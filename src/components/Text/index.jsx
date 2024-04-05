import React from "react";

const sizes = {
  xs: "text-[11px] font-normal",
  lg: "text-base font-medium",
  s: "text-xs font-normal",
  xl: "text-xl font-medium",
  md: "text-sm font-normal",
};

const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-blue_gray-400 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
