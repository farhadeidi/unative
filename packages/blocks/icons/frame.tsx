import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const FrameBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z"
        fill="currentColor"
      />
      <Path
        d="M17.0809 14.1489C14.2909 12.2889 9.74094 12.2889 6.93094 14.1489C5.66094 14.9989 4.96094 16.1489 4.96094 17.3789C4.96094 18.6089 5.66094 19.7489 6.92094 20.5889C8.32094 21.5289 10.1609 21.9989 12.0009 21.9989C13.8409 21.9989 15.6809 21.5289 17.0809 20.5889C18.3409 19.7389 19.0409 18.5989 19.0409 17.3589C19.0309 16.1289 18.3409 14.9889 17.0809 14.1489Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const FrameBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8.66992 14.3301C8.66992 15.6201 9.65992 16.6601 10.8899 16.6601H13.3999C14.4699 16.6601 15.3399 15.7501 15.3399 14.6301C15.3399 13.4101 14.8099 12.9801 14.0199 12.7001L9.98992 11.3001C9.19992 11.0201 8.66992 10.5901 8.66992 9.37009C8.66992 8.25009 9.53992 7.34009 10.6099 7.34009H13.1199C14.3499 7.34009 15.3399 8.38009 15.3399 9.67009"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 6V18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.3 7.97 2.85"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const FrameBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16 20.97V18.03C16 16.76 16.76 16 18.03 16H20.97C21.37 16 21.71 16.08 22 16.22C22 16.21 22 16.2 22 16.18V7.81C22 4.17 19.83 2 16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C16.19 22 16.2 22 16.22 22C16.08 21.71 16 21.37 16 20.97Z"
        fill="currentColor"
      />
      <Path
        d="M7 14.25C6.59 14.25 6.25 13.91 6.25 13.5V10.5C6.25 10.09 6.59 9.75 7 9.75C7.41 9.75 7.75 10.09 7.75 10.5V13.5C7.75 13.91 7.41 14.25 7 14.25Z"
        fill="currentColor"
      />
      <Path
        d="M12 14.25C11.59 14.25 11.25 13.91 11.25 13.5V10.5C11.25 10.09 11.59 9.75 12 9.75C12.41 9.75 12.75 10.09 12.75 10.5V13.5C12.75 13.91 12.41 14.25 12 14.25Z"
        fill="currentColor"
      />
      <Path
        d="M17 14.25C16.59 14.25 16.25 13.91 16.25 13.5V10.5C16.25 10.09 16.59 9.75 17 9.75C17.41 9.75 17.75 10.09 17.75 10.5V13.5C17.75 13.91 17.41 14.25 17 14.25Z"
        fill="currentColor"
      />
      <Path
        d="M20.97 16H18.03C16.76 16 16 16.76 16 18.03V20.97C16 22.24 16.76 23 18.03 23H20.97C22.24 23 23 22.24 23 20.97V18.03C23 16.76 22.24 16 20.97 16ZM21.47 20.56C21.72 20.81 21.72 21.22 21.47 21.47C21.34 21.59 21.18 21.65 21.01 21.65C20.85 21.65 20.69 21.59 20.56 21.47L19.5 20.41L18.45 21.47C18.32 21.59 18.16 21.65 17.99 21.65C17.83 21.65 17.67 21.59 17.54 21.47C17.29 21.22 17.29 20.81 17.54 20.56L18.6 19.5L17.54 18.45C17.29 18.2 17.29 17.79 17.54 17.54C17.79 17.29 18.2 17.29 18.45 17.54L19.5 18.6L20.56 17.54C20.81 17.29 21.22 17.29 21.47 17.54C21.72 17.79 21.72 18.2 21.47 18.45L20.41 19.5L21.47 20.56Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const FrameLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.46997 13.26L12 9.73999L15.53 13.26"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const FrameOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C12.41 1.25 12.75 1.59 12.75 2C12.75 2.41 12.41 2.75 12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 11.59 21.59 11.25 22 11.25C22.41 11.25 22.75 11.59 22.75 12C22.75 17.93 17.93 22.75 12 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M13.8002 10.9499C13.6102 10.9499 13.4202 10.8799 13.2702 10.7299C12.9802 10.4399 12.9802 9.95994 13.2702 9.66994L21.4702 1.46994C21.7602 1.17994 22.2402 1.17994 22.5302 1.46994C22.8202 1.75994 22.8202 2.23994 22.5302 2.52994L14.3302 10.7299C14.1902 10.8699 14.0002 10.9499 13.8002 10.9499Z"
        fill="currentColor"
      />
      <Path
        d="M17.83 11.7499H13C12.59 11.7499 12.25 11.4099 12.25 10.9999V6.16992C12.25 5.75992 12.59 5.41992 13 5.41992C13.41 5.41992 13.75 5.75992 13.75 6.16992V10.2499H17.83C18.24 10.2499 18.58 10.5899 18.58 10.9999C18.58 11.4099 18.24 11.7499 17.83 11.7499Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const FrameTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M8.4707 13.2602L12.0007 9.74023L15.5307 13.2602"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: FrameBold,
  broken: FrameBroken,
  bulk: FrameBulk,
  linear: FrameLinear,
  outline: FrameOutline,
  twotone: FrameTwotone,
};

export const FrameIcon = ({ variant = "linear", ...props }: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
