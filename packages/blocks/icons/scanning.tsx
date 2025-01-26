import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const ScanningBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 9.75C1.59 9.75 1.25 9.41 1.25 9V6.5C1.25 3.6 3.61 1.25 6.5 1.25H9C9.41 1.25 9.75 1.59 9.75 2C9.75 2.41 9.41 2.75 9 2.75H6.5C4.43 2.75 2.75 4.43 2.75 6.5V9C2.75 9.41 2.41 9.75 2 9.75Z"
        fill="currentColor"
      />
      <Path
        d="M22 9.75C21.59 9.75 21.25 9.41 21.25 9V6.5C21.25 4.43 19.57 2.75 17.5 2.75H15C14.59 2.75 14.25 2.41 14.25 2C14.25 1.59 14.59 1.25 15 1.25H17.5C20.39 1.25 22.75 3.6 22.75 6.5V9C22.75 9.41 22.41 9.75 22 9.75Z"
        fill="currentColor"
      />
      <Path
        d="M17.5 22.75H16C15.59 22.75 15.25 22.41 15.25 22C15.25 21.59 15.59 21.25 16 21.25H17.5C19.57 21.25 21.25 19.57 21.25 17.5V16C21.25 15.59 21.59 15.25 22 15.25C22.41 15.25 22.75 15.59 22.75 16V17.5C22.75 20.4 20.39 22.75 17.5 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M9 22.75H6.5C3.61 22.75 1.25 20.4 1.25 17.5V15C1.25 14.59 1.59 14.25 2 14.25C2.41 14.25 2.75 14.59 2.75 15V17.5C2.75 19.57 4.43 21.25 6.5 21.25H9C9.41 21.25 9.75 21.59 9.75 22C9.75 22.41 9.41 22.75 9 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M8.50109 11.3811C10.0917 11.3811 11.3811 10.0917 11.3811 8.50109C11.3811 6.91051 10.0917 5.62109 8.50109 5.62109C6.91051 5.62109 5.62109 6.91051 5.62109 8.50109C5.62109 10.0917 6.91051 11.3811 8.50109 11.3811Z"
        fill="currentColor"
      />
      <Path
        d="M7.50109 18.3811C8.53939 18.3811 9.38109 17.5394 9.38109 16.5011C9.38109 15.4628 8.53939 14.6211 7.50109 14.6211C6.4628 14.6211 5.62109 15.4628 5.62109 16.5011C5.62109 17.5394 6.4628 18.3811 7.50109 18.3811Z"
        fill="currentColor"
      />
      <Path
        d="M16.5011 9.38109C17.5394 9.38109 18.3811 8.53939 18.3811 7.50109C18.3811 6.4628 17.5394 5.62109 16.5011 5.62109C15.4628 5.62109 14.6211 6.4628 14.6211 7.50109C14.6211 8.53939 15.4628 9.38109 16.5011 9.38109Z"
        fill="currentColor"
      />
      <Path
        d="M15.5011 18.3811C17.0917 18.3811 18.3811 17.0917 18.3811 15.5011C18.3811 13.9105 17.0917 12.6211 15.5011 12.6211C13.9105 12.6211 12.6211 13.9105 12.6211 15.5011C12.6211 17.0917 13.9105 18.3811 15.5011 18.3811Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ScanningBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 9V6.5C2 4.01 4.01 2 6.5 2H9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 2H17.5C19.99 2 22 4.01 22 6.5V9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 16V17.5C22 19.99 19.99 22 17.5 22H16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 22H6.5C4.01 22 2 19.99 2 17.5V15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11 8.5C11 9.88 9.88 11 8.5 11C7.12 11 6 9.88 6 8.5C6 7.12 7.12 6 8.5 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.5 18C8.32843 18 9 17.3284 9 16.5C9 15.6716 8.32843 15 7.5 15C6.67157 15 6 15.6716 6 16.5C6 17.3284 6.67157 18 7.5 18Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.5 9C17.3284 9 18 8.32843 18 7.5C18 6.67157 17.3284 6 16.5 6C15.6716 6 15 6.67157 15 7.5C15 8.32843 15.6716 9 16.5 9Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13 15.5C13 14.81 13.28 14.18 13.73 13.73C14.18 13.28 14.81 13 15.5 13C16.88 13 18 14.12 18 15.5C18 16.88 16.88 18 15.5 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ScanningBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 9.75C1.59 9.75 1.25 9.41 1.25 9V6.5C1.25 3.6 3.61 1.25 6.5 1.25H9C9.41 1.25 9.75 1.59 9.75 2C9.75 2.41 9.41 2.75 9 2.75H6.5C4.43 2.75 2.75 4.43 2.75 6.5V9C2.75 9.41 2.41 9.75 2 9.75Z"
        fill="currentColor"
      />
      <Path
        d="M22 9.75C21.59 9.75 21.25 9.41 21.25 9V6.5C21.25 4.43 19.57 2.75 17.5 2.75H15C14.59 2.75 14.25 2.41 14.25 2C14.25 1.59 14.59 1.25 15 1.25H17.5C20.39 1.25 22.75 3.6 22.75 6.5V9C22.75 9.41 22.41 9.75 22 9.75Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M17.5 22.75H16C15.59 22.75 15.25 22.41 15.25 22C15.25 21.59 15.59 21.25 16 21.25H17.5C19.57 21.25 21.25 19.57 21.25 17.5V16C21.25 15.59 21.59 15.25 22 15.25C22.41 15.25 22.75 15.59 22.75 16V17.5C22.75 20.4 20.39 22.75 17.5 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M9 22.75H6.5C3.61 22.75 1.25 20.4 1.25 17.5V15C1.25 14.59 1.59 14.25 2 14.25C2.41 14.25 2.75 14.59 2.75 15V17.5C2.75 19.57 4.43 21.25 6.5 21.25H9C9.41 21.25 9.75 21.59 9.75 22C9.75 22.41 9.41 22.75 9 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M8.49914 11.3801C10.0897 11.3801 11.3791 10.0907 11.3791 8.50012C11.3791 6.90954 10.0897 5.62012 8.49914 5.62012C6.90856 5.62012 5.61914 6.90954 5.61914 8.50012C5.61914 10.0907 6.90856 11.3801 8.49914 11.3801Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M7.49914 18.3801C8.53744 18.3801 9.37914 17.5384 9.37914 16.5001C9.37914 15.4618 8.53744 14.6201 7.49914 14.6201C6.46085 14.6201 5.61914 15.4618 5.61914 16.5001C5.61914 17.5384 6.46085 18.3801 7.49914 18.3801Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M16.4991 9.38012C17.5374 9.38012 18.3791 8.53841 18.3791 7.50012C18.3791 6.46182 17.5374 5.62012 16.4991 5.62012C15.4608 5.62012 14.6191 6.46182 14.6191 7.50012C14.6191 8.53841 15.4608 9.38012 16.4991 9.38012Z"
        fill="currentColor"
      />
      <Path
        d="M15.4991 18.3801C17.0897 18.3801 18.3791 17.0907 18.3791 15.5001C18.3791 13.9095 17.0897 12.6201 15.4991 12.6201C13.9086 12.6201 12.6191 13.9095 12.6191 15.5001C12.6191 17.0907 13.9086 18.3801 15.4991 18.3801Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ScanningLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 9V6.5C2 4.01 4.01 2 6.5 2H9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 2H17.5C19.99 2 22 4.01 22 6.5V9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 16V17.5C22 19.99 19.99 22 17.5 22H16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 22H6.5C4.01 22 2 19.99 2 17.5V15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.5 11C9.88071 11 11 9.88071 11 8.5C11 7.11929 9.88071 6 8.5 6C7.11929 6 6 7.11929 6 8.5C6 9.88071 7.11929 11 8.5 11Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.5 18C8.32843 18 9 17.3284 9 16.5C9 15.6716 8.32843 15 7.5 15C6.67157 15 6 15.6716 6 16.5C6 17.3284 6.67157 18 7.5 18Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.5 9C17.3284 9 18 8.32843 18 7.5C18 6.67157 17.3284 6 16.5 6C15.6716 6 15 6.67157 15 7.5C15 8.32843 15.6716 9 16.5 9Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.5 18C16.8807 18 18 16.8807 18 15.5C18 14.1193 16.8807 13 15.5 13C14.1193 13 13 14.1193 13 15.5C13 16.8807 14.1193 18 15.5 18Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ScanningOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 9.75C1.59 9.75 1.25 9.41 1.25 9V6.5C1.25 3.6 3.61 1.25 6.5 1.25H9C9.41 1.25 9.75 1.59 9.75 2C9.75 2.41 9.41 2.75 9 2.75H6.5C4.43 2.75 2.75 4.43 2.75 6.5V9C2.75 9.41 2.41 9.75 2 9.75Z"
        fill="currentColor"
      />
      <Path
        d="M22 9.75C21.59 9.75 21.25 9.41 21.25 9V6.5C21.25 4.43 19.57 2.75 17.5 2.75H15C14.59 2.75 14.25 2.41 14.25 2C14.25 1.59 14.59 1.25 15 1.25H17.5C20.39 1.25 22.75 3.6 22.75 6.5V9C22.75 9.41 22.41 9.75 22 9.75Z"
        fill="currentColor"
      />
      <Path
        d="M17.5 22.75H16C15.59 22.75 15.25 22.41 15.25 22C15.25 21.59 15.59 21.25 16 21.25H17.5C19.57 21.25 21.25 19.57 21.25 17.5V16C21.25 15.59 21.59 15.25 22 15.25C22.41 15.25 22.75 15.59 22.75 16V17.5C22.75 20.4 20.39 22.75 17.5 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M9 22.75H6.5C3.61 22.75 1.25 20.4 1.25 17.5V15C1.25 14.59 1.59 14.25 2 14.25C2.41 14.25 2.75 14.59 2.75 15V17.5C2.75 19.57 4.43 21.25 6.5 21.25H9C9.41 21.25 9.75 21.59 9.75 22C9.75 22.41 9.41 22.75 9 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M8.5 11.75C6.71 11.75 5.25 10.29 5.25 8.5C5.25 6.71 6.71 5.25 8.5 5.25C10.29 5.25 11.75 6.71 11.75 8.5C11.75 10.29 10.29 11.75 8.5 11.75ZM8.5 6.75C7.54 6.75 6.75 7.54 6.75 8.5C6.75 9.46 7.54 10.25 8.5 10.25C9.46 10.25 10.25 9.46 10.25 8.5C10.25 7.54 9.46 6.75 8.5 6.75Z"
        fill="currentColor"
      />
      <Path
        d="M7.5 18.75C6.26 18.75 5.25 17.74 5.25 16.5C5.25 15.26 6.26 14.25 7.5 14.25C8.74 14.25 9.75 15.26 9.75 16.5C9.75 17.74 8.74 18.75 7.5 18.75ZM7.5 15.75C7.09 15.75 6.75 16.09 6.75 16.5C6.75 16.91 7.09 17.25 7.5 17.25C7.91 17.25 8.25 16.91 8.25 16.5C8.25 16.09 7.91 15.75 7.5 15.75Z"
        fill="currentColor"
      />
      <Path
        d="M16.5 9.75C15.26 9.75 14.25 8.74 14.25 7.5C14.25 6.26 15.26 5.25 16.5 5.25C17.74 5.25 18.75 6.26 18.75 7.5C18.75 8.74 17.74 9.75 16.5 9.75ZM16.5 6.75C16.09 6.75 15.75 7.09 15.75 7.5C15.75 7.91 16.09 8.25 16.5 8.25C16.91 8.25 17.25 7.91 17.25 7.5C17.25 7.09 16.91 6.75 16.5 6.75Z"
        fill="currentColor"
      />
      <Path
        d="M15.5 18.75C13.71 18.75 12.25 17.29 12.25 15.5C12.25 13.71 13.71 12.25 15.5 12.25C17.29 12.25 18.75 13.71 18.75 15.5C18.75 17.29 17.29 18.75 15.5 18.75ZM15.5 13.75C14.54 13.75 13.75 14.54 13.75 15.5C13.75 16.46 14.54 17.25 15.5 17.25C16.46 17.25 17.25 16.46 17.25 15.5C17.25 14.54 16.46 13.75 15.5 13.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ScanningTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 9V6.5C2 4.01 4.01 2 6.5 2H9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 2H17.5C19.99 2 22 4.01 22 6.5V9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 16V17.5C22 19.99 19.99 22 17.5 22H16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 22H6.5C4.01 22 2 19.99 2 17.5V15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M8.5 11C9.88071 11 11 9.88071 11 8.5C11 7.11929 9.88071 6 8.5 6C7.11929 6 6 7.11929 6 8.5C6 9.88071 7.11929 11 8.5 11Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M7.5 18C8.32843 18 9 17.3284 9 16.5C9 15.6716 8.32843 15 7.5 15C6.67157 15 6 15.6716 6 16.5C6 17.3284 6.67157 18 7.5 18Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M16.5 9C17.3284 9 18 8.32843 18 7.5C18 6.67157 17.3284 6 16.5 6C15.6716 6 15 6.67157 15 7.5C15 8.32843 15.6716 9 16.5 9Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M15.5 18C16.8807 18 18 16.8807 18 15.5C18 14.1193 16.8807 13 15.5 13C14.1193 13 13 14.1193 13 15.5C13 16.8807 14.1193 18 15.5 18Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: ScanningBold,
  broken: ScanningBroken,
  bulk: ScanningBulk,
  linear: ScanningLinear,
  outline: ScanningOutline,
  twotone: ScanningTwotone,
};

export const ScanningIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
