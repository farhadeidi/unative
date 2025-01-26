import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const WindBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.5 22.75C16.16 22.75 14.25 20.84 14.25 18.5V18C14.25 17.59 14.59 17.25 15 17.25C15.41 17.25 15.75 17.59 15.75 18V18.5C15.75 20.02 16.98 21.25 18.5 21.25C20.02 21.25 21.25 20.02 21.25 18.5C21.25 16.98 20.02 15.75 18.5 15.75H2C1.59 15.75 1.25 15.41 1.25 15C1.25 14.59 1.59 14.25 2 14.25H18.5C20.84 14.25 22.75 16.16 22.75 18.5C22.75 20.84 20.84 22.75 18.5 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M18.5 12.75H2C1.59 12.75 1.25 12.41 1.25 12C1.25 11.59 1.59 11.25 2 11.25H18.5C20.02 11.25 21.25 10.02 21.25 8.5C21.25 6.98 20.02 5.75 18.5 5.75C16.98 5.75 15.75 6.98 15.75 8.5V9C15.75 9.41 15.41 9.75 15 9.75C14.59 9.75 14.25 9.41 14.25 9V8.5C14.25 6.16 16.16 4.25 18.5 4.25C20.84 4.25 22.75 6.16 22.75 8.5C22.75 10.84 20.84 12.75 18.5 12.75Z"
        fill="currentColor"
      />
      <Path
        d="M9.31 9.75109H2C1.59 9.75109 1.25 9.41109 1.25 9.00109C1.25 8.59109 1.59 8.25109 2 8.25109H9.31C10.38 8.25109 11.25 7.38109 11.25 6.31109C11.25 5.24109 10.38 4.37109 9.31 4.37109C8.24 4.37109 7.37 5.24109 7.37 6.31109V6.69109C7.37 7.10109 7.03 7.44109 6.62 7.44109C6.21 7.44109 5.87 7.11109 5.87 6.69109V6.31109C5.87 4.41109 7.41 2.87109 9.31 2.87109C11.21 2.87109 12.75 4.41109 12.75 6.31109C12.75 8.21109 11.21 9.75109 9.31 9.75109Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const WindBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 15H18.5C20.43 15 22 16.57 22 18.5C22 20.43 20.43 22 18.5 22C16.57 22 15 20.43 15 18.5V18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.05078 12H18.5008C20.4208 12 22.0008 10.43 22.0008 8.5C22.0008 6.58 20.4208 5 18.5008 5C16.5808 5 15.0008 6.57 15.0008 8.5V9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 12H4.98001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 9.00012H9.31C10.8 9.00012 12 7.79012 12 6.31012C12 4.82012 10.79 3.62012 9.31 3.62012C7.82 3.62012 6.62 4.83012 6.62 6.31012V6.69012"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const WindBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.5 22.75C16.16 22.75 14.25 20.84 14.25 18.5V18C14.25 17.59 14.59 17.25 15 17.25C15.41 17.25 15.75 17.59 15.75 18V18.5C15.75 20.02 16.98 21.25 18.5 21.25C20.02 21.25 21.25 20.02 21.25 18.5C21.25 16.98 20.02 15.75 18.5 15.75H2C1.59 15.75 1.25 15.41 1.25 15C1.25 14.59 1.59 14.25 2 14.25H18.5C20.84 14.25 22.75 16.16 22.75 18.5C22.75 20.84 20.84 22.75 18.5 22.75Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M18.5 12.75H2C1.59 12.75 1.25 12.41 1.25 12C1.25 11.59 1.59 11.25 2 11.25H18.5C20.02 11.25 21.25 10.02 21.25 8.5C21.25 6.98 20.02 5.75 18.5 5.75C16.98 5.75 15.75 6.98 15.75 8.5V9C15.75 9.41 15.41 9.75 15 9.75C14.59 9.75 14.25 9.41 14.25 9V8.5C14.25 6.16 16.16 4.25 18.5 4.25C20.84 4.25 22.75 6.16 22.75 8.5C22.75 10.84 20.84 12.75 18.5 12.75Z"
        fill="currentColor"
      />
      <Path
        d="M9.31 9.75012H2C1.59 9.75012 1.25 9.41012 1.25 9.00012C1.25 8.59012 1.59 8.25012 2 8.25012H9.31C10.38 8.25012 11.25 7.38012 11.25 6.31012C11.25 5.24012 10.38 4.37012 9.31 4.37012C8.24 4.37012 7.37 5.24012 7.37 6.31012V6.69012C7.37 7.10012 7.03 7.44012 6.62 7.44012C6.21 7.44012 5.87 7.11012 5.87 6.69012V6.31012C5.87 4.41012 7.41 2.87012 9.31 2.87012C11.21 2.87012 12.75 4.41012 12.75 6.31012C12.75 8.21012 11.21 9.75012 9.31 9.75012Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const WindLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 15H18.5C20.43 15 22 16.57 22 18.5C22 20.43 20.43 22 18.5 22C16.57 22 15 20.43 15 18.5V18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 12H18.5C20.42 12 22 10.43 22 8.5C22 6.58 20.42 5 18.5 5C16.58 5 15 6.57 15 8.5V9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 9H9.31C10.8 9 12 7.79 12 6.31C12 4.82 10.79 3.62 9.31 3.62C7.82 3.62 6.62 4.83 6.62 6.31V6.69"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const WindOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.5 22.75C16.16 22.75 14.25 20.84 14.25 18.5V18C14.25 17.59 14.59 17.25 15 17.25C15.41 17.25 15.75 17.59 15.75 18V18.5C15.75 20.02 16.98 21.25 18.5 21.25C20.02 21.25 21.25 20.02 21.25 18.5C21.25 16.98 20.02 15.75 18.5 15.75H2C1.59 15.75 1.25 15.41 1.25 15C1.25 14.59 1.59 14.25 2 14.25H18.5C20.84 14.25 22.75 16.16 22.75 18.5C22.75 20.84 20.84 22.75 18.5 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M18.5 12.75H2C1.59 12.75 1.25 12.41 1.25 12C1.25 11.59 1.59 11.25 2 11.25H18.5C20.02 11.25 21.25 10.02 21.25 8.5C21.25 6.98 20.02 5.75 18.5 5.75C16.98 5.75 15.75 6.98 15.75 8.5V9C15.75 9.41 15.41 9.75 15 9.75C14.59 9.75 14.25 9.41 14.25 9V8.5C14.25 6.16 16.16 4.25 18.5 4.25C20.84 4.25 22.75 6.16 22.75 8.5C22.75 10.84 20.84 12.75 18.5 12.75Z"
        fill="currentColor"
      />
      <Path
        d="M9.31 9.75012H2C1.59 9.75012 1.25 9.41012 1.25 9.00012C1.25 8.59012 1.59 8.25012 2 8.25012H9.31C10.38 8.25012 11.25 7.38012 11.25 6.31012C11.25 5.24012 10.38 4.37012 9.31 4.37012C8.24 4.37012 7.37 5.24012 7.37 6.31012V6.69012C7.37 7.10012 7.02999 7.44012 6.62 7.44012C6.21 7.44012 5.87 7.10012 5.87 6.69012V6.31012C5.87 4.41012 7.41 2.87012 9.31 2.87012C11.21 2.87012 12.75 4.41012 12.75 6.31012C12.75 8.21012 11.21 9.75012 9.31 9.75012Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const WindTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 15H18.5C20.43 15 22 16.57 22 18.5C22 20.43 20.43 22 18.5 22C16.57 22 15 20.43 15 18.5V18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M2 12H18.5C20.42 12 22 10.43 22 8.5C22 6.58 20.42 5 18.5 5C16.58 5 15 6.57 15 8.5V9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 9.00012H9.31C10.8 9.00012 12 7.79012 12 6.31012C12 4.82012 10.79 3.62012 9.31 3.62012C7.82 3.62012 6.62 4.83012 6.62 6.31012V6.69012"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: WindBold,
  broken: WindBroken,
  bulk: WindBulk,
  linear: WindLinear,
  outline: WindOutline,
  twotone: WindTwotone,
};

export const WindIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
