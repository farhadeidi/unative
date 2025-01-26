import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const MouseSquareBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21 7.52V13.4C21 13.74 20.67 13.98 20.35 13.88L16.42 12.66C15.34 12.33 14.18 12.61 13.39 13.4C12.59 14.2 12.3 15.37 12.64 16.45L13.85 20.35C13.95 20.67 13.71 21 13.37 21H7.52C4.07 21 2 18.94 2 15.48V7.52C2 4.06 4.07 2 7.52 2H15.48C18.93 2 21 4.06 21 7.52Z"
        fill="currentColor"
      />
      <Path
        d="M21.9597 18.8385L20.3297 19.3885C19.8797 19.5385 19.5197 19.8885 19.3697 20.3485L18.8197 21.9785C18.3497 23.3885 16.3697 23.3585 15.9297 21.9485L14.0797 15.9985C13.7197 14.8185 14.8097 13.7185 15.9797 14.0885L21.9397 15.9385C23.3397 16.3785 23.3597 18.3685 21.9597 18.8385Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MouseSquareBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 13.02V15C2 20 4 22 9 22H12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 12V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.9597 17.84L19.3297 18.39C18.8797 18.54 18.5197 18.89 18.3697 19.35L17.8197 20.98C17.3497 22.39 15.3697 22.36 14.9297 20.95L13.0797 15C12.7197 13.82 13.8097 12.72 14.9797 13.09L20.9397 14.94C22.3397 15.38 22.3597 17.37 20.9597 17.84Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MouseSquareBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.4798 2H7.52977C4.06977 2 2.00977 4.05999 2.00977 7.51999V15.47C2.00977 18.93 4.07977 20.99 7.52977 20.99H15.4798C18.9398 20.99 20.9998 18.93 20.9998 15.47V7.51999C20.9998 4.05999 18.9298 2 15.4798 2Z"
        fill="currentColor"
      />
      <Path
        d="M21.9597 18.84L20.3297 19.39C19.8797 19.54 19.5197 19.89 19.3697 20.35L18.8197 21.98C18.3497 23.39 16.3697 23.36 15.9297 21.95L14.0797 16C13.7197 14.82 14.8097 13.72 15.9797 14.09L21.9397 15.94C23.3397 16.38 23.3597 18.37 21.9597 18.84Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MouseSquareLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 12V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.96 17.84L19.33 18.39C18.88 18.54 18.52 18.89 18.37 19.35L17.82 20.98C17.35 22.39 15.37 22.36 14.93 20.95L13.08 15C12.72 13.82 13.81 12.72 14.98 13.09L20.94 14.94C22.34 15.38 22.36 17.37 20.96 17.84Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MouseSquareOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V12C22.75 12.41 22.41 12.75 22 12.75C21.59 12.75 21.25 12.41 21.25 12V9C21.25 4.39 19.61 2.75 15 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H12C12.41 21.25 12.75 21.59 12.75 22C12.75 22.41 12.41 22.75 12 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M16.3692 22.77C16.3592 22.77 16.3592 22.77 16.3492 22.77C15.3392 22.76 14.4992 22.14 14.1992 21.17L12.3492 15.22C12.0992 14.4 12.3092 13.52 12.9192 12.93C13.5192 12.34 14.3892 12.12 15.1892 12.37L21.1492 14.22C22.1092 14.52 22.7392 15.36 22.7492 16.37C22.7592 17.37 22.1492 18.22 21.1892 18.54L19.5592 19.09C19.3292 19.17 19.1492 19.34 19.0792 19.57L18.5192 21.21C18.2092 22.16 17.3692 22.77 16.3692 22.77ZM14.5092 13.77C14.2392 13.77 14.0592 13.92 13.9792 13.99C13.7692 14.2 13.6992 14.49 13.7892 14.78L15.6392 20.73C15.7992 21.24 16.2192 21.26 16.3792 21.27C16.5192 21.27 16.9492 21.23 17.1092 20.74L17.6692 19.1C17.8892 18.43 18.4292 17.9 19.0992 17.67L20.7292 17.12C21.2292 16.96 21.2592 16.52 21.2592 16.39C21.2592 16.26 21.2192 15.82 20.7192 15.66L14.7592 13.81C14.6592 13.78 14.5792 13.77 14.5092 13.77Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MouseSquareTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 12V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M20.9597 17.84L19.3297 18.39C18.8797 18.54 18.5197 18.89 18.3697 19.35L17.8197 20.98C17.3497 22.39 15.3697 22.36 14.9297 20.95L13.0797 15C12.7197 13.82 13.8097 12.72 14.9797 13.09L20.9397 14.94C22.3397 15.38 22.3597 17.37 20.9597 17.84Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: MouseSquareBold,
  broken: MouseSquareBroken,
  bulk: MouseSquareBulk,
  linear: MouseSquareLinear,
  outline: MouseSquareOutline,
  twotone: MouseSquareTwotone,
};

export const MouseSquareIcon = ({
  variant = "linear",
  ...props
}: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
