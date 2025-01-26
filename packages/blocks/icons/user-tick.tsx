import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const UserTickBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.0002 14C6.99016 14 2.91016 17.36 2.91016 21.5C2.91016 21.78 3.13016 22 3.41016 22H20.5902C20.8702 22 21.0902 21.78 21.0902 21.5C21.0902 17.36 17.0102 14 12.0002 14Z"
        fill="currentColor"
      />
      <Path
        d="M12 2C10.82 2 9.74 2.41 8.88 3.1C7.73 4.01 7 5.42 7 7C7 7.94 7.26 8.82 7.73 9.57C8.59 11.02 10.17 12 12 12C13.26 12 14.41 11.54 15.29 10.75C15.68 10.42 16.02 10.02 16.28 9.57C16.74 8.82 17 7.94 17 7C17 4.24 14.76 2 12 2ZM14.59 6.46L11.92 8.92C11.74 9.09 11.51 9.17 11.28 9.17C11.04 9.17 10.8 9.08 10.62 8.9L9.39 7.66C9.02 7.29 9.02 6.7 9.39 6.33C9.76 5.96 10.35 5.96 10.72 6.33L11.31 6.92L13.32 5.07C13.7 4.72 14.29 4.74 14.64 5.12C14.99 5.51 14.97 6.11 14.59 6.46Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const UserTickBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.02 3.01001C14.18 2.37001 13.14 2 12 2C9.24 2 7 4.24 7 7C7 9.76 9.24 12 12 12C14.76 12 17 9.76 17 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.41016 22C3.41016 18.13 7.26015 15 12.0002 15C12.9602 15 13.8902 15.13 14.7602 15.37"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 18C22 18.75 21.79 19.46 21.42 20.06C21.21 20.42 20.94 20.74 20.63 21C19.93 21.63 19.01 22 18 22C16.54 22 15.27 21.22 14.58 20.06C14.21 19.46 14 18.75 14 18C14 16.74 14.58 15.61 15.5 14.88C16.19 14.33 17.06 14 18 14C20.21 14 22 15.79 22 18Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.4395 18L17.4294 18.99L19.5594 17.02"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const UserTickBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18 13C17.06 13 16.19 13.33 15.5 13.88C14.58 14.61 14 15.74 14 17C14 17.75 14.21 18.46 14.58 19.06C15.27 20.22 16.54 21 18 21C19.01 21 19.93 20.63 20.63 20C20.94 19.74 21.21 19.42 21.42 19.06C21.79 18.46 22 17.75 22 17C22 14.79 20.21 13 18 13ZM20.07 16.57L17.94 18.54C17.8 18.67 17.61 18.74 17.43 18.74C17.24 18.74 17.05 18.67 16.9 18.52L15.91 17.53C15.62 17.24 15.62 16.76 15.91 16.47C16.2 16.18 16.68 16.18 16.97 16.47L17.45 16.95L19.05 15.47C19.35 15.19 19.83 15.21 20.11 15.51C20.39 15.81 20.37 16.28 20.07 16.57Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M21.0901 21.5C21.0901 21.78 20.8701 22 20.5901 22H3.41016C3.13016 22 2.91016 21.78 2.91016 21.5C2.91016 17.36 6.99015 14 12.0002 14C13.0302 14 14.0302 14.14 14.9502 14.41C14.3602 15.11 14.0002 16.02 14.0002 17C14.0002 17.75 14.2101 18.46 14.5801 19.06C14.7801 19.4 15.0401 19.71 15.3401 19.97C16.0401 20.61 16.9702 21 18.0002 21C19.1202 21 20.1302 20.54 20.8502 19.8C21.0102 20.34 21.0901 20.91 21.0901 21.5Z"
        fill="currentColor"
      />
      <Path
        d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const UserTickLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.41003 22C3.41003 18.13 7.26003 15 12 15C12.96 15 13.89 15.13 14.76 15.37"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 18C22 18.75 21.79 19.46 21.42 20.06C21.21 20.42 20.94 20.74 20.63 21C19.93 21.63 19.01 22 18 22C16.54 22 15.27 21.22 14.58 20.06C14.21 19.46 14 18.75 14 18C14 16.74 14.58 15.61 15.5 14.88C16.19 14.33 17.06 14 18 14C20.21 14 22 15.79 22 18Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.4399 18L17.4299 18.99L19.5599 17.02"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const UserTickOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 12.75C8.83 12.75 6.25 10.17 6.25 7C6.25 3.83 8.83 1.25 12 1.25C15.17 1.25 17.75 3.83 17.75 7C17.75 10.17 15.17 12.75 12 12.75ZM12 2.75C9.66 2.75 7.75 4.66 7.75 7C7.75 9.34 9.66 11.25 12 11.25C14.34 11.25 16.25 9.34 16.25 7C16.25 4.66 14.34 2.75 12 2.75Z"
        fill="currentColor"
      />
      <Path
        d="M3.41016 22.75C3.00016 22.75 2.66016 22.41 2.66016 22C2.66016 17.73 6.85015 14.25 12.0002 14.25C13.0102 14.25 14.0001 14.38 14.9601 14.65C15.3601 14.76 15.5902 15.17 15.4802 15.57C15.3702 15.97 14.9601 16.2 14.5602 16.09C13.7402 15.86 12.8802 15.75 12.0002 15.75C7.68015 15.75 4.16016 18.55 4.16016 22C4.16016 22.41 3.82016 22.75 3.41016 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M18 22.75C16.34 22.75 14.78 21.87 13.94 20.44C13.49 19.72 13.25 18.87 13.25 18C13.25 16.54 13.9 15.19 15.03 14.29C15.87 13.62 16.93 13.25 18 13.25C20.62 13.25 22.75 15.38 22.75 18C22.75 18.87 22.51 19.72 22.06 20.45C21.81 20.87 21.49 21.25 21.11 21.57C20.28 22.33 19.17 22.75 18 22.75ZM18 14.75C17.26 14.75 16.56 15 15.97 15.47C15.2 16.08 14.75 17.01 14.75 18C14.75 18.59 14.91 19.17 15.22 19.67C15.8 20.65 16.87 21.25 18 21.25C18.79 21.25 19.55 20.96 20.13 20.44C20.39 20.22 20.61 19.96 20.77 19.68C21.09 19.17 21.25 18.59 21.25 18C21.25 16.21 19.79 14.75 18 14.75Z"
        fill="currentColor"
      />
      <Path
        d="M17.4289 19.7401C17.2389 19.7401 17.0489 19.6701 16.8989 19.5201L15.9089 18.5301C15.6189 18.2401 15.6189 17.76 15.9089 17.47C16.1989 17.18 16.6789 17.18 16.9689 17.47L17.4489 17.9501L19.0489 16.47C19.3489 16.19 19.8289 16.2101 20.1089 16.5101C20.3889 16.8101 20.3689 17.2901 20.0689 17.5701L17.9389 19.54C17.7889 19.67 17.6089 19.7401 17.4289 19.7401Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const UserTickTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M3.41016 22C3.41016 18.13 7.26015 15 12.0002 15C12.9602 15 13.8902 15.13 14.7602 15.37"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 18C22 18.75 21.79 19.46 21.42 20.06C21.21 20.42 20.94 20.74 20.63 21C19.93 21.63 19.01 22 18 22C16.54 22 15.27 21.22 14.58 20.06C14.21 19.46 14 18.75 14 18C14 16.74 14.58 15.61 15.5 14.88C16.19 14.33 17.06 14 18 14C20.21 14 22 15.79 22 18Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.4395 18L17.4294 18.99L19.5594 17.02"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: UserTickBold,
  broken: UserTickBroken,
  bulk: UserTickBulk,
  linear: UserTickLinear,
  outline: UserTickOutline,
  twotone: UserTickTwotone,
};

export const UserTickIcon = ({ variant = "linear", ...props }: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
