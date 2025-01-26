import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const BubbleBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.5909 1.75C12.6209 1.75 10.2109 4.16 10.2109 7.13C10.2109 10.1 12.6209 12.51 15.5909 12.51C18.5609 12.51 20.9709 10.1 20.9709 7.13C20.9709 4.16 18.5609 1.75 15.5909 1.75Z"
        fill="currentColor"
      />
      <Path
        d="M6.3593 13.0312C4.5293 13.0312 3.0293 14.5213 3.0293 16.3613C3.0293 18.2013 4.5193 19.6913 6.3593 19.6913C8.1893 19.6913 9.6893 18.2013 9.6893 16.3613C9.6893 14.5213 8.1893 13.0312 6.3593 13.0312Z"
        fill="currentColor"
      />
      <Path
        d="M16.6205 16.6211C15.0705 16.6211 13.8105 17.8811 13.8105 19.4311C13.8105 20.9811 15.0705 22.2411 16.6205 22.2411C18.1705 22.2411 19.4305 20.9811 19.4305 19.4311C19.4305 17.8811 18.1705 16.6211 16.6205 16.6211Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BubbleBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.5909 12.26C18.4209 12.26 20.7209 9.96 20.7209 7.13C20.7209 4.3 18.4209 2 15.5909 2C12.7609 2 10.4609 4.3 10.4609 7.13C10.4609 8.43 10.9409 9.60999 11.7409 10.51"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.2793 16.36C3.2793 18.06 4.65928 19.44 6.35928 19.44C8.05928 19.44 9.4393 18.06 9.4393 16.36C9.4393 14.66 8.05928 13.28 6.35928 13.28"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.6205 21.9999C18.0344 21.9999 19.1805 20.8537 19.1805 19.4399C19.1805 18.026 18.0344 16.8799 16.6205 16.8799C15.2067 16.8799 14.0605 18.026 14.0605 19.4399C14.0605 20.8537 15.2067 21.9999 16.6205 21.9999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
    </Svg>
  );
};

const BubbleBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.5909 1.75C12.6209 1.75 10.2109 4.16 10.2109 7.13C10.2109 10.1 12.6209 12.51 15.5909 12.51C18.5609 12.51 20.9709 10.1 20.9709 7.13C20.9709 4.16 18.5609 1.75 15.5909 1.75Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M6.35928 13.03C4.52928 13.03 3.0293 14.52 3.0293 16.36C3.0293 18.2 4.51928 19.69 6.35928 19.69C8.18928 19.69 9.6893 18.2 9.6893 16.36C9.6893 14.52 8.18928 13.03 6.35928 13.03Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M16.6205 16.6201C15.0705 16.6201 13.8105 17.8801 13.8105 19.4301C13.8105 20.9801 15.0705 22.2401 16.6205 22.2401C18.1705 22.2401 19.4305 20.9801 19.4305 19.4301C19.4305 17.8801 18.1705 16.6201 16.6205 16.6201Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BubbleLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.59 12.26C18.4232 12.26 20.72 9.96323 20.72 7.13C20.72 4.29678 18.4232 2 15.59 2C12.7567 2 10.46 4.29678 10.46 7.13C10.46 9.96323 12.7567 12.26 15.59 12.26Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <Path
        d="M6.36002 19.44C8.06105 19.44 9.44003 18.0611 9.44003 16.36C9.44003 14.659 8.06105 13.28 6.36002 13.28C4.65898 13.28 3.28003 14.659 3.28003 16.36C3.28003 18.0611 4.65898 19.44 6.36002 19.44Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <Path
        d="M16.62 22C18.0338 22 19.18 20.8539 19.18 19.44C19.18 18.0262 18.0338 16.88 16.62 16.88C15.2061 16.88 14.06 18.0262 14.06 19.44C14.06 20.8539 15.2061 22 16.62 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
    </Svg>
  );
};

const BubbleOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.5909 13.01C12.3509 13.01 9.71094 10.37 9.71094 7.13C9.71094 3.89 12.3509 1.25 15.5909 1.25C18.8309 1.25 21.4709 3.89 21.4709 7.13C21.4709 10.37 18.8309 13.01 15.5909 13.01ZM15.5909 2.75C13.1809 2.75 11.2109 4.71 11.2109 7.13C11.2109 9.55 13.1709 11.51 15.5909 11.51C18.0109 11.51 19.9709 9.55 19.9709 7.13C19.9709 4.71 18.0009 2.75 15.5909 2.75Z"
        fill="currentColor"
      />
      <Path
        d="M6.36124 20.19C4.25124 20.19 2.53125 18.47 2.53125 16.36C2.53125 14.25 4.25124 12.53 6.36124 12.53C8.47124 12.53 10.1913 14.25 10.1913 16.36C10.1913 18.47 8.47124 20.19 6.36124 20.19ZM6.36124 14.03C5.08124 14.03 4.03125 15.07 4.03125 16.36C4.03125 17.64 5.07124 18.69 6.36124 18.69C7.64124 18.69 8.69125 17.65 8.69125 16.36C8.69125 15.08 7.64124 14.03 6.36124 14.03Z"
        fill="currentColor"
      />
      <Path
        d="M16.6205 22.7499C14.7905 22.7499 13.3105 21.2599 13.3105 19.4399C13.3105 17.6099 14.8005 16.1299 16.6205 16.1299C18.4405 16.1299 19.9305 17.6199 19.9305 19.4399C19.9305 21.2599 18.4405 22.7499 16.6205 22.7499ZM16.6205 17.6199C15.6205 17.6199 14.8105 18.4299 14.8105 19.4299C14.8105 20.4299 15.6205 21.2399 16.6205 21.2399C17.6205 21.2399 18.4305 20.4299 18.4305 19.4299C18.4305 18.4399 17.6205 17.6199 16.6205 17.6199Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BubbleTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.5909 12.26C18.4242 12.26 20.7209 9.96323 20.7209 7.13C20.7209 4.29678 18.4242 2 15.5909 2C12.7577 2 10.4609 4.29678 10.4609 7.13C10.4609 9.96323 12.7577 12.26 15.5909 12.26Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <Path
        opacity="0.4"
        d="M6.35928 19.4398C8.06032 19.4398 9.4393 18.0608 9.4393 16.3598C9.4393 14.6587 8.06032 13.2798 6.35928 13.2798C4.65825 13.2798 3.2793 14.6587 3.2793 16.3598C3.2793 18.0608 4.65825 19.4398 6.35928 19.4398Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <Path
        opacity="0.4"
        d="M16.6205 21.9999C18.0344 21.9999 19.1805 20.8537 19.1805 19.4399C19.1805 18.026 18.0344 16.8799 16.6205 16.8799C15.2067 16.8799 14.0605 18.026 14.0605 19.4399C14.0605 20.8537 15.2067 21.9999 16.6205 21.9999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: BubbleBold,
  broken: BubbleBroken,
  bulk: BubbleBulk,
  linear: BubbleLinear,
  outline: BubbleOutline,
  twotone: BubbleTwotone,
};

export const BubbleIcon = ({ variant = "linear", ...props }: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
