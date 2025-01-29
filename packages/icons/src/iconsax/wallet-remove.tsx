import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const WalletRemoveBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.5 12.5H19C17.9 12.5 17 13.4 17 14.5C17 15.6 17.9 16.5 19 16.5H21.5C21.78 16.5 22 16.28 22 16V13C22 12.72 21.78 12.5 21.5 12.5Z"
        fill="currentColor"
      />
      <Path
        d="M5 15C3.8 15 2.73 15.53 2 16.36C1.38 17.07 1 17.99 1 19C1 19.75 1.21 20.46 1.58 21.06C2.27 22.22 3.54 23 5 23C6.01 23 6.93 22.63 7.63 22C7.94 21.74 8.21 21.42 8.42 21.06C8.79 20.46 9 19.75 9 19C9 16.79 7.21 15 5 15ZM6.6 20.58C6.45 20.73 6.26 20.8 6.07 20.8C5.88 20.8 5.69 20.73 5.54 20.58L5.01 20.05L4.46 20.6C4.31 20.75 4.12 20.82 3.93 20.82C3.74 20.82 3.55 20.75 3.4 20.6C3.11 20.31 3.11 19.83 3.4 19.54L3.95 18.99L3.42 18.46C3.13 18.17 3.13 17.69 3.42 17.4C3.71 17.11 4.19 17.11 4.48 17.4L5.01 17.93L5.51 17.43C5.8 17.14 6.28 17.14 6.57 17.43C6.86 17.72 6.86 18.2 6.57 18.49L6.07 18.99L6.6 19.52C6.89 19.81 6.89 20.28 6.6 20.58Z"
        fill="currentColor"
      />
      <Path
        d="M16.5292 5.40016C16.8292 5.69016 16.5792 6.14016 16.1592 6.14016L7.87923 6.13016C7.39923 6.13016 7.15923 5.55016 7.49923 5.21016L9.24923 3.45016C10.7292 1.98016 13.1192 1.98016 14.5992 3.45016L16.4892 5.36016C16.4992 5.37016 16.5192 5.39016 16.5292 5.40016Z"
        fill="currentColor"
      />
      <Path
        d="M21.8694 18.66C21.2594 20.72 19.4994 22 17.0994 22H10.5994C10.2094 22 9.95938 21.57 10.1194 21.21C10.4194 20.51 10.6094 19.72 10.6094 19C10.6094 15.97 8.13938 13.5 5.10938 13.5C4.34938 13.5 3.60938 13.66 2.92938 13.96C2.55938 14.12 2.10938 13.87 2.10938 13.47V12C2.10938 9.28 3.74938 7.38 6.29938 7.06C6.54938 7.02 6.81937 7 7.09937 7H17.0994C17.3594 7 17.6094 7.01 17.8494 7.05C19.8694 7.28 21.3294 8.51 21.8694 10.34C21.9694 10.67 21.7294 11 21.3894 11H19.0994C16.9294 11 15.2094 12.98 15.6794 15.23C16.0094 16.87 17.5294 18 19.1994 18H21.3894C21.7394 18 21.9694 18.34 21.8694 18.66Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const WalletRemoveBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M6.19 7.06C6.45 7.02 6.72 7 7 7H17C17.26 7 17.51 7.00999 17.75 7.04999C20.33 7.34999 22 9.26 22 12V17C22 20 20 22 17 22H7.63C7.94 21.74 8.20998 21.42 8.41998 21.06C8.78998 20.46 9 19.75 9 19C9 16.79 7.21 15 5 15C3.8 15 2.73 15.53 2 16.36V12C2 11.13 2.16998 10.34 2.47998 9.66998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.7495 7.04997C17.5095 7.00997 17.2595 6.99998 16.9995 6.99998H6.99945C6.71945 6.99998 6.44945 7.01998 6.18945 7.05998C6.32945 6.77998 6.52947 6.52001 6.76947 6.28001L10.0195 3.02C11.3895 1.66 13.6094 1.66 14.9794 3.02L16.7294 4.78996C17.3694 5.41996 17.7095 6.21997 17.7495 7.04997Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 12.5H19C17.9 12.5 17 13.4 17 14.5C17 15.6 17.9 16.5 19 16.5H22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 19C9 19.75 8.78998 20.46 8.41998 21.06C8.20998 21.42 7.94 21.74 7.63 22C6.93 22.63 6.01 23 5 23C3.54 23 2.27002 22.22 1.58002 21.06C1.21002 20.46 1 19.75 1 19C1 17.99 1.38 17.07 2 16.36C2.73 15.53 3.8 15 5 15C7.21 15 9 16.79 9 19Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.06897 20.0399L3.95898 17.9299"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.03967 17.96L3.92969 20.0699"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const WalletRemoveBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 12V17C22 20 20 22 17 22H7.63C7.94 21.74 8.20998 21.42 8.41998 21.06C8.78998 20.46 9 19.75 9 19C9 16.79 7.21 15 5 15C3.8 15 2.73 15.53 2 16.36V12C2 9.28 3.64 7.38 6.19 7.06C6.45 7.02 6.72 7 7 7H17C17.26 7 17.51 7.00999 17.75 7.04999C20.33 7.34999 22 9.26 22 12Z"
        fill="currentColor"
      />
      <Path
        d="M17.7495 7.04997C17.5095 7.00997 17.2595 6.99998 16.9995 6.99998H6.99945C6.71945 6.99998 6.44945 7.01998 6.18945 7.05998C6.32945 6.77998 6.52947 6.52001 6.76947 6.28001L10.0195 3.02C11.3895 1.66 13.6094 1.66 14.9794 3.02L16.7294 4.78996C17.3694 5.41996 17.7095 6.21997 17.7495 7.04997Z"
        fill="currentColor"
      />
      <Path
        d="M22 12.5H19C17.9 12.5 17 13.4 17 14.5C17 15.6 17.9 16.5 19 16.5H22"
        fill="currentColor"
      />
      <Path
        d="M5 15C3.8 15 2.73 15.53 2 16.36C1.38 17.07 1 17.99 1 19C1 19.75 1.21002 20.46 1.58002 21.06C2.27002 22.22 3.54 23 5 23C6.01 23 6.93001 22.63 7.63 22C7.94 21.74 8.20998 21.42 8.41998 21.06C8.78998 20.46 9 19.75 9 19C9 16.79 7.21 15 5 15ZM6.59998 20.58C6.44998 20.73 6.26001 20.8 6.07001 20.8C5.88001 20.8 5.68998 20.73 5.53998 20.58L5.01001 20.05L4.46002 20.6C4.31002 20.75 4.11999 20.82 3.92999 20.82C3.73999 20.82 3.55002 20.75 3.40002 20.6C3.11002 20.31 3.11002 19.83 3.40002 19.54L3.95001 18.99L3.41998 18.46C3.12998 18.17 3.12998 17.69 3.41998 17.4C3.70998 17.11 4.18998 17.11 4.47998 17.4L5.01001 17.93L5.51001 17.43C5.80001 17.14 6.28001 17.14 6.57001 17.43C6.86001 17.72 6.86001 18.2 6.57001 18.49L6.07001 18.99L6.59998 19.52C6.88998 19.81 6.88998 20.28 6.59998 20.58Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const WalletRemoveLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 12V17C22 20 20 22 17 22H7.63C7.94 21.74 8.20998 21.42 8.41998 21.06C8.78998 20.46 9 19.75 9 19C9 16.79 7.21 15 5 15C3.8 15 2.73 15.53 2 16.36V12C2 9.28 3.64 7.38 6.19 7.06C6.45 7.02 6.72 7 7 7H17C17.26 7 17.51 7.00999 17.75 7.04999C20.33 7.34999 22 9.26 22 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.7514 7.04997C17.5114 7.00997 17.2614 6.99998 17.0014 6.99998H7.0014C6.7214 6.99998 6.45141 7.01998 6.19141 7.05998C6.33141 6.77998 6.53142 6.52001 6.77142 6.28001L10.0214 3.02C11.3914 1.66 13.6114 1.66 14.9814 3.02L16.7314 4.78996C17.3714 5.41996 17.7114 6.21997 17.7514 7.04997Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 12.5H19C17.9 12.5 17 13.4 17 14.5C17 15.6 17.9 16.5 19 16.5H22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 19C9 19.75 8.78998 20.46 8.41998 21.06C8.20998 21.42 7.94 21.74 7.63 22C6.93 22.63 6.01 23 5 23C3.54 23 2.27002 22.22 1.58002 21.06C1.21002 20.46 1 19.75 1 19C1 17.99 1.38 17.07 2 16.36C2.73 15.53 3.8 15 5 15C7.21 15 9 16.79 9 19Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.07117 20.0399L3.96118 17.9299"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.03992 17.96L3.92993 20.0699"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const WalletRemoveOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.0005 22.75H7.63049C7.31049 22.75 7.03047 22.55 6.92047 22.26C6.81047 21.97 6.9005 21.63 7.1405 21.43C7.3805 21.23 7.6005 20.97 7.7605 20.69C8.0805 20.18 8.24048 19.6 8.24048 19.01C8.24048 17.22 6.78048 15.76 4.99048 15.76C4.06048 15.76 3.17048 16.16 2.55048 16.87C2.34048 17.1 2.01046 17.19 1.72046 17.08C1.43046 16.97 1.23047 16.69 1.23047 16.38V12C1.23047 8.92 3.13051 6.69001 6.08051 6.32001C6.35051 6.28001 6.66047 6.25 6.98047 6.25H16.9805C17.2205 6.25 17.5305 6.26 17.8505 6.31C20.8005 6.65 22.7305 8.89 22.7305 12V17C22.7505 20.44 20.4405 22.75 17.0005 22.75ZM9.18048 21.25H17.0005C19.5805 21.25 21.2505 19.58 21.2505 17V12C21.2505 9.66 19.8805 8.04998 17.6605 7.78998C17.4205 7.74998 17.2105 7.75 17.0005 7.75H7.00049C6.76049 7.75 6.53048 7.76999 6.30048 7.79999C4.10048 8.07999 2.75049 9.68 2.75049 12V14.82C3.43049 14.45 4.21049 14.25 5.00049 14.25C7.62049 14.25 9.75049 16.38 9.75049 19C9.75049 19.79 9.55048 20.57 9.18048 21.25Z"
        fill="currentColor"
      />
      <Path
        d="M6.19003 7.80995C5.95003 7.80995 5.73005 7.69995 5.58005 7.49995C5.41005 7.26995 5.39005 6.96992 5.52005 6.71992C5.69005 6.37992 5.93002 6.04995 6.24002 5.74995L9.49002 2.48994C11.15 0.839941 13.85 0.839941 15.51 2.48994L17.26 4.26997C18 4.99997 18.45 5.97997 18.5 7.01997C18.51 7.24997 18.42 7.46995 18.25 7.61995C18.08 7.76995 17.85 7.83994 17.63 7.79994C17.43 7.76994 17.22 7.75996 17 7.75996H7.00003C6.76003 7.75996 6.53002 7.77995 6.30002 7.80995C6.27002 7.80995 6.23003 7.80995 6.19003 7.80995ZM7.86001 6.24995H16.82C16.69 5.90995 16.48 5.59996 16.2 5.31996L14.44 3.53993C13.37 2.47993 11.62 2.47993 10.54 3.53993L7.86001 6.24995Z"
        fill="currentColor"
      />
      <Path
        d="M22 17.25H19C17.48 17.25 16.25 16.02 16.25 14.5C16.25 12.98 17.48 11.75 19 11.75H22C22.41 11.75 22.75 12.09 22.75 12.5C22.75 12.91 22.41 13.25 22 13.25H19C18.31 13.25 17.75 13.81 17.75 14.5C17.75 15.19 18.31 15.75 19 15.75H22C22.41 15.75 22.75 16.09 22.75 16.5C22.75 16.91 22.41 17.25 22 17.25Z"
        fill="currentColor"
      />
      <Path
        d="M5 23.75C3.34 23.75 1.78 22.87 0.940002 21.44C0.490002 20.72 0.25 19.87 0.25 19C0.25 17.85 0.670002 16.74 1.44 15.87C2.34 14.84 3.64 14.25 5 14.25C7.62 14.25 9.75 16.38 9.75 19C9.75 19.87 9.51 20.72 9.06 21.45C8.81 21.87 8.48999 22.25 8.10999 22.57C7.27999 23.33 6.17 23.75 5 23.75ZM5 15.75C4.07 15.75 3.18 16.15 2.56 16.86C2.04 17.46 1.75 18.22 1.75 19C1.75 19.59 1.90997 20.17 2.21997 20.67C2.79997 21.65 3.87 22.25 5 22.25C5.79 22.25 6.55 21.96 7.13 21.44C7.39001 21.22 7.61002 20.96 7.77002 20.68C8.09002 20.17 8.25 19.59 8.25 19C8.25 17.21 6.79 15.75 5 15.75Z"
        fill="currentColor"
      />
      <Path
        d="M6.07041 20.7901C5.88041 20.7901 5.69038 20.7201 5.54038 20.5701L3.43039 18.4601C3.14039 18.1701 3.14039 17.6901 3.43039 17.4001C3.72039 17.1101 4.20039 17.1101 4.49039 17.4001L6.60037 19.5101C6.89037 19.8001 6.89037 20.2801 6.60037 20.5701C6.45037 20.7201 6.26041 20.7901 6.07041 20.7901Z"
        fill="currentColor"
      />
      <Path
        d="M3.93106 20.8199C3.74106 20.8199 3.55109 20.7499 3.40109 20.5999C3.11109 20.3099 3.11109 19.8299 3.40109 19.5399L5.51108 17.4299C5.80108 17.1399 6.28108 17.1399 6.57108 17.4299C6.86108 17.7199 6.86108 18.1999 6.57108 18.4899L4.46109 20.5999C4.31109 20.7499 4.12106 20.8199 3.93106 20.8199Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const WalletRemoveTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 12V17C22 20 20 22 17 22H7.63C7.94 21.74 8.20998 21.42 8.41998 21.06C8.78998 20.46 9 19.75 9 19C9 16.79 7.21 15 5 15C3.8 15 2.73 15.53 2 16.36V12C2 9.28 3.64 7.38 6.19 7.06C6.45 7.02 6.72 7 7 7H17C17.26 7 17.51 7.00999 17.75 7.04999C20.33 7.34999 22 9.26 22 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M17.7495 7.04997C17.5095 7.00997 17.2595 6.99998 16.9995 6.99998H6.99945C6.71945 6.99998 6.44945 7.01998 6.18945 7.05998C6.32945 6.77998 6.52947 6.52001 6.76947 6.28001L10.0195 3.02C11.3895 1.66 13.6094 1.66 14.9794 3.02L16.7294 4.78996C17.3694 5.41996 17.7095 6.21997 17.7495 7.04997Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M22 12.5H19C17.9 12.5 17 13.4 17 14.5C17 15.6 17.9 16.5 19 16.5H22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 19C9 19.75 8.78998 20.46 8.41998 21.06C8.20998 21.42 7.94 21.74 7.63 22C6.93 22.63 6.01 23 5 23C3.54 23 2.27002 22.22 1.58002 21.06C1.21002 20.46 1 19.75 1 19C1 17.99 1.38 17.07 2 16.36C2.73 15.53 3.8 15 5 15C7.21 15 9 16.79 9 19Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.06897 20.0402L3.95898 17.9302"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.03967 17.96L3.92969 20.0699"
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
  bold: WalletRemoveBold,
  broken: WalletRemoveBroken,
  bulk: WalletRemoveBulk,
  linear: WalletRemoveLinear,
  outline: WalletRemoveOutline,
  twotone: WalletRemoveTwotone,
};

export const WalletRemoveIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default WalletRemoveIcon;
