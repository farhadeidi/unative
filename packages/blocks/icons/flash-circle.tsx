import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const FlashCircleBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM15.53 13.23L10.35 16.82C9.59 17.35 9.15 17.04 9.37 16.15L10.32 12.31L8.67 11.9C7.92 11.72 7.83 11.2 8.46 10.76L13.64 7.17C14.4 6.64 14.84 6.95 14.62 7.84L13.67 11.68L15.32 12.09C16.07 12.28 16.16 12.79 15.53 13.23Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const FlashCircleBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8.67938 11.9101L10.3294 12.32L9.37939 16.1601C9.15939 17.0601 9.59937 17.36 10.3594 16.83L15.5394 13.2401C16.1694 12.8001 16.0794 12.2901 15.3294 12.1001L13.6794 11.6901L14.6294 7.85006C14.8494 6.95006 14.4094 6.65007 13.6494 7.18007L8.46939 10.7701C7.83939 11.2101 7.92938 11.7201 8.67938 11.9101Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.29998 7.97 2.84998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const FlashCircleBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.9707 22C17.4936 22 21.9707 17.5228 21.9707 12C21.9707 6.47715 17.4936 2 11.9707 2C6.44786 2 1.9707 6.47715 1.9707 12C1.9707 17.5228 6.44786 22 11.9707 22Z"
        fill="currentColor"
      />
      <Path
        d="M15.2505 11.2999H13.5505V7.33993C13.5505 6.41993 13.0505 6.22993 12.4405 6.91993L12.0005 7.41993L8.28045 11.6499C7.77045 12.2299 7.98045 12.6999 8.75045 12.6999H10.4505V16.6599C10.4505 17.5799 10.9505 17.7699 11.5605 17.0799L12.0005 16.5799L15.7205 12.3499C16.2305 11.7699 16.0205 11.2999 15.2505 11.2999Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const FlashCircleLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.67999 11.9101L10.33 12.32L9.38 16.1601C9.16 17.0601 9.59998 17.36 10.36 16.83L15.54 13.2401C16.17 12.8001 16.08 12.2901 15.33 12.1001L13.68 11.6901L14.63 7.85006C14.85 6.95006 14.41 6.65007 13.65 7.18007L8.47 10.7701C7.84 11.2101 7.92999 11.7201 8.67999 11.9101Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const FlashCircleOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
        fill="currentColor"
      />
      <Path
        d="M9.71003 17.84C9.42003 17.84 9.20005 17.7401 9.07005 17.6401C8.80005 17.4601 8.39004 17 8.65004 15.97L9.42006 12.86L8.50004 12.63C7.57004 12.4 7.36005 11.81 7.32005 11.57C7.28005 11.33 7.26005 10.7001 8.04005 10.1501L13.22 6.56003C14.09 5.96003 14.66 6.18002 14.93 6.36002C15.2 6.54002 15.61 7.00007 15.35 8.03007L14.58 11.1401L15.5 11.37C16.43 11.6 16.64 12.19 16.68 12.44C16.72 12.69 16.74 13.31 15.96 13.86L10.78 17.45C10.35 17.74 10 17.84 9.71003 17.84ZM9.11003 11.24L10.5101 11.5901C10.9101 11.6901 11.16 12.1 11.06 12.5L10.18 16.0401L14.8901 12.7701L13.49 12.4201C13.09 12.3201 12.84 11.91 12.94 11.51L13.8201 7.97001L9.11003 11.24Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const FlashCircleTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M8.67938 11.9098L10.3294 12.3198L9.37939 16.1599C9.15939 17.0599 9.59937 17.3598 10.3594 16.8298L15.5394 13.2398C16.1694 12.7998 16.0794 12.2898 15.3294 12.0998L13.6794 11.6898L14.6294 7.84981C14.8494 6.94981 14.4094 6.64983 13.6494 7.17983L8.46939 10.7699C7.83939 11.2099 7.92938 11.7198 8.67938 11.9098Z"
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
  bold: FlashCircleBold,
  broken: FlashCircleBroken,
  bulk: FlashCircleBulk,
  linear: FlashCircleLinear,
  outline: FlashCircleOutline,
  twotone: FlashCircleTwotone,
};

export const FlashCircleIcon = ({
  variant = "linear",
  ...props
}: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
