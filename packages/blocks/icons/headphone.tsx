import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const HeadphoneBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2.74982 18.6508C2.33982 18.6508 1.99982 18.3108 1.99982 17.9008V12.2008C1.94982 9.49078 2.95982 6.93078 4.83982 5.01078C6.71982 3.10078 9.23982 2.05078 11.9498 2.05078C17.4898 2.05078 21.9998 6.56078 21.9998 12.1008V17.8008C21.9998 18.2108 21.6598 18.5508 21.2498 18.5508C20.8398 18.5508 20.4998 18.2108 20.4998 17.8008V12.1008C20.4998 7.39078 16.6698 3.55078 11.9498 3.55078C9.63982 3.55078 7.49982 4.44078 5.90982 6.06078C4.30982 7.69078 3.45982 9.86078 3.49982 12.1808V17.8908C3.49982 18.3108 3.16982 18.6508 2.74982 18.6508Z"
        fill="currentColor"
      />
      <Path
        d="M5.94 12.4492H5.81C3.71 12.4492 2 14.1592 2 16.2592V18.1392C2 20.2392 3.71 21.9492 5.81 21.9492H5.94C8.04 21.9492 9.75 20.2392 9.75 18.1392V16.2592C9.75 14.1592 8.04 12.4492 5.94 12.4492Z"
        fill="currentColor"
      />
      <Path
        d="M18.19 12.4492H18.06C15.96 12.4492 14.25 14.1592 14.25 16.2592V18.1392C14.25 20.2392 15.96 21.9492 18.06 21.9492H18.19C20.29 21.9492 22 20.2392 22 18.1392V16.2592C22 14.1592 20.29 12.4492 18.19 12.4492Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HeadphoneBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2.00005 12.22C1.89005 6.60005 6.33005 2.05005 11.95 2.05005C17.57 2.05005 22 6.60005 22 12.11V18.2701C22 20.2201 20.38 21.84 18.43 21.84C16.48 21.84 14.86 20.2201 14.86 18.2701V15.46C14.86 14.49 15.62 13.62 16.7 13.62C17.67 13.62 18.54 14.38 18.54 15.46V18.49"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.46 18.49V15.57C5.46 14.6 6.22 13.73 7.3 13.73C8.27 13.73 9.14 14.49 9.14 15.57V18.38C9.14 20.33 7.52 21.95 5.57 21.95C3.62 21.95 2 20.32 2 18.38V16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const HeadphoneBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2.74982 18.65C2.33982 18.65 1.99982 18.31 1.99982 17.9V12.2C1.94982 9.49005 2.95982 6.93005 4.83982 5.01005C6.71982 3.10005 9.23982 2.05005 11.9498 2.05005C17.4898 2.05005 21.9998 6.56005 21.9998 12.1V17.8C21.9998 18.21 21.6598 18.55 21.2498 18.55C20.8398 18.55 20.4998 18.21 20.4998 17.8V12.1C20.4998 7.39005 16.6698 3.55005 11.9498 3.55005C9.63982 3.55005 7.49982 4.44005 5.90982 6.06005C4.30982 7.69005 3.45982 9.86005 3.49982 12.18V17.89C3.49982 18.31 3.16982 18.65 2.74982 18.65Z"
        fill="currentColor"
      />
      <Path
        d="M5.94 12.45H5.81C3.71 12.45 2 14.16 2 16.26V18.14C2 20.24 3.71 21.95 5.81 21.95H5.94C8.04 21.95 9.75 20.24 9.75 18.14V16.26C9.75 14.16 8.04 12.45 5.94 12.45Z"
        fill="currentColor"
      />
      <Path
        d="M18.19 12.45H18.06C15.96 12.45 14.25 14.16 14.25 16.26V18.14C14.25 20.24 15.96 21.95 18.06 21.95H18.19C20.29 21.95 22 20.24 22 18.14V16.26C22 14.16 20.29 12.45 18.19 12.45Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HeadphoneLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M5.46005 18.49V15.57C5.46005 14.6 6.22005 13.73 7.30005 13.73C8.27005 13.73 9.14005 14.49 9.14005 15.57V18.38C9.14005 20.33 7.52005 21.9501 5.57005 21.9501C3.62005 21.9501 2.00005 20.32 2.00005 18.38V12.22C1.89005 6.60005 6.33005 2.05005 11.95 2.05005C17.57 2.05005 22 6.60005 22 12.11V18.2701C22 20.2201 20.38 21.84 18.43 21.84C16.48 21.84 14.86 20.2201 14.86 18.2701V15.46C14.86 14.49 15.62 13.62 16.7 13.62C17.67 13.62 18.54 14.38 18.54 15.46V18.49"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const HeadphoneOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M5.56971 22.7001C3.22971 22.7001 1.24971 20.72 1.24971 18.38V12.22C1.19971 9.30005 2.27971 6.55005 4.29971 4.49005C6.31971 2.44005 9.02971 1.30005 11.9497 1.30005C17.9097 1.30005 22.7497 6.15005 22.7497 12.1V18.26C22.7497 20.64 20.8097 22.58 18.4297 22.58C16.0897 22.58 14.1097 20.6 14.1097 18.26V15.45C14.1097 14 15.2497 12.86 16.6997 12.86C18.1497 12.86 19.2897 14 19.2897 15.45V18.48C19.2897 18.89 18.9497 19.23 18.5397 19.23C18.1297 19.23 17.7897 18.89 17.7897 18.48V15.45C17.7897 14.77 17.2397 14.36 16.6997 14.36C16.0197 14.36 15.6097 14.91 15.6097 15.45V18.26C15.6097 19.7901 16.8997 21.08 18.4297 21.08C19.9597 21.08 21.2497 19.7901 21.2497 18.26V12.1C21.2497 6.97005 17.0797 2.80005 11.9497 2.80005C9.43971 2.80005 7.10971 3.77005 5.36971 5.54005C3.62971 7.31005 2.69971 9.68005 2.74971 12.2V18.38C2.74971 19.91 4.03971 21.2001 5.56971 21.2001C7.09971 21.2001 8.38971 19.91 8.38971 18.38V15.57C8.38971 14.89 7.83971 14.48 7.29971 14.48C6.61971 14.48 6.20971 15.03 6.20971 15.57V18.49C6.20971 18.9 5.86971 19.24 5.45971 19.24C5.04971 19.24 4.70971 18.9 4.70971 18.49V15.57C4.70971 14.12 5.84971 12.98 7.29971 12.98C8.74971 12.98 9.88971 14.12 9.88971 15.57V18.38C9.88971 20.72 7.90971 22.7001 5.56971 22.7001Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HeadphoneTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M5.46005 18.4898V15.5698C5.46005 14.5998 6.22005 13.7298 7.30005 13.7298C8.27005 13.7298 9.14005 14.4898 9.14005 15.5698V18.3798C9.14005 20.3298 7.52005 21.9498 5.57005 21.9498C3.62005 21.9498 2.00005 20.3198 2.00005 18.3798V12.2198C1.89005 6.5998 6.33005 2.0498 11.95 2.0498C17.57 2.0498 22 6.5998 22 12.1098V18.2698C22 20.2198 20.38 21.8398 18.43 21.8398C16.48 21.8398 14.86 20.2198 14.86 18.2698V15.4598C14.86 14.4898 15.62 13.6198 16.7 13.6198C17.67 13.6198 18.54 14.3798 18.54 15.4598V18.4898"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: HeadphoneBold,
  broken: HeadphoneBroken,
  bulk: HeadphoneBulk,
  linear: HeadphoneLinear,
  outline: HeadphoneOutline,
  twotone: HeadphoneTwotone,
};

export const HeadphoneIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
