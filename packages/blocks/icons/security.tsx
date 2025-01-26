import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const SecurityBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.3281 5.67L6.58813 17.41C6.14813 17.85 5.40813 17.79 5.04813 17.27C3.80813 15.46 3.07812 13.32 3.07812 11.12V6.73C3.07812 5.91 3.69813 4.98 4.45813 4.67L10.0281 2.39C11.2881 1.87 12.6881 1.87 13.9481 2.39L17.9981 4.04C18.6581 4.31 18.8281 5.17 18.3281 5.67Z"
        fill="currentColor"
      />
      <Path
        d="M19.27 7.04159C19.92 6.49159 20.91 6.96159 20.91 7.81159V11.1216C20.91 16.0116 17.36 20.5916 12.51 21.9316C12.18 22.0216 11.82 22.0216 11.48 21.9316C10.06 21.5316 8.74001 20.8616 7.61001 19.9816C7.13001 19.6116 7.08001 18.9116 7.50001 18.4816C9.68001 16.2516 16.06 9.75159 19.27 7.04159Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SecurityBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.08984 6.60992C3.08984 5.78992 3.70986 4.85992 4.47986 4.54992L10.0498 2.26995C11.2998 1.75995 12.7098 1.75995 13.9598 2.26995L19.5298 4.54992C20.2898 4.85992 20.9199 5.78992 20.9199 6.60992V10.9999C20.9199 15.8899 17.3698 20.4699 12.5198 21.8099C12.1898 21.8999 11.8298 21.8999 11.4998 21.8099C6.64985 20.4699 3.09985 15.8899 3.09985 10.9999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const SecurityBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.3301 5.67L6.59009 17.41C6.15009 17.85 5.41008 17.79 5.05008 17.27C3.81008 15.46 3.08008 13.32 3.08008 11.12V6.73C3.08008 5.91 3.70008 4.98 4.46008 4.67L10.0301 2.39C11.2901 1.87 12.6901 1.87 13.9501 2.39L17.9901 4.03999C18.6601 4.30999 18.8301 5.17 18.3301 5.67Z"
        fill="currentColor"
      />
      <Path
        d="M19.27 7.04012C19.92 6.49012 20.91 6.96011 20.91 7.81011V11.1201C20.91 16.0101 17.36 20.5901 12.51 21.9301C12.18 22.0201 11.82 22.0201 11.48 21.9301C10.06 21.5301 8.74 20.8601 7.61 19.9801C7.13 19.6101 7.08001 18.9101 7.50001 18.4801C9.68001 16.2501 16.06 9.75012 19.27 7.04012Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SecurityLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.91 11.12C20.91 16.01 17.36 20.59 12.51 21.93C12.18 22.02 11.82 22.02 11.49 21.93C6.63996 20.59 3.08997 16.01 3.08997 11.12V6.72997C3.08997 5.90997 3.70998 4.97998 4.47998 4.66998L10.05 2.39001C11.3 1.88001 12.71 1.88001 13.96 2.39001L19.53 4.66998C20.29 4.97998 20.92 5.90997 20.92 6.72997L20.91 11.12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const SecurityOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.9998 22.7501C11.7598 22.7501 11.5199 22.7201 11.2899 22.6501C6.09986 21.2201 2.33984 16.37 2.33984 11.11V6.72003C2.33984 5.60003 3.14985 4.39008 4.18985 3.96008L9.75986 1.68005C11.2099 1.09005 12.7998 1.09005 14.2398 1.68005L19.8098 3.96008C20.8498 4.39008 21.6599 5.60003 21.6599 6.72003V11.11C21.6599 16.36 17.8898 21.2101 12.7098 22.6501C12.4798 22.7201 12.2398 22.7501 11.9998 22.7501ZM11.9998 2.75006C11.4298 2.75006 10.8698 2.86007 10.3298 3.08007L4.75986 5.36004C4.27986 5.56004 3.83984 6.21004 3.83984 6.73004V11.1201C3.83984 15.7101 7.13985 19.9501 11.6898 21.2101C11.8898 21.2701 12.1098 21.2701 12.3098 21.2101C16.8598 19.9501 20.1599 15.7101 20.1599 11.1201V6.73004C20.1599 6.21004 19.7198 5.56004 19.2398 5.36004L13.6699 3.08007C13.1299 2.86007 12.5698 2.75006 11.9998 2.75006Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SecurityTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.9099 11.1198C20.9099 16.0098 17.3599 20.5898 12.5099 21.9298C12.1799 22.0198 11.8198 22.0198 11.4898 21.9298C6.63984 20.5898 3.08984 16.0098 3.08984 11.1198V6.72979C3.08984 5.90979 3.70986 4.97979 4.47986 4.66979L10.0498 2.38982C11.2998 1.87982 12.7098 1.87982 13.9598 2.38982L19.5298 4.66979C20.2898 4.97979 20.9199 5.90979 20.9199 6.72979L20.9099 11.1198Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.0399 2.38982C11.2899 1.87982 12.6999 1.87982 13.9499 2.38982L19.5198 4.66979C20.2798 4.97979 20.9099 5.90979 20.9099 6.72979V11.1198C20.9099 16.0098 17.3599 20.5898 12.5099 21.9298C12.1799 22.0198 11.8198 22.0198 11.4898 21.9298C6.63984 20.5898 3.08984 16.0098 3.08984 11.1198"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: SecurityBold,
  broken: SecurityBroken,
  bulk: SecurityBulk,
  linear: SecurityLinear,
  outline: SecurityOutline,
  twotone: SecurityTwotone,
};

export const SecurityIcon = ({ variant = "linear", ...props }: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
