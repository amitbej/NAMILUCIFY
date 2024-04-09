import React from "react";

const sizes = {
  s: "text-base font-semibold",
  md: "text-2xl font-semibold md:text-[22px]",
  xs: "text-xs font-semibold",
  lg: "text-[32px] font-semibold md:text-3xl sm:text-[28px]",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "xs",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900 font-encodesansexpanded ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
