import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const PlayCircleBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.9688 2C6.44875 2 1.96875 6.48 1.96875 12C1.96875 17.52 6.44875 22 11.9688 22C17.4888 22 21.9688 17.52 21.9688 12C21.9688 6.48 17.4988 2 11.9688 2ZM14.9688 14.23L12.0687 15.9C11.7087 16.11 11.3088 16.21 10.9187 16.21C10.5188 16.21 10.1287 16.11 9.76875 15.9C9.04875 15.48 8.61875 14.74 8.61875 13.9V10.55C8.61875 9.72 9.04875 8.97 9.76875 8.55C10.4888 8.13 11.3487 8.13 12.0787 8.55L14.9787 10.22C15.6987 10.64 16.1287 11.38 16.1287 12.22C16.1287 13.06 15.6987 13.81 14.9688 14.23Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const PlayCircleBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.9102 14.1201C16.7102 13.0801 16.7102 11.3801 14.9102 10.3401L13.4602 9.50011L12.0102 8.66011C10.2102 7.62011 8.74023 8.47011 8.74023 10.5501V12.2201V13.8901C8.74023 15.5501 9.68023 16.4301 10.9802 16.1801"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
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

const PlayCircleBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.9694 10.2301L12.0694 8.56012C11.3494 8.14012 10.4794 8.14012 9.75938 8.56012C9.03938 8.98012 8.60938 9.72012 8.60938 10.5601V13.9101C8.60938 14.7401 9.03938 15.4901 9.75938 15.9101C10.1194 16.1201 10.5194 16.2201 10.9094 16.2201C11.3094 16.2201 11.6994 16.1201 12.0594 15.9101L14.9594 14.2401C15.6794 13.8201 16.1094 13.0801 16.1094 12.2401C16.1294 11.4001 15.6994 10.6501 14.9694 10.2301Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const PlayCircleLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.97 22C17.4928 22 21.97 17.5228 21.97 12C21.97 6.47715 17.4928 2 11.97 2C6.44712 2 1.96997 6.47715 1.96997 12C1.96997 17.5228 6.44712 22 11.97 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.73999 12.2299V10.5599C8.73999 8.47988 10.21 7.62988 12.01 8.66988L13.46 9.50988L14.91 10.3499C16.71 11.3899 16.71 13.0899 14.91 14.1299L13.46 14.9699L12.01 15.8099C10.21 16.8499 8.73999 15.9999 8.73999 13.9199V12.2299Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const PlayCircleOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.9707 22.75C6.0507 22.75 1.2207 17.93 1.2207 12C1.2207 6.07 6.0507 1.25 11.9707 1.25C17.8907 1.25 22.7207 6.07 22.7207 12C22.7207 17.93 17.9007 22.75 11.9707 22.75ZM11.9707 2.75C6.8707 2.75 2.7207 6.9 2.7207 12C2.7207 17.1 6.8707 21.25 11.9707 21.25C17.0707 21.25 21.2207 17.1 21.2207 12C21.2207 6.9 17.0707 2.75 11.9707 2.75Z"
        fill="currentColor"
      />
      <Path
        d="M10.5602 16.99C10.1202 16.99 9.70023 16.88 9.33023 16.67C8.47023 16.17 7.99023 15.19 7.99023 13.91V10.56C7.99023 9.27999 8.46023 8.29999 9.32023 7.79999C10.1802 7.29999 11.2702 7.37999 12.3802 8.01999L15.2802 9.68999C16.3902 10.33 17.0002 11.23 17.0002 12.23C17.0002 13.22 16.3902 14.13 15.2802 14.77L12.3802 16.44C11.7602 16.81 11.1302 16.99 10.5602 16.99ZM10.5602 8.96999C10.3802 8.96999 10.2102 9.00999 10.0802 9.08999C9.70023 9.30999 9.49023 9.83999 9.49023 10.56V13.91C9.49023 14.62 9.70023 15.16 10.0802 15.37C10.4502 15.59 11.0202 15.5 11.6402 15.15L14.5402 13.48C15.1602 13.12 15.5102 12.67 15.5102 12.24C15.5102 11.81 15.1502 11.36 14.5402 11L11.6402 9.32999C11.2402 9.08999 10.8702 8.96999 10.5602 8.96999Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const PlayCircleTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.9707 22C17.4936 22 21.9707 17.5228 21.9707 12C21.9707 6.47715 17.4936 2 11.9707 2C6.44786 2 1.9707 6.47715 1.9707 12C1.9707 17.5228 6.44786 22 11.9707 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M8.74023 12.2301V10.5601C8.74023 8.48012 10.2102 7.63012 12.0102 8.67012L13.4602 9.51012L14.9102 10.3501C16.7102 11.3901 16.7102 13.0901 14.9102 14.1301L13.4602 14.9701L12.0102 15.8101C10.2102 16.8501 8.74023 16.0001 8.74023 13.9201V12.2301Z"
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
  bold: PlayCircleBold,
  broken: PlayCircleBroken,
  bulk: PlayCircleBulk,
  linear: PlayCircleLinear,
  outline: PlayCircleOutline,
  twotone: PlayCircleTwotone,
};

export const PlayCircleIcon = ({ variant = "linear", ...props }: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
