import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const WifiSquareBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM14.79 16.6C14.64 16.79 14.42 16.89 14.2 16.89C14.04 16.89 13.88 16.84 13.74 16.73C12.68 15.91 11.31 15.91 10.25 16.73C9.92 16.98 9.45 16.92 9.2 16.6C8.95 16.27 9.01 15.8 9.33 15.55C10.92 14.32 13.06 14.32 14.65 15.55C14.99 15.8 15.05 16.27 14.79 16.6ZM17 13.51C16.85 13.7 16.63 13.8 16.41 13.8C16.25 13.8 16.09 13.75 15.95 13.64C13.55 11.79 10.46 11.79 8.06 13.64C7.73 13.9 7.26 13.84 7 13.51C6.74 13.18 6.81 12.71 7.13 12.46C10.08 10.18 13.9 10.18 16.85 12.46C17.19 12.71 17.25 13.18 17 13.51ZM18.59 10.42C18.44 10.61 18.22 10.71 18 10.71C17.84 10.71 17.68 10.66 17.54 10.55C14.17 7.95 9.82 7.95 6.46 10.55C6.13 10.8 5.66 10.74 5.41 10.42C5.16 10.09 5.22 9.62 5.54 9.37C9.46 6.34 14.53 6.34 18.46 9.37C18.79 9.62 18.85 10.09 18.59 10.42Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const WifiSquareBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M6 9.96004C9.63 7.15004 14.37 7.15004 18 9.96004"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.59961 13.0501C10.2696 10.9901 13.7396 10.9901 16.4096 13.0501"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.80078 16.1399C11.1308 15.1099 12.8708 15.1099 14.2008 16.1399"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 13.05V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const WifiSquareBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.19 2H7.82C4.17 2 2 4.17 2 7.81V16.18C2 19.82 4.17 21.99 7.81 21.99H16.18C19.82 21.99 21.99 19.82 21.99 16.18V7.81C22 4.17 19.83 2 16.19 2Z"
        fill="currentColor"
      />
      <Path
        d="M18.0005 10.7099C17.8405 10.7099 17.6805 10.6599 17.5405 10.5499C14.1705 7.94991 9.82051 7.94991 6.46051 10.5499C6.13051 10.7999 5.66052 10.7399 5.41052 10.4199C5.16052 10.0899 5.22052 9.61991 5.54052 9.36991C9.46052 6.33991 14.5305 6.33991 18.4605 9.36991C18.7905 9.61991 18.8505 10.0899 18.5905 10.4199C18.4505 10.6099 18.2205 10.7099 18.0005 10.7099Z"
        fill="currentColor"
      />
      <Path
        d="M16.4004 13.8C16.2404 13.8 16.0804 13.75 15.9404 13.64C13.5404 11.79 10.4504 11.79 8.05037 13.64C7.72037 13.89 7.25036 13.83 7.00036 13.51C6.75036 13.19 6.81036 12.71 7.13036 12.46C10.0804 10.18 13.9004 10.18 16.8504 12.46C17.1804 12.71 17.2404 13.18 16.9804 13.51C16.8504 13.7 16.6304 13.8 16.4004 13.8Z"
        fill="currentColor"
      />
      <Path
        d="M14.1996 16.8899C14.0396 16.8899 13.8796 16.8399 13.7396 16.7299C12.6796 15.9099 11.3096 15.9099 10.2496 16.7299C9.91958 16.9799 9.44958 16.9199 9.19958 16.5999C8.94958 16.2699 9.00958 15.7999 9.32958 15.5499C10.9196 14.3199 13.0596 14.3199 14.6496 15.5499C14.9796 15.7999 15.0396 16.2699 14.7796 16.5999C14.6496 16.7899 14.4296 16.8899 14.1996 16.8899Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const WifiSquareLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M6 9.96004C9.63 7.15004 14.37 7.15004 18 9.96004"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.59998 13.05C10.27 10.99 13.74 10.99 16.41 13.05"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.79999 16.1401C11.13 15.1101 12.87 15.1101 14.2 16.1401"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const WifiSquareOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.0005 10.7099C17.8405 10.7099 17.6805 10.6599 17.5405 10.5499C14.1705 7.94992 9.82051 7.94992 6.46051 10.5499C6.13051 10.7999 5.66052 10.7399 5.41052 10.4199C5.16052 10.0899 5.22052 9.61991 5.54052 9.36991C9.46052 6.33991 14.5305 6.33991 18.4605 9.36991C18.7905 9.61991 18.8505 10.0899 18.5905 10.4199C18.4505 10.6099 18.2205 10.7099 18.0005 10.7099Z"
        fill="currentColor"
      />
      <Path
        d="M16.4004 13.8C16.2404 13.8 16.0804 13.75 15.9404 13.64C13.5404 11.79 10.4504 11.79 8.05037 13.64C7.72037 13.89 7.25036 13.83 7.00036 13.51C6.75036 13.18 6.81036 12.71 7.13036 12.46C10.0804 10.18 13.9004 10.18 16.8504 12.46C17.1804 12.71 17.2404 13.18 16.9804 13.51C16.8504 13.7 16.6304 13.8 16.4004 13.8Z"
        fill="currentColor"
      />
      <Path
        d="M14.1996 16.8899C14.0396 16.8899 13.8796 16.8399 13.7396 16.7299C12.6796 15.9099 11.3096 15.9099 10.2496 16.7299C9.91958 16.9799 9.44958 16.9199 9.19958 16.5999C8.94958 16.2699 9.00958 15.7999 9.32958 15.5499C10.9196 14.3199 13.0596 14.3199 14.6496 15.5499C14.9796 15.7999 15.0396 16.2699 14.7796 16.5999C14.6496 16.7899 14.4296 16.8899 14.1996 16.8899Z"
        fill="currentColor"
      />
      <Path
        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const WifiSquareTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M6 9.96004C9.63 7.15004 14.37 7.15004 18 9.96004"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M7.59961 13.0499C10.2696 10.9899 13.7396 10.9899 16.4096 13.0499"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M9.80078 16.1402C11.1308 15.1102 12.8708 15.1102 14.2008 16.1402"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: WifiSquareBold,
  broken: WifiSquareBroken,
  bulk: WifiSquareBulk,
  linear: WifiSquareLinear,
  outline: WifiSquareOutline,
  twotone: WifiSquareTwotone,
};

export const WifiSquareIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
