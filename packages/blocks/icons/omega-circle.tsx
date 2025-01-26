import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const OmegaCircleBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17 17.25H13.9C13.6 17.25 13.33 17.08 13.21 16.8C13.09 16.52 13.14 16.21 13.34 15.99L14.96 14.2C15.63 13.45 16.01 12.5 16.01 11.52C16.01 10.52 15.6 9.58 14.85 8.87C14.1 8.16 13.06 7.75 12 7.75C10.94 7.75 9.9 8.16 9.15 8.87C8.4 9.58 7.99 10.52 7.99 11.52C7.99 12.5 8.36 13.45 9.04 14.2L10.65 16C10.85 16.22 10.9 16.54 10.78 16.81C10.66 17.08 10.39 17.26 10.09 17.26H7C6.59 17.26 6.25 16.92 6.25 16.51C6.25 16.1 6.59 15.75 7 15.75H8.41L7.92 15.21C7 14.19 6.49 12.88 6.49 11.52C6.49 10.13 7.08 8.76 8.12 7.78C9.16 6.79 10.53 6.25 12 6.25C13.47 6.25 14.84 6.79 15.88 7.78C16.91 8.76 17.51 10.13 17.51 11.52C17.51 12.87 17 14.18 16.08 15.21L15.59 15.75H17C17.41 15.75 17.75 16.09 17.75 16.5C17.75 16.91 17.41 17.25 17 17.25Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const OmegaCircleBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17 16.5H13.9L15.52 14.71C16.32 13.82 16.76 12.69 16.76 11.53C16.76 10.33 16.26 9.18002 15.37 8.33002C14.48 7.48002 13.27 7 12 7C10.74 7 9.53 7.48002 8.63 8.33002C7.74 9.18002 7.23999 10.33 7.23999 11.53C7.23999 12.7 7.67998 13.83 8.47998 14.71L10.1 16.5H7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.19997 2.29998 7.96997 2.84998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const OmegaCircleBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        fill="currentColor"
      />
      <Path
        d="M17 17.25H13.9C13.6 17.25 13.33 17.08 13.21 16.8C13.09 16.52 13.14 16.21 13.34 15.99L14.96 14.2C15.63 13.45 16.01 12.5 16.01 11.52C16.01 10.52 15.6 9.58 14.85 8.87C14.1 8.16 13.06 7.75 12 7.75C10.94 7.75 9.90002 8.16 9.15002 8.87C8.40002 9.58 7.98999 10.52 7.98999 11.52C7.98999 12.5 8.35998 13.45 9.03998 14.2L10.66 15.99C10.86 16.21 10.91 16.53 10.79 16.8C10.67 17.07 10.4 17.25 10.1 17.25H7C6.59 17.25 6.25 16.91 6.25 16.5C6.25 16.09 6.59 15.75 7 15.75H8.40997L7.91998 15.21C6.99998 14.19 6.48999 12.88 6.48999 11.52C6.48999 10.13 7.08 8.76003 8.12 7.78003C9.16 6.79003 10.54 6.25 12 6.25C13.46 6.25 14.84 6.79003 15.88 7.78003C16.91 8.76003 17.51 10.13 17.51 11.52C17.51 12.87 17 14.18 16.08 15.21L15.59 15.75H17C17.41 15.75 17.75 16.09 17.75 16.5C17.75 16.91 17.41 17.25 17 17.25Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const OmegaCircleLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17 16.5H13.9L15.52 14.71C16.32 13.82 16.76 12.69 16.76 11.53C16.76 10.33 16.26 9.18002 15.37 8.33002C14.48 7.48002 13.27 7 12 7C10.74 7 9.53 7.48002 8.63 8.33002C7.74 9.18002 7.23999 10.33 7.23999 11.53C7.23999 12.7 7.67998 13.83 8.47998 14.71L10.1 16.5H7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const OmegaCircleOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17 17.25H13.9C13.6 17.25 13.33 17.08 13.21 16.8C13.09 16.52 13.14 16.21 13.34 15.99L14.96 14.2C15.63 13.45 16.01 12.5 16.01 11.52C16.01 10.52 15.6 9.58 14.85 8.87C14.1 8.16 13.06 7.75 12 7.75C10.94 7.75 9.90002 8.16 9.15002 8.87C8.40002 9.58 7.98999 10.52 7.98999 11.52C7.98999 12.5 8.35998 13.45 9.03998 14.2L10.66 15.99C10.86 16.21 10.91 16.53 10.79 16.8C10.67 17.07 10.4 17.25 10.1 17.25H7C6.59 17.25 6.25 16.91 6.25 16.5C6.25 16.09 6.59 15.75 7 15.75H8.40997L7.91998 15.21C6.99998 14.19 6.48999 12.88 6.48999 11.52C6.48999 10.13 7.08 8.76003 8.12 7.78003C9.16 6.79003 10.54 6.25 12 6.25C13.46 6.25 14.84 6.79003 15.88 7.78003C16.91 8.76003 17.51 10.13 17.51 11.52C17.51 12.87 17 14.18 16.08 15.21L15.59 15.75H17C17.41 15.75 17.75 16.09 17.75 16.5C17.75 16.91 17.41 17.25 17 17.25Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const OmegaCircleTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17 16.5H13.9L15.52 14.71C16.32 13.82 16.76 12.69 16.76 11.53C16.76 10.33 16.26 9.18002 15.37 8.33002C14.48 7.48002 13.27 7 12 7C10.74 7 9.53 7.48002 8.63 8.33002C7.74 9.18002 7.23999 10.33 7.23999 11.53C7.23999 12.7 7.67998 13.83 8.47998 14.71L10.1 16.5H7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: OmegaCircleBold,
  broken: OmegaCircleBroken,
  bulk: OmegaCircleBulk,
  linear: OmegaCircleLinear,
  outline: OmegaCircleOutline,
  twotone: OmegaCircleTwotone,
};

export const OmegaCircleIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
