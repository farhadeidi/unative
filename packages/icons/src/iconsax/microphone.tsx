import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const MicrophoneBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.0016 21.9292C6.96156 21.9292 2.85156 17.8292 2.85156 12.7792V10.8992C2.85156 10.5092 3.17156 10.1992 3.55156 10.1992C3.93156 10.1992 4.25156 10.5192 4.25156 10.8992V12.7792C4.25156 17.0492 7.72156 20.5192 11.9916 20.5192C16.2616 20.5192 19.7316 17.0492 19.7316 12.7792V10.8992C19.7316 10.5092 20.0516 10.1992 20.4316 10.1992C20.8116 10.1992 21.1316 10.5192 21.1316 10.8992V12.7792C21.1516 17.8292 17.0416 21.9292 12.0016 21.9292Z"
        fill="currentColor"
      />
      <Path
        d="M11.9984 2C8.63844 2 5.89844 4.74 5.89844 8.1V12.79C5.89844 16.15 8.63844 18.89 11.9984 18.89C15.3584 18.89 18.0984 16.15 18.0984 12.79V8.1C18.0984 4.74 15.3584 2 11.9984 2ZM14.1784 10.59C14.1084 10.86 13.8584 11.04 13.5884 11.04C13.5384 11.04 13.4784 11.03 13.4284 11.02C12.4084 10.74 11.3284 10.74 10.3084 11.02C9.97844 11.11 9.64844 10.92 9.55844 10.59C9.46844 10.27 9.65844 9.93 9.98844 9.84C11.2184 9.5 12.5184 9.5 13.7484 9.84C14.0784 9.93 14.2684 10.26 14.1784 10.59ZM15.0284 7.82C14.9384 8.07 14.7084 8.22 14.4584 8.22C14.3884 8.22 14.3184 8.21 14.2484 8.18C12.7184 7.62 11.0384 7.62 9.50844 8.18C9.18844 8.3 8.83844 8.14 8.71844 7.82C8.60844 7.51 8.76844 7.16 9.08844 7.04C10.8884 6.39 12.8684 6.39 14.6584 7.04C14.9784 7.16 15.1384 7.51 15.0284 7.82Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MicrophoneBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M6 12V13C6 16.31 8.69 19 12 19C15.31 19 18 16.31 18 13V8C18 4.69 15.31 2 12 2C8.69 2 6 4.69 6 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 11V13C3 17.97 7.03 22 12 22C16.97 22 21 17.97 21 13V11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.10938 7.48018C10.8894 6.83018 12.8294 6.83018 14.6094 7.48018"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.0293 10.4799C11.2293 10.1499 12.4993 10.1499 13.6993 10.4799"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MicrophoneBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.9996 21.9302C6.95961 21.9302 2.84961 17.8302 2.84961 12.7802V10.9002C2.84961 10.5102 3.16961 10.2002 3.54961 10.2002C3.92961 10.2002 4.24961 10.5202 4.24961 10.9002V12.7802C4.24961 17.0502 7.71961 20.5202 11.9896 20.5202C16.2596 20.5202 19.7296 17.0502 19.7296 12.7802V10.9002C19.7296 10.5102 20.0496 10.2002 20.4296 10.2002C20.8096 10.2002 21.1296 10.5202 21.1296 10.9002V12.7802C21.1496 17.8302 17.0396 21.9302 11.9996 21.9302Z"
        fill="currentColor"
      />
      <Path
        d="M12.0004 2C8.64039 2 5.90039 4.74 5.90039 8.1V12.79C5.90039 16.15 8.64039 18.89 12.0004 18.89C15.3604 18.89 18.1004 16.15 18.1004 12.79V8.1C18.1004 4.74 15.3604 2 12.0004 2ZM14.1804 10.59C14.1104 10.86 13.8604 11.04 13.5904 11.04C13.5404 11.04 13.4804 11.03 13.4304 11.02C12.4104 10.74 11.3304 10.74 10.3104 11.02C9.98039 11.11 9.65039 10.92 9.56039 10.59C9.47039 10.27 9.66039 9.93 9.99039 9.84C11.2204 9.5 12.5204 9.5 13.7504 9.84C14.0804 9.93 14.2704 10.26 14.1804 10.59ZM15.0304 7.82C14.9404 8.07 14.7104 8.22 14.4604 8.22C14.3904 8.22 14.3204 8.21 14.2504 8.18C12.7204 7.62 11.0404 7.62 9.51039 8.18C9.19039 8.3 8.84039 8.14 8.72039 7.82C8.61039 7.51 8.77039 7.16 9.09039 7.04C10.8904 6.39 12.8704 6.39 14.6604 7.04C14.9804 7.16 15.1404 7.51 15.0304 7.82Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MicrophoneLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 19C15.31 19 18 16.31 18 13V8C18 4.69 15.31 2 12 2C8.69 2 6 4.69 6 8V13C6 16.31 8.69 19 12 19Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 11V13C3 17.97 7.03 22 12 22C16.97 22 21 17.97 21 13V11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.11011 7.47993C10.8901 6.82993 12.8301 6.82993 14.6101 7.47993"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.03 10.4799C11.23 10.1499 12.5 10.1499 13.7 10.4799"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MicrophoneOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 19.75C8.28 19.75 5.25 16.72 5.25 13V8C5.25 4.28 8.28 1.25 12 1.25C15.72 1.25 18.75 4.28 18.75 8V13C18.75 16.72 15.72 19.75 12 19.75ZM12 2.75C9.11 2.75 6.75 5.1 6.75 8V13C6.75 15.9 9.11 18.25 12 18.25C14.89 18.25 17.25 15.9 17.25 13V8C17.25 5.1 14.89 2.75 12 2.75Z"
        fill="currentColor"
      />
      <Path
        d="M12 22.75C6.62 22.75 2.25 18.38 2.25 13V11C2.25 10.59 2.59 10.25 3 10.25C3.41 10.25 3.75 10.59 3.75 11V13C3.75 17.55 7.45 21.25 12 21.25C16.55 21.25 20.25 17.55 20.25 13V11C20.25 10.59 20.59 10.25 21 10.25C21.41 10.25 21.75 10.59 21.75 11V13C21.75 18.38 17.38 22.75 12 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M14.6099 8.22988C14.5299 8.22988 14.4399 8.21988 14.3499 8.18988C12.7399 7.60988 10.9699 7.60988 9.35988 8.18988C8.97988 8.32988 8.54988 8.12988 8.40988 7.73988C8.26988 7.34988 8.46988 6.91988 8.85988 6.77988C10.7999 6.07988 12.9299 6.07988 14.8699 6.77988C15.2599 6.91988 15.4599 7.34988 15.3199 7.73988C15.2099 8.04988 14.9199 8.22988 14.6099 8.22988Z"
        fill="currentColor"
      />
      <Path
        d="M13.6999 11.23C13.6399 11.23 13.5699 11.22 13.4999 11.2C12.4299 10.91 11.2999 10.91 10.2299 11.2C9.81992 11.31 9.41992 11.07 9.30992 10.67C9.19992 10.27 9.43992 9.85998 9.83992 9.74998C11.1699 9.38998 12.5699 9.38998 13.8999 9.74998C14.2999 9.85998 14.5399 10.27 14.4299 10.67C14.3299 11.02 14.0299 11.23 13.6999 11.23Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MicrophoneTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 19C15.31 19 18 16.31 18 13V8C18 4.69 15.31 2 12 2C8.69 2 6 4.69 6 8V13C6 16.31 8.69 19 12 19Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M3 11V13C3 17.97 7.03 22 12 22C16.97 22 21 17.97 21 13V11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M9.10938 7.48018C10.8894 6.83018 12.8294 6.83018 14.6094 7.48018"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M10.0293 10.4799C11.2293 10.1499 12.4993 10.1499 13.6993 10.4799"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: MicrophoneBold,
  broken: MicrophoneBroken,
  bulk: MicrophoneBulk,
  linear: MicrophoneLinear,
  outline: MicrophoneOutline,
  twotone: MicrophoneTwotone,
};

export const MicrophoneIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default MicrophoneIcon;
