import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const ColorSwatchBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22.0009 16.5V19.5C22.0009 20.88 20.8809 22 19.5009 22H12.3609C11.4709 22 11.0309 20.93 11.6509 20.3L17.5209 14.3C17.7109 14.11 17.9709 14 18.2309 14H19.5009C20.8809 14 22.0009 15.12 22.0009 16.5Z"
        fill="currentColor"
      />
      <Path
        d="M18.3702 11.2895L15.6602 13.9995L13.2002 16.4495C12.5702 17.0795 11.4902 16.6395 11.4902 15.7495C11.4902 12.5395 11.4902 7.25953 11.4902 7.25953C11.4902 6.98953 11.6002 6.73953 11.7802 6.54953L12.7002 5.62953C13.6802 4.64953 15.2602 4.64953 16.2402 5.62953L18.3602 7.74953C19.3502 8.72953 19.3502 10.3095 18.3702 11.2895Z"
        fill="currentColor"
      />
      <Path
        d="M7.5 2H4.5C3 2 2 3 2 4.5V18C2 18.27 2.03 18.54 2.08 18.8C2.11 18.93 2.14 19.06 2.18 19.19C2.23 19.34 2.28 19.49 2.34 19.63C2.35 19.64 2.35 19.65 2.35 19.65C2.36 19.65 2.36 19.65 2.35 19.66C2.49 19.94 2.65 20.21 2.84 20.46C2.95 20.59 3.06 20.71 3.17 20.83C3.28 20.95 3.4 21.05 3.53 21.15L3.54 21.16C3.79 21.35 4.06 21.51 4.34 21.65C4.35 21.64 4.35 21.64 4.35 21.65C4.5 21.72 4.65 21.77 4.81 21.82C4.94 21.86 5.07 21.89 5.2 21.92C5.46 21.97 5.73 22 6 22C6.41 22 6.83 21.94 7.22 21.81C7.33 21.77 7.44 21.73 7.55 21.68C7.9 21.54 8.24 21.34 8.54 21.08C8.63 21.01 8.73 20.92 8.82 20.83L8.86 20.79C9.56 20.07 10 19.08 10 18V4.5C10 3 9 2 7.5 2ZM6 19.5C5.17 19.5 4.5 18.83 4.5 18C4.5 17.17 5.17 16.5 6 16.5C6.83 16.5 7.5 17.17 7.5 18C7.5 18.83 6.83 19.5 6 19.5Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ColorSwatchBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 4.5C2 3 3 2 4.5 2H7.5C9 2 10 3 10 4.5V18C10 19.08 9.55999 20.07 8.85999 20.79L8.82001 20.83C8.73001 20.92 8.63001 21.01 8.54001 21.08C8.24001 21.34 7.89999 21.54 7.54999 21.68C7.43999 21.73 7.33 21.77 7.22 21.81C6.83 21.94 6.41 22 6 22C5.73 22 5.46001 21.97 5.20001 21.92C5.07001 21.89 4.94 21.86 4.81 21.82C4.65 21.77 4.50001 21.72 4.35001 21.65C4.35001 21.64 4.35 21.64 4.34 21.65C4.06 21.51 3.79001 21.35 3.54001 21.16L3.53 21.15C3.4 21.05 3.28001 20.95 3.17001 20.83C3.06001 20.71 2.95 20.59 2.84 20.46C2.65 20.21 2.49001 19.94 2.35001 19.66C2.36001 19.65 2.36001 19.65 2.35001 19.65C2.35001 19.65 2.35 19.64 2.34 19.63C2.28 19.49 2.22999 19.34 2.17999 19.19C2.13999 19.06 2.10999 18.93 2.07999 18.8C2.02999 18.54 2 18.27 2 18V8.57001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 16.5V19.5C22 21 21 22 19.5 22H6C6.41 22 6.83 21.94 7.22 21.81C7.33 21.77 7.43999 21.73 7.54999 21.68C7.89999 21.54 8.24001 21.34 8.54001 21.08C8.63001 21.01 8.73001 20.92 8.82001 20.83L8.85999 20.79L15.66 14H19.5C21 14 22 15 22 16.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.80969 21.8199C4.20969 21.6399 3.63971 21.3099 3.16971 20.8299C2.68971 20.3599 2.35969 19.7899 2.17969 19.1899C2.56969 20.4399 3.55969 21.4299 4.80969 21.8199Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.3694 11.2899L15.6594 14L8.85938 20.7899C9.55937 20.0699 9.99939 19.08 9.99939 18V8.33995L12.7094 5.62996C13.7694 4.56996 15.1894 4.56996 16.2494 5.62996L18.3694 7.74996C19.4294 8.80996 19.4294 10.2299 18.3694 11.2899Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 19C6.55228 19 7 18.5523 7 18C7 17.4477 6.55228 17 6 17C5.44772 17 5 17.4477 5 18C5 18.5523 5.44772 19 6 19Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ColorSwatchBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 16.5V19.5C22 21 21 22 19.5 22H6C6.41 22 6.83 21.94 7.22 21.81C7.33 21.77 7.43999 21.73 7.54999 21.68C7.89999 21.54 8.24001 21.34 8.54001 21.08C8.63001 21.01 8.73001 20.92 8.82001 20.83L8.85999 20.79L15.66 14H19.5C21 14 22 15 22 16.5Z"
        fill="currentColor"
      />
      <Path
        opacity="0.6"
        d="M18.3694 11.29L15.6594 14L8.85938 20.79C9.55937 20.07 9.99939 19.08 9.99939 18V8.33996L12.7094 5.62996C13.7694 4.56996 15.1894 4.56996 16.2494 5.62996L18.3694 7.74996C19.4294 8.80996 19.4294 10.23 18.3694 11.29Z"
        fill="currentColor"
      />
      <Path
        d="M7.5 2H4.5C3 2 2 3 2 4.5V18C2 18.27 2.02999 18.54 2.07999 18.8C2.10999 18.93 2.13999 19.06 2.17999 19.19C2.22999 19.34 2.28 19.49 2.34 19.63C2.35 19.64 2.35001 19.65 2.35001 19.65C2.36001 19.65 2.36001 19.65 2.35001 19.66C2.49001 19.94 2.65 20.21 2.84 20.46C2.95 20.59 3.06001 20.71 3.17001 20.83C3.28001 20.95 3.4 21.05 3.53 21.15L3.54001 21.16C3.79001 21.35 4.06 21.51 4.34 21.65C4.35 21.64 4.35001 21.64 4.35001 21.65C4.50001 21.72 4.65 21.77 4.81 21.82C4.94 21.86 5.07001 21.89 5.20001 21.92C5.46001 21.97 5.73 22 6 22C6.41 22 6.83 21.94 7.22 21.81C7.33 21.77 7.43999 21.73 7.54999 21.68C7.89999 21.54 8.24001 21.34 8.54001 21.08C8.63001 21.01 8.73001 20.92 8.82001 20.83L8.85999 20.79C9.55999 20.07 10 19.08 10 18V4.5C10 3 9 2 7.5 2ZM6 19.5C5.17 19.5 4.5 18.83 4.5 18C4.5 17.17 5.17 16.5 6 16.5C6.83 16.5 7.5 17.17 7.5 18C7.5 18.83 6.83 19.5 6 19.5Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ColorSwatchLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10 4.5V18C10 19.08 9.55999 20.07 8.85999 20.79L8.82001 20.83C8.73001 20.92 8.63001 21.01 8.54001 21.08C8.24001 21.34 7.89999 21.54 7.54999 21.68C7.43999 21.73 7.33 21.77 7.22 21.81C6.83 21.94 6.41 22 6 22C5.73 22 5.46001 21.97 5.20001 21.92C5.07001 21.89 4.94 21.86 4.81 21.82C4.65 21.77 4.50001 21.72 4.35001 21.65C4.35001 21.64 4.35 21.64 4.34 21.65C4.06 21.51 3.79001 21.35 3.54001 21.16L3.53 21.15C3.4 21.05 3.28001 20.95 3.17001 20.83C3.06001 20.71 2.95 20.59 2.84 20.46C2.65 20.21 2.49001 19.94 2.35001 19.66C2.36001 19.65 2.36001 19.65 2.35001 19.65C2.35001 19.65 2.35 19.64 2.34 19.63C2.28 19.49 2.22999 19.34 2.17999 19.19C2.13999 19.06 2.10999 18.93 2.07999 18.8C2.02999 18.54 2 18.27 2 18V4.5C2 3 3 2 4.5 2H7.5C9 2 10 3 10 4.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 16.5V19.5C22 21 21 22 19.5 22H6C6.41 22 6.83 21.94 7.22 21.81C7.33 21.77 7.43999 21.73 7.54999 21.68C7.89999 21.54 8.24001 21.34 8.54001 21.08C8.63001 21.01 8.73001 20.92 8.82001 20.83L8.85999 20.79L15.66 14H19.5C21 14 22 15 22 16.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.81 21.8199C4.21 21.6399 3.64001 21.3099 3.17001 20.8299C2.69001 20.3599 2.35999 19.7899 2.17999 19.1899C2.56999 20.4399 3.56 21.4299 4.81 21.8199Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.37 11.2899L15.66 14L8.85999 20.7899C9.55999 20.0699 10 19.08 10 18V8.33995L12.71 5.62996C13.77 4.56996 15.19 4.56996 16.25 5.62996L18.37 7.74996C19.43 8.80996 19.43 10.2299 18.37 11.2899Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 19C6.55228 19 7 18.5523 7 18C7 17.4477 6.55228 17 6 17C5.44772 17 5 17.4477 5 18C5 18.5523 5.44772 19 6 19Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ColorSwatchOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M5.99976 22.7498C5.69976 22.7498 5.37975 22.7198 5.05975 22.6598C4.88975 22.6198 4.73975 22.5798 4.58975 22.5398C4.41975 22.4898 4.25974 22.4298 4.10974 22.3698C4.06974 22.3598 4.03977 22.3398 4.00977 22.3298C3.65977 22.1498 3.35975 21.9698 3.08975 21.7698C3.06975 21.7598 3.05976 21.7398 3.03976 21.7298C2.88976 21.6098 2.74975 21.4898 2.61975 21.3498C2.47975 21.1998 2.37974 21.0798 2.26974 20.9598C2.03974 20.6598 1.84975 20.3598 1.67975 20.0098C1.65975 19.9798 1.64977 19.9398 1.63977 19.8998C1.57977 19.7598 1.52975 19.6198 1.48975 19.4698C1.42975 19.2598 1.38974 19.1198 1.35974 18.9698C1.28974 18.6198 1.25977 18.3098 1.25977 18.0098V4.50977C1.25977 2.59977 2.59977 1.25977 4.50977 1.25977H7.50977C9.41977 1.25977 10.7598 2.59977 10.7598 4.50977V17.9998C10.7598 19.2398 10.2798 20.4198 9.40976 21.3098C9.24976 21.4698 9.12975 21.5798 9.01974 21.6698C8.69974 21.9498 8.28976 22.1998 7.84976 22.3798C7.74976 22.4198 7.62976 22.4698 7.49976 22.5198C7.00976 22.6698 6.49976 22.7498 5.99976 22.7498ZM4.73975 20.9998C4.83975 21.0398 4.93976 21.0698 5.03976 21.0998C5.14976 21.1298 5.25975 21.1598 5.36975 21.1898C5.91975 21.2898 6.50977 21.2598 6.97977 21.0998C7.04977 21.0698 7.14975 21.0398 7.23975 20.9998C7.55975 20.8698 7.81974 20.7098 8.04974 20.5198C8.14974 20.4398 8.21976 20.3698 8.28976 20.3098C8.91976 19.6598 9.24976 18.8598 9.24976 18.0098V4.50977C9.24976 3.42977 8.57976 2.75977 7.49976 2.75977H4.49976C3.41976 2.75977 2.74976 3.42977 2.74976 4.50977V17.9998C2.74976 18.2098 2.76976 18.4298 2.81976 18.6598C2.83976 18.7498 2.86975 18.8598 2.89975 18.9798C2.93975 19.0898 2.96977 19.1798 3.00977 19.2798C3.02977 19.3098 3.03974 19.3398 3.04974 19.3598C3.05974 19.3798 3.06974 19.4098 3.07974 19.4298C3.19974 19.6498 3.31977 19.8398 3.44977 20.0098C3.51977 20.0898 3.60977 20.1898 3.69977 20.2898C3.80977 20.4098 3.89976 20.4798 3.99976 20.5598C4.00976 20.5698 4.02976 20.5798 4.03976 20.5898C4.19976 20.7098 4.37975 20.8198 4.58975 20.9298C4.60975 20.9398 4.62975 20.9398 4.64975 20.9498C4.66975 20.9598 4.69975 20.9798 4.73975 20.9998Z"
        fill="currentColor"
      />
      <Path
        d="M19.5 22.7498H6C5.59 22.7498 5.25 22.4098 5.25 21.9998C5.25 21.5898 5.59 21.2498 6 21.2498C6.35 21.2498 6.69001 21.1998 6.98001 21.0998C7.05001 21.0698 7.14999 21.0398 7.23999 20.9998C7.55999 20.8698 7.81999 20.7098 8.04999 20.5198C8.14999 20.4398 8.22001 20.3698 8.29001 20.3098L15.13 13.4798C15.27 13.3398 15.46 13.2598 15.66 13.2598H19.5C21.41 13.2598 22.75 14.5998 22.75 16.5098V19.5098C22.75 21.4098 21.41 22.7498 19.5 22.7498ZM9.45999 21.2498H19.5C20.58 21.2498 21.25 20.5798 21.25 19.4998V16.4998C21.25 15.4198 20.58 14.7498 19.5 14.7498H15.97L9.45999 21.2498Z"
        fill="currentColor"
      />
      <Path
        d="M4.8102 22.57C4.7402 22.57 4.67021 22.56 4.60021 22.54C3.86021 22.32 3.18022 21.91 2.64022 21.36C2.10022 20.83 1.6902 20.15 1.4702 19.41C1.3502 19.01 1.5702 18.6 1.9702 18.48C2.3702 18.36 2.78021 18.58 2.91021 18.97C3.23021 19.99 4.03019 20.79 5.05019 21.11C5.44019 21.23 5.66021 21.65 5.54021 22.05C5.43021 22.36 5.1302 22.57 4.8102 22.57Z"
        fill="currentColor"
      />
      <Path
        d="M8.85997 21.5399C8.66997 21.5399 8.47998 21.4699 8.32998 21.3199C8.03998 21.0299 8.03 20.5599 8.32 20.2599C8.92 19.6499 9.24999 18.8399 9.24999 17.9899V8.32993C9.24999 8.12993 9.32999 7.93993 9.46999 7.79993L12.18 5.08992C13.49 3.77992 15.47 3.77992 16.78 5.08992L18.9 7.20993C20.25 8.55993 20.25 10.4599 18.9 11.8099L9.39 21.3099C9.24 21.4699 9.04997 21.5399 8.85997 21.5399ZM10.75 8.64992V17.8399L17.84 10.7599C18.6 9.99992 18.6 9.04992 17.84 8.27992L15.72 6.15993C14.97 5.40993 13.99 5.40993 13.24 6.15993L10.75 8.64992Z"
        fill="currentColor"
      />
      <Path
        d="M6 19.75C5.04 19.75 4.25 18.96 4.25 18C4.25 17.04 5.04 16.25 6 16.25C6.96 16.25 7.75 17.04 7.75 18C7.75 18.96 6.96 19.75 6 19.75ZM6 17.75C5.86 17.75 5.75 17.86 5.75 18C5.75 18.28 6.25 18.28 6.25 18C6.25 17.86 6.14 17.75 6 17.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ColorSwatchTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10 4.5V18C10 19.08 9.55999 20.07 8.85999 20.79L8.82001 20.83C8.73001 20.92 8.63001 21.01 8.54001 21.08C8.24001 21.34 7.89999 21.54 7.54999 21.68C7.43999 21.73 7.33 21.77 7.22 21.81C6.83 21.94 6.41 22 6 22C5.73 22 5.46001 21.97 5.20001 21.92C5.07001 21.89 4.94 21.86 4.81 21.82C4.65 21.77 4.50001 21.72 4.35001 21.65C4.35001 21.64 4.35 21.64 4.34 21.65C4.06 21.51 3.79001 21.35 3.54001 21.16L3.53 21.15C3.4 21.05 3.28001 20.95 3.17001 20.83C3.06001 20.71 2.95 20.59 2.84 20.46C2.65 20.21 2.49001 19.94 2.35001 19.66C2.36001 19.65 2.36001 19.65 2.35001 19.65C2.35001 19.65 2.35 19.64 2.34 19.63C2.28 19.49 2.22999 19.34 2.17999 19.19C2.13999 19.06 2.10999 18.93 2.07999 18.8C2.02999 18.54 2 18.27 2 18V4.5C2 3 3 2 4.5 2H7.5C9 2 10 3 10 4.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M22 16.5V19.5C22 21 21 22 19.5 22H6C6.41 22 6.83 21.94 7.22 21.81C7.33 21.77 7.43999 21.73 7.54999 21.68C7.89999 21.54 8.24001 21.34 8.54001 21.08C8.63001 21.01 8.73001 20.92 8.82001 20.83L8.85999 20.79L15.66 14H19.5C21 14 22 15 22 16.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.80969 21.8199C4.20969 21.6399 3.63971 21.3099 3.16971 20.8299C2.68971 20.3599 2.35969 19.7899 2.17969 19.1899C2.56969 20.4399 3.55969 21.4299 4.80969 21.8199Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.3694 11.2899L15.6594 14L8.85938 20.7899C9.55937 20.0699 9.99939 19.08 9.99939 18V8.33995L12.7094 5.62996C13.7694 4.56996 15.1894 4.56996 16.2494 5.62996L18.3694 7.74996C19.4294 8.80996 19.4294 10.2299 18.3694 11.2899Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M6 19C6.55228 19 7 18.5523 7 18C7 17.4477 6.55228 17 6 17C5.44772 17 5 17.4477 5 18C5 18.5523 5.44772 19 6 19Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: ColorSwatchBold,
  broken: ColorSwatchBroken,
  bulk: ColorSwatchBulk,
  linear: ColorSwatchLinear,
  outline: ColorSwatchOutline,
  twotone: ColorSwatchTwotone,
};

export const ColorSwatchIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default ColorSwatchIcon;
