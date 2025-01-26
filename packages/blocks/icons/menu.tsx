import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const MenuBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.5401 8.81063C19.1748 8.81063 20.5001 7.48539 20.5001 5.85062C20.5001 4.21586 19.1748 2.89062 17.5401 2.89062C15.9053 2.89062 14.5801 4.21586 14.5801 5.85062C14.5801 7.48539 15.9053 8.81063 17.5401 8.81063Z"
        fill="currentColor"
      />
      <Path
        d="M6.46 8.81063C8.09476 8.81063 9.42 7.48539 9.42 5.85062C9.42 4.21586 8.09476 2.89062 6.46 2.89062C4.82524 2.89062 3.5 4.21586 3.5 5.85062C3.5 7.48539 4.82524 8.81063 6.46 8.81063Z"
        fill="currentColor"
      />
      <Path
        d="M17.5401 21.1114C19.1748 21.1114 20.5001 19.7862 20.5001 18.1514C20.5001 16.5166 19.1748 15.1914 17.5401 15.1914C15.9053 15.1914 14.5801 16.5166 14.5801 18.1514C14.5801 19.7862 15.9053 21.1114 17.5401 21.1114Z"
        fill="currentColor"
      />
      <Path
        d="M6.46 21.1114C8.09476 21.1114 9.42 19.7862 9.42 18.1514C9.42 16.5166 8.09476 15.1914 6.46 15.1914C4.82524 15.1914 3.5 16.5166 3.5 18.1514C3.5 19.7862 4.82524 21.1114 6.46 21.1114Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MenuBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.5401 8.30989C18.8987 8.30989 20.0001 7.20851 20.0001 5.84989C20.0001 4.49127 18.8987 3.38989 17.5401 3.38989C16.1814 3.38989 15.0801 4.49127 15.0801 5.84989C15.0801 7.20851 16.1814 8.30989 17.5401 8.30989Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.92 5.84989C8.92 4.48989 7.82001 3.38989 6.46001 3.38989C5.10001 3.38989 4 4.48989 4 5.84989C4 7.20989 5.10001 8.30989 6.46001 8.30989"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.5401 20.62C18.9001 20.62 20.0001 19.52 20.0001 18.16C20.0001 16.8 18.9001 15.7 17.5401 15.7C16.1801 15.7 15.0801 16.8 15.0801 18.16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.46001 20.6099C7.81863 20.6099 8.92 19.5086 8.92 18.1499C8.92 16.7913 7.81863 15.6899 6.46001 15.6899C5.10139 15.6899 4 16.7913 4 18.1499C4 19.5086 5.10139 20.6099 6.46001 20.6099Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MenuBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z"
        fill="currentColor"
      />
      <Path
        d="M17 8.25H7C6.59 8.25 6.25 7.91 6.25 7.5C6.25 7.09 6.59 6.75 7 6.75H17C17.41 6.75 17.75 7.09 17.75 7.5C17.75 7.91 17.41 8.25 17 8.25Z"
        fill="currentColor"
      />
      <Path
        d="M17 12.75H7C6.59 12.75 6.25 12.41 6.25 12C6.25 11.59 6.59 11.25 7 11.25H17C17.41 11.25 17.75 11.59 17.75 12C17.75 12.41 17.41 12.75 17 12.75Z"
        fill="currentColor"
      />
      <Path
        d="M17 17.25H7C6.59 17.25 6.25 16.91 6.25 16.5C6.25 16.09 6.59 15.75 7 15.75H17C17.41 15.75 17.75 16.09 17.75 16.5C17.75 16.91 17.41 17.25 17 17.25Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MenuLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3 7H21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M3 12H21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M3 17H21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Svg>
  );
};

const MenuOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.5401 9.06014C15.7701 9.06014 14.3301 7.62014 14.3301 5.85014C14.3301 4.08014 15.7701 2.64014 17.5401 2.64014C19.3101 2.64014 20.7501 4.08014 20.7501 5.85014C20.7501 7.62014 19.3101 9.06014 17.5401 9.06014ZM17.5401 4.13014C16.6001 4.13014 15.8301 4.90014 15.8301 5.84014C15.8301 6.78014 16.6001 7.55014 17.5401 7.55014C18.4801 7.55014 19.2501 6.78014 19.2501 5.84014C19.2501 4.90014 18.4801 4.13014 17.5401 4.13014Z"
        fill="currentColor"
      />
      <Path
        d="M6.46001 9.06014C4.69001 9.06014 3.25 7.62014 3.25 5.85014C3.25 4.08014 4.69001 2.64014 6.46001 2.64014C8.23001 2.64014 9.67 4.08014 9.67 5.85014C9.67 7.62014 8.23001 9.06014 6.46001 9.06014ZM6.46001 4.13014C5.52001 4.13014 4.75 4.90014 4.75 5.84014C4.75 6.78014 5.52001 7.55014 6.46001 7.55014C7.40001 7.55014 8.17 6.78014 8.17 5.84014C8.17 4.90014 7.41001 4.13014 6.46001 4.13014Z"
        fill="currentColor"
      />
      <Path
        d="M17.5401 21.3702C15.7701 21.3702 14.3301 19.9302 14.3301 18.1602C14.3301 16.3902 15.7701 14.9502 17.5401 14.9502C19.3101 14.9502 20.7501 16.3902 20.7501 18.1602C20.7501 19.9302 19.3101 21.3702 17.5401 21.3702ZM17.5401 16.4402C16.6001 16.4402 15.8301 17.2102 15.8301 18.1502C15.8301 19.0902 16.6001 19.8602 17.5401 19.8602C18.4801 19.8602 19.2501 19.0902 19.2501 18.1502C19.2501 17.2102 18.4801 16.4402 17.5401 16.4402Z"
        fill="currentColor"
      />
      <Path
        d="M6.46001 21.3702C4.69001 21.3702 3.25 19.9302 3.25 18.1602C3.25 16.3902 4.69001 14.9502 6.46001 14.9502C8.23001 14.9502 9.67 16.3902 9.67 18.1602C9.67 19.9302 8.23001 21.3702 6.46001 21.3702ZM6.46001 16.4402C5.52001 16.4402 4.75 17.2102 4.75 18.1502C4.75 19.0902 5.52001 19.8602 6.46001 19.8602C7.40001 19.8602 8.17 19.0902 8.17 18.1502C8.17 17.2102 7.41001 16.4402 6.46001 16.4402Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MenuTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.5401 8.31014C18.8987 8.31014 20.0001 7.20876 20.0001 5.85014C20.0001 4.49152 18.8987 3.39014 17.5401 3.39014C16.1814 3.39014 15.0801 4.49152 15.0801 5.85014C15.0801 7.20876 16.1814 8.31014 17.5401 8.31014Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M6.46001 8.31014C7.81863 8.31014 8.92 7.20876 8.92 5.85014C8.92 4.49152 7.81863 3.39014 6.46001 3.39014C5.10139 3.39014 4 4.49152 4 5.85014C4 7.20876 5.10139 8.31014 6.46001 8.31014Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M17.5401 20.6099C18.8987 20.6099 20.0001 19.5086 20.0001 18.1499C20.0001 16.7913 18.8987 15.6899 17.5401 15.6899C16.1814 15.6899 15.0801 16.7913 15.0801 18.1499C15.0801 19.5086 16.1814 20.6099 17.5401 20.6099Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.46001 20.6099C7.81863 20.6099 8.92 19.5086 8.92 18.1499C8.92 16.7913 7.81863 15.6899 6.46001 15.6899C5.10139 15.6899 4 16.7913 4 18.1499C4 19.5086 5.10139 20.6099 6.46001 20.6099Z"
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
  bold: MenuBold,
  broken: MenuBroken,
  bulk: MenuBulk,
  linear: MenuLinear,
  outline: MenuOutline,
  twotone: MenuTwotone,
};

export const MenuIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
