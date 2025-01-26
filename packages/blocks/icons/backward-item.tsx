import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const BackwardItemBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.25 5.15V7.85C21.25 9.69 20.69 10.25 18.85 10.25H16.15C14.31 10.25 13.75 9.69 13.75 7.85V5.15C13.75 3.31 14.31 2.75 16.15 2.75H18.85C20.69 2.75 21.25 3.31 21.25 5.15Z"
        fill="currentColor"
      />
      <Path
        d="M10.25 16.15V18.85C10.25 20.69 9.69 21.25 7.85 21.25H5.15C3.31 21.25 2.75 20.69 2.75 18.85V16.15C2.75 14.31 3.31 13.75 5.15 13.75H7.85C9.69 13.75 10.25 14.31 10.25 16.15Z"
        fill="currentColor"
      />
      <Path
        d="M16.1491 11.7511C16.4142 11.7511 16.6291 11.966 16.6291 12.2311V13.6211C16.6291 15.9011 15.8991 16.6311 13.6191 16.6311H12.2291C11.964 16.6311 11.7491 16.4162 11.7491 16.1511C11.7491 13.4911 10.5091 12.2511 7.84914 12.2511C7.58404 12.2511 7.36914 12.0362 7.36914 11.7711V10.3811C7.36914 8.10109 8.09914 7.37109 10.3791 7.37109H11.7691C12.0342 7.37109 12.2491 7.586 12.2491 7.85109C12.2491 10.5111 13.4891 11.7511 16.1491 11.7511Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BackwardItemBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 5.14999V7.85001C22 10.1 21.1 11 18.85 11H16.15C13.9 11 13 10.1 13 7.85001V5.14999C13 2.89999 13.9 2 16.15 2H18.85C21.1 2 22 2.89999 22 5.14999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11 16.15V18.85C11 21.1 10.1 22 7.85 22H5.15C2.9 22 2 21.1 2 18.85V16.15C2 13.9 2.9 13 5.15 13H7.85C10.1 13 11 13.9 11 16.15Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.95914 6.75012C9.36914 6.66012 9.84914 6.62012 10.3791 6.62012H12.9991V7.85013C12.9991 10.1001 13.8991 11.0001 16.1491 11.0001H17.3791V13.6201C17.3791 16.3101 16.3091 17.3801 13.6191 17.3801H10.9991V16.1501C10.9991 13.9001 10.0991 13.0001 7.84914 13.0001H6.61914V10.3801"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const BackwardItemBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.25 5.14999V7.85001C21.25 9.69001 20.69 10.25 18.85 10.25H16.15C14.31 10.25 13.75 9.69001 13.75 7.85001V5.14999C13.75 3.30999 14.31 2.75 16.15 2.75H18.85C20.69 2.75 21.25 3.30999 21.25 5.14999Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M10.25 16.15V18.85C10.25 20.69 9.69 21.25 7.85 21.25H5.15C3.31 21.25 2.75 20.69 2.75 18.85V16.15C2.75 14.31 3.31 13.75 5.15 13.75H7.85C9.69 13.75 10.25 14.31 10.25 16.15Z"
        fill="currentColor"
      />
      <Path
        d="M16.6291 11.7501V13.6201C16.6291 15.9001 15.8991 16.6301 13.6191 16.6301H11.7491V16.1501C11.7491 13.4901 10.5091 12.2501 7.84914 12.2501H7.36914V10.3801C7.36914 8.10013 8.09914 7.37012 10.3791 7.37012H12.2491V7.85013C12.2491 10.5101 13.4891 11.7501 16.1491 11.7501H16.6291Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BackwardItemLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 5.14999V7.85001C22 10.1 21.1 11 18.85 11H16.15C13.9 11 13 10.1 13 7.85001V5.14999C13 2.89999 13.9 2 16.15 2H18.85C21.1 2 22 2.89999 22 5.14999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11 16.15V18.85C11 21.1 10.1 22 7.85 22H5.15C2.9 22 2 21.1 2 18.85V16.15C2 13.9 2.9 13 5.15 13H7.85C10.1 13 11 13.9 11 16.15Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.38 11.0001V13.6201C17.38 16.3101 16.31 17.3801 13.62 17.3801H11V16.1501C11 13.9001 10.1 13.0001 7.85 13.0001H6.62V10.3801C6.62 7.69013 7.69 6.62012 10.38 6.62012H13V7.85013C13 10.1001 13.9 11.0001 16.15 11.0001H17.38Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const BackwardItemOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.85 11.75H16.15C13.49 11.75 12.25 10.51 12.25 7.85001V5.14999C12.25 2.48999 13.49 1.25 16.15 1.25H18.85C21.51 1.25 22.75 2.48999 22.75 5.14999V7.85001C22.75 10.51 21.51 11.75 18.85 11.75ZM16.15 2.75C14.31 2.75 13.75 3.30999 13.75 5.14999V7.85001C13.75 9.69001 14.31 10.25 16.15 10.25H18.85C20.69 10.25 21.25 9.69001 21.25 7.85001V5.14999C21.25 3.30999 20.69 2.75 18.85 2.75H16.15Z"
        fill="currentColor"
      />
      <Path
        d="M7.85 22.75H5.15C2.49 22.75 1.25 21.51 1.25 18.85V16.15C1.25 13.49 2.49 12.25 5.15 12.25H7.85C10.51 12.25 11.75 13.49 11.75 16.15V18.85C11.75 21.51 10.51 22.75 7.85 22.75ZM5.15 13.75C3.31 13.75 2.75 14.31 2.75 16.15V18.85C2.75 20.69 3.31 21.25 5.15 21.25H7.85C9.69 21.25 10.25 20.69 10.25 18.85V16.15C10.25 14.31 9.69 13.75 7.85 13.75H5.15Z"
        fill="currentColor"
      />
      <Path
        d="M13.6211 18.1301H11.0011C10.5911 18.1301 10.2511 17.7901 10.2511 17.3801V16.1501C10.2511 14.3101 9.69109 13.7501 7.85109 13.7501H6.62109C6.21109 13.7501 5.87109 13.4101 5.87109 13.0001V10.3801C5.87109 7.26013 7.26109 5.87012 10.3811 5.87012H13.0011C13.4111 5.87012 13.7511 6.21012 13.7511 6.62012V7.85013C13.7511 9.69013 14.3111 10.2501 16.1511 10.2501H17.3811C17.7911 10.2501 18.1311 10.5901 18.1311 11.0001V13.6201C18.1311 16.7401 16.7411 18.1301 13.6211 18.1301ZM11.7511 16.6301H13.6211C15.9011 16.6301 16.6311 15.9001 16.6311 13.6201V11.7501H16.1511C13.4911 11.7501 12.2511 10.5101 12.2511 7.85013V7.37012H10.3811C8.10109 7.37012 7.37109 8.10013 7.37109 10.3801V12.2501H7.85109C10.5111 12.2501 11.7511 13.4901 11.7511 16.1501V16.6301Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BackwardItemTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 5.14999V7.85001C22 10.1 21.1 11 18.85 11H16.15C13.9 11 13 10.1 13 7.85001V5.14999C13 2.89999 13.9 2 16.15 2H18.85C21.1 2 22 2.89999 22 5.14999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11 16.15V18.85C11 21.1 10.1 22 7.85 22H5.15C2.9 22 2 21.1 2 18.85V16.15C2 13.9 2.9 13 5.15 13H7.85C10.1 13 11 13.9 11 16.15Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M17.3791 11.0001V13.6201C17.3791 16.3101 16.3091 17.3801 13.6191 17.3801H10.9991V16.1501C10.9991 13.9001 10.0991 13.0001 7.84914 13.0001H6.61914V10.3801C6.61914 7.69013 7.68914 6.62012 10.3791 6.62012H12.9991V7.85013C12.9991 10.1001 13.8991 11.0001 16.1491 11.0001H17.3791Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: BackwardItemBold,
  broken: BackwardItemBroken,
  bulk: BackwardItemBulk,
  linear: BackwardItemLinear,
  outline: BackwardItemOutline,
  twotone: BackwardItemTwotone,
};

export const BackwardItemIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
