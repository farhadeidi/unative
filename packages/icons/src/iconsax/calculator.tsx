import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const CalculatorBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16 2H8C5.24 2 3 4.24 3 7V17C3 19.76 5.24 22 8 22H16C18.76 22 21 19.76 21 17V7C21 4.24 18.76 2 16 2ZM8.86 18.63C8.67 18.82 8.42 18.92 8.16 18.92C7.89 18.92 7.64 18.82 7.45 18.63C7.26 18.44 7.15 18.19 7.15 17.92C7.15 17.66 7.26 17.4 7.45 17.21C7.54 17.12 7.65 17.05 7.77 17C8.02 16.9 8.29 16.9 8.54 17C8.6 17.02 8.66 17.05 8.71 17.09C8.77 17.12 8.82 17.17 8.86 17.21C9.05 17.4 9.16 17.66 9.16 17.92C9.16 18.19 9.05 18.44 8.86 18.63ZM7.15 13.92C7.15 13.79 7.18 13.66 7.23 13.54C7.28 13.41 7.35 13.31 7.45 13.21C7.68 12.98 8.03 12.87 8.35 12.94C8.41 12.95 8.48 12.97 8.54 13C8.6 13.02 8.66 13.05 8.71 13.09C8.77 13.12 8.82 13.17 8.86 13.21C8.95 13.31 9.03 13.41 9.08 13.54C9.13 13.66 9.15 13.79 9.15 13.92C9.15 14.19 9.05 14.44 8.86 14.63C8.67 14.82 8.42 14.92 8.16 14.92C8.02 14.92 7.89 14.89 7.77 14.84C7.65 14.79 7.54 14.72 7.45 14.63C7.26 14.44 7.15 14.19 7.15 13.92ZM12.86 18.63C12.77 18.72 12.66 18.79 12.54 18.84C12.42 18.89 12.29 18.92 12.15 18.92C11.89 18.92 11.64 18.82 11.45 18.63C11.26 18.44 11.15 18.19 11.15 17.92C11.15 17.85 11.16 17.79 11.17 17.72C11.19 17.66 11.21 17.6 11.23 17.54C11.26 17.48 11.29 17.42 11.32 17.36C11.36 17.31 11.4 17.26 11.45 17.21C11.54 17.12 11.65 17.05 11.77 17C12.14 16.85 12.58 16.93 12.86 17.21C13.05 17.4 13.15 17.66 13.15 17.92C13.15 18.19 13.05 18.44 12.86 18.63ZM12.86 14.63C12.67 14.82 12.42 14.92 12.15 14.92C11.89 14.92 11.64 14.82 11.45 14.63C11.26 14.44 11.15 14.19 11.15 13.92C11.15 13.66 11.26 13.4 11.45 13.21C11.82 12.84 12.49 12.84 12.86 13.21C12.95 13.31 13.03 13.41 13.08 13.54C13.13 13.66 13.15 13.79 13.15 13.92C13.15 14.19 13.05 14.44 12.86 14.63ZM9 10.46C7.97 10.46 7.12 9.62 7.12 8.58V7.58C7.12 6.55 7.96 5.7 9 5.7H15C16.03 5.7 16.88 6.54 16.88 7.58V8.58C16.88 9.61 16.04 10.46 15 10.46H9ZM16.86 18.63C16.67 18.82 16.42 18.92 16.15 18.92C16.02 18.92 15.89 18.89 15.77 18.84C15.65 18.79 15.54 18.72 15.45 18.63C15.26 18.44 15.16 18.19 15.16 17.92C15.16 17.66 15.26 17.4 15.45 17.21C15.72 16.93 16.17 16.85 16.54 17C16.66 17.05 16.77 17.12 16.86 17.21C17.05 17.4 17.15 17.66 17.15 17.92C17.15 18.19 17.05 18.44 16.86 18.63ZM17.08 14.3C17.03 14.42 16.96 14.53 16.86 14.63C16.67 14.82 16.42 14.92 16.15 14.92C15.89 14.92 15.64 14.82 15.45 14.63C15.26 14.44 15.15 14.19 15.15 13.92C15.15 13.66 15.26 13.4 15.45 13.21C15.82 12.84 16.49 12.84 16.86 13.21C17.05 13.4 17.16 13.66 17.16 13.92C17.16 14.05 17.13 14.18 17.08 14.3Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CalculatorBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3 12.97V15C3 20 5 22 10 22H14C19 22 21 20 21 15V9C21 4 19 2 14 2H10C5 2 3 4 3 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.5 7.58008V8.58008C16.5 9.40008 15.83 10.0801 15 10.0801H9C8.18 10.0801 7.5 9.41008 7.5 8.58008V7.58008C7.5 6.76008 8.17 6.08008 9 6.08008H15C15.83 6.08008 16.5 6.75008 16.5 7.58008Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.13612 14H8.14767"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9955 14H12.007"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.8549 14H15.8664"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.13612 17.5H8.14767"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9955 17.5H12.007"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.8549 17.5H15.8664"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const CalculatorBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8 22H16C18.76 22 21 19.76 21 17V7C21 4.24 18.76 2 16 2H8C5.24 2 3 4.24 3 7V17C3 19.76 5.24 22 8 22Z"
        fill="currentColor"
      />
      <Path
        d="M14.9991 5.70996H8.99914C7.96914 5.70996 7.11914 6.54996 7.11914 7.58996V8.58996C7.11914 9.61996 7.95914 10.47 8.99914 10.47H14.9991C16.0291 10.47 16.8791 9.62996 16.8791 8.58996V7.58996C16.8791 6.54996 16.0391 5.70996 14.9991 5.70996Z"
        fill="currentColor"
      />
      <Path
        d="M8.16039 14.9201C8.02039 14.9201 7.89039 14.8901 7.77039 14.8401C7.65039 14.7901 7.54039 14.7201 7.45039 14.6301C7.26039 14.4401 7.15039 14.1901 7.15039 13.9201C7.15039 13.7901 7.18039 13.6601 7.23039 13.5401C7.28039 13.4101 7.35039 13.3101 7.45039 13.2101C7.68039 12.9801 8.03039 12.8701 8.35039 12.9401C8.41039 12.9501 8.48039 12.9701 8.54039 13.0001C8.60039 13.0201 8.66039 13.0501 8.71039 13.0901C8.77039 13.1201 8.82039 13.1701 8.86039 13.2101C8.95039 13.3101 9.03039 13.4101 9.08039 13.5401C9.13039 13.6601 9.15039 13.7901 9.15039 13.9201C9.15039 14.1901 9.05039 14.4401 8.86039 14.6301C8.67039 14.8201 8.42039 14.9201 8.16039 14.9201Z"
        fill="currentColor"
      />
      <Path
        d="M12.1504 14.9201C11.8904 14.9201 11.6404 14.8201 11.4504 14.6301C11.2604 14.4401 11.1504 14.1901 11.1504 13.9201C11.1504 13.6601 11.2604 13.4001 11.4504 13.2101C11.8204 12.8401 12.4904 12.8401 12.8604 13.2101C12.9504 13.3101 13.0304 13.4101 13.0804 13.5401C13.1304 13.6601 13.1504 13.7901 13.1504 13.9201C13.1504 14.1901 13.0504 14.4401 12.8604 14.6301C12.6704 14.8201 12.4204 14.9201 12.1504 14.9201Z"
        fill="currentColor"
      />
      <Path
        d="M16.1504 14.9201C15.8904 14.9201 15.6404 14.8201 15.4504 14.6301C15.2604 14.4401 15.1504 14.1901 15.1504 13.9201C15.1504 13.6601 15.2604 13.4001 15.4504 13.2101C15.8204 12.8401 16.4904 12.8401 16.8604 13.2101C17.0504 13.4001 17.1604 13.6601 17.1604 13.9201C17.1604 14.0501 17.1304 14.1801 17.0804 14.3001C17.0304 14.4201 16.9604 14.5301 16.8604 14.6301C16.6704 14.8201 16.4204 14.9201 16.1504 14.9201Z"
        fill="currentColor"
      />
      <Path
        d="M8.16039 18.92C7.89039 18.92 7.64039 18.82 7.45039 18.63C7.26039 18.44 7.15039 18.19 7.15039 17.92C7.15039 17.66 7.26039 17.4 7.45039 17.21C7.54039 17.12 7.65039 17.05 7.77039 17C8.02039 16.9 8.29039 16.9 8.54039 17C8.60039 17.02 8.66039 17.05 8.71039 17.09C8.77039 17.12 8.82039 17.17 8.86039 17.21C9.05039 17.4 9.16039 17.66 9.16039 17.92C9.16039 18.19 9.05039 18.44 8.86039 18.63C8.67039 18.82 8.42039 18.92 8.16039 18.92Z"
        fill="currentColor"
      />
      <Path
        d="M12.1504 18.92C11.8904 18.92 11.6404 18.82 11.4504 18.63C11.2604 18.44 11.1504 18.19 11.1504 17.92C11.1504 17.85 11.1604 17.79 11.1704 17.72C11.1904 17.66 11.2104 17.6 11.2304 17.54C11.2604 17.48 11.2904 17.42 11.3204 17.36C11.3604 17.31 11.4004 17.26 11.4504 17.21C11.5404 17.12 11.6504 17.05 11.7704 17C12.1404 16.85 12.5804 16.93 12.8604 17.21C13.0504 17.4 13.1504 17.66 13.1504 17.92C13.1504 18.19 13.0504 18.44 12.8604 18.63C12.7704 18.72 12.6604 18.79 12.5404 18.84C12.4204 18.89 12.2904 18.92 12.1504 18.92Z"
        fill="currentColor"
      />
      <Path
        d="M16.1502 18.92C16.0202 18.92 15.8902 18.89 15.7702 18.84C15.6502 18.79 15.5402 18.72 15.4502 18.63C15.2602 18.44 15.1602 18.19 15.1602 17.92C15.1602 17.66 15.2602 17.4 15.4502 17.21C15.7202 16.93 16.1702 16.85 16.5402 17C16.6602 17.05 16.7702 17.12 16.8602 17.21C17.0502 17.4 17.1502 17.66 17.1502 17.92C17.1502 18.19 17.0502 18.44 16.8602 18.63C16.6702 18.82 16.4202 18.92 16.1502 18.92Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CalculatorLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10 22H14C19 22 21 20 21 15V9C21 4 19 2 14 2H10C5 2 3 4 3 9V15C3 20 5 22 10 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.5 7.57996V8.57996C16.5 9.39996 15.83 10.08 15 10.08H9C8.18 10.08 7.5 9.40996 7.5 8.57996V7.57996C7.5 6.75996 8.17 6.07996 9 6.07996H15C15.83 6.07996 16.5 6.74996 16.5 7.57996Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.13612 14H8.14767"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9952 14H12.0068"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.8544 14H15.8659"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.13612 17.5H8.14767"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9952 17.5H12.0068"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.8544 17.5H15.8659"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const CalculatorOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14 22.75H10C4.57 22.75 2.25 20.43 2.25 15V9C2.25 3.57 4.57 1.25 10 1.25H14C19.43 1.25 21.75 3.57 21.75 9V15C21.75 20.43 19.43 22.75 14 22.75ZM10 2.75C5.39 2.75 3.75 4.39 3.75 9V15C3.75 19.61 5.39 21.25 10 21.25H14C18.61 21.25 20.25 19.61 20.25 15V9C20.25 4.39 18.61 2.75 14 2.75H10Z"
        fill="currentColor"
      />
      <Path
        d="M15 10.8301H9C7.76 10.8301 6.75 9.82008 6.75 8.58008V7.58008C6.75 6.34008 7.76 5.33008 9 5.33008H15C16.24 5.33008 17.25 6.34008 17.25 7.58008V8.58008C17.25 9.82008 16.24 10.8301 15 10.8301ZM9 6.83008C8.59 6.83008 8.25 7.17008 8.25 7.58008V8.58008C8.25 8.99008 8.59 9.33008 9 9.33008H15C15.41 9.33008 15.75 8.99008 15.75 8.58008V7.58008C15.75 7.17008 15.41 6.83008 15 6.83008H9Z"
        fill="currentColor"
      />
      <Path
        d="M8.15016 14.9201C8.02016 14.9201 7.89016 14.8901 7.77016 14.8401C7.65016 14.7901 7.54016 14.7201 7.45016 14.6301C7.26016 14.4401 7.16016 14.1901 7.16016 13.9201C7.16016 13.7901 7.18016 13.6601 7.23016 13.5401C7.28016 13.4101 7.35016 13.3101 7.45016 13.2101C7.49016 13.1701 7.54016 13.1201 7.60016 13.0901C7.65016 13.0501 7.71016 13.0201 7.77016 13.0001C7.83016 12.9701 7.90016 12.9501 7.96016 12.9401C8.28016 12.8701 8.63016 12.9801 8.86016 13.2101C8.95016 13.3001 9.03016 13.4101 9.08016 13.5401C9.13016 13.6601 9.16016 13.7901 9.16016 13.9201C9.16016 14.1901 9.05016 14.4401 8.86016 14.6301C8.67016 14.8201 8.42016 14.9201 8.15016 14.9201Z"
        fill="currentColor"
      />
      <Path
        d="M12.1602 14.9199C11.8902 14.9199 11.6402 14.8199 11.4502 14.6299C11.2602 14.4399 11.1602 14.1899 11.1602 13.9199C11.1602 13.7899 11.1802 13.6599 11.2302 13.5399C11.2802 13.4099 11.3502 13.3099 11.4502 13.2099C11.4902 13.1699 11.5402 13.1199 11.6002 13.0899C11.6502 13.0499 11.7102 13.0199 11.7702 12.9999C11.8302 12.9699 11.9002 12.9499 11.9602 12.9399C12.1502 12.8999 12.3502 12.9199 12.5402 12.9999C12.6602 13.0499 12.7702 13.1199 12.8602 13.2099C12.9502 13.3099 13.0302 13.4099 13.0802 13.5399C13.1302 13.6599 13.1602 13.7899 13.1602 13.9199C13.1602 14.1899 13.0502 14.4399 12.8602 14.6299C12.6702 14.8199 12.4202 14.9199 12.1602 14.9199Z"
        fill="currentColor"
      />
      <Path
        d="M16.1502 14.9201C16.0202 14.9201 15.8902 14.8901 15.7702 14.8401C15.6502 14.7901 15.5402 14.7201 15.4502 14.6301C15.3502 14.5301 15.2802 14.4201 15.2302 14.3001C15.1802 14.1801 15.1602 14.0501 15.1602 13.9201C15.1602 13.7901 15.1802 13.6601 15.2302 13.5401C15.2802 13.4101 15.3502 13.3101 15.4502 13.2101C15.8202 12.8401 16.4902 12.8401 16.8602 13.2101C17.0502 13.4001 17.1602 13.6601 17.1602 13.9201C17.1602 14.1901 17.0502 14.4401 16.8602 14.6301C16.6802 14.8101 16.4302 14.9201 16.1502 14.9201Z"
        fill="currentColor"
      />
      <Path
        d="M8.16039 18.9199C7.89039 18.9199 7.64039 18.8199 7.45039 18.6299C7.26039 18.4399 7.15039 18.1899 7.15039 17.9199C7.15039 17.6599 7.26039 17.3999 7.45039 17.2099C7.49039 17.1699 7.55039 17.1199 7.60039 17.0899C7.65039 17.0499 7.71039 17.0199 7.77039 16.9999C7.83039 16.9699 7.90039 16.9499 7.96039 16.9399C8.29039 16.8799 8.63039 16.9799 8.86039 17.2099C8.91039 17.2599 8.95039 17.3099 8.99039 17.3599C9.02039 17.4199 9.05039 17.4799 9.08039 17.5399C9.10039 17.5999 9.12039 17.6599 9.14039 17.7199C9.15039 17.7899 9.16039 17.8499 9.16039 17.9199C9.16039 18.1899 9.05039 18.4399 8.86039 18.6299C8.67039 18.8199 8.42039 18.9199 8.16039 18.9199Z"
        fill="currentColor"
      />
      <Path
        d="M12.1604 18.9199C11.8904 18.9199 11.6404 18.8199 11.4504 18.6299C11.2604 18.4399 11.1504 18.1899 11.1504 17.9199C11.1504 17.6599 11.2604 17.3999 11.4504 17.2099C11.6804 16.9799 12.0304 16.8799 12.3504 16.9399C12.4104 16.9499 12.4804 16.9699 12.5404 16.9999C12.6004 17.0199 12.6604 17.0499 12.7104 17.0899C12.7604 17.1199 12.8104 17.1699 12.8604 17.2099C13.0504 17.3999 13.1504 17.6599 13.1504 17.9199C13.1504 18.1899 13.0504 18.4399 12.8604 18.6299C12.6704 18.8199 12.4204 18.9199 12.1604 18.9199Z"
        fill="currentColor"
      />
      <Path
        d="M16.1502 18.92C15.8902 18.92 15.6402 18.82 15.4502 18.63C15.2602 18.44 15.1602 18.19 15.1602 17.92C15.1602 17.66 15.2602 17.4 15.4502 17.21C15.5402 17.12 15.6502 17.05 15.7702 17C16.1402 16.85 16.5902 16.93 16.8602 17.21C17.0502 17.4 17.1502 17.66 17.1502 17.92C17.1502 18.19 17.0502 18.44 16.8602 18.63C16.7702 18.72 16.6602 18.79 16.5402 18.84C16.4202 18.89 16.2902 18.92 16.1502 18.92Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CalculatorTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10 22H14C19 22 21 20 21 15V9C21 4 19 2 14 2H10C5 2 3 4 3 9V15C3 20 5 22 10 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M16.5 7.58008V8.58008C16.5 9.40008 15.83 10.0801 15 10.0801H9C8.18 10.0801 7.5 9.41008 7.5 8.58008V7.58008C7.5 6.76008 8.17 6.08008 9 6.08008H15C15.83 6.08008 16.5 6.75008 16.5 7.58008Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M8.13612 14H8.14767"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M11.9955 14H12.007"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M15.8549 14H15.8664"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M8.13612 17.5H8.14767"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M11.9955 17.5H12.007"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M15.8549 17.5H15.8664"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: CalculatorBold,
  broken: CalculatorBroken,
  bulk: CalculatorBulk,
  linear: CalculatorLinear,
  outline: CalculatorOutline,
  twotone: CalculatorTwotone,
};

export const CalculatorIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default CalculatorIcon;
