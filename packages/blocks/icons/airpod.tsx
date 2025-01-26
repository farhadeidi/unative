import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const AirpodBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.08 11.3419H8.92C8.28 11.3419 7.65 11.0819 7.2 10.6219C7.06 10.4819 6.94 10.3319 6.84 10.1619C6.66 9.86187 6.34 9.67188 5.99 9.67188H3.5C2.95 9.67188 2.5 10.1219 2.5 10.6719V17.5019C2.5 19.9919 4.51 22.0019 7 22.0019H17C19.49 22.0019 21.5 19.9919 21.5 17.5019V10.6719C21.5 10.1219 21.05 9.67188 20.5 9.67188H18C17.64 9.67188 17.32 9.87188 17.14 10.1819C16.72 10.8719 15.95 11.3419 15.08 11.3419Z"
        fill="currentColor"
      />
      <Path
        d="M17 2H7C4.51 2 2.5 4.01 2.5 6.5V7.17C2.5 7.72 2.95 8.17 3.5 8.17H6C6.36 8.17 6.68 7.97 6.86 7.66C7.28 6.97 8.05 6.5 8.92 6.5H14.91C15.52 6.5 16.4 6.82 16.82 7.25C16.95 7.38 17.05 7.52 17.15 7.67C17.33 7.97 17.65 8.17 18.01 8.17H20.51C21.06 8.17 21.51 7.72 21.51 7.17V6.5C21.5 4.01 19.49 2 17 2Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const AirpodBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2.61914 10.97V8.25C2.61914 7.48 2.64914 6.79 2.72914 6.18C3.09914 2.89 4.64914 2 8.87914 2H15.1291C19.3491 2 20.9091 2.89 21.2691 6.18C21.3591 6.79 21.3791 7.48 21.3791 8.25V15.75C21.3791 16.52 21.3491 17.21 21.2691 17.83C20.8991 21.11 19.3491 22 15.1191 22H8.87914C4.65914 22 3.09914 21.11 2.73914 17.83C2.64914 17.21 2.61914 16.52 2.61914 15.75V15.01"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.2309 8.91992H17.1309"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.86953 8.91992H2.76953"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.1291 8.92012C17.1291 10.0501 16.2091 10.9701 15.0791 10.9701H8.91914C8.35914 10.9701 7.83914 10.7401 7.46914 10.3601C7.09914 10.0001 6.86914 9.49012 6.86914 8.92012C6.86914 7.79012 7.78914 6.87012 8.91914 6.87012H15.0691C15.6291 6.87012 16.1491 7.10012 16.5191 7.48012C16.8991 7.85012 17.1291 8.36012 17.1291 8.92012Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const AirpodBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        opacity="0.4"
        d="M21.5 6.5V17.5C21.5 19.99 19.49 22 17 22H7C4.51 22 2.5 19.99 2.5 17.5V6.5C2.5 4.01 4.51 2 7 2H17C19.49 2 21.5 4.01 21.5 6.5Z"
        fill="currentColor"
      />
      <Path
        d="M21.5 8.17V9.67H17.37C17.06 10.64 16.15 11.34 15.08 11.34H8.92C8.28 11.34 7.65 11.08 7.2 10.62C6.93 10.36 6.74 10.03 6.62 9.67H2.5V8.17H6.63C6.94 7.2 7.85 6.5 8.92 6.5H15.07C15.72 6.5 16.34 6.76 16.79 7.22C17.06 7.49 17.26 7.81 17.37 8.17H21.5Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const AirpodLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2.62012 15.75V8.25C2.62012 7.48 2.65012 6.79 2.73012 6.18C3.10012 2.89 4.65012 2 8.88012 2H15.1301C19.3501 2 20.9101 2.89 21.2701 6.18C21.3601 6.79 21.3801 7.48 21.3801 8.25V15.75C21.3801 16.52 21.3501 17.21 21.2701 17.83C20.9001 21.11 19.3501 22 15.1201 22H8.88012C4.66012 22 3.10012 21.11 2.74012 17.83C2.65012 17.21 2.62012 16.52 2.62012 15.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.2299 8.92004H17.1299"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.87002 8.92004H2.77002"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.1301 8.92C17.1301 10.05 16.2101 10.97 15.0801 10.97H8.92012C8.36012 10.97 7.84012 10.74 7.47012 10.36C7.10012 9.99999 6.87012 9.49 6.87012 8.92C6.87012 7.79 7.79012 6.87 8.92012 6.87H15.0701C15.6301 6.87 16.1501 7.1 16.5201 7.48C16.9001 7.85 17.1301 8.36 17.1301 8.92Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const AirpodOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.1199 22.75H8.87988C4.84988 22.75 2.43988 21.96 1.99988 17.91C1.91988 17.33 1.87988 16.64 1.87988 15.75V8.25C1.87988 7.39 1.91988 6.68 1.99988 6.08C2.45988 2.02 4.76988 1.25 8.88988 1.25H15.1399C19.2599 1.25 21.5799 2.02 22.0199 6.1C22.1199 6.77 22.1399 7.53 22.1399 8.25V15.75C22.1399 16.62 22.0999 17.31 22.0199 17.93C21.5599 21.98 19.2399 22.75 15.1199 22.75ZM8.87988 2.75C4.62988 2.75 3.76988 3.67 3.47988 6.26C3.39988 6.81 3.36988 7.46 3.36988 8.25V15.75C3.36988 16.57 3.40988 17.19 3.47988 17.72C3.76988 20.33 4.61988 21.25 8.87988 21.25H15.1199C19.3699 21.25 20.2299 20.33 20.5199 17.75C20.5899 17.2 20.6299 16.55 20.6299 15.75V8.25C20.6299 7.59 20.6199 6.89 20.5299 6.29C20.2399 3.67 19.3899 2.75 15.1299 2.75H8.87988Z"
        fill="currentColor"
      />
      <Path
        d="M21.2299 9.66992H17.1299C16.7199 9.66992 16.3799 9.32992 16.3799 8.91992C16.3799 8.50992 16.7199 8.16992 17.1299 8.16992H21.2299C21.6399 8.16992 21.9799 8.50992 21.9799 8.91992C21.9799 9.32992 21.6399 9.66992 21.2299 9.66992Z"
        fill="currentColor"
      />
      <Path
        d="M6.86953 9.66992H2.76953C2.35953 9.66992 2.01953 9.32992 2.01953 8.91992C2.01953 8.50992 2.35953 8.16992 2.76953 8.16992H6.86953C7.27953 8.16992 7.61953 8.50992 7.61953 8.91992C7.61953 9.32992 7.27953 9.66992 6.86953 9.66992Z"
        fill="currentColor"
      />
      <Path
        d="M15.0801 11.7201H8.92012C8.17012 11.7201 7.45012 11.4201 6.93012 10.8801C6.41012 10.3801 6.12012 9.67012 6.12012 8.92012C6.12012 7.38012 7.38012 6.12012 8.92012 6.12012H15.0701C15.8201 6.12012 16.5401 6.43012 17.0601 6.96012C17.5801 7.47012 17.8801 8.17012 17.8801 8.92012C17.8801 10.4601 16.6201 11.7201 15.0801 11.7201ZM8.92012 7.62012C8.20012 7.62012 7.62012 8.20012 7.62012 8.92012C7.62012 9.27012 7.75012 9.59012 7.99012 9.82012C8.24012 10.0801 8.57012 10.2201 8.92012 10.2201H15.0801C15.8001 10.2201 16.3801 9.64012 16.3801 8.92012C16.3801 8.58012 16.2401 8.26012 16.0001 8.02012C15.7501 7.76012 15.4201 7.62012 15.0701 7.62012H8.92012Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const AirpodTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2.62012 15.75V8.25C2.62012 7.48 2.65012 6.79 2.73012 6.18C3.10012 2.89 4.65012 2 8.88012 2H15.1301C19.3501 2 20.9101 2.89 21.2701 6.18C21.3601 6.79 21.3801 7.48 21.3801 8.25V15.75C21.3801 16.52 21.3501 17.21 21.2701 17.83C20.9001 21.11 19.3501 22 15.1201 22H8.88012C4.66012 22 3.10012 21.11 2.74012 17.83C2.65012 17.21 2.62012 16.52 2.62012 15.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M21.2299 8.91992H17.1299"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M6.86953 8.91992H2.76953"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M17.1301 8.92012C17.1301 10.0501 16.2101 10.9701 15.0801 10.9701H8.92012C8.36012 10.9701 7.84012 10.7401 7.47012 10.3601C7.10012 10.0001 6.87012 9.49012 6.87012 8.92012C6.87012 7.79012 7.79012 6.87012 8.92012 6.87012H15.0701C15.6301 6.87012 16.1501 7.10012 16.5201 7.48012C16.9001 7.85012 17.1301 8.36012 17.1301 8.92012Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};

const variants: IconVariants = {
  bold: AirpodBold,
  broken: AirpodBroken,
  bulk: AirpodBulk,
  linear: AirpodLinear,
  outline: AirpodOutline,
  twotone: AirpodTwotone,
};

export const AirpodIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
