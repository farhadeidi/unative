import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const MessageCircleBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17.25 12.81C17.25 12.98 17.24 13.14 17.22 13.3C17.07 15.07 16.02 15.95 14.1 15.95H13.84C13.68 15.95 13.52 16.03 13.42 16.16L12.63 17.21C12.28 17.68 11.72 17.68 11.37 17.21L10.58 16.16C10.49 16.05 10.3 15.95 10.16 15.95H9.9C7.81 15.95 6.75 15.43 6.75 12.8V10.17C6.75 8.25 7.64 7.2 9.4 7.05C9.56 7.04 9.73 7.04 9.9 7.04H14.1C16.19 7.04 17.25 8.09 17.25 10.19V12.81Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MessageCircleBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.25 10.18V12.81C17.25 12.98 17.24 13.14 17.22 13.3C17.07 15.07 16.02 15.95 14.1 15.95H13.84C13.68 15.95 13.52 16.03 13.42 16.16L12.63 17.21C12.28 17.68 11.72 17.68 11.37 17.21L10.58 16.16C10.49 16.05 10.3 15.95 10.16 15.95H9.89999C7.79999 15.95 6.75 15.43 6.75 12.8V10.17C6.75 8.25004 7.63999 7.20002 9.39999 7.05002C9.55999 7.03002 9.72001 7.02002 9.89001 7.02002H14.09C16.2 7.04002 17.25 8.09002 17.25 10.18Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.30001 7.97 2.85001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MessageCircleBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.25 10.18V12.81C17.25 12.98 17.24 13.14 17.22 13.3C17.07 15.07 16.02 15.95 14.1 15.95H13.84C13.68 15.95 13.52 16.03 13.42 16.16L12.63 17.21C12.28 17.68 11.72 17.68 11.37 17.21L10.58 16.16C10.49 16.05 10.3 15.95 10.16 15.95H9.89999C7.79999 15.95 6.75 15.43 6.75 12.8V10.17C6.75 8.25004 7.63999 7.20002 9.39999 7.05002C9.55999 7.03002 9.72001 7.02002 9.89001 7.02002H14.09C16.2 7.04002 17.25 8.09002 17.25 10.18Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MessageCircleLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.25 10.18V12.81C17.25 12.98 17.24 13.14 17.22 13.3C17.07 15.07 16.02 15.95 14.1 15.95H13.84C13.68 15.95 13.52 16.03 13.42 16.16L12.63 17.21C12.28 17.68 11.72 17.68 11.37 17.21L10.58 16.16C10.49 16.05 10.3 15.95 10.16 15.95H9.89999C7.79999 15.95 6.75 15.43 6.75 12.8V10.17C6.75 8.25004 7.63999 7.20002 9.39999 7.05002C9.55999 7.03002 9.72001 7.02002 9.89001 7.02002H14.09C16.2 7.04002 17.25 8.09002 17.25 10.18Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MessageCircleOutline = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M12 18.31C11.53 18.31 11.08 18.07 10.77 17.66L10.05 16.7H9.89999C7.87999 16.7 6 16.23 6 12.8V10.17C6 7.86004 7.19 6.49002 9.34 6.30002C9.5 6.28002 9.68999 6.27002 9.89999 6.27002H14.1C16.61 6.27002 18 7.65004 18 10.17V12.8C18 13 17.99 13.2 17.97 13.38C17.79 15.5 16.42 16.69 14.11 16.69H13.96L13.24 17.65C12.92 18.08 12.47 18.31 12 18.31ZM9.89999 7.79004C9.75999 7.79004 9.63 7.79003 9.5 7.81003C8.09 7.93003 7.5 8.64003 7.5 10.19V12.82C7.5 14.89 8.06999 15.22 9.89999 15.22H10.16C10.54 15.22 10.95 15.42 11.18 15.72L11.97 16.78L12.82 15.73C13.06 15.41 13.44 15.22 13.84 15.22H14.1C15.65 15.22 16.35 14.63 16.47 13.25C16.49 13.09 16.49 12.96 16.49 12.82V10.19C16.49 8.51003 15.77 7.79004 14.09 7.79004H9.89999Z"
        fill="currentColor"
      />
      <Path
        d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MessageCircleTwotone = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M17.25 10.18V12.81C17.25 12.98 17.24 13.14 17.22 13.3C17.07 15.07 16.02 15.95 14.1 15.95H13.84C13.68 15.95 13.52 16.03 13.42 16.16L12.63 17.21C12.28 17.68 11.72 17.68 11.37 17.21L10.58 16.16C10.49 16.05 10.3 15.95 10.16 15.95H9.89999C7.79999 15.95 6.75 15.43 6.75 12.8V10.17C6.75 8.25004 7.63999 7.20002 9.39999 7.05002C9.55999 7.03002 9.72001 7.02002 9.89001 7.02002H14.09C16.2 7.04002 17.25 8.09002 17.25 10.18Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
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
  bold: MessageCircleBold,
  broken: MessageCircleBroken,
  bulk: MessageCircleBulk,
  linear: MessageCircleLinear,
  outline: MessageCircleOutline,
  twotone: MessageCircleTwotone,
};

export const MessageCircleIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
