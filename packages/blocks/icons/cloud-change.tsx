import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const CloudChangeBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8.1093 11.8498C5.2893 12.0498 5.2993 16.1498 8.1093 16.3498H14.7793C15.5893 16.3598 16.3693 16.0498 16.9693 15.5098C18.9493 13.7798 17.8893 10.3098 15.2893 9.97976C14.3593 4.33976 6.2093 6.47976 8.1393 11.8498"
        fill="currentColor"
      />
      <Path
        d="M9 22.75C4.73 22.75 1.25 19.27 1.25 15C1.25 14.59 1.59 14.25 2 14.25C2.41 14.25 2.75 14.59 2.75 15C2.75 17.96 4.81 20.44 7.58 21.09L7.31 20.64C7.1 20.28 7.21 19.82 7.57 19.61C7.92 19.4 8.39 19.51 8.6 19.87L9.65 21.62C9.79 21.85 9.79 22.14 9.66 22.37C9.52 22.6 9.27 22.75 9 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M22.0004 9.75C21.5904 9.75 21.2504 9.41 21.2504 9C21.2504 6.04 19.1904 3.56 16.4204 2.91L16.6904 3.36C16.9004 3.72 16.7904 4.18 16.4304 4.39C16.0804 4.6 15.6104 4.49 15.4004 4.13L14.3504 2.38C14.2104 2.15 14.2104 1.86 14.3404 1.63C14.4804 1.4 14.7304 1.25 15.0004 1.25C19.2704 1.25 22.7504 4.73 22.7504 9C22.7504 9.41 22.4104 9.75 22.0004 9.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CloudChangeBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.2883 9.98001C14.3583 4.34001 6.20833 6.48 8.13833 11.85"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.1093 11.85C5.2893 12.05 5.2993 16.15 8.1093 16.35H14.7793C15.5893 16.36 16.3693 16.05 16.9693 15.51C17.7393 14.84 18.0493 13.91 17.9893 13.01"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 15C2 18.87 5.13 22 9 22L7.95001 20.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 9C22 5.13 18.87 2 15 2L16.05 3.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const CloudChangeBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8.1093 11.85C5.2893 12.05 5.2993 16.15 8.1093 16.35H14.7793C15.5893 16.36 16.3693 16.05 16.9693 15.51C18.9493 13.78 17.8893 10.31 15.2893 9.98001C14.3593 4.34001 6.20933 6.48 8.13933 11.85"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M9 22.75C4.73 22.75 1.25 19.27 1.25 15C1.25 14.59 1.59 14.25 2 14.25C2.41 14.25 2.75 14.59 2.75 15C2.75 17.96 4.80999 20.44 7.57999 21.09L7.31 20.64C7.1 20.28 7.21001 19.82 7.57001 19.61C7.92001 19.4 8.39001 19.51 8.60001 19.87L9.64999 21.62C9.78999 21.85 9.79 22.14 9.66 22.37C9.52 22.6 9.27 22.75 9 22.75Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M22.0004 9.75C21.5904 9.75 21.2504 9.41 21.2504 9C21.2504 6.04 19.1904 3.55997 16.4204 2.90997L16.6904 3.35999C16.9004 3.71999 16.7904 4.18001 16.4304 4.39001C16.0804 4.60001 15.6104 4.49001 15.4004 4.13L14.3504 2.38C14.2104 2.15 14.2104 1.86 14.3404 1.63C14.4704 1.39 14.7204 1.25 14.9904 1.25C19.2604 1.25 22.7404 4.73 22.7404 9C22.7504 9.41 22.4104 9.75 22.0004 9.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CloudChangeLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8.11003 11.85C5.29003 12.05 5.30003 16.15 8.11003 16.35H14.78C15.59 16.36 16.37 16.05 16.97 15.51C18.95 13.78 17.8901 10.31 15.2901 9.98001C14.3601 4.34001 6.21006 6.48 8.14006 11.85"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 15C2 18.87 5.13 22 9 22L7.95001 20.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 9C22 5.13 18.87 2 15 2L16.05 3.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const CloudChangeOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.81 17.0999C14.8 17.0999 14.79 17.0999 14.78 17.0999H8.10999C6.12999 16.9599 5.25 15.45 5.25 14.0999C5.25 12.9699 5.87001 11.73 7.20001 11.27C6.90001 9.76999 7.27001 8.36999 8.26001 7.32999C9.45001 6.07999 11.36 5.59 13 6.09C14.46 6.54 15.51 7.71 15.92 9.34C17.17 9.69 18.16 10.67 18.57 12C19.03 13.52 18.61 15.08 17.47 16.07C16.75 16.73 15.8 17.0999 14.81 17.0999ZM8.14001 12.5999C7.12001 12.6899 6.75 13.4599 6.75 14.0999C6.75 14.7499 7.12 15.53 8.16 15.5999H14.78C15.43 15.5999 16 15.38 16.46 14.95C17.3 14.22 17.35 13.17 17.13 12.43C16.91 11.69 16.28 10.8499 15.19 10.7199C14.86 10.6799 14.6 10.4299 14.54 10.0999C14.32 8.76995 13.61 7.86 12.55 7.53C11.46 7.19 10.13 7.53997 9.34 8.36997C8.56 9.17997 8.39 10.3299 8.84 11.5999C8.98 11.9899 8.78001 12.42 8.39001 12.56C8.31001 12.59 8.18001 12.61 8.14001 12.5999Z"
        fill="currentColor"
      />
      <Path
        d="M9 22.75C4.73 22.75 1.25 19.27 1.25 15C1.25 14.59 1.59 14.25 2 14.25C2.41 14.25 2.75 14.59 2.75 15C2.75 17.96 4.80999 20.44 7.57999 21.09L7.31 20.64C7.1 20.28 7.21001 19.82 7.57001 19.61C7.92001 19.4 8.39001 19.51 8.60001 19.87L9.64999 21.62C9.78999 21.85 9.79 22.14 9.66 22.37C9.52 22.6 9.27 22.75 9 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M22.0004 9.75C21.5904 9.75 21.2504 9.41 21.2504 9C21.2504 6.04 19.1904 3.55997 16.4204 2.90997L16.6904 3.35999C16.9004 3.71999 16.7904 4.18001 16.4304 4.39001C16.0804 4.60001 15.6104 4.49001 15.4004 4.13L14.3504 2.38C14.2104 2.15 14.2104 1.86 14.3404 1.63C14.4704 1.39 14.7204 1.25 14.9904 1.25C19.2604 1.25 22.7404 4.73 22.7404 9C22.7504 9.41 22.4104 9.75 22.0004 9.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CloudChangeTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8.11028 11.8498C5.29028 12.0498 5.30028 16.1498 8.11028 16.3498H14.7803C15.5903 16.3598 16.3703 16.0498 16.9703 15.5098C18.9503 13.7798 17.8903 10.3098 15.2903 9.97976C14.3603 4.33976 6.2103 6.47976 8.1403 11.8498"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M2 15C2 18.87 5.13 22 9 22L7.95001 20.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M22 9C22 5.13 18.87 2 15 2L16.05 3.75"
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
  bold: CloudChangeBold,
  broken: CloudChangeBroken,
  bulk: CloudChangeBulk,
  linear: CloudChangeLinear,
  outline: CloudChangeOutline,
  twotone: CloudChangeTwotone,
};

export const CloudChangeIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
