import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const CalendarAddBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20 9.83984H4C3.45 9.83984 3 10.2898 3 10.8398V16.9998C3 19.9998 4.5 21.9998 8 21.9998H12.93C13.62 21.9998 14.1 21.3298 13.88 20.6798C13.68 20.0998 13.51 19.4598 13.51 18.9998C13.51 15.9698 15.98 13.4998 19.01 13.4998C19.3 13.4998 19.59 13.5198 19.87 13.5698C20.47 13.6598 21.01 13.1898 21.01 12.5898V10.8498C21 10.2898 20.55 9.83984 20 9.83984ZM9.21 17.7098C9.11 17.7998 9 17.8698 8.88 17.9198C8.76 17.9698 8.63 17.9998 8.5 17.9998C8.37 17.9998 8.24 17.9698 8.12 17.9198C8 17.8698 7.89 17.7998 7.79 17.7098C7.61 17.5198 7.5 17.2598 7.5 16.9998C7.5 16.9398 7.51 16.8698 7.52 16.8098C7.53 16.7398 7.55 16.6798 7.58 16.6198C7.6 16.5598 7.63 16.4998 7.67 16.4398C7.7 16.3898 7.75 16.3398 7.79 16.2898C7.89 16.1998 8 16.1298 8.12 16.0798C8.36 15.9798 8.64 15.9798 8.88 16.0798C9 16.1298 9.11 16.1998 9.21 16.2898C9.25 16.3398 9.3 16.3898 9.33 16.4398C9.37 16.4998 9.4 16.5598 9.42 16.6198C9.45 16.6798 9.47 16.7398 9.48 16.8098C9.49 16.8698 9.5 16.9398 9.5 16.9998C9.5 17.2598 9.39 17.5198 9.21 17.7098ZM9.21 14.2098C9.11 14.2998 9 14.3698 8.88 14.4198C8.76 14.4698 8.63 14.4998 8.5 14.4998C8.37 14.4998 8.24 14.4698 8.12 14.4198C7.99 14.3698 7.89 14.2998 7.79 14.2098C7.61 14.0198 7.5 13.7598 7.5 13.4998C7.5 13.2398 7.61 12.9798 7.79 12.7898C7.89 12.6998 8 12.6298 8.12 12.5798C8.36 12.4798 8.64 12.4798 8.88 12.5798C9 12.6298 9.11 12.6998 9.21 12.7898C9.25 12.8398 9.3 12.8898 9.33 12.9398C9.37 12.9998 9.4 13.0598 9.42 13.1198C9.45 13.1798 9.47 13.2398 9.48 13.2998C9.49 13.3698 9.5 13.4398 9.5 13.4998C9.5 13.7598 9.39 14.0198 9.21 14.2098ZM12.71 14.2098C12.52 14.3898 12.27 14.4998 12 14.4998C11.87 14.4998 11.74 14.4698 11.62 14.4198C11.49 14.3698 11.39 14.2998 11.29 14.2098C11.11 14.0198 11 13.7598 11 13.4998C11 13.4398 11.01 13.3698 11.02 13.2998C11.03 13.2398 11.05 13.1798 11.08 13.1198C11.1 13.0598 11.13 12.9998 11.17 12.9398C11.21 12.8898 11.25 12.8398 11.29 12.7898C11.66 12.4198 12.33 12.4198 12.71 12.7898C12.75 12.8398 12.79 12.8898 12.83 12.9398C12.87 12.9998 12.9 13.0598 12.92 13.1198C12.95 13.1798 12.97 13.2398 12.98 13.2998C12.99 13.3698 13 13.4398 13 13.4998C13 13.7598 12.89 14.0198 12.71 14.2098Z"
        fill="currentColor"
      />
      <Path
        d="M21.83 16.17C20.27 14.61 17.73 14.61 16.17 16.17C14.61 17.73 14.61 20.27 16.17 21.83C17.73 23.39 20.27 23.39 21.83 21.83C23.39 20.27 23.39 17.73 21.83 16.17ZM21.07 19.56C20.94 19.7 20.75 19.78 20.54 19.78H19.8V20.56C19.8 20.77 19.72 20.95 19.58 21.09C19.44 21.23 19.26 21.31 19.05 21.31C18.64 21.31 18.3 20.97 18.3 20.56V19.78H17.55C17.14 19.78 16.8 19.45 16.8 19.03C16.8 18.62 17.14 18.28 17.55 18.28H18.3V17.57C18.3 17.16 18.63 16.82 19.05 16.82C19.46 16.82 19.8 17.16 19.8 17.57V18.28H20.54C20.96 18.28 21.29 18.62 21.29 19.03C21.29 19.24 21.21 19.43 21.07 19.56Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CalendarAddBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3 13.01V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5V16.36C20.27 15.53 19.2 15 18 15C15.79 15 14 16.79 14 19C14 19.75 14.21 20.46 14.58 21.06C14.79 21.42 15.06 21.74 15.37 22H8C4.5 22 3 20 3 17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
        d="M18 23C20.2091 23 22 21.2091 22 19C22 16.7909 20.2091 15 18 15C15.7909 15 14 16.7909 14 19C14 21.2091 15.7909 23 18 23Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.4898 19.0498H16.5098"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18 17.5898V20.5798"
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

const CalendarAddBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.7502 3.56V2C16.7502 1.59 16.4102 1.25 16.0002 1.25C15.5902 1.25 15.2502 1.59 15.2502 2V3.5H8.75024V2C8.75024 1.59 8.41024 1.25 8.00024 1.25C7.59024 1.25 7.25024 1.59 7.25024 2V3.56C4.55024 3.81 3.24023 5.42 3.04023 7.81C3.02023 8.1 3.26023 8.34 3.54023 8.34H20.4602C20.7502 8.34 20.9902 8.09 20.9602 7.81C20.7602 5.42 19.4502 3.81 16.7502 3.56Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M21 10.8401V12.5801C21 13.1901 20.46 13.6601 19.86 13.5601C19.58 13.5201 19.29 13.4901 19 13.4901C15.97 13.4901 13.5 15.9601 13.5 18.9901C13.5 19.4501 13.68 20.0901 13.87 20.6701C14.09 21.3201 13.61 21.9901 12.92 21.9901H8C4.5 21.9901 3 19.9901 3 16.9901V10.8301C3 10.2801 3.45 9.83008 4 9.83008H20C20.55 9.84008 21 10.2901 21 10.8401Z"
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
      <Path
        d="M21.83 16.17C20.27 14.61 17.73 14.61 16.17 16.17C14.61 17.73 14.61 20.27 16.17 21.83C17.73 23.39 20.27 23.39 21.83 21.83C23.39 20.27 23.39 17.73 21.83 16.17ZM21.07 19.56C20.94 19.7 20.75 19.78 20.54 19.78H19.8V20.56C19.8 20.77 19.72 20.95 19.58 21.09C19.44 21.23 19.26 21.31 19.05 21.31C18.64 21.31 18.3 20.97 18.3 20.56V19.78H17.55C17.14 19.78 16.8 19.45 16.8 19.03C16.8 18.62 17.14 18.28 17.55 18.28H18.3V17.57C18.3 17.16 18.63 16.82 19.05 16.82C19.46 16.82 19.8 17.16 19.8 17.57V18.28H20.54C20.96 18.28 21.29 18.62 21.29 19.03C21.29 19.24 21.21 19.43 21.07 19.56Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CalendarAddLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18 23C20.2091 23 22 21.2091 22 19C22 16.7909 20.2091 15 18 15C15.7909 15 14 16.7909 14 19C14 21.2091 15.7909 23 18 23Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.49 19.0499H16.51"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18 17.59V20.58"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
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

const CalendarAddOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8.5 14.5001C8.37 14.5001 8.24 14.4801 8.12 14.4201C8 14.3701 7.88999 14.3001 7.78999 14.2101C7.60999 14.0201 7.5 13.7601 7.5 13.5001C7.5 13.3701 7.53 13.2401 7.58 13.1201C7.63 13.0001 7.69999 12.8901 7.78999 12.7901C7.88999 12.7001 8 12.6301 8.12 12.5801C8.48 12.4301 8.93001 12.5101 9.21001 12.7901C9.30001 12.8901 9.37 13.0001 9.42 13.1201C9.47 13.2401 9.5 13.3701 9.5 13.5001C9.5 13.7601 9.39001 14.0201 9.21001 14.2101C9.02001 14.3901 8.76 14.5001 8.5 14.5001Z"
        fill="currentColor"
      />
      <Path
        d="M12 14.4999C11.74 14.4999 11.48 14.3899 11.29 14.2099C11.2 14.1099 11.13 13.9999 11.08 13.8799C11.03 13.7599 11 13.6299 11 13.4999C11 13.2399 11.11 12.9799 11.29 12.7899C11.57 12.5099 12.01 12.4199 12.38 12.5799C12.5 12.6299 12.61 12.6999 12.71 12.7899C12.89 12.9799 13 13.2399 13 13.4999C13 13.6299 12.98 13.7599 12.92 13.8799C12.87 13.9999 12.8 14.1099 12.71 14.2099C12.61 14.2999 12.5 14.3699 12.38 14.4199C12.26 14.4799 12.13 14.4999 12 14.4999Z"
        fill="currentColor"
      />
      <Path
        d="M8.5 17.9999C8.37 17.9999 8.24 17.9699 8.12 17.9199C8 17.8699 7.88999 17.7999 7.78999 17.7099C7.60999 17.5199 7.5 17.2699 7.5 16.9999C7.5 16.8699 7.53 16.7399 7.58 16.6199C7.63 16.4899 7.69999 16.3899 7.78999 16.2899C7.88999 16.1999 8 16.1299 8.12 16.0799C8.48 15.9199 8.93001 16.0099 9.21001 16.2899C9.30001 16.3899 9.37 16.4899 9.42 16.6199C9.47 16.7399 9.5 16.8699 9.5 16.9999C9.5 17.2699 9.39001 17.5199 9.21001 17.7099C9.02001 17.8899 8.76 17.9999 8.5 17.9999Z"
        fill="currentColor"
      />
      <Path
        d="M20.5 9.83984H3.5C3.09 9.83984 2.75 9.49984 2.75 9.08984C2.75 8.67984 3.09 8.33984 3.5 8.33984H20.5C20.91 8.33984 21.25 8.67984 21.25 9.08984C21.25 9.49984 20.91 9.83984 20.5 9.83984Z"
        fill="currentColor"
      />
      <Path
        d="M18 23.75C15.38 23.75 13.25 21.62 13.25 19C13.25 16.38 15.38 14.25 18 14.25C20.62 14.25 22.75 16.38 22.75 19C22.75 21.62 20.62 23.75 18 23.75ZM18 15.75C16.21 15.75 14.75 17.21 14.75 19C14.75 20.79 16.21 22.25 18 22.25C19.79 22.25 21.25 20.79 21.25 19C21.25 17.21 19.79 15.75 18 15.75Z"
        fill="currentColor"
      />
      <Path
        d="M19.49 19.7998H16.5C16.09 19.7998 15.75 19.4598 15.75 19.0498C15.75 18.6398 16.09 18.2998 16.5 18.2998H19.49C19.9 18.2998 20.24 18.6398 20.24 19.0498C20.24 19.4598 19.91 19.7998 19.49 19.7998Z"
        fill="currentColor"
      />
      <Path
        d="M18 21.3298C17.59 21.3298 17.25 20.9898 17.25 20.5798V17.5898C17.25 17.1798 17.59 16.8398 18 16.8398C18.41 16.8398 18.75 17.1798 18.75 17.5898V20.5798C18.75 20.9898 18.41 21.3298 18 21.3298Z"
        fill="currentColor"
      />
      <Path
        d="M15.37 22.75H8C4.35 22.75 2.25 20.65 2.25 17V8.5C2.25 4.85 4.35 2.75 8 2.75H16C19.65 2.75 21.75 4.85 21.75 8.5V16.36C21.75 16.67 21.56 16.95 21.26 17.06C20.97 17.17 20.64 17.09 20.43 16.85C19.81 16.15 18.92 15.75 17.99 15.75C16.2 15.75 14.74 17.21 14.74 19C14.74 19.59 14.9 20.17 15.21 20.67C15.38 20.97 15.6 21.22 15.84 21.43C16.08 21.63 16.17 21.96 16.06 22.26C15.97 22.55 15.69 22.75 15.37 22.75ZM8 4.25C5.14 4.25 3.75 5.64 3.75 8.5V17C3.75 19.86 5.14 21.25 8 21.25H13.82C13.45 20.57 13.25 19.8 13.25 19C13.25 16.38 15.38 14.25 18 14.25C18.79 14.25 19.57 14.45 20.25 14.82V8.5C20.25 5.64 18.86 4.25 16 4.25H8Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CalendarAddTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18 23C20.2091 23 22 21.2091 22 19C22 16.7909 20.2091 15 18 15C15.7909 15 14 16.7909 14 19C14 21.2091 15.7909 23 18 23Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.4898 19.0498H16.5098"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18 17.5898V20.5798"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
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
  bold: CalendarAddBold,
  broken: CalendarAddBroken,
  bulk: CalendarAddBulk,
  linear: CalendarAddLinear,
  outline: CalendarAddOutline,
  twotone: CalendarAddTwotone,
};

export const CalendarAddIcon = ({
  variant = "linear",
  ...props
}: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
