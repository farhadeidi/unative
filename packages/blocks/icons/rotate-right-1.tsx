import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const RotateRight1Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.75 22H12.25C8.5 22 7 20.5 7 16.75V12.25C7 8.5 8.5 7 12.25 7H16.75C20.5 7 22 8.5 22 12.25V16.75C22 20.5 20.5 22 16.75 22Z"
        fill="currentColor"
      />
      <Path
        d="M2.75 10.5C3.16 10.5 3.5 10.16 3.5 9.75C3.5 6.79 5.56 4.31 8.33 3.66L8.06 4.11C7.85 4.47 7.96 4.93 8.32 5.14C8.68 5.35 9.14 5.24 9.35 4.88L10.4 3.13C10.54 2.9 10.54 2.61 10.41 2.38C10.27 2.15 10.02 2 9.75 2C5.48 2 2 5.48 2 9.75C2 10.16 2.34 10.5 2.75 10.5Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const RotateRight1Broken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 16.75C22 20.5 20.5 22 16.75 22H12.25C8.5 22 7 20.5 7 16.75V12.25C7 8.5 8.5 7 12.25 7H16.75C20.5 7 22 8.5 22 12.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 9C2 5.13 5.13 2 9 2L7.95 3.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const RotateRight1Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7.81 2H16.18C19.83 2 22 4.17 22 7.81V16.18C22 19.82 19.83 21.99 16.19 21.99H7.81C4.17 22 2 19.83 2 16.19V7.81C2 4.17 4.17 2 7.81 2Z"
        fill="currentColor"
      />
      <Path
        d="M12 18.5801C8.83 18.5801 6.25 16.0001 6.25 12.8301C6.25 9.72012 8.73 7.19012 11.81 7.08012L11.44 6.65012C11.17 6.34012 11.2 5.86012 11.51 5.59012C11.82 5.32012 12.3 5.35012 12.57 5.66012L14.23 7.56012C14.25 7.58012 14.26 7.60012 14.28 7.62012C14.32 7.68012 14.36 7.75012 14.38 7.82012C14.39 7.86012 14.4 7.90012 14.41 7.94012C14.43 8.03012 14.42 8.13012 14.4 8.22012C14.38 8.30012 14.35 8.38012 14.31 8.46012C14.3 8.48012 14.28 8.50012 14.27 8.52012C14.23 8.58012 14.17 8.63012 14.11 8.67012C14.11 8.67012 14.1 8.67012 14.1 8.68012L12.16 10.1001C11.82 10.3401 11.36 10.2701 11.11 9.94012C10.87 9.61012 10.94 9.14012 11.27 8.89012L11.68 8.59012C9.48 8.75012 7.74 10.5901 7.74 12.8301C7.74 15.1701 9.65 17.0801 11.99 17.0801C14.33 17.0801 16.24 15.1701 16.24 12.8301C16.24 11.9901 15.99 11.1701 15.53 10.4701C15.3 10.1301 15.39 9.66012 15.74 9.43012C16.09 9.20012 16.55 9.29012 16.78 9.64012C17.41 10.5901 17.75 11.6901 17.75 12.8301C17.75 16.0001 15.17 18.5801 12 18.5801Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const RotateRight1Linear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.75 22H12.25C8.5 22 7 20.5 7 16.75V12.25C7 8.5 8.5 7 12.25 7H16.75C20.5 7 22 8.5 22 12.25V16.75C22 20.5 20.5 22 16.75 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 9C2 5.13 5.13 2 9 2L7.95 3.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const RotateRight1Outline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.75 22.75H12.25C8.1 22.75 6.25 20.9 6.25 16.75V12.25C6.25 8.1 8.1 6.25 12.25 6.25H16.75C20.9 6.25 22.75 8.1 22.75 12.25V16.75C22.75 20.9 20.9 22.75 16.75 22.75ZM12.25 7.75C8.93 7.75 7.75 8.93 7.75 12.25V16.75C7.75 20.07 8.93 21.25 12.25 21.25H16.75C20.07 21.25 21.25 20.07 21.25 16.75V12.25C21.25 8.93 20.07 7.75 16.75 7.75H12.25Z"
        fill="currentColor"
      />
      <Path
        d="M2 9.75C1.59 9.75 1.25 9.41 1.25 9C1.25 4.73 4.73 1.25 9 1.25C9.27 1.25 9.52 1.4 9.65 1.63C9.78 1.86 9.78 2.15 9.64 2.38L8.59 4.14C8.38 4.49 7.92 4.61 7.56 4.39C7.21 4.18 7.09 3.72 7.31 3.36L7.58 2.91C4.81 3.56 2.75 6.04 2.75 9C2.75 9.41 2.41 9.75 2 9.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const RotateRight1Twotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.75 22H12.25C8.5 22 7 20.5 7 16.75V12.25C7 8.5 8.5 7 12.25 7H16.75C20.5 7 22 8.5 22 12.25V16.75C22 20.5 20.5 22 16.75 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M2 9C2 5.13 5.13 2 9 2L7.95 3.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: RotateRight1Bold,
  broken: RotateRight1Broken,
  bulk: RotateRight1Bulk,
  linear: RotateRight1Linear,
  outline: RotateRight1Outline,
  twotone: RotateRight1Twotone,
};

export const RotateRight1Icon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
