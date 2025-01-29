import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const CalendarTickBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.7502 3.56V2C16.7502 1.59 16.4102 1.25 16.0002 1.25C15.5902 1.25 15.2502 1.59 15.2502 2V3.5H8.75023V2C8.75023 1.59 8.41023 1.25 8.00023 1.25C7.59023 1.25 7.25023 1.59 7.25023 2V3.56C4.55023 3.81 3.24023 5.42 3.04023 7.81C3.02023 8.1 3.26023 8.34 3.54023 8.34H20.4602C20.7502 8.34 20.9902 8.09 20.9602 7.81C20.7602 5.42 19.4502 3.81 16.7502 3.56Z"
        fill="currentColor"
      />
      <Path
        d="M19 15C16.79 15 15 16.79 15 19C15 19.75 15.21 20.46 15.58 21.06C16.27 22.22 17.54 23 19 23C20.46 23 21.73 22.22 22.42 21.06C22.79 20.46 23 19.75 23 19C23 16.79 21.21 15 19 15ZM21.07 18.57L18.94 20.54C18.8 20.67 18.61 20.74 18.43 20.74C18.24 20.74 18.05 20.67 17.9 20.52L16.91 19.53C16.62 19.24 16.62 18.76 16.91 18.47C17.2 18.18 17.68 18.18 17.97 18.47L18.45 18.95L20.05 17.47C20.35 17.19 20.83 17.21 21.11 17.51C21.39 17.81 21.37 18.28 21.07 18.57Z"
        fill="currentColor"
      />
      <Path
        d="M20 9.83984H4C3.45 9.83984 3 10.2898 3 10.8398V16.9998C3 19.9998 4.5 21.9998 8 21.9998H12.93C13.62 21.9998 14.1 21.3298 13.88 20.6798C13.68 20.0998 13.51 19.4598 13.51 18.9998C13.51 15.9698 15.98 13.4998 19.01 13.4998C19.3 13.4998 19.59 13.5198 19.87 13.5698C20.47 13.6598 21.01 13.1898 21.01 12.5898V10.8498C21 10.2898 20.55 9.83984 20 9.83984ZM9.21 18.2098C9.02 18.3898 8.76 18.4998 8.5 18.4998C8.24 18.4998 7.98 18.3898 7.79 18.2098C7.61 18.0198 7.5 17.7598 7.5 17.4998C7.5 17.2398 7.61 16.9798 7.79 16.7898C7.89 16.6998 7.99 16.6298 8.12 16.5798C8.49 16.4198 8.93 16.5098 9.21 16.7898C9.39 16.9798 9.5 17.2398 9.5 17.4998C9.5 17.7598 9.39 18.0198 9.21 18.2098ZM9.21 14.7098C9.16 14.7498 9.11 14.7898 9.06 14.8298C9 14.8698 8.94 14.8998 8.88 14.9198C8.82 14.9498 8.76 14.9698 8.7 14.9798C8.63 14.9898 8.56 14.9998 8.5 14.9998C8.24 14.9998 7.98 14.8898 7.79 14.7098C7.61 14.5198 7.5 14.2598 7.5 13.9998C7.5 13.7398 7.61 13.4798 7.79 13.2898C8.02 13.0598 8.37 12.9498 8.7 13.0198C8.76 13.0298 8.82 13.0498 8.88 13.0798C8.94 13.0998 9 13.1298 9.06 13.1698C9.11 13.2098 9.16 13.2498 9.21 13.2898C9.39 13.4798 9.5 13.7398 9.5 13.9998C9.5 14.2598 9.39 14.5198 9.21 14.7098ZM12.71 14.7098C12.52 14.8898 12.26 14.9998 12 14.9998C11.74 14.9998 11.48 14.8898 11.29 14.7098C11.11 14.5198 11 14.2598 11 13.9998C11 13.7398 11.11 13.4798 11.29 13.2898C11.67 12.9198 12.34 12.9198 12.71 13.2898C12.89 13.4798 13 13.7398 13 13.9998C13 14.2598 12.89 14.5198 12.71 14.7098Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CalendarTickBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8 2V5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 2V5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.5 9.08984H20.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 19C22 19.75 21.79 20.46 21.42 21.06C20.73 22.22 19.46 23 18 23C16.99 23 16.07 22.63 15.37 22C15.06 21.74 14.79 21.42 14.58 21.06C14.21 20.46 14 19.75 14 19C14 16.79 15.79 15 18 15C19.2 15 20.27 15.53 21 16.36C21.62 17.07 22 17.99 22 19Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.4395 19L17.4295 19.99L19.5594 18.02"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 13.1V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5V16.36C20.27 15.53 19.2 15 18 15C15.79 15 14 16.79 14 19C14 19.75 14.21 20.46 14.58 21.06C14.79 21.42 15.06 21.74 15.37 22H8C4.5 22 3 20 3 17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9945 13.7H12.0035"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.29529 13.7H8.30427"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.29529 16.7H8.30427"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const CalendarTickBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.7502 3.56V2C16.7502 1.59 16.4102 1.25 16.0002 1.25C15.5902 1.25 15.2502 1.59 15.2502 2V3.5H8.75023V2C8.75023 1.59 8.41023 1.25 8.00023 1.25C7.59023 1.25 7.25023 1.59 7.25023 2V3.56C4.55023 3.81 3.24023 5.42 3.04023 7.81C3.02023 8.1 3.26023 8.34 3.54023 8.34H20.4602C20.7502 8.34 20.9902 8.09 20.9602 7.81C20.7602 5.42 19.4502 3.81 16.7502 3.56Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M21 10.8401V12.5801C21 13.1901 20.46 13.6601 19.86 13.5601C19.58 13.5201 19.29 13.4901 19 13.4901C15.97 13.4901 13.5 15.9601 13.5 18.9901C13.5 19.4501 13.68 20.0901 13.87 20.6701C14.09 21.3201 13.61 21.9901 12.92 21.9901H8C4.5 21.9901 3 19.9901 3 16.9901V10.8301C3 10.2801 3.45 9.83008 4 9.83008H20C20.55 9.84008 21 10.2901 21 10.8401Z"
        fill="currentColor"
      />
      <Path
        d="M19 15C16.79 15 15 16.79 15 19C15 19.75 15.21 20.46 15.58 21.06C16.27 22.22 17.54 23 19 23C20.46 23 21.73 22.22 22.42 21.06C22.79 20.46 23 19.75 23 19C23 16.79 21.21 15 19 15ZM21.07 18.57L18.94 20.54C18.8 20.67 18.61 20.74 18.43 20.74C18.24 20.74 18.05 20.67 17.9 20.52L16.91 19.53C16.62 19.24 16.62 18.76 16.91 18.47C17.2 18.18 17.68 18.18 17.97 18.47L18.45 18.95L20.05 17.47C20.35 17.19 20.83 17.21 21.11 17.51C21.39 17.81 21.37 18.28 21.07 18.57Z"
        fill="currentColor"
      />
      <Path
        d="M8.5 14.9999C8.24 14.9999 7.98 14.8899 7.79 14.7099C7.61 14.5199 7.5 14.2599 7.5 13.9999C7.5 13.7399 7.61 13.4799 7.79 13.2899C8.02 13.0599 8.37 12.9499 8.7 13.0199C8.76 13.0299 8.82 13.0499 8.88 13.0799C8.94 13.0999 9 13.1299 9.06 13.1699C9.11 13.2099 9.16 13.2499 9.21 13.2899C9.39 13.4799 9.5 13.7399 9.5 13.9999C9.5 14.2599 9.39 14.5199 9.21 14.7099C9.16 14.7499 9.11 14.7899 9.06 14.8299C9 14.8699 8.94 14.8999 8.88 14.9199C8.82 14.9499 8.76 14.9699 8.7 14.9799C8.63 14.9899 8.56 14.9999 8.5 14.9999Z"
        fill="currentColor"
      />
      <Path
        d="M12 14.9999C11.74 14.9999 11.48 14.8899 11.29 14.7099C11.11 14.5199 11 14.2599 11 13.9999C11 13.7399 11.11 13.48 11.29 13.29C11.67 12.92 12.34 12.92 12.71 13.29C12.89 13.48 13 13.7399 13 13.9999C13 14.2599 12.89 14.5199 12.71 14.7099C12.52 14.8899 12.26 14.9999 12 14.9999Z"
        fill="currentColor"
      />
      <Path
        d="M8.5 18.4999C8.24 18.4999 7.98 18.3899 7.79 18.2099C7.61 18.0199 7.5 17.7599 7.5 17.4999C7.5 17.2399 7.61 16.9799 7.79 16.7899C7.89 16.6999 7.99 16.6299 8.12 16.5799C8.49 16.4199 8.93 16.5099 9.21 16.7899C9.39 16.9799 9.5 17.2399 9.5 17.4999C9.5 17.7599 9.39 18.0199 9.21 18.2099C9.02 18.3899 8.76 18.4999 8.5 18.4999Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CalendarTickLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8 2V5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 2V5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.5 9.08997H20.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 19C22 19.75 21.79 20.46 21.42 21.06C20.73 22.22 19.46 23 18 23C16.99 23 16.07 22.63 15.37 22C15.06 21.74 14.79 21.42 14.58 21.06C14.21 20.46 14 19.75 14 19C14 16.79 15.79 15 18 15C19.2 15 20.27 15.53 21 16.36C21.62 17.07 22 17.99 22 19Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.4399 19L17.4299 19.99L19.5599 18.02"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21 8.5V16.36C20.27 15.53 19.2 15 18 15C15.79 15 14 16.79 14 19C14 19.75 14.21 20.46 14.58 21.06C14.79 21.42 15.06 21.74 15.37 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9955 13.7H12.0045"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.29431 13.7H8.30329"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.29431 16.7H8.30329"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const CalendarTickOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8 5.75C7.59 5.75 7.25 5.41 7.25 5V2C7.25 1.59 7.59 1.25 8 1.25C8.41 1.25 8.75 1.59 8.75 2V5C8.75 5.41 8.41 5.75 8 5.75Z"
        fill="currentColor"
      />
      <Path
        d="M16 5.75C15.59 5.75 15.25 5.41 15.25 5V2C15.25 1.59 15.59 1.25 16 1.25C16.41 1.25 16.75 1.59 16.75 2V5C16.75 5.41 16.41 5.75 16 5.75Z"
        fill="currentColor"
      />
      <Path
        d="M8.5 14.4999C8.24 14.4999 7.98 14.3899 7.79 14.2099C7.61 14.0199 7.5 13.7699 7.5 13.4999C7.5 13.3699 7.53 13.2399 7.58 13.1199C7.63 12.9999 7.7 12.89 7.79 12.79C8.16 12.42 8.83 12.42 9.21 12.79C9.39 12.98 9.5 13.2399 9.5 13.4999C9.5 13.5599 9.49 13.63 9.48 13.7C9.47 13.76 9.45 13.8199 9.42 13.8799C9.4 13.9399 9.37 13.9999 9.33 14.0599C9.29 14.1099 9.25 14.1599 9.21 14.2099C9.02 14.3899 8.76 14.4999 8.5 14.4999Z"
        fill="currentColor"
      />
      <Path
        d="M12 14.5001C11.87 14.5001 11.74 14.4701 11.62 14.4201C11.49 14.3701 11.39 14.3001 11.29 14.2101C11.11 14.0201 11 13.7701 11 13.5001C11 13.3701 11.03 13.2401 11.08 13.1201C11.13 13.0001 11.2 12.8901 11.29 12.7901C11.39 12.7001 11.49 12.6301 11.62 12.5801C11.99 12.4301 12.43 12.5101 12.71 12.7901C12.89 12.9801 13 13.2401 13 13.5001C13 13.5601 12.99 13.6301 12.98 13.7001C12.97 13.7601 12.95 13.8201 12.92 13.8801C12.9 13.9401 12.87 14.0001 12.83 14.0601C12.8 14.1101 12.75 14.1601 12.71 14.2101C12.52 14.3901 12.26 14.5001 12 14.5001Z"
        fill="currentColor"
      />
      <Path
        d="M8.5 18C8.37 18 8.24 17.97 8.12 17.92C7.99 17.87 7.88 17.8 7.79 17.71C7.7 17.62 7.63 17.51 7.58 17.38C7.53 17.26 7.5 17.13 7.5 17C7.5 16.87 7.53 16.74 7.58 16.62C7.63 16.49 7.7 16.38 7.79 16.29C7.88 16.2 7.99 16.13 8.12 16.08C8.36 15.98 8.64 15.97 8.88 16.08C9.01 16.13 9.12 16.2 9.21 16.29C9.3 16.38 9.37 16.49 9.42 16.62C9.47 16.74 9.5 16.87 9.5 17C9.5 17.13 9.47 17.26 9.42 17.38C9.37 17.51 9.3 17.62 9.21 17.71C9.12 17.8 9.01 17.87 8.88 17.92C8.76 17.97 8.63 18 8.5 18Z"
        fill="currentColor"
      />
      <Path
        d="M20.5 9.83984H3.5C3.09 9.83984 2.75 9.49984 2.75 9.08984C2.75 8.67984 3.09 8.33984 3.5 8.33984H20.5C20.91 8.33984 21.25 8.67984 21.25 9.08984C21.25 9.49984 20.91 9.83984 20.5 9.83984Z"
        fill="currentColor"
      />
      <Path
        d="M18 23.75C16.83 23.75 15.72 23.33 14.87 22.56C14.51 22.26 14.19 21.88 13.93 21.44C13.49 20.72 13.25 19.87 13.25 19C13.25 16.38 15.38 14.25 18 14.25C19.36 14.25 20.66 14.84 21.56 15.86C22.33 16.74 22.75 17.85 22.75 19C22.75 19.87 22.51 20.72 22.06 21.45C21.22 22.87 19.66 23.75 18 23.75ZM18 15.75C16.21 15.75 14.75 17.21 14.75 19C14.75 19.59 14.91 20.17 15.22 20.67C15.39 20.97 15.61 21.22 15.85 21.43C16.45 21.97 17.2 22.25 18 22.25C19.15 22.25 20.19 21.66 20.78 20.68C21.09 20.17 21.25 19.6 21.25 19C21.25 18.22 20.96 17.46 20.44 16.85C19.82 16.15 18.93 15.75 18 15.75Z"
        fill="currentColor"
      />
      <Path
        d="M17.4299 20.74C17.2399 20.74 17.0499 20.67 16.8999 20.52L15.9099 19.53C15.6199 19.24 15.6199 18.7601 15.9099 18.4701C16.1999 18.1801 16.6799 18.1801 16.9699 18.4701L17.4499 18.9501L19.0499 17.4701C19.3499 17.1901 19.8299 17.2101 20.1099 17.5101C20.3899 17.8101 20.3699 18.2901 20.0699 18.5701L17.9399 20.5401C17.7899 20.6701 17.6099 20.74 17.4299 20.74Z"
        fill="currentColor"
      />
      <Path
        d="M15.37 22.75H8C4.35 22.75 2.25 20.65 2.25 17V8.5C2.25 4.85 4.35 2.75 8 2.75H16C19.65 2.75 21.75 4.85 21.75 8.5V16.36C21.75 16.67 21.56 16.95 21.26 17.06C20.97 17.17 20.64 17.09 20.43 16.85C19.81 16.15 18.92 15.75 17.99 15.75C16.2 15.75 14.74 17.21 14.74 19C14.74 19.59 14.9 20.17 15.21 20.67C15.38 20.97 15.6 21.22 15.84 21.43C16.08 21.63 16.17 21.96 16.06 22.26C15.97 22.55 15.69 22.75 15.37 22.75ZM8 4.25C5.14 4.25 3.75 5.64 3.75 8.5V17C3.75 19.86 5.14 21.25 8 21.25H13.82C13.45 20.57 13.25 19.8 13.25 19C13.25 16.38 15.38 14.25 18 14.25C18.79 14.25 19.57 14.45 20.25 14.82V8.5C20.25 5.64 18.86 4.25 16 4.25H8Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CalendarTickTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8 2V5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 2V5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M3.5 9.08984H20.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 19C22 19.75 21.79 20.46 21.42 21.06C20.73 22.22 19.46 23 18 23C16.99 23 16.07 22.63 15.37 22C15.06 21.74 14.79 21.42 14.58 21.06C14.21 20.46 14 19.75 14 19C14 16.79 15.79 15 18 15C19.2 15 20.27 15.53 21 16.36C21.62 17.07 22 17.99 22 19Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.4404 19L17.4304 19.99L19.5604 18.02"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21 8.5V16.36C20.27 15.53 19.2 15 18 15C15.79 15 14 16.79 14 19C14 19.75 14.21 20.46 14.58 21.06C14.79 21.42 15.06 21.74 15.37 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M11.9955 13.7002H12.0045"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M8.29431 13.7002H8.30329"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M8.29492 16.7002H8.3039"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: CalendarTickBold,
  broken: CalendarTickBroken,
  bulk: CalendarTickBulk,
  linear: CalendarTickLinear,
  outline: CalendarTickOutline,
  twotone: CalendarTickTwotone,
};

export const CalendarTickIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default CalendarTickIcon;
