import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const MoneyChangeBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17 4H7C4 4 2 5.5 2 9V12.56C2 12.93 2.38 13.16 2.71 13.01C3.69 12.56 4.82 12.39 6.01 12.6C8.64 13.07 10.57 15.51 10.5 18.18C10.49 18.6 10.43 19.01 10.32 19.41C10.24 19.72 10.49 20.01 10.81 20.01H17C20 20.01 22 18.51 22 15.01V9C22 5.5 20 4 17 4ZM12 14.5C10.62 14.5 9.5 13.38 9.5 12C9.5 10.62 10.62 9.5 12 9.5C13.38 9.5 14.5 10.62 14.5 12C14.5 13.38 13.38 14.5 12 14.5ZM19.25 14C19.25 14.41 18.91 14.75 18.5 14.75C18.09 14.75 17.75 14.41 17.75 14V10C17.75 9.59 18.09 9.25 18.5 9.25C18.91 9.25 19.25 9.59 19.25 10V14Z"
        fill="currentColor"
      />
      <Path
        d="M5 14C3.75 14 2.62 14.59 1.89 15.49C1.33 16.18 1 17.05 1 18C1 20.21 2.8 22 5 22C6.74 22 8.23 20.89 8.77 19.33C8.92 18.92 9 18.47 9 18C9 15.8 7.21 14 5 14ZM7.36 19.74C7.34 19.8 7.3 19.86 7.26 19.9L6.54 20.61C6.45 20.71 6.33 20.75 6.2 20.75C6.07 20.75 5.94 20.71 5.85 20.61C5.69 20.46 5.67 20.22 5.77 20.04H3.76C3.12 20.04 2.6 19.52 2.6 18.87V18.77C2.6 18.49 2.82 18.28 3.09 18.28C3.36 18.28 3.58 18.49 3.58 18.77V18.87C3.58 18.98 3.66 19.07 3.77 19.07H5.78C5.68 18.88 5.7 18.65 5.86 18.49C6.05 18.3 6.36 18.3 6.54 18.49L7.26 19.21C7.3 19.25 7.34 19.31 7.37 19.37C7.41 19.48 7.41 19.62 7.36 19.74ZM7.4 17.23C7.4 17.51 7.18 17.72 6.91 17.72C6.64 17.72 6.42 17.51 6.42 17.23V17.13C6.42 17.02 6.34 16.93 6.23 16.93H4.23C4.33 17.12 4.31 17.35 4.15 17.51C4.06 17.6 3.94 17.65 3.8 17.65C3.68 17.65 3.55 17.6 3.46 17.51L2.74 16.79C2.7 16.75 2.66 16.69 2.63 16.63C2.59 16.51 2.59 16.38 2.63 16.26C2.66 16.21 2.69 16.14 2.74 16.1L3.46 15.39C3.65 15.19 3.96 15.19 4.14 15.39C4.3 15.54 4.32 15.78 4.22 15.96H6.23C6.87 15.96 7.39 16.48 7.39 17.13V17.23H7.4Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MoneyChangeBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.5 12C14.5 10.62 13.38 9.5 12 9.5C10.62 9.5 9.5 10.62 9.5 12C9.5 13.38 10.62 14.5 12 14.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 13.1401V15.0001C22 18.5001 20 20.0001 17 20.0001H12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 11V9C2 5.5 4 4 7 4H17C20 4 22 5.5 22 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.5 9.5V14.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 15.5H7.34003C7.98003 15.5 8.5 16.02 8.5 16.66V17.94"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.21997 14.28L2 15.5L3.21997 16.72"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.5 20.7801H3.15997C2.51997 20.7801 2 20.2601 2 19.6201V18.3401"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.2793 22.0001L8.49927 20.7801L7.2793 19.5601"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MoneyChangeBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 9V15C22 18.5 20 20 17 20H9.73999C9.90999 19.53 10 19.03 10 18.5C10 16.02 7.99 14 5.5 14C4.09 14 2.82 14.66 2 15.68V9C2 5.5 4 4 7 4H17C20 4 22 5.5 22 9Z"
        fill="currentColor"
      />
      <Path
        d="M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z"
        fill="currentColor"
      />
      <Path
        d="M18.5 14.75C18.09 14.75 17.75 14.41 17.75 14V10C17.75 9.59 18.09 9.25 18.5 9.25C18.91 9.25 19.25 9.59 19.25 10V14C19.25 14.41 18.91 14.75 18.5 14.75Z"
        fill="currentColor"
      />
      <Path
        d="M5.5 14C4.09 14 2.82 14.66 2 15.68C1.37 16.45 1 17.43 1 18.5C1 20.99 3.02 23 5.5 23C7.46 23 9.12999 21.75 9.73999 20C9.90999 19.53 10 19.03 10 18.5C10 16.02 7.99 14 5.5 14ZM8.15997 20.46C8.12997 20.52 8.08998 20.59 8.03998 20.64L7.22998 21.44C7.12998 21.55 6.98998 21.6 6.84998 21.6C6.69998 21.6 6.56002 21.55 6.46002 21.44C6.28002 21.27 6.25999 21 6.37 20.8H4.10999C3.38999 20.8 2.79999 20.21 2.79999 19.48V19.37C2.79999 19.06 3.04998 18.82 3.34998 18.82C3.64998 18.82 3.90002 19.06 3.90002 19.37V19.48C3.90002 19.6 3.98999 19.7 4.10999 19.7H6.37C6.25999 19.49 6.28002 19.23 6.46002 19.05C6.67002 18.84 7.01998 18.84 7.22998 19.05L8.03998 19.86C8.08998 19.91 8.12997 19.97 8.15997 20.04C8.20997 20.17 8.20997 20.32 8.15997 20.46ZM8.20001 17.63C8.20001 17.94 7.95002 18.18 7.65002 18.18C7.35002 18.18 7.09998 17.94 7.09998 17.63V17.52C7.09998 17.4 7.01001 17.3 6.89001 17.3H4.63C4.74 17.51 4.71998 17.77 4.53998 17.95C4.43998 18.05 4.30002 18.11 4.15002 18.11C4.01002 18.11 3.87002 18.05 3.77002 17.95L2.96002 17.14C2.91002 17.09 2.87003 17.03 2.84003 16.96C2.79003 16.83 2.79003 16.68 2.84003 16.54C2.87003 16.48 2.91002 16.41 2.96002 16.36L3.77002 15.56C3.98002 15.34 4.32998 15.34 4.53998 15.56C4.71998 15.73 4.74 16 4.63 16.2H6.89001C7.61001 16.2 8.20001 16.79 8.20001 17.52V17.63Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MoneyChangeLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 11V9C2 5.5 4 4 7 4H17C20 4 22 5.5 22 9V15C22 18.5 20 20 17 20H12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.5 9.5V14.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 15.5H7.34003C7.98003 15.5 8.5 16.02 8.5 16.66V17.94"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.21997 14.28L2 15.5L3.21997 16.72"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.5 20.7801H3.15997C2.51997 20.7801 2 20.2601 2 19.6201V18.3401"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.28125 22.0003L8.50122 20.7803L7.28125 19.5603"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MoneyChangeOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17 20.75H12C11.59 20.75 11.25 20.41 11.25 20C11.25 19.59 11.59 19.25 12 19.25H17C19.86 19.25 21.25 17.86 21.25 15V9C21.25 6.14 19.86 4.75 17 4.75H7C4.14 4.75 2.75 6.14 2.75 9V11C2.75 11.41 2.41 11.75 2 11.75C1.59 11.75 1.25 11.41 1.25 11V9C1.25 5.35 3.35 3.25 7 3.25H17C20.65 3.25 22.75 5.35 22.75 9V15C22.75 18.65 20.65 20.75 17 20.75Z"
        fill="currentColor"
      />
      <Path
        d="M12 15.25C10.21 15.25 8.75 13.79 8.75 12C8.75 10.21 10.21 8.75 12 8.75C13.79 8.75 15.25 10.21 15.25 12C15.25 13.79 13.79 15.25 12 15.25ZM12 10.25C11.04 10.25 10.25 11.04 10.25 12C10.25 12.96 11.04 13.75 12 13.75C12.96 13.75 13.75 12.96 13.75 12C13.75 11.04 12.96 10.25 12 10.25Z"
        fill="currentColor"
      />
      <Path
        d="M18.5 15.25C18.09 15.25 17.75 14.91 17.75 14.5V9.5C17.75 9.09 18.09 8.75 18.5 8.75C18.91 8.75 19.25 9.09 19.25 9.5V14.5C19.25 14.91 18.91 15.25 18.5 15.25Z"
        fill="currentColor"
      />
      <Path
        d="M8.5 18.69C8.09 18.69 7.75 18.35 7.75 17.94V16.66C7.75 16.44 7.57003 16.25 7.34003 16.25H2C1.59 16.25 1.25 15.91 1.25 15.5C1.25 15.09 1.59 14.75 2 14.75H7.34003C8.39003 14.75 9.25 15.61 9.25 16.66V17.94C9.25 18.35 8.91 18.69 8.5 18.69Z"
        fill="currentColor"
      />
      <Path
        d="M3.21945 17.4697C3.02945 17.4697 2.83948 17.3997 2.68948 17.2497L1.46945 16.0298C1.17945 15.7398 1.17945 15.2597 1.46945 14.9697L2.68948 13.7497C2.97948 13.4597 3.45948 13.4597 3.74948 13.7497C4.03948 14.0397 4.03948 14.5197 3.74948 14.8097L3.05948 15.4997L3.74948 16.1897C4.03948 16.4797 4.03948 16.9597 3.74948 17.2497C3.59948 17.3997 3.40945 17.4697 3.21945 17.4697Z"
        fill="currentColor"
      />
      <Path
        d="M8.5 21.5298H3.15997C2.10997 21.5298 1.25 20.6698 1.25 19.6198V18.3398C1.25 17.9298 1.59 17.5898 2 17.5898C2.41 17.5898 2.75 17.9298 2.75 18.3398V19.6198C2.75 19.8398 2.92997 20.0298 3.15997 20.0298H8.5C8.91 20.0298 9.25 20.3698 9.25 20.7798C9.25 21.1898 8.91 21.5298 8.5 21.5298Z"
        fill="currentColor"
      />
      <Path
        d="M7.27878 22.75C7.08878 22.75 6.89875 22.68 6.74875 22.53C6.45875 22.24 6.45875 21.7599 6.74875 21.4699L7.43875 20.78L6.74875 20.09C6.45875 19.8 6.45875 19.32 6.74875 19.03C7.03875 18.74 7.51875 18.74 7.80875 19.03L9.02878 20.25C9.31878 20.54 9.31878 21.02 9.02878 21.31L7.80875 22.53C7.66875 22.68 7.46878 22.75 7.27878 22.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MoneyChangeTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 11V9C2 5.5 4 4 7 4H17C20 4 22 5.5 22 9V15C22 18.5 20 20 17 20H12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M18.5 9.5V14.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 15.5H7.34003C7.98003 15.5 8.5 16.02 8.5 16.66V17.94"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.21997 14.2803L2 15.5002L3.21997 16.7202"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.5 20.7803H3.15997C2.51997 20.7803 2 20.2603 2 19.6203V18.3403"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.2793 22.0001L8.49927 20.7801L7.2793 19.5601"
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
  bold: MoneyChangeBold,
  broken: MoneyChangeBroken,
  bulk: MoneyChangeBulk,
  linear: MoneyChangeLinear,
  outline: MoneyChangeOutline,
  twotone: MoneyChangeTwotone,
};

export const MoneyChangeIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
