import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const BusBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M4 13.5V18.9C4 20.6 5.39 22 7.1 22H16.9C18.6 22 20 20.61 20 18.9V13.5C20 13.22 19.78 13 19.5 13H4.5C4.22 13 4 13.22 4 13.5ZM8.88 18.38C8.65 18.62 8.33 18.75 8 18.75C7.92 18.75 7.84 18.74 7.76 18.73C7.68 18.71 7.6 18.69 7.52 18.65C7.45 18.62 7.37 18.58 7.31 18.54C7.24 18.49 7.17 18.44 7.12 18.38C6.88 18.15 6.75 17.83 6.75 17.5C6.75 17.17 6.88 16.85 7.12 16.62C7.17 16.56 7.24 16.51 7.31 16.46C7.37 16.42 7.45 16.38 7.52 16.35C7.6 16.31 7.68 16.29 7.76 16.27C8.16 16.19 8.59 16.33 8.88 16.62C9.12 16.85 9.25 17.17 9.25 17.5C9.25 17.83 9.12 18.15 8.88 18.38ZM16.88 18.38C16.83 18.44 16.76 18.49 16.69 18.54C16.63 18.58 16.55 18.62 16.48 18.65C16.4 18.69 16.32 18.71 16.25 18.73C16.16 18.74 16.08 18.75 16 18.75C15.92 18.75 15.84 18.74 15.76 18.73C15.68 18.71 15.6 18.69 15.52 18.65C15.45 18.62 15.37 18.58 15.31 18.54C15.24 18.49 15.17 18.44 15.12 18.38C14.88 18.15 14.75 17.83 14.75 17.5C14.75 17.17 14.88 16.85 15.12 16.62C15.17 16.56 15.24 16.51 15.31 16.46C15.37 16.42 15.45 16.38 15.52 16.35C15.6 16.31 15.68 16.29 15.76 16.27C15.92 16.24 16.08 16.24 16.25 16.27C16.32 16.29 16.4 16.31 16.48 16.35C16.55 16.38 16.63 16.42 16.69 16.46C16.76 16.51 16.83 16.56 16.88 16.62C17.12 16.85 17.25 17.17 17.25 17.5C17.25 17.83 17.12 18.15 16.88 18.38Z"
        fill="currentColor"
      />
      <Path
        d="M16.9 2H7.1C5.39 2 4 3.39 4 5.1V7.5C4 7.78 4.22 8 4.5 8H19.5C19.78 8 20 7.78 20 7.5V5.1C20 3.39 18.61 2 16.9 2ZM14.5 5.75H9.5C9.09 5.75 8.75 5.41 8.75 5C8.75 4.59 9.09 4.25 9.5 4.25H14.5C14.91 4.25 15.25 4.59 15.25 5C15.25 5.41 14.91 5.75 14.5 5.75Z"
        fill="currentColor"
      />
      <Path
        d="M19.5 12H4.5C4.22 12 4 11.78 4 11.5V9.5C4 9.22 4.22 9 4.5 9H19.5C19.78 9 20 9.22 20 9.5V11.5C20 11.78 19.78 12 19.5 12Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BusBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M4 14.96V5.10001C4 3.40001 5.39001 2 7.10001 2H16.9C18.6 2 20 3.39001 20 5.10001V18.9C20 20.6 18.61 22 16.9 22H7.10001C5.40001 22 4 20.61 4 18.9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.5 13C19.33 13 20 12.33 20 11.5V9.5C20 8.67 19.33 8 18.5 8H5.5C4.67 8 4 8.67 4 9.5V11.5C4 12.33 4.67 13 5.5 13H14.03"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.5 5H14.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.49451 17.7H8.50349"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.4945 17.7H15.5035"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const BusBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.9 22H7.10001C5.40001 22 4 20.61 4 18.9V5.10001C4 3.40001 5.39001 2 7.10001 2H16.9C18.6 2 20 3.39001 20 5.10001V18.9C20 20.61 18.61 22 16.9 22Z"
        fill="currentColor"
      />
      <Path d="M20 8H4V13H20V8Z" fill="currentColor" />
      <Path
        d="M8 18.7501C7.92 18.7501 7.83999 18.7401 7.75999 18.7301C7.67999 18.7101 7.6 18.6901 7.52 18.6501C7.45 18.6201 7.37 18.5801 7.31 18.5401C7.24 18.4901 7.17 18.4401 7.12 18.3801C6.88 18.1501 6.75 17.8301 6.75 17.5001C6.75 17.1701 6.88 16.8501 7.12 16.6201C7.17 16.5601 7.24 16.5101 7.31 16.4601C7.37 16.4201 7.45 16.3801 7.52 16.3501C7.6 16.3101 7.67999 16.2901 7.75999 16.2701C8.15999 16.1901 8.59 16.3301 8.88 16.6201C9.12 16.8501 9.25 17.1701 9.25 17.5001C9.25 17.8301 9.12 18.1501 8.88 18.3801C8.65 18.6201 8.33 18.7501 8 18.7501Z"
        fill="currentColor"
      />
      <Path
        d="M16 18.7501C15.92 18.7501 15.84 18.7401 15.76 18.7301C15.68 18.7101 15.6 18.6901 15.52 18.6501C15.45 18.6201 15.37 18.5801 15.31 18.5401C15.24 18.4901 15.17 18.4401 15.12 18.3801C14.88 18.1501 14.75 17.8301 14.75 17.5001C14.75 17.1701 14.88 16.8501 15.12 16.6201C15.17 16.5601 15.24 16.5101 15.31 16.4601C15.37 16.4201 15.45 16.3801 15.52 16.3501C15.6 16.3101 15.68 16.2901 15.76 16.2701C15.92 16.2401 16.08 16.2401 16.25 16.2701C16.32 16.2901 16.4 16.3101 16.48 16.3501C16.55 16.3801 16.63 16.4201 16.69 16.4601C16.76 16.5101 16.83 16.5601 16.88 16.6201C17.12 16.8501 17.25 17.1701 17.25 17.5001C17.25 17.8301 17.12 18.1501 16.88 18.3801C16.83 18.4401 16.76 18.4901 16.69 18.5401C16.63 18.5801 16.55 18.6201 16.48 18.6501C16.4 18.6901 16.32 18.7101 16.25 18.7301C16.16 18.7401 16.08 18.7501 16 18.7501Z"
        fill="currentColor"
      />
      <Path
        d="M14.5 5.75H9.5C9.09 5.75 8.75 5.41 8.75 5C8.75 4.59 9.09 4.25 9.5 4.25H14.5C14.91 4.25 15.25 4.59 15.25 5C15.25 5.41 14.91 5.75 14.5 5.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BusLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.9 22H7.10001C5.40001 22 4 20.61 4 18.9V5.10001C4 3.40001 5.39001 2 7.10001 2H16.9C18.6 2 20 3.39001 20 5.10001V18.9C20 20.61 18.61 22 16.9 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.5 13H5.5C4.67 13 4 12.33 4 11.5V9.5C4 8.67 4.67 8 5.5 8H18.5C19.33 8 20 8.67 20 9.5V11.5C20 12.33 19.33 13 18.5 13Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.49451 17.7H8.50349"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.4945 17.7H15.5035"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.5 5H14.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const BusOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.9 22.75H7.10001C4.98001 22.75 3.25 21.02 3.25 18.9V5.10001C3.25 2.98001 4.98001 1.25 7.10001 1.25H16.9C19.02 1.25 20.75 2.98001 20.75 5.10001V18.9C20.75 21.02 19.02 22.75 16.9 22.75ZM7.10001 2.75C5.81001 2.75 4.75 3.80001 4.75 5.10001V18.9C4.75 20.19 5.80001 21.25 7.10001 21.25H16.9C18.19 21.25 19.25 20.2 19.25 18.9V5.10001C19.25 3.81001 18.2 2.75 16.9 2.75H7.10001Z"
        fill="currentColor"
      />
      <Path
        d="M18.5 13.75H5.5C4.26 13.75 3.25 12.74 3.25 11.5V9.5C3.25 8.26 4.26 7.25 5.5 7.25H18.5C19.74 7.25 20.75 8.26 20.75 9.5V11.5C20.75 12.74 19.74 13.75 18.5 13.75ZM5.5 8.75C5.09 8.75 4.75 9.09 4.75 9.5V11.5C4.75 11.91 5.09 12.25 5.5 12.25H18.5C18.91 12.25 19.25 11.91 19.25 11.5V9.5C19.25 9.09 18.91 8.75 18.5 8.75H5.5Z"
        fill="currentColor"
      />
      <Path
        d="M8 18.7501C7.67 18.7501 7.35 18.6201 7.12 18.3801C7.06 18.3301 7.01001 18.2601 6.96001 18.1901C6.92001 18.1301 6.88001 18.0501 6.85001 17.9801C6.81001 17.9001 6.79 17.8201 6.77 17.7401C6.76 17.6601 6.75 17.5801 6.75 17.5001C6.75 17.4201 6.76 17.3401 6.77 17.2601C6.79 17.1801 6.81001 17.1001 6.85001 17.0201C6.88001 16.9501 6.92001 16.8701 6.96001 16.8101C7.01001 16.7401 7.06 16.6701 7.12 16.6201C7.58 16.1501 8.41 16.1501 8.88 16.6201C8.94 16.6701 8.98999 16.7401 9.03999 16.8101C9.07999 16.8701 9.11999 16.9501 9.14999 17.0201C9.18999 17.1001 9.21 17.1801 9.23 17.2601C9.24 17.3401 9.25 17.4201 9.25 17.5001C9.25 17.5801 9.24 17.6601 9.23 17.7401C9.21 17.8201 9.18999 17.9001 9.14999 17.9801C9.11999 18.0501 9.07999 18.1301 9.03999 18.1901C8.98999 18.2601 8.94 18.3301 8.88 18.3801C8.65 18.6201 8.33 18.7501 8 18.7501Z"
        fill="currentColor"
      />
      <Path
        d="M16 18.7501C15.67 18.7501 15.35 18.6201 15.12 18.3801C14.88 18.1501 14.75 17.8301 14.75 17.5001C14.75 17.1701 14.88 16.8501 15.12 16.6201C15.58 16.1501 16.42 16.1501 16.88 16.6201C17.12 16.8501 17.25 17.1701 17.25 17.5001C17.25 17.8301 17.12 18.1501 16.88 18.3801C16.65 18.6201 16.33 18.7501 16 18.7501Z"
        fill="currentColor"
      />
      <Path
        d="M14.5 5.75H9.5C9.09 5.75 8.75 5.41 8.75 5C8.75 4.59 9.09 4.25 9.5 4.25H14.5C14.91 4.25 15.25 4.59 15.25 5C15.25 5.41 14.91 5.75 14.5 5.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BusTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.9 22H7.10001C5.40001 22 4 20.61 4 18.9V5.10001C4 3.40001 5.39001 2 7.10001 2H16.9C18.6 2 20 3.39001 20 5.10001V18.9C20 20.61 18.61 22 16.9 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.5 13H5.5C4.67 13 4 12.33 4 11.5V9.5C4 8.67 4.67 8 5.5 8H18.5C19.33 8 20 8.67 20 9.5V11.5C20 12.33 19.33 13 18.5 13Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M9.5 5H14.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M8.49451 17.7002H8.50349"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M15.4945 17.7002H15.5035"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: BusBold,
  broken: BusBroken,
  bulk: BusBulk,
  linear: BusLinear,
  outline: BusOutline,
  twotone: BusTwotone,
};

export const BusIcon = ({ variant = "linear", ...props }: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
