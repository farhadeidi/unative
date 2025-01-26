import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const StopCircleBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.9688 2C6.44875 2 1.96875 6.48 1.96875 12C1.96875 17.52 6.44875 22 11.9688 22C17.4888 22 21.9688 17.52 21.9688 12C21.9688 6.48 17.4988 2 11.9688 2ZM16.2287 13.23C16.2287 14.89 14.8887 16.23 13.2287 16.23H10.7688C9.10875 16.23 7.76875 14.89 7.76875 13.23V10.77C7.76875 9.11 9.10875 7.77 10.7688 7.77H13.2287C14.8887 7.77 16.2287 9.11 16.2287 10.77V13.23Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const StopCircleBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.2295 13.27V10.73C16.2295 8.61002 15.3795 7.77002 13.2695 7.77002H10.7295C8.60953 7.77002 7.76953 8.62002 7.76953 10.73V13.27C7.76953 15.39 8.61953 16.23 10.7295 16.23H12.5095"
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

const StopCircleBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.7695 16.23H13.2295C14.8895 16.23 16.2295 14.89 16.2295 13.23V10.77C16.2295 9.11002 14.8895 7.77002 13.2295 7.77002H10.7695C9.10953 7.77002 7.76953 9.11002 7.76953 10.77V13.23C7.76953 14.89 9.10953 16.23 10.7695 16.23Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const StopCircleLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.73 16.23H13.27C15.39 16.23 16.23 15.38 16.23 13.27V10.73C16.23 8.61002 15.38 7.77002 13.27 7.77002H10.73C8.61002 7.77002 7.77002 8.62002 7.77002 10.73V13.27C7.77002 15.38 8.62002 16.23 10.73 16.23Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const StopCircleOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13.2695 16.98H10.7295C8.19953 16.98 7.01953 15.8 7.01953 13.27V10.73C7.01953 8.20002 8.19953 7.02002 10.7295 7.02002H13.2695C15.7995 7.02002 16.9795 8.20002 16.9795 10.73V13.27C16.9795 15.8 15.7995 16.98 13.2695 16.98ZM10.7295 8.52002C9.03953 8.52002 8.51953 9.04002 8.51953 10.73V13.27C8.51953 14.96 9.03953 15.48 10.7295 15.48H13.2695C14.9595 15.48 15.4795 14.96 15.4795 13.27V10.73C15.4795 9.04002 14.9595 8.52002 13.2695 8.52002H10.7295Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const StopCircleTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.7295 16.23H13.2695C15.3895 16.23 16.2295 15.38 16.2295 13.27V10.73C16.2295 8.61002 15.3795 7.77002 13.2695 7.77002H10.7295C8.60953 7.77002 7.76953 8.62002 7.76953 10.73V13.27C7.76953 15.38 8.61953 16.23 10.7295 16.23Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: StopCircleBold,
  broken: StopCircleBroken,
  bulk: StopCircleBulk,
  linear: StopCircleLinear,
  outline: StopCircleOutline,
  twotone: StopCircleTwotone,
};

export const StopCircleIcon = ({ variant = "linear", ...props }: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
