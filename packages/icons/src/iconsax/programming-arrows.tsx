import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { G, Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const ProgrammingArrowsBold = ({
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
        d="M19.73 16.1007C19.73 16.0707 19.75 16.0407 19.75 16.0007V6.50066C19.75 4.98066 18.52 3.75066 17 3.75066H13.07L14.48 2.58066C14.8 2.31066 14.84 1.84066 14.58 1.52066C14.31 1.20066 13.84 1.16066 13.52 1.42066L10.52 3.92066C10.35 4.06066 10.25 4.27066 10.25 4.50066C10.25 4.73066 10.35 4.93066 10.52 5.08066L13.52 7.58066C13.66 7.70066 13.83 7.75066 14 7.75066C14.21 7.75066 14.43 7.66066 14.58 7.48066C14.85 7.16066 14.8 6.69066 14.48 6.42066L13.07 5.25066H17C17.69 5.25066 18.25 5.81066 18.25 6.50066V16.0007C18.25 16.0407 18.27 16.0707 18.27 16.1007C16.97 16.4307 16 17.6007 16 19.0007C16 20.6607 17.34 22.0007 19 22.0007C20.66 22.0007 22 20.6607 22 19.0007C22 17.6007 21.03 16.4307 19.73 16.1007Z"
        fill="currentColor"
      />
      <Path
        d="M13.48 18.92L10.48 16.42C10.16 16.15 9.69 16.2 9.42 16.52C9.15 16.84 9.2 17.31 9.52 17.58L10.93 18.75H7C6.31 18.75 5.75 18.19 5.75 17.5V8C5.75 7.96 5.73 7.93 5.73 7.9C7.03 7.57 8 6.4 8 5C8 3.34 6.66 2 5 2C3.34 2 2 3.34 2 5C2 6.4 2.97 7.57 4.27 7.9C4.27 7.93 4.25 7.96 4.25 8V17.5C4.25 19.02 5.48 20.25 7 20.25H10.93L9.52 21.42C9.2 21.69 9.16 22.16 9.42 22.48C9.57 22.66 9.78 22.75 10 22.75C10.17 22.75 10.34 22.69 10.48 22.58L13.48 20.08C13.65 19.94 13.75 19.73 13.75 19.5C13.75 19.27 13.65 19.07 13.48 18.92Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ProgrammingArrowsBroken = ({
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
        d="M19 16V6.5C19 5.4 18.1 4.5 17 4.5H11.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14 2L11 4.5L14 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19 22C20.6569 22 22 20.6569 22 19C22 17.3431 20.6569 16 19 16C17.3431 16 16 17.3431 16 19C16 20.6569 17.3431 22 19 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5 12V17.5C5 18.6 5.9 19.5 7 19.5H12.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 22L13 19.5L10 17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5 8C6.65685 8 8 6.65685 8 5C8 3.34315 6.65685 2 5 2C3.34315 2 2 3.34315 2 5C2 6.65685 3.34315 8 5 8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ProgrammingArrowsBulk = ({
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
        d="M17 3.75018H13.07L14.48 2.58019C14.8 2.31019 14.84 1.8402 14.58 1.5202C14.31 1.2002 13.84 1.16016 13.52 1.42016L10.52 3.92016C10.35 4.06016 10.25 4.27018 10.25 4.50018C10.25 4.73018 10.35 4.93019 10.52 5.08019L13.52 7.58019C13.66 7.70019 13.83 7.75018 14 7.75018C14.21 7.75018 14.43 7.66016 14.58 7.48016C14.85 7.16016 14.8 6.69016 14.48 6.42016L13.07 5.25018H17C17.69 5.25018 18.25 5.81018 18.25 6.50018V16.0002C18.25 16.4102 18.59 16.7502 19 16.7502C19.41 16.7502 19.75 16.4102 19.75 16.0002V6.50018C19.75 4.98018 18.52 3.75018 17 3.75018Z"
        fill="currentColor"
      />
      <Path
        d="M19 22C20.6569 22 22 20.6569 22 19C22 17.3431 20.6569 16 19 16C17.3431 16 16 17.3431 16 19C16 20.6569 17.3431 22 19 22Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M13.48 18.92L10.48 16.42C10.16 16.15 9.69001 16.2 9.42001 16.52C9.15001 16.84 9.19999 17.31 9.51999 17.58L10.93 18.75H7C6.31 18.75 5.75 18.19 5.75 17.5V8C5.75 7.59 5.41 7.25 5 7.25C4.59 7.25 4.25 7.59 4.25 8V17.5C4.25 19.02 5.48 20.25 7 20.25H10.93L9.51999 21.42C9.19999 21.69 9.16001 22.16 9.42001 22.48C9.57001 22.66 9.78 22.75 10 22.75C10.17 22.75 10.34 22.69 10.48 22.58L13.48 20.08C13.65 19.94 13.75 19.73 13.75 19.5C13.75 19.27 13.65 19.07 13.48 18.92Z"
        fill="currentColor"
      />
      <Path
        d="M5 8C6.65685 8 8 6.65685 8 5C8 3.34315 6.65685 2 5 2C3.34315 2 2 3.34315 2 5C2 6.65685 3.34315 8 5 8Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ProgrammingArrowsLinear = ({
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
        d="M19 16V6.5C19 5.4 18.1 4.5 17 4.5H11.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14 2L11 4.5L14 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19 22C20.6569 22 22 20.6569 22 19C22 17.3431 20.6569 16 19 16C17.3431 16 16 17.3431 16 19C16 20.6569 17.3431 22 19 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5 8V17.5C5 18.6 5.9 19.5 7 19.5H12.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 22L13 19.5L10 17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5 8C6.65685 8 8 6.65685 8 5C8 3.34315 6.65685 2 5 2C3.34315 2 2 3.34315 2 5C2 6.65685 3.34315 8 5 8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ProgrammingArrowsOutline = ({
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
        d="M19 16.75C18.59 16.75 18.25 16.41 18.25 16V6.5C18.25 5.81 17.69 5.25 17 5.25H11.5C11.09 5.25 10.75 4.91 10.75 4.5C10.75 4.09 11.09 3.75 11.5 3.75H17C18.52 3.75 19.75 4.98 19.75 6.5V16C19.75 16.41 19.41 16.75 19 16.75Z"
        fill="currentColor"
      />
      <Path
        d="M14 7.74993C13.83 7.74993 13.66 7.68995 13.52 7.57995L10.52 5.07995C10.35 4.93995 10.25 4.72993 10.25 4.49993C10.25 4.26993 10.35 4.06991 10.52 3.91991L13.52 1.41991C13.84 1.14991 14.31 1.19995 14.58 1.51995C14.85 1.83995 14.8 2.30995 14.48 2.57995L12.17 4.49993L14.48 6.41991C14.8 6.68991 14.84 7.15991 14.58 7.47991C14.43 7.65991 14.21 7.74993 14 7.74993Z"
        fill="currentColor"
      />
      <Path
        d="M19 22.75C16.93 22.75 15.25 21.07 15.25 19C15.25 16.93 16.93 15.25 19 15.25C21.07 15.25 22.75 16.93 22.75 19C22.75 21.07 21.07 22.75 19 22.75ZM19 16.75C17.76 16.75 16.75 17.76 16.75 19C16.75 20.24 17.76 21.25 19 21.25C20.24 21.25 21.25 20.24 21.25 19C21.25 17.76 20.24 16.75 19 16.75Z"
        fill="currentColor"
      />
      <Path
        d="M12.5 20.25H7C5.48 20.25 4.25 19.02 4.25 17.5V8C4.25 7.59 4.59 7.25 5 7.25C5.41 7.25 5.75 7.59 5.75 8V17.5C5.75 18.19 6.31 18.75 7 18.75H12.5C12.91 18.75 13.25 19.09 13.25 19.5C13.25 19.91 12.91 20.25 12.5 20.25Z"
        fill="currentColor"
      />
      <Path
        d="M10.0009 22.7497C9.7909 22.7497 9.57092 22.6597 9.42092 22.4797C9.15092 22.1597 9.20089 21.6897 9.52089 21.4197L11.8309 19.4997L9.52089 17.5797C9.20089 17.3097 9.16092 16.8397 9.42092 16.5197C9.69092 16.1997 10.1609 16.1597 10.4809 16.4197L13.4809 18.9197C13.6509 19.0597 13.7509 19.2697 13.7509 19.4997C13.7509 19.7297 13.6509 19.9297 13.4809 20.0797L10.4809 22.5797C10.3409 22.6897 10.1709 22.7497 10.0009 22.7497Z"
        fill="currentColor"
      />
      <Path
        d="M5 8.75C2.93 8.75 1.25 7.07 1.25 5C1.25 2.93 2.93 1.25 5 1.25C7.07 1.25 8.75 2.93 8.75 5C8.75 7.07 7.07 8.75 5 8.75ZM5 2.75C3.76 2.75 2.75 3.76 2.75 5C2.75 6.24 3.76 7.25 5 7.25C6.24 7.25 7.25 6.24 7.25 5C7.25 3.76 6.24 2.75 5 2.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ProgrammingArrowsTwotone = ({
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
        d="M19 22C20.6569 22 22 20.6569 22 19C22 17.3431 20.6569 16 19 16C17.3431 16 16 17.3431 16 19C16 20.6569 17.3431 22 19 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M19 16V6.5C19 5.4 18.1 4.5 17 4.5H11.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M14 2L11 4.5L14 7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M5 8V17.5C5 18.6 5.9 19.5 7 19.5H12.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M10 22L13 19.5L10 17"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Path
        d="M5 8C6.65685 8 8 6.65685 8 5C8 3.34315 6.65685 2 5 2C3.34315 2 2 3.34315 2 5C2 6.65685 3.34315 8 5 8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: ProgrammingArrowsBold,
  broken: ProgrammingArrowsBroken,
  bulk: ProgrammingArrowsBulk,
  linear: ProgrammingArrowsLinear,
  outline: ProgrammingArrowsOutline,
  twotone: ProgrammingArrowsTwotone,
};

export const ProgrammingArrowsIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default ProgrammingArrowsIcon;
