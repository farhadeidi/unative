import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const SliderBold = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <Path
        d="M18 16.0117C18.55 16.0117 19 16.4617 19 17.0117V18.0017C19 20.2017 17.5 22.0017 15 22.0017H9C6.5 22.0017 5 20.2017 5 18.0017V17.0117C5 16.4617 5.45 16.0117 6 16.0117H18Z"
        fill="currentColor"
      />
      <Path
        d="M19 6V13.5C19 14.05 18.55 14.5 18 14.5H6C5.45 14.5 5 14.05 5 13.5V6C5 3.8 6.5 2 9 2H15C17.5 2 19 3.8 19 6Z"
        fill="currentColor"
      />
      <Path
        d="M3 20.75C2.59 20.75 2.25 20.41 2.25 20V4C2.25 3.59 2.59 3.25 3 3.25C3.41 3.25 3.75 3.59 3.75 4V20C3.75 20.41 3.41 20.75 3 20.75Z"
        fill="currentColor"
      />
      <Path
        d="M21 20.75C20.59 20.75 20.25 20.41 20.25 20V4C20.25 3.59 20.59 3.25 21 3.25C21.41 3.25 21.75 3.59 21.75 4V20C21.75 20.41 21.41 20.75 21 20.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SliderBroken = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <Path
        d="M15 2C17.5 2 19 3.8 19 6V18C19 20.2 17.5 22 15 22H9C6.5 22 5 20.2 5 18V6C5 3.8 6.5 2 9 2H10.98"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5 16.01H19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 4V20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 4V20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const SliderBulk = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <Path
        d="M19 16.01V18C19 20.2 17.5 22 15 22H9C6.5 22 5 20.2 5 18V16.01H19Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M19 6V16.01H5V6C5 3.8 6.5 2 9 2H15C17.5 2 19 3.8 19 6Z"
        fill="currentColor"
      />
      <Path
        d="M3 20.75C2.59 20.75 2.25 20.41 2.25 20V4C2.25 3.59 2.59 3.25 3 3.25C3.41 3.25 3.75 3.59 3.75 4V20C3.75 20.41 3.41 20.75 3 20.75Z"
        fill="currentColor"
      />
      <Path
        d="M21 20.75C20.59 20.75 20.25 20.41 20.25 20V4C20.25 3.59 20.59 3.25 21 3.25C21.41 3.25 21.75 3.59 21.75 4V20C21.75 20.41 21.41 20.75 21 20.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SliderLinear = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <Path
        d="M15 22H9C6.5 22 5 20.2 5 18V6C5 3.8 6.5 2 9 2H15C17.5 2 19 3.8 19 6V18C19 20.2 17.5 22 15 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5 16.01H19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 4V20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 4V20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const SliderOutline = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <Path
        d="M15 22.75H9C6.25 22.75 4.25 20.75 4.25 18V6C4.25 3.25 6.25 1.25 9 1.25H15C17.75 1.25 19.75 3.25 19.75 6V18C19.75 20.75 17.75 22.75 15 22.75ZM9 2.75C6.75 2.75 5.75 4.38 5.75 6V18C5.75 19.62 6.75 21.25 9 21.25H15C17.25 21.25 18.25 19.62 18.25 18V6C18.25 4.38 17.25 2.75 15 2.75H9Z"
        fill="currentColor"
      />
      <Path
        d="M19 16.76H5C4.59 16.76 4.25 16.42 4.25 16.01C4.25 15.6 4.59 15.26 5 15.26H19C19.41 15.26 19.75 15.6 19.75 16.01C19.75 16.42 19.41 16.76 19 16.76Z"
        fill="currentColor"
      />
      <Path
        d="M2 20.75C1.59 20.75 1.25 20.41 1.25 20V4C1.25 3.59 1.59 3.25 2 3.25C2.41 3.25 2.75 3.59 2.75 4V20C2.75 20.41 2.41 20.75 2 20.75Z"
        fill="currentColor"
      />
      <Path
        d="M22 20.75C21.59 20.75 21.25 20.41 21.25 20V4C21.25 3.59 21.59 3.25 22 3.25C22.41 3.25 22.75 3.59 22.75 4V20C22.75 20.41 22.41 20.75 22 20.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SliderTwotone = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <Path
        d="M15 22H9C6.5 22 5 20.2 5 18V6C5 3.8 6.5 2 9 2H15C17.5 2 19 3.8 19 6V18C19 20.2 17.5 22 15 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M5 16.0098H19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M2 4V20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M22 4V20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: SliderBold,
  broken: SliderBroken,
  bulk: SliderBulk,
  linear: SliderLinear,
  outline: SliderOutline,
  twotone: SliderTwotone,
};

export const SliderIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
