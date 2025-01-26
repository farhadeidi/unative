import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const Hierarchy2Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.75 22C20.5449 22 22 20.5449 22 18.75C22 16.9551 20.5449 15.5 18.75 15.5C16.9551 15.5 15.5 16.9551 15.5 18.75C15.5 20.5449 16.9551 22 18.75 22Z"
        fill="currentColor"
      />
      <Path
        d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z"
        fill="currentColor"
      />
      <Path
        d="M5 8C6.65685 8 8 6.65685 8 5C8 3.34315 6.65685 2 5 2C3.34315 2 2 3.34315 2 5C2 6.65685 3.34315 8 5 8Z"
        fill="currentColor"
      />
      <Path
        d="M4.83049 8.02C5.80049 10.8 8.42049 12.67 11.3705 12.67C11.3805 12.67 11.3905 12.67 11.4005 12.67L14.9305 12.66C16.4505 12.64 17.8105 13.67 18.2205 15.15V17C18.2205 17.42 18.5605 17.76 18.9905 17.76C19.4105 17.76 19.7505 17.42 19.7505 17V5.76C19.7505 5.34 19.4105 5 18.9905 5C18.5705 5 18.2205 5.34 18.2205 5.76V12.38C17.3405 11.6 16.1905 11.12 14.9405 11.12C14.9305 11.12 14.9305 11.12 14.9205 11.12L11.3905 11.13C11.3805 11.13 11.3805 11.13 11.3705 11.13C9.08049 11.13 7.03049 9.68 6.28049 7.51C6.16049 7.2 5.87049 7 5.55049 7C5.47049 7 5.38049 7.02 5.30049 7.04C4.90049 7.18 4.69049 7.62 4.83049 8.02Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Hierarchy2Broken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M5 15V8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.25 22C7.04493 22 8.5 20.5449 8.5 18.75C8.5 16.9551 7.04493 15.5 5.25 15.5C3.45507 15.5 2 16.9551 2 18.75C2 20.5449 3.45507 22 5.25 22Z"
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
      <Path
        d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.13086 15C5.58086 13.25 7.18086 11.95 9.07086 11.96L12.5009 11.97C13.3509 11.97 14.1709 11.8 14.9009 11.48"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Hierarchy2Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.75 22C20.5449 22 22 20.5449 22 18.75C22 16.9551 20.5449 15.5 18.75 15.5C16.9551 15.5 15.5 16.9551 15.5 18.75C15.5 20.5449 16.9551 22 18.75 22Z"
        fill="currentColor"
      />
      <Path
        d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z"
        fill="currentColor"
      />
      <Path
        d="M5 8C6.65685 8 8 6.65685 8 5C8 3.34315 6.65685 2 5 2C3.34315 2 2 3.34315 2 5C2 6.65685 3.34315 8 5 8Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M4.83039 8.02002C5.80039 10.8 8.42039 12.67 11.3704 12.67C11.3804 12.67 11.3904 12.67 11.4004 12.67L14.9304 12.66C16.4504 12.64 17.8104 13.67 18.2204 15.15V17C18.2204 17.42 18.5604 17.76 18.9804 17.76C19.4004 17.76 19.7404 17.42 19.7404 17V5.78001C19.7404 5.36001 19.4004 5.02002 18.9804 5.02002C18.5604 5.02002 18.2204 5.36001 18.2204 5.78001V12.4C17.3404 11.62 16.1904 11.14 14.9404 11.14C14.9304 11.14 14.9304 11.14 14.9204 11.14L11.3904 11.15C11.3804 11.15 11.3804 11.15 11.3704 11.15C9.08039 11.15 7.03039 9.70001 6.28039 7.53001C6.17039 7.21001 5.87039 7.02002 5.56039 7.02002C5.48039 7.02002 5.39039 7.03001 5.31039 7.06001C4.90039 7.18001 4.69039 7.62002 4.83039 8.02002Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Hierarchy2Linear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M5 15V8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.25 22C7.04493 22 8.5 20.5449 8.5 18.75C8.5 16.9551 7.04493 15.5 5.25 15.5C3.45507 15.5 2 16.9551 2 18.75C2 20.5449 3.45507 22 5.25 22Z"
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
      <Path
        d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.13 15C5.58 13.25 7.18 11.95 9.07 11.96L12.5 11.97C15.12 11.98 17.35 10.3 18.17 7.95996"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Hierarchy2Outline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M5 15.75C4.59 15.75 4.25 15.41 4.25 15V8C4.25 7.59 4.59 7.25 5 7.25C5.41 7.25 5.75 7.59 5.75 8V15C5.75 15.41 5.41 15.75 5 15.75Z"
        fill="currentColor"
      />
      <Path
        d="M5.25 22.75C3.04 22.75 1.25 20.96 1.25 18.75C1.25 16.54 3.04 14.75 5.25 14.75C7.46 14.75 9.25 16.54 9.25 18.75C9.25 20.96 7.46 22.75 5.25 22.75ZM5.25 16.25C3.87 16.25 2.75 17.37 2.75 18.75C2.75 20.13 3.87 21.25 5.25 21.25C6.63 21.25 7.75 20.13 7.75 18.75C7.75 17.37 6.63 16.25 5.25 16.25Z"
        fill="currentColor"
      />
      <Path
        d="M5 8.75C2.93 8.75 1.25 7.07 1.25 5C1.25 2.93 2.93 1.25 5 1.25C7.07 1.25 8.75 2.93 8.75 5C8.75 7.07 7.07 8.75 5 8.75ZM5 2.75C3.76 2.75 2.75 3.76 2.75 5C2.75 6.24 3.76 7.25 5 7.25C6.24 7.25 7.25 6.24 7.25 5C7.25 3.76 6.24 2.75 5 2.75Z"
        fill="currentColor"
      />
      <Path
        d="M19 8.75C16.93 8.75 15.25 7.07 15.25 5C15.25 2.93 16.93 1.25 19 1.25C21.07 1.25 22.75 2.93 22.75 5C22.75 7.07 21.07 8.75 19 8.75ZM19 2.75C17.76 2.75 16.75 3.76 16.75 5C16.75 6.24 17.76 7.25 19 7.25C20.24 7.25 21.25 6.24 21.25 5C21.25 3.76 20.24 2.75 19 2.75Z"
        fill="currentColor"
      />
      <Path
        d="M5.12962 15.7503C5.06962 15.7503 5.00962 15.7403 4.93962 15.7303C4.53962 15.6303 4.29962 15.2203 4.39962 14.8203C4.94962 12.7003 6.85962 11.2203 9.04962 11.2203C9.05962 11.2203 9.05962 11.2203 9.06962 11.2203L12.4996 11.2303C12.5096 11.2303 12.5096 11.2303 12.5196 11.2303C14.7396 11.2303 16.7296 9.82026 17.4596 7.72026C17.5996 7.33026 18.0196 7.12027 18.4096 7.26027C18.7996 7.40027 19.0096 7.82025 18.8696 8.21025C17.9296 10.9202 15.3396 12.7003 12.4896 12.7303L9.05962 12.7203H9.04962C7.53962 12.7203 6.22962 13.7403 5.84962 15.2003C5.76962 15.5303 5.45962 15.7503 5.12962 15.7503Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Hierarchy2Twotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M5.25 22C7.04493 22 8.5 20.5449 8.5 18.75C8.5 16.9551 7.04493 15.5 5.25 15.5C3.45507 15.5 2 16.9551 2 18.75C2 20.5449 3.45507 22 5.25 22Z"
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
      <Path
        d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M5 15V8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M5.12891 15C5.57891 13.25 7.1789 11.95 9.0689 11.96L12.4989 11.97C15.1189 11.98 17.3489 10.3 18.1689 7.95996"
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
  bold: Hierarchy2Bold,
  broken: Hierarchy2Broken,
  bulk: Hierarchy2Bulk,
  linear: Hierarchy2Linear,
  outline: Hierarchy2Outline,
  twotone: Hierarchy2Twotone,
};

export const Hierarchy2Icon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
