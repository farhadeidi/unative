import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const SliderVerticalBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 15V9C22 7.34 20.66 6 19 6H5C3.34 6 2 7.34 2 9V15C2 16.66 3.34 18 5 18H19C20.66 18 22 16.66 22 15Z"
        fill="currentColor"
      />
      <Path
        d="M5.92923 19.5H18.0692C18.3892 19.5 18.6192 19.79 18.5592 20.1C18.2892 21.58 17.4192 22 15.3292 22H8.66923C6.56923 22 5.70923 21.58 5.43923 20.1C5.37923 19.79 5.60923 19.5 5.92923 19.5Z"
        fill="currentColor"
      />
      <Path
        d="M8.66923 2H15.3292C17.4292 2 18.2892 2.42 18.5592 3.9C18.6192 4.21 18.3792 4.5 18.0692 4.5H5.92923C5.60923 4.5 5.37923 4.21 5.43923 3.9C5.70923 2.42 6.56923 2 8.66923 2Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SliderVerticalBroken = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M11.55 5H16.5C17.12 5 17.67 5.02 18.16 5.09C20.79 5.38 21.5 6.62 21.5 10V14C21.5 17.38 20.79 18.62 18.16 18.91C17.67 18.98 17.12 19 16.5 19H7.5C6.88 19 6.33 18.98 5.84 18.91C3.21 18.62 2.5 17.38 2.5 14V10C2.5 6.62 3.21 5.38 5.84 5.09C6.33 5.02 6.88 5 7.5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.5 2H19.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5 22H20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const SliderVerticalBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.9405 3.5H5.06055C4.65055 3.5 4.31055 3.16 4.31055 2.75C4.31055 2.34 4.65055 2 5.06055 2H18.9405C19.3505 2 19.6905 2.34 19.6905 2.75C19.6905 3.16 19.3505 3.5 18.9405 3.5Z"
        fill="currentColor"
      />
      <Path
        d="M18.9405 22H5.06055C4.65055 22 4.31055 21.66 4.31055 21.25C4.31055 20.84 4.65055 20.5 5.06055 20.5H18.9405C19.3505 20.5 19.6905 20.84 19.6905 21.25C19.6905 21.66 19.3505 22 18.9405 22Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M2.75 7.6001V16.4001C2.75 18.0601 4.09 19.4001 5.75 19.4001H18.25C19.91 19.4001 21.25 18.0601 21.25 16.4001V7.6001C21.25 5.9401 19.91 4.6001 18.25 4.6001H5.75C4.09 4.6001 2.75 5.9401 2.75 7.6001Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SliderVerticalLinear = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M7 6H17C17.62 6 18.17 6.02 18.66 6.09C21.29 6.38 22 7.62 22 11V13C22 16.38 21.29 17.62 18.66 17.91C18.17 17.98 17.62 18 17 18H7C6.38 18 5.83 17.98 5.34 17.91C2.71 17.62 2 16.38 2 13V11C2 7.62 2.71 6.38 5.34 6.09C5.83 6.02 6.38 6 7 6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17 17.9999C17.62 17.9999 18.17 17.9799 18.66 17.9099C18.67 18.0499 18.67 18.1799 18.67 18.3299V18.6699C18.67 21.3299 18 21.9999 15.33 21.9999H8.67C6 21.9999 5.33 21.3299 5.33 18.6699V18.3299C5.33 18.1799 5.33 18.0499 5.34 17.9099C5.83 17.9799 6.38 17.9999 7 17.9999H17Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.67 2H15.33C18 2 18.67 2.67 18.67 5.33V5.67C18.67 5.82 18.67 5.95 18.66 6.09C18.17 6.02 17.62 6 17 6H7C6.38 6 5.83 6.02 5.34 6.09C5.33 5.95 5.33 5.82 5.33 5.67V5.33C5.33 2.67 6 2 8.67 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const SliderVerticalOutline = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M16.5 19.75H7.5C6.75 19.75 6.2 19.72 5.73 19.65C2.41 19.29 1.75 17.3 1.75 14V10C1.75 6.7 2.41 4.71 5.76 4.34C6.2 4.28 6.75 4.25 7.5 4.25H16.5C17.25 4.25 17.8 4.28 18.27 4.35C21.6 4.72 22.25 6.7 22.25 10V14C22.25 17.3 21.59 19.29 18.24 19.66C17.8 19.72 17.25 19.75 16.5 19.75ZM7.5 5.75C6.82 5.75 6.34 5.78 5.95 5.83C3.92 6.06 3.25 6.69 3.25 10V14C3.25 17.31 3.92 17.94 5.92 18.17C6.34 18.23 6.82 18.25 7.5 18.25H16.5C17.18 18.25 17.66 18.22 18.05 18.17C20.08 17.95 20.75 17.31 20.75 14V10C20.75 6.69 20.08 6.06 18.08 5.83C17.66 5.77 17.18 5.75 16.5 5.75H7.5Z"
        fill="currentColor"
      />
      <Path
        d="M19.5 2.75H4.5C4.09 2.75 3.75 2.41 3.75 2C3.75 1.59 4.09 1.25 4.5 1.25H19.5C19.91 1.25 20.25 1.59 20.25 2C20.25 2.41 19.91 2.75 19.5 2.75Z"
        fill="currentColor"
      />
      <Path
        d="M20 22.75H5C4.59 22.75 4.25 22.41 4.25 22C4.25 21.59 4.59 21.25 5 21.25H20C20.41 21.25 20.75 21.59 20.75 22C20.75 22.41 20.41 22.75 20 22.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SliderVerticalTwotone = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M7 6H17C17.62 6 18.17 6.02 18.66 6.09C21.29 6.38 22 7.62 22 11V13C22 16.38 21.29 17.62 18.66 17.91C18.17 17.98 17.62 18 17 18H7C6.38 18 5.83 17.98 5.34 17.91C2.71 17.62 2 16.38 2 13V11C2 7.62 2.71 6.38 5.34 6.09C5.83 6.02 6.38 6 7 6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M17.0001 18.0002C17.6201 18.0002 18.1701 17.9802 18.6601 17.9102C18.6701 18.0502 18.6701 18.1802 18.6701 18.3302V18.6702C18.6701 21.3302 18.0001 22.0002 15.3301 22.0002H8.67008C6.00008 22.0002 5.33008 21.3302 5.33008 18.6702V18.3302C5.33008 18.1802 5.33008 18.0502 5.34008 17.9102C5.83008 17.9802 6.38008 18.0002 7.00008 18.0002H17.0001Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M8.67008 2H15.3301C18.0001 2 18.6701 2.67 18.6701 5.33V5.67C18.6701 5.82 18.6701 5.95 18.6601 6.09C18.1701 6.02 17.6201 6 17.0001 6H7.00008C6.38008 6 5.83008 6.02 5.34008 6.09C5.33008 5.95 5.33008 5.82 5.33008 5.67V5.33C5.33008 2.67 6.00008 2 8.67008 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: SliderVerticalBold,
  broken: SliderVerticalBroken,
  bulk: SliderVerticalBulk,
  linear: SliderVerticalLinear,
  outline: SliderVerticalOutline,
  twotone: SliderVerticalTwotone,
};

export const SliderVerticalIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
