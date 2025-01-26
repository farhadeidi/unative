import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const RotateLeftBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM12 18.58C8.83 18.58 6.25 16 6.25 12.83C6.25 11.69 6.58 10.58 7.22 9.64C7.45 9.3 7.92 9.2 8.26 9.43C8.6 9.66 8.7 10.13 8.47 10.47C8 11.17 7.76 11.99 7.76 12.83C7.76 15.17 9.67 17.08 12.01 17.08C14.35 17.08 16.26 15.17 16.26 12.83C16.26 10.59 14.52 8.75 12.32 8.59L12.73 8.89C13.06 9.13 13.14 9.6 12.89 9.94C12.65 10.27 12.18 10.35 11.84 10.1L9.9 8.69C9.83 8.64 9.77 8.58 9.72 8.51C9.71 8.5 9.7 8.49 9.69 8.47C9.65 8.4 9.62 8.32 9.6 8.24C9.58 8.14 9.58 8.05 9.59 7.95C9.6 7.91 9.61 7.87 9.62 7.83C9.64 7.76 9.68 7.7 9.72 7.63C9.74 7.62 9.76 7.6 9.78 7.58L11.44 5.68C11.71 5.37 12.19 5.34 12.5 5.61C12.81 5.88 12.84 6.36 12.57 6.67L12.2 7.1C15.28 7.2 17.76 9.74 17.76 12.85C17.75 16 15.17 18.58 12 18.58Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const RotateLeftBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.6701 13.3299C20.6701 18.1199 16.7901 21.9999 12.0001 21.9999C7.21008 21.9999 3.33008 18.1199 3.33008 13.3299C3.33008 11.5499 3.87008 9.8899 4.79008 8.5099M9.11008 5.0799C9.98008 4.8199 10.9401 4.6499 12.0001 4.6499C15.2101 4.6499 18.0201 6.3999 19.5101 8.9899"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.86914 5.32L10.7591 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.86914 5.32007L11.2391 7.78007"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const RotateLeftBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7.25 22H11.75C15.5 22 17 20.5 17 16.75V12.25C17 8.5 15.5 7 11.75 7H7.25C3.5 7 2 8.5 2 12.25V16.75C2 20.5 3.5 22 7.25 22Z"
        fill="currentColor"
      />
      <Path
        d="M21.2504 10.5C20.8404 10.5 20.5004 10.16 20.5004 9.75C20.5004 6.79 18.4404 4.31 15.6704 3.66L15.9404 4.11C16.1504 4.47 16.0404 4.93 15.6804 5.14C15.3204 5.35 14.8604 5.24 14.6504 4.88L13.6004 3.13C13.4604 2.9 13.4604 2.61 13.5904 2.38C13.7304 2.15 13.9804 2 14.2504 2C18.5204 2 22.0004 5.48 22.0004 9.75C22.0004 10.16 21.6604 10.5 21.2504 10.5Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const RotateLeftLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.11008 5.0799C9.98008 4.8199 10.9401 4.6499 12.0001 4.6499C16.7901 4.6499 20.6701 8.5299 20.6701 13.3199C20.6701 18.1099 16.7901 21.9899 12.0001 21.9899C7.21008 21.9899 3.33008 18.1099 3.33008 13.3199C3.33008 11.5399 3.87008 9.8799 4.79008 8.4999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.87012 5.32L10.7601 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.87012 5.32007L11.2401 7.78007"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const RotateLeftOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.0001 22.7501C6.80008 22.7501 2.58008 18.5201 2.58008 13.3301C2.58008 11.4601 3.13008 9.65014 4.17008 8.09014C4.40008 7.75014 4.87008 7.65014 5.21008 7.88014C5.55008 8.11014 5.65008 8.58014 5.42008 8.92014C4.55008 10.2201 4.09008 11.7501 4.09008 13.3201C4.09008 17.6901 7.64008 21.2401 12.0101 21.2401C16.3801 21.2401 19.9301 17.6901 19.9301 13.3201C19.9301 8.95014 16.3701 5.40014 12.0001 5.40014C11.0801 5.40014 10.1801 5.53014 9.33008 5.79014C8.93008 5.91014 8.51008 5.69014 8.39008 5.29014C8.27008 4.89014 8.49008 4.47014 8.89008 4.35014C9.89008 4.05014 10.9301 3.89014 12.0001 3.89014C17.2001 3.89014 21.4201 8.12014 21.4201 13.3101C21.4201 18.5001 17.2001 22.7501 12.0001 22.7501Z"
        fill="currentColor"
      />
      <Path
        d="M7.87036 6.07012C7.70036 6.07012 7.52036 6.01012 7.38036 5.89012C7.06036 5.61012 7.03036 5.14012 7.30036 4.83012L10.1904 1.51012C10.4604 1.20012 10.9404 1.16012 11.2504 1.44012C11.5604 1.71012 11.5904 2.19012 11.3204 2.50012L8.43036 5.81012C8.28036 5.98012 8.07036 6.07012 7.87036 6.07012Z"
        fill="currentColor"
      />
      <Path
        d="M11.2396 8.53013C11.0896 8.53013 10.9296 8.48013 10.7996 8.39013L7.41959 5.92013C7.08959 5.68013 7.01959 5.21013 7.25959 4.88013C7.49959 4.54013 7.96959 4.47013 8.30959 4.71013L11.6796 7.17013C12.0096 7.41013 12.0896 7.88013 11.8396 8.22013C11.6996 8.43013 11.4696 8.53013 11.2396 8.53013Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const RotateLeftTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.11008 5.0799C9.98008 4.8199 10.9401 4.6499 12.0001 4.6499C16.7901 4.6499 20.6701 8.5299 20.6701 13.3199C20.6701 18.1099 16.7901 21.9899 12.0001 21.9899C7.21008 21.9899 3.33008 18.1099 3.33008 13.3199C3.33008 11.5399 3.87008 9.8799 4.79008 8.4999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.86914 5.32L10.7591 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.86914 5.31982L11.2391 7.77982"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: RotateLeftBold,
  broken: RotateLeftBroken,
  bulk: RotateLeftBulk,
  linear: RotateLeftLinear,
  outline: RotateLeftOutline,
  twotone: RotateLeftTwotone,
};

export const RotateLeftIcon = ({ variant = "linear", ...props }: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
