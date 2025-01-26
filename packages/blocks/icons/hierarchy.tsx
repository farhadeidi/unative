import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const HierarchyBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M5.25 8.5C7.04493 8.5 8.5 7.04493 8.5 5.25C8.5 3.45507 7.04493 2 5.25 2C3.45507 2 2 3.45507 2 5.25C2 7.04493 3.45507 8.5 5.25 8.5Z"
        fill="currentColor"
      />
      <Path
        d="M5 22C6.65685 22 8 20.6569 8 19C8 17.3431 6.65685 16 5 16C3.34315 16 2 17.3431 2 19C2 20.6569 3.34315 22 5 22Z"
        fill="currentColor"
      />
      <Path
        d="M19 22C20.6569 22 22 20.6569 22 19C22 17.3431 20.6569 16 19 16C17.3431 16 16 17.3431 16 19C16 20.6569 17.3431 22 19 22Z"
        fill="currentColor"
      />
      <Path
        d="M19.17 15.98C18.2 13.2 15.58 11.33 12.63 11.33C12.62 11.33 12.61 11.33 12.6 11.33L9.07 11.34C7.55 11.36 6.19 10.33 5.78 8.85V7.01C5.78 6.59 5.44 6.25 5.01 6.25C4.58 6.25 4.25 6.59 4.25 7.01V18.23C4.25 18.65 4.59 18.99 5.01 18.99C5.43 18.99 5.78 18.65 5.78 18.23V11.61C6.66 12.39 7.81 12.87 9.06 12.87C9.07 12.87 9.07 12.87 9.08 12.87L12.61 12.86C12.62 12.86 12.62 12.86 12.63 12.86C14.92 12.86 16.97 14.31 17.72 16.48C17.84 16.8 18.13 17 18.45 17C18.53 17 18.62 16.99 18.7 16.96C19.1 16.82 19.31 16.38 19.17 15.98Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HierarchyBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M5 9V16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.25 8.5C7.04493 8.5 8.5 7.04493 8.5 5.25C8.5 3.45507 7.04493 2 5.25 2C3.45507 2 2 3.45507 2 5.25C2 7.04493 3.45507 8.5 5.25 8.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5 22C6.65685 22 8 20.6569 8 19C8 17.3431 6.65685 16 5 16C3.34315 16 2 17.3431 2 19C2 20.6569 3.34315 22 5 22Z"
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
        d="M5.13086 9C5.58086 10.75 7.18086 12.05 9.07086 12.04L12.5009 12.03C13.3409 12.03 14.1309 12.2 14.8609 12.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const HierarchyBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M5.25 8.5C7.04493 8.5 8.5 7.04493 8.5 5.25C8.5 3.45507 7.04493 2 5.25 2C3.45507 2 2 3.45507 2 5.25C2 7.04493 3.45507 8.5 5.25 8.5Z"
        fill="currentColor"
      />
      <Path
        d="M5 22C6.65685 22 8 20.6569 8 19C8 17.3431 6.65685 16 5 16C3.34315 16 2 17.3431 2 19C2 20.6569 3.34315 22 5 22Z"
        fill="currentColor"
      />
      <Path
        d="M19 22C20.6569 22 22 20.6569 22 19C22 17.3431 20.6569 16 19 16C17.3431 16 16 17.3431 16 19C16 20.6569 17.3431 22 19 22Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M19.17 15.9802C18.2 13.2002 15.58 11.3302 12.63 11.3302C12.62 11.3302 12.61 11.3302 12.6 11.3302L9.07 11.3402C7.55 11.3602 6.19 10.3302 5.78 8.85023V7.00023C5.78 6.58023 5.44 6.24023 5.01 6.24023C4.58 6.24023 4.25 6.58023 4.25 7.00023V18.2202C4.25 18.6402 4.59 18.9802 5.01 18.9802C5.43 18.9802 5.78 18.6402 5.78 18.2202V11.6002C6.66 12.3802 7.81 12.8602 9.06 12.8602C9.07 12.8602 9.07 12.8602 9.08 12.8602L12.61 12.8502C12.62 12.8502 12.62 12.8502 12.63 12.8502C14.92 12.8502 16.97 14.3002 17.72 16.4702C17.83 16.7902 18.13 16.9802 18.44 16.9802C18.52 16.9802 18.61 16.9702 18.69 16.9402C19.1 16.8202 19.31 16.3802 19.17 15.9802Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HierarchyLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M5 9V16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.25 8.5C7.04493 8.5 8.5 7.04493 8.5 5.25C8.5 3.45507 7.04493 2 5.25 2C3.45507 2 2 3.45507 2 5.25C2 7.04493 3.45507 8.5 5.25 8.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5 22C6.65685 22 8 20.6569 8 19C8 17.3431 6.65685 16 5 16C3.34315 16 2 17.3431 2 19C2 20.6569 3.34315 22 5 22Z"
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
        d="M5.13 9C5.58 10.75 7.18 12.05 9.07 12.04L12.5 12.03C15.12 12.02 17.35 13.7 18.17 16.04"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const HierarchyOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M5 16.75C4.59 16.75 4.25 16.41 4.25 16V9C4.25 8.59 4.59 8.25 5 8.25C5.41 8.25 5.75 8.59 5.75 9V16C5.75 16.41 5.41 16.75 5 16.75Z"
        fill="currentColor"
      />
      <Path
        d="M5.25 9.25C3.04 9.25 1.25 7.46 1.25 5.25C1.25 3.04 3.04 1.25 5.25 1.25C7.46 1.25 9.25 3.04 9.25 5.25C9.25 7.46 7.46 9.25 5.25 9.25ZM5.25 2.75C3.87 2.75 2.75 3.87 2.75 5.25C2.75 6.63 3.87 7.75 5.25 7.75C6.63 7.75 7.75 6.63 7.75 5.25C7.75 3.87 6.63 2.75 5.25 2.75Z"
        fill="currentColor"
      />
      <Path
        d="M5 22.75C2.93 22.75 1.25 21.07 1.25 19C1.25 16.93 2.93 15.25 5 15.25C7.07 15.25 8.75 16.93 8.75 19C8.75 21.07 7.07 22.75 5 22.75ZM5 16.75C3.76 16.75 2.75 17.76 2.75 19C2.75 20.24 3.76 21.25 5 21.25C6.24 21.25 7.25 20.24 7.25 19C7.25 17.76 6.24 16.75 5 16.75Z"
        fill="currentColor"
      />
      <Path
        d="M19 22.75C16.93 22.75 15.25 21.07 15.25 19C15.25 16.93 16.93 15.25 19 15.25C21.07 15.25 22.75 16.93 22.75 19C22.75 21.07 21.07 22.75 19 22.75ZM19 16.75C17.76 16.75 16.75 17.76 16.75 19C16.75 20.24 17.76 21.25 19 21.25C20.24 21.25 21.25 20.24 21.25 19C21.25 17.76 20.24 16.75 19 16.75Z"
        fill="currentColor"
      />
      <Path
        d="M18.1696 16.79C17.8596 16.79 17.5696 16.6 17.4596 16.29C16.7296 14.19 14.7496 12.78 12.5196 12.78C12.5096 12.78 12.5096 12.78 12.4996 12.78L9.06962 12.79C9.05962 12.79 9.05962 12.79 9.04962 12.79C6.85962 12.79 4.94962 11.31 4.39962 9.18999C4.29962 8.78999 4.53962 8.37999 4.93962 8.27999C5.33962 8.17999 5.74962 8.42 5.84962 8.82C6.22962 10.28 7.53962 11.3 9.04962 11.3H9.05962L12.4896 11.29C12.4996 11.29 12.5096 11.29 12.5196 11.29C15.3796 11.29 17.9296 13.1 18.8696 15.81C19.0096 16.2 18.7996 16.63 18.4096 16.76C18.3296 16.77 18.2496 16.79 18.1696 16.79Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HierarchyTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M5.25 8.5C7.04493 8.5 8.5 7.04493 8.5 5.25C8.5 3.45507 7.04493 2 5.25 2C3.45507 2 2 3.45507 2 5.25C2 7.04493 3.45507 8.5 5.25 8.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5 22C6.65685 22 8 20.6569 8 19C8 17.3431 6.65685 16 5 16C3.34315 16 2 17.3431 2 19C2 20.6569 3.34315 22 5 22Z"
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
      <G opacity="0.4">
        <Path
          d="M5 9V16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M5.12891 9C5.57891 10.75 7.17891 12.05 9.06891 12.04L12.4989 12.03C15.1189 12.02 17.3489 13.7 18.1689 16.04"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};

const variants: IconVariants = {
  bold: HierarchyBold,
  broken: HierarchyBroken,
  bulk: HierarchyBulk,
  linear: HierarchyLinear,
  outline: HierarchyOutline,
  twotone: HierarchyTwotone,
};

export const HierarchyIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
