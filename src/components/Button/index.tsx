import React from "react";

const shapes = {
  round: "rounded-[10px]",
} as const;
const variants = {
  fill: {
    red_100: "bg-red-100 text-deep_orange-900",
    deep_orange_900: "bg-deep_orange-900 text-deep_orange-50",
    indigo_400: "bg-indigo-400 text-deep_orange-50",
    green_A700: "bg-green-A700 text-white-A700",
    teal_50: "bg-teal-50 text-green-A700",
    gray_100: "bg-gray-100 text-indigo-400",
  },
  outline: {
    gray_400: "border-gray-400 border border-solid text-gray-600",
    indigo_400: "border-indigo-400 border border-solid text-indigo-400",
  },
} as const;
const sizes = {
  lg: "h-[36px] px-[35px] text-xs",
  sm: "h-[28px] px-1.5 text-sm",
  md: "h-[31px] px-[35px] text-xs",
  xs: "h-[21px] px-0.5 text-sm",
} as const;

type ButtonProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xs",
  color = "gray_100",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer font-medium ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
