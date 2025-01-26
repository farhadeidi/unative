import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const MusicSquareRemoveBold = ({
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
        d="M21.97 16.33C21.25 15.51 20.18 15 19 15C16.79 15 15 16.79 15 19C15 19.75 15.21 20.46 15.58 21.06C15.78 21.4 16.04 21.71 16.34 21.97C17.04 22.61 17.97 23 19 23C20.46 23 21.73 22.22 22.42 21.06C22.79 20.46 23 19.75 23 19C23 17.98 22.61 17.04 21.97 16.33ZM20.6 20.58C20.45 20.73 20.26 20.8 20.07 20.8C19.88 20.8 19.69 20.73 19.54 20.58L19.01 20.05L18.46 20.6C18.31 20.75 18.12 20.82 17.93 20.82C17.74 20.82 17.55 20.75 17.4 20.6C17.11 20.31 17.11 19.83 17.4 19.54L17.95 18.99L17.42 18.46C17.13 18.17 17.13 17.69 17.42 17.4C17.71 17.11 18.19 17.11 18.48 17.4L19.01 17.93L19.51 17.43C19.8 17.14 20.28 17.14 20.57 17.43C20.86 17.72 20.86 18.2 20.57 18.49L20.07 18.99L20.6 19.52C20.89 19.81 20.89 20.28 20.6 20.58Z"
        fill="currentColor"
      />
      <Path
        d="M12.2283 12.0703C11.8183 12.0703 11.4883 12.4003 11.4883 12.8103C11.4883 13.2203 11.8183 13.5503 12.2283 13.5503C12.6383 13.5503 12.9683 13.2203 12.9683 12.8103C12.9683 12.4003 12.6383 12.0703 12.2283 12.0703Z"
        fill="currentColor"
      />
      <Path
        d="M6.75953 13.0586C6.34953 13.0586 6.01953 13.3886 6.01953 13.7986C6.01953 14.2086 6.34953 14.5386 6.75953 14.5386C7.16953 14.5386 7.49953 14.2086 7.49953 13.7986C7.49953 13.3886 7.16953 13.0586 6.75953 13.0586Z"
        fill="currentColor"
      />
      <Path
        d="M16.19 2H7.81C7.53 2 7.26 2.01 7 2.05C3.85 2.34 2 4.45 2 7.81V16.19C2 19.55 3.85 21.66 7 21.95C7.26 21.99 7.53 22 7.81 22H13.5C13.89 22 14.14 21.56 13.99 21.2C13.7 20.51 13.5 19.71 13.5 19C13.5 15.97 15.97 13.5 19 13.5C19.76 13.5 20.5 13.65 21.18 13.95C21.55 14.11 22 13.86 22 13.46V7.81C22 4.17 19.83 2 16.19 2ZM14.48 8.05V12.81C14.48 12.82 14.47 12.83 14.47 12.85C14.45 14.07 13.46 15.06 12.23 15.06C10.99 15.06 9.99 14.05 9.99 12.82C9.99 11.58 11 10.58 12.23 10.58C12.49 10.58 12.74 10.63 12.98 10.72V9.03L9.01 10.11V13.81C9.01 13.82 9 13.83 9 13.84C8.98 15.06 7.99 16.04 6.76 16.04C5.52 16.04 4.52 15.03 4.52 13.8C4.52 12.57 5.53 11.56 6.76 11.56C7.02 11.56 7.27 11.61 7.5 11.7V9.54V7.79C7.5 6.86 8.08 6.11 8.97 5.87L11.95 5.05C12.88 4.8 13.45 5.05 13.77 5.29C14.23 5.64 14.46 6.21 14.46 6.97V8.05H14.48Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MusicSquareRemoveBroken = ({
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
        d="M2 8.65002C2 3.90002 3.9 2 8.65 2H14.35C19.1 2 21 3.90002 21 8.65002V14.35C21 14.69 20.99 15.02 20.97 15.33C20.25 14.51 19.18 14 18 14C15.79 14 14 15.79 14 18C14 18.75 14.21 19.46 14.58 20.06C14.78 20.4 15.04 20.71 15.34 20.97C15.03 20.99 14.7 21 14.35 21H8.65C3.9 21 2 19.1 2 14.35V12.97"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.71954 14.42C7.52035 14.42 8.16953 13.7708 8.16953 12.97C8.16953 12.1692 7.52035 11.52 6.71954 11.52C5.91872 11.52 5.26953 12.1692 5.26953 12.97C5.26953 13.7708 5.91872 14.42 6.71954 14.42Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.4699 12V6.34001C13.4699 5.13001 12.7099 4.96997 11.9499 5.17997L9.05992 5.96995C8.53992 6.10995 8.16992 6.52999 8.16992 7.12999V8.14V8.81999V12.97"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.0301 13.4501C12.8309 13.4501 13.4801 12.8009 13.4801 12.0001C13.4801 11.1992 12.8309 10.55 12.0301 10.55C11.2293 10.55 10.5801 11.1992 10.5801 12.0001C10.5801 12.8009 11.2293 13.4501 12.0301 13.4501Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.16992 8.8299L13.4699 7.37988"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 18C22 18.75 21.79 19.46 21.42 20.06C20.73 21.22 19.46 22 18 22C16.97 22 16.04 21.61 15.34 20.97C15.04 20.71 14.78 20.4 14.58 20.06C14.21 19.46 14 18.75 14 18C14 15.79 15.79 14 18 14C19.18 14 20.25 14.51 20.97 15.33C21.61 16.04 22 16.98 22 18Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.0692 19.0399L16.9492 16.9299"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.0497 16.96L16.9297 19.0699"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MusicSquareRemoveBulk = ({
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
        d="M21.97 16.33C21.25 15.51 20.18 15 19 15C16.79 15 15 16.79 15 19C15 19.75 15.21 20.46 15.58 21.06C15.78 21.4 16.04 21.71 16.34 21.97C17.04 22.61 17.97 23 19 23C20.46 23 21.73 22.22 22.42 21.06C22.79 20.46 23 19.75 23 19C23 17.98 22.61 17.04 21.97 16.33ZM20.6 20.58C20.45 20.73 20.26 20.8 20.07 20.8C19.88 20.8 19.69 20.73 19.54 20.58L19.01 20.05L18.46 20.6C18.31 20.75 18.12 20.82 17.93 20.82C17.74 20.82 17.55 20.75 17.4 20.6C17.11 20.31 17.11 19.83 17.4 19.54L17.95 18.99L17.42 18.46C17.13 18.17 17.13 17.69 17.42 17.4C17.71 17.11 18.19 17.11 18.48 17.4L19.01 17.93L19.51 17.43C19.8 17.14 20.28 17.14 20.57 17.43C20.86 17.72 20.86 18.2 20.57 18.49L20.07 18.99L20.6 19.52C20.89 19.81 20.89 20.28 20.6 20.58Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M16.34 21.97C16.04 21.71 15.78 21.4 15.58 21.06C15.21 20.46 15 19.75 15 19C15 16.79 16.79 15 19 15C20.18 15 21.25 15.51 21.97 16.33C21.98 16.34 21.98 16.35 21.99 16.35C21.99 16.29 22 16.24 22 16.19V7.81C22 4.17 19.83 2 16.19 2H7.81C7.53 2 7.26 2.00999 7 2.04999C3.85 2.33999 2 4.45 2 7.81V16.19C2 19.55 3.85 21.66 7 21.95C7.26 21.99 7.53 22 7.81 22H16.19C16.25 22 16.3 21.99 16.36 21.99C16.36 21.98 16.35 21.98 16.34 21.97Z"
        fill="currentColor"
      />
      <Path
        d="M13.7793 5.29976C13.4593 5.04976 12.8793 4.80977 11.9593 5.05977L8.9793 5.87977C8.0893 6.10977 7.5093 6.85976 7.5093 7.79976V9.54976V11.7098C7.2793 11.6298 7.02929 11.5698 6.76929 11.5698C5.52929 11.5698 4.5293 12.5798 4.5293 13.8098C4.5293 15.0398 5.53929 16.0498 6.76929 16.0498C7.98929 16.0498 8.9893 15.0597 9.0093 13.8497C9.0093 13.8397 9.01929 13.8298 9.01929 13.8198V10.1198L12.9893 9.03975V10.7197C12.7593 10.6397 12.5093 10.5798 12.2393 10.5798C10.9993 10.5798 9.9993 11.5898 9.9993 12.8198C9.9993 14.0598 11.0093 15.0598 12.2393 15.0598C13.4593 15.0598 14.4593 14.0697 14.4793 12.8497C14.4793 12.8397 14.4893 12.8298 14.4893 12.8098V8.04976V6.97975C14.4793 6.21975 14.2393 5.64976 13.7793 5.29976ZM6.7593 14.5498C6.3493 14.5498 6.01929 14.2198 6.01929 13.8098C6.01929 13.3998 6.3493 13.0698 6.7593 13.0698C7.1693 13.0698 7.4993 13.3998 7.4993 13.8098C7.4993 14.2198 7.1693 14.5498 6.7593 14.5498ZM12.2293 13.5498C11.8193 13.5498 11.4893 13.2198 11.4893 12.8098C11.4893 12.3998 11.8193 12.0698 12.2293 12.0698C12.6393 12.0698 12.9693 12.3998 12.9693 12.8098C12.9693 13.2198 12.6393 13.5498 12.2293 13.5498Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MusicSquareRemoveLinear = ({
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
        d="M21 8.65002V14.35C21 14.69 20.99 15.02 20.97 15.33C20.25 14.51 19.18 14 18 14C15.79 14 14 15.79 14 18C14 18.75 14.21 19.46 14.58 20.06C14.78 20.4 15.04 20.71 15.34 20.97C15.03 20.99 14.7 21 14.35 21H8.65C3.9 21 2 19.1 2 14.35V8.65002C2 3.90002 3.9 2 8.65 2H14.35C19.1 2 21 3.90002 21 8.65002Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.72002 14.42C7.52084 14.42 8.17002 13.7708 8.17002 12.97C8.17002 12.1692 7.52084 11.52 6.72002 11.52C5.91921 11.52 5.27002 12.1692 5.27002 12.97C5.27002 13.7708 5.91921 14.42 6.72002 14.42Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.47 12V6.34001C13.47 5.13001 12.71 4.96997 11.95 5.17997L9.06004 5.96995C8.54004 6.10995 8.17004 6.52999 8.17004 7.12999V8.14V8.81999V12.97"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.0301 13.4501C12.8309 13.4501 13.4801 12.8009 13.4801 12.0001C13.4801 11.1992 12.8309 10.55 12.0301 10.55C11.2293 10.55 10.5801 11.1992 10.5801 12.0001C10.5801 12.8009 11.2293 13.4501 12.0301 13.4501Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.17004 8.8299L13.47 7.37988"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 18C22 18.75 21.79 19.46 21.42 20.06C20.73 21.22 19.46 22 18 22C16.97 22 16.04 21.61 15.34 20.97C15.04 20.71 14.78 20.4 14.58 20.06C14.21 19.46 14 18.75 14 18C14 15.79 15.79 14 18 14C19.18 14 20.25 14.51 20.97 15.33C21.61 16.04 22 16.98 22 18Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.0701 19.0399L16.9501 16.9299"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.0501 16.96L16.9301 19.0699"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MusicSquareRemoveOutline = ({
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
        d="M14.35 21.75H8.65C3.46 21.75 1.25 19.54 1.25 14.35V8.65002C1.25 3.46002 3.46 1.25 8.65 1.25H14.35C19.54 1.25 21.75 3.46002 21.75 8.65002V14.35C21.75 14.71 21.74 15.05 21.72 15.38C21.7 15.68 21.5 15.94 21.21 16.04C20.92 16.14 20.61 16.05 20.4 15.83C19.8 15.15 18.92 14.75 17.99 14.75C16.2 14.75 14.74 16.21 14.74 18C14.74 18.59 14.9 19.17 15.21 19.67C15.37 19.95 15.58 20.2 15.82 20.41C16.05 20.61 16.14 20.93 16.04 21.21C15.94 21.5 15.68 21.7 15.38 21.72C15.06 21.74 14.72 21.75 14.35 21.75ZM8.65 2.75C4.29 2.75 2.75 4.29002 2.75 8.65002V14.35C2.75 18.71 4.29 20.25 8.65 20.25H13.82C13.45 19.57 13.25 18.8 13.25 18C13.25 15.38 15.38 13.25 18 13.25C18.8 13.25 19.57 13.45 20.25 13.81V8.65002C20.25 4.29002 18.71 2.75 14.35 2.75H8.65Z"
        fill="currentColor"
      />
      <Path
        d="M6.71954 15.17C5.50954 15.17 4.51953 14.18 4.51953 12.97C4.51953 11.76 5.50954 10.77 6.71954 10.77C7.92954 10.77 8.91953 11.76 8.91953 12.97C8.91953 14.18 7.92954 15.17 6.71954 15.17ZM6.71954 12.27C6.33954 12.27 6.01953 12.58 6.01953 12.97C6.01953 13.35 6.32954 13.67 6.71954 13.67C7.10954 13.67 7.41953 13.36 7.41953 12.97C7.41953 12.58 7.10954 12.27 6.71954 12.27Z"
        fill="currentColor"
      />
      <Path
        d="M8.16992 13.7199C7.75992 13.7199 7.41992 13.3799 7.41992 12.9699V7.13993C7.41992 6.22993 7.98992 5.48992 8.85992 5.24992L11.7599 4.45994C12.6599 4.20994 13.2299 4.44992 13.5399 4.68992C13.8499 4.92992 14.2299 5.40994 14.2299 6.33994V11.9999C14.2299 12.4099 13.8899 12.7499 13.4799 12.7499C13.0699 12.7499 12.7299 12.4099 12.7299 11.9999V6.33994C12.7299 6.01994 12.6599 5.89992 12.6299 5.87992C12.5999 5.85992 12.4499 5.81994 12.1499 5.89994L9.25993 6.68992C8.95993 6.76992 8.91992 6.97992 8.91992 7.12992V12.9599C8.91992 13.3799 8.57992 13.7199 8.16992 13.7199Z"
        fill="currentColor"
      />
      <Path
        d="M12.0301 14.1998C10.8201 14.1998 9.83008 13.2098 9.83008 11.9998C9.83008 10.7898 10.8201 9.7998 12.0301 9.7998C13.2401 9.7998 14.2301 10.7898 14.2301 11.9998C14.2301 13.2198 13.2401 14.1998 12.0301 14.1998ZM12.0301 11.3098C11.6501 11.3098 11.3301 11.6198 11.3301 12.0098C11.3301 12.3898 11.6401 12.7098 12.0301 12.7098C12.4201 12.7098 12.7301 12.3998 12.7301 12.0098C12.7301 11.6198 12.4101 11.3098 12.0301 11.3098Z"
        fill="currentColor"
      />
      <Path
        d="M8.17055 9.58008C7.84055 9.58008 7.54055 9.36009 7.45055 9.03009C7.34055 8.63009 7.58055 8.22005 7.98055 8.11005L13.2905 6.66003C13.6905 6.56003 14.1005 6.79006 14.2105 7.19006C14.3205 7.59006 14.0805 8.00005 13.6805 8.11005L8.37055 9.56006C8.30055 9.57006 8.23055 9.58008 8.17055 9.58008Z"
        fill="currentColor"
      />
      <Path
        d="M18 22.75C16.82 22.75 15.7 22.31 14.83 21.52C14.48 21.22 14.17 20.85 13.93 20.44C13.49 19.72 13.25 18.87 13.25 18C13.25 15.38 15.38 13.25 18 13.25C19.36 13.25 20.65 13.83 21.53 14.83C22.31 15.7 22.75 16.82 22.75 18C22.75 18.87 22.51 19.72 22.06 20.45C21.22 21.87 19.66 22.75 18 22.75ZM18 14.75C16.21 14.75 14.75 16.21 14.75 18C14.75 18.59 14.91 19.17 15.22 19.67C15.38 19.95 15.59 20.2 15.83 20.41C16.43 20.96 17.2 21.26 18 21.26C19.15 21.26 20.19 20.67 20.78 19.69C21.09 19.18 21.25 18.61 21.25 18.01C21.25 17.21 20.95 16.44 20.41 15.84C19.81 15.14 18.93 14.75 18 14.75Z"
        fill="currentColor"
      />
      <Path
        d="M19.0704 19.7901C18.8804 19.7901 18.6904 19.7201 18.5404 19.5701L16.4304 17.4601C16.1404 17.1701 16.1404 16.6901 16.4304 16.4001C16.7204 16.1101 17.2004 16.1101 17.4904 16.4001L19.6004 18.5101C19.8904 18.8001 19.8904 19.2801 19.6004 19.5701C19.4504 19.7201 19.2604 19.7901 19.0704 19.7901Z"
        fill="currentColor"
      />
      <Path
        d="M16.9311 19.8199C16.7411 19.8199 16.5511 19.7499 16.4011 19.5999C16.1111 19.3099 16.1111 18.8299 16.4011 18.5399L18.5111 16.4299C18.8011 16.1399 19.2811 16.1399 19.5711 16.4299C19.8611 16.7199 19.8611 17.1999 19.5711 17.4899L17.4611 19.5999C17.3111 19.7499 17.1211 19.8199 16.9311 19.8199Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MusicSquareRemoveTwotone = ({
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
        d="M21 8.65002V14.35C21 14.69 20.99 15.02 20.97 15.33C20.25 14.51 19.18 14 18 14C15.79 14 14 15.79 14 18C14 18.75 14.21 19.46 14.58 20.06C14.78 20.4 15.04 20.71 15.34 20.97C15.03 20.99 14.7 21 14.35 21H8.65C3.9 21 2 19.1 2 14.35V8.65002C2 3.90002 3.9 2 8.65 2H14.35C19.1 2 21 3.90002 21 8.65002Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M6.71954 14.42C7.52035 14.42 8.16953 13.7708 8.16953 12.97C8.16953 12.1692 7.52035 11.52 6.71954 11.52C5.91872 11.52 5.26953 12.1692 5.26953 12.97C5.26953 13.7708 5.91872 14.42 6.71954 14.42Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M13.4699 12V6.34001C13.4699 5.13001 12.7099 4.96997 11.9499 5.17997L9.05992 5.96995C8.53992 6.10995 8.16992 6.52999 8.16992 7.12999V8.14V8.81999V12.97"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12.0301 13.4498C12.8309 13.4498 13.4801 12.8006 13.4801 11.9998C13.4801 11.199 12.8309 10.5498 12.0301 10.5498C11.2293 10.5498 10.5801 11.199 10.5801 11.9998C10.5801 12.8006 11.2293 13.4498 12.0301 13.4498Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M8.16992 8.8299L13.4699 7.37988"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Path
        d="M22 18C22 18.75 21.79 19.46 21.42 20.06C20.73 21.22 19.46 22 18 22C16.97 22 16.04 21.61 15.34 20.97C15.04 20.71 14.78 20.4 14.58 20.06C14.21 19.46 14 18.75 14 18C14 15.79 15.79 14 18 14C19.18 14 20.25 14.51 20.97 15.33C21.61 16.04 22 16.98 22 18Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M19.0692 19.0402L16.9492 16.9302"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M19.0497 16.96L16.9297 19.0699"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};

const variants: IconVariants = {
  bold: MusicSquareRemoveBold,
  broken: MusicSquareRemoveBroken,
  bulk: MusicSquareRemoveBulk,
  linear: MusicSquareRemoveLinear,
  outline: MusicSquareRemoveOutline,
  twotone: MusicSquareRemoveTwotone,
};

export const MusicSquareRemoveIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
