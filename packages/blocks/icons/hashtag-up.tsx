import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const HashtagUpBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.0801 11.8319H11.7301L11.9201 10.1719H10.2701L10.0801 11.8319Z"
        fill="currentColor"
      />
      <Path
        d="M21.97 7.21C21.77 4.13 19.87 2.23 16.79 2.03C16.59 2.01 16.39 2 16.19 2H7.81C7.61 2 7.41 2.01 7.21 2.03C4.13 2.23 2.23 4.13 2.03 7.21C2.01 7.41 2 7.61 2 7.81V16.19C2 16.39 2.01 16.59 2.03 16.79C2.23 19.87 4.13 21.77 7.21 21.97C7.41 21.99 7.61 22 7.81 22H13.5C14.05 22 14.5 21.55 14.5 21V18.03C14.5 16.08 16.08 14.5 18.03 14.5H21C21.55 14.5 22 14.05 22 13.5V7.81C22 7.61 21.99 7.41 21.97 7.21ZM16 10.17H13.43L13.24 11.83H15.47C15.89 11.83 16.22 12.17 16.22 12.58C16.22 12.99 15.89 13.33 15.47 13.33H13.08L12.8 15.82C12.76 16.2 12.43 16.49 12.05 16.49C12.03 16.49 12 16.49 11.97 16.48C11.56 16.44 11.26 16.07 11.31 15.65L11.57 13.33H9.92L9.64 15.82C9.6 16.2 9.27 16.49 8.9 16.49C8.87 16.49 8.84 16.49 8.81 16.48C8.4 16.44 8.1 16.07 8.15 15.65L8.41 13.33H6C5.59 13.33 5.25 12.99 5.25 12.58C5.25 12.17 5.59 11.83 6 11.83H8.57L8.76 10.17H6.53C6.11 10.17 5.78 9.83 5.78 9.42C5.78 9.01 6.11 8.67 6.53 8.67H8.92L9.2 6.18C9.25 5.77 9.62 5.47 10.03 5.52C10.44 5.56 10.74 5.93 10.69 6.35L10.43 8.67H12.08L12.36 6.18C12.41 5.77 12.78 5.47 13.19 5.52C13.6 5.56 13.9 5.93 13.85 6.35L13.59 8.67H16C16.41 8.67 16.75 9.01 16.75 9.42C16.75 9.83 16.41 10.17 16 10.17Z"
        fill="currentColor"
      />
      <Path
        d="M20.97 16H18.03C16.76 16 16 16.76 16 18.03V20.97C16 22.24 16.76 23 18.03 23H20.97C22.24 23 23 22.24 23 20.97V18.03C23 16.76 22.24 16 20.97 16ZM21.19 19.31C21.07 19.43 20.91 19.49 20.75 19.49C20.59 19.49 20.43 19.43 20.31 19.31L20.13 19.13V21.37C20.13 21.72 19.85 22 19.5 22C19.15 22 18.87 21.72 18.87 21.37V19.13L18.69 19.31C18.45 19.55 18.05 19.55 17.81 19.31C17.57 19.07 17.57 18.67 17.81 18.43L19.06 17.18C19.11 17.13 19.18 17.09 19.25 17.06C19.27 17.05 19.29 17.05 19.31 17.04C19.36 17.02 19.41 17.01 19.47 17.01C19.49 17.01 19.51 17.01 19.53 17.01C19.6 17.01 19.66 17.02 19.73 17.05C19.74 17.05 19.74 17.05 19.75 17.05C19.82 17.08 19.88 17.12 19.93 17.17C19.94 17.18 19.94 17.18 19.95 17.18L21.2 18.43C21.44 18.67 21.44 19.07 21.19 19.31Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HashtagUpBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 13.04V15C2 20 4 22 9 22H15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 13V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19 22V16L17 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19 16L21 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.95039 6.26001L8.90039 15.73"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.1105 6.26001L12.0605 15.73"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.5293 9.41992H15.9993"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 12.5801H15.47"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const HashtagUpBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.97 16H18.03C16.76 16 16 16.76 16 18.03V20.97C16 22.24 16.76 23 18.03 23H20.97C22.24 23 23 22.24 23 20.97V18.03C23 16.76 22.24 16 20.97 16ZM21.19 19.31C21.07 19.43 20.91 19.49 20.75 19.49C20.59 19.49 20.43 19.43 20.31 19.31L20.13 19.13V21.37C20.13 21.72 19.85 22 19.5 22C19.15 22 18.87 21.72 18.87 21.37V19.13L18.69 19.31C18.45 19.55 18.05 19.55 17.81 19.31C17.57 19.07 17.57 18.67 17.81 18.43L19.06 17.18C19.11 17.13 19.18 17.09 19.25 17.06C19.27 17.05 19.29 17.05 19.31 17.04C19.36 17.02 19.41 17.01 19.47 17.01C19.49 17.01 19.51 17.01 19.53 17.01C19.6 17.01 19.66 17.02 19.73 17.05C19.74 17.05 19.74 17.05 19.75 17.05C19.82 17.08 19.88 17.12 19.93 17.17C19.94 17.18 19.94 17.18 19.95 17.18L21.2 18.43C21.44 18.67 21.44 19.07 21.19 19.31Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M16 20.97V18.03C16 16.76 16.76 16 18.03 16H20.97C21.37 16 21.71 16.08 22 16.22C22 16.21 22 16.2 22 16.18V7.81C22 4.17 19.83 2 16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C16.19 22 16.2 22 16.22 22C16.08 21.71 16 21.37 16 20.97Z"
        fill="currentColor"
      />
      <Path
        d="M16 10.1701C16.41 10.1701 16.75 9.8301 16.75 9.4201C16.75 9.0101 16.41 8.6701 16 8.6701H13.59L13.85 6.3501C13.9 5.9401 13.6 5.5701 13.19 5.5201C12.78 5.4801 12.41 5.7701 12.36 6.1801L12.08 8.6701H10.43L10.69 6.3501C10.74 5.9401 10.44 5.5701 10.03 5.5201C9.62 5.4701 9.25 5.7701 9.2 6.1801L8.92 8.6701H6.52C6.11 8.6701 5.77 9.0101 5.77 9.4201C5.77 9.8301 6.11 10.1701 6.52 10.1701H8.75L8.57 11.8301H6C5.59 11.8301 5.25 12.1701 5.25 12.5801C5.25 12.9901 5.59 13.3301 6 13.3301H8.41L8.15 15.6501C8.1 16.0601 8.4 16.4301 8.81 16.4801C8.84 16.4801 8.87 16.4801 8.89 16.4801C9.27 16.4801 9.59 16.2001 9.63 15.8101L9.91 13.3201H11.56L11.3 15.6401C11.25 16.0501 11.55 16.4201 11.96 16.4701C11.99 16.4701 12.02 16.4701 12.04 16.4701C12.42 16.4701 12.74 16.1901 12.78 15.8001L13.06 13.3101H15.46C15.87 13.3101 16.21 12.9701 16.21 12.5601C16.21 12.1501 15.87 11.8101 15.46 11.8101H13.23L13.41 10.1501H16V10.1701ZM11.73 11.8301H10.08L10.26 10.1701H11.91L11.73 11.8301Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HashtagUpLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 13V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19 22V16L17 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19 16L21 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.95002 6.26001L8.90002 15.73"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.1101 6.26001L12.0601 15.73"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.53003 9.41992H16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 12.5801H15.47"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const HashtagUpOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V13C22.75 13.41 22.41 13.75 22 13.75C21.59 13.75 21.25 13.41 21.25 13V9C21.25 4.39 19.61 2.75 15 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C15.41 21.25 15.75 21.59 15.75 22C15.75 22.41 15.41 22.75 15 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M18.9995 22.75C18.5895 22.75 18.2495 22.41 18.2495 22V17.81L17.5295 18.53C17.2395 18.82 16.7595 18.82 16.4695 18.53C16.1795 18.24 16.1795 17.76 16.4695 17.47L18.4695 15.47C18.6795 15.26 19.0095 15.19 19.2895 15.31C19.5695 15.43 19.7495 15.7 19.7495 16V22C19.7495 22.41 19.4095 22.75 18.9995 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M20.9995 18.7499C20.8095 18.7499 20.6195 18.6799 20.4695 18.5299L18.4695 16.5299C18.1795 16.2399 18.1795 15.7599 18.4695 15.4699C18.7595 15.1799 19.2395 15.1799 19.5295 15.4699L21.5295 17.4699C21.8195 17.7599 21.8195 18.2399 21.5295 18.5299C21.3795 18.6799 21.1895 18.7499 20.9995 18.7499Z"
        fill="currentColor"
      />
      <Path
        d="M8.89974 16.4901C8.86974 16.4901 8.83974 16.4901 8.81974 16.4901C8.40974 16.4401 8.10974 16.0701 8.15974 15.6601L9.19974 6.1801C9.24974 5.7701 9.61974 5.4701 10.0297 5.5201C10.4397 5.5701 10.7397 5.9401 10.6897 6.3501L9.63975 15.8201C9.59975 16.2001 9.26974 16.4901 8.89974 16.4901Z"
        fill="currentColor"
      />
      <Path
        d="M12.0501 16.4899C12.0201 16.4899 11.9901 16.4899 11.9701 16.4899C11.5601 16.4399 11.2601 16.0699 11.3101 15.6599L12.3601 6.18986C12.4101 5.77986 12.7801 5.47986 13.1901 5.52986C13.6001 5.57986 13.9001 5.94986 13.8501 6.35986L12.8001 15.8299C12.7601 16.1999 12.4301 16.4899 12.0501 16.4899Z"
        fill="currentColor"
      />
      <Path
        d="M15.9993 10.1699H6.5293C6.1193 10.1699 5.7793 9.82992 5.7793 9.41992C5.7793 9.00992 6.1193 8.66992 6.5293 8.66992H15.9993C16.4093 8.66992 16.7493 9.00992 16.7493 9.41992C16.7493 9.82992 16.4093 10.1699 15.9993 10.1699Z"
        fill="currentColor"
      />
      <Path
        d="M15.47 13.3301H6C5.59 13.3301 5.25 12.9901 5.25 12.5801C5.25 12.1701 5.59 11.8301 6 11.8301H15.47C15.88 11.8301 16.22 12.1701 16.22 12.5801C16.22 12.9901 15.89 13.3301 15.47 13.3301Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HashtagUpTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 13V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M19 22V16L17 18"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M19 16L21 18"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <G opacity="0.4">
        <Path
          d="M9.95039 6.25977L8.90039 15.7298"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M13.1105 6.25977L12.0605 15.7298"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M6.5293 9.41992H15.9993"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M6 12.5801H15.47"
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
  bold: HashtagUpBold,
  broken: HashtagUpBroken,
  bulk: HashtagUpBulk,
  linear: HashtagUpLinear,
  outline: HashtagUpOutline,
  twotone: HashtagUpTwotone,
};

export const HashtagUpIcon = ({ variant = "linear", ...props }: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
