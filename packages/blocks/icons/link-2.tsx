import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const Link2Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7.24989 12C7.24989 11.59 7.58989 11.25 7.99989 11.25H10.9999V7.5C10.9999 6.95 10.5499 6.5 9.99989 6.5H7.76989C4.61989 6.5 1.87989 9.08 1.99989 12.22C2.05989 13.65 2.65989 14.94 3.60989 15.89C4.60989 16.88 5.97989 17.5 7.49989 17.5H9.99989C10.5499 17.5 10.9999 17.05 10.9999 16.5V12.75H7.99989C7.58989 12.75 7.24989 12.41 7.24989 12Z"
        fill="currentColor"
      />
      <Path
        d="M20.39 8.11C19.39 7.12 18.02 6.5 16.5 6.5H14C13.45 6.5 13 6.95 13 7.5V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75H13V16.5C13 17.05 13.45 17.5 14 17.5H16.23C19.38 17.5 22.12 14.92 21.99 11.78C21.94 10.35 21.33 9.06 20.39 8.11Z"
        fill="currentColor"
      />
      <Path d="M13 11.25H11V12.75H13V11.25Z" fill="currentColor" />
    </Svg>
  );
};

const Link2Broken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.9902 17.5H16.5002C19.5202 17.5 22.0002 15.03 22.0002 12C22.0002 8.98 19.5302 6.5 16.5002 6.5H14.9902"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.37 10.01C2.13 10.63 2 11.3 2 12C2 15.02 4.47 17.5 7.5 17.5H9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.99969 6.5H7.49969C6.66969 6.5 5.88969 6.68 5.17969 7.01"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 12H16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Link2Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.4101 18.5899C15.0101 18.5899 14.6801 18.2599 14.6801 17.8599C14.6801 17.4599 15.0101 17.1299 15.4101 17.1299C18.2301 17.1299 20.5301 14.8299 20.5301 12.0099C20.5301 9.18992 18.2301 6.88992 15.4101 6.88992C12.5901 6.88992 10.2901 9.18992 10.2901 12.0099C10.2901 12.4099 9.96008 12.7399 9.56008 12.7399C9.16008 12.7399 8.83008 12.4099 8.83008 12.0099C8.83008 8.37992 11.7801 5.41992 15.4201 5.41992C19.0601 5.41992 22.0001 8.36992 22.0001 11.9999C22.0001 15.6299 19.0501 18.5899 15.4101 18.5899Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M22 12.0002C22 15.6402 19.05 18.5902 15.41 18.5902C14.16 18.5902 12.99 18.2402 12 17.6302C13.9 16.4802 15.17 14.3902 15.17 12.0002C15.17 9.61016 13.9 7.52016 12 6.37016C13 5.77016 14.17 5.41016 15.41 5.41016C19.05 5.41016 22 8.36016 22 12.0002Z"
        fill="currentColor"
      />
      <Path
        d="M8.59 5.41016C8.99 5.41016 9.32 5.74016 9.32 6.14016C9.32 6.54016 8.99 6.87016 8.59 6.87016C5.77 6.87016 3.47 9.17016 3.47 11.9902C3.47 14.8102 5.77 17.1102 8.59 17.1102C11.41 17.1102 13.71 14.8102 13.71 11.9902C13.71 11.5902 14.04 11.2602 14.44 11.2602C14.84 11.2602 15.17 11.5902 15.17 11.9902C15.17 15.6202 12.22 18.5802 8.58 18.5802C4.94 18.5802 2 15.6302 2 12.0002C2 8.37016 4.95 5.41016 8.59 5.41016Z"
        fill="currentColor"
      />
      <Path
        opacity="0.5"
        d="M15.17 12.0002C15.17 14.3902 13.9 16.4802 12 17.6302C11 18.2302 9.83 18.5902 8.59 18.5902C4.95 18.5902 2 15.6402 2 12.0002C2 8.36016 4.95 5.41016 8.59 5.41016C9.83 5.41016 11 5.77016 12 6.37016C13.9 7.52016 15.17 9.61016 15.17 12.0002Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Link2Linear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13.5 12C13.5 15.18 10.93 17.75 7.75 17.75C4.57 17.75 2 15.18 2 12C2 8.82 4.57 6.25 7.75 6.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 12C10 8.69 12.69 6 16 6C19.31 6 22 8.69 22 12C22 15.31 19.31 18 16 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Link2Outline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8.98969 21.5001C7.32969 21.5001 5.65969 20.8701 4.38969 19.6001C1.85969 17.0601 1.85969 12.9401 4.38969 10.4101C4.67969 10.1201 5.15969 10.1201 5.44969 10.4101C5.73969 10.7001 5.73969 11.1801 5.44969 11.4701C3.49969 13.4201 3.49969 16.5901 5.44969 18.5401C7.39969 20.4901 10.5697 20.4901 12.5197 18.5401C13.4597 17.6001 13.9797 16.3401 13.9797 15.0001C13.9797 13.6701 13.4597 12.4101 12.5197 11.4601C12.2297 11.1701 12.2297 10.6901 12.5197 10.4001C12.8097 10.1101 13.2897 10.1101 13.5797 10.4001C14.8097 11.6301 15.4797 13.2601 15.4797 15.0001C15.4797 16.7401 14.7997 18.3701 13.5797 19.6001C12.3197 20.8701 10.6597 21.5001 8.98969 21.5001Z"
        fill="currentColor"
      />
      <Path
        d="M19.0701 14.1602C18.8801 14.1602 18.6901 14.0902 18.5401 13.9402C18.2501 13.6502 18.2501 13.1702 18.5401 12.8802C20.5901 10.8302 20.5901 7.50023 18.5401 5.46023C16.4901 3.41023 13.1601 3.41023 11.1201 5.46023C10.1301 6.45023 9.58008 7.77023 9.58008 9.17023C9.58008 10.5702 10.1301 11.8902 11.1201 12.8802C11.4101 13.1702 11.4101 13.6502 11.1201 13.9402C10.8301 14.2302 10.3501 14.2302 10.0601 13.9402C8.79008 12.6702 8.08008 10.9702 8.08008 9.17023C8.08008 7.37023 8.78008 5.67023 10.0601 4.40023C12.6901 1.77023 16.9701 1.77023 19.6101 4.40023C22.2401 7.03023 22.2401 11.3202 19.6101 13.9502C19.4601 14.0902 19.2601 14.1602 19.0701 14.1602Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Link2Twotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13.5 12C13.5 15.18 10.93 17.75 7.75 17.75C4.57 17.75 2 15.18 2 12C2 8.82 4.57 6.25 7.75 6.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M10 12C10 8.69 12.69 6 16 6C19.31 6 22 8.69 22 12C22 15.31 19.31 18 16 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: Link2Bold,
  broken: Link2Broken,
  bulk: Link2Bulk,
  linear: Link2Linear,
  outline: Link2Outline,
  twotone: Link2Twotone,
};

export const Link2Icon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
