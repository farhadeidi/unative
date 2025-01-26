import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const KeyboardBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.27 3.35C17.8 3.28 17.26 3.25 16.5 3.25H7.5C6.75 3.25 6.2 3.28 5.76 3.34C2.41 3.71 1.75 5.7 1.75 9V15C1.75 18.3 2.41 20.29 5.73 20.65C6.2 20.72 6.74 20.75 7.5 20.75H16.5C17.25 20.75 17.8 20.72 18.24 20.66C21.59 20.29 22.25 18.31 22.25 15V9C22.25 5.7 21.59 3.71 18.27 3.35ZM10.09 9C10.65 9 11.1 9.45 11.1 10C11.1 10.55 10.65 11 10.1 11C9.55 11 9.1 10.55 9.1 10C9.1 9.45 9.54 9 10.09 9ZM7.09 9C7.66 9 8.1 9.45 8.1 10C8.1 10.55 7.65 11 7.1 11C6.55 11 6.1 10.55 6.1 10C6.1 9.45 6.54 9 7.09 9ZM17 16.25H7.02C6.61 16.25 6.26 15.91 6.26 15.5C6.26 15.09 6.59 14.75 7 14.75H17C17.41 14.75 17.75 15.09 17.75 15.5C17.75 15.91 17.41 16.25 17 16.25ZM17 10.75H13.5C13.09 10.75 12.75 10.41 12.75 10C12.75 9.59 13.09 9.25 13.5 9.25H17C17.41 9.25 17.75 9.59 17.75 10C17.75 10.41 17.41 10.75 17 10.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const KeyboardBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2.5 9C2.5 5.62 3.21 4.38 5.84 4.09C6.33 4.02 6.88 4 7.5 4H16.5C17.12 4 17.67 4.02 18.16 4.09C20.79 4.38 21.5 5.62 21.5 9V15C21.5 18.38 20.79 19.62 18.16 19.91C17.67 19.98 17.12 20 16.5 20H7.5C6.88 20 6.33 19.98 5.84 19.91C3.21 19.62 2.5 18.38 2.5 15V12.92"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.5 10H17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 15.5H7.02H17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.0941 10H10.1031"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.09412 10H7.1031"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const KeyboardBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.27 3.35C17.8 3.28 17.26 3.25 16.5 3.25H7.5C6.75 3.25 6.2 3.28 5.76 3.34C2.41 3.71 1.75 5.7 1.75 9V15C1.75 18.3 2.41 20.29 5.73 20.65C6.2 20.72 6.74 20.75 7.5 20.75H16.5C17.25 20.75 17.8 20.72 18.24 20.66C21.59 20.29 22.25 18.31 22.25 15V9C22.25 5.7 21.59 3.71 18.27 3.35Z"
        fill="currentColor"
      />
      <Path
        d="M17 10.75H13.5C13.09 10.75 12.75 10.41 12.75 10C12.75 9.59 13.09 9.25 13.5 9.25H17C17.41 9.25 17.75 9.59 17.75 10C17.75 10.41 17.41 10.75 17 10.75Z"
        fill="currentColor"
      />
      <Path
        d="M10.0996 11C9.54961 11 9.09961 10.55 9.09961 10C9.09961 9.45 9.53961 9 10.0996 9H10.1096C10.6596 9 11.1096 9.45 11.1096 10C11.1096 10.55 10.6596 11 10.0996 11Z"
        fill="currentColor"
      />
      <Path
        d="M7.09961 11C6.54961 11 6.09961 10.55 6.09961 10C6.09961 9.45 6.53961 9 7.09961 9C7.64961 9 8.09961 9.45 8.09961 10C8.09961 10.55 7.65961 11 7.09961 11Z"
        fill="currentColor"
      />
      <Path
        d="M16.9998 16.25H7.01977C6.60977 16.25 6.25977 15.91 6.25977 15.5C6.25977 15.09 6.58977 14.75 6.99977 14.75H16.9998C17.4098 14.75 17.7498 15.09 17.7498 15.5C17.7498 15.91 17.4098 16.25 16.9998 16.25Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const KeyboardLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7.5 4H16.5C17.12 4 17.67 4.02 18.16 4.09C20.79 4.38 21.5 5.62 21.5 9V15C21.5 18.38 20.79 19.62 18.16 19.91C17.67 19.98 17.12 20 16.5 20H7.5C6.88 20 6.33 19.98 5.84 19.91C3.21 19.62 2.5 18.38 2.5 15V9C2.5 5.62 3.21 4.38 5.84 4.09C6.33 4.02 6.88 4 7.5 4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.5 10H17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 15.5H7.02H17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.0946 10H10.1036"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.0946 10H7.10359"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const KeyboardOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.5 20.75H7.5C6.75 20.75 6.2 20.72 5.73 20.65C2.41 20.29 1.75 18.3 1.75 15V9C1.75 5.7 2.41 3.71 5.76 3.34C6.2 3.28 6.75 3.25 7.5 3.25H16.5C17.25 3.25 17.8 3.28 18.27 3.35C21.59 3.71 22.25 5.7 22.25 9V15C22.25 18.3 21.59 20.29 18.24 20.66C17.8 20.72 17.25 20.75 16.5 20.75ZM7.5 4.75C6.82 4.75 6.34 4.78 5.95 4.83C3.92 5.06 3.25 5.69 3.25 9V15C3.25 18.31 3.92 18.94 5.92 19.17C6.34 19.23 6.82 19.25 7.5 19.25H16.5C17.18 19.25 17.66 19.22 18.05 19.17C20.08 18.95 20.75 18.31 20.75 15V9C20.75 5.69 20.08 5.06 18.08 4.83C17.66 4.77 17.18 4.75 16.5 4.75H7.5Z"
        fill="currentColor"
      />
      <Path
        d="M17 10.75H13.5C13.09 10.75 12.75 10.41 12.75 10C12.75 9.59 13.09 9.25 13.5 9.25H17C17.41 9.25 17.75 9.59 17.75 10C17.75 10.41 17.41 10.75 17 10.75Z"
        fill="currentColor"
      />
      <Path
        d="M10.0996 11C9.54961 11 9.09961 10.55 9.09961 10C9.09961 9.45 9.53961 9 10.0996 9H10.1096C10.6596 9 11.1096 9.45 11.1096 10C11.1096 10.55 10.6596 11 10.0996 11Z"
        fill="currentColor"
      />
      <Path
        d="M7.09961 11C6.54961 11 6.09961 10.55 6.09961 10C6.09961 9.45 6.53961 9 7.09961 9C7.64961 9 8.09961 9.45 8.09961 10C8.09961 10.55 7.65961 11 7.09961 11Z"
        fill="currentColor"
      />
      <Path
        d="M16.9998 16.25H7.01977C6.60977 16.25 6.25977 15.91 6.25977 15.5C6.25977 15.09 6.58977 14.75 6.99977 14.75H16.9998C17.4098 14.75 17.7498 15.09 17.7498 15.5C17.7498 15.91 17.4098 16.25 16.9998 16.25Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const KeyboardTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7.5 4H16.5C17.12 4 17.67 4.02 18.16 4.09C20.79 4.38 21.5 5.62 21.5 9V15C21.5 18.38 20.79 19.62 18.16 19.91C17.67 19.98 17.12 20 16.5 20H7.5C6.88 20 6.33 19.98 5.84 19.91C3.21 19.62 2.5 18.38 2.5 15V9C2.5 5.62 3.21 4.38 5.84 4.09C6.33 4.02 6.88 4 7.5 4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M13.5 10H17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M7 15.5H7.02H17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M10.0941 10H10.1031"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M7.09412 10H7.1031"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: KeyboardBold,
  broken: KeyboardBroken,
  bulk: KeyboardBulk,
  linear: KeyboardLinear,
  outline: KeyboardOutline,
  twotone: KeyboardTwotone,
};

export const KeyboardIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
