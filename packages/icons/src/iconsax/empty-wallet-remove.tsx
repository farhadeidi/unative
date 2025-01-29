import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const EmptyWalletRemoveBold = ({
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
        d="M14.85 3.95078V7.75078H13.35V3.95078C13.35 3.68078 13.11 3.55078 12.95 3.55078C12.9 3.55078 12.85 3.56078 12.8 3.58078L4.87 6.57078C4.34 6.77078 4 7.27078 4 7.84078V8.51078C3.09 9.19078 2.5 10.2808 2.5 11.5108V7.84078C2.5 6.65078 3.23 5.59078 4.34 5.17078L12.28 2.17078C12.5 2.09078 12.73 2.05078 12.95 2.05078C13.95 2.05078 14.85 2.86078 14.85 3.95078Z"
        fill="currentColor"
      />
      <Path
        d="M21.5007 14.5V15.5C21.5007 15.77 21.2907 15.99 21.0107 16H19.5507C19.0207 16 18.5407 15.61 18.5007 15.09C18.4707 14.78 18.5907 14.49 18.7907 14.29C18.9707 14.1 19.2207 14 19.4907 14H21.0007C21.2907 14.01 21.5007 14.23 21.5007 14.5Z"
        fill="currentColor"
      />
      <Path
        d="M5 15C4.06 15 3.19 15.33 2.5 15.88C1.58 16.61 1 17.74 1 19C1 19.75 1.21 20.46 1.58 21.06C2.27 22.22 3.54 23 5 23C6.01 23 6.93 22.63 7.63 22C7.94 21.74 8.21 21.42 8.42 21.06C8.79 20.46 9 19.75 9 19C9 16.79 7.21 15 5 15ZM3.42 18.46C3.13 18.17 3.13 17.69 3.42 17.4C3.72 17.11 4.19 17.11 4.49 17.4L5.01 17.93L5.51 17.42C5.81 17.13 6.28 17.13 6.58 17.42C6.87 17.72 6.87 18.19 6.58 18.49L6.07 18.99L6.6 19.51C6.89 19.81 6.89 20.28 6.6 20.58C6.45 20.72 6.26 20.79 6.07 20.79C5.88 20.79 5.69 20.72 5.54 20.58L5.01 20.05L4.46 20.6C4.31 20.75 4.12 20.82 3.93 20.82C3.74 20.82 3.55 20.75 3.4 20.6C3.11 20.31 3.11 19.83 3.4 19.54L3.95 18.99L3.42 18.46Z"
        fill="currentColor"
      />
      <Path
        d="M19.48 12.95H20.5C21.05 12.95 21.5 12.5 21.5 11.95V11.51C21.5 9.44 19.81 7.75 17.74 7.75H6.26C5.41 7.75 4.63 8.03 4 8.51C3.09 9.19 2.5 10.28 2.5 11.51V13.29C2.5 13.67 2.9 13.91 3.26 13.79C3.82 13.6 4.41 13.5 5 13.5C8.03 13.5 10.5 15.97 10.5 19C10.5 19.72 10.31 20.51 10.01 21.21C9.85 21.57 10.1 22 10.49 22H17.74C19.81 22 21.5 20.31 21.5 18.24V18.05C21.5 17.5 21.05 17.05 20.5 17.05H19.63C18.67 17.05 17.75 16.46 17.5 15.53C17.3 14.77 17.54 14.03 18.04 13.55C18.41 13.17 18.92 12.95 19.48 12.95ZM14 12.75H9C8.59 12.75 8.25 12.41 8.25 12C8.25 11.59 8.59 11.25 9 11.25H14C14.41 11.25 14.75 11.59 14.75 12C14.75 12.41 14.41 12.75 14 12.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const EmptyWalletRemoveBroken = ({
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
        d="M14 22H7.63C7.94 21.74 8.21 21.42 8.42 21.06C8.79 20.46 9 19.75 9 19C9 16.79 7.21 15 5 15C4.06 15 3.19 15.33 2.5 15.88V11.51C2.5 9.44001 4.19 7.75 6.26 7.75H17.74C19.81 7.75 21.5 9.44001 21.5 11.51V12.95H19.48C18.92 12.95 18.41 13.17 18.04 13.55C17.62 13.96 17.38 14.55 17.44 15.18C17.53 16.26 18.52 17.05 19.6 17.05H21.5V18.24C21.5 20.31 19.81 22 17.74 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22.5608 13.9702V16.0302C22.5608 16.5802 22.1208 17.0302 21.5608 17.0502H19.6008C18.5208 17.0502 17.5308 16.2602 17.4408 15.1802C17.3808 14.5502 17.6208 13.9602 18.0408 13.5502C18.4108 13.1702 18.9208 12.9502 19.4808 12.9502H21.5608C22.1208 12.9702 22.5608 13.4202 22.5608 13.9702Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 12H14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 19C9 19.75 8.79 20.46 8.42 21.06C8.21 21.42 7.94 21.74 7.63 22C6.93 22.63 6.01 23 5 23C3.54 23 2.27 22.22 1.58 21.06C1.21 20.46 1 19.75 1 19C1 17.74 1.58 16.61 2.5 15.88C3.19 15.33 4.06 15 5 15C7.21 15 9 16.79 9 19Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.06922 20.0399L3.94922 17.9299"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.04969 17.96L3.92969 20.0699"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.2793 2.16982C13.5193 1.69982 14.8493 2.61985 14.8493 3.94985V7.74983"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.5 12.4099V7.83997C2.5 6.64997 3.23 5.58992 4.34 5.16992L8.31 3.66992"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const EmptyWalletRemoveBulk = ({
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
        opacity="0.4"
        d="M19.48 12.95H21.5V11.51C21.5 9.44001 19.81 7.75 17.74 7.75H6.26C4.19 7.75 2.5 9.44001 2.5 11.51V18.24C2.5 20.31 4.19 22 6.26 22H17.74C19.81 22 21.5 20.31 21.5 18.24V17.05H19.6C18.52 17.05 17.53 16.26 17.44 15.18C17.38 14.55 17.62 13.96 18.04 13.55C18.41 13.17 18.92 12.95 19.48 12.95ZM6.6 20.58C6.45 20.72 6.26 20.79 6.07 20.79C5.88 20.79 5.69 20.72 5.54 20.58L5.01 20.05L4.46 20.6C4.31 20.75 4.12 20.82 3.93 20.82C3.74 20.82 3.55 20.75 3.4 20.6C3.11 20.31 3.11 19.83 3.4 19.54L3.95 18.99L3.42 18.46C3.13 18.17 3.13 17.69 3.42 17.4C3.72 17.11 4.19 17.11 4.49 17.4L5.01 17.93L5.51 17.42C5.81 17.13 6.28 17.13 6.58 17.42C6.87 17.72 6.87 18.19 6.58 18.49L6.07 18.99L6.6 19.51C6.89 19.81 6.89 20.28 6.6 20.58Z"
        fill="currentColor"
      />
      <Path
        d="M14.85 3.95012V7.75011H6.26C4.19 7.75011 2.5 9.44012 2.5 11.5101V7.84014C2.5 6.65014 3.23 5.59009 4.34 5.17009L12.28 2.17009C13.52 1.71009 14.85 2.62012 14.85 3.95012Z"
        fill="currentColor"
      />
      <Path
        d="M22.5608 13.9702V16.0302C22.5608 16.5802 22.1208 17.0302 21.5608 17.0502H19.6008C18.5208 17.0502 17.5308 16.2602 17.4408 15.1802C17.3808 14.5502 17.6208 13.9602 18.0408 13.5502C18.4108 13.1702 18.9208 12.9502 19.4808 12.9502H21.5608C22.1208 12.9702 22.5608 13.4202 22.5608 13.9702Z"
        fill="currentColor"
      />
      <Path
        d="M14 12.75H7C6.59 12.75 6.25 12.41 6.25 12C6.25 11.59 6.59 11.25 7 11.25H14C14.41 11.25 14.75 11.59 14.75 12C14.75 12.41 14.41 12.75 14 12.75Z"
        fill="currentColor"
      />
      <Path
        d="M5 15C4.06 15 3.19 15.33 2.5 15.88C1.58 16.61 1 17.74 1 19C1 19.75 1.21 20.46 1.58 21.06C2.27 22.22 3.54 23 5 23C6.01 23 6.93 22.63 7.63 22C7.94 21.74 8.21 21.42 8.42 21.06C8.79 20.46 9 19.75 9 19C9 16.79 7.21 15 5 15ZM3.42 18.46C3.13 18.17 3.13 17.69 3.42 17.4C3.72 17.11 4.19 17.11 4.49 17.4L5.01 17.93L5.51 17.42C5.81 17.13 6.28 17.13 6.58 17.42C6.87 17.72 6.87 18.19 6.58 18.49L6.07 18.99L6.6 19.51C6.89 19.81 6.89 20.28 6.6 20.58C6.45 20.72 6.26 20.79 6.07 20.79C5.88 20.79 5.69 20.72 5.54 20.58L5.01 20.05L4.46 20.6C4.31 20.75 4.12 20.82 3.93 20.82C3.74 20.82 3.55 20.75 3.4 20.6C3.11 20.31 3.11 19.83 3.4 19.54L3.95 18.99L3.42 18.46Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const EmptyWalletRemoveLinear = ({
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
        d="M18.04 13.55C17.62 13.96 17.38 14.55 17.44 15.18C17.53 16.26 18.52 17.05 19.6 17.05H21.5V18.24C21.5 20.31 19.81 22 17.74 22H7.63C7.94 21.74 8.21 21.42 8.42 21.06C8.79 20.46 9 19.75 9 19C9 16.79 7.21 15 5 15C4.06 15 3.19 15.33 2.5 15.88V11.51C2.5 9.44001 4.19 7.75 6.26 7.75H17.74C19.81 7.75 21.5 9.44001 21.5 11.51V12.95H19.48C18.92 12.95 18.41 13.17 18.04 13.55Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.5 12.4101V7.8401C2.5 6.6501 3.23 5.59006 4.34 5.17006L12.28 2.17006C13.52 1.70006 14.85 2.62009 14.85 3.95009V7.75008"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22.5588 13.9702V16.0302C22.5588 16.5802 22.1188 17.0302 21.5588 17.0502H19.5988C18.5188 17.0502 17.5288 16.2602 17.4388 15.1802C17.3788 14.5502 17.6188 13.9602 18.0388 13.5502C18.4088 13.1702 18.9188 12.9502 19.4788 12.9502H21.5588C22.1188 12.9702 22.5588 13.4202 22.5588 13.9702Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 12H14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 19C9 19.75 8.79 20.46 8.42 21.06C8.21 21.42 7.94 21.74 7.63 22C6.93 22.63 6.01 23 5 23C3.54 23 2.27 22.22 1.58 21.06C1.21 20.46 1 19.75 1 19C1 17.74 1.58 16.61 2.5 15.88C3.19 15.33 4.06 15 5 15C7.21 15 9 16.79 9 19Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.06995 20.0399L3.94995 17.9299"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.04993 17.96L3.92993 20.0699"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const EmptyWalletRemoveOutline = ({
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
        d="M17.74 22.7498H7.63C7.31 22.7498 7.03 22.5498 6.92 22.2598C6.81 21.9598 6.9 21.6297 7.14 21.4297C7.38 21.2297 7.6 20.9698 7.76 20.6898C8.08 20.1798 8.24 19.5998 8.24 19.0098C8.24 17.2198 6.78 15.7598 4.99 15.7598C4.25 15.7598 3.55 16.0097 2.96 16.4797C2.73 16.6597 2.43 16.6898 2.17 16.5698C1.91 16.4498 1.75 16.1798 1.75 15.8898V11.5198C1.75 9.02978 3.77 7.00977 6.26 7.00977H17.74C20.23 7.00977 22.25 9.02978 22.25 11.5198V12.9598C22.25 13.3698 21.91 13.7098 21.5 13.7098H19.48C19.13 13.7098 18.81 13.8398 18.58 14.0798L18.57 14.0898C18.29 14.3598 18.16 14.7297 18.19 15.1097C18.25 15.7697 18.88 16.2997 19.6 16.2997H21.5C21.91 16.2997 22.25 16.6397 22.25 17.0497V18.2397C22.25 20.7297 20.23 22.7498 17.74 22.7498ZM9.18 21.2498H17.74C19.4 21.2498 20.75 19.8997 20.75 18.2397V17.7997H19.6C18.09 17.7997 16.81 16.6797 16.69 15.2397C16.61 14.4197 16.91 13.6098 17.51 13.0198C18.03 12.4898 18.73 12.1998 19.48 12.1998H20.75V11.5098C20.75 9.84977 19.4 8.49976 17.74 8.49976H6.26C4.6 8.49976 3.25 9.84977 3.25 11.5098V14.5898C3.81 14.3698 4.4 14.2498 5 14.2498C7.62 14.2498 9.75 16.3798 9.75 18.9998C9.75 19.7898 9.55 20.5698 9.18 21.2498Z"
        fill="currentColor"
      />
      <Path
        d="M2.5 13.16C2.09 13.16 1.75 12.82 1.75 12.41V7.84006C1.75 6.35006 2.69 5.00001 4.08 4.47001L12.02 1.47001C12.84 1.16001 13.75 1.27005 14.46 1.77005C15.18 2.27005 15.6 3.08005 15.6 3.95005V7.75003C15.6 8.16003 15.26 8.50003 14.85 8.50003C14.44 8.50003 14.1 8.16003 14.1 7.75003V3.95005C14.1 3.57005 13.92 3.22003 13.6 3.00003C13.28 2.78003 12.9 2.73003 12.54 2.87003L4.6 5.87003C3.79 6.18003 3.24 6.97006 3.24 7.84006V12.41C3.25 12.83 2.91 13.16 2.5 13.16Z"
        fill="currentColor"
      />
      <Path
        d="M19.6005 17.8002C18.0905 17.8002 16.8105 16.6802 16.6905 15.2402C16.6105 14.4102 16.9105 13.6002 17.5105 13.0102C18.0205 12.4902 18.7205 12.2002 19.4705 12.2002H21.5505C22.5405 12.2302 23.3005 13.0102 23.3005 13.9702V16.0302C23.3005 16.9902 22.5405 17.7702 21.5805 17.8002H19.6005ZM21.5305 13.7002H19.4805C19.1305 13.7002 18.8105 13.8302 18.5805 14.0702C18.2905 14.3502 18.1505 14.7302 18.1905 15.1102C18.2505 15.7702 18.8805 16.3002 19.6005 16.3002H21.5605C21.6905 16.3002 21.8105 16.1802 21.8105 16.0302V13.9702C21.8105 13.8202 21.6905 13.7102 21.5305 13.7002Z"
        fill="currentColor"
      />
      <Path
        d="M14 12.75H7C6.59 12.75 6.25 12.41 6.25 12C6.25 11.59 6.59 11.25 7 11.25H14C14.41 11.25 14.75 11.59 14.75 12C14.75 12.41 14.41 12.75 14 12.75Z"
        fill="currentColor"
      />
      <Path
        d="M5 23.75C3.34 23.75 1.78 22.87 0.939999 21.44C0.489999 20.72 0.25 19.87 0.25 19C0.25 17.54 0.899999 16.19 2.03 15.29C2.87 14.62 3.93 14.25 5 14.25C7.62 14.25 9.75 16.38 9.75 19C9.75 19.87 9.51 20.72 9.06 21.45C8.82 21.87 8.49 22.25 8.11 22.57C7.28 23.33 6.17 23.75 5 23.75ZM5 15.75C4.26 15.75 3.56 16 2.97 16.47C2.2 17.08 1.75 18.01 1.75 19C1.75 19.59 1.91 20.17 2.22 20.67C2.81 21.67 3.85 22.25 5 22.25C5.79 22.25 6.55 21.96 7.13 21.44C7.39 21.22 7.61 20.96 7.77 20.68C8.09 20.17 8.25 19.59 8.25 19C8.25 17.21 6.79 15.75 5 15.75Z"
        fill="currentColor"
      />
      <Path
        d="M6.07039 20.7901C5.88039 20.7901 5.69039 20.7201 5.54039 20.5701L3.43039 18.4601C3.14039 18.1701 3.14039 17.6901 3.43039 17.4001C3.72039 17.1101 4.20039 17.1101 4.49039 17.4001L6.60039 19.5101C6.89039 19.8001 6.89039 20.2801 6.60039 20.5701C6.45039 20.7201 6.26039 20.7901 6.07039 20.7901Z"
        fill="currentColor"
      />
      <Path
        d="M3.93109 20.8199C3.74109 20.8199 3.55109 20.7499 3.40109 20.5999C3.11109 20.3099 3.11109 19.8299 3.40109 19.5399L5.51109 17.4299C5.80109 17.1399 6.28109 17.1399 6.57109 17.4299C6.86109 17.7199 6.86109 18.1999 6.57109 18.4899L4.46109 20.5999C4.31109 20.7499 4.12109 20.8199 3.93109 20.8199Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const EmptyWalletRemoveTwotone = ({
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
        d="M18.04 13.55C17.62 13.96 17.38 14.55 17.44 15.18C17.53 16.26 18.52 17.05 19.6 17.05H21.5V18.24C21.5 20.31 19.81 22 17.74 22H7.63C7.94 21.74 8.21 21.42 8.42 21.06C8.79 20.46 9 19.75 9 19C9 16.79 7.21 15 5 15C4.06 15 3.19 15.33 2.5 15.88V11.51C2.5 9.44001 4.19 7.75 6.26 7.75H17.74C19.81 7.75 21.5 9.44001 21.5 11.51V12.95H19.48C18.92 12.95 18.41 13.17 18.04 13.55Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M2.5 12.4098V7.83986C2.5 6.64986 3.23 5.58982 4.34 5.16982L12.28 2.16982C13.52 1.69982 14.85 2.61985 14.85 3.94985V7.74983"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22.5608 13.9702V16.0302C22.5608 16.5802 22.1208 17.0302 21.5608 17.0502H19.6008C18.5208 17.0502 17.5308 16.2602 17.4408 15.1802C17.3808 14.5502 17.6208 13.9602 18.0408 13.5502C18.4108 13.1702 18.9208 12.9502 19.4808 12.9502H21.5608C22.1208 12.9702 22.5608 13.4202 22.5608 13.9702Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M7 12H14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 19C9 19.75 8.79 20.46 8.42 21.06C8.21 21.42 7.94 21.74 7.63 22C6.93 22.63 6.01 23 5 23C3.54 23 2.27 22.22 1.58 21.06C1.21 20.46 1 19.75 1 19C1 17.74 1.58 16.61 2.5 15.88C3.19 15.33 4.06 15 5 15C7.21 15 9 16.79 9 19Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.06922 20.0402L3.94922 17.9302"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.04969 17.96L3.92969 20.0699"
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
  bold: EmptyWalletRemoveBold,
  broken: EmptyWalletRemoveBroken,
  bulk: EmptyWalletRemoveBulk,
  linear: EmptyWalletRemoveLinear,
  outline: EmptyWalletRemoveOutline,
  twotone: EmptyWalletRemoveTwotone,
};

export const EmptyWalletRemoveIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default EmptyWalletRemoveIcon;
