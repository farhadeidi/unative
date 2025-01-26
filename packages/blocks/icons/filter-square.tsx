import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const FilterSquareBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.95 4.13C20.66 3.71 20.29 3.34 19.87 3.05C18.92 2.36 17.68 2 16.19 2H7.81C7.61 2 7.41 2.01 7.22 2.03C3.94 2.24 2 4.37 2 7.81V16.19C2 17.68 2.36 18.92 3.05 19.87C3.34 20.29 3.71 20.66 4.13 20.95C4.95 21.55 5.99 21.9 7.22 21.98C7.41 21.99 7.61 22 7.81 22H16.19C19.83 22 22 19.83 22 16.19V7.81C22 6.32 21.64 5.08 20.95 4.13ZM8.46 10.68L7.97 10.17C7.71 9.91 7.5 9.44 7.5 9.12V7.92C7.5 7.29 7.97 6.82 8.55 6.82H10.69C11.1 6.82 11.35 7.27 11.13 7.62L9.28 10.6C9.1 10.89 8.69 10.93 8.46 10.68ZM16.5 9.02C16.5 9.44 16.24 9.96 15.98 10.22L13.73 12.21C13.42 12.47 13.21 12.99 13.21 13.41V15.66C13.21 15.97 13 16.39 12.74 16.55L12 17.02C11.32 17.44 10.38 16.97 10.38 16.13V13.36C10.38 12.99 10.17 12.52 9.96 12.26L9.72 12C9.56 11.83 9.53 11.57 9.65 11.36L12.33 7.06C12.43 6.91 12.59 6.81 12.77 6.81H15.45C16.03 6.81 16.5 7.28 16.5 7.86V9.02Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const FilterSquareBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8.16 6.6499H15.83C16.47 6.6499 16.99 7.1699 16.99 7.8099V9.0899C16.99 9.5599 16.7 10.1399 16.41 10.4299L13.91 12.6399C13.56 12.9299 13.33 13.5099 13.33 13.9799V16.4799C13.33 16.8299 13.1 17.2899 12.81 17.4699L12 17.9799C11.24 18.4499 10.2 17.9199 10.2 16.9899V13.9099C10.2 13.4999 9.97 12.9799 9.73 12.6899L7.52 10.3599C7.23 10.0799 7 9.5499 7 9.1999V7.8699C7 7.1699 7.52 6.6499 8.16 6.6499Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 12.92V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const FilterSquareBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 7.81V16.19C22 19.83 19.83 22 16.19 22H7.81C7.61 22 7.41 21.99 7.22 21.98C5.99 21.9 4.95 21.55 4.13 20.95C3.71 20.66 3.34 20.29 3.05 19.87C2.36 18.92 2 17.68 2 16.19V7.81C2 4.37 3.94 2.24 7.22 2.03C7.41 2.01 7.61 2 7.81 2H16.19C17.68 2 18.92 2.36 19.87 3.05C20.29 3.34 20.66 3.71 20.95 4.13C21.64 5.08 22 6.32 22 7.81Z"
        fill="currentColor"
      />
      <Path
        d="M8.16 6.6499H15.83C16.47 6.6499 16.99 7.1699 16.99 7.8099V9.0899C16.99 9.5599 16.7 10.1399 16.41 10.4299L13.91 12.6399C13.56 12.9299 13.33 13.5099 13.33 13.9799V16.4799C13.33 16.8299 13.1 17.2899 12.81 17.4699L12 17.9799C11.24 18.4499 10.2 17.9199 10.2 16.9899V13.9099C10.2 13.4999 9.97 12.9799 9.73 12.6899L7.52 10.3599C7.23 10.0799 7 9.5499 7 9.1999V7.8699C7 7.1699 7.52 6.6499 8.16 6.6499Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const FilterSquareLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8.16 6.65002H15.83C16.47 6.65002 16.99 7.17002 16.99 7.81002V9.09002C16.99 9.56002 16.7 10.14 16.41 10.43L13.91 12.64C13.56 12.93 13.33 13.51 13.33 13.98V16.48C13.33 16.83 13.1 17.29 12.81 17.47L12 17.98C11.24 18.45 10.2 17.92 10.2 16.99V13.91C10.2 13.5 9.97 12.98 9.73 12.69L7.52 10.36C7.23 10.08 7 9.55002 7 9.20002V7.87002C7 7.17002 7.52 6.65002 8.16 6.65002Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
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

const FilterSquareOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.38 18.8999C11.05 18.8999 10.72 18.8199 10.42 18.6499C9.81 18.3099 9.44 17.6899 9.44 16.9899V13.9099C9.44 13.7199 9.29 13.3499 9.14 13.1599L6.97 10.8799C6.56 10.4699 6.25 9.7499 6.25 9.1999V7.8699C6.25 6.7599 7.09 5.8999 8.16 5.8999H15.83C16.88 5.8999 17.74 6.7599 17.74 7.8099V9.0899C17.74 9.7899 17.34 10.5599 16.94 10.9599L14.41 13.1999C14.25 13.3399 14.08 13.6899 14.08 13.9799V16.4799C14.08 17.1099 13.7 17.8099 13.19 18.1099L12.4 18.6199C12.09 18.8099 11.74 18.8999 11.38 18.8999ZM8.16 7.3999C7.92 7.3999 7.75 7.5999 7.75 7.8699V9.1999C7.75 9.3299 7.89 9.6699 8.05 9.8299L10.27 12.1699C10.61 12.5999 10.94 13.2899 10.94 13.9099V16.9899C10.94 17.1899 11.07 17.2999 11.15 17.3399C11.26 17.3999 11.44 17.4399 11.6 17.3399L12.4 16.8199C12.48 16.7599 12.58 16.5599 12.58 16.4599V13.9599C12.58 13.2499 12.93 12.4599 13.43 12.0499L15.91 9.8499C16.04 9.7199 16.24 9.3199 16.24 9.0699V7.8099C16.24 7.5899 16.05 7.3999 15.83 7.3999H8.16Z"
        fill="currentColor"
      />
      <Path
        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const FilterSquareTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8.16 6.6499H15.83C16.47 6.6499 16.99 7.1699 16.99 7.8099V9.0899C16.99 9.5599 16.7 10.1399 16.41 10.4299L13.91 12.6399C13.56 12.9299 13.33 13.5099 13.33 13.9799V16.4799C13.33 16.8299 13.1 17.2899 12.81 17.4699L12 17.9799C11.24 18.4499 10.2 17.9199 10.2 16.9899V13.9099C10.2 13.4999 9.97 12.9799 9.73 12.6899L7.52 10.3599C7.23 10.0799 7 9.5499 7 9.1999V7.8699C7 7.1699 7.52 6.6499 8.16 6.6499Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
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
  bold: FilterSquareBold,
  broken: FilterSquareBroken,
  bulk: FilterSquareBulk,
  linear: FilterSquareLinear,
  outline: FilterSquareOutline,
  twotone: FilterSquareTwotone,
};

export const FilterSquareIcon = ({
  variant = "linear",
  ...props
}: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
