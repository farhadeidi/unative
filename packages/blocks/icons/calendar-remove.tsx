import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const CalendarRemoveBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20 9.83984H4C3.45 9.83984 3 10.2898 3 10.8398V16.9998C3 19.9998 4.5 21.9998 8 21.9998H12.93C13.62 21.9998 14.1 21.3298 13.88 20.6798C13.68 20.0998 13.51 19.4598 13.51 18.9998C13.51 15.9698 15.98 13.4998 19.01 13.4998C19.3 13.4998 19.59 13.5198 19.87 13.5698C20.47 13.6598 21.01 13.1898 21.01 12.5898V10.8498C21 10.2898 20.55 9.83984 20 9.83984ZM9.21 17.7098C9.02 17.8898 8.76 17.9998 8.5 17.9998C8.37 17.9998 8.24 17.9698 8.12 17.9198C8 17.8698 7.89 17.7998 7.79 17.7098C7.61 17.5198 7.5 17.2698 7.5 16.9998C7.5 16.8698 7.53 16.7398 7.58 16.6198C7.63 16.4898 7.7 16.3898 7.79 16.2898C7.89 16.1998 8 16.1298 8.12 16.0798C8.48 15.9198 8.93 16.0098 9.21 16.2898C9.3 16.3898 9.37 16.4898 9.42 16.6198C9.47 16.7398 9.5 16.8698 9.5 16.9998C9.5 17.2698 9.39 17.5198 9.21 17.7098ZM9.21 14.2098C9.02 14.3898 8.76 14.4998 8.5 14.4998C8.37 14.4998 8.24 14.4798 8.12 14.4198C8 14.3698 7.89 14.2998 7.79 14.2098C7.61 14.0198 7.5 13.7598 7.5 13.4998C7.5 13.3698 7.53 13.2398 7.58 13.1198C7.63 12.9998 7.7 12.8898 7.79 12.7898C7.89 12.6998 8 12.6298 8.12 12.5798C8.48 12.4298 8.93 12.5098 9.21 12.7898C9.3 12.8898 9.37 12.9998 9.42 13.1198C9.47 13.2398 9.5 13.3698 9.5 13.4998C9.5 13.7598 9.39 14.0198 9.21 14.2098ZM12.92 13.8798C12.87 13.9998 12.8 14.1098 12.71 14.2098C12.61 14.2998 12.5 14.3698 12.38 14.4198C12.26 14.4798 12.13 14.4998 12 14.4998C11.74 14.4998 11.48 14.3898 11.29 14.2098C11.2 14.1098 11.13 13.9998 11.08 13.8798C11.03 13.7598 11 13.6298 11 13.4998C11 13.2398 11.11 12.9798 11.29 12.7898C11.57 12.5098 12.01 12.4198 12.38 12.5798C12.5 12.6298 12.61 12.6998 12.71 12.7898C12.89 12.9798 13 13.2398 13 13.4998C13 13.6298 12.98 13.7598 12.92 13.8798Z"
        fill="currentColor"
      />
      <Path
        d="M19 15C16.79 15 15 16.79 15 19C15 21.21 16.79 23 19 23C21.21 23 23 21.21 23 19C23 16.79 21.21 15 19 15ZM20.6 20.64C20.45 20.79 20.26 20.86 20.07 20.86C19.88 20.86 19.69 20.79 19.54 20.64L19.01 20.11L18.46 20.66C18.31 20.81 18.12 20.88 17.93 20.88C17.74 20.88 17.55 20.81 17.4 20.66C17.11 20.37 17.11 19.89 17.4 19.6L17.95 19.05L17.42 18.52C17.13 18.23 17.13 17.75 17.42 17.46C17.71 17.17 18.19 17.17 18.48 17.46L19.01 18L19.51 17.5C19.8 17.21 20.28 17.21 20.57 17.5C20.86 17.79 20.86 18.27 20.57 18.56L20.07 19.06L20.6 19.59C20.89 19.88 20.89 20.35 20.6 20.64Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CalendarRemoveBroken = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M18 23C20.2091 23 22 21.2091 22 19C22 16.7909 20.2091 15 18 15C15.7909 15 14 16.7909 14 19C14 21.2091 15.7909 23 18 23Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.0692 20.11L16.9492 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.0497 18.02L16.9297 20.14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 13.01V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5V16.36C20.27 15.53 19.2 15 18 15C15.79 15 14 16.79 14 19C14 19.75 14.21 20.46 14.58 21.06C14.79 21.42 15.06 21.74 15.37 22H8C4.5 22 3 20 3 17"
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

const CalendarRemoveBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19 15C16.79 15 15 16.79 15 19C15 21.21 16.79 23 19 23C21.21 23 23 21.21 23 19C23 16.79 21.21 15 19 15ZM20.6 20.64C20.45 20.79 20.26 20.86 20.07 20.86C19.88 20.86 19.69 20.79 19.54 20.64L19.01 20.11L18.46 20.66C18.31 20.81 18.12 20.88 17.93 20.88C17.74 20.88 17.55 20.81 17.4 20.66C17.11 20.37 17.11 19.89 17.4 19.6L17.95 19.05L17.42 18.52C17.13 18.23 17.13 17.75 17.42 17.46C17.71 17.17 18.19 17.17 18.48 17.46L19.01 17.99L19.51 17.49C19.8 17.2 20.28 17.2 20.57 17.49C20.86 17.78 20.86 18.26 20.57 18.55L20.07 19.05L20.6 19.58C20.89 19.88 20.89 20.35 20.6 20.64Z"
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

const CalendarRemoveLinear = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M19.07 20.11L16.95 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.0499 18.02L16.9299 20.14"
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

const CalendarRemoveOutline = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M8.5 14.4999C8.24 14.4999 7.97999 14.3899 7.78999 14.2099C7.74999 14.1599 7.7 14.1099 7.67 14.0599C7.63 13.9999 7.6 13.9399 7.58 13.8799C7.55 13.8199 7.53 13.76 7.52 13.7C7.51 13.63 7.5 13.5599 7.5 13.4999C7.5 13.2399 7.60999 12.98 7.78999 12.79C8.15999 12.42 8.83001 12.42 9.21001 12.79C9.39001 12.98 9.5 13.2399 9.5 13.4999C9.5 13.5599 9.49 13.63 9.48 13.7C9.47 13.76 9.45 13.8199 9.42 13.8799C9.4 13.9399 9.37 13.9999 9.33 14.0599C9.29 14.1099 9.25001 14.1599 9.21001 14.2099C9.02001 14.3899 8.76 14.4999 8.5 14.4999Z"
        fill="currentColor"
      />
      <Path
        d="M12 14.4999C11.87 14.4999 11.74 14.4699 11.62 14.4199C11.49 14.3699 11.38 14.2999 11.29 14.2099C11.25 14.1599 11.2 14.1099 11.17 14.0599C11.13 13.9999 11.1 13.9399 11.08 13.8799C11.05 13.8199 11.03 13.7599 11.02 13.6999C11.01 13.6299 11 13.5599 11 13.4999C11 13.2399 11.11 12.9799 11.29 12.7899C11.38 12.6999 11.49 12.6299 11.62 12.5799C11.98 12.4199 12.43 12.5099 12.71 12.7899C12.89 12.9799 13 13.2399 13 13.4999C13 13.5599 12.99 13.6299 12.98 13.6999C12.97 13.7599 12.95 13.8199 12.92 13.8799C12.9 13.9399 12.87 13.9999 12.83 14.0599C12.79 14.1099 12.75 14.1599 12.71 14.2099C12.52 14.3899 12.26 14.4999 12 14.4999Z"
        fill="currentColor"
      />
      <Path
        d="M8.5 18C8.23 18 7.97999 17.89 7.78999 17.71C7.60999 17.52 7.5 17.26 7.5 17C7.5 16.74 7.60999 16.48 7.78999 16.29C7.83999 16.25 7.89 16.2 7.94 16.17C8 16.13 8.06 16.1 8.12 16.08C8.18 16.05 8.24 16.03 8.3 16.02C8.5 15.98 8.7 16 8.88 16.08C9.01 16.13 9.11001 16.2 9.21001 16.29C9.39001 16.48 9.5 16.74 9.5 17C9.5 17.26 9.39001 17.52 9.21001 17.71C9.11001 17.8 9.01 17.87 8.88 17.92C8.76 17.97 8.63 18 8.5 18Z"
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
        d="M19.0704 20.8599C18.8804 20.8599 18.6904 20.79 18.5404 20.64L16.4304 18.5299C16.1404 18.2399 16.1404 17.7599 16.4304 17.4699C16.7204 17.1799 17.2004 17.1799 17.4904 17.4699L19.6004 19.5799C19.8904 19.8699 19.8904 20.35 19.6004 20.64C19.4504 20.79 19.2604 20.8599 19.0704 20.8599Z"
        fill="currentColor"
      />
      <Path
        d="M16.9301 20.89C16.7401 20.89 16.5501 20.82 16.4001 20.67C16.1101 20.38 16.1101 19.9 16.4001 19.61L18.5101 17.5C18.8001 17.21 19.2801 17.21 19.5701 17.5C19.8601 17.79 19.8601 18.27 19.5701 18.56L17.4601 20.67C17.3101 20.81 17.1201 20.89 16.9301 20.89Z"
        fill="currentColor"
      />
      <Path
        d="M15.37 22.75H8C4.35 22.75 2.25 20.65 2.25 17V8.5C2.25 4.85 4.35 2.75 8 2.75H16C19.65 2.75 21.75 4.85 21.75 8.5V16.36C21.75 16.67 21.56 16.95 21.26 17.06C20.97 17.17 20.64 17.09 20.43 16.85C19.81 16.15 18.92 15.75 17.99 15.75C16.2 15.75 14.74 17.21 14.74 19C14.74 19.59 14.9 20.17 15.21 20.67C15.38 20.97 15.6 21.22 15.84 21.43C16.08 21.63 16.17 21.96 16.06 22.26C15.97 22.55 15.69 22.75 15.37 22.75ZM8 4.25C5.14 4.25 3.75 5.64 3.75 8.5V17C3.75 19.86 5.14 21.25 8 21.25H13.82C13.45 20.57 13.25 19.8 13.25 19C13.25 16.38 15.38 14.25 18 14.25C18.79 14.25 19.57 14.45 20.25 14.82V8.5C20.25 5.64 18.86 4.25 16 4.25H8Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CalendarRemoveTwotone = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M19.0692 20.11L16.9492 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.0497 18.02L16.9297 20.14"
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
  bold: CalendarRemoveBold,
  broken: CalendarRemoveBroken,
  bulk: CalendarRemoveBulk,
  linear: CalendarRemoveLinear,
  outline: CalendarRemoveOutline,
  twotone: CalendarRemoveTwotone,
};

export const CalendarRemoveIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
